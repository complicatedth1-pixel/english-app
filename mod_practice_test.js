/* ═══════════════════════════════════════════════════════
   mod_practice_test.js  —  Practice Test Screen
   Fixes:
   - Loading screen shows % progress and step labels
   - Groq 429 / AI errors handled gracefully with retry
   - generateAndCache errors no longer freeze the overlay
   Depends on: ai.js (generateAndCache, PROMPTS, getActiveModel)
               supabase.js (sbSaveAnswer, sbSaveTestSession)
               app.html (getDB exposed globally)
═══════════════════════════════════════════════════════ */

const PT = (() => {

  /* ── STATE ── */
  let S = {};

  function resetState(mod, key, user, questions) {
    S = {
      mod, key, user,
      questions,
      cur:          0,
      answers:      {},
      visited:      new Set(),
      marked:       new Set(),
      qTimers:      {},
      qStart:       Date.now(),
      totalSecs:    20 * 60,
      totalElapsed: 0,
      lastTick:     Date.now(),
      paused:       false,
      submitted:    false,
      timerHandle:  null,
      posMarks:     2,
      negMarks:     0.5,
    };
  }

  /* ── INJECT STYLES (once) ── */
  function injectStyles() {
    if (document.getElementById('pt-styles')) return;
    const st = document.createElement('style');
    st.id = 'pt-styles';
    st.textContent = `
#pt-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: var(--bg); display: flex; flex-direction: column;
  font-family: 'DM Sans', sans-serif;
}
.pt-hdr {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 18px; height: 52px; background: var(--surface);
  border-bottom: 1px solid var(--border); flex-shrink: 0;
}
.pt-hdr-left  { display: flex; align-items: center; gap: 14px; }
.pt-hdr-right { display: flex; align-items: center; gap: 10px; }
.pt-title     { font-family: 'Instrument Serif', serif; font-size: 17px; color: var(--text1); letter-spacing: -.2px; }
.pt-meta      { font-size: 12px; color: var(--text3); margin-top: 1px; }
.pt-clock-pair { display: flex; align-items: center; gap: 8px; }
.pt-clock      { display: flex; flex-direction: column; align-items: center; }
.pt-clock-lbl  { font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: .5px; line-height: 1; }
.pt-clock-val  { font-size: 14px; font-weight: 600; color: var(--text1); line-height: 1.3; letter-spacing: .5px; }
.pt-clock-val.warn { color: var(--red); }
.pt-clk-sep    { width: 1px; height: 28px; background: var(--border2); }
.pt-icon-btn {
  width: 30px; height: 30px; border-radius: 50%;
  border: 1px solid var(--border2); background: var(--bg2);
  color: var(--text2); cursor: pointer; display: flex; align-items: center;
  justify-content: center; font-size: 14px; transition: all .15s;
}
.pt-icon-btn:hover { background: var(--bg3); color: var(--text1); }
.pt-close-btn {
  padding: 5px 14px; border-radius: var(--radius-sm);
  border: 1px solid var(--border); background: transparent;
  font-size: 13px; color: var(--text2); cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: all .15s;
}
.pt-close-btn:hover { background: var(--bg2); color: var(--text1); }
.pt-prog-strip { height: 3px; background: var(--border); flex-shrink: 0; }
.pt-prog-fill  { height: 100%; background: var(--accent); transition: width .35s ease; }
.pt-body { display: flex; flex: 1; overflow: hidden; }
.pt-qpanel {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; min-width: 0;
}
.pt-qhdr {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 22px; border-bottom: 1px solid var(--border); flex-shrink: 0;
}
.pt-qhdr-l  { display: flex; align-items: center; gap: 10px; }
.pt-qnum    { font-size: 15px; font-weight: 600; color: var(--text1); }
.pt-marks   { display: flex; gap: 6px; }
.pt-badge   { padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 500; }
.pt-bg-green { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
.pt-bg-red   { background: var(--red-bg);   color: var(--red);   border: 1px solid var(--red-border);   }
.pt-qtimer   { font-size: 12px; color: var(--text3); display: flex; align-items: center; gap: 4px; }
.pt-qbody    { flex: 1; overflow-y: auto; padding: 22px 24px; }
.pt-qbody::-webkit-scrollbar { width: 4px; }
.pt-qbody::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }
.pt-qtext {
  font-size: 15px; line-height: 1.8; color: var(--text1); font-weight: 500;
  padding: 16px 18px; background: var(--bg2); border: 1px solid var(--border);
  border-radius: var(--radius); margin-bottom: 20px;
}
.pt-options { display: flex; flex-direction: column; gap: 9px; }
.pt-option {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px 16px; border-radius: var(--radius-sm);
  border: 1.5px solid var(--border); background: var(--surface);
  cursor: pointer; transition: all .13s; user-select: none;
}
.pt-option:hover { border-color: var(--border2); background: var(--bg2); }
.pt-option.pt-sel { border-color: var(--blue-border); background: var(--blue-bg); }
.pt-opt-key {
  width: 24px; height: 24px; border-radius: 5px; flex-shrink: 0;
  background: var(--bg2); border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600; color: var(--text2); transition: all .13s;
}
.pt-option.pt-sel .pt-opt-key { background: var(--blue-bg); color: var(--blue); border-color: var(--blue-border); }
.pt-opt-text { font-size: 14px; color: var(--text1); line-height: 1.5; padding-top: 2px; }
.pt-opt-hint { font-size: 12px; color: var(--text3); margin-top: 2px; }
.pt-footer {
  padding: 10px 20px; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  background: var(--surface); flex-shrink: 0;
}
.pt-foot-l, .pt-foot-r { display: flex; gap: 8px; }
.pt-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 15px; border-radius: var(--radius-sm);
  border: 1px solid var(--border); background: var(--bg2);
  color: var(--text2); font-family: 'DM Sans', sans-serif;
  font-size: 13px; font-weight: 500; cursor: pointer; transition: all .13s;
}
.pt-btn:hover { background: var(--bg3); color: var(--text1); border-color: var(--border2); }
.pt-btn-accent { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-border); }
.pt-btn-accent:hover { background: #fae0d8; }
.pt-btn-idiom  { background: var(--idiom-bg);   color: var(--idiom);   border-color: var(--idiom-border); }
.pt-btn-idiom:hover  { background: #ead9f8; }
.pt-palette {
  width: 192px; flex-shrink: 0; background: var(--surface);
  border-left: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden;
}
.pt-pal-hdr {
  padding: 10px 13px; border-bottom: 1px solid var(--border);
  font-size: 11px; font-weight: 600; color: var(--text3);
  text-transform: uppercase; letter-spacing: .6px; flex-shrink: 0;
}
.pt-pal-body { flex: 1; overflow-y: auto; padding: 8px 10px 0; }
.pt-pal-body::-webkit-scrollbar { width: 3px; }
.pt-pal-body::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }
.pt-dot-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-bottom: 8px; }
.pt-dot {
  aspect-ratio: 1; border-radius: 5px; display: flex; align-items: center;
  justify-content: center; font-size: 10px; font-weight: 500;
  cursor: pointer; border: 1px solid var(--border2); background: var(--bg2);
  color: var(--text3); transition: all .12s;
}
.pt-dot:hover { border-color: var(--text3); color: var(--text2); }
.pt-dot.pt-active    { outline: 2px solid var(--accent); outline-offset: 1px; }
.pt-dot.pt-attempted { background: var(--green-bg);  border-color: var(--green-border);  color: var(--green);  }
.pt-dot.pt-marked    { background: var(--blue-bg);   border-color: var(--blue-border);   color: var(--blue);   }
.pt-dot.pt-seen      { background: var(--idiom-bg);  border-color: var(--idiom-border);  color: var(--idiom);  }
.pt-pal-legend {
  padding: 8px 12px; border-top: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 5px; flex-shrink: 0;
}
.pt-leg-row { display: flex; align-items: center; gap: 7px; font-size: 11px; color: var(--text3); }
.pt-leg-dot { width: 9px; height: 9px; border-radius: 2px; flex-shrink: 0; }
.pt-submit-wrap { padding: 9px 10px 11px; border-top: 1px solid var(--border); flex-shrink: 0; }
.pt-submit-btn {
  width: 100%; padding: 10px; background: var(--accent); color: #fff;
  border: none; border-radius: var(--radius-sm);
  font-family: 'Instrument Serif', serif; font-size: 15px;
  cursor: pointer; transition: opacity .15s;
}
.pt-submit-btn:hover { opacity: .88; }
.pt-pal-note { font-size: 11px; color: var(--text3); text-align: center; margin-top: 5px; }

/* ── LOADING SCREEN (enhanced with progress) ── */
.pt-loading-screen {
  position: absolute; inset: 0; background: var(--bg); z-index: 10;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
}
.pt-spinner {
  width: 36px; height: 36px; border: 2.5px solid var(--border);
  border-top-color: var(--accent); border-radius: 50%;
  animation: pt-spin .8s linear infinite;
}
@keyframes pt-spin { to { transform: rotate(360deg); } }
.pt-load-title { font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--text1); }
.pt-load-sub   { font-size: 13px; color: var(--text3); text-align: center; max-width: 280px; line-height: 1.5; }
.pt-load-bar-wrap {
  width: 240px; height: 5px; background: var(--border);
  border-radius: 3px; overflow: hidden; margin-top: 4px;
}
.pt-load-bar {
  height: 100%; background: var(--accent);
  border-radius: 3px; transition: width 0.4s ease;
  width: 0%;
}
.pt-load-pct { font-size: 12px; color: var(--text3); margin-top: 2px; }
.pt-load-steps {
  display: flex; flex-direction: column; align-items: center; gap: 4px; margin-top: 4px;
}
.pt-load-step {
  font-size: 12px; color: var(--text3); display: flex; align-items: center; gap: 6px;
}
.pt-load-step.done { color: var(--green); }
.pt-load-step.active { color: var(--text1); font-weight: 500; }
.pt-load-step-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--border2); flex-shrink: 0;
}
.pt-load-step.done .pt-load-step-dot   { background: var(--green); }
.pt-load-step.active .pt-load-step-dot { background: var(--accent); }

/* ── ERROR STATE ── */
.pt-load-error {
  display: none; flex-direction: column; align-items: center; gap: 12px;
  text-align: center; padding: 0 24px;
}
.pt-load-error.show { display: flex; }
.pt-load-error-icon { font-size: 32px; }
.pt-load-error-title { font-size: 15px; font-weight: 600; color: var(--red); }
.pt-load-error-sub   { font-size: 13px; color: var(--text2); line-height: 1.5; }
.pt-load-retry-btn {
  padding: 8px 20px; border-radius: var(--radius-sm);
  background: var(--accent); color: #fff; border: none;
  font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
  cursor: pointer; transition: opacity .15s;
}
.pt-load-retry-btn:hover { opacity: .85; }

/* results */
.pt-results {
  position: absolute; inset: 0; background: var(--bg); z-index: 20;
  display: none; flex-direction: column; overflow-y: auto;
}
.pt-results.show { display: flex; }
.pt-res-hdr {
  padding: 18px 26px; background: var(--surface);
  border-bottom: 1px solid var(--border); flex-shrink: 0;
  display: flex; align-items: flex-start; justify-content: space-between;
}
.pt-res-title { font-family: 'Instrument Serif', serif; font-size: 22px; color: var(--text1); margin-bottom: 3px; }
.pt-res-sub   { font-size: 13px; color: var(--text3); }
.pt-res-body  { padding: 20px 26px; flex: 1; max-width: 760px; margin: 0 auto; width: 100%; }
.pt-score-hero {
  display: flex; align-items: center; gap: 20px;
  padding: 18px 20px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 20px;
}
.pt-score-ring {
  width: 80px; height: 80px; border-radius: 50%;
  border: 3px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Instrument Serif', serif; font-size: 20px; color: var(--text1); flex-shrink: 0;
}
.pt-score-ring.good { border-color: var(--green); color: var(--green); }
.pt-score-ring.ok   { border-color: var(--grammar); color: var(--grammar); }
.pt-score-ring.poor { border-color: var(--red);   color: var(--red);   }
.pt-score-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; flex: 1; }
.pt-sc-stat { text-align: center; padding: 10px 8px; background: var(--bg2); border-radius: var(--radius-sm); }
.pt-sc-val  { font-size: 20px; font-weight: 600; }
.pt-sc-lab  { font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: .4px; margin-top: 3px; }
.pt-rv-title { font-size: 14px; font-weight: 600; color: var(--text2); margin-bottom: 10px; }
.pt-rv-list  { display: flex; flex-direction: column; gap: 8px; }
.pt-rv-item {
  padding: 13px 16px; border-radius: var(--radius-sm);
  border: 1px solid var(--border); background: var(--surface);
  border-left-width: 3px;
}
.pt-rv-item.c { border-left-color: var(--green); }
.pt-rv-item.w { border-left-color: var(--red);   }
.pt-rv-item.s { border-left-color: var(--border2); }
.pt-rv-top  { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
.pt-rv-qnum { font-size: 11px; font-weight: 600; color: var(--text3); flex-shrink: 0; }
.pt-rv-qtxt { font-size: 13px; color: var(--text1); line-height: 1.5; flex: 1; }
.pt-rv-bdg  { padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 500; flex-shrink: 0; }
.pt-rv-ans  { font-size: 12px; color: var(--text2); margin-bottom: 3px; }
.pt-rv-ans .ca { color: var(--green); font-weight: 500; }
.pt-rv-ans .wa { color: var(--red);   font-weight: 500; }
.pt-rv-time { font-size: 11px; color: var(--text3); }
.pt-rv-fb   {
  margin-top: 8px; padding: 8px 11px; background: var(--bg2);
  border-radius: var(--radius-sm); font-size: 12px; color: var(--text2);
  line-height: 1.55; border-left: 2px solid var(--accent);
}
@media (max-width: 600px) {
  .pt-palette { display: none; }
  .pt-score-stats { grid-template-columns: repeat(2,1fr); }
}
    `;
    document.head.appendChild(st);
  }

  /* ── BUILD OVERLAY HTML ── */
  function buildOverlay() {
    const div = document.createElement('div');
    div.id = 'pt-overlay';
    div.innerHTML = `
      <div class="pt-loading-screen" id="pt-loading">
        <div class="pt-spinner" id="pt-spinner"></div>
        <div class="pt-load-title">Generating questions…</div>
        <div class="pt-load-bar-wrap"><div class="pt-load-bar" id="pt-load-bar"></div></div>
        <div class="pt-load-pct" id="pt-load-pct">0%</div>
        <div class="pt-load-steps" id="pt-load-steps">
          <div class="pt-load-step active" id="pls-prompt">
            <div class="pt-load-step-dot"></div>Building prompt
          </div>
          <div class="pt-load-step" id="pls-ai">
            <div class="pt-load-step-dot"></div>Asking AI model
          </div>
          <div class="pt-load-step" id="pls-parse">
            <div class="pt-load-step-dot"></div>Parsing questions
          </div>
          <div class="pt-load-step" id="pls-cache">
            <div class="pt-load-step-dot"></div>Saving to cache
          </div>
        </div>
        <div class="pt-load-sub" id="pt-load-sub"></div>
        <div class="pt-load-error" id="pt-load-error">
          <div class="pt-load-error-icon">⚠️</div>
          <div class="pt-load-error-title" id="pt-err-title">Generation failed</div>
          <div class="pt-load-error-sub" id="pt-err-sub">The AI model couldn't generate questions right now.</div>
          <button class="pt-load-retry-btn" id="pt-retry-btn">Try Again</button>
          <button class="pt-close-btn" style="margin-top:4px" onclick="PT.close()">Close</button>
        </div>
      </div>

      <div class="pt-hdr">
        <div class="pt-hdr-left">
          <div>
            <div class="pt-title">Timed Practice</div>
            <div class="pt-meta" id="pt-meta">Loading…</div>
          </div>
        </div>
        <div class="pt-hdr-right">
          <div class="pt-clock-pair">
            <div class="pt-clock">
              <span class="pt-clock-lbl">This Q</span>
              <span class="pt-clock-val" id="pt-qclock">00:00</span>
            </div>
            <div class="pt-clk-sep"></div>
            <div class="pt-clock">
              <span class="pt-clock-lbl">Remaining</span>
              <span class="pt-clock-val" id="pt-totalclock">20:00</span>
            </div>
          </div>
          <button class="pt-icon-btn" id="pt-pause-btn" onclick="PT.togglePause()" title="Pause">
            <i class="ti ti-player-pause"></i>
          </button>
          <button class="pt-close-btn" onclick="PT.close()">✕ Exit</button>
        </div>
      </div>

      <div class="pt-prog-strip"><div class="pt-prog-fill" id="pt-prog-fill" style="width:0%"></div></div>

      <div class="pt-body">
        <div class="pt-qpanel">
          <div class="pt-qhdr">
            <div class="pt-qhdr-l">
              <span class="pt-qnum" id="pt-qnum">Question 1</span>
              <div class="pt-marks">
                <span class="pt-badge pt-bg-green">+2</span>
                <span class="pt-badge pt-bg-red">−0.5</span>
              </div>
            </div>
            <div class="pt-qtimer"><i class="ti ti-clock" style="font-size:13px"></i><span id="pt-qtimer-live">0s</span></div>
          </div>
          <div class="pt-qbody">
            <div class="pt-qtext" id="pt-qtext"></div>
            <div class="pt-options" id="pt-options"></div>
          </div>
          <div class="pt-footer">
            <div class="pt-foot-l">
              <button class="pt-btn" onclick="PT.prevQ()"><i class="ti ti-arrow-left"></i> Prev</button>
              <button class="pt-btn" onclick="PT.clearResp()"><i class="ti ti-x"></i> Clear</button>
            </div>
            <div class="pt-foot-r">
              <button class="pt-btn pt-btn-idiom" onclick="PT.markNext()"><i class="ti ti-flag"></i> Mark & Next</button>
              <button class="pt-btn pt-btn-accent" onclick="PT.saveNext()">Save & Next <i class="ti ti-arrow-right"></i></button>
            </div>
          </div>
        </div>

        <div class="pt-palette">
          <div class="pt-pal-hdr">Question Palette</div>
          <div class="pt-pal-body" id="pt-pal-body"></div>
          <div class="pt-pal-legend">
            <div class="pt-leg-row"><div class="pt-leg-dot" style="background:var(--green-bg);border:1px solid var(--green-border)"></div>Attempted</div>
            <div class="pt-leg-row"><div class="pt-leg-dot" style="background:var(--bg2);border:1px solid var(--border2)"></div>Not visited</div>
            <div class="pt-leg-row"><div class="pt-leg-dot" style="background:var(--blue-bg);border:1px solid var(--blue-border)"></div>Marked</div>
            <div class="pt-leg-row"><div class="pt-leg-dot" style="background:var(--idiom-bg);border:1px solid var(--idiom-border)"></div>Seen, skipped</div>
          </div>
          <div class="pt-submit-wrap">
            <button class="pt-submit-btn" onclick="PT.confirmSubmit()">Submit Test</button>
            <div class="pt-pal-note" id="pt-pal-note"></div>
          </div>
        </div>
      </div>

      <div class="pt-results" id="pt-results">
        <div class="pt-res-hdr">
          <div>
            <div class="pt-res-title">Practice Analysis</div>
            <div class="pt-res-sub" id="pt-res-sub"></div>
          </div>
          <div style="display:flex;gap:8px">
            <button class="pt-btn" onclick="PT.close()"><i class="ti ti-home"></i> Back to Practice</button>
          </div>
        </div>
        <div class="pt-res-body">
          <div class="pt-score-hero">
            <div class="pt-score-ring" id="pt-score-ring">—</div>
            <div class="pt-score-stats">
              <div class="pt-sc-stat"><div class="pt-sc-val" id="pt-res-score"   style="color:var(--accent)">—</div><div class="pt-sc-lab">Score</div></div>
              <div class="pt-sc-stat"><div class="pt-sc-val" id="pt-res-correct" style="color:var(--green)">—</div><div class="pt-sc-lab">Correct</div></div>
              <div class="pt-sc-stat"><div class="pt-sc-val" id="pt-res-wrong"   style="color:var(--red)">—</div><div class="pt-sc-lab">Wrong</div></div>
              <div class="pt-sc-stat"><div class="pt-sc-val" id="pt-res-skipped" style="color:var(--text3)">—</div><div class="pt-sc-lab">Skipped</div></div>
            </div>
          </div>
          <div class="pt-rv-title">Question-by-question review</div>
          <div class="pt-rv-list" id="pt-rv-list"></div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
  }

  /* ── LOADING PROGRESS HELPERS ── */
  function setLoadStep(stepId, status) {
    // status: 'active' | 'done' | '' (pending)
    const steps = ['pls-prompt', 'pls-ai', 'pls-parse', 'pls-cache'];
    const pcts  = { 'pls-prompt': 10, 'pls-ai': 40, 'pls-parse': 75, 'pls-cache': 100 };
    steps.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.className = 'pt-load-step' + (id === stepId && status ? ' ' + status : '');
      if (status === 'done' && steps.indexOf(id) < steps.indexOf(stepId)) {
        el.className = 'pt-load-step done';
      }
    });
    const pct = pcts[stepId] || 0;
    const bar = document.getElementById('pt-load-bar');
    const pctEl = document.getElementById('pt-load-pct');
    if (bar)   bar.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';
  }

  function showLoadError(title, sub, retryFn) {
    const spinner = document.getElementById('pt-spinner');
    const steps   = document.getElementById('pt-load-steps');
    const bar     = document.getElementById('pt-load-bar-wrap');
    const pct     = document.getElementById('pt-load-pct');
    const errDiv  = document.getElementById('pt-load-error');
    if (spinner) spinner.style.display = 'none';
    if (steps)   steps.style.display   = 'none';
    if (bar)     bar.style.display     = 'none';
    if (pct)     pct.style.display     = 'none';
    document.getElementById('pt-err-title').textContent = title;
    document.getElementById('pt-err-sub').textContent   = sub;
    if (errDiv) errDiv.classList.add('show');
    const retryBtn = document.getElementById('pt-retry-btn');
    if (retryBtn && retryFn) retryBtn.onclick = retryFn;
  }

  function resetLoadState() {
    const spinner = document.getElementById('pt-spinner');
    const steps   = document.getElementById('pt-load-steps');
    const bar     = document.getElementById('pt-load-bar-wrap');
    const pct     = document.getElementById('pt-load-pct');
    const errDiv  = document.getElementById('pt-load-error');
    if (spinner) spinner.style.display = '';
    if (steps)   steps.style.display   = '';
    if (bar)     bar.style.display     = '';
    if (pct)     pct.style.display     = '';
    if (errDiv)  errDiv.classList.remove('show');
    setLoadStep('pls-prompt', 'active');
  }

  /* ── PALETTE ── */
  function buildPalette() {
    const body = document.getElementById('pt-pal-body');
    body.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'pt-dot-grid';
    S.questions.forEach((_, qi) => {
      const dot = document.createElement('div');
      dot.className = 'pt-dot';
      dot.id = 'pt-dot-' + qi;
      dot.textContent = String(qi + 1).padStart(2, '0');
      dot.onclick = () => goTo(qi);
      grid.appendChild(dot);
    });
    body.appendChild(grid);
    updateAllDots();
    updatePalNote();
  }

  function dotCls(qi) {
    let c = 'pt-dot';
    if (qi === S.cur) c += ' pt-active';
    if (S.answers[qi] !== undefined) return c + ' pt-attempted' + (S.marked.has(qi) ? ' pt-marked' : '');
    if (S.marked.has(qi))            return c + ' pt-marked';
    if (S.visited.has(qi))           return c + ' pt-seen';
    return c;
  }

  function updateDot(qi) {
    const el = document.getElementById('pt-dot-' + qi);
    if (el) el.className = dotCls(qi);
  }

  function updateAllDots() { S.questions.forEach((_, i) => updateDot(i)); }

  function updatePalNote() {
    const left = S.questions.length - Object.keys(S.answers).length;
    const el = document.getElementById('pt-pal-note');
    if (el) el.textContent = left > 0 ? `${left} unattempted` : 'All answered ✓';
  }

  /* ── RENDER QUESTION ── */
  function renderQ(qi) {
    const q = S.questions[qi];
    S.visited.add(qi);

    document.getElementById('pt-qnum').textContent = `Question ${qi + 1} of ${S.questions.length}`;

    let questionHtml = '';
    if (q.sentence) {
      questionHtml = q.sentence.replace('_____',
        '<span style="display:inline-block;min-width:100px;border-bottom:2px solid var(--accent);color:var(--accent);font-weight:500;text-align:center;padding:0 4px">________</span>');
    } else if (q.q) {
      questionHtml = q.q;
    }
    document.getElementById('pt-qtext').innerHTML = questionHtml;

    const ol = document.getElementById('pt-options');
    ol.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D', 'E'];

    const opts = q.options || q.opts?.map(o => ({ verb: o, hint: '' })) || [];

    opts.forEach((opt, i) => {
      const div = document.createElement('div');
      const verb = typeof opt === 'string' ? opt : opt.verb;
      const hint = typeof opt === 'string' ? '' : (opt.hint || '');
      const isSel = S.answers[qi] === verb;
      div.className = 'pt-option' + (isSel ? ' pt-sel' : '');
      div.innerHTML = `<div class="pt-opt-key">${keys[i]}</div>
        <div class="pt-opt-text">${verb}${hint ? `<div class="pt-opt-hint">${hint}</div>` : ''}</div>`;
      div.onclick = () => selectAns(qi, verb, div);
      ol.appendChild(div);
    });

    document.getElementById('pt-prog-fill').style.width = ((qi + 1) / S.questions.length * 100) + '%';
    S.qStart = Date.now();
    const el = document.getElementById('pt-qtimer-live');
    if (el) el.textContent = '0s';
    updateDot(qi);
  }

  /* ── ANSWER ── */
  function selectAns(qi, verb, el) {
    S.answers[qi] = verb;
    document.querySelectorAll('.pt-option').forEach(o => o.classList.remove('pt-sel'));
    el.classList.add('pt-sel');
    updateDot(qi);
    updatePalNote();
  }

  /* ── NAV ── */
  function goTo(qi) {
    saveQTimer();
    const old = S.cur;
    S.cur = qi;
    updateDot(old);
    renderQ(qi);
    const dot = document.getElementById('pt-dot-' + qi);
    if (dot) dot.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  /* ── TIMERS ── */
  function saveQTimer() {
    const elapsed = Math.floor((Date.now() - S.qStart) / 1000);
    S.qTimers[S.cur] = (S.qTimers[S.cur] || 0) + elapsed;
  }

  function tick() {
    if (S.paused || S.submitted) return;
    const now = Date.now();
    const delta = Math.floor((now - S.lastTick) / 1000);
    if (delta > 0) { S.totalElapsed += delta; S.lastTick = now; }

    const rem = Math.max(0, S.totalSecs - S.totalElapsed);
    const m = Math.floor(rem / 60), sec = rem % 60;
    const tc = document.getElementById('pt-totalclock');
    if (tc) {
      tc.textContent = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
      tc.className   = 'pt-clock-val' + (rem < 300 ? ' warn' : '');
    }
    if (rem === 0) { submitTest(); return; }

    const qSec = Math.floor((Date.now() - S.qStart) / 1000);
    const qc = document.getElementById('pt-qclock');
    if (qc) qc.textContent = `${String(Math.floor(qSec/60)).padStart(2,'0')}:${String(qSec%60).padStart(2,'0')}`;
    const ql = document.getElementById('pt-qtimer-live');
    if (ql) ql.textContent = qSec + 's';
  }

  /* ── SAVE SESSION ── */
  async function saveSession() {
    if (!S.user) return;
    const results = S.questions.map((q, i) => {
      const chosen  = S.answers[i] !== undefined ? S.answers[i] : null;
      const correctAns = q.correct || (q.opts ? q.opts[q.ans] : null);
      return {
        qid:        q.id,
        chosen,
        correct:    chosen === correctAns,
        time_taken: S.qTimers[i] || 0,
      };
    });
    const correct = results.filter(r => r.chosen && r.correct).length;
    const wrong   = results.filter(r => r.chosen && !r.correct).length;
    const score   = correct * S.posMarks - wrong * S.negMarks;

    await sbSaveTestSession({
      userId:         S.user.id,
      module:         S.mod,
      subtopics:      [S.key],
      model:          getActiveModel(),
      totalQuestions: S.questions.length,
      timeAllocated:  S.totalSecs,
      timeTaken:      S.totalElapsed,
      score,
      results,
    }).catch(e => console.warn('saveSession error', e));
  }

  /* ── RESULTS ── */
  function showResults() {
    let correct = 0, wrong = 0, skipped = 0;
    S.questions.forEach((q, i) => {
      const correctAns = q.correct || (q.opts ? q.opts[q.ans] : null);
      if (S.answers[i] === undefined)          skipped++;
      else if (S.answers[i] === correctAns)    correct++;
      else                                      wrong++;
    });
    const score = correct * S.posMarks - wrong * S.negMarks;
    const pct   = Math.round((correct / S.questions.length) * 100);
    const tu    = S.totalElapsed;

    document.getElementById('pt-res-sub').textContent =
      `${S.key} · ${S.questions.length} questions · ${Math.floor(tu/60)}m ${tu%60}s used`;
    document.getElementById('pt-res-score').textContent   = score.toFixed(1);
    document.getElementById('pt-res-correct').textContent = correct;
    document.getElementById('pt-res-wrong').textContent   = wrong;
    document.getElementById('pt-res-skipped').textContent = skipped;

    const ring = document.getElementById('pt-score-ring');
    ring.textContent = score.toFixed(1);
    ring.className   = 'pt-score-ring ' + (pct >= 70 ? 'good' : pct >= 45 ? 'ok' : 'poor');

    const rl = document.getElementById('pt-rv-list');
    rl.innerHTML = '';
    S.questions.forEach((q, i) => {
      const correctAns = q.correct || (q.opts ? q.opts[q.ans] : null);
      const ans    = S.answers[i];
      const isSkip = ans === undefined;
      const isRight= ans === correctAns;
      const cls    = isSkip ? 's' : isRight ? 'c' : 'w';
      const marks  = isSkip ? '—' : isRight ? `+${S.posMarks}` : `−${S.negMarks}`;
      const bdgStyle = isSkip
        ? 'background:var(--bg2);color:var(--text3)'
        : isRight
          ? 'background:var(--green-bg);color:var(--green);border:1px solid var(--green-border)'
          : 'background:var(--red-bg);color:var(--red);border:1px solid var(--red-border)';
      const yourAns = isSkip
        ? '<span style="color:var(--text3)">Not attempted</span>'
        : isRight
          ? `<span class="ca">${ans}</span>`
          : `<span class="wa">${ans}</span>`;
      const corrSpan = `<span class="ca">${correctAns}</span>`;
      const timeSec  = S.qTimers[i] || 0;
      const rawText  = (q.sentence || q.q || '').replace(/<[^>]+>/g,'');
      const cleanQ   = rawText.substring(0, 90) + (rawText.length > 90 ? '…' : '');

      const item = document.createElement('div');
      item.className = `pt-rv-item ${cls}`;
      item.innerHTML = `
        <div class="pt-rv-top">
          <span class="pt-rv-qnum">Q${i+1}</span>
          <span class="pt-rv-qtxt">${cleanQ}</span>
          <span class="pt-rv-bdg" style="${bdgStyle}">${marks}</span>
        </div>
        <div class="pt-rv-ans">Your answer: ${yourAns}${!isRight && !isSkip ? ` &nbsp;·&nbsp; Correct: ${corrSpan}` : ''}</div>
        <div class="pt-rv-time"><i class="ti ti-clock" style="font-size:11px;margin-right:3px"></i>${timeSec}s spent</div>
        ${!isRight ? `<div class="pt-rv-fb">${q.feedback || q.exp || ''}</div>` : ''}
      `;
      rl.appendChild(item);
    });

    document.getElementById('pt-results').classList.add('show');
  }

  /* ── SUBMIT ── */
  function submitTest() {
    if (S.submitted) return;
    S.submitted = true;
    saveQTimer();
    clearInterval(S.timerHandle);
    saveSession();
    showResults();
  }

  /* ── GENERATE QUESTIONS ── */
  async function generateQuestions(mod, key, user) {
    const db    = (typeof getDB === 'function') ? getDB(mod) : null;
    const entry = db?.[key];

    if (!entry) {
      showLoadError('Content not found', `Could not load content for "${key}". Please go back and try again.`, null);
      return null;
    }

    let prompt = '';
    setLoadStep('pls-prompt', 'active');

    if      (mod === 'phrasal')     prompt = PROMPTS.phrasal(key, (entry.verbs  || []).map(v => v.pv));
    else if (mod === 'preposition') prompt = PROMPTS.preposition(key, (entry.words || []).map(v => v.word));
    else if (mod === 'idiom')       prompt = PROMPTS.idiom(key, entry.idioms || []);
    else if (mod === 'grammar')     prompt = (typeof PROMPTS.grammar === 'function')
      ? PROMPTS.grammar(key, (entry.words || []).map(v => v.word).join(', '))
      : `Generate 10 SSC-level fill-in-the-blank questions for grammar rule: ${key}. Words: ${(entry.words||[]).map(v=>v.word).join(', ')}. Return JSON array: [{id,sentence,correct,options:[{verb,hint}],feedback}]`;
    else if (mod === 'modal')       prompt = (typeof PROMPTS.modal === 'function')
      ? PROMPTS.modal(key, (entry.items || []).map(i => i.use || i.title || ''))
      : `Generate 10 SSC-level questions for modals: ${key}. Return JSON array: [{id,sentence,correct,options:[{verb,hint}],feedback}]`;

    setLoadStep('pls-ai', 'active');
    document.getElementById('pt-load-sub').textContent =
      `Using ${(typeof AI_CFG !== 'undefined' && AI_CFG[getActiveModel()]?.label) || 'AI'}…`;

    let qs = null;
    let genError = null;

    await generateAndCache({
      userId:     user?.id,
      module:     mod,
      itemKey:    key,
      promptText: prompt,
      onLoad:     () => {
        setLoadStep('pls-ai', 'done');
        setLoadStep('pls-parse', 'active');
      },
      onReady: (generated) => {
        setLoadStep('pls-parse', 'done');
        setLoadStep('pls-cache', 'active');
        qs = generated;
        setTimeout(() => setLoadStep('pls-cache', 'done'), 400);
      },
      onError: (err) => {
        genError = err;
        console.error('PT generate error:', err);
      }
    });

    if (genError || !qs || !qs.length) {
      const isRateLimit = genError?.message?.includes('429') || String(genError).includes('429');
      showLoadError(
        isRateLimit ? 'Rate limit reached' : 'Generation failed',
        isRateLimit
          ? 'The AI model is busy (rate limited). Switch to a different model using the pill in the nav, or wait 30 seconds and retry.'
          : 'The AI couldn\'t generate questions. Check your connection and try again.',
        () => {
          resetLoadState();
          generateQuestions(mod, key, user).then(q => {
            if (q) startTest(q, mod, key);
          });
        }
      );
      return null;
    }

    return qs;
  }

  function startTest(qs, mod, key) {
    S.questions = qs;
    document.getElementById('pt-loading').style.display = 'none';
    document.getElementById('pt-meta').textContent =
      `${key} · ${qs.length} questions · +2 / −0.5`;

    buildPalette();
    renderQ(0);

    S.lastTick    = Date.now();
    S.timerHandle = setInterval(tick, 500);
  }

  /* ══════════════════════════════════════
     PUBLIC API
  ══════════════════════════════════════ */
  return {

    async open({ mod, key, user }) {
      injectStyles();

      const old = document.getElementById('pt-overlay');
      if (old) old.remove();

      buildOverlay();
      resetState(mod, key, user, []);

      document.getElementById('pt-loading').style.display = 'flex';
      setLoadStep('pls-prompt', 'active');

      const qs = await generateQuestions(mod, key, user);
      if (qs) startTest(qs, mod, key);
    },

    togglePause() {
      S.paused = !S.paused;
      const btn = document.getElementById('pt-pause-btn');
      if (btn) btn.innerHTML = S.paused
        ? '<i class="ti ti-player-play"></i>'
        : '<i class="ti ti-player-pause"></i>';
      if (!S.paused) S.lastTick = Date.now();
    },

    prevQ()  { if (S.cur > 0) goTo(S.cur - 1); },

    saveNext() {
      saveQTimer();
      if (S.cur < S.questions.length - 1) goTo(S.cur + 1);
      else this.confirmSubmit();
    },

    markNext() {
      saveQTimer();
      S.marked.has(S.cur) ? S.marked.delete(S.cur) : S.marked.add(S.cur);
      updateDot(S.cur);
      if (S.cur < S.questions.length - 1) goTo(S.cur + 1);
    },

    clearResp() {
      delete S.answers[S.cur];
      renderQ(S.cur);
      updatePalNote();
    },

    confirmSubmit() {
      const left = S.questions.length - Object.keys(S.answers).length;
      if (left > 0 && !confirm(`${left} question${left > 1 ? 's' : ''} unattempted. Submit anyway?`)) return;
      submitTest();
    },

    close() {
      clearInterval(S.timerHandle);
      const ov = document.getElementById('pt-overlay');
      if (ov) ov.remove();
    }
  };

})();