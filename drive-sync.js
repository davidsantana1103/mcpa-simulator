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
  function findFile() {
    const q = encodeURIComponent(`name='${FILE_NAME}' and trashed=false`);
    const url = `${DRIVE_FILES_URL}?spaces=drive&q=${q}&fields=files(id,modifiedTime)`;
    return driveFetch(url).then((res) => res.json()).then((data) => {
      const files = (data && data.files) || [];
      return files.length ? files[0] : null;
    });
  }

  function readFile(fileIdToRead) {
    const url = `${DRIVE_FILES_URL}/${fileIdToRead}?alt=media`;
    return driveFetch(url).then((res) => res.json());
  }

  function createFile(payload) {
    const metadata = { name: FILE_NAME, mimeType: FILE_MIME };
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

  // ---- Merge / sync --------------------------------------------------------
  // Answers are only ever removed by an explicit reset, so unioning the two
  // maps is the safe conflict resolution. Newer metadata wins for the rest.
  function mergePayloads(remote, local) {
    if (!remote) return local;
    if (!local) return remote;
    const newer = (remote.updatedAt || 0) >= (local.updatedAt || 0) ? remote : local;
    const older = newer === remote ? local : remote;
    const userAnswers = Object.assign({}, older.userAnswers || {}, newer.userAnswers || {});
    const flagged = Array.from(new Set([].concat(older.flagged || [], newer.flagged || [])));
    const merged = Object.assign({}, older, newer, { userAnswers, flagged });
    merged.updatedAt = Math.max(remote.updatedAt || 0, local.updatedAt || 0);
    return merged;
  }

  function pushNow() {
    if (!connected || syncing) return Promise.resolve();
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
        if (err.code === 401 || /interaction|consent|Authorization/i.test(err.message)) {
          needsReauth = true;
          report('needs-reauth', {});
        } else {
          lastError = err.message || String(err);
          report('error', { message: lastError });
        }
      })
      .then(() => { syncing = false; });
  }

  function scheduleUpload() {
    if (!connected || applyingRemote) return;
    if (uploadTimer) clearTimeout(uploadTimer);
    uploadTimer = setTimeout(() => { uploadTimer = null; pushNow(); }, UPLOAD_DEBOUNCE_MS);
  }

  function doInitialSync() {
    return ensureToken(false)
      .then(() => findFile())
      .then((file) => {
        if (!file) {
          fileId = null;
          return pushNow();
        }
        fileId = file.id;
        return readFile(fileId).then((remote) => {
          const local = hooks.getPayload();
          const merged = mergePayloads(remote, local);
          applyingRemote = true;
          try { hooks.applyPayload(merged); } finally { applyingRemote = false; }
          return ensureToken(false).then(() => writeRemote(merged)).then(() => {
            report('synced', { updatedAt: merged.updatedAt });
          });
        });
      })
      .catch((err) => {
        if (err.code === 401 || /interaction|consent|Authorization/i.test(err.message)) {
          needsReauth = true;
          report('needs-reauth', {});
        } else {
          lastError = err.message || String(err);
          report('error', { message: lastError });
        }
      });
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
    // refresh silently and pull the latest progress.
    init() {
      if (connected) doInitialSync();
    },

    // First-time connect from the UI button (shows the Google consent popup).
    connect() {
      return ensureToken(true).then(() => {
        connected = true;
        needsReauth = false;
        lastError = '';
        try { localStorage.setItem(CONNECTED_KEY, '1'); } catch (e) { /* ignore */ }
        return doInitialSync();
      });
    },

    disconnect() {
      connected = false;
      needsReauth = false;
      lastError = '';
      accessToken = null;
      tokenExpiresAt = 0;
      fileId = null;
      try { localStorage.removeItem(CONNECTED_KEY); } catch (e) { /* ignore */ }
      report('disconnected', {});
    },

    // Re-authorize after the token expired (user chose "Reauthorize").
    reauth() {
      return ensureToken(true)
        .then(() => { needsReauth = false; return doInitialSync(); })
        .catch((err) => {
          lastError = err.message || String(err);
          report('error', { message: lastError });
        });
    },

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
