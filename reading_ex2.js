/* ═══════════════════════════════════════════════════════════════
   reading_ex2.js  —  Exercise 2 Question Screen
   Replaces buildEx2() and buildEx2RecallD1() in reading.html

   Usage:
     Ex2Screen.start({
       questions:   [...],          // array of question objects
       passage:     'text...',      // passage string (null on recall days)
       isRecall:    false,          // true = no passage, centered layout
       onComplete:  (results) => {} // called with array of per-question results
     });

   Each result object:
     { question_index, question_type, profile_*, time_taken, correct, chosen }
═══════════════════════════════════════════════════════════════ */

const Ex2Screen = (() => {

  /* ── state ── */
  let _questions   = [];
  let _passage     = null;
  let _isRecall    = false;
  let _onComplete  = null;

  let _activeIdx   = null;   // which question is currently open
  let _answers     = {};     // { qIdx: chosenOptionIndex }
  let _timers      = {};     // { qIdx: totalMsSpent }
  let _tickStart   = null;   // Date.now() when current question was opened
  let _tickHandle  = null;

  /* ══════════════════════════════════════════
     PUBLIC: start
  ══════════════════════════════════════════ */
  function start({ questions, passage, isRecall, onComplete }) {
    _questions  = questions  || [];
    _passage    = passage    || null;
    _isRecall   = isRecall   || false;
    _onComplete = onComplete || (() => {});
    _activeIdx  = null;
    _answers    = {};
    _timers     = {};
    _tickStart  = null;
    clearInterval(_tickHandle);

    _render();
  }

  /* ══════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════ */
  function _render() {
    const content = document.getElementById('ex-content');
    content.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.id = 'ex2-root';
    wrap.className = _isRecall ? 'ex2-recall-layout' : 'ex2-split-layout';
    wrap.innerHTML = _isRecall ? _recallLayout() : _splitLayout();
    content.appendChild(wrap);

    _bindPalette();
    _updatePalette();
    _updateSubmitBtn();
  }

  function _splitLayout() {
    return `
      <div class="ex2-passage-col">
        <div class="ex2-passage-label">passage</div>
        <div class="ex2-passage-body">${_esc(_passage || '')}</div>
      </div>
      <div class="ex2-question-col">
        ${_paletteHtml()}
        <div class="ex2-q-area" id="ex2-q-area">
          <div class="ex2-q-placeholder">
            <div class="ex2-q-placeholder-icon">↑</div>
            <div class="ex2-q-placeholder-text">Click a question number above to begin</div>
          </div>
        </div>
        <div class="ex2-footer">
          <button class="ex2-submit-btn" id="ex2-submit-btn" onclick="Ex2Screen._submit()">
            Submit Exercise 2
          </button>
          <div class="ex2-submit-note" id="ex2-submit-note"></div>
        </div>
      </div>`;
  }

  function _recallLayout() {
    return `
      <div class="ex2-recall-inner">
        <div class="ex2-recall-banner">
          <i class="ti ti-refresh"></i> Recall — answer from memory, no passage
        </div>
        ${_paletteHtml()}
        <div class="ex2-q-area" id="ex2-q-area">
          <div class="ex2-q-placeholder">
            <div class="ex2-q-placeholder-icon">↑</div>
            <div class="ex2-q-placeholder-text">Click a question number above to begin</div>
          </div>
        </div>
        <div class="ex2-footer">
          <button class="ex2-submit-btn" id="ex2-submit-btn" onclick="Ex2Screen._submit()">
            Submit Exercise 2
          </button>
          <div class="ex2-submit-note" id="ex2-submit-note"></div>
        </div>
      </div>`;
  }

  function _paletteHtml() {
    const dots = _questions.map((_, i) => `
      <button class="ex2-dot" id="ex2-dot-${i}" onclick="Ex2Screen._openQ(${i})">
        ${i + 1}
      </button>`).join('');
    return `
      <div class="ex2-palette">
        <div class="ex2-palette-label">Questions</div>
        <div class="ex2-palette-dots">${dots}</div>
      </div>`;
  }

  /* ══════════════════════════════════════════
     OPEN A QUESTION
  ══════════════════════════════════════════ */
  function _openQ(idx) {
    /* pause timer on previous question */
    _pauseTimer();

    _activeIdx = idx;

    /* start timer for this question */
    _startTimer(idx);

    /* render question panel */
    const area = document.getElementById('ex2-q-area');
    if (!area) return;

    const q    = _questions[idx];
    const opts = (q.options || []).map((o, oi) => {
      const sel = _answers[idx] === oi;
      return `<div class="ex2-opt ${sel ? 'ex2-opt-sel' : ''}"
                   data-qi="${idx}" data-vi="${oi}"
                   onclick="Ex2Screen._selectOpt(${idx}, ${oi}, this)">
        <span class="ex2-opt-key">${'ABCD'[oi]}</span>
        <span class="ex2-opt-text">${_esc(o)}</span>
      </div>`;
    }).join('');

    area.innerHTML = `
      <div class="ex2-q-card" id="ex2-q-card-${idx}">
        <div class="ex2-q-meta">
          <span class="ex2-q-num">Question ${idx + 1}</span>
          <span class="ex2-q-type">${q.type || 'fact'}</span>
          <span class="ex2-q-timer-live" id="ex2-qtimer-${idx}">0s</span>
        </div>
        <div class="ex2-q-text">${_esc(q.text || '')}</div>
        <div class="ex2-opts">${opts}</div>
      </div>`;

    _updatePalette();
    _updateSubmitBtn();

    /* live timer tick */
    clearInterval(_tickHandle);
    _tickHandle = setInterval(() => {
      const el = document.getElementById(`ex2-qtimer-${idx}`);
      if (!el) return;
      const total = (_timers[idx] || 0) + (Date.now() - (_tickStart || Date.now()));
      el.textContent = Math.floor(total / 1000) + 's';
    }, 500);
  }

  /* ══════════════════════════════════════════
     OPTION SELECT
  ══════════════════════════════════════════ */
  function _selectOpt(qi, vi, el) {
    _answers[qi] = vi;
    document.querySelectorAll(`[data-qi="${qi}"]`).forEach(o => o.classList.remove('ex2-opt-sel'));
    el.classList.add('ex2-opt-sel');
    _updatePalette();
    _updateSubmitBtn();
  }

  /* ══════════════════════════════════════════
     TIMER HELPERS
  ══════════════════════════════════════════ */
  function _startTimer(idx) {
    _tickStart = Date.now();
    if (!_timers[idx]) _timers[idx] = 0;
  }

  function _pauseTimer() {
    if (_activeIdx === null || _tickStart === null) return;
    _timers[_activeIdx] = (_timers[_activeIdx] || 0) + (Date.now() - _tickStart);
    _tickStart = null;
    clearInterval(_tickHandle);
  }

  /* ══════════════════════════════════════════
     PALETTE UPDATE
  ══════════════════════════════════════════ */
  function _updatePalette() {
    _questions.forEach((_, i) => {
      const dot = document.getElementById(`ex2-dot-${i}`);
      if (!dot) return;
      dot.className = 'ex2-dot';
      if (i === _activeIdx)          dot.classList.add('ex2-dot-active');
      if (_answers[i] !== undefined) dot.classList.add('ex2-dot-answered');
      else if (_timers[i] > 0)       dot.classList.add('ex2-dot-seen');
    });
  }

  function _bindPalette() {
    /* already bound via onclick in HTML — nothing extra needed */
  }

  /* ══════════════════════════════════════════
     SUBMIT BUTTON STATE
  ══════════════════════════════════════════ */
  function _updateSubmitBtn() {
    const answered = Object.keys(_answers).length;
    const total    = _questions.length;
    const note     = document.getElementById('ex2-submit-note');
    if (note) {
      note.textContent = answered < total
        ? `${answered} / ${total} answered`
        : 'All answered ✓';
      note.style.color = answered === total ? 'var(--green)' : 'var(--text3)';
    }
  }

  /* ══════════════════════════════════════════
     SUBMIT
  ══════════════════════════════════════════ */
  function _submit() {
    const unanswered = _questions.length - Object.keys(_answers).length;
    if (unanswered > 0) {
      if (!confirm(`${unanswered} question${unanswered > 1 ? 's' : ''} unanswered. Submit anyway?`)) return;
    }

    _pauseTimer();
    clearInterval(_tickHandle);

    const results = _questions.map((q, i) => ({
      question_index: i,
      question_type:  q.type || 'fact',
      profile_i:      q.profile?.i   || null,
      profile_a:      q.profile?.a   || null,
      profile_v:      q.profile?.v   || null,
      profile_g:      q.profile?.g   || null,
      profile_wm:     q.profile?.wm  || null,
      profile_sp:     q.profile?.sp  || null,
      profile_sq:     q.profile?.sq  || null,
      profile_wp:     q.profile?.wp  || null,
      profile_wq:     q.profile?.wq  || null,
      profile_xp:     q.profile?.xp  || null,
      time_taken:     Math.floor((_timers[i] || 0) / 1000),
      correct:        _answers[i] === q.correct,
      chosen:         _answers[i] !== undefined ? _answers[i] : null,
    }));

    _onComplete(results);
  }

  /* ══════════════════════════════════════════
     STYLES
  ══════════════════════════════════════════ */
  function _injectStyles() {
    if (document.getElementById('ex2-styles')) return;
    const st = document.createElement('style');
    st.id = 'ex2-styles';
    st.textContent = `
/* ── split layout ── */
.ex2-split-layout {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 0;
  min-height: calc(100vh - 120px);
  align-items: start;
}
.ex2-passage-col {
  padding: 2rem 2.5rem 2rem 0;
  position: sticky;
  top: 98px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}
.ex2-passage-col::-webkit-scrollbar { width: 4px; }
.ex2-passage-col::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }
.ex2-passage-label {
  font-family: 'DM Mono', monospace;
  font-size: 8.5px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--text3);
  margin-bottom: 14px;
}
.ex2-passage-body {
  font-family: 'Merriweather', serif;
  font-size: 14px; line-height: 1.95;
  color: var(--text1); font-weight: 300;
}
.ex2-question-col {
  border-left: 1px solid var(--border);
  padding: 2rem 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: calc(100vh - 120px);
}

/* ── recall layout ── */
.ex2-recall-layout {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}
.ex2-recall-inner {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ex2-recall-banner {
  background: var(--chain-bg);
  border: 1px solid #C8C5E8;
  border-radius: var(--radius-sm);
  padding: 8px 14px;
  font-family: 'DM Mono', monospace;
  font-size: 9px; letter-spacing: .08em;
  text-transform: uppercase; color: var(--chain-text);
  margin-bottom: 1.5rem;
  display: inline-flex; align-items: center; gap: 8px;
}

/* ── palette ── */
.ex2-palette {
  margin-bottom: 1.5rem;
}
.ex2-palette-label {
  font-family: 'DM Mono', monospace;
  font-size: 8.5px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--text3);
  margin-bottom: 10px;
}
.ex2-palette-dots {
  display: flex; gap: 8px; flex-wrap: wrap;
}
.ex2-dot {
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1.5px solid var(--border);
  background: var(--bg2);
  color: var(--text3);
  font-family: 'DM Mono', monospace;
  font-size: 11px; font-weight: 500;
  cursor: pointer;
  transition: all .15s;
  display: flex; align-items: center; justify-content: center;
}
.ex2-dot:hover {
  border-color: var(--border2);
  color: var(--text1);
  background: var(--bg3);
}
.ex2-dot.ex2-dot-active {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-bg);
}
.ex2-dot.ex2-dot-answered {
  background: var(--green-bg);
  border-color: var(--green-border);
  color: var(--green);
}
.ex2-dot.ex2-dot-answered.ex2-dot-active {
  outline-color: var(--green);
}
.ex2-dot.ex2-dot-seen {
  background: var(--bg3);
  border-color: var(--border2);
  color: var(--text2);
}

/* ── question area ── */
.ex2-q-area {
  flex: 1;
  min-height: 200px;
  margin-bottom: 1.5rem;
}
.ex2-q-placeholder {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px;
  height: 180px;
  border: 1.5px dashed var(--border2);
  border-radius: var(--radius);
  color: var(--text3);
}
.ex2-q-placeholder-icon {
  font-size: 22px; opacity: .4;
}
.ex2-q-placeholder-text {
  font-size: 12px;
}
.ex2-q-card {
  animation: slideUp .3s ease both;
}
.ex2-q-meta {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 10px;
}
.ex2-q-num {
  font-family: 'DM Mono', monospace;
  font-size: 8.5px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--text3);
}
.ex2-q-type {
  font-family: 'DM Mono', monospace;
  font-size: 8px; padding: 1px 6px;
  border-radius: 3px;
  background: var(--chain-bg); color: var(--chain-text);
}
.ex2-q-timer-live {
  font-family: 'DM Mono', monospace;
  font-size: 9px; color: var(--text3);
  margin-left: auto;
  display: flex; align-items: center; gap: 4px;
}
.ex2-q-timer-live::before {
  content: '';
  display: inline-block;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse .9s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .3; }
}
.ex2-q-text {
  font-family: 'Merriweather', serif;
  font-size: 13.5px; line-height: 1.75;
  font-weight: 300; color: var(--text1);
  margin-bottom: 16px;
}
.ex2-opts {
  display: flex; flex-direction: column; gap: 7px;
}
.ex2-opt {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 9px 12px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all .13s;
  font-family: 'DM Mono', monospace;
  font-size: 10px; color: var(--text1);
  line-height: 1.6;
  background: var(--surface);
}
.ex2-opt:hover {
  border-color: var(--border2);
  background: var(--bg2);
}
.ex2-opt.ex2-opt-sel {
  border-color: #7F77DD;
  background: var(--chain-bg);
  color: var(--chain-text);
}
.ex2-opt-key {
  font-weight: 600; min-width: 14px;
  color: var(--text3); flex-shrink: 0;
}
.ex2-opt.ex2-opt-sel .ex2-opt-key {
  color: var(--chain-text);
}

/* ── footer ── */
.ex2-footer {
  display: flex; align-items: center; gap: 14px;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}
.ex2-submit-btn {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  background: var(--text1); color: var(--surface);
  border: none; border-radius: 6px;
  padding: 9px 22px;
  cursor: pointer;
  letter-spacing: .04em;
  transition: background .15s;
}
.ex2-submit-btn:hover { background: var(--accent); }
.ex2-submit-note {
  font-family: 'DM Mono', monospace;
  font-size: 10px; color: var(--text3);
}

@media (max-width: 700px) {
  .ex2-split-layout {
    grid-template-columns: 1fr;
  }
  .ex2-passage-col {
    position: static;
    max-height: none;
    padding: 0 0 1.5rem 0;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.5rem;
  }
  .ex2-question-col {
    border-left: none;
    padding: 0;
  }
}
    `;
    document.head.appendChild(st);
  }

  /* ── util ── */
  function _esc(s) {
    return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* init styles immediately */
  _injectStyles();

  /* ══════════════════════════════════════════
     PUBLIC API
  ══════════════════════════════════════════ */
  return {
    start,
    _openQ,
    _selectOpt,
    _submit,
  };

})();