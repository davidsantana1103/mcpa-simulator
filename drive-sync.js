// Google Drive progress sync for the MCPA Exam Simulator.
//
// Uses Google Identity Services (GIS) "token model": the browser obtains a
// short-lived OAuth access token for the `drive.file` scope and talks to the
// Drive REST API directly. There is no backend and no client secret.
//
// The progress file is created by this app, so `drive.file` grants access to it
// (and only to files this app created). It appears in the user's "My Drive" and
// the user may delete it; local progress always remains in localStorage.
//
// Conflict policy: snapshots are never merged. Connecting migrates local
// progress up when Drive is empty, adopts Drive when local is empty, and asks
// the user to choose when both sides hold different progress.
//
// Requires an OAuth 2.0 Web application client ID with this app's origin
// registered under "Authorized JavaScript origins". See README "Google Drive
// Sync" for setup.
(function () {
  'use strict';

  // ---- Configuration -------------------------------------------------------
  // Paste your Google OAuth 2.0 "Web application" client ID here.
  const GOOGLE_CLIENT_ID = '1073823961546-8o0uf7tfj5k2tl9c7eta8qobrqbmmp59.apps.googleusercontent.com';

  const SCOPE = 'https://www.googleapis.com/auth/drive.file';
  const FILE_NAME = 'mcpa-simulator-progress.json';
  const FILE_MIME = 'application/json';
  // Drive allows duplicate file names, so the name is only a human-friendly
  // label. This app-property tag is the real identity used to find our file.
  const APP_MARKER_KEY = 'mcpaProgress';
  const APP_MARKER_VALUE = '1';
  const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files';
  const DRIVE_FILES_URL = 'https://www.googleapis.com/drive/v3/files';
  const GIS_SRC = 'https://accounts.google.com/gsi/client';
  const CONNECTED_KEY = 'mcpa_drive_connected_v1';
  const UPLOAD_DEBOUNCE_MS = 1500;

  // ---- State ---------------------------------------------------------------
  let tokenClient = null;
  let accessToken = null;
  let tokenExpiresAt = 0;
  let connected = false;   // user opted in on this device
  let syncing = false;
  let needsReauth = false; // last silent refresh failed; ask before retrying
  let lastError = '';
  let fileId = null;
  let gisLoading = null;
  let uploadTimer = null;
  let applyingRemote = false; // suppress uploads while applying remote state
  let pendingConflict = null; // { remote, local } awaiting the user's choice
  let mergedOnPull = false;   // a duplicate merge already folded local progress in

  let hooks = {
    getPayload: () => null,
    applyPayload: () => {},
    onStatus: () => {}
  };

  // ---- Helpers -------------------------------------------------------------
  function hasToken() {
    return !!accessToken && Date.now() < tokenExpiresAt;
  }

  function report(status, detail) {
    try { hooks.onStatus(status, detail || {}); } catch (e) { /* ignore */ }
  }

  function loadGis() {
    if (window.google && window.google.accounts && window.google.accounts.oauth2) {
      return Promise.resolve();
    }
    if (gisLoading) return gisLoading;
    gisLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = GIS_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
      document.head.appendChild(script);
    });
    return gisLoading;
  }

  // Ask Google for an access token. `interactive` shows the consent popup when
  // true; when false the request is silent and rejects if interaction is needed.
  function requestToken(interactive) {
    return loadGis().then(() => new Promise((resolve, reject) => {
      if (!GOOGLE_CLIENT_ID) {
        reject(new Error('No Google OAuth client ID configured. See README.'));
        return;
      }
      if (!tokenClient) {
        tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: SCOPE,
          callback: () => {},          // replaced per request
          error_callback: () => {}
        });
      }
      tokenClient.callback = (resp) => {
        if (!resp || resp.error) {
          reject(new Error((resp && resp.error) || 'Authorization failed'));
          return;
        }
        accessToken = resp.access_token;
        const ttl = (parseInt(resp.expires_in, 10) || 3600) * 1000;
        tokenExpiresAt = Date.now() + ttl - 60000; // refresh a minute early
        resolve(accessToken);
      };
      tokenClient.error_callback = (err) => {
        reject(new Error((err && (err.type || err.message)) || 'Authorization cancelled'));
      };
      try {
        tokenClient.requestAccessToken({ prompt: interactive ? 'consent' : '' });
      } catch (e) {
        reject(e);
      }
    }));
  }

  // Returns a valid token, refreshing silently first and falling back to an
  // interactive prompt only when the caller allows it.
  function ensureToken(interactive) {
    if (hasToken()) return Promise.resolve(accessToken);
    return requestToken(false).catch((err) => {
      if (!interactive) throw err;
      return requestToken(true);
    });
  }

  function driveFetch(url, options) {
    const opts = options || {};
    const headers = Object.assign({}, opts.headers, {
      Authorization: 'Bearer ' + accessToken
    });
    return fetch(url, Object.assign({}, opts, { headers })).then((res) => {
      if (res.status === 401) {
        accessToken = null;
        tokenExpiresAt = 0;
        const err = new Error('unauthorized');
        err.code = 401;
        throw err;
      }
      return res;
    });
  }

  // ---- Drive operations ----------------------------------------------------
  // Every file this app created: tagged with our marker, plus any legacy file
  // that carries the old well-known name (pre-marker versions). Newest first.
  function findAppFiles() {
    const fields = 'files(id,modifiedTime,name,appProperties)';
    const markerQ = `appProperties has { key='${APP_MARKER_KEY}' and value='${APP_MARKER_VALUE}' } and trashed=false`;
    const nameQ = `name='${FILE_NAME}' and trashed=false`;
    const buildUrl = (q) =>
      `${DRIVE_FILES_URL}?spaces=drive&q=${encodeURIComponent(q)}&orderBy=modifiedTime desc&fields=${encodeURIComponent(fields)}`;

    const query = (q) => driveFetch(buildUrl(q))
      .then((res) => res.json())
      .then((data) => (data && data.files) || [])
      .catch(() => []);

    return Promise.all([query(markerQ), query(nameQ)]).then((groups) => {
      const byId = new Map();
      groups.forEach((files) => files.forEach((f) => {
        if (f && f.id && !byId.has(f.id)) byId.set(f.id, f);
      }));
      return Array.from(byId.values())
        .sort((a, b) => (b.modifiedTime || '').localeCompare(a.modifiedTime || ''));
    });
  }

  function readFile(fileIdToRead) {
    const url = `${DRIVE_FILES_URL}/${fileIdToRead}?alt=media`;
    return driveFetch(url).then((res) => res.json());
  }

  function createFile(payload) {
    const metadata = {
      name: FILE_NAME,
      mimeType: FILE_MIME,
      appProperties: { [APP_MARKER_KEY]: APP_MARKER_VALUE }
    };
    const boundary = 'mcpa' + Date.now();
    const body =
      `--${boundary}\r\n` +
      'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
      JSON.stringify(metadata) + '\r\n' +
      `--${boundary}\r\n` +
      `Content-Type: ${FILE_MIME}\r\n\r\n` +
      JSON.stringify(payload) + '\r\n' +
      `--${boundary}--`;
    return driveFetch(`${UPLOAD_URL}?uploadType=multipart&fields=id`, {
      method: 'POST',
      headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
      body
    }).then((res) => res.json()).then((data) => {
      fileId = data.id;
      return fileId;
    });
  }

  // Tag an existing (legacy) file with our marker so it is found by identity.
  function tagFile(id) {
    return driveFetch(`${DRIVE_FILES_URL}/${id}?fields=id`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appProperties: { [APP_MARKER_KEY]: APP_MARKER_VALUE } })
    }).then((res) => res.json());
  }

  function trashFile(id) {
    return driveFetch(`${DRIVE_FILES_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trashed: true })
    }).then((res) => res.json());
  }

  function updateFile(payload) {
    return driveFetch(`${UPLOAD_URL}/${fileId}?uploadType=media`, {
      method: 'PATCH',
      headers: { 'Content-Type': FILE_MIME },
      body: JSON.stringify(payload)
    }).then((res) => res.json());
  }

  function writeRemote(payload) {
    if (!fileId) return createFile(payload);
    return updateFile(payload).catch((err) => {
      if (err.code === 404) { fileId = null; return createFile(payload); }
      throw err;
    });
  }

  // ---- Reconciliation ------------------------------------------------------
  // Progress is never merged field-by-field. Two snapshots are either the same,
  // or the user is asked which one to keep. Silently unioning answers would
  // overwrite one side's values for every question id both sides answered.

  function normalize(payload) {
    if (!payload || typeof payload !== 'object') return null;
    const answers = (payload.userAnswers && typeof payload.userAnswers === 'object')
      ? payload.userAnswers : {};
    return {
      version: 1,
      updatedAt: payload.updatedAt || 0,
      userAnswers: answers,
      flagged: Array.isArray(payload.flagged) ? payload.flagged : [],
      studied: Array.isArray(payload.studied) ? payload.studied : [],
      theme: typeof payload.theme === 'string' ? payload.theme : 'light',
      examQuestionCount: payload.examQuestionCount || 60,
      examAreaFilter: Array.isArray(payload.examAreaFilter) ? payload.examAreaFilter : [],
      examSession: payload.examSession || null
    };
  }

  function isEmptyProgress(p) {
    return !p || Object.keys(p.userAnswers || {}).length === 0;
  }

  // True when both snapshots carry the same progress (ignoring timestamps).
  function sameProgress(a, b) {
    const na = normalize(a), nb = normalize(b);
    if (!na || !nb) return false;
    const key = (p) => JSON.stringify({
      a: Object.keys(p.userAnswers).sort().map((k) => [k, p.userAnswers[k]]),
      f: p.flagged.slice().sort(),
      d: p.studied.slice().sort(),
      c: p.examQuestionCount,
      e: p.examAreaFilter.slice().sort(),
      s: p.examSession ? { active: !!p.examSession.active, q: p.examSession.questionCount || 0,
                           start: p.examSession.startTime || 0 } : null
    });
    return key(na) === key(nb);
  }

  function setConnected(value) {
    connected = value;
    try {
      if (value) localStorage.setItem(CONNECTED_KEY, '1');
      else localStorage.removeItem(CONNECTED_KEY);
    } catch (e) { /* ignore */ }
  }

  // Read every progress file, merge them and clean up the duplicates.
  //
  // One-time migration for users who accumulated several files (the old code
  // matched by name, which Drive allows to repeat). Merge keeps as much as
  // possible: union of answered questions, newest value wins on conflicts,
  // flags/studied unioned, the most recent exam session kept. The merged result
  // is written back to a single file; the others are trashed.
  function pullRemote() {
    return findAppFiles().then((files) => {
      if (!files.length) { fileId = null; return null; }

      fileId = files[0].id; // canonical = most recently modified
      const rest = files.slice(1);
      // Ensure the canonical file carries our marker (legacy files may not).
      if (!files[0].appProperties || files[0].appProperties[APP_MARKER_KEY] !== APP_MARKER_VALUE) {
        tagFile(files[0].id).catch(() => {});
      }

      if (!rest.length) {
        return readFile(fileId).then((remote) => normalize(remote));
      }

      return Promise.all(rest.map((f) => readFile(f.id).catch(() => null)))
        .then((others) => {
          const snapshots = others.map(normalize).filter(Boolean);
          // Read the canonical file last so it wins tie-breaks.
          return readFile(fileId).then((canonical) => {
            // Fold the local snapshot into the merge too, so consolidating the
            // duplicates never loses local progress and needs no conflict prompt.
            const local = normalize(hooks.getPayload());
            if (local) snapshots.push(local);
            snapshots.push(normalize(canonical));
            const merged = mergeSnapshots(snapshots);
            // Write the merged snapshot back, then trash the duplicates.
            return updateFile(merged)
              .catch(() => {})
              .then(() => Promise.all(rest.map((f) => trashFile(f.id).catch(() => {}))))
              .then(() => { mergedOnPull = true; return merged; });
          });
        });
    });
  }

  // Merge snapshots, preserving as many answered questions as possible.
  // Answer conflicts are resolved by the snapshot's updatedAt (newest wins);
  // ties fall back to the last snapshot in the list.
  function mergeSnapshots(snapshots) {
    const list = snapshots.filter(Boolean);
    if (!list.length) return null;

    const newest = list.reduce((a, b) => (b.updatedAt > a.updatedAt ? b : a));
    const answers = {};
    const answerStamp = {};
    const flagged = new Set();
    const studied = new Set();
    let examSession = null;

    list.forEach((snap) => {
      Object.keys(snap.userAnswers || {}).forEach((qId) => {
        const stamp = snap.updatedAt || 0;
        if (!(qId in answers) || stamp >= (answerStamp[qId] || 0)) {
          answers[qId] = snap.userAnswers[qId];
          answerStamp[qId] = stamp;
        }
      });
      (snap.flagged || []).forEach((id) => flagged.add(id));
      (snap.studied || []).forEach((id) => studied.add(id));
      const es = snap.examSession;
      if (es) {
        const cur = examSession;
        const esTime = es.startTime || 0;
        const curTime = cur ? (cur.startTime || 0) : -1;
        if (!cur || esTime > curTime) examSession = es;
      }
    });

    // Any question that has an answer counts as studied.
    Object.keys(answers).forEach((qId) => {
      if (answers[qId] !== undefined && answers[qId] !== null &&
          !(Array.isArray(answers[qId]) && answers[qId].length === 0) &&
          answers[qId] !== '') {
        studied.add(qId);
      }
    });

    return {
      version: 1,
      updatedAt: Math.max.apply(null, list.map((s) => s.updatedAt || 0)),
      userAnswers: answers,
      flagged: Array.from(flagged),
      studied: Array.from(studied),
      theme: newest.theme,
      examQuestionCount: newest.examQuestionCount,
      examAreaFilter: newest.examAreaFilter,
      examSession
    };
  }

  function applyAndUpload(payload) {
    applyingRemote = true;
    try { hooks.applyPayload(payload); } finally { applyingRemote = false; }
    return writeRemote(payload).then(() => {
      report('synced', { updatedAt: payload.updatedAt, source: 'conflict-choice' });
    });
  }

  // Decide what to do when the user opts in (first connect, reconnect, or a
  // manual pull). Never merges: identical -> no-op, one side empty -> copy it,
  // both populated and different -> ask the user.
  function reconcile() {
    if (syncing) return Promise.resolve();
    syncing = true;
    pendingConflict = null;
    return ensureToken(false)
      .then(() => pullRemote())
      .then((remote) => {
        const local = normalize(hooks.getPayload());
        if (!remote) {
          // No Drive file yet: migrate the current local progress up.
          return writeRemote(local).then(() => report('synced', { updatedAt: local.updatedAt, source: 'local-uploaded' }));
        }
        if (isEmptyProgress(local)) {
          // Nothing local to lose: adopt Drive.
          applyingRemote = true;
          try { hooks.applyPayload(remote); } finally { applyingRemote = false; }
          return report('synced', { updatedAt: remote.updatedAt, source: 'drive-loaded' });
        }
        // A duplicate merge already folded local progress in: just adopt it.
        if (mergedOnPull) {
          applyingRemote = true;
          try { hooks.applyPayload(remote); } finally { applyingRemote = false; }
          return report('synced', { updatedAt: remote.updatedAt, source: 'merged-duplicates' });
        }
        if (sameProgress(remote, local)) {
          return report('synced', { updatedAt: remote.updatedAt, source: 'in-sync' });
        }
        // Diverged with data on both sides: let the user choose.
        pendingConflict = { remote, local };
        report('conflict', { remote, local });
      })
      .catch(handleSyncError)
      .then(() => { mergedOnPull = false; syncing = false; });
  }

  // Adopt the remote snapshot without uploading (used on load while connected).
  function pullLatest() {
    if (syncing) return Promise.resolve();
    syncing = true;
    return ensureToken(false)
      .then(() => pullRemote())
      .then((remote) => {
        if (!remote) return;
        const local = normalize(hooks.getPayload());
        if (isEmptyProgress(local) || mergedOnPull) {
          applyingRemote = true;
          try { hooks.applyPayload(remote); } finally { applyingRemote = false; }
          report('synced', { updatedAt: remote.updatedAt, source: mergedOnPull ? 'merged-duplicates' : 'drive-loaded' });
        } else if (!sameProgress(remote, local)) {
          pendingConflict = { remote, local };
          report('conflict', { remote, local });
        }
      })
      .catch(handleSyncError)
      .then(() => { mergedOnPull = false; syncing = false; });
  }

  function handleSyncError(err) {
    if (err && (err.code === 401 || /interaction|consent|Authorization/i.test(err.message || ''))) {
      needsReauth = true;
      report('needs-reauth', {});
    } else {
      lastError = (err && err.message) || String(err);
      report('error', { message: lastError });
    }
  }

  function pushNow() {
    if (!connected || syncing || pendingConflict) return Promise.resolve();
    const payload = hooks.getPayload();
    if (!payload) return Promise.resolve();
    syncing = true;
    return ensureToken(false)
      .then(() => writeRemote(payload))
      .then(() => {
        needsReauth = false;
        lastError = '';
        report('synced', { updatedAt: payload.updatedAt });
      })
      .catch((err) => {
        syncing = false;
        handleSyncError(err);
      })
      .then(() => { syncing = false; });
  }

  function scheduleUpload() {
    if (!connected || applyingRemote || pendingConflict) return;
    if (uploadTimer) clearTimeout(uploadTimer);
    uploadTimer = setTimeout(() => { uploadTimer = null; pushNow(); }, UPLOAD_DEBOUNCE_MS);
  }

  // ---- Public API ----------------------------------------------------------
  const api = {
    configure(opts) {
      hooks = Object.assign({}, hooks, opts || {});
      try { connected = localStorage.getItem(CONNECTED_KEY) === '1'; } catch (e) { connected = false; }
    },

    isConnected() { return connected; },
    isConfigured() { return !!GOOGLE_CLIENT_ID; },
    getNeedsReauth() { return needsReauth; },
    getLastError() { return lastError; },

    // Called after the app has rendered. If the user previously connected,
    // refresh silently and pull the latest progress (or surface a conflict).
    init() {
      if (connected) pullLatest();
    },

    // First-time connect from the UI button (shows the Google consent popup).
    connect() {
      return ensureToken(true).then(() => {
        setConnected(true);
        needsReauth = false;
        lastError = '';
        return reconcile();
      });
    },

    disconnect() {
      setConnected(false);
      needsReauth = false;
      lastError = '';
      pendingConflict = null;
      accessToken = null;
      tokenExpiresAt = 0;
      fileId = null;
      report('disconnected', {});
    },

    // Re-authorize after the token expired (user chose "Reauthorize").
    reauth() {
      return ensureToken(true)
        .then(() => { needsReauth = false; return reconcile(); })
        .catch((err) => {
          lastError = err.message || String(err);
          report('error', { message: lastError });
        });
    },

    // The user picked a side in the conflict dialog.
    // 'drive' adopts the remote snapshot and writes it back; 'local' uploads
    // the local snapshot. Either way Drive and this device end up identical.
    resolveConflict(choice) {
      const conflict = pendingConflict;
      pendingConflict = null;
      if (!conflict) return Promise.resolve();
      if (choice === 'drive') {
        return ensureToken(false).then(() => applyAndUpload(conflict.remote)).catch(handleSyncError);
      }
      return ensureToken(false).then(() => {
        const payload = normalize(hooks.getPayload());
        return writeRemote(payload).then(() => report('synced', { updatedAt: payload.updatedAt, source: 'conflict-choice' }));
      }).catch(handleSyncError);
    },

    hasPendingConflict() { return !!pendingConflict; },
    getPendingConflict() { return pendingConflict; },

    // Local progress changed -> schedule a debounced upload.
    onLocalChange() { scheduleUpload(); },

    // Best-effort immediate flush (e.g. when the tab is hidden or closing).
    flush() {
      if (uploadTimer) { clearTimeout(uploadTimer); uploadTimer = null; }
      return pushNow();
    }
  };

  window.MCPA_DRIVE = api;
})();
