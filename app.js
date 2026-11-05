// MCPA Practice Exam Simulator Logic

(function() {
  'use strict';

  // State
  const state = {
    questions: window.MCPA_QUESTIONS || [],
    currentIndex: 0,
    filteredQuestions: [],
    mode: 'practice', // 'practice' | 'exam'
    examQuestionCount: 60,
    filterType: 'all', // 'all' | 'unanswered' | 'correct' | 'incorrect' | 'flagged'
    filterDomain: 'all',
    filterStudy: 'all', // 'all' | 'studied' | 'unstudied'
    searchQuery: '',
    examAreaFilter: [], // array of domain names; empty = all areas
    examNewQuestionsOnly: true, // prefer non-studied / failed questions in timed exams

    // Stored in localStorage
    userAnswers: {}, // { qId: selectedLetter | [letters] } — practice answers
    flagged: new Set(), // Set of qIds
    studied: new Set(), // Set of qIds the user has answered at least once (any mode)
    questionResults: {}, // { qId: 'correct' | 'incorrect' } — latest answer result, any mode
    // { active: bool, submitted: bool, questions: [], questionCount, answers: {}, startTime, durationSec }
    examSession: null,
    theme: 'light',
    updatedAt: 0 // last local change; used to resolve sync conflicts
  };

  // Selectable Timed Exam question counts (2 minutes per question)
  const EXAM_COUNT_OPTIONS = [5, 10, 15, 20, 40, 60, 80, 100];

  // LocalStorage keys
  const STORAGE_KEYS = {
    ANSWERS: 'mcpa_user_answers_v1',
    FLAGGED: 'mcpa_flagged_v1',
    STUDIED: 'mcpa_studied_v1',
    RESULTS: 'mcpa_question_results_v1',
    EXAM: 'mcpa_exam_session_v1',
    EXAM_COUNT: 'mcpa_exam_count_v1',
    EXAM_AREAS: 'mcpa_exam_areas_v1',
    EXAM_NEW_ONLY: 'mcpa_exam_new_only_v1',
    THEME: 'mcpa_theme_v1',
    LAST_INDEX: 'mcpa_last_index_v1',
    UPDATED_AT: 'mcpa_updated_at_v1'
  };

  // DOM Elements
  const dom = {
    themeBtn: document.getElementById('theme-btn'),
    resetBtn: document.getElementById('reset-btn'),
    eraseBtn: document.getElementById('erase-btn'),
    practiceModeBtn: document.getElementById('mode-practice'),
    examModeBtn: document.getElementById('mode-exam'),
    examCountSelect: document.getElementById('exam-count-select'),
    timerBar: document.getElementById('timer-bar'),
    timerDisplay: document.getElementById('timer-display'),
    
    // Stats
    statScore: document.getElementById('stat-score'),
    statAnswered: document.getElementById('stat-answered'),
    statAccuracy: document.getElementById('stat-accuracy'),
    progressFill: document.getElementById('progress-fill'),
    
    // Question Card
    questionArea: document.getElementById('question-area'),
    badgeQnum: document.getElementById('badge-qnum'),
    badgeDomain: document.getElementById('badge-domain'),
    badgeTopics: document.getElementById('badge-topics'),
    flagBtn: document.getElementById('flag-btn'),
    questionPrompt: document.getElementById('question-prompt'),
    optionsList: document.getElementById('options-list'),
    
    // Feedback & Actions
    checkBtn: document.getElementById('check-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitExamBtn: document.getElementById('submit-exam-btn'),
    explanationBox: document.getElementById('explanation-box'),
    expHeader: document.getElementById('exp-header'),
    expHeaderText: document.getElementById('exp-header-text'),
    expBody: document.getElementById('exp-body'),
    rationalesList: document.getElementById('rationales-list'),
    referencesBox: document.getElementById('references-box'),
    refLinksContainer: document.getElementById('ref-links-container'),
    
    // Sidebar
    filterDomain: document.getElementById('filter-domain'),
    filterStatus: document.getElementById('filter-status'),
    filterStudy: document.getElementById('filter-study'),
    searchInput: document.getElementById('search-input'),
    qGrid: document.getElementById('q-grid'),

    // Timed Exam area filter
    examAreaList: document.getElementById('exam-area-list'),
    examAreaCountLabel: document.getElementById('exam-area-count-label'),
    examAreaAllBtn: document.getElementById('exam-area-all-btn'),
    examAreaClearBtn: document.getElementById('exam-area-clear-btn'),
    examNewOnly: document.getElementById('exam-new-only'),
    
    // Modals
    confirmModal: document.getElementById('confirm-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalMsg: document.getElementById('modal-msg'),
    modalConfirmBtn: document.getElementById('modal-confirm-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    
    // Results
    resultView: document.getElementById('result-view'),

    // Google Drive sync
    driveBtn: document.getElementById('drive-btn'),
    driveDisconnectBtn: document.getElementById('drive-disconnect-btn'),
    reauthModal: document.getElementById('reauth-modal'),
    reauthNowBtn: document.getElementById('reauth-now-btn'),
    reauthOfflineBtn: document.getElementById('reauth-offline-btn'),
    conflictModal: document.getElementById('conflict-modal'),
    conflictLocalBtn: document.getElementById('conflict-local-btn'),
    conflictDriveBtn: document.getElementById('conflict-drive-btn'),
    conflictCancelBtn: document.getElementById('conflict-cancel-btn'),
    conflictLocalMeta: document.getElementById('conflict-local-meta'),
    conflictDriveMeta: document.getElementById('conflict-drive-meta')
  };

  let timerInterval = null;
  let lastSyncedSignature = null;
  let reauthPrompted = false;

  // Initialize
  function init() {
    loadStorage();
    backfillStudied();
    backfillResults();
    setupTheme();
    initializeQuestionCountPlaceholders();
    if (dom.examCountSelect) {
      dom.examCountSelect.value = state.examQuestionCount.toString();
    }
    if (dom.examNewOnly) dom.examNewOnly.checked = state.examNewQuestionsOnly;
    updateExamBtnLabel();
    sanitizeExamAreaFilter();
    populateDomainFilter();
    populateExamAreaFilter();
    if (state.mode === 'exam' && state.examSession && state.examSession.active) {
      dom.practiceModeBtn.classList.remove('active');
      dom.examModeBtn.classList.add('active');
      dom.timerBar.style.display = 'block';
      startTimer();
    } else if (state.mode === 'exam' && isExamReview()) {
      dom.practiceModeBtn.classList.remove('active');
      dom.examModeBtn.classList.add('active');
      dom.timerBar.style.display = 'none';
    }
    applyFilters();
    bindEvents();
    renderQuestion();
    if (state.mode === 'exam' && isExamReview()) {
      showExamResults();
    }
    updateStats();
    renderGrid();

    lastSyncedSignature = getPayloadSignature();
    initDriveSync();
  }

  // Configure and (if previously connected) start Google Drive sync.
  function initDriveSync() {
    const drive = window.MCPA_DRIVE;
    if (!drive) return;
    drive.configure({
      getPayload: buildSyncPayload,
      applyPayload: applySyncPayload,
      onStatus: handleDriveStatus
    });
    updateDriveButton();
    drive.init();
  }

  function initializeQuestionCountPlaceholders() {
    const totalQuestions = state.questions.length;

    if (dom.statAnswered) {
      dom.statAnswered.textContent = `0 / ${totalQuestions}`;
    }
    if (dom.badgeQnum) {
      dom.badgeQnum.textContent = `Q1 (1/${totalQuestions})`;
    }

    const gridCountLabel = document.getElementById('grid-count-label');
    if (gridCountLabel) {
      gridCountLabel.textContent = `${totalQuestions} Items`;
    }
  }

  // Load from localStorage
  function loadStorage() {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

      const savedFlagged = localStorage.getItem(STORAGE_KEYS.FLAGGED);
      if (savedFlagged) state.flagged = new Set(JSON.parse(savedFlagged));

      const savedStudied = localStorage.getItem(STORAGE_KEYS.STUDIED);
      if (savedStudied) state.studied = new Set(JSON.parse(savedStudied));

      const savedResults = localStorage.getItem(STORAGE_KEYS.RESULTS);
      if (savedResults) {
        const parsed = JSON.parse(savedResults);
        if (parsed && typeof parsed === 'object') state.questionResults = parsed;
      }

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) state.theme = savedTheme;

      const savedNewOnly = localStorage.getItem(STORAGE_KEYS.EXAM_NEW_ONLY);
      if (savedNewOnly !== null) state.examNewQuestionsOnly = savedNewOnly !== '0';

      const savedLastIndex = localStorage.getItem(STORAGE_KEYS.LAST_INDEX);
      if (savedLastIndex) state.currentIndex = parseInt(savedLastIndex, 10) || 0;

      const savedExamCount = localStorage.getItem(STORAGE_KEYS.EXAM_COUNT);
      if (savedExamCount) {
        const parsedCount = parseInt(savedExamCount, 10);
        if (EXAM_COUNT_OPTIONS.includes(parsedCount)) {
          state.examQuestionCount = parsedCount;
        }
      }

      const savedExamAreas = localStorage.getItem(STORAGE_KEYS.EXAM_AREAS);
      if (savedExamAreas) {
        const parsedAreas = JSON.parse(savedExamAreas);
        if (Array.isArray(parsedAreas)) {
          state.examAreaFilter = parsedAreas.filter(a => typeof a === 'string');
        }
      }

      const savedExam = localStorage.getItem(STORAGE_KEYS.EXAM);
      if (savedExam) {
        state.examSession = JSON.parse(savedExam);
        if (state.examSession && state.examSession.active) {
          state.mode = 'exam';
          if (state.examSession.questionCount) {
            state.examQuestionCount = state.examSession.questionCount;
          }
        } else if (state.examSession && state.examSession.submitted) {
          // A submitted exam is being reviewed: reopen it in exam mode.
          state.mode = 'exam';
        } else {
          state.examSession = null;
        }
      }

      const savedUpdatedAt = localStorage.getItem(STORAGE_KEYS.UPDATED_AT);
      if (savedUpdatedAt) state.updatedAt = parseInt(savedUpdatedAt, 10) || 0;
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
  }

  // One-time migration: any question that already has a saved answer counts as studied.
  function backfillStudied() {
    if (backfillStudiedFromAnswers()) saveStorage();
  }

  // Rebuild the studied set from saved answers (practice + exam). Returns true if it grew.
  function backfillStudiedFromAnswers() {
    let changed = false;
    Object.keys(state.userAnswers).forEach(qId => {
      if (hasAnswer(state.userAnswers[qId]) && !state.studied.has(qId)) {
        state.studied.add(qId);
        changed = true;
      }
    });
    const examAnswers = state.examSession && state.examSession.answers;
    if (examAnswers && typeof examAnswers === 'object') {
      Object.keys(examAnswers).forEach(qId => {
        if (hasAnswer(examAnswers[qId]) && !state.studied.has(qId)) {
          state.studied.add(qId);
          changed = true;
        }
      });
    }
    return changed;
  }

  // One-time migration: derive a latest result for questions answered before
  // per-question results were tracked. The exam answer is the most recent
  // discrete activity, so it wins over the practice answer.
  function backfillResults() {
    let changed = false;
    const setResult = (qId, answer) => {
      if (!hasAnswer(answer)) return;
      const q = state.questions.find(item => item.id === qId);
      if (!q) return;
      state.questionResults[qId] = answersMatch(q, answer) ? 'correct' : 'incorrect';
      changed = true;
    };
    Object.keys(state.userAnswers).forEach(qId => setResult(qId, state.userAnswers[qId]));
    const examAnswers = state.examSession && state.examSession.answers;
    if (examAnswers && typeof examAnswers === 'object') {
      Object.keys(examAnswers).forEach(qId => setResult(qId, examAnswers[qId]));
    }
    if (changed) saveStorage();
  }

  // Record the outcome of the user's latest answer for a question.
  function recordResult(qId, answer) {
    if (!qId) return;
    const q = state.questions.find(item => item.id === qId);
    if (!q) return;
    if (!hasAnswer(answer)) {
      delete state.questionResults[qId];
      return;
    }
    state.questionResults[qId] = answersMatch(q, answer) ? 'correct' : 'incorrect';
  }

  // Mark a question as studied (it has been answered at least once, any mode).
  function markStudied(qId) {
    if (!qId || state.studied.has(qId)) return;
    state.studied.add(qId);
  }

  // Save to localStorage and notify Drive sync (if connected)
  function saveStorage() {
    state.updatedAt = Date.now();
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(state.userAnswers));
      localStorage.setItem(STORAGE_KEYS.FLAGGED, JSON.stringify(Array.from(state.flagged)));
      localStorage.setItem(STORAGE_KEYS.STUDIED, JSON.stringify(Array.from(state.studied)));
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(state.questionResults));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
      localStorage.setItem(STORAGE_KEYS.LAST_INDEX, state.currentIndex.toString());
      localStorage.setItem(STORAGE_KEYS.EXAM_COUNT, state.examQuestionCount.toString());
      localStorage.setItem(STORAGE_KEYS.EXAM_AREAS, JSON.stringify(state.examAreaFilter));
      localStorage.setItem(STORAGE_KEYS.EXAM_NEW_ONLY, state.examNewQuestionsOnly ? '1' : '0');
      localStorage.setItem(STORAGE_KEYS.UPDATED_AT, state.updatedAt.toString());
      if (state.examSession) {
        localStorage.setItem(STORAGE_KEYS.EXAM, JSON.stringify(state.examSession));
      } else {
        localStorage.removeItem(STORAGE_KEYS.EXAM);
      }
    } catch (e) {
      console.error('Failed to save localStorage', e);
    }

    const signature = getPayloadSignature();
    if (signature !== lastSyncedSignature && window.MCPA_DRIVE) {
      window.MCPA_DRIVE.onLocalChange();
    }
    lastSyncedSignature = signature;
  }

  // Portable representation of the progress that is shared across devices.
  function buildSyncPayload() {
    return {
      version: 1,
      updatedAt: state.updatedAt,
      userAnswers: state.userAnswers,
      flagged: Array.from(state.flagged),
      studied: Array.from(state.studied),
      questionResults: state.questionResults,
      theme: state.theme,
      examQuestionCount: state.examQuestionCount,
      examAreaFilter: state.examAreaFilter,
      examNewQuestionsOnly: state.examNewQuestionsOnly,
      examSession: state.examSession
    };
  }

  function getPayloadSignature() {
    return JSON.stringify({
      a: state.userAnswers,
      f: Array.from(state.flagged).sort(),
      d: Array.from(state.studied).sort(),
      r: state.questionResults,
      c: state.examQuestionCount,
      e: state.examAreaFilter,
      n: state.examNewQuestionsOnly,
      s: state.examSession
    });
  }

  // Apply progress received from Drive and refresh the UI.
  function applySyncPayload(payload) {
    if (!payload) return;
    if (payload.userAnswers && typeof payload.userAnswers === 'object') {
      state.userAnswers = payload.userAnswers;
    }
    if (Array.isArray(payload.flagged)) {
      state.flagged = new Set(payload.flagged);
    }
    if (Array.isArray(payload.studied)) {
      state.studied = new Set(payload.studied);
    } else {
      // Older snapshots had no studied field: rebuild it from saved answers.
      state.studied = new Set();
      backfillStudiedFromAnswers();
    }
    if (payload.questionResults && typeof payload.questionResults === 'object') {
      state.questionResults = payload.questionResults;
    } else {
      // Older snapshots had no per-question results: rebuild from saved answers.
      state.questionResults = {};
      backfillResults();
    }
    if (typeof payload.examQuestionCount === 'number' && EXAM_COUNT_OPTIONS.includes(payload.examQuestionCount)) {
      state.examQuestionCount = payload.examQuestionCount;
    }
    if (Array.isArray(payload.examAreaFilter)) {
      state.examAreaFilter = payload.examAreaFilter.filter(a => typeof a === 'string');
    }
    if (typeof payload.examNewQuestionsOnly === 'boolean') {
      state.examNewQuestionsOnly = payload.examNewQuestionsOnly;
    }
    if (dom.examNewOnly) dom.examNewOnly.checked = state.examNewQuestionsOnly;
    if (typeof payload.theme === 'string') {
      state.theme = payload.theme;
      setupTheme();
    }
    if (payload.examSession) {
      state.examSession = payload.examSession;
      if (payload.examSession.active || payload.examSession.submitted) {
        state.mode = 'exam';
      } else {
        state.mode = 'practice';
      }
    } else {
      state.examSession = null;
      if (state.mode === 'exam') state.mode = 'practice';
    }

    state.updatedAt = payload.updatedAt || Date.now();

    // Persist locally without echoing the change back to Drive.
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(state.userAnswers));
      localStorage.setItem(STORAGE_KEYS.FLAGGED, JSON.stringify(Array.from(state.flagged)));
      localStorage.setItem(STORAGE_KEYS.STUDIED, JSON.stringify(Array.from(state.studied)));
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(state.questionResults));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
      localStorage.setItem(STORAGE_KEYS.EXAM_COUNT, state.examQuestionCount.toString());
      localStorage.setItem(STORAGE_KEYS.EXAM_AREAS, JSON.stringify(state.examAreaFilter));
      localStorage.setItem(STORAGE_KEYS.EXAM_NEW_ONLY, state.examNewQuestionsOnly ? '1' : '0');
      localStorage.setItem(STORAGE_KEYS.UPDATED_AT, state.updatedAt.toString());
      if (state.examSession) {
        localStorage.setItem(STORAGE_KEYS.EXAM, JSON.stringify(state.examSession));
      } else {
        localStorage.removeItem(STORAGE_KEYS.EXAM);
      }
    } catch (e) {
      console.error('Failed to persist synced progress', e);
    }
    lastSyncedSignature = getPayloadSignature();

    refreshAfterSync();
  }

  // Re-render everything that depends on restored progress.
  function refreshAfterSync() {
    if (dom.examCountSelect) dom.examCountSelect.value = state.examQuestionCount.toString();
    updateExamBtnLabel();
    sanitizeExamAreaFilter();
    populateExamAreaFilter();
    applyFilters();
    renderQuestion();
    updateStats();
    renderGrid();
    if (state.mode === 'exam' && isExamReview()) {
      showExamResults();
    }
    if (state.mode === 'exam' && state.examSession && state.examSession.active) {
      dom.practiceModeBtn.classList.remove('active');
      dom.examModeBtn.classList.add('active');
      dom.timerBar.style.display = 'block';
      startTimer();
    } else if (state.mode === 'exam' && isExamReview()) {
      dom.practiceModeBtn.classList.remove('active');
      dom.examModeBtn.classList.add('active');
      dom.timerBar.style.display = 'none';
    } else {
      stopTimer();
      dom.practiceModeBtn.classList.add('active');
      dom.examModeBtn.classList.remove('active');
      dom.timerBar.style.display = 'none';
    }
    updateDriveButton();
  }

  // ---- Google Drive sync UI ------------------------------------------------
  function updateDriveButton() {
    if (!dom.driveBtn) return;
    const drive = window.MCPA_DRIVE;
    if (!drive) {
      dom.driveBtn.style.display = 'none';
      return;
    }
    dom.driveBtn.style.display = 'inline-flex';
    if (dom.driveDisconnectBtn) {
      dom.driveDisconnectBtn.style.display = drive.isConnected() ? 'inline-flex' : 'none';
    }
    if (drive.getNeedsReauth()) {
      dom.driveBtn.textContent = 'Drive: Reconnect';
      dom.driveBtn.classList.remove('active');
      dom.driveBtn.title = 'Google Drive session expired. Click to reauthorize.';
      dom.driveBtn.disabled = false;
      return;
    }
    if (drive.isConnected()) {
      dom.driveBtn.textContent = 'Drive: On';
      dom.driveBtn.classList.add('active');
      dom.driveBtn.title = 'Progress is synced to your Google Drive. Click to sync now.';
      dom.driveBtn.disabled = false;
    } else {
      dom.driveBtn.textContent = 'Connect Drive';
      dom.driveBtn.classList.remove('active');
      dom.driveBtn.title = drive.isConfigured()
        ? 'Save and load your progress across devices with Google Drive.'
        : 'Google Drive sync is not configured (missing OAuth client ID). See README.';
      dom.driveBtn.disabled = false;
    }
  }

  function handleDriveStatus(status, detail) {
    updateDriveButton();
    if (status === 'needs-reauth' && !reauthPrompted) {
      reauthPrompted = true;
      if (dom.reauthModal) dom.reauthModal.style.display = 'flex';
    } else if (status === 'conflict') {
      showConflictModal(detail && detail.local, detail && detail.remote);
    } else if (status === 'error') {
      console.warn('Drive sync error:', detail && detail.message);
    }
  }

  // Human-friendly summary of a snapshot: when it changed and how much is in it.
  function describeSnapshot(payload) {
    const answers = payload && payload.userAnswers ? Object.keys(payload.userAnswers).length : 0;
    const flagged = payload && Array.isArray(payload.flagged) ? payload.flagged.length : 0;
    let when = 'unknown time';
    if (payload && payload.updatedAt) {
      const d = new Date(payload.updatedAt);
      when = d.toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
    }
    return { when, answers, flagged };
  }

  function showConflictModal(local, remote) {
    if (!dom.conflictModal) return;
    const l = describeSnapshot(local);
    const r = describeSnapshot(remote);
    if (dom.conflictLocalMeta) {
      dom.conflictLocalMeta.textContent =
        `Last changed ${l.when} — ${l.answers} answer${l.answers === 1 ? '' : 's'}, ${l.flagged} flagged`;
    }
    if (dom.conflictDriveMeta) {
      dom.conflictDriveMeta.textContent =
        `Last changed ${r.when} — ${r.answers} answer${r.answers === 1 ? '' : 's'}, ${r.flagged} flagged`;
    }
    dom.conflictModal.style.display = 'flex';
  }

  function hideConflictModal() {
    if (dom.conflictModal) dom.conflictModal.style.display = 'none';
  }

  function promptDriveSyncChoice() {
    const drive = window.MCPA_DRIVE;
    if (!drive) return;
    if (drive.hasPendingConflict && drive.hasPendingConflict()) {
      // A conflict is still unresolved: reopen the dialog instead of syncing.
      showConflictModalFromDrive();
      return;
    }
    if (!drive.isConnected()) {
      if (!drive.isConfigured()) {
        showConfirmModal(
          'Google Drive Sync Not Configured',
          'This build has no Google OAuth client ID yet. See the README "Google Drive Sync" section to enable it.',
          () => {}
        );
        return;
      }
      drive.connect().then(updateDriveButton).catch((err) => {
        showConfirmModal('Could Not Connect', (err && err.message) || 'Google authorization was not completed.', () => {});
      });
      return;
    }
    // Already connected: pull the latest from Drive now.
    drive.init();
  }

  // Re-open the conflict dialog for a conflict that is still pending.
  function showConflictModalFromDrive() {
    const drive = window.MCPA_DRIVE;
    if (!drive || !drive.getPendingConflict) return;
    const pending = drive.getPendingConflict();
    if (pending) showConflictModal(pending.local, pending.remote);
  }

  // Update Exam button label
  function updateExamBtnLabel() {
    if (dom.examModeBtn) {
      const areaCount = state.examAreaFilter.length;
      const areaSuffix = areaCount > 0 ? ` · ${areaCount} Area${areaCount > 1 ? 's' : ''}` : '';
      dom.examModeBtn.textContent = `Timed Exam (${state.examQuestionCount}Q)${areaSuffix}`;
      const scope = areaCount > 0 ? ` drawn from ${areaCount} selected area${areaCount > 1 ? 's' : ''}` : '';
      const eligibility = state.examNewQuestionsOnly
        ? ` ${describeEligibility(getExamEligibility())}`
        : '';
      dom.examModeBtn.title = `${state.examQuestionCount}-question timed exam simulation (${state.examQuestionCount * 2} mins)${scope}.${eligibility}`;
    }
  }

  // Theme setup
  function setupTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    if (dom.themeBtn) {
      dom.themeBtn.innerHTML = state.theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

  // Populate Domain Dropdown
  function populateDomainFilter() {
    const domains = new Set();
    state.questions.forEach(q => {
      if (q.domain) domains.add(q.domain);
    });

    if (dom.filterDomain) {
      dom.filterDomain.innerHTML = `<option value="all">All Domains (${state.questions.length})</option>`;
      Array.from(domains).sort().forEach(d => {
        const count = state.questions.filter(q => q.domain === d).length;
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = `${d} (${count})`;
        dom.filterDomain.appendChild(opt);
      });
    }
  }

  // Drop any saved area names that no longer exist in the question bank
  function sanitizeExamAreaFilter() {
    const valid = new Set(getExamAreas());
    const filtered = state.examAreaFilter.filter(a => valid.has(a));
    if (filtered.length !== state.examAreaFilter.length) {
      state.examAreaFilter = filtered;
      saveStorage();
    }
  }

  // Unique exam areas (domains), sorted alphabetically
  function getExamAreas() {
    const areas = new Set();
    state.questions.forEach(q => {
      if (q.domain) areas.add(q.domain);
    });
    return Array.from(areas).sort();
  }

  // Populate the Timed Exam area multi-select
  function populateExamAreaFilter() {
    if (!dom.examAreaList) return;
    dom.examAreaList.innerHTML = '';

    getExamAreas().forEach(area => {
      const count = state.questions.filter(q => q.domain === area).length;
      const selected = state.examAreaFilter.includes(area);

      const label = document.createElement('label');
      label.className = `exam-area-option${selected ? ' checked' : ''}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = area;
      checkbox.checked = selected;
      checkbox.addEventListener('change', () => {
        toggleExamArea(area, checkbox.checked, label);
      });

      const name = document.createElement('span');
      name.className = 'area-name';
      name.textContent = area;

      const countEl = document.createElement('span');
      countEl.className = 'area-count';
      countEl.textContent = `${count}`;

      label.appendChild(checkbox);
      label.appendChild(name);
      label.appendChild(countEl);
      dom.examAreaList.appendChild(label);
    });

    updateExamAreaCountLabel();
  }

  function toggleExamArea(area, isChecked, labelEl) {
    if (isChecked) {
      if (!state.examAreaFilter.includes(area)) state.examAreaFilter.push(area);
    } else {
      state.examAreaFilter = state.examAreaFilter.filter(a => a !== area);
    }
    if (labelEl) labelEl.classList.toggle('checked', isChecked);
    saveStorage();
    updateExamAreaCountLabel();
    updateExamBtnLabel();
  }

  function setAllExamAreas(selectAll) {
    state.examAreaFilter = selectAll ? getExamAreas() : [];
    saveStorage();
    populateExamAreaFilter();
    updateExamBtnLabel();
  }

  function updateExamAreaCountLabel() {
    if (!dom.examAreaCountLabel) return;
    const selected = state.examAreaFilter.length;
    dom.examAreaCountLabel.textContent = selected === 0 ? 'All areas' : `${selected} selected`;
  }

  // Question pool for the timed exam, limited to the selected areas
  function getExamPool() {
    if (!state.examAreaFilter.length) return state.questions;
    const selected = new Set(state.examAreaFilter);
    return state.questions.filter(q => selected.has(q.domain));
  }

  // Priority tier for the "new questions only" exam selection:
  //   1 = never answered (non-studied)
  //   2 = answered but not currently correct (failed, or result unknown)
  //   3 = answered correctly (last resort)
  function examTier(q) {
    if (!state.studied.has(q.id)) return 1;
    if (state.questionResults[q.id] === 'correct') return 3;
    return 2;
  }

  // Order questions so the highest-priority tier comes first, shuffled within
  // each tier. When "new questions only" is off, this is a plain shuffle.
  function tieredOrder(questions) {
    if (!state.examNewQuestionsOnly) return shuffle(questions);
    const tiers = { 1: [], 2: [], 3: [] };
    questions.forEach(q => tiers[examTier(q)].push(q));
    return [...shuffle(tiers[1]), ...shuffle(tiers[2]), ...shuffle(tiers[3])];
  }

  // Counts used to tell the user what the next exam will draw on.
  function getExamEligibility() {
    const pool = getExamPool();
    let nonStudied = 0;
    let failed = 0;
    let correct = 0;
    pool.forEach(q => {
      const tier = examTier(q);
      if (tier === 1) nonStudied++;
      else if (tier === 2) failed++;
      else correct++;
    });
    const target = Math.min(state.examQuestionCount, pool.length);
    return { pool, nonStudied, failed, correct, target, newOnly: state.examNewQuestionsOnly };
  }

  // One-line summary of what the next exam will use.
  function describeEligibility(e) {
    if (!e.newOnly) {
      return `${e.pool.length} questions available; the exam draws from all of them.`;
    }
    const fresh = e.nonStudied + e.failed;
    let msg = `${e.nonStudied} not studied + ${e.failed} failed`;
    if (e.target > fresh && e.correct > 0) {
      msg += `; topped up with ${Math.min(e.target - fresh, e.correct)} already-correct`;
    }
    return `${msg}.`;
  }

  // Apply filters
  function applyFilters() {
    let list;
    if (state.mode === 'exam' && state.examSession) {
      list = state.examSession.questions;
    } else {
      list = state.questions;
    }

    // Filter by domain
    if (state.filterDomain !== 'all') {
      list = list.filter(q => q.domain === state.filterDomain);
    }

    // Filter by study status (has the question ever been answered?)
    if (state.filterStudy === 'studied') {
      list = list.filter(q => state.studied.has(q.id));
    } else if (state.filterStudy === 'unstudied') {
      list = list.filter(q => !state.studied.has(q.id));
    }

    // Filter by status (exam/review use the exam's own answer store)
    const answers = getActiveAnswerMap();
    if (state.filterStatus === 'unanswered') {
      list = list.filter(q => !hasAnswer(answers[q.id]));
    } else if (state.filterStatus === 'correct') {
      list = list.filter(q => answersMatch(q, answers[q.id]));
    } else if (state.filterStatus === 'incorrect') {
      list = list.filter(q => hasAnswer(answers[q.id]) && !answersMatch(q, answers[q.id]));
    } else if (state.filterStatus === 'flagged') {
      list = list.filter(q => state.flagged.has(q.id));
    }

    // Filter by search query
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase();
      list = list.filter(q =>
        q.prompt.toLowerCase().includes(query) ||
        q.title.toLowerCase().includes(query) ||
        (q.domain && q.domain.toLowerCase().includes(query)) ||
        (q.topics && q.topics.some(t => t.toLowerCase().includes(query)))
      );
    }

    state.filteredQuestions = list;
    if (state.currentIndex >= state.filteredQuestions.length) {
      state.currentIndex = Math.max(0, state.filteredQuestions.length - 1);
    }
  }

  // In exam mode the exam's own answer store is authoritative.
  function getActiveAnswerMap() {
    if (state.mode === 'exam' && state.examSession && state.examSession.answers) {
      return state.examSession.answers;
    }
    return state.userAnswers;
  }

  // True while the timed exam is running (answers editable, correctness hidden).
  function isExamInProgress() {
    return state.mode === 'exam' && state.examSession && state.examSession.active;
  }

  // True when a submitted exam is being reviewed (answers locked, correctness shown).
  function isExamReview() {
    return state.mode === 'exam' && state.examSession &&
      !state.examSession.active && !!state.examSession.submitted;
  }

  function getCorrectAnswers(question) {
    if (Array.isArray(question.correctAnswers)) {
      return question.correctAnswers;
    }
    return question.correctAnswer ? [question.correctAnswer] : [];
  }

  function isMultiAnswerQuestion(question) {
    return getCorrectAnswers(question).length > 1;
  }

  function hasAnswer(answer) {
    return Array.isArray(answer) ? answer.length > 0 : answer !== undefined && answer !== null && answer !== '';
  }

  function isAnswerSelected(answer, letter) {
    return Array.isArray(answer) ? answer.includes(letter) : answer === letter;
  }

  function answersMatch(question, answer) {
    if (!hasAnswer(answer)) return false;

    const correctAnswers = [...getCorrectAnswers(question)].sort();
    const selectedAnswers = Array.isArray(answer) ? [...new Set(answer)].sort() : [answer];

    return correctAnswers.length === selectedAnswers.length &&
      correctAnswers.every((letter, idx) => letter === selectedAnswers[idx]);
  }

  function formatCorrectAnswers(question) {
    return getCorrectAnswers(question).join(', ');
  }

  // Render current question
  function renderQuestion() {
    if (dom.resultView) dom.resultView.style.display = 'none';
    if (dom.questionArea) dom.questionArea.style.display = 'flex';

    const list = state.filteredQuestions;
    if (!list || list.length === 0) {
      dom.badgeQnum.textContent = '0 / 0';
      dom.badgeDomain.textContent = 'No Questions';
      dom.badgeTopics.innerHTML = '';
      dom.questionPrompt.textContent = 'No questions match the current filter criteria.';
      dom.optionsList.innerHTML = '';
      dom.explanationBox.style.display = 'none';
      dom.checkBtn.style.display = 'none';
      dom.prevBtn.disabled = true;
      dom.nextBtn.disabled = true;
      return;
    }

    const q = list[state.currentIndex];
    const totalInFilter = list.length;
    const actualQIndex = state.questions.findIndex(item => item.id === q.id);

    // Badges
    dom.badgeQnum.textContent = `Q${q.number} (${state.currentIndex + 1}/${totalInFilter})`;
    dom.badgeDomain.textContent = q.domain || 'MuleSoft Platform Architect';
    
    // Topics
    dom.badgeTopics.innerHTML = '';
    if (q.topics && q.topics.length > 0) {
      q.topics.forEach(t => {
        const span = document.createElement('span');
        span.className = 'badge badge-domain';
        span.textContent = t;
        dom.badgeTopics.appendChild(span);
      });
    }

    // Flag button
    if (state.flagged.has(q.id)) {
      dom.flagBtn.classList.add('active');
      dom.flagBtn.innerHTML = `★ Flagged`;
    } else {
      dom.flagBtn.classList.remove('active');
      dom.flagBtn.innerHTML = `☆ Flag`;
    }

    // Prompt
    dom.questionPrompt.textContent = q.image ? 'Refer to the exhibit. ' + q.prompt : q.prompt;
    if (q.image) {
      const img = document.createElement('img');
      img.src = q.image;
      img.alt = 'Question exhibit';
      img.className = 'question-image';
      dom.questionPrompt.appendChild(img);
    }

    // Render Options
    dom.optionsList.innerHTML = '';
    const isPractice = state.mode === 'practice';
    const isReview = isExamReview();
    const answers = getActiveAnswerMap();
    const selectedAnswer = answers[q.id];
    const isAnswered = hasAnswer(selectedAnswer);
    const correctAnswers = getCorrectAnswers(q);

    q.options.forEach((opt, idx) => {
      const item = document.createElement('div');
      item.className = 'option-item';
      item.dataset.letter = opt.letter;

      // Selection state
      if (isAnswerSelected(selectedAnswer, opt.letter)) {
        item.classList.add('selected');
      }

      // Reveal correctness feedback in practice (after checking) and in review.
      if ((isPractice && isAnswered) || isReview) {
        item.classList.add('disabled');
        if (correctAnswers.includes(opt.letter)) {
          item.classList.add('correct');
        } else if (isAnswerSelected(selectedAnswer, opt.letter)) {
          item.classList.add('incorrect');
        }
      }

      const letterEl = document.createElement('div');
      letterEl.className = 'option-letter';
      letterEl.textContent = opt.letter;

      const textEl = document.createElement('div');
      textEl.className = 'option-text';
      textEl.textContent = opt.text;

      item.appendChild(letterEl);
      item.appendChild(textEl);

      item.addEventListener('click', () => {
        if (isReview) return; // Locked during review
        if (isPractice && isAnswered) return; // Locked after check
        selectOption(q.id, opt.letter);
      });

      dom.optionsList.appendChild(item);
    });

    // Footer: practice shows Check/Explanation, exam shows Submit, review shows Explanation.
    if (isReview) {
      dom.checkBtn.style.display = 'none';
      dom.submitExamBtn.style.display = 'none';
      renderExplanation(q, selectedAnswer);
    } else if (isPractice) {
      if (isAnswered) {
        dom.checkBtn.style.display = 'none';
        renderExplanation(q, selectedAnswer);
      } else {
        dom.checkBtn.style.display = 'inline-flex';
        dom.checkBtn.textContent = isMultiAnswerQuestion(q) ? 'Check Answers' : 'Check Answer';
        dom.checkBtn.disabled = !hasAnswer(selectedAnswer);
        dom.explanationBox.style.display = 'none';
      }
      dom.submitExamBtn.style.display = 'none';
    } else {
      // Exam Mode
      dom.checkBtn.style.display = 'none';
      dom.explanationBox.style.display = 'none';
      dom.submitExamBtn.style.display = 'inline-flex';
    }

    // Navigation buttons
    dom.prevBtn.disabled = state.currentIndex === 0;
    dom.nextBtn.disabled = state.currentIndex === list.length - 1;

    saveStorage();
    updateStats();
    renderGrid();
  }

  // Select Option
  function selectOption(qId, letter) {
    if (isExamReview()) return; // Answers are locked during review
    const q = state.filteredQuestions[state.currentIndex] || state.questions.find(question => question.id === qId);
    if (!q) return;
    const isExam = state.mode === 'exam';
    const store = isExam && state.examSession && state.examSession.answers
      ? state.examSession.answers
      : state.userAnswers;
    if (state.mode === 'practice' && dom.checkBtn.style.display === 'none' && hasAnswer(state.userAnswers[qId])) return;

    if (isMultiAnswerQuestion(q)) {
      const order = q.options.map(opt => opt.letter);
      const currentAnswers = Array.isArray(store[qId]) ? [...store[qId]] : [];
      const nextAnswers = currentAnswers.includes(letter)
        ? currentAnswers.filter(item => item !== letter)
        : [...currentAnswers, letter];

      nextAnswers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
      store[qId] = nextAnswers;
    } else {
      store[qId] = letter;
    }
    markStudied(qId);
    recordResult(qId, store[qId]);
    
    // Update selected styling in UI
    const optionItems = dom.optionsList.querySelectorAll('.option-item');
    optionItems.forEach(item => {
      if (isAnswerSelected(store[qId], item.dataset.letter)) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });

    if (state.mode === 'practice') {
      dom.checkBtn.disabled = !hasAnswer(state.userAnswers[qId]);
    } else {
      updateStats();
      renderGrid();
    }
    saveStorage();
  }

  // Check Answer (Practice mode submission)
  function checkAnswer() {
    const q = state.filteredQuestions[state.currentIndex];
    if (!q) return;
    const selected = state.userAnswers[q.id];
    if (!hasAnswer(selected)) return;

    renderQuestion();
  }

  // Render Explanation & Deep-Dive Links
  function renderExplanation(q, selected) {
    dom.explanationBox.style.display = 'flex';
    const isCorrect = answersMatch(q, selected);
    const rationaleContainer = dom.rationalesList.parentElement;

    if (isCorrect) {
      dom.expHeader.className = 'exp-header correct';
      dom.expHeaderText.textContent = isMultiAnswerQuestion(q) ? '✓ Correct Answers!' : '✓ Correct Answer!';
    } else {
      dom.expHeader.className = 'exp-header incorrect';
      dom.expHeaderText.textContent = `✗ Incorrect (Correct ${isMultiAnswerQuestion(q) ? 'Answers' : 'Answer'}: ${formatCorrectAnswers(q)})`;
    }

    dom.expBody.textContent = q.explanation;

    // Option rationales breakdown
    dom.rationalesList.innerHTML = '';
    if (q.rationales) {
      Object.keys(q.rationales).sort().forEach(letter => {
        const r = q.rationales[letter];
        const rItem = document.createElement('div');
        rItem.className = `rationale-item ${r.type.toLowerCase()}`;
        rItem.innerHTML = `<strong>${letter} - ${r.type}:</strong> ${r.text}`;
        dom.rationalesList.appendChild(rItem);
      });
    }
    if (rationaleContainer) {
      rationaleContainer.style.display = dom.rationalesList.children.length > 0 ? 'block' : 'none';
    }

    // Verified study references
    dom.refLinksContainer.innerHTML = '';
    let hasReferences = false;
    if (q.references) {
      if (q.references.primary && q.references.primary.url) {
        const link = createRefLink(q.references.primary.title, q.references.primary.url, '📖 Primary Documentation');
        dom.refLinksContainer.appendChild(link);
        hasReferences = true;
      }
      if (q.references.secondary && q.references.secondary.url) {
        const link = createRefLink(q.references.secondary.title, q.references.secondary.url, '🏛️ Secondary Reference');
        dom.refLinksContainer.appendChild(link);
        hasReferences = true;
      }
    }
    dom.referencesBox.style.display = hasReferences ? 'block' : 'none';
  }

  function createRefLink(title, url, label) {
    const a = document.createElement('a');
    a.className = 'ref-link';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `<span>${label}: <strong>${title}</strong> ↗</span>`;
    return a;
  }

  // Stats bar update
  function updateStats() {
    // In exam mode (in progress or review) the exam's own questions and answers
    // are authoritative; otherwise the practice answers are.
    const inExam = state.mode === 'exam' && !!state.examSession;
    const activeQuestions = inExam ? state.examSession.questions : state.questions;
    const total = activeQuestions.length;
    const answers = getActiveAnswerMap();

    let answeredCount = 0;
    let correctCount = 0;

    activeQuestions.forEach(q => {
      const userAns = answers[q.id];
      if (hasAnswer(userAns)) {
        answeredCount++;
        if (answersMatch(q, userAns)) {
          correctCount++;
        }
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const progressPercent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

    if (dom.statScore) dom.statScore.textContent = `${correctCount} / ${answeredCount}`;
    if (dom.statAnswered) dom.statAnswered.textContent = `${answeredCount} / ${total}`;
    if (dom.statAccuracy) dom.statAccuracy.textContent = `${accuracy}%`;
    if (dom.progressFill) dom.progressFill.style.width = `${progressPercent}%`;
  }

  // Sidebar Question Grid
  function renderGrid() {
    if (!dom.qGrid) return;
    dom.qGrid.innerHTML = '';

    const gridCountLabel = document.getElementById('grid-count-label');
    if (gridCountLabel) {
      gridCountLabel.textContent = `${state.filteredQuestions.length} Items`;
    }

    const list = state.filteredQuestions;
    list.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'q-grid-btn';
      btn.textContent = q.number;

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }

      const ans = getActiveAnswerMap()[q.id];
      if (hasAnswer(ans)) {
        if (isExamInProgress()) {
          // While the exam is in progress, mark answered without revealing correctness
          btn.classList.add('answered-exam');
          btn.style.background = 'var(--primary-light)';
          btn.style.color = 'var(--primary)';
        } else if (answersMatch(q, ans)) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
        }
      }

      if (state.flagged.has(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => {
        state.currentIndex = idx;
        renderQuestion();
      });

      dom.qGrid.appendChild(btn);
    });
  }

  // Flag toggle
  function toggleFlag() {
    const q = state.filteredQuestions[state.currentIndex];
    if (!q) return;

    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }

    saveStorage();
    renderQuestion();
  }

  // Switch Mode (Practice vs Exam)
  function setMode(newMode) {
    // A finished (submitted) exam is being reviewed: clicking Exam reopens its summary.
    if (newMode === 'exam' && isExamReview()) {
      showExamResults();
      return;
    }
    if (state.mode === newMode) return;

    if (newMode === 'exam') {
      const pool = getExamPool();
      if (!pool.length) return;
      const e = getExamEligibility();
      const count = e.target;
      const durationMin = count * 2;
      const areaCount = state.examAreaFilter.length;
      const scope = areaCount > 0
        ? ` drawn only from your ${areaCount} selected area${areaCount > 1 ? 's' : ''}`
        : '';
      const newNote = state.examNewQuestionsOnly
        ? `New questions only is ON — the draw prefers questions you have not studied or have answered incorrectly. `
        : `New questions only is OFF — the draw uses any question. `;
      showConfirmModal(
        `Start ${count}-Question Timed Exam`,
        `${newNote}${describeEligibility(e)} This will start a timed ${durationMin}-minute exam simulation with ${count} randomized questions${scope}. Answers and explanations will be hidden until you submit.`,
        () => startExamMode()
      );
    } else {
      stopTimer();
      state.mode = 'practice';
      state.examSession = null;
      dom.practiceModeBtn.classList.add('active');
      dom.examModeBtn.classList.remove('active');
      dom.timerBar.style.display = 'none';
      saveStorage();
      applyFilters();
      renderQuestion();
      }
  }

  // Start Exam Mode
  function startExamMode() {
    const pool = getExamPool();
    if (!pool.length) return;

    state.mode = 'exam';
    dom.practiceModeBtn.classList.remove('active');
    dom.examModeBtn.classList.add('active');

    // Never ask for more questions than the selected area(s) can supply.
    const count = Math.min(state.examQuestionCount, pool.length);
    const examQuestions = buildWeightedExam(count);
    // The exam keeps its own answers so it always starts clean and never
    // inherits (or overwrites) practice-mode answers.
    state.examSession = {
      active: true,
      submitted: false,
      questions: examQuestions,
      questionCount: count,
      areas: [...state.examAreaFilter],
      answers: {},
      startTime: Date.now(),
      durationSec: count * 2 * 60 // 2 minutes per question
    };

    state.currentIndex = 0;
    state.filterDomain = 'all';
    state.filterStatus = 'all';
    state.filterStudy = 'all';
    state.searchQuery = '';
    if (dom.filterDomain) dom.filterDomain.value = 'all';
    if (dom.filterStatus) dom.filterStatus.value = 'all';
    if (dom.filterStudy) dom.filterStudy.value = 'all';
    if (dom.searchInput) dom.searchInput.value = '';

    dom.timerBar.style.display = 'block';
    startTimer();
    saveStorage();
    applyFilters();
    renderQuestion();
  }

  // Official exam-guide domain weights (sum = 100)
  const EXAM_WEIGHTS = {
    'Explaining application network basics': 7,
    'Establishing organizational and platform foundations': 10,
    'Designing and sharing APIs': 10,
    'Designing APIs using System, Process, and Experience Layers': 12,
    'Governing web APIs on Anypoint Platform': 17,
    'Architecting and deploying API implementations': 11,
    'Deploying API implementations to CloudHub': 11,
    'Meeting API quality goals': 10,
    'Monitoring and analyzing application networks': 12
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Draw a `count`-question exam that mirrors the official domain weights.
  // When the user has selected specific areas, the draw is limited to those areas
  // and re-normalizes the official weights across the selected subset.
  //
  // With "new questions only" enabled, each domain's quota is filled from the
  // highest-priority tier first (non-studied, then failed, then already-correct),
  // and the top-up pool is tier-ordered the same way so the exam prefers new
  // questions and only falls back to studied ones when it has to.
  function buildWeightedExam(count) {
    const pool = getExamPool();
    const byDomain = {};
    pool.forEach(q => {
      const d = q.domain || 'General';
      (byDomain[d] = byDomain[d] || []).push(q);
    });

    const domains = Object.keys(EXAM_WEIGHTS).filter(d => byDomain[d] && byDomain[d].length);
    const fallbackDomains = Object.keys(byDomain).filter(d => !domains.includes(d));
    const weightedDomains = domains.concat(fallbackDomains);
    const totalWeight = domains.reduce((s, d) => s + EXAM_WEIGHTS[d], 0) || 100;

    const quotas = weightedDomains.map(d => {
      const weight = EXAM_WEIGHTS[d] || 0;
      const exact = (count * weight) / totalWeight;
      return { domain: d, base: Math.floor(exact), frac: exact - Math.floor(exact) };
    });

    let assigned = quotas.reduce((s, q) => s + q.base, 0);
    const byFrac = [...quotas].sort((a, b) => b.frac - a.frac);
    for (let i = 0; assigned < count && i < byFrac.length; i++, assigned++) {
      byFrac[i].base++;
    }

    const picked = [];
    const pickedIds = new Set();
    quotas.forEach(({ domain, base }) => {
      tieredOrder(byDomain[domain]).slice(0, base).forEach(q => {
        picked.push(q);
        pickedIds.add(q.id);
      });
    });

    // Top up if a domain had fewer questions than its quota.
    if (picked.length < count) {
      tieredOrder(pool).forEach(q => {
        if (picked.length < count && !pickedIds.has(q.id)) {
          picked.push(q);
          pickedIds.add(q.id);
        }
      });
    }

    return shuffle(picked).slice(0, count);
  }

  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    if (!state.examSession) return;
    const elapsedSec = Math.floor((Date.now() - state.examSession.startTime) / 1000);
    const remainingSec = Math.max(0, state.examSession.durationSec - elapsedSec);

    const hours = Math.floor(remainingSec / 3600);
    const mins = Math.floor((remainingSec % 3600) / 60);
    const secs = remainingSec % 60;

    dom.timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (remainingSec <= 0) {
      stopTimer();
      submitExam();
    }
  }

  // Submit Exam
  function submitExam() {
    stopTimer();
    const session = state.examSession;
    const examQuestions = session ? session.questions : state.questions;
    const examAnswers = session ? (session.answers || {}) : state.userAnswers;
    let correct = 0;
    const domainScores = {};

    examQuestions.forEach(q => {
      const userAns = examAnswers[q.id];
      const d = q.domain || 'General';
      if (!domainScores[d]) domainScores[d] = { total: 0, correct: 0 };
      domainScores[d].total++;

      if (hasAnswer(userAns) && answersMatch(q, userAns)) {
        correct++;
        domainScores[d].correct++;
      }
    });

    // Exam is now finished: mark it inactive so a reload does not resume it.
    if (session) {
      session.active = false;
      session.submitted = true;
    }
    saveStorage();
    // Re-render the grid so the summary page shows each question flagged
    // correct (green) or incorrect (red) instead of the in-progress blue.
    renderGrid();
    updateStats();
    renderExamResult(examQuestions, correct, domainScores);
  }

  // Draw the score summary for a submitted exam. Shared by submit and restore.
  function renderExamResult(examQuestions, correct, domainScores) {
    const total = examQuestions.length || 1;
    const scorePercent = Math.round((correct / total) * 100);
    const passed = scorePercent >= 70;

    if (dom.questionArea) dom.questionArea.style.display = 'none';
    if (!dom.resultView) return;

    dom.resultView.style.display = 'block';
    dom.resultView.innerHTML = `
      <div class="result-card">
        <div class="result-circle ${passed ? 'pass' : 'fail'}">
          ${scorePercent}%
        </div>
        <h2>${passed ? '🎉 Congratulations! You Passed' : '❌ Needs Review — Did Not Pass'}</h2>
        <p style="color: var(--text-muted)">Passing score is 70%. You scored <strong>${correct}</strong> out of <strong>${examQuestions.length}</strong> questions.</p>

        <div class="domain-breakdown">
          <h3 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Domain Performance Breakdown</h3>
          ${Object.keys(domainScores).map(d => {
            const sc = domainScores[d];
            const pct = Math.round((sc.correct / sc.total) * 100);
            return `
              <div class="domain-row">
                <span>${d}</span>
                <strong>${sc.correct}/${sc.total} (${pct}%)</strong>
              </div>
            `;
          }).join('')}
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
          <button class="btn btn-primary" id="review-exam-btn">Review All Questions with Explanations</button>
          <button class="btn btn-secondary" id="retake-exam-btn">Retake New Exam</button>
        </div>
      </div>
    `;

    document.getElementById('review-exam-btn')?.addEventListener('click', () => {
      // Keep the submitted exam session so the review shows the exam's own
      // questions and answers, with correctness revealed and answers locked.
      state.currentIndex = 0;
      dom.timerBar.style.display = 'none';
      applyFilters();
      renderQuestion();
      updateStats();
      renderGrid();
    });

    document.getElementById('retake-exam-btn')?.addEventListener('click', () => {
      startExamMode();
    });
  }

  // Re-open the score summary of the submitted exam (e.g. after a reload).
  function showExamResults() {
    const session = state.examSession;
    if (!session) return;
    const examQuestions = session.questions || [];
    const examAnswers = session.answers || {};
    let correct = 0;
    const domainScores = {};

    examQuestions.forEach(q => {
      const userAns = examAnswers[q.id];
      const d = q.domain || 'General';
      if (!domainScores[d]) domainScores[d] = { total: 0, correct: 0 };
      domainScores[d].total++;
      if (hasAnswer(userAns) && answersMatch(q, userAns)) {
        correct++;
        domainScores[d].correct++;
      }
    });

    renderExamResult(examQuestions, correct, domainScores);
  }

  // Modal helpers
  function showConfirmModal(title, msg, onConfirm) {
    dom.modalTitle.textContent = title;
    dom.modalMsg.textContent = msg;
    dom.confirmModal.style.display = 'flex';

    const handleConfirm = () => {
      dom.confirmModal.style.display = 'none';
      dom.modalConfirmBtn.removeEventListener('click', handleConfirm);
      dom.modalCancelBtn.removeEventListener('click', handleCancel);
      onConfirm();
    };

    const handleCancel = () => {
      dom.confirmModal.style.display = 'none';
      dom.modalConfirmBtn.removeEventListener('click', handleConfirm);
      dom.modalCancelBtn.removeEventListener('click', handleCancel);
    };

    dom.modalConfirmBtn.addEventListener('click', handleConfirm);
    dom.modalCancelBtn.addEventListener('click', handleCancel);
  }

  // Reset Answers: clears answers, flags and the exam session but keeps the
  // studied history (questions remain marked as studied).
  function resetAllProgress() {
    showConfirmModal(
      'Reset Answers',
      'This clears your answers, flags and any exam session so your score returns to 0. Your studied-question history is kept. Use "Erase Everything" to also clear that.',
      () => {
        state.userAnswers = {};
        state.flagged.clear();
        state.currentIndex = 0;
        state.examSession = null;
        state.mode = 'practice';
        stopTimer();
        dom.timerBar.style.display = 'none';
        dom.practiceModeBtn.classList.add('active');
        dom.examModeBtn.classList.remove('active');
        saveStorage();
        applyFilters();
        renderQuestion();
      }
    );
  }

  // Erase Everything: clears answers, flags, the exam session AND the studied
  // history. This is a full wipe of all progress.
  function eraseEverything() {
    showConfirmModal(
      'Erase Everything?',
      'WARNING: This permanently erases ALL progress — every answer, flag, exam session and your entire studied-question history. This cannot be undone.',
      () => {
        state.userAnswers = {};
        state.flagged.clear();
        state.studied.clear();
        state.questionResults = {};
        state.currentIndex = 0;
        state.examSession = null;
        state.mode = 'practice';
        state.filterStudy = 'all';
        if (dom.filterStudy) dom.filterStudy.value = 'all';
        stopTimer();
        dom.timerBar.style.display = 'none';
        dom.practiceModeBtn.classList.add('active');
        dom.examModeBtn.classList.remove('active');
        saveStorage();
        applyFilters();
        renderQuestion();
      }
    );
  }

  // Keyboard Navigation
  function handleKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

    const q = state.filteredQuestions[state.currentIndex];
    const key = e.key.toUpperCase();
    if (e.shiftKey && key === 'F') {
      toggleFlag();
    } else if (q && ['A', 'B', 'C', 'D', 'E', 'F'].includes(key) && q.options.some(opt => opt.letter === key)) {
      selectOption(q.id, key);
    } else if (q && ['1', '2', '3', '4', '5', '6'].includes(key)) {
      const idx = parseInt(key, 10) - 1;
      if (q.options[idx]) selectOption(q.id, q.options[idx].letter);
    } else if (e.key === 'Enter') {
      if (state.mode === 'practice' && !dom.checkBtn.disabled && dom.checkBtn.style.display !== 'none') {
        checkAnswer();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
      if (state.currentIndex < state.filteredQuestions.length - 1) {
        state.currentIndex++;
        renderQuestion();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
      }
    }
  }

  // Event bindings
  function bindEvents() {
    // Theme
    dom.themeBtn?.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      setupTheme();
      saveStorage();
    });

    // Reset (answers only) and Erase Everything (full wipe)
    dom.resetBtn?.addEventListener('click', resetAllProgress);
    dom.eraseBtn?.addEventListener('click', eraseEverything);

    // Mode Buttons
    dom.practiceModeBtn?.addEventListener('click', () => setMode('practice'));
    dom.examModeBtn?.addEventListener('click', () => setMode('exam'));

    // Exam Question Count Dropdown
    dom.examCountSelect?.addEventListener('change', (e) => {
      const count = parseInt(e.target.value, 10) || 60;
      state.examQuestionCount = count;
      try {
        localStorage.setItem(STORAGE_KEYS.EXAM_COUNT, count.toString());
      } catch (err) {
        console.error('Failed to save exam count', err);
      }
      updateExamBtnLabel();

      if (state.mode === 'exam') {
        const pool = getExamPool();
        const effective = Math.min(count, pool.length);
        showConfirmModal(
          `Restart Exam with ${effective} Questions?`,
          `Changing the question count will start a new timed ${effective * 2}-minute exam session with ${effective} questions. Your active exam session will be reset.`,
          () => startExamMode()
        );
      }
    });

    // Question Actions
    dom.checkBtn?.addEventListener('click', checkAnswer);
    dom.flagBtn?.addEventListener('click', toggleFlag);
    dom.prevBtn?.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
      }
    });
    dom.nextBtn?.addEventListener('click', () => {
      if (state.currentIndex < state.filteredQuestions.length - 1) {
        state.currentIndex++;
        renderQuestion();
      }
    });
    dom.submitExamBtn?.addEventListener('click', () => {
      showConfirmModal(
        'Submit Exam for Scoring',
        'Are you sure you want to finish and submit your exam now?',
        submitExam
      );
    });

    // Filters & Search
    dom.filterDomain?.addEventListener('change', (e) => {
      state.filterDomain = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderQuestion();
    });

    dom.filterStatus?.addEventListener('change', (e) => {
      state.filterStatus = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderQuestion();
    });

    dom.filterStudy?.addEventListener('change', (e) => {
      state.filterStudy = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderQuestion();
    });

    dom.searchInput?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderQuestion();
    });

    // Timed Exam area filter
    dom.examAreaAllBtn?.addEventListener('click', () => setAllExamAreas(true));
    dom.examAreaClearBtn?.addEventListener('click', () => setAllExamAreas(false));

    // Timed Exam: new questions only toggle
    dom.examNewOnly?.addEventListener('change', (e) => {
      state.examNewQuestionsOnly = e.target.checked;
      saveStorage();
      updateExamBtnLabel();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeyDown);

    // Google Drive sync
    dom.driveBtn?.addEventListener('click', promptDriveSyncChoice);
    dom.driveDisconnectBtn?.addEventListener('click', () => {
      showConfirmModal(
        'Disconnect Google Drive',
        'Progress will stop syncing to Drive on this device. Your local progress stays intact and the file in your Drive is left untouched.',
        () => {
          saveStorage();
          window.MCPA_DRIVE?.disconnect();
          updateDriveButton();
        }
      );
    });
    dom.conflictLocalBtn?.addEventListener('click', () => {
      hideConflictModal();
      window.MCPA_DRIVE?.resolveConflict('local');
    });
    dom.conflictDriveBtn?.addEventListener('click', () => {
      hideConflictModal();
      window.MCPA_DRIVE?.resolveConflict('drive');
    });
    dom.conflictCancelBtn?.addEventListener('click', hideConflictModal);
    dom.reauthNowBtn?.addEventListener('click', () => {
      if (dom.reauthModal) dom.reauthModal.style.display = 'none';
      reauthPrompted = false;
      window.MCPA_DRIVE?.reauth();
    });
    dom.reauthOfflineBtn?.addEventListener('click', () => {
      if (dom.reauthModal) dom.reauthModal.style.display = 'none';
      reauthPrompted = false;
    });

    // Flush pending changes when the tab is hidden or closing.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') window.MCPA_DRIVE?.flush();
    });
    window.addEventListener('pagehide', () => window.MCPA_DRIVE?.flush());
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
