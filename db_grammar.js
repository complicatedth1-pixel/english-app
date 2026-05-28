/* ═══════════════════════════════════════════
   GRAMMAR DATABASE
   Structure: DB_GR[RuleName] = { rule, rule_en, rule_hi, intro, wrong[], correct[], wrong_note, correct_note, questions[] }
═══════════════════════════════════════════ */

const DB_GR = {

  'Rule 1: Subject-Verb Agreement': {
    rule: true,
    intro: 'The verb must agree with its subject in number and person. This is one of the most tested rules in SSC error-spotting questions.',
    rule_en: 'A singular subject takes a singular verb; a plural subject takes a plural verb. Intervening phrases do not change this.',
    rule_hi: 'एकवचन कर्ता के साथ एकवचन क्रिया और बहुवचन कर्ता के साथ बहुवचन क्रिया आती है।',
    wrong:   [
      'The quality of the products <u>are</u> poor.',
      'Each of the students <u>have</u> submitted the form.',
      'Neither the manager nor the employees <u>was</u> informed.',
    ],
    correct: [
      'The quality of the products <u>is</u> poor.',
      'Each of the students <u>has</u> submitted the form.',
      'Neither the manager nor the employees <u>were</u> informed.',
    ],
    wrong_note:  'The head noun, not words in between, determines the verb.',
    correct_note:'With Neither…nor / Either…or, the verb agrees with the nearer subject.',
    questions: [
      { id:'gr1_1', sentence:'The committee _____ yet to reach a decision on the matter.', correct:'is', options:[{verb:'is',hint:'एकवचन — collective noun'},{verb:'are',hint:'बहुवचन'},{verb:'were',hint:'भूतकाल बहुवचन'},{verb:'have been',hint:'present perfect'}], feedback:'Collective nouns like committee, jury, team take a singular verb when they act as one unit. "The committee is" is correct.' },
      { id:'gr1_2', sentence:'Neither the principal nor the teachers _____ aware of the incident.', correct:'were', options:[{verb:'were',hint:'निकटवर्ती कर्ता के अनुसार'},{verb:'was',hint:'एकवचन'},{verb:'are',hint:'वर्तमान'},{verb:'have been',hint:'present perfect'}], feedback:'With Neither…nor, the verb agrees with the subject closer to it — "teachers" (plural) → were.' },
      { id:'gr1_3', sentence:'The news about the floods _____ the entire nation.', correct:'shocked', options:[{verb:'shocked',hint:'एकवचन क्रिया — news'},{verb:'shock',hint:'बहुवचन'},{verb:'have shocked',hint:'incorrect agreement'},{verb:'were shocking',hint:'incorrect form'}], feedback:'"News" is always singular. It takes a singular verb: "has shocked" / "shocked" (past). "Have shocked" is wrong because news is singular.' },
      { id:'gr1_4', sentence:'A large number of candidates _____ appeared for the examination.', correct:'have', options:[{verb:'have',hint:'large number = plural'},{verb:'has',hint:'singular'},{verb:'had',hint:'past'},{verb:'was',hint:'incorrect'}], feedback:'"A large number of" is followed by a plural noun and takes a plural verb. Contrast with "The number of candidates has increased" (singular).' },
      { id:'gr1_5', sentence:'The findings of the investigation _____ published last month.', correct:'were', options:[{verb:'were',hint:'findings = plural'},{verb:'was',hint:'singular'},{verb:'has been',hint:'singular present perfect'},{verb:'is',hint:'singular present'}], feedback:'"Findings" is plural; it takes the plural verb "were". "Was published" would be wrong.' },
    ]
  },

  'Rule 2: Tense Consistency': {
    rule: true,
    intro: 'Tenses must be consistent within a sentence or passage unless a genuine time shift is described. Shifting tenses randomly is a classic SSC error.',
    rule_en: 'Do not shift tenses unnecessarily. If the main clause is in the past, subordinate clauses are usually also in the past.',
    rule_hi: 'एक वाक्य में बिना कारण काल न बदलें। मुख्य वाक्य भूतकाल में हो तो उपवाक्य भी प्रायः भूतकाल में होता है।',
    wrong: [
      'She entered the room and <u>switches</u> on the light.',
      'He said that he <u>is</u> tired.',
      'The minister arrived and <u>gives</u> a speech.',
    ],
    correct: [
      'She entered the room and <u>switched</u> on the light.',
      'He said that he <u>was</u> tired.',
      'The minister arrived and <u>gave</u> a speech.',
    ],
    wrong_note:  'Mixing past and present tense in the same narrative is incorrect.',
    correct_note:'Reported speech back-shifts tense: "is" becomes "was", "will" becomes "would".',
    questions: [
      { id:'gr2_1', sentence:'The soldier fought bravely and _____ many enemies single-handedly.', correct:'defeated', options:[{verb:'defeated',hint:'भूतकाल — tense match'},{verb:'defeats',hint:'वर्तमान'},{verb:'has defeated',hint:'present perfect'},{verb:'defeat',hint:'base form'}], feedback:'"Fought" is simple past; the coordinate verb must also be simple past: "defeated".' },
      { id:'gr2_2', sentence:'The report stated that the project _____ due to lack of funds.', correct:'had been abandoned', options:[{verb:'had been abandoned',hint:'reported — past perfect'},{verb:'has been abandoned',hint:'present perfect — wrong'},{verb:'is abandoned',hint:'present — wrong'},{verb:'was abandoning',hint:'wrong form'}], feedback:'In reported speech, if the reporting verb is past ("stated"), the reported event uses past perfect: "had been abandoned".' },
      { id:'gr2_3', sentence:'By the time the ambulance arrived, the patient _____.', correct:'had died', options:[{verb:'had died',hint:'past perfect — prior event'},{verb:'died',hint:'simple past'},{verb:'has died',hint:'present perfect — wrong'},{verb:'was dying',hint:'continuous — wrong'}], feedback:'"By the time" signals that one past event happened before another. The earlier event uses past perfect: "had died".' },
      { id:'gr2_4', sentence:'She has been working here _____ 2018.', correct:'since', options:[{verb:'since',hint:'point of time'},{verb:'for',hint:'duration'},{verb:'from',hint:'incorrect with present perfect'},{verb:'during',hint:'incorrect usage'}], feedback:'"Since" is used with a specific point in time (2018) with present perfect tense. "For" is used with a duration (three years).' },
      { id:'gr2_5', sentence:'If he _____ harder, he would have passed the examination.', correct:'had worked', options:[{verb:'had worked',hint:'third conditional'},{verb:'worked',hint:'second conditional'},{verb:'works',hint:'first conditional'},{verb:'would work',hint:'wrong form'}], feedback:'The third conditional (imaginary past) uses: If + had + past participle, ...would have + past participle. "Had worked" is correct.' },
    ]
  },

  'Rule 3: Articles (A / An / The)': {
    rule: true,
    intro: 'Articles are among the most frequently tested grammar points in SSC. Knowing when to use "a", "an", "the", or no article is critical.',
    rule_en: 'Use "a/an" for first mention or non-specific nouns. Use "the" for specific or previously mentioned nouns. Omit articles with proper nouns, languages, and most abstract concepts.',
    rule_hi: '"a/an" अनिश्चित संदर्भ के लिए; "the" निश्चित संदर्भ के लिए। प्रॉपर नाउन, भाषाओं के पहले आर्टिकल नहीं आता।',
    wrong: [
      'He is best player in the team.',
      'She gave me an useful advice.',
      'The gold is a precious metal.',
    ],
    correct: [
      'He is the best player in the team.',
      'She gave me useful advice.',
      'Gold is a precious metal.',
    ],
    wrong_note:  'Superlatives require "the". "An" precedes vowel sounds, not just vowel letters. Generic uncountable nouns need no article.',
    correct_note:'"Useful" starts with a /y/ sound — use "a useful", not "an useful".',
    questions: [
      { id:'gr3_1', sentence:'She is _____ MBA graduate from a reputed university.', correct:'an', options:[{verb:'an',hint:'"M" = vowel sound /em/'},{verb:'a',hint:'consonant sound'},{verb:'the',hint:'specific'},{verb:'—',hint:'no article'}], feedback:'"MBA" is pronounced /em-bee-ay/ — starting with a vowel sound /em/, so it takes "an". The rule is based on sound, not spelling.' },
      { id:'gr3_2', sentence:'_____ Ganga is one of the holiest rivers in India.', correct:'The', options:[{verb:'The',hint:'specific river — proper noun with article'},{verb:'A',hint:'incorrect'},{verb:'An',hint:'incorrect'},{verb:'—',hint:'no article — wrong'}], feedback:'Rivers, mountain ranges, seas, and groups of islands take "the": the Ganga, the Himalayas, the Pacific.' },
      { id:'gr3_3', sentence:'He speaks _____ fluent French and has lived in Paris for years.', correct:'—', options:[{verb:'—',hint:'no article before languages'},{verb:'a',hint:'incorrect'},{verb:'the',hint:'incorrect'},{verb:'an',hint:'incorrect'}], feedback:'No article is used before the names of languages: "He speaks French", "She knows Hindi". Article is only used when followed by "language": "the French language".' },
      { id:'gr3_4', sentence:'The jury reached _____ unanimous verdict after three days of deliberation.', correct:'a', options:[{verb:'a',hint:'first mention, singular'},{verb:'an',hint:'"unanimous" = /y/ sound'},{verb:'the',hint:'too specific for first mention'},{verb:'—',hint:'incorrect — countable noun'}], feedback:'"Unanimous" starts with the /y/ sound (yoo-NAN-i-mous), so it takes "a", not "an". This is a classic SSC trap.' },
      { id:'gr3_5', sentence:'Truth is _____ stranger than fiction.', correct:'—', options:[{verb:'—',hint:'generic comparison — no article'},{verb:'a',hint:'incorrect'},{verb:'the',hint:'too specific'},{verb:'an',hint:'incorrect'}], feedback:'When making a general statement about abstract concepts or generic truths, no article is used. "Truth is stranger than fiction" — both are abstract nouns used generically.' },
    ]
  },

  'Rule 4: Prepositions': {
    rule: true,
    intro: 'Preposition errors are the most common source of mistakes in SSC error-spotting. Each verb, adjective and noun has a fixed preposition — these must be memorised.',
    rule_en: 'Fixed prepositions cannot be swapped. Common traps: "married to" (not with), "die of" (not from disease), "differ from" (not than), "suffer from" (not with).',
    rule_hi: 'निश्चित prepositions को बदला नहीं जा सकता। "married to", "die of", "differ from" जैसे प्रयोग याद रखें।',
    wrong: [
      'He is married <u>with</u> a doctor.',
      'She died <u>from</u> cancer.',
      'His style differs <u>than</u> mine.',
    ],
    correct: [
      'He is married <u>to</u> a doctor.',
      'She died <u>of</u> cancer.',
      'His style differs <u>from</u> mine.',
    ],
    wrong_note:  '"Married with" is a direct translation error common in Hindi-medium students.',
    correct_note:'"Die of" is used for diseases and natural causes; "die from" is used for injuries/accidents.',
    questions: [
      { id:'gr4_1', sentence:'The detective was confident _____ solving the case within a week.', correct:'of', options:[{verb:'of',hint:'confident of — निश्चित'},{verb:'about',hint:'incorrect collocation'},{verb:'in',hint:'incorrect'},{verb:'for',hint:'incorrect'}], feedback:'"Confident of" something means being certain about it. Do not confuse with "confident about" (used informally but not preferred in formal/exam usage). SSC tests "confident of".' },
      { id:'gr4_2', sentence:'The organisation has been deprived _____ its funding by the government.', correct:'of', options:[{verb:'of',hint:'deprived of — वंचित'},{verb:'from',hint:'incorrect'},{verb:'by',hint:'wrong usage'},{verb:'with',hint:'incorrect'}], feedback:'"Deprived of" is the fixed collocation — to have something essential taken away. The agent ("by the government") is separate from the preposition fixed to "deprived".' },
      { id:'gr4_3', sentence:'He was acquitted _____ all charges by the high court.', correct:'of', options:[{verb:'of',hint:'acquitted of — बरी'},{verb:'from',hint:'incorrect'},{verb:'on',hint:'incorrect'},{verb:'for',hint:'incorrect'}], feedback:'"Acquitted of" charges is the correct legal collocation. Similarly: "convicted of", "accused of", "guilty of" — all take "of".' },
      { id:'gr4_4', sentence:'The results are not _____ with our earlier projections.', correct:'consistent', options:[{verb:'consistent',hint:'consistent with — सुसंगत'},{verb:'compatible',hint:'compatible with — also possible'},{verb:'compliant',hint:'compliant with — different meaning'},{verb:'commensurate',hint:'commensurate with — different context'}], feedback:'"Consistent with" means in agreement or harmony with something. "Compatible with" also uses "with" but means can coexist. In context of results vs projections, "consistent with" is the precise choice.' },
      { id:'gr4_5', sentence:'The committee is looking _____ the irregularities in procurement.', correct:'into', options:[{verb:'into',hint:'look into = investigate'},{verb:'after',hint:'look after = care for'},{verb:'over',hint:'look over = review briefly'},{verb:'up',hint:'look up = search/improve'}], feedback:'"Look into" something means to investigate it formally. "Look after" = care for; "look over" = quick review; "look up" = search or improve. Only "into" fits a formal investigation context.' },
    ]
  },

  'Rule 5: Pronouns': {
    rule: true,
    intro: 'Pronoun errors — especially case errors and unclear antecedents — are heavily tested in SSC error-spotting. The pronoun must agree with its antecedent in number, gender and person.',
    rule_en: 'Use subject pronouns (I, he, she, they) as subjects; object pronouns (me, him, her, them) as objects. Pronouns must agree with their antecedent.',
    rule_hi: 'Subject के रूप में I/he/she/they और object के रूप में me/him/her/them। pronoun का antecedent से number और person में मेल होना चाहिए।',
    wrong: [
      'Between you and <u>I</u>, the plan seems flawed.',
      'Everyone must submit <u>their</u> form by Monday. (formal)',
      'The team celebrated <u>their</u> victory loudly.',
    ],
    correct: [
      'Between you and <u>me</u>, the plan seems flawed.',
      'Everyone must submit <u>his or her</u> form by Monday.',
      'The team celebrated <u>its</u> victory loudly.',
    ],
    wrong_note:  '"Between" is a preposition; it must be followed by an object pronoun.',
    correct_note:'"Everyone" is singular and technically requires "his or her" in formal writing.',
    questions: [
      { id:'gr5_1', sentence:'It was _____ who informed the press about the scam.', correct:'he', options:[{verb:'he',hint:'subject pronoun after "it was"'},{verb:'him',hint:'object pronoun'},{verb:'his',hint:'possessive'},{verb:'himself',hint:'reflexive'}], feedback:'After "It is/was", the correct form is the subject pronoun (he, she, they), not the object pronoun (him, her, them). "It was he who…" is grammatically correct in formal English.' },
      { id:'gr5_2', sentence:'The jury delivered _____ verdict after two weeks of deliberation.', correct:'its', options:[{verb:'its',hint:'collective noun — singular'},{verb:'their',hint:'plural — wrong for collective noun acting as unit'},{verb:'his',hint:'incorrect'},{verb:'her',hint:'incorrect'}], feedback:'"Jury" is a collective noun. When acting as a single unit (delivering one verdict), it takes the singular pronoun "its".' },
      { id:'gr5_3', sentence:'Neither of the two ministers could defend _____ position convincingly.', correct:'his', options:[{verb:'his',hint:'neither = singular — formal usage'},{verb:'their',hint:'informal plural'},{verb:'its',hint:'incorrect for persons'},{verb:'him',hint:'object, not possessive'}], feedback:'"Neither" is singular and takes a singular pronoun. In formal/exam usage: "neither…his/her". "Their" is acceptable informally but SSC tests singular agreement.' },
      { id:'gr5_4', sentence:'The professor as well as his students _____ expected to attend.', correct:'is', options:[{verb:'is',hint:'as well as — verb agrees with first noun'},{verb:'are',hint:'incorrect — ignores the rule'},{verb:'were',hint:'past tense — wrong here'},{verb:'have been',hint:'wrong form'}], feedback:'With "as well as", "together with", "along with" — the verb agrees with the subject before the phrase. "The professor" (singular) → "is".' },
      { id:'gr5_5', sentence:'One must fulfil _____ obligations towards society.', correct:'one\'s', options:[{verb:'one\'s',hint:'one — possessive'},{verb:'his',hint:'old usage, not ideal'},{verb:'their',hint:'incorrect agreement with "one"'},{verb:'its',hint:'incorrect'}], feedback:'"One" takes the possessive "one\'s". "One must fulfil one\'s obligations." Using "his/their" with "one" is an agreement error in formal writing.' },
    ]
  },

  'Rule 6: Adjectives & Adverbs': {
    rule: true,
    intro: 'Confusing adjectives and adverbs is a common error. Adjectives describe nouns; adverbs describe verbs, adjectives, or other adverbs.',
    rule_en: 'Use adjectives after linking verbs (is, seems, feels, looks, tastes). Use adverbs to modify action verbs. Watch for irregular forms: good/well, hard/hard, late/late.',
    rule_hi: 'Linking verbs के बाद adjective आता है, action verbs के बाद adverb। good/well, hard/hard जैसे अनियमित रूप याद रखें।',
    wrong: [
      'She sings <u>beautiful</u>.',
      'He did <u>good</u> in the examination.',
      'The food tastes <u>badly</u>.',
    ],
    correct: [
      'She sings <u>beautifully</u>.',
      'He did <u>well</u> in the examination.',
      'The food tastes <u>bad</u>.',
    ],
    wrong_note:  '"Sing" is an action verb — it needs an adverb. "Taste" is a linking verb — it needs an adjective.',
    correct_note:'"Good" is an adjective; "well" is its adverb form. Exception: "I feel well" (referring to health).',
    questions: [
      { id:'gr6_1', sentence:'The committee found the candidate _____ qualified for the post.', correct:'highly', options:[{verb:'highly',hint:'adverb modifying adjective'},{verb:'high',hint:'adjective — incorrect here'},{verb:'very much',hint:'incorrect collocation'},{verb:'more',hint:'comparative — wrong context'}], feedback:'"Highly qualified" — "highly" is an adverb modifying the adjective "qualified". "High" is an adjective and cannot modify another adjective directly.' },
      { id:'gr6_2', sentence:'Of the two proposals, the first one is _____ practical.', correct:'more', options:[{verb:'more',hint:'comparative of two'},{verb:'most',hint:'superlative — three or more'},{verb:'very',hint:'not used in comparisons'},{verb:'much',hint:'incorrect form'}], feedback:'When comparing exactly two things, use the comparative form: "more practical". "Most" is the superlative and is used when comparing three or more.' },
      { id:'gr6_3', sentence:'The athlete performed _____ despite the injury.', correct:'remarkably well', options:[{verb:'remarkably well',hint:'adverb + adverb'},{verb:'remarkable good',hint:'adjective — incorrect'},{verb:'remarkably good',hint:'good = adjective, needs linking verb'},{verb:'remarkable well',hint:'adjective — incorrect'}], feedback:'"Perform" is an action verb; it requires an adverb: "well" (not "good"). "Remarkably" modifies "well": "remarkably well". "Remarkably good" would require a linking verb.' },
      { id:'gr6_4', sentence:'She was _____ dressed for the formal occasion.', correct:'immaculately', options:[{verb:'immaculately',hint:'adverb modifying past participle'},{verb:'immaculate',hint:'adjective — incorrect'},{verb:'more immaculate',hint:'comparative — wrong context'},{verb:'immaculacy',hint:'noun — wrong form'}], feedback:'"Dressed" is a past participle functioning as an adjective; it is modified by an adverb: "immaculately dressed". You cannot say "immaculate dressed".' },
      { id:'gr6_5', sentence:'The patient felt _____ after the second dose of medication.', correct:'better', options:[{verb:'better',hint:'comparative adj after feeling verb'},{verb:'more better',hint:'double comparative — wrong'},{verb:'bestly',hint:'not a word'},{verb:'more good',hint:'incorrect — use better'}], feedback:'"Feel" is a linking verb; after linking verbs, use an adjective. "Better" is the comparative adjective form of "good/well". "More better" is a double comparative — always wrong.' },
    ]
  },

  'Rule 7: Active vs Passive Voice': {
    rule: true,
    intro: 'Passive voice errors are consistently tested in SSC. The structure "Object + be + past participle + by + subject" must be formed correctly.',
    rule_en: 'Active: Subject + V + Object. Passive: Object + be(tense) + past participle + (by + subject). The tense of "be" must match the tense of the original active verb.',
    rule_hi: 'Passive बनाने में "be" की tense original verb की tense के अनुसार बदलती है। past participle हमेशा वही रहता है।',
    wrong: [
      'The letter was wrote by the manager.',
      'The thief was catched by the police.',
      'The project has been completing by the team.',
    ],
    correct: [
      'The letter was written by the manager.',
      'The thief was caught by the police.',
      'The project has been completed by the team.',
    ],
    wrong_note:  '"Wrote" and "catched" are wrong past participles. "completing" should be "completed".',
    correct_note:'Irregular past participles must be memorised: write→written, catch→caught, take→taken.',
    questions: [
      { id:'gr7_1', sentence:'The new hospital _____ by the Chief Minister last week.', correct:'was inaugurated', options:[{verb:'was inaugurated',hint:'passive — simple past'},{verb:'has been inaugurated',hint:'present perfect — wrong (last week)'},{verb:'is inaugurated',hint:'present — wrong'},{verb:'inaugurated',hint:'active — subject missing'}], feedback:'"Last week" signals simple past. Passive of simple past: was/were + past participle. "Was inaugurated" is correct.' },
      { id:'gr7_2', sentence:'New safety guidelines _____ by the ministry before the inspection begins.', correct:'will be issued', options:[{verb:'will be issued',hint:'future passive'},{verb:'will be issuing',hint:'active — incorrect passive'},{verb:'are going to issue',hint:'active voice'},{verb:'shall issue',hint:'active — subject missing'}], feedback:'Future passive: will + be + past participle. "Will be issued" is correct. "Will be issuing" is future continuous active form — wrong structure for passive.' },
      { id:'gr7_3', sentence:'The accused _____ to life imprisonment by the sessions court.', correct:'was sentenced', options:[{verb:'was sentenced',hint:'passive — simple past'},{verb:'sentenced',hint:'active — no object left'},{verb:'has sentenced',hint:'active present perfect'},{verb:'got sentenced',hint:'informal — not SSC standard'}], feedback:'"The accused" is the object of "sentenced" → passive is required. "Was sentenced to life imprisonment" is the correct passive construction.' },
      { id:'gr7_4', sentence:'A thorough investigation into the matter _____ at present.', correct:'is being conducted', options:[{verb:'is being conducted',hint:'present continuous passive'},{verb:'is conducting',hint:'active — no object'},{verb:'has been conducted',hint:'present perfect — not "at present"'},{verb:'was being conducted',hint:'past continuous passive — wrong tense'}], feedback:'"At present" signals present continuous tense. Present continuous passive: is/are + being + past participle. "Is being conducted" is correct.' },
      { id:'gr7_5', sentence:'The new regulation _____ before the end of this financial year.', correct:'is expected to be implemented', options:[{verb:'is expected to be implemented',hint:'passive with expect + infinitive'},{verb:'expects to be implemented',hint:'wrong subject-verb'},{verb:'is expected to implement',hint:'active infinitive — wrong'},{verb:'expects to implement',hint:'active — subject mismatch'}], feedback:'"Is expected to be implemented" — "the regulation" cannot implement itself, so the passive infinitive ("to be implemented") is required after "is expected".' },
    ]
  },

  'Rule 8: Direct vs Indirect Speech': {
    rule: true,
    intro: 'Reported (indirect) speech requires systematic changes: tense back-shift, pronoun change, and time/place word changes. These are regularly tested in SSC transformation questions.',
    rule_en: 'In reported speech: present→past, will→would, can→could, "today"→"that day", "here"→"there". The reporting verb determines the structure.',
    rule_hi: 'Indirect speech में: present→past, will→would, can→could। "today"→"that day", "here"→"there" बदलते हैं।',
    wrong: [
      'He said that he <u>will</u> come tomorrow.',
      'She asked me where <u>do</u> I live.',
      'The teacher told the students to <u>not make</u> noise.',
    ],
    correct: [
      'He said that he <u>would</u> come the next day.',
      'She asked me where <u>I lived</u>.',
      'The teacher told the students <u>not to make</u> noise.',
    ],
    wrong_note:  'In reported speech, question word order becomes statement word order (subject before verb).',
    correct_note:'Negative imperatives in reported speech: told + object + not + to-infinitive.',
    questions: [
      { id:'gr8_1', sentence:'The inspector said, "I am investigating the case." → The inspector said that he _____ the case.', correct:'was investigating', options:[{verb:'was investigating',hint:'present continuous → past continuous'},{verb:'is investigating',hint:'no tense change — wrong'},{verb:'had investigated',hint:'past perfect — too far back'},{verb:'investigated',hint:'simple past — loses the continuous aspect'}], feedback:'In reported speech, present continuous ("am investigating") back-shifts to past continuous ("was investigating"). The pronoun "I" changes to "he".' },
      { id:'gr8_2', sentence:'She asked, "Have you submitted the report?" → She asked him if he _____ the report.', correct:'had submitted', options:[{verb:'had submitted',hint:'present perfect → past perfect'},{verb:'has submitted',hint:'no tense change — wrong'},{verb:'submitted',hint:'loses perfect aspect'},{verb:'would submit',hint:'incorrect back-shift'}], feedback:'Present perfect ("have submitted") back-shifts to past perfect ("had submitted") in indirect speech. Yes/no questions use "if/whether".' },
      { id:'gr8_3', sentence:'The officer ordered the constable, "Stand at attention." → The officer ordered the constable _____.', correct:'to stand at attention', options:[{verb:'to stand at attention',hint:'imperative → to + infinitive'},{verb:'that stand at attention',hint:'incorrect structure'},{verb:'standing at attention',hint:'gerund — incorrect'},{verb:'should stand at attention',hint:'modal — not standard for orders'}], feedback:'Direct imperatives are converted using: ordered/told + object + to + infinitive. "Stand" → "to stand at attention".' },
      { id:'gr8_4', sentence:'He said, "I saw this film yesterday." → He said that he _____ that film the previous day.', correct:'had seen', options:[{verb:'had seen',hint:'simple past → past perfect'},{verb:'saw',hint:'no tense change — wrong'},{verb:'has seen',hint:'wrong tense'},{verb:'was seeing',hint:'wrong aspect'}], feedback:'Simple past ("saw") back-shifts to past perfect ("had seen"). "Yesterday" changes to "the previous day" / "the day before".' },
      { id:'gr8_5', sentence:'She said, "I can speak three languages." → She said that she _____ three languages.', correct:'could speak', options:[{verb:'could speak',hint:'can → could'},{verb:'can speak',hint:'no back-shift — wrong'},{verb:'was able to speak',hint:'acceptable but not standard back-shift'},{verb:'might speak',hint:'wrong modal'}], feedback:'"Can" back-shifts to "could" in reported speech. This is one of the most tested modal transformations in SSC.' },
    ]
  },

  'Rule 9: Conditionals': {
    rule: true,
    intro: 'Conditional sentences are classified into three types, and SSC frequently tests the correct verb forms within each type.',
    rule_en: 'Type 1 (real future): If + present, will + base. Type 2 (unreal present): If + past, would + base. Type 3 (unreal past): If + past perfect, would have + past participle.',
    rule_hi: 'Type 1 (real): If + present simple, will + base verb. Type 2 (unreal present): If + past simple, would + base. Type 3 (unreal past): If + past perfect, would have + past participle.',
    wrong: [
      'If he <u>will study</u> hard, he will pass.',
      'If I <u>am</u> you, I would resign.',
      'If she had come, she <u>will</u> have met him.',
    ],
    correct: [
      'If he <u>studies</u> hard, he will pass.',
      'If I <u>were</u> you, I would resign.',
      'If she had come, she <u>would</u> have met him.',
    ],
    wrong_note:  '"Will" never appears in the if-clause of conditionals. "Was" is replaced by "were" in Type 2 (subjunctive mood).',
    correct_note:'Type 2 uses "were" for all persons (if I were, if she were) — this is the subjunctive mood.',
    questions: [
      { id:'gr9_1', sentence:'If the government _____ immediate action, the situation could worsen.', correct:'does not take', options:[{verb:'does not take',hint:'Type 1 — real possibility'},{verb:'will not take',hint:'will in if-clause — wrong'},{verb:'did not take',hint:'Type 2 — unreal'},{verb:'had not taken',hint:'Type 3 — past'}], feedback:'The main clause "could worsen" suggests a real/likely future scenario (Type 1/mixed). "Does not take" (present simple in if-clause) is the correct form.' },
      { id:'gr9_2', sentence:'If I _____ the Prime Minister, I would prioritise education.', correct:'were', options:[{verb:'were',hint:'subjunctive — Type 2 unreal'},{verb:'was',hint:'indicative — incorrect in Type 2'},{verb:'am',hint:'Type 1 — wrong tense'},{verb:'had been',hint:'Type 3 — past'}], feedback:'In Type 2 conditionals, "were" is used for all persons (I, he, she) — the subjunctive mood. "Was" is technically informal; SSC tests "were".' },
      { id:'gr9_3', sentence:'Had they invested wisely, they _____ financially secure now.', correct:'would be', options:[{verb:'would be',hint:'mixed conditional — past cause, present result'},{verb:'would have been',hint:'Type 3 — both past'},{verb:'will be',hint:'wrong modal'},{verb:'had been',hint:'wrong structure'}], feedback:'This is a mixed conditional: past perfect in if-clause + would + base in result clause — showing a past condition with a present result. "Would be" (not "would have been") is correct here.' },
      { id:'gr9_4', sentence:'If she _____ the warning, she would not have been injured.', correct:'had heeded', options:[{verb:'had heeded',hint:'Type 3 — unreal past'},{verb:'heeded',hint:'Type 2 — wrong type'},{verb:'would heed',hint:'would in if-clause — wrong'},{verb:'heeds',hint:'Type 1 — wrong'}], feedback:'"Would not have been injured" in the result clause signals Type 3. The if-clause must use past perfect: "had heeded".' },
      { id:'gr9_5', sentence:'Unless you _____ the deadline, the application will be rejected.', correct:'meet', options:[{verb:'meet',hint:'unless = if not + present simple'},{verb:'will meet',hint:'will in condition — wrong'},{verb:'met',hint:'Type 2 — wrong tense'},{verb:'would meet',hint:'wrong modal'}], feedback:'"Unless" means "if not". It follows the same rule as "if" — no "will" in the unless-clause. Present simple ("meet") is used for a real future condition.' },
    ]
  },

  'Rule 10: Modal Verbs': {
    rule: true,
    intro: 'Modal verbs (can, could, may, might, shall, should, will, would, must, ought to) express ability, permission, possibility, obligation, and habit. SSC tests their precise usage.',
    rule_en: 'Modals are followed by the base verb (infinitive without to), except "ought to" and "used to". They do not take -s in third person. Double modals are not allowed.',
    rule_hi: 'Modals के बाद base verb आती है। Third person में -s नहीं। दो modals एक साथ नहीं आते।',
    wrong: [
      'You must to submit the form today.',
      'She can to speak French fluently.',
      'He should has completed the report.',
    ],
    correct: [
      'You must submit the form today.',
      'She can speak French fluently.',
      'He should have completed the report.',
    ],
    wrong_note:  '"Must to" and "can to" are wrong — modals are followed directly by the base verb.',
    correct_note:'"Should have + past participle" expresses an unfulfilled obligation in the past.',
    questions: [
      { id:'gr10_1', sentence:'You _____ submit the assignment before midnight, or it will not be accepted.', correct:'must', options:[{verb:'must',hint:'obligation — mandatory'},{verb:'should',hint:'advice — not strong enough'},{verb:'may',hint:'permission — wrong meaning'},{verb:'might',hint:'possibility — wrong meaning'}], feedback:'"Must" expresses strong obligation or necessity. "Should" is softer advice. The conditional "or it will not be accepted" signals a hard rule — "must" is correct.' },
      { id:'gr10_2', sentence:'He _____ have informed the supervisor before leaving the premises.', correct:'should', options:[{verb:'should',hint:'unfulfilled past obligation'},{verb:'must',hint:'strong necessity — not for past regret'},{verb:'would',hint:'conditional — wrong here'},{verb:'shall',hint:'future — wrong context'}], feedback:'"Should have + past participle" expresses a past obligation that was not fulfilled (a criticism or regret). "Must have" expresses a deduction about the past, not an unfulfilled duty.' },
      { id:'gr10_3', sentence:'_____ you please send me the updated report by tomorrow?', correct:'Could', options:[{verb:'Could',hint:'polite request'},{verb:'Can',hint:'ability — less formal'},{verb:'Shall',hint:'offer/suggestion — wrong'},{verb:'Must',hint:'obligation — too strong'}], feedback:'"Could you please" is the most polite form of a request. "Can you" is acceptable but more informal. "Shall" is for suggestions/offers. "Must" expresses obligation, not a polite request.' },
      { id:'gr10_4', sentence:'That _____ be the new director — I saw her entering the building.', correct:'must', options:[{verb:'must',hint:'logical deduction — almost certain'},{verb:'may',hint:'possibility — 50%'},{verb:'might',hint:'weak possibility'},{verb:'should',hint:'expectation — not deduction'}], feedback:'"Must be" is used for a logical deduction from evidence (near certainty). "May/might be" express mere possibility. "Should be" expresses expectation, not inference from observed evidence.' },
      { id:'gr10_5', sentence:'We _____ park here; it is a no-parking zone.', correct:'cannot', options:[{verb:'cannot',hint:'prohibition'},{verb:'should not',hint:'advice — weaker'},{verb:'need not',hint:'no necessity — wrong meaning'},{verb:'dare not',hint:'courage — wrong context'}], feedback:'"Cannot" expresses prohibition — you are not allowed to do something. "Should not" gives advice. "Need not" means it is not necessary. Only "cannot" fits a legal prohibition.' },
    ]
  },

  'Rule 11: Gerunds & Infinitives': {
    rule: true,
    intro: 'Choosing between gerunds (verb+ing) and infinitives (to+verb) after certain verbs is a core SSC grammar challenge. Some verbs take only gerunds, some only infinitives, some both.',
    rule_en: 'Gerund-only verbs: enjoy, avoid, suggest, deny, mind, finish, consider, postpone, keep, risk. Infinitive-only verbs: want, hope, decide, fail, refuse, agree, manage, plan, afford, promise.',
    rule_hi: 'Gerund (V+ing): enjoy, avoid, suggest, deny। Infinitive (to+V): want, hope, decide, refuse, agree।',
    wrong: [
      'She suggested to go to the park.',
      'He denied to steal the money.',
      'They decided going abroad.',
    ],
    correct: [
      'She suggested going to the park.',
      'He denied stealing the money.',
      'They decided to go abroad.',
    ],
    wrong_note:  '"Suggest" and "deny" are gerund verbs — they cannot take "to + infinitive".',
    correct_note:'"Decide", "agree", "refuse" always take the infinitive (to + base verb).',
    questions: [
      { id:'gr11_1', sentence:'The management finally agreed _____ the workers\' demands.', correct:'to meet', options:[{verb:'to meet',hint:'agree + infinitive'},{verb:'meeting',hint:'gerund — incorrect with agree'},{verb:'met',hint:'past — wrong form'},{verb:'for meeting',hint:'incorrect preposition'}], feedback:'"Agree" is followed by the infinitive: "agreed to meet". It is an infinitive-only verb. "Agreed meeting" is wrong.' },
      { id:'gr11_2', sentence:'The suspect strongly denied _____ the document.', correct:'having forged', options:[{verb:'having forged',hint:'deny + gerund (perfect aspect)'},{verb:'to forge',hint:'infinitive — wrong with deny'},{verb:'forge',hint:'base form — incorrect'},{verb:'to have forged',hint:'infinitive — wrong with deny'}], feedback:'"Deny" is a gerund verb: "denied forging / denied having forged". "Denied to forge" is incorrect. The perfect gerund "having forged" emphasises the action was prior.' },
      { id:'gr11_3', sentence:'The doctor advised the patient to avoid _____ processed food.', correct:'eating', options:[{verb:'eating',hint:'avoid + gerund'},{verb:'to eat',hint:'infinitive — wrong with avoid'},{verb:'eat',hint:'base form — wrong'},{verb:'having eaten',hint:'perfect gerund — not idiomatic here'}], feedback:'"Avoid" is always followed by a gerund: "avoid eating". "Avoid to eat" is a very common error in SSC exams.' },
      { id:'gr11_4', sentence:'I remember _____ my keys on the table before leaving.', correct:'placing', options:[{verb:'placing',hint:'remember + gerund = past action'},{verb:'to place',hint:'remember + infinitive = future reminder'},{verb:'placed',hint:'past participle — wrong'},{verb:'having placed',hint:'correct but less common'}], feedback:'"Remember + gerund" refers to a memory of a past action. "Remember + infinitive" means a reminder to do something in the future. "I remember placing" = I recall having done it.' },
      { id:'gr11_5', sentence:'The company failed _____ its quarterly sales targets for the third consecutive time.', correct:'to meet', options:[{verb:'to meet',hint:'fail + infinitive'},{verb:'meeting',hint:'gerund — incorrect with fail'},{verb:'meet',hint:'base form — incorrect'},{verb:'in meeting',hint:'incorrect preposition'}], feedback:'"Fail" is always followed by the infinitive: "failed to meet". "Failed meeting" is incorrect. This is a commonly tested infinitive-only verb in SSC.' },
    ]
  },

  'Rule 12: Conjunctions': {
    rule: true,
    intro: 'Conjunctions link clauses and ideas. Errors arise from using redundant conjunctions (both…as well as), mismatching correlatives, and confusing "although" with "but".',
    rule_en: 'Correlative conjunctions: both…and, either…or, neither…nor, not only…but also, though/although…yet (no "but"). Avoid redundancy: "although…but" and "because…so" are both wrong.',
    rule_hi: '"Although" के साथ "but" नहीं आता। "Because" के साथ "so" नहीं आता। दो opposite conjunctions एक साथ नहीं आते।',
    wrong: [
      'Although she worked hard, <u>but</u> she could not pass.',
      'Because he was late, <u>so</u> he was fined.',
      '<u>Both</u> the manager <u>as well as</u> the team were present.',
    ],
    correct: [
      'Although she worked hard, she could not pass.',
      'Because he was late, he was fined.',
      'Both the manager <u>and</u> the team were present.',
    ],
    wrong_note:  '"Although + but" and "because + so" are double conjunctions — each pair expresses the same relationship, making one redundant.',
    correct_note:'"Both…and" is the correct correlative. "As well as" can be used independently but not paired with "both".',
    questions: [
      { id:'gr12_1', sentence:'_____ the proposal was rejected, the team decided to revise and resubmit it.', correct:'Although', options:[{verb:'Although',hint:'contrast — no "but" needed'},{verb:'Although…but',hint:'double conjunction — wrong'},{verb:'Because',hint:'reason — wrong meaning'},{verb:'Since',hint:'reason — wrong meaning'}], feedback:'"Although" alone expresses contrast. You cannot add "but" after "although" — that would be a double conjunction error. "Although + [clause], [result clause]" is the correct structure.' },
      { id:'gr12_2', sentence:'He is _____ a good administrator _____ an inspiring leader.', correct:'not only…but also', options:[{verb:'not only…but also',hint:'correlative conjunction'},{verb:'both…as well as',hint:'redundant — incorrect'},{verb:'either…or',hint:'choice — wrong meaning'},{verb:'neither…nor',hint:'negative — wrong meaning'}], feedback:'"Not only…but also" is the correct correlative for adding an additional positive quality. "Both…as well as" is redundant and incorrect. The sentence implies he is both things — not a choice.' },
      { id:'gr12_3', sentence:'_____ the bridge was structurally weak, the engineers approved its use.', correct:'Though', options:[{verb:'Though',hint:'contrast — valid'},{verb:'Though…yet',hint:'correct but question asks single word'},{verb:'Because',hint:'reason — opposite meaning'},{verb:'So',hint:'result — wrong'}], feedback:'"Though/Although" introduces a contrast. "Though" can stand alone or be paired with "yet" (not "but"). In this single-conjunction question, "Though" is correct.' },
      { id:'gr12_4', sentence:'_____ you leave now, you will still miss the first train.', correct:'Even if', options:[{verb:'Even if',hint:'concessive conditional'},{verb:'Although',hint:'contrast — not conditional'},{verb:'Because',hint:'reason — wrong'},{verb:'Unless',hint:'if not — opposite meaning'}], feedback:'"Even if" introduces a concessive conditional — the outcome is true regardless of the condition. "Although" is not conditional. "Unless" would mean "if you do not leave now" — opposite meaning.' },
      { id:'gr12_5', sentence:'Neither the director _____ the producers were available for comment.', correct:'nor', options:[{verb:'nor',hint:'neither…nor — correlative'},{verb:'or',hint:'either…or — wrong pair'},{verb:'and',hint:'both…and — wrong pair'},{verb:'but',hint:'contrast — wrong correlative'}], feedback:'"Neither…nor" is a fixed correlative pair. You cannot say "neither…or" or "neither…and". Similarly, "either…or", "both…and", "not only…but also" are all fixed pairs.' },
    ]
  },

};