/* ═══════════════════════════════════════════
   AI CONFIGURATION & QUESTION GENERATOR
═══════════════════════════════════════════ */

const AI_CFG = {
  claude: {
    label: 'Claude Sonnet 4', icon: '◆',
    url:   'https://api.anthropic.com/v1/messages',
    model: 'claude-sonnet-4-20250514', maxTok: 8000
  },
  gemini: {
    label: 'Gemini 2.5 Flash', icon: '✦',
    key:   'AIzaSyCqx0Vs0l1RM6EKZrb5UcAMAScJcrNgK_0',
    model: 'gemini-2.5-flash',
    get url() { return `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.key}`; }
  },
  grok: {
    label: 'Groq Llama 3.3', icon: '⬡',
    key:   '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',
    url:   'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile', maxTok: 8000
  }
};

function getActiveModel() { return localStorage.getItem('aiModel') || 'gemini'; }
function setActiveModel(k) { localStorage.setItem('aiModel', k); }

/* ── CORE CALL ── */
async function aiCall(prompt, modelKey) {
  const key = modelKey || getActiveModel();
  const cfg = AI_CFG[key];

  if (key === 'claude') {
    const res = await fetch(cfg.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({ model: cfg.model, max_tokens: cfg.maxTok, messages: [{ role: 'user', content: prompt }] })
    });
    if (!res.ok) { const t = await res.text(); throw Object.assign(new Error('Claude ' + res.status), { status: res.status, body: t }); }
    const d = await res.json();
    return d.content.map(c => c.text || '').join('');
  }

  if (key === 'gemini') {
    const res = await fetch(cfg.url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!res.ok) { const t = await res.text(); throw Object.assign(new Error('Gemini ' + res.status), { status: res.status, body: t }); }
    const d = await res.json();
    return d.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  if (key === 'grok') {
    const res = await fetch(cfg.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${cfg.key}` },
      body: JSON.stringify({ model: cfg.model, max_tokens: cfg.maxTok, messages: [{ role: 'user', content: prompt }] })
    });
    if (!res.ok) { const t = await res.text(); throw Object.assign(new Error('Groq ' + res.status), { status: res.status, body: t }); }
    const d = await res.json();
    return d.choices?.[0]?.message?.content || '';
  }
}

/* ── PARSE JSON ── */
function parseAIJson(raw) {
  const clean = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
  try { return JSON.parse(clean); }
  catch (e) {
    const m = clean.match(/\[[\s\S]*\]/);
    if (m) return JSON.parse(m[0]);
    throw e;
  }
}

/* ── PROMPTS ── */
const PROMPTS = {
  phrasal(baseVerb, verbs) {
    return `Generate 5 fill-in-the-blank questions testing phrasal verbs with base verb "${baseVerb}".
Phrasal verbs to test: ${verbs.join(', ')}
Difficulty: SSC CGL/CHSL exam level — tough, no trivial questions.
- Each sentence must be natural, exam-style English
- 4 options per question, all from the same base verb group
- Each option: "verb" (phrasal verb) and "hint" (Hindi meaning, max 5 words)
- "feedback" explaining why correct answer is right and distractors are wrong
- RANDOM questions — do not reuse example sentences
Respond ONLY with JSON array, no markdown:
[{"id":"q1","sentence":"...___...","correct":"exact phrasal verb","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  preposition(group, words) {
    return `Generate 5 fill-in-the-blank questions testing preposition usage for group: "${group}".
Words to test: ${words.join(', ')}
Difficulty: SSC CGL level — tough, vocabulary-focused.
- Sentence must contextualise which specific word fits
- 4 options (the words themselves, not prepositions)
- "hint" = Hindi meaning or usage clue, max 5 words
- "feedback" = why correct word fits and others don't
Respond ONLY with JSON array, no markdown:
[{"id":"q1","sentence":"...___...","correct":"word","options":[{"verb":"word","hint":"..."}],"feedback":"..."}]`;
  },

  idiom(setName, idioms) {
    return `Generate 5 fill-in-the-blank questions testing idioms from "${setName}".
Idioms (pick 5 randomly): ${idioms.map(i => i.phrase).join(', ')}
Difficulty: SSC level — contextual, no giveaways.
- Sentence must make the idiom meaningful in context
- 4 options (idiom phrases), "hint" = Hindi meaning max 6 words
- "feedback" explaining correct answer and distractors
Respond ONLY with JSON array, no markdown:
[{"id":"q1","sentence":"...___...","correct":"idiom phrase","options":[{"verb":"phrase","hint":"..."}],"feedback":"..."}]`;
  },

  grammar(ruleName, ruleDesc) {
    return `Generate 5 error-spotting or fill-in-the-blank questions for grammar rule: "${ruleName}".
Description: ${ruleDesc}
Difficulty: SSC CGL level — subtle errors, not obvious.
- Mix of fill-in-blank and error-identification
- 4 options, "hint" = brief clue
- "feedback" = clear grammar explanation referencing the rule
Respond ONLY with JSON array, no markdown:
[{"id":"q1","sentence":"...___...","correct":"answer","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  modal(modalName, uses) {
    return `Generate 5 fill-in-the-blank questions testing modal verb "${modalName}".
Uses to cover: ${uses.join(', ')}
Difficulty: SSC CGL level — nuanced modal distinctions.
- Each question tests a specific use of the modal
- 4 options: different modals or modal forms
- "hint" = usage label (e.g. "possibility", "obligation")
- "feedback" = why this modal and not the others
Respond ONLY with JSON array, no markdown:
[{"id":"q1","sentence":"...___...","correct":"modal","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  testBatch(module, subtopics, count) {
    return `Generate ${count} fill-in-the-blank questions for an English test.
Module: ${module}. Topics: ${subtopics.join(', ')}
Difficulty: SSC CGL/CHSL competitive exam level.
- Distribute questions evenly across all subtopics
- 4 options per question with Hindi hints
- Detailed feedback for each
- IMPORTANT: "item_key" field = exact subtopic name this question belongs to (must match one of: ${subtopics.join(', ')})
- "topic" field = same as item_key
Respond ONLY with JSON array, no markdown:
[{"id":"q1","topic":"subtopic name","item_key":"subtopic name","sentence":"...___...","correct":"answer","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  }
};

/* ══════════════════════════════════════════════════════════
   GENERATE + CACHE
   forceRefresh: true → always generate fresh (used by timed test)
══════════════════════════════════════════════════════════ */
async function generateAndCache({ userId, module, itemKey, promptText, forceRefresh, onLoad, onReady, onError }) {
  const modelKey = getActiveModel();

  /* ── Cache check (skipped when forceRefresh = true) ── */
  if (userId && !forceRefresh) {
    try {
      const cached = await sbGetCachedQuestions(userId, module, itemKey, modelKey);
      if (cached && cached.length) {
        onReady(cached, 'cache');
        return;
      }
    } catch (e) { console.warn('Cache check failed:', e); }
  }

  /* ── Generate ── */
  onLoad();
  try {
    const raw = await aiCall(promptText, modelKey);
    const qs  = parseAIJson(raw);

    /* Filter out malformed questions */
    const valid = qs.filter(q => q && q.id && q.sentence && q.options && q.options.length);

    /* Assign stable IDs */
    valid.forEach((q, i) => {
      q.id = q.id || `${itemKey.replace(/\s+/g,'_')}_${modelKey}_${i}`;
    });

    /* Save to cache (always, even for forceRefresh — so AI practice tab can load them) */
    if (userId) {
      try { await sbSaveCachedQuestions(userId, module, itemKey, modelKey, valid); }
      catch (e) { console.error('Cache save failed:', e); }

      /* Split by item_key for batch questions */
      const byKey = {};
      valid.forEach(q => {
        const k = q.item_key || q.topic;
        if (k && k !== itemKey) {
          if (!byKey[k]) byKey[k] = [];
          byKey[k].push(q);
        }
      });
      for (const [subKey, subQs] of Object.entries(byKey)) {
        try { await sbSaveCachedQuestions(userId, module, subKey, modelKey, subQs); }
        catch (e) { console.error('Cache save failed for subtopic', subKey, e); }
      }
    }

    onReady(valid, 'fresh');
  } catch (err) {
    console.error('AI error:', err);
    onError(err);
  }
}