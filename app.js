// MCPA Practice Exam Simulator Logic

(function() {
  'use strict';

  // State
  const state = {
    questions: window.MCPA_QUESTIONS || [],
    currentIndex: 0,
    filteredQuestions: [],
    mode: 'practice', // 'practice' | 'exam'
    filterType: 'all', // 'all' | 'unanswered' | 'correct' | 'incorrect' | 'flagged'
    filterDomain: 'all',
    searchQuery: '',
    
    // Stored in localStorage
    userAnswers: {}, // { qId: selectedLetter }
    flagged: new Set(), // Set of qIds
    examSession: null, // { active: bool, questions: [], answers: {}, startTime: number, durationSec: number }
    theme: 'light'
  };

  // LocalStorage keys
  const STORAGE_KEYS = {
    ANSWERS: 'mcpa_user_answers_v1',
    FLAGGED: 'mcpa_flagged_v1',
    EXAM: 'mcpa_exam_session_v1',
    THEME: 'mcpa_theme_v1',
    LAST_INDEX: 'mcpa_last_index_v1'
  };

  // DOM Elements
  const dom = {
    themeBtn: document.getElementById('theme-btn'),
    resetBtn: document.getElementById('reset-btn'),
    practiceModeBtn: document.getElementById('mode-practice'),
    examModeBtn: document.getElementById('mode-exam'),
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
    searchInput: document.getElementById('search-input'),
    qGrid: document.getElementById('q-grid'),
    
    // Modals
    confirmModal: document.getElementById('confirm-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalMsg: document.getElementById('modal-msg'),
    modalConfirmBtn: document.getElementById('modal-confirm-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    
    // Results
    resultView: document.getElementById('result-view')
  };

  let timerInterval = null;

  // Initialize
  function init() {
    loadStorage();
    setupTheme();
    populateDomainFilter();
    applyFilters();
    bindEvents();
    renderQuestion();
    updateStats();
    renderGrid();
  }

  // Load from localStorage
  function loadStorage() {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

      const savedFlagged = localStorage.getItem(STORAGE_KEYS.FLAGGED);
      if (savedFlagged) state.flagged = new Set(JSON.parse(savedFlagged));

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) state.theme = savedTheme;

      const savedLastIndex = localStorage.getItem(STORAGE_KEYS.LAST_INDEX);
      if (savedLastIndex) state.currentIndex = parseInt(savedLastIndex, 10) || 0;

      const savedExam = localStorage.getItem(STORAGE_KEYS.EXAM);
      if (savedExam) state.examSession = JSON.parse(savedExam);
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
  }

  // Save to localStorage
  function saveStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(state.userAnswers));
      localStorage.setItem(STORAGE_KEYS.FLAGGED, JSON.stringify(Array.from(state.flagged)));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
      localStorage.setItem(STORAGE_KEYS.LAST_INDEX, state.currentIndex.toString());
      if (state.examSession) {
        localStorage.setItem(STORAGE_KEYS.EXAM, JSON.stringify(state.examSession));
      } else {
        localStorage.removeItem(STORAGE_KEYS.EXAM);
      }
    } catch (e) {
      console.error('Failed to save localStorage', e);
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

  // Apply filters
  function applyFilters() {
    let list = state.mode === 'exam' && state.examSession ? state.examSession.questions : state.questions;

    // Filter by domain
    if (state.filterDomain !== 'all') {
      list = list.filter(q => q.domain === state.filterDomain);
    }

    // Filter by status
    if (state.filterStatus === 'unanswered') {
      list = list.filter(q => !state.userAnswers[q.id]);
    } else if (state.filterStatus === 'correct') {
      list = list.filter(q => state.userAnswers[q.id] && state.userAnswers[q.id] === q.correctAnswer);
    } else if (state.filterStatus === 'incorrect') {
      list = list.filter(q => state.userAnswers[q.id] && state.userAnswers[q.id] !== q.correctAnswer);
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
    dom.questionPrompt.textContent = q.prompt;

    // Render Options
    dom.optionsList.innerHTML = '';
    const selectedAnswer = state.userAnswers[q.id];
    const isAnswered = selectedAnswer !== undefined;
    const isPractice = state.mode === 'practice';

    q.options.forEach((opt, idx) => {
      const item = document.createElement('div');
      item.className = 'option-item';
      item.dataset.letter = opt.letter;

      // Selection state
      if (selectedAnswer === opt.letter) {
        item.classList.add('selected');
      }

      // If answered in practice mode, reveal feedback
      if (isPractice && isAnswered) {
        item.classList.add('disabled');
        if (opt.letter === q.correctAnswer) {
          item.classList.add('correct');
        } else if (selectedAnswer === opt.letter) {
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
        if (isPractice && isAnswered) return; // Locked after check
        selectOption(q.id, opt.letter);
      });

      dom.optionsList.appendChild(item);
    });

    // Check Answer button & Explanation in Practice Mode
    if (isPractice) {
      if (isAnswered) {
        dom.checkBtn.style.display = 'none';
        renderExplanation(q, selectedAnswer);
      } else {
        dom.checkBtn.style.display = 'inline-flex';
        dom.checkBtn.disabled = !selectedAnswer;
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
    state.userAnswers[qId] = letter;
    
    // Update selected styling in UI
    const optionItems = dom.optionsList.querySelectorAll('.option-item');
    optionItems.forEach(item => {
      if (item.dataset.letter === letter) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });

    if (state.mode === 'practice') {
      dom.checkBtn.disabled = false;
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
    if (!selected) return;

    renderQuestion();
  }

  // Render Explanation & Deep-Dive Links
  function renderExplanation(q, selected) {
    dom.explanationBox.style.display = 'flex';
    const isCorrect = selected === q.correctAnswer;

    if (isCorrect) {
      dom.expHeader.className = 'exp-header correct';
      dom.expHeaderText.textContent = '✓ Correct Answer!';
    } else {
      dom.expHeader.className = 'exp-header incorrect';
      dom.expHeaderText.textContent = `✗ Incorrect (Correct Answer: ${q.correctAnswer})`;
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

    // Verified study references
    dom.refLinksContainer.innerHTML = '';
    if (q.references) {
      if (q.references.primary && q.references.primary.url) {
        const link = createRefLink(q.references.primary.title, q.references.primary.url, '📖 Primary Documentation');
        dom.refLinksContainer.appendChild(link);
      }
      if (q.references.architectureGuide && q.references.architectureGuide.url) {
        const link = createRefLink(q.references.architectureGuide.title, q.references.architectureGuide.url, '🏛️ Architecture Guide / Standard');
        dom.refLinksContainer.appendChild(link);
      }
      if (q.references.arc720 && q.references.arc720.lesson) {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'ref-link';
        lessonDiv.style.color = 'var(--text-muted)';
        lessonDiv.innerHTML = `<span>🎓 <strong>ARC720 Alignment:</strong> ${q.references.arc720.lesson}</span>`;
        dom.refLinksContainer.appendChild(lessonDiv);
      }
    }
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
    const total = state.questions.length;
    const answeredKeys = Object.keys(state.userAnswers);
    const answeredCount = answeredKeys.length;

    let correctCount = 0;
    answeredKeys.forEach(qId => {
      const q = state.questions.find(item => item.id === qId);
      if (q && state.userAnswers[qId] === q.correctAnswer) {
        correctCount++;
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const progressPercent = Math.round((answeredCount / total) * 100);

    if (dom.statScore) dom.statScore.textContent = `${correctCount} / ${answeredCount}`;
    if (dom.statAnswered) dom.statAnswered.textContent = `${answeredCount} / ${total}`;
    if (dom.statAccuracy) dom.statAccuracy.textContent = `${accuracy}%`;
    if (dom.progressFill) dom.progressFill.style.width = `${progressPercent}%`;
  }

  // Sidebar Question Grid
  function renderGrid() {
    if (!dom.qGrid) return;
    dom.qGrid.innerHTML = '';

    const list = state.filteredQuestions;
    list.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'q-grid-btn';
      btn.textContent = q.number;

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }

      const ans = state.userAnswers[q.id];
      if (ans !== undefined) {
        if (state.mode === 'practice') {
          if (ans === q.correctAnswer) {
            btn.classList.add('correct');
          } else {
            btn.classList.add('incorrect');
          }
        } else {
          // In exam mode, answered is marked without revealing correctness
          btn.classList.add('answered-exam');
          btn.style.background = 'var(--primary-light)';
          btn.style.color = 'var(--primary)';
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
    if (state.mode === newMode) return;
    
    if (newMode === 'exam') {
      showConfirmModal(
        'Start 60-Question Timed Exam',
        'This will start a timed 120-minute exam simulation with 60 randomized questions. Answers and explanations will be hidden until you submit.',
        () => startExamMode()
      );
    } else {
      stopTimer();
      state.mode = 'practice';
      state.examSession = null;
      dom.practiceModeBtn.classList.add('active');
      dom.examModeBtn.classList.remove('active');
      dom.timerBar.style.display = 'none';
      applyFilters();
      renderQuestion();
    }
  }

  // Start Exam Mode
  function startExamMode() {
    state.mode = 'exam';
    dom.practiceModeBtn.classList.remove('active');
    dom.examModeBtn.classList.add('active');

    // Shuffle and pick 60 questions
    const shuffled = [...state.questions].sort(() => 0.5 - Math.random()).slice(0, 60);
    
    state.examSession = {
      active: true,
      questions: shuffled,
      startTime: Date.now(),
      durationSec: 120 * 60 // 120 minutes
    };

    state.currentIndex = 0;
    state.filterDomain = 'all';
    state.filterStatus = 'all';
    state.searchQuery = '';
    if (dom.filterDomain) dom.filterDomain.value = 'all';
    if (dom.filterStatus) dom.filterStatus.value = 'all';
    if (dom.searchInput) dom.searchInput.value = '';

    dom.timerBar.style.display = 'block';
    startTimer();
    applyFilters();
    renderQuestion();
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
    const examQuestions = state.examSession ? state.examSession.questions : state.questions;
    let correct = 0;
    let answered = 0;
    const domainScores = {};

    examQuestions.forEach(q => {
      const userAns = state.userAnswers[q.id];
      const d = q.domain || 'General';
      if (!domainScores[d]) domainScores[d] = { total: 0, correct: 0 };
      domainScores[d].total++;

      if (userAns !== undefined) {
        answered++;
        if (userAns === q.correctAnswer) {
          correct++;
          domainScores[d].correct++;
        }
      }
    });

    const scorePercent = Math.round((correct / examQuestions.length) * 100);
    const passed = scorePercent >= 70;

    // Render Result View
    if (dom.questionArea) dom.questionArea.style.display = 'none';
    if (dom.resultView) {
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
        state.mode = 'practice';
        dom.practiceModeBtn.classList.add('active');
        dom.examModeBtn.classList.remove('active');
        dom.timerBar.style.display = 'none';
        applyFilters();
        renderQuestion();
      });

      document.getElementById('retake-exam-btn')?.addEventListener('click', () => {
        startExamMode();
      });
    }
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

  // Reset Progress
  function resetAllProgress() {
    showConfirmModal(
      'Reset All Progress',
      'Are you sure you want to clear all your answers and progress? This will reset your score to 0.',
      () => {
        state.userAnswers = {};
        state.flagged.clear();
        state.currentIndex = 0;
        state.examSession = null;
        stopTimer();
        saveStorage();
        applyFilters();
        renderQuestion();
      }
    );
  }

  // Keyboard Navigation
  function handleKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(key)) {
      const q = state.filteredQuestions[state.currentIndex];
      if (q) selectOption(q.id, key);
    } else if (['1', '2', '3', '4'].includes(key)) {
      const q = state.filteredQuestions[state.currentIndex];
      const letters = ['A', 'B', 'C', 'D'];
      const idx = parseInt(key, 10) - 1;
      if (q && letters[idx]) selectOption(q.id, letters[idx]);
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
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFlag();
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

    // Reset
    dom.resetBtn?.addEventListener('click', resetAllProgress);

    // Mode Buttons
    dom.practiceModeBtn?.addEventListener('click', () => setMode('practice'));
    dom.examModeBtn?.addEventListener('click', () => setMode('exam'));

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

    dom.searchInput?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderQuestion();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeyDown);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
