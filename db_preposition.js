var DB_FP = {

  'FROM_Prevention': {
    intro: 'Ye group un words ka hai jo kisi cheez ko rokne ya uthane se bachane ka kaam karte hain — sab ke saath preposition FROM lagta hai. Jab bhi koi restriction ya barrier ho, FROM_Prevention family yaad karo.',
    words: [
      {
        word: 'prevent',
        preposition: 'from',
        def_en: 'To stop someone or something from doing or happening.',
        def_hi: 'Kisi ko kuch karne se rokna ya kisi cheez ko hone se badhana ।',
        example: 'The police tried to prevent him from running away.',
        note: 'Prevent is the most direct blocker — active force applied. Deter is softer — it discourages without physically stopping.'
      },
      {
        word: 'refrain',
        preposition: 'from',
        def_en: 'To stop oneself from doing something voluntarily.',
        def_hi: 'Khud ko kuch karne se rokna, apni marzi se ।',
        example: 'Please refrain from talking during the lecture.',
        note: 'Refrain is self-imposed — the subject controls themselves. Prevent involves an external force controlling someone else.'
      },
      {
        word: 'prohibit',
        preposition: 'from',
        def_en: 'To officially forbid something by law or rule.',
        def_hi: 'Kisi kaam ko kanoon ya niyam dwara band karna ।',
        example: 'Heavy vehicles are prohibited from entering the city before 11pm.',
        note: 'Prohibit is always official/legal. Prevent is general. Debar is more about exclusion from a place or group.'
      },
      {
        word: 'abstain',
        preposition: 'from',
        def_en: 'To deliberately avoid doing or consuming something.',
        def_hi: 'Jaan-boojhkar kisi cheez se door rehna, khaaskar buri aadat se ।',
        example: 'He took a vow to abstain from alcohol.',
        note: 'Abstain implies a conscious moral or personal choice — often about habits or voting. Refrain is more situational and less permanent.'
      },
      {
        word: 'deter',
        preposition: 'from',
        def_en: 'To discourage someone from doing something through fear or doubt.',
        def_hi: 'Darr ya shak dilakar kisi ko kuch karne se hatoona ।',
        example: 'High prices are deterring many young people from buying houses.',
        note: 'Deter works through psychological discouragement — no physical force. Prevent can be physical. Prohibit is legal.'
      },
      {
        word: 'debar',
        preposition: 'from',
        def_en: 'To officially exclude someone from a place, activity or right.',
        def_hi: 'Kisi ko adhikarik taur par kisi jagah ya adhikar se bahar karna ।',
        example: 'He was debarred from the club for his unacceptable behaviour.',
        note: 'Debar is about exclusion from membership or access. Prohibit bans actions. Prevent stops events.'
      },
      {
        word: 'desist',
        preposition: 'from',
        def_en: 'To stop doing something, especially when ordered to.',
        def_hi: 'Koi kaam band karna, khaaskar jab kaha jaye ।',
        example: 'The court orders the magazine to desist from publishing false stories about the actor.',
        note: 'Desist implies stopping an ongoing action, often under legal/official pressure. Refrain means not starting. Abstain means avoiding entirely.'
      },
      {
        word: 'stop',
        preposition: 'from',
        def_en: 'To cause someone or something to cease an action.',
        def_hi: 'Kisi ko ya kisi kaam ko rokna ।',
        example: 'They\'ve put the barriers up to stop people from getting through.',
        note: 'Stop is the most everyday word here — casual and direct. Prevent is more formal. Prohibit is legal. Desist is formal/legal.'
      },
      {
        word: 'protect',
        preposition: 'from',
        def_en: 'To keep someone or something safe from harm or danger.',
        def_hi: 'Kisi ko ya kisi cheez ko nuksan ya khatre se bachana ।',
        example: 'It\'s important to protect your skin from the harmful rays of the sun.',
        note: 'Protect is about safety and shielding. The others (prevent, deter, prohibit) are about restriction. Protect is the only one with a caring/defensive tone.'
      }
    ],
    questions: [
      {
        id: 'prevent_from_q1',
        sentence: 'The police tried to _____ him from running away.',
        correct: 'prevent',
        options: [
          { verb: 'deter', hint: 'darr dilakar rokna — psychological' },
          { verb: 'prevent', hint: 'directly rokna — active force' },
          { verb: 'prohibit', hint: 'kanoon se rokna — legal ban' },
          { verb: 'refrain', hint: 'khud rokna — self-control' }
        ],
        feedback: 'Prevent fits because the police are actively stopping someone — using direct force or intervention. Deter would mean they just scared him off psychologically, not physically stopped him. Prohibit is for laws and rules, not police chasing a person. Refrain is always self-imposed — the subject stops themselves, but here an external agent (police) is doing the stopping.'
      },
      {
        id: 'refrain_from_q1',
        sentence: 'Please _____ from talking during the lecture.',
        correct: 'refrain',
        options: [
          { verb: 'refrain', hint: 'khud rokna — polite self-control' },
          { verb: 'abstain', hint: 'door rehna — habit/moral choice' },
          { verb: 'desist', hint: 'band karna — legal/official pressure' },
          { verb: 'debar', hint: 'bahar karna — exclusion' }
        ],
        feedback: 'Refrain is the perfect polite request for self-control in a social situation. Abstain is used for habits like alcohol or voting — too heavy for a lecture request. Desist is what a court tells you, not a polite classroom request. Debar means excluding someone from a place or group — completely wrong context here.'
      },
      {
        id: 'prohibit_from_q1',
        sentence: 'Heavy vehicles are _____ from entering the city before 11pm.',
        correct: 'prohibited',
        options: [
          { verb: 'debarred', hint: 'membership se bahar — clubs/rights' },
          { verb: 'prevented', hint: 'directly rokna — physical' },
          { verb: 'prohibited', hint: 'kanoon se banned — official rule' },
          { verb: 'deterred', hint: 'discouraged — psychological' }
        ],
        feedback: 'Prohibited fits because this is a legal/official city rule — exactly what prohibit means. Debarred is for excluding people from clubs or rights, not vehicles from roads. Prevented would work in casual speech but is too informal for an official traffic rule. Deterred means discouraged, but rules don\'t discourage — they ban.'
      },
      {
        id: 'abstain_from_q1',
        sentence: 'He took a vow to _____ from alcohol.',
        correct: 'abstain',
        options: [
          { verb: 'refrain', hint: 'situational self-control — temporary' },
          { verb: 'abstain', hint: 'vow lena — moral/permanent choice' },
          { verb: 'desist', hint: 'band karna — official order' },
          { verb: 'stop', hint: 'rokna — casual everyday word' }
        ],
        feedback: 'Abstain is the right word when someone makes a deliberate, often moral or permanent decision to avoid something — taking a vow makes this clear. Refrain is more situational ("please refrain right now"), not permanent. Desist means to stop under pressure, not by personal vow. Stop works in casual speech but "take a vow to stop from" is not natural English.'
      },
      {
        id: 'deter_from_q1',
        sentence: 'High prices are _____ many young people from buying houses.',
        correct: 'deterring',
        options: [
          { verb: 'preventing', hint: 'physically rokna — direct force' },
          { verb: 'deterring', hint: 'discourage karna — psychological barrier' },
          { verb: 'prohibiting', hint: 'legal ban — official rule' },
          { verb: 'stopping', hint: 'rokna — too blunt/casual' }
        ],
        feedback: 'Deterring is perfect — high prices don\'t physically stop people, they create a psychological/financial barrier that discourages. Preventing implies a direct physical block which prices can\'t do. Prohibiting means a legal ban — prices don\'t make buying illegal. Stopping is too blunt and casual for this formal context.'
      },
      {
        id: 'debar_from_q1',
        sentence: 'He was _____ from the club for his unacceptable behaviour.',
        correct: 'debarred',
        options: [
          { verb: 'prohibited', hint: 'legal ban — kanoon ki cheez' },
          { verb: 'debarred', hint: 'club/group se bahar — exclusion' },
          { verb: 'prevented', hint: 'rokna — active force' },
          { verb: 'deterred', hint: 'discourage — psychological' }
        ],
        feedback: 'Debarred fits perfectly — it means officially excluded from membership or access to a place or group, exactly what happens when someone is removed from a club. Prohibited bans actions, not people from places. Prevented implies someone physically blocked him. Deterred means discouraged — but here he was formally expelled, not just warned off.'
      },
      {
        id: 'desist_from_q1',
        sentence: 'The court orders the magazine to _____ from publishing false stories about the actor.',
        correct: 'desist',
        options: [
          { verb: 'refrain', hint: 'polite self-control — no legal force' },
          { verb: 'abstain', hint: 'moral choice — no court involved' },
          { verb: 'desist', hint: 'court order — legal stop' },
          { verb: 'stop', hint: 'casual — too informal for court' }
        ],
        feedback: 'Desist is the legal term used when a court or authority orders someone to stop an ongoing action — "cease and desist" is a standard legal phrase. Refrain is a polite self-request, not a court order. Abstain is about personal moral choices like drinking or voting. Stop is too casual for formal court language.'
      },
      {
        id: 'stop_from_q1',
        sentence: 'They\'ve put the barriers up to _____ people from getting through.',
        correct: 'stop',
        options: [
          { verb: 'deter', hint: 'discourage — no physical barrier' },
          { verb: 'prohibit', hint: 'legal ban — no barriers needed' },
          { verb: 'stop', hint: 'barriers lagana — direct physical block' },
          { verb: 'desist', hint: 'court order — wrong context' }
        ],
        feedback: 'Stop is the most natural word when a physical object (barriers) is doing the blocking — direct, casual, and correct. Deter implies psychological discouragement, not barriers. Prohibit is a legal action, not a physical one. Desist is a legal term used with court orders, completely wrong for a physical barrier setup.'
      },
      {
        id: 'protect_from_q1',
        sentence: 'It\'s important to _____ your skin from the harmful rays of the sun.',
        correct: 'protect',
        options: [
          { verb: 'protect', hint: 'suraksha dena — shield/guard' },
          { verb: 'prevent', hint: 'rokna — stops events, not skin damage' },
          { verb: 'shield', hint: 'dhaal banana — physical object needed' },
          { verb: 'deter', hint: 'discourage — sun rays can\'t be discouraged!' }
        ],
        feedback: 'Protect from is the standard collocation for keeping something safe from harm — "protect skin from sun" is a fixed natural phrase. Prevent is for stopping events or actions, not for guarding a person/object. Shield usually implies a physical barrier object. Deter means to psychologically discourage — completely wrong for sun rays.'
      }
    ]
  },

  'FROM_Liberation': {
    intro: 'Ye words liberation aur freedom ka feeling dete hain — kisi ko blame, zimmedari, ya kaid se azaad karna. Sab FROM ke saath chalte hain. Jab koi "mukti" ki baat ho, yahi family hai.',
    words: [
      {
        word: 'absolve',
        preposition: 'from',
        def_en: 'To officially declare someone free from guilt or responsibility.',
        def_hi: 'Kisi ko dosh ya zimmedari se mukt ghoshit karna ।',
        example: 'The report absolved her from the blame for the accident.',
        note: 'Absolve is about clearing moral/legal blame. Exonerate is similar but more formal/legal — used after investigation. Acquit is courtroom only.'
      },
      {
        word: 'exonerate',
        preposition: 'from',
        def_en: 'To officially free someone from blame or a criminal charge after investigation.',
        def_hi: 'Jaanch ke baad kisi ko dosh ya ilzaam se mukt karna ।',
        example: 'The report exonerated the crew from the responsibility for the collision.',
        note: 'Exonerate implies an official process of investigation before clearance. Absolve can be moral/informal. Acquit is only for court verdicts.'
      },
      {
        word: 'emancipate',
        preposition: 'from',
        def_en: 'To free someone from social, political or legal restrictions.',
        def_hi: 'Samajik, rajnitik ya kanuni pabandion se azaad karna ।',
        example: 'They felt that they had been emancipated from their father\'s control.',
        note: 'Emancipate is about freedom from oppressive systems or people — slavery, patriarchy, authoritarian control. Liberate is similar but more physical/military. Release is just letting go.'
      },
      {
        word: 'discharge',
        preposition: 'from',
        def_en: 'To officially release someone from a place, duty or obligation.',
        def_hi: 'Kisi ko hospital, fauj ya zimmedari se adhikarik taur par mukti dena ।',
        example: 'He was discharged from the hospital after treatment.',
        note: 'Discharge is formal/official and often institutional — hospital, army, duty. Release is more general. Liberate implies freeing from something oppressive.'
      },
      {
        word: 'dismiss',
        preposition: 'from',
        def_en: 'To officially remove someone from their job or position.',
        def_hi: 'Kisi ko naukri ya pad se adhikarik roop se hatana ।',
        example: 'He has been dismissed from his job for incompetence.',
        note: 'Dismiss is specifically about removing from employment or position — always a negative outcome. Discharge from a job is similar but discharge has wider uses (hospital, army). Release doesn\'t usually apply to jobs.'
      },
      {
        word: 'liberate',
        preposition: 'from',
        def_en: 'To set someone free from imprisonment, oppression or control.',
        def_hi: 'Kisi ko kaaid, jabardasti ya control se azaad karna ।',
        example: 'They said they would send the troops to liberate the people from the dictator.',
        note: 'Liberate has a heroic, often military or political tone. Emancipate is more social/legal. Release is the most neutral — just letting go.'
      },
      {
        word: 'release',
        preposition: 'from',
        def_en: 'To free someone from confinement, obligation or captivity.',
        def_hi: 'Kisi ko kaaid, bandhan ya zimmedari se chhodna ।',
        example: 'He was released from prison after serving a five-year sentence.',
        note: 'Release is the most neutral liberation word — no heroic or moral connotation. Liberate implies struggle. Emancipate implies systemic oppression. Release is just the act of letting go.'
      },
      {
        word: 'exculpate',
        preposition: 'from',
        def_en: 'To clear someone of blame or fault, especially in formal contexts.',
        def_hi: 'Kisi ko aaropmukt karna, khaaskar औपचारिक sandarbh mein ।',
        example: 'He exculpated himself from all the charges.',
        note: 'Exculpate is the most formal/legalistic word for clearing blame — more so than absolve or exonerate. Used in written/legal contexts, rarely in everyday speech.'
      },
      {
        word: 'exempt',
        preposition: 'from',
        def_en: 'To officially free someone from a duty, rule or obligation.',
        def_hi: 'Kisi ko kisi niyam, faraz ya zimmedari se adhikarik choot dena ।',
        example: 'Small businesses have been exempted from the tax increase.',
        note: 'Exempt is about official exception from rules/duties — not emotional liberation. Absolve/exonerate are about clearing blame. Exempt is purely administrative.'
      },
      {
        word: 'exclude',
        preposition: 'from',
        def_en: 'To deliberately leave someone out of a group, place or activity.',
        def_hi: 'Jaanboojhkar kisi ko kisi group, jagah ya kaam se bahar rakhna ।',
        example: 'Women are still excluded from the club.',
        note: 'Exclude is the only word here with a negative connotation for the subject — being excluded is not a liberation. All others (liberate, release, exempt) benefit the subject. Exclude is used by those in power against others.'
      }
    ],
    questions: [
      {
        id: 'absolve_from_q1',
        sentence: 'The report absolved her _____ the blame for the accident.',
        correct: 'from',
        options: [
          { verb: 'from', hint: 'dosh se mukt — blame/guilt + FROM' },
          { verb: 'of', hint: 'OF bhi sunta hai but absolve takes FROM' },
          { verb: 'for', hint: 'FOR is wrong preposition here' },
          { verb: 'against', hint: 'AGAINST is completely wrong' }
        ],
        feedback: 'Absolve takes FROM — "absolved from blame/guilt" is the fixed collocation. Note the PDF also allows "absolved of" in some contexts, but FROM is standard with blame. FOR and AGAINST are not used with absolve at all.'
      },
      {
        id: 'exonerate_from_q1',
        sentence: 'The report _____ the crew from the responsibility for the collision.',
        correct: 'exonerated',
        options: [
          { verb: 'absolved', hint: 'moral/informal clearing — less formal than exonerate' },
          { verb: 'exonerated', hint: 'investigation ke baad — official clearance' },
          { verb: 'exempted', hint: 'rule se choot — administrative, not blame' },
          { verb: 'excluded', hint: 'bahar karna — negative, not clearing blame' }
        ],
        feedback: 'Exonerated fits because the word "report" implies an official investigation has taken place — exonerate specifically means cleared after such a process. Absolved could work but is more moral/informal. Exempted is about being excused from rules, not cleared of blame. Excluded means shut out, which is the opposite of being cleared.'
      },
      {
        id: 'emancipate_from_q1',
        sentence: 'They felt that they had been _____ from their father\'s control.',
        correct: 'emancipated',
        options: [
          { verb: 'liberated', hint: 'military/heroic freedom — more dramatic' },
          { verb: 'released', hint: 'neutral release — prison/captivity context' },
          { verb: 'emancipated', hint: 'social/family oppression se azaad' },
          { verb: 'discharged', hint: 'institutional release — hospital/army' }
        ],
        feedback: 'Emancipated is perfect for freedom from a controlling social or family figure — it specifically refers to liberation from oppressive authority (like a domineering father). Liberated sounds too dramatic and military for a family context. Released implies physical captivity like a prison. Discharged is for institutions like hospitals or the army.'
      },
      {
        id: 'discharge_from_q1',
        sentence: 'He was _____ from the hospital after treatment.',
        correct: 'discharged',
        options: [
          { verb: 'released', hint: 'prison context — too informal for hospital' },
          { verb: 'discharged', hint: 'hospital/army — official institutional release' },
          { verb: 'liberated', hint: 'oppression se azaad — wrong context' },
          { verb: 'dismissed', hint: 'naukri se nikalna — not hospital' }
        ],
        feedback: 'Discharged is the fixed, formal word used when a patient is officially released from hospital — this is standard medical English. Released sounds like the person was in prison. Liberated implies oppressive captivity, which exaggerates the hospital context. Dismissed means fired from a job, not let go from a hospital.'
      },
      {
        id: 'dismiss_from_q1',
        sentence: 'He has been _____ from his job for incompetence.',
        correct: 'dismissed',
        options: [
          { verb: 'discharged', hint: 'hospital/army se — not usually "job"' },
          { verb: 'excluded', hint: 'bahar karna — group/place, not employment' },
          { verb: 'dismissed', hint: 'naukri se nikalna — employment termination' },
          { verb: 'exempted', hint: 'choot dena — administrative excuse, not firing' }
        ],
        feedback: 'Dismissed from a job is the standard phrase for being fired/terminated from employment. Discharged can be used for job/duty in military context but is unusual for regular jobs. Excluded means kept out of a group, not fired. Exempted means given an exception from a rule — the opposite of what happened here.'
      },
      {
        id: 'liberate_from_q1',
        sentence: 'They said they would send the troops to _____ the people from the dictator.',
        correct: 'liberate',
        options: [
          { verb: 'emancipate', hint: 'social/legal freedom — not military' },
          { verb: 'release', hint: 'neutral letting go — not military rescue' },
          { verb: 'liberate', hint: 'troops + dictator = military liberation' },
          { verb: 'absolve', hint: 'blame se mukt — wrong context' }
        ],
        feedback: 'Liberate is the word for military or political freedom from an oppressive ruler — "liberate a country/people from a dictator" is a classic usage. Emancipate is for social/legal oppression, not military. Release is too neutral for a heroic military operation. Absolve is about clearing blame, completely wrong here.'
      },
      {
        id: 'release_from_q1',
        sentence: 'He was _____ from prison after serving a five-year sentence.',
        correct: 'released',
        options: [
          { verb: 'discharged', hint: 'hospital/army — not prison' },
          { verb: 'liberated', hint: 'oppression se — too dramatic for routine prison' },
          { verb: 'released', hint: 'prison se bahar — standard word' },
          { verb: 'exonerated', hint: 'cleared of blame — but he served his sentence' }
        ],
        feedback: 'Released from prison is the standard collocation for someone finishing their sentence and leaving prison. Discharged is for hospitals and the military. Liberated sounds overly dramatic — liberation is for political prisoners or oppressed peoples, not routine sentence completion. Exonerated means cleared of charges — but this person served their full sentence, implying guilt was established.'
      },
      {
        id: 'exculpate_from_q1',
        sentence: 'He _____ himself from all the charges.',
        correct: 'exculpated',
        options: [
          { verb: 'absolved', hint: 'moral clearing — less formal/legal' },
          { verb: 'exculpated', hint: 'most formal legal term — cleared of charges' },
          { verb: 'exempted', hint: 'rule se choot — not for criminal charges' },
          { verb: 'exonerated', hint: 'investigation ke baad — needs external body' }
        ],
        feedback: 'Exculpated is the most formal legalistic term for clearing oneself of charges — it is used in legal/written contexts precisely for this. Absolved is more moral/informal. Exempted is about rules and duties, not criminal charges. Exonerated usually involves an external investigation body clearing you — "exonerated himself" sounds unusual; exonerate is normally done by others.'
      },
      {
        id: 'exempt_from_q1',
        sentence: 'Small businesses have been _____ from the tax increase.',
        correct: 'exempted',
        options: [
          { verb: 'excluded', hint: 'bahar karna — negative exclusion, not a benefit' },
          { verb: 'exempted', hint: 'official choot — administrative exception' },
          { verb: 'absolved', hint: 'blame se mukt — taxes are not blame' },
          { verb: 'released', hint: 'kaid se chhodni — not for tax rules' }
        ],
        feedback: 'Exempted from the tax increase is the correct administrative/official term for being given an exception from a rule or obligation. Excluded has a negative connotation — being shut out. Absolved is for clearing guilt or blame, not tax obligations. Released is for physical or literal captivity, not rules.'
      },
      {
        id: 'exclude_from_q1',
        sentence: 'Women are still _____ from the club.',
        correct: 'excluded',
        options: [
          { verb: 'exempted', hint: 'choot milna — a benefit, not discrimination' },
          { verb: 'debarred', hint: 'bahar karna — similar but more formal/legal' },
          { verb: 'excluded', hint: 'deliberately bahar rakhna — discrimination' },
          { verb: 'discharged', hint: 'institutional release — wrong context' }
        ],
        feedback: 'Excluded is the natural word for being deliberately kept out of a social group — it carries a tone of discrimination or unfairness, which fits the "still" in the sentence. Exempted is a benefit (excused from something), not a disadvantage. Debarred is very similar and nearly correct — but excluded is more natural for social discrimination. Discharged is for institutional releases, not social exclusion.'
      }
    ]
  },

  'OF_Deprivation': {
    intro: 'Ye group "kuch chheenle jaane" ya "kuch na hone" ke baare mein hai — sab OF ke saath aate hain. Bereft, deprived, devoid, divested — in sab mein ek "khaali pan" ya "chheen lena" ki feeling hai.',
    words: [
      {
        word: 'bereft',
        preposition: 'of',
        def_en: 'Lacking something completely, especially an emotional quality; or deeply sad from a loss.',
        def_hi: 'Kisi cheez se bilkul khali hona, khaaskar koi bhaavnaa ya insaan kho dene ke baad ।',
        example: 'He was bereft of hope when he got fired from his job.',
        note: 'Bereft is the most emotionally charged — it implies grief from loss. Devoid is purely descriptive (no emotion). Deprived implies someone took it away.'
      },
      {
        word: 'deprive',
        preposition: 'of',
        def_en: 'To take away something important that someone needs or is entitled to.',
        def_hi: 'Kisi ka zaruri haq ya cheez chheenna ।',
        example: 'He claimed that he had been deprived of his freedom.',
        note: 'Deprive implies an external agent taking something — someone is doing it to you. Devoid just describes absence. Bereft focuses on the emotional state after loss.'
      },
      {
        word: 'devoid',
        preposition: 'of',
        def_en: 'Completely lacking in a particular quality or substance.',
        def_hi: 'Kisi visheshta ya cheez ka bilkul na hona ।',
        example: 'He seems to be devoid of any feeling for his ex girlfriend.',
        note: 'Devoid is a cold, factual description of absence — no emotion, no blame. Bereft has grief. Deprived has someone to blame. Devoid is like saying "this box has zero of X."'
      },
      {
        word: 'divest',
        preposition: 'of',
        def_en: 'To take away power, rights or property from someone.',
        def_hi: 'Kisi ki powers, adhikaar ya sampatti chheenna ।',
        example: 'Owing to her careless behaviour, she was divested of her responsibilities.',
        note: 'Divest is formal and usually about stripping power or authority — institutional. Deprive is broader and more personal. Rob is criminal. Strip is informal for divest.'
      },
      {
        word: 'destitute',
        preposition: 'of',
        def_en: 'Completely lacking something (especially money, feelings or basic necessities).',
        def_hi: 'Kisi zaruri cheez ka bilkul na hona, aksar paison ya bhaavnaaon ka ।',
        example: 'She seems destitute of ordinary human feelings.',
        note: 'Destitute of is used for abstract qualities (feelings, hope). As an adjective alone, destitute usually means extremely poor. Devoid of is more versatile and neutral.'
      },
      {
        word: 'empty',
        preposition: 'of',
        def_en: 'Containing nothing; lacking the expected contents.',
        def_hi: 'Khaali hona — koi cheez na hona jo honi chahiye ।',
        example: 'Our newly bought house is empty of furniture.',
        note: 'Empty of is literal/physical — things, spaces. Devoid of works for both abstract and physical. Bereft and destitute are for emotions/qualities.'
      },
      {
        word: 'rob',
        preposition: 'of',
        def_en: 'To take something away from someone, either by crime or unfairly.',
        def_hi: 'Kisi se kuch chheenna, chahe lutkar ya nainsaafi se ।',
        example: 'They robbed the company of $2 million.',
        note: 'Rob of can be literal (theft) or figurative ("illness robbed him of his youth"). Deprive is more formal and institutional. Divest is always about power/authority, not money stolen.'
      },
      {
        word: 'strip',
        preposition: 'of',
        def_en: 'To take away someone\'s rank, rights, or possessions, often forcibly.',
        def_hi: 'Kisi ki rank, adhikaar ya samaan jabardasti chheenna ।',
        example: 'The corrupt IAS officer has been completely stripped of power.',
        note: 'Strip of is strong and often humiliating — rank, medals, power. Divest of is more formal and less aggressive. Deprive of is broader and can be gradual.'
      },
      {
        word: 'despoil',
        preposition: 'of',
        def_en: 'To steal or take things from someone, especially violently or thoroughly.',
        def_hi: 'Kisi ki sampatti ya cheezein hinsa se ya poori tarah chheenna ।',
        example: 'The thief despoiled the old man of his belongings.',
        note: 'Despoil is literary/formal and implies thorough or violent plunder. Rob is more everyday. Strip is about rank/dignity. Despoil is the most dramatic and complete.'
      }
    ],
    questions: [
      {
        id: 'bereft_of_q1',
        sentence: 'He was _____ of hope when he got fired from his job.',
        correct: 'bereft',
        options: [
          { verb: 'devoid', hint: 'cold factual — no emotion attached' },
          { verb: 'bereft', hint: 'emotional grief + loss = bereft' },
          { verb: 'deprived', hint: 'someone ne chheena — but hope fades, not stolen' },
          { verb: 'destitute', hint: 'abstract quality mein — similar but less emotional' }
        ],
        feedback: 'Bereft is perfect here — it captures both the complete lack of hope AND the emotional devastation from job loss. Devoid would just say "he had zero hope" without the emotional weight. Deprived implies someone actively took his hope away, which is not natural. Destitute of hope is possible but far less common and natural than bereft of hope.'
      },
      {
        id: 'deprive_of_q1',
        sentence: 'He claimed that he had been _____ of his freedom.',
        correct: 'deprived',
        options: [
          { verb: 'bereft', hint: 'emotional loss — not claimed against someone' },
          { verb: 'divested', hint: 'power/authority — not personal freedom' },
          { verb: 'deprived', hint: 'kisi ne chheena — external agent clear hai' },
          { verb: 'robbed', hint: 'criminal theft — informal for freedom' }
        ],
        feedback: 'Deprived of freedom is the standard, formal phrase used when someone\'s rights are taken away by an external force or system — "claimed he had been deprived" shows he\'s making a complaint against someone. Bereft is emotional, not a legal claim. Divested is for power/authority in institutional settings. Robbed of freedom is possible informally but sounds criminal rather than rights-based.'
      },
      {
        id: 'devoid_of_q1',
        sentence: 'He seems to be _____ of any feeling for his ex girlfriend.',
        correct: 'devoid',
        options: [
          { verb: 'bereft', hint: 'grief se khaali — implies he misses her' },
          { verb: 'devoid', hint: 'zero feeling — cold empty absence' },
          { verb: 'deprived', hint: 'someone ne feelings chheeni — can\'t happen' },
          { verb: 'empty', hint: 'physical khaali — not for feelings' }
        ],
        feedback: 'Devoid of any feeling is the exact phrase for describing a complete, cold absence of emotion — no warmth, no connection. Bereft would actually mean he is grieving over her (opposite meaning!). Deprived implies someone stole his feelings, which makes no sense. Empty of is used for physical containers or spaces, not for emotional qualities.'
      },
      {
        id: 'divest_of_q1',
        sentence: 'Owing to her careless behaviour, she was _____ of her responsibilities.',
        correct: 'divested',
        options: [
          { verb: 'deprived', hint: 'personal rights — not formal authority transfer' },
          { verb: 'stripped', hint: 'forcible, humiliating — similar but more aggressive' },
          { verb: 'divested', hint: 'formal authority removal — institutional' },
          { verb: 'robbed', hint: 'criminal — wrong tone for workplace' }
        ],
        feedback: 'Divested of responsibilities is the formal, professional term for officially removing someone\'s duties — exactly what happens in an institutional/workplace context. Deprived is more personal and about rights, not job responsibilities. Stripped is similar but has a more aggressive/humiliating connotation. Robbed implies criminal intent, completely wrong for a professional context.'
      },
      {
        id: 'destitute_of_q1',
        sentence: 'She seems _____ of ordinary human feelings.',
        correct: 'destitute',
        options: [
          { verb: 'devoid', hint: 'cold absence — very similar, but devoid more common' },
          { verb: 'bereft', hint: 'emotional grief — she\'s not grieving, she lacks feeling' },
          { verb: 'destitute', hint: 'quality ka bilkul na hona — formal literary' },
          { verb: 'empty', hint: 'physical khaali — not for human feelings' }
        ],
        feedback: 'Destitute of human feelings is a literary/formal phrase meaning completely lacking emotional qualities — it\'s used to describe someone cold or inhuman. Devoid of is also correct here (they\'re very close), but this question tests the word. Bereft would mean she\'s grieving the loss of her feelings, which is the opposite. Empty of is for physical things, not abstract qualities like feelings.'
      },
      {
        id: 'empty_of_q1',
        sentence: 'Our newly bought house is _____ of furniture.',
        correct: 'empty',
        options: [
          { verb: 'devoid', hint: 'abstract qualities ke liye — unusual for furniture' },
          { verb: 'empty', hint: 'physical khaali — furniture, rooms, containers' },
          { verb: 'bereft', hint: 'emotional grief — house doesn\'t grieve!' },
          { verb: 'destitute', hint: 'poverty/abstract — not physical furniture' }
        ],
        feedback: 'Empty of furniture is the most natural and physical description of a house without furniture — empty is for literal, physical spaces and containers. Devoid of is used for abstract qualities, not physical objects in rooms. Bereft implies emotional loss — a house can\'t feel grief. Destitute of is literary and usually used for abstract things like feelings or hope.'
      },
      {
        id: 'rob_of_q1',
        sentence: 'They _____ the company of $2 million.',
        correct: 'robbed',
        options: [
          { verb: 'divested', hint: 'formal authority removal — not criminal theft' },
          { verb: 'deprived', hint: 'haq chheenna — formal rights, not money theft' },
          { verb: 'robbed', hint: 'paise churana — criminal/forcible taking' },
          { verb: 'stripped', hint: 'rank/power chheenna — not money' }
        ],
        feedback: 'Robbed the company of $2 million is the natural phrase for criminal or forcible taking of money. Divested implies formally removing someone\'s powers or duties, not stealing money. Deprived is used for rights and freedoms, not financial theft. Stripped of is for rank, dignity, medals, or power — not money.'
      },
      {
        id: 'strip_of_q1',
        sentence: 'The corrupt IAS officer has been completely _____ of power.',
        correct: 'stripped',
        options: [
          { verb: 'divested', hint: 'formal removal — less harsh than stripped' },
          { verb: 'deprived', hint: 'haq chheena — softer, broader term' },
          { verb: 'stripped', hint: 'forcibly, humiliatingly — rank/power removed' },
          { verb: 'robbed', hint: 'criminal theft — power can\'t be robbed' }
        ],
        feedback: 'Stripped of power is the strongest, most forcible term for removing someone\'s authority — it implies humiliation and disgrace, fitting for a corrupt official. Divested is formal and clinical without the humiliation angle. Deprived is softer and broader. Robbed is for criminal taking of money or possessions — you don\'t "rob someone of power" in standard usage.'
      },
      {
        id: 'despoil_of_q1',
        sentence: 'The thief _____ the old man of his belongings.',
        correct: 'despoiled',
        options: [
          { verb: 'robbed', hint: 'everyday theft — less dramatic, less complete' },
          { verb: 'stripped', hint: 'rank/dignity — not belongings' },
          { verb: 'despoiled', hint: 'literary + complete plunder — dramatic' },
          { verb: 'deprived', hint: 'formal rights — not everyday theft' }
        ],
        feedback: 'Despoiled of belongings is a literary, dramatic word for thorough plundering — it implies the thief took everything completely and violently. Robbed is the everyday word for theft and would also fit, but despoiled is the answer being tested here. Stripped of is for rank, honor, medals or power, not personal belongings. Deprived of is a formal rights-based word, not for theft.'
      }
    ]
  },

  'OF_Lack': {
    intro: 'Ye sab words "kami" ke synonyms hain — sab OF ke saath chalte hain. Lack, shortage, dearth, paucity — in mein se har ek ki intensity alag hai. Yahi distinction exam mein kaam aata hai.',
    words: [
      {
        word: 'lack',
        preposition: 'of',
        def_en: 'The state of not having enough of something.',
        def_hi: 'Kisi cheez ki kami ya na hona ।',
        example: 'His answer demonstrated an absolute lack of understanding of the question.',
        note: 'Lack is the most neutral and common word. Shortage implies quantity. Dearth implies rarity. Paucity is formal/literary for severe scarcity.'
      },
      {
        word: 'short',
        preposition: 'of',
        def_en: 'Not having enough of something needed.',
        def_hi: 'Zarurat se kam hona ।',
        example: 'She is not short of excuses when things go wrong.',
        note: 'Short of is used predicatively (she is short of). Deficient in/of implies a more specific measured shortfall. Lacking is adjectival.'
      },
      {
        word: 'void',
        preposition: 'of',
        def_en: 'Completely empty or lacking something.',
        def_hi: 'Bilkul khaali ya kisi cheez se rahit ।',
        example: 'The sky was void of stars yesterday.',
        note: 'Void of is literary and poetic for complete emptiness. Devoid of (from previous group) is more common in everyday usage. Both are about total absence.'
      },
      {
        word: 'deficiency',
        preposition: 'of',
        def_en: 'A lack or shortage of something necessary.',
        def_hi: 'Zaruri cheez ki kami ya kamzori ।',
        example: 'There is a deficiency of vitamin B12 in your body.',
        note: 'Deficiency is often used for measurable, specific lacks — nutrition, vitamins, qualities. Shortage is about quantity in general. Dearth implies the thing is hard to find at all.'
      },
      {
        word: 'shortage',
        preposition: 'of',
        def_en: 'A situation where there is not enough of something needed.',
        def_hi: 'Kisi zaruri cheez ki maatra mein kami ।',
        example: 'There is no shortage of books in our library for a diligent student.',
        note: 'Shortage implies a quantitative gap — supply vs demand. Dearth is more extreme (very rare). Paucity is formal and used for very small amounts. Lack is more general.'
      },
      {
        word: 'paucity',
        preposition: 'of',
        def_en: 'The presence of something in very small or insufficient quantities.',
        def_hi: 'Bahut kam ya naakafi maatra mein hona ।',
        example: 'There is a paucity of medicines in most of the government hospitals.',
        note: 'Paucity is the most formal/literary of the group and emphasises extreme smallness of quantity. Use it in essays for effect. Shortage is more common in news and everyday speech.'
      },
      {
        word: 'dearth',
        preposition: 'of',
        def_en: 'A scarcity or insufficient supply of something.',
        def_hi: 'Kisi cheez ki bahut badi kami ya durlabhata ।',
        example: 'Human Resources managers complain that there is a dearth of talented candidates.',
        note: 'Dearth implies the thing is genuinely rare or hard to find — more extreme than shortage. Paucity is about small quantity. Dearth is about rarity/scarcity. Often used for talent, resources, ideas.'
      }
    ],
    questions: [
      {
        id: 'lack_of_q1',
        sentence: 'His answer demonstrated an absolute _____ of understanding of the question.',
        correct: 'lack',
        options: [
          { verb: 'shortage', hint: 'quantity gap — not for understanding' },
          { verb: 'lack', hint: 'neutral kami — most common word' },
          { verb: 'dearth', hint: 'rarity — understanding isn\'t rare' },
          { verb: 'paucity', hint: 'extreme scarcity — too formal for understanding' }
        ],
        feedback: 'Lack of understanding is a fixed natural phrase in English. Shortage implies a supply problem, not an intellectual one. Dearth suggests something is rare in the world, but understanding in one person\'s answer isn\'t about rarity. Paucity is formal and used for tangible things, not cognitive qualities.'
      },
      {
        id: 'short_of_q1',
        sentence: 'She is not _____ of excuses when things go wrong.',
        correct: 'short',
        options: [
          { verb: 'devoid', hint: 'bilkul khaali — but she has plenty!' },
          { verb: 'short', hint: 'not short of = bahut zyada hai' },
          { verb: 'lacking', hint: 'lacking takes no preposition here' },
          { verb: 'deficient', hint: 'measured shortfall — not for excuses' }
        ],
        feedback: 'Not short of is the idiom meaning "has plenty of" — "she\'s never short of excuses" is a very natural English phrase. Devoid means completely lacking, which is the opposite of what the sentence says. Lacking doesn\'t naturally take "of" in this construction. Deficient of/in implies a measured shortfall, which is too clinical for "excuses."'
      },
      {
        id: 'void_of_q1',
        sentence: 'The sky was _____ of stars yesterday.',
        correct: 'void',
        options: [
          { verb: 'empty', hint: 'physical khaali — possible but less literary' },
          { verb: 'devoid', hint: 'similar — devoid of stars also works' },
          { verb: 'void', hint: 'literary emptiness — poetic for sky/stars' },
          { verb: 'bereft', hint: 'emotional grief — sky doesn\'t grieve' }
        ],
        feedback: 'Void of is the literary/poetic word for complete emptiness, perfect for describing a starless sky. Devoid of is also grammatically correct and very similar, but void of has a more poetic quality. Empty of is possible but more physical and less evocative. Bereft implies emotional loss — a sky can\'t feel grief.'
      },
      {
        id: 'deficiency_of_q1',
        sentence: 'There is a _____ of vitamin B12 in your body.',
        correct: 'deficiency',
        options: [
          { verb: 'shortage', hint: 'quantity gap — more for resources, less for medical' },
          { verb: 'lack', hint: 'general kami — correct but less precise than deficiency' },
          { verb: 'deficiency', hint: 'medical/measurable kami — exact word for nutrients' },
          { verb: 'dearth', hint: 'world mein rare — not about your body\'s nutrients' }
        ],
        feedback: 'Deficiency of is the precise medical/nutritional term — "vitamin deficiency" is a fixed medical phrase. Shortage is for supply problems (food shortage, water shortage), not internal body chemistry. Lack is correct but less precise. Dearth implies something is rare in the world at large, not in your body specifically.'
      },
      {
        id: 'shortage_of_q1',
        sentence: 'There is no _____ of books in our library for a diligent student.',
        correct: 'shortage',
        options: [
          { verb: 'dearth', hint: 'extreme rarity — but library has many books' },
          { verb: 'shortage', hint: 'supply adequacy — books available hain' },
          { verb: 'paucity', hint: 'very small quantity — not for a full library' },
          { verb: 'deficiency', hint: 'measured medical-type lack — books aren\'t vitamins' }
        ],
        feedback: 'Shortage of books is the natural quantitative phrase — there\'s enough supply for students. Dearth would be too extreme, implying books are almost impossible to find anywhere. Paucity implies a very tiny amount, which contradicts a functioning library. Deficiency is for measurable, specific lacks like nutrients — not for library collections.'
      },
      {
        id: 'paucity_of_q1',
        sentence: 'There is a _____ of medicines in most of the government hospitals.',
        correct: 'paucity',
        options: [
          { verb: 'shortage', hint: 'common word — but paucity is being tested here' },
          { verb: 'lack', hint: 'general kami — correct but less formal' },
          { verb: 'paucity', hint: 'formal/literary + extremely small quantity' },
          { verb: 'dearth', hint: 'rarity — medicines exist, just very few here' }
        ],
        feedback: 'Paucity of medicines is a formal, literary phrase emphasising extremely small/insufficient quantities — used in serious written contexts. Shortage is also correct in meaning but is the more common everyday word; paucity is the exam word being tested. Lack is general and correct but less formal. Dearth implies the medicines barely exist anywhere, which is stronger than what the sentence says.'
      },
      {
        id: 'dearth_of_q1',
        sentence: 'Human Resources managers complain that there is a _____ of talented candidates.',
        correct: 'dearth',
        options: [
          { verb: 'shortage', hint: 'quantitative gap — similar but less about rarity' },
          { verb: 'paucity', hint: 'formal small quantity — very similar to dearth' },
          { verb: 'dearth', hint: 'genuine rarity — talent is hard to find' },
          { verb: 'lack', hint: 'neutral kami — less impactful than dearth' }
        ],
        feedback: 'Dearth of talented candidates is a standard HR/business phrase emphasising that talent is genuinely rare and hard to find — not just in short supply but scarce. Shortage is similar but focuses on quantity gap rather than rarity. Paucity is also formal and close in meaning — both are nearly correct, but dearth is the more natural choice for talent/skilled people. Lack is neutral and weaker.'
      }
    ]
  },

  'WITH_Fullness': {
    intro: 'Ye group "bharpur hona" ya "pura hona" ke baare mein hai — sab WITH ke saath chalte hain. Loaded, replete, teeming, brimmed — sab mein ek "full to the brim" wali feeling hai. Contrast with OF_Deprivation — woh group khaali karta hai, yeh group bharta hai!',
    words: [
      {
        word: 'loaded',
        preposition: 'with',
        def_en: 'Filled with or carrying a large amount of something.',
        def_hi: 'Kisi cheez se bhara hua ya bahut zyada le jaana ।',
        example: 'They loaded the lorry with potatoes.',
        note: 'Loaded with is physical and literal — weight, cargo, content. Replete with is more formal and literary. Brimming with suggests overflow.'
      },
      {
        word: 'overwhelmed',
        preposition: 'with',
        def_en: 'Overcome completely by a powerful emotion or quantity.',
        def_hi: 'Kisi bhaavna ya maatra se poori tarah dabba jana ।',
        example: 'They were overwhelmed with grief when their baby died.',
        note: 'Overwhelmed with is always about being overcome to the point of helplessness. Swamped with implies too much work/demand. Inundated with suggests a flood-like quantity.'
      },
      {
        word: 'replete',
        preposition: 'with',
        def_en: 'Full of or well-supplied with something.',
        def_hi: 'Kisi cheez se poori tarah bhara ya sampann hona ।',
        example: 'The harbor was replete with boats.',
        note: 'Replete with is literary and formal — used in written English. Loaded with is physical. Teeming with implies active movement/life. Replete is the calmest, most static fullness.'
      },
      {
        word: 'beset',
        preposition: 'with',
        def_en: 'Troubled or surrounded by difficulties or problems.',
        def_hi: 'Muskiaton ya khatron se ghira hua hona ।',
        example: 'With the amount of traffic nowadays, even a trip across town is beset with dangers.',
        note: 'Beset with is unique — it is about being surrounded by difficulties/problems, not pleasant fullness. All other WITH words here are neutral or positive. Beset with is always negative.'
      },
      {
        word: 'infested',
        preposition: 'with',
        def_en: 'Overrun by something harmful or unwanted, especially pests.',
        def_hi: 'Haanikaarak ya anuchhit cheez se bhara hua, khaaskar keede-makode ।',
        example: 'When we first moved in, the apartment was infested with cockroaches.',
        note: 'Infested with is always negative and usually about pests or something harmful overrunning a place. Teeming with and thronged with can be neutral/positive. Swarmed with is informal infested.'
      },
      {
        word: 'thronged',
        preposition: 'with',
        def_en: 'Full of a crowd of people.',
        def_hi: 'Logo ki bheed se bhara hua ।',
        example: 'The streets were thronged with tourists on the new year eve.',
        note: 'Thronged with is specifically about human crowds. Teeming with is broader — people, animals, activity. Crowded with is more everyday. Thronged is more literary/dramatic.'
      },
      {
        word: 'crowded',
        preposition: 'with',
        def_en: 'Filled with a large number of people or things in a limited space.',
        def_hi: 'Simit jagah mein log ya cheezein zyada bhar jana ।',
        example: 'The room was crowded with small pieces of furniture, cupboards, and little tables.',
        note: 'Crowded with is the most everyday word for fullness. Thronged with is more literary/dramatic. Congested with implies blockage/obstruction. Packed with is informal crowded.'
      },
      {
        word: 'congested',
        preposition: 'with',
        def_en: 'So full of traffic or people that movement is difficult.',
        def_hi: 'Traffic ya log itne zyada ki aana-jaana mushkil ho jaye ।',
        example: 'The city streets were congested with vehicles.',
        note: 'Congested with specifically implies blockage and difficulty of movement — used for traffic, arteries (medical), or crowds. Crowded with is just full. Thronged with is dramatic. Congested has a negative, obstructed tone.'
      },
      {
        word: 'endowed',
        preposition: 'with',
        def_en: 'Naturally provided with a quality, ability or advantage.',
        def_hi: 'Prakriti se koi gun ya shakti prapt hona ।',
        example: 'Dr. Kalam was endowed with great wisdom.',
        note: 'Endowed with is used for natural gifts, talents or qualities — always positive. Gifted with is very similar but more informal. Loaded with is physical, not for abstract qualities.'
      },
      {
        word: 'gifted',
        preposition: 'with',
        def_en: 'Having a natural talent or special ability.',
        def_hi: 'Prakriti se koi khaas pratibha ya kshamata hona ।',
        example: 'Nora Fatehi is gifted with a charming smile.',
        note: 'Gifted with is informal and usually refers to personal qualities, charm or talent. Endowed with is more formal and is also used for institutional gifts (endowed with a legacy). Both mean naturally blessed.'
      },
      {
        word: 'swamped',
        preposition: 'with',
        def_en: 'Overwhelmed with too much of something, especially work or demands.',
        def_hi: 'Kaam ya maangon se dab jaana ।',
        example: 'After the severe storms, insurance companies are expecting to be swamped with claims.',
        note: 'Swamped with is about being overwhelmed by work/demands/quantity — informal but vivid. Overwhelmed with is more emotional. Inundated with is formal for flood-like quantity.'
      },
      {
        word: 'inundated',
        preposition: 'with',
        def_en: 'Overwhelmed with a large quantity of something, like a flood.',
        def_hi: 'Bahut badi maatra mein aa jaana, jaise baadh mein ।',
        example: 'Fans inundated the radio station with calls.',
        note: 'Inundated with is formal and implies a flood-like overwhelming quantity. Swamped with is informal. Overwhelmed with is more emotional. Brimmed with is about a container being full, not a flood.'
      },
      {
        word: 'brimmed',
        preposition: 'with',
        def_en: 'To be full to the very top with something, especially emotion.',
        def_hi: 'Kisi cheez se kanth tak bhara hona, khaaskar bhaavnaaon se ।',
        example: 'Her eyes brimmed with tears when she heard that he was alive.',
        note: 'Brimmed with is almost always used for eyes full of tears or a container at its limit. Overwhelmed with is emotional but total. Brimmed with suggests being right at the edge, about to overflow.'
      },
      {
        word: 'teeming',
        preposition: 'with',
        def_en: 'Full of moving, active people, animals or things.',
        def_hi: 'Halchal se bhara hua — log, janwar ya cheezein khub sari ।',
        example: 'The mall was teeming with shoppers yesterday.',
        note: 'Teeming with implies active, moving, living things — a teeming market, teeming with life. Thronged with is about crowd size. Crowded with is static fullness. Teeming adds energy and movement.'
      }
    ],
    questions: [
      {
        id: 'loaded_with_q1',
        sentence: 'They _____ the lorry with potatoes.',
        correct: 'loaded',
        options: [
          { verb: 'filled', hint: 'standard bharna — less specific than loaded' },
          { verb: 'loaded', hint: 'lorry mein saman — physical loading' },
          { verb: 'burdened', hint: 'problems se — not physical cargo' },
          { verb: 'packed', hint: 'informal stuffing — close but loaded is standard' }
        ],
        feedback: 'Loaded the lorry with potatoes is the standard phrase for putting cargo into a vehicle — "load a vehicle with cargo" is a fixed collocation. Filled is grammatically correct but less specific. Burdened with implies emotional or metaphorical weight, not physical cargo. Packed is informal and usually for suitcases, not lorries.'
      },
      {
        id: 'overwhelmed_with_q1',
        sentence: 'They were _____ with grief when their baby died.',
        correct: 'overwhelmed',
        options: [
          { verb: 'swamped', hint: 'work/demands se — not emotions' },
          { verb: 'inundated', hint: 'flood-like quantity — formal, not for grief' },
          { verb: 'overwhelmed', hint: 'emotion se dab jaana — grief ka best word' },
          { verb: 'beset', hint: 'surrounded by problems — grief is not a problem' }
        ],
        feedback: 'Overwhelmed with grief is the natural, powerful phrase for being completely overcome by sorrow. Swamped with is for work and demands, not deep emotions. Inundated with suggests a flood of something — used for calls, emails, requests, not grief. Beset with means surrounded by difficulties — grief from losing a child is not just a "difficulty."'
      },
      {
        id: 'replete_with_q1',
        sentence: 'The harbor was _____ with boats.',
        correct: 'replete',
        options: [
          { verb: 'teeming', hint: 'active movement — boats are static' },
          { verb: 'thronged', hint: 'human crowds — not boats' },
          { verb: 'replete', hint: 'literary fullness — well-supplied' },
          { verb: 'loaded', hint: 'physical cargo — not about a harbor' }
        ],
        feedback: 'Replete with boats is a literary, formal phrase for a harbor well-supplied with boats — a calm, static fullness. Teeming with implies movement and life, which fits animals or people better than anchored boats. Thronged with is specifically about human crowds. Loaded with is for physical cargo in vehicles, not a harbor scene.'
      },
      {
        id: 'beset_with_q1',
        sentence: 'With the amount of traffic nowadays, even a trip across town is _____ with dangers.',
        correct: 'beset',
        options: [
          { verb: 'laden', hint: 'physical weight — not abstract dangers' },
          { verb: 'replete', hint: 'pleasant fullness — dangers aren\'t pleasant' },
          { verb: 'beset', hint: 'surrounded by dangers — only negative WITH word' },
          { verb: 'teeming', hint: 'active life — dangers aren\'t living creatures' }
        ],
        feedback: 'Beset with is the only WITH_Fullness word that is negative — it specifically means surrounded or troubled by difficulties and dangers. Laden with implies physical weight. Replete with is for pleasant or neutral fullness. Teeming with is for living, moving things — dangers aren\'t creatures.'
      },
      {
        id: 'infested_with_q1',
        sentence: 'When we first moved in, the apartment was _____ with cockroaches.',
        correct: 'infested',
        options: [
          { verb: 'teeming', hint: 'active movement — possible but less specific for pests' },
          { verb: 'beset', hint: 'surrounded by problems — cockroaches are pests, not abstract dangers' },
          { verb: 'infested', hint: 'pest overrun — keede-makode ka specific word' },
          { verb: 'crowded', hint: 'people/things — cockroaches ke liye too mild' }
        ],
        feedback: 'Infested with cockroaches is the precise word for a pest overrun — it implies harmful creatures taking over a space. Teeming with is also possible but is less specific (teeming with life = neutral/positive). Beset with is for abstract difficulties and dangers, not physical pests. Crowded with is too mild and neutral for a pest problem.'
      },
      {
        id: 'thronged_with_q1',
        sentence: 'The streets were _____ with tourists on the new year eve.',
        correct: 'thronged',
        options: [
          { verb: 'crowded', hint: 'everyday word — correct but less literary' },
          { verb: 'teeming', hint: 'active movement — similar, but thronged = crowds specifically' },
          { verb: 'thronged', hint: 'literary human crowds — dramatic and vivid' },
          { verb: 'congested', hint: 'movement blocked — obstruction focus, not festive crowd' }
        ],
        feedback: 'Thronged with tourists is the literary, dramatic way to describe streets packed with crowds — it evokes a festive, energetic scene. Crowded with is also correct but more everyday and less vivid. Teeming with is similar but emphasises movement and activity over crowd size. Congested with focuses on obstruction and blocked movement — wrong tone for new year celebrations.'
      },
      {
        id: 'congested_with_q1',
        sentence: 'The city streets were _____ with vehicles.',
        correct: 'congested',
        options: [
          { verb: 'crowded', hint: 'general fullness — correct but less specific' },
          { verb: 'thronged', hint: 'human crowds — vehicles are not people' },
          { verb: 'congested', hint: 'traffic + movement blocked — perfect for vehicles' },
          { verb: 'loaded', hint: 'physical cargo — streets don\'t carry cargo' }
        ],
        feedback: 'Congested with vehicles is the precise word for traffic blockage — congested specifically implies that movement is difficult or blocked due to overcrowding. Crowded with is more general. Thronged with is for human crowds, not vehicles. Loaded with implies carrying cargo in a vehicle, not streets filled with traffic.'
      },
      {
        id: 'endowed_with_q1',
        sentence: 'Dr. Kalam was _____ with great wisdom.',
        correct: 'endowed',
        options: [
          { verb: 'gifted', hint: 'natural talent — informal, similar meaning' },
          { verb: 'endowed', hint: 'formal natural gift — wisdom ke liye classic' },
          { verb: 'blessed', hint: 'religious tone — different register' },
          { verb: 'loaded', hint: 'physical cargo — abstract qualities ke liye wrong' }
        ],
        feedback: 'Endowed with great wisdom is the formal, classic phrase for natural gifts and abilities — it is the standard choice for a respected figure like Dr. Kalam. Gifted with is similar but more informal and usually for everyday talents. Blessed with has a religious/spiritual tone that may not be appropriate for a secular context. Loaded with is for physical cargo, not abstract qualities.'
      },
      {
        id: 'gifted_with_q1',
        sentence: 'Nora Fatehi is _____ with a charming smile.',
        correct: 'gifted',
        options: [
          { verb: 'endowed', hint: 'formal natural gift — slightly heavy for a smile' },
          { verb: 'gifted', hint: 'informal natural quality — smile ke liye natural' },
          { verb: 'brimmed', hint: 'full to the top — not for a smile' },
          { verb: 'loaded', hint: 'physical cargo — completely wrong' }
        ],
        feedback: 'Gifted with a charming smile is the natural, informal way to say someone has a beautiful smile as a natural quality. Endowed with is also correct but is more formal — "endowed with a smile" sounds a bit heavy for a casual compliment. Brimmed with means full to the top of a container, not possessing a quality. Loaded with is for physical cargo.'
      },
      {
        id: 'swamped_with_q1',
        sentence: 'After the severe storms, insurance companies are expecting to be _____ with claims.',
        correct: 'swamped',
        options: [
          { verb: 'inundated', hint: 'formal flood quantity — also correct, but swamped is more vivid' },
          { verb: 'overwhelmed', hint: 'emotional overcome — companies don\'t feel emotions' },
          { verb: 'swamped', hint: 'too much work/demands — business context' },
          { verb: 'beset', hint: 'surrounded by problems — claims are not dangers' }
        ],
        feedback: 'Swamped with claims is the vivid, business-appropriate phrase for being overwhelmed with a flood of demands/requests. Inundated with is also correct (both are very close), but swamped is more informal and common in business contexts. Overwhelmed with is more emotional — companies deal with volume, not emotional responses. Beset with is for dangers and difficulties, not claim volumes.'
      },
      {
        id: 'inundated_with_q1',
        sentence: 'Fans _____ the radio station with calls.',
        correct: 'inundated',
        options: [
          { verb: 'swamped', hint: 'too much work — informal, similar meaning' },
          { verb: 'overwhelmed', hint: 'emotional — radio stations aren\'t emotional' },
          { verb: 'inundated', hint: 'formal flood quantity — calls ki baadh aa gayi' },
          { verb: 'brimmed', hint: 'container full — not for phone calls' }
        ],
        feedback: 'Inundated the radio station with calls is the formal, vivid phrase for a flood-like quantity of calls overwhelming a station. Swamped with is informal and similar but less formal. Overwhelmed with is more emotional. Brimmed with is for containers nearly overflowing, not phone calls.'
      },
      {
        id: 'brimmed_with_q1',
        sentence: 'Her eyes _____ with tears when she heard that he was alive.',
        correct: 'brimmed',
        options: [
          { verb: 'overwhelmed', hint: 'total overcome — eyes don\'t get overwhelmed' },
          { verb: 'filled', hint: 'standard bharna — correct but less vivid' },
          { verb: 'brimmed', hint: 'aankhon mein aansu aana — classic phrase' },
          { verb: 'swamped', hint: 'work/demands — wrong for tears/eyes' }
        ],
        feedback: 'Brimmed with tears is the classic literary phrase for eyes filling with tears right at the edge of overflowing — exactly the image of emotional eyes glistening. Filled with tears is also correct but less vivid. Overwhelmed with tears doesn\'t naturally collocate with eyes. Swamped with is for work and demands, completely wrong for tears.'
      },
      {
        id: 'teeming_with_q1',
        sentence: 'The mall was _____ with shoppers yesterday.',
        correct: 'teeming',
        options: [
          { verb: 'thronged', hint: 'crowds — similar, but thronged is more static/literary' },
          { verb: 'crowded', hint: 'everyday fullness — correct but less vivid' },
          { verb: 'teeming', hint: 'active moving people — busy mall exactly' },
          { verb: 'congested', hint: 'blocked movement — malls don\'t have traffic' }
        ],
        feedback: 'Teeming with shoppers is the perfect word for a busy mall — it captures the active, moving, energetic quality of lots of people going about their activity. Thronged with is similar but more static/dramatic, better for streets or events. Crowded with is correct but bland. Congested with implies blocked traffic movement, wrong for a mall.'
      }
    ]
  },

  'TO_Similarity': {
    intro: 'Ye words "samanta" ya "milta-julta hona" dikhate hain — sab TO ke saath chalte hain. Equal, similar, identical, akin — sab ka matlab hai kisi cheez jaisa hona, par intensity aur formality alag hai.',
    words: [
      {
        word: 'equivalent',
        preposition: 'to',
        def_en: 'Equal in value, amount, meaning or effect.',
        def_hi: 'Maatra, arth ya prabhav mein barabar hona ।',
        example: 'One mile is equivalent to about 1.6 kilometers.',
        note: 'Equivalent to is for measurable, factual equality — numbers, values, conversions. Equal to is more mathematical. Similar to is approximate likeness, not exact equality.'
      },
      {
        word: 'equal',
        preposition: 'to',
        def_en: 'The same in size, quantity, value or degree.',
        def_hi: 'Maatra, maap ya mahatva mein bilkul barabar hona ।',
        example: 'She received a bonus of 12000 Rs which is equal to 40% of her salary.',
        note: 'Equal to is mathematical/precise. Equivalent to is functional equality (not identical but same value). Similar to is just resemblance, not equality.'
      },
      {
        word: 'akin',
        preposition: 'to',
        def_en: 'Similar in character or nature to something else.',
        def_hi: 'Kisi cheez se maati mein ya swabhav mein milta-julta hona ।',
        example: 'For Shruti the death of her beloved dog was akin to the death of a dear relative.',
        note: 'Akin to is used for emotional or abstract resemblance — comparing experiences or feelings. Similar to is factual. Tantamount to is the same-as (for actions implying something negative).'
      },
      {
        word: 'similar',
        preposition: 'to',
        def_en: 'Resembling something else in many ways but not identical.',
        def_hi: 'Kisi cheez se bahut milta-julta, par bilkul ek jaisa nahi ।',
        example: 'I bought some new shoes which are very similar to a pair I had before.',
        note: 'Similar to is the most common and neutral comparison word. Identical to means exactly the same. Akin to is literary and used for abstract/emotional comparisons.'
      },
      {
        word: 'identical',
        preposition: 'to',
        def_en: 'Exactly the same as something else.',
        def_hi: 'Kisi cheez ke bilkul ek jaisa hona ।',
        example: 'These tests are identical to those carried out last year.',
        note: 'Identical to means exactly the same — no differences. Similar to means like but not the same. Equivalent to means same in value/function but possibly different in form.'
      },
      {
        word: 'tantamount',
        preposition: 'to',
        def_en: 'Equivalent to something in effect or meaning, usually something negative.',
        def_hi: 'Kisi cheez ke barabar hona asar mein, aksar nakaratmak sandarbh mein ।',
        example: 'Her refusal to answer was tantamount to an admission of guilt.',
        note: 'Tantamount to is almost always used for negative equivalences — "tantamount to admitting," "tantamount to lying." Equivalent to is neutral. Akin to is emotional/abstract similarity, not equivalence.'
      },
      {
        word: 'homologous',
        preposition: 'to',
        def_en: 'Having the same structure or function due to common origin.',
        def_hi: 'Ek hi mul se aane ke kaaran samaan sanrachna ya karya hona ।',
        example: 'Because of advances in medical technology, Mohan\'s artificial leg is almost homologous to his natural limb.',
        note: 'Homologous is scientific/formal — used in biology, medicine, law. Similar to and akin to are for everyday comparisons. Homologous implies structural correspondence, not just resemblance.'
      },
      {
        word: 'analogous',
        preposition: 'to',
        def_en: 'Comparable in certain respects, though not identical.',
        def_hi: 'Kuch maayno mein tulniya, par bilkul ek jaisa nahi ।',
        example: 'Since my teacher is analogous to my mother, I have accidentally called her "mom."',
        note: 'Analogous to is used for drawing comparisons in reasoning — one thing functions like another in some way. Similar to is about looks. Homologous is about biological/structural correspondence.'
      }
    ],
    questions: [
      {
        id: 'equivalent_to_q1',
        sentence: 'One mile is _____ to about 1.6 kilometers.',
        correct: 'equivalent',
        options: [
          { verb: 'equal', hint: 'mathematical = sign — exact same thing' },
          { verb: 'equivalent', hint: 'conversion/functional equality — different units' },
          { verb: 'similar', hint: 'resemblance — mile aur km sirf milte-julte nahi, barabar hain' },
          { verb: 'identical', hint: 'exactly the same — mile IS identical to 1.6 km in fact' }
        ],
        feedback: 'Equivalent to is perfect for unit conversions — it shows that two different things (miles and kilometers) have the same value in a specific context. Equal to is also close but implies exact mathematical equality, and since 1 mile = 1.60934km, "about 1.6" makes equivalent more appropriate. Similar to just means resemblance, not equality. Identical to means exactly the same, which is too strong for an approximate conversion.'
      },
      {
        id: 'equal_to_q1',
        sentence: 'She received a bonus of 12000 Rs which is _____ to 40% of her salary.',
        correct: 'equal',
        options: [
          { verb: 'equivalent', hint: 'functional equality — both work but equal is more mathematical' },
          { verb: 'similar', hint: 'resemblance — bonus is not "similar to 40%", it IS 40%' },
          { verb: 'equal', hint: 'mathematical exact — Rs amount = 40% exactly' },
          { verb: 'tantamount', hint: 'negative equivalence — bonuses are not negative' }
        ],
        feedback: 'Equal to is the mathematical, precise word — the bonus is exactly 40% of her salary, a factual numerical equality. Equivalent to is also possible here and very close, but equal to is more direct for exact numbers. Similar to implies approximation, which contradicts the specific 40% figure. Tantamount to is used for negative equivalences only.'
      },
      {
        id: 'akin_to_q1',
        sentence: 'For Shruti the death of her beloved dog was _____ to the death of a dear relative.',
        correct: 'akin',
        options: [
          { verb: 'similar', hint: 'factual resemblance — death is not factually similar' },
          { verb: 'equivalent', hint: 'measurable equality — grief can\'t be measured' },
          { verb: 'akin', hint: 'emotional/abstract sameness — feelings compared' },
          { verb: 'identical', hint: 'exactly the same — death of dog ≠ death of person' }
        ],
        feedback: 'Akin to is the literary, emotional word for comparing abstract experiences — Shruti\'s grief for her dog felt like grief for a relative. Similar to would be too factual and cold. Equivalent to suggests measurable equality, which doesn\'t apply to grief. Identical to means exactly the same, which is clearly untrue and insensitive.'
      },
      {
        id: 'similar_to_q1',
        sentence: 'I bought some new shoes which are very _____ to a pair I had before.',
        correct: 'similar',
        options: [
          { verb: 'identical', hint: 'exactly the same — shoes are similar, not exactly same' },
          { verb: 'akin', hint: 'literary emotional comparison — too heavy for shoes' },
          { verb: 'similar', hint: 'milte-julte — casual everyday comparison' },
          { verb: 'equivalent', hint: 'functional equality — shoes don\'t have equivalent values' }
        ],
        feedback: 'Similar to is the natural everyday word for physical resemblance — the shoes look like, but aren\'t identical to, a previous pair. Identical to would mean they are exactly the same, which the sentence denies by saying "similar." Akin to is a literary word for emotional or abstract comparisons, too heavy for shoes. Equivalent to is for functional or value equality, not physical appearance.'
      },
      {
        id: 'identical_to_q1',
        sentence: 'These tests are _____ to those carried out last year.',
        correct: 'identical',
        options: [
          { verb: 'similar', hint: 'milte-julte — but identical means exactly same' },
          { verb: 'equivalent', hint: 'functional equality — close but identical is exact copy' },
          { verb: 'identical', hint: 'bilkul ek jaisa — exact same tests' },
          { verb: 'analogous', hint: 'comparable in some ways — too vague for exact tests' }
        ],
        feedback: 'Identical to is the correct word when tests are exactly the same as previous ones — not similar, not equivalent, but the exact same. Similar to would mean they just resemble last year\'s tests. Equivalent to would mean they are of the same standard but different. Analogous to means they function in a comparable way, which is too vague for copied tests.'
      },
      {
        id: 'tantamount_to_q1',
        sentence: 'Her refusal to answer was _____ to an admission of guilt.',
        correct: 'tantamount',
        options: [
          { verb: 'equivalent', hint: 'neutral equality — tantamount is always negative' },
          { verb: 'akin', hint: 'emotional resemblance — not for legal implications' },
          { verb: 'tantamount', hint: 'negative equivalence — silence = guilt mein' },
          { verb: 'identical', hint: 'exactly the same — refusal isn\'t literally a confession' }
        ],
        feedback: 'Tantamount to is exactly right here — it means "effectively the same as" in a negative or serious context. Refusing to answer is being treated as an implied admission. Equivalent to is neutral — it doesn\'t carry the "effectively amounting to something serious" meaning. Akin to is emotional/abstract resemblance, not legal equivalence. Identical to means literally the same, but a refusal is not literally a confession.'
      }
    ]
  },

  'TO_Loyalty': {
    intro: 'Ye group "wafadaari" aur "commitment" ke baare mein hai — sab TO ke saath aate hain. True, loyal, faithful, devoted — sab mein ek "tike rehna" ki quality hai. Jab bhi loyalty ya dedication ki baat ho, yahi words yaad karo.',
    words: [
      {
        word: 'true',
        preposition: 'to',
        def_en: 'Loyal and faithful to a person, belief or principle.',
        def_hi: 'Kisi insaan, vishwaas ya siddhant ke prati sachcha aur wafadar rehna ।',
        example: 'She has vowed to remain true to the president whatever happens.',
        note: 'True to suggests unwavering personal loyalty to a person or ideal. Faithful to is similar but specifically implies not breaking a promise or relationship. Loyal to is the most everyday word.'
      },
      {
        word: 'obedient',
        preposition: 'to',
        def_en: 'Willingly following orders or instructions from someone in authority.',
        def_hi: 'Pradhikari ke aadesh ya nirdesh maan-na ।',
        example: 'Citizens during ancient history were required to be obedient to the king.',
        note: 'Obedient to implies compliance with authority — often has a submissive quality. Loyal to is voluntary devotion. Faithful to is more about trust and promises.'
      },
      {
        word: 'committed',
        preposition: 'to',
        def_en: 'Dedicated to a cause, belief, or course of action.',
        def_hi: 'Kisi maqsad, vishwaas ya kaam ke prati poori tarah samarpat hona ।',
        example: 'We are committed to this noble cause.',
        note: 'Committed to is about active dedication — you are working towards something. Devoted to is more personal and emotional. Dedicated to can be both personal and professional.'
      },
      {
        word: 'devoted',
        preposition: 'to',
        def_en: 'Very loving and loyal, or totally focused on an activity.',
        def_hi: 'Kisi se bahut pyaar karna ya kisi kaam mein poori tarah laga rehna ।',
        example: 'The scientist has devoted himself to his research, and rarely comes out of his lab.',
        note: 'Devoted to is the most personal and emotional — love, passion, total absorption. Committed to is more purposeful/professional. Dedicated to is in between.'
      },
      {
        word: 'faithful',
        preposition: 'to',
        def_en: 'Loyal and trustworthy; not breaking promises, especially in relationships.',
        def_hi: 'Wafadar rehna, khaaskar rishton mein waade na todna ।',
        example: 'He was faithful to his wife throughout their 30-year marriage.',
        note: 'Faithful to specifically implies not betraying — especially in romantic relationships. True to is broader. Loyal to can be to any person or cause, not necessarily romantic.'
      },
      {
        word: 'loyal',
        preposition: 'to',
        def_en: 'Giving constant support and allegiance to someone or something.',
        def_hi: 'Kisi ke prati lagatar saath dena aur wafadaari dikhana ।',
        example: 'Training programmes encourage workers to remain loyal to their employers.',
        note: 'Loyal to is the most versatile loyalty word — to employers, countries, friends, teams. Faithful to is more about personal/romantic trust. Obedient to is about following orders, not emotional allegiance.'
      },
      {
        word: 'dutiful',
        preposition: 'to',
        def_en: 'Conscientiously performing one\'s duties and responsibilities.',
        def_hi: 'Apne faarz aur zimmedaarian imandaari se nibhana ।',
        example: 'She was chiding her son for not being dutiful to her.',
        note: 'Dutiful to is about fulfilling duties and obligations — less about emotion, more about responsibility. Devoted to is emotional. Obedient to is about orders. Dutiful to is about doing your duty.'
      },
      {
        word: 'dedicated',
        preposition: 'to',
        def_en: 'Working hard for a cause, purpose or person; wholeheartedly committed.',
        def_hi: 'Kisi maqsad ya insaan ke liye poori mehnat aur dil se kaam karna ।',
        example: 'The Green Party is dedicated to protecting the environment.',
        note: 'Dedicated to implies purposeful, sustained effort towards a goal — often used for causes, organizations, or work. Committed to is similar. Devoted to is more emotional/personal. Dedicated is often used with organizations and groups.'
      }
    ],
    questions: [
      {
        id: 'true_to_q1',
        sentence: 'She has vowed to remain _____ to the president whatever happens.',
        correct: 'true',
        options: [
          { verb: 'loyal', hint: 'everyday loyalty — similar but true has deeper personal oath quality' },
          { verb: 'obedient', hint: 'following orders — not a vow of love/devotion' },
          { verb: 'true', hint: 'personal oath + unwavering — vow + whatever happens' },
          { verb: 'faithful', hint: 'trust + no betrayal — close, but true to is more oath-like' }
        ],
        feedback: 'True to fits here because "vowed to remain true" captures a deeply personal oath of unwavering loyalty — beyond just obeying. Loyal to is similar but more everyday. Obedient to implies following commands, not a personal vow. Faithful to is very close, but true to has a more oath-like, poetic quality that matches "vowed" and "whatever happens."'
      },
      {
        id: 'obedient_to_q1',
        sentence: 'Citizens during ancient history were required to be _____ to the king.',
        correct: 'obedient',
        options: [
          { verb: 'loyal', hint: 'voluntary allegiance — obedient is required/submissive' },
          { verb: 'devoted', hint: 'emotional love — required by law is not devotion' },
          { verb: 'obedient', hint: 'authority + required = obedient' },
          { verb: 'faithful', hint: 'trust/no betrayal — not what kings required' }
        ],
        feedback: 'Obedient to is the right word here — citizens were required (forced/expected) to follow the king\'s commands. The word "required" makes this clearly about obedience to authority, not voluntary loyalty. Loyal to implies voluntary emotional allegiance. Devoted to is emotional love and passion. Faithful to is about trust and not betraying.'
      },
      {
        id: 'committed_to_q1',
        sentence: 'We are _____ to this noble cause.',
        correct: 'committed',
        options: [
          { verb: 'devoted', hint: 'emotional personal — cause mein collective commitment' },
          { verb: 'dedicated', hint: 'sustained effort — very close but committed is more about stance' },
          { verb: 'committed', hint: 'purposeful dedication — cause ke saath khade hain' },
          { verb: 'obedient', hint: 'following orders — causes don\'t give orders' }
        ],
        feedback: 'Committed to this noble cause is the natural phrase for a group declaring their dedication to a purpose — it suggests a firm stance and active engagement. Devoted to is more emotional and personal. Dedicated to is also very close and nearly synonymous — but committed to is more commonly used for causes and missions (NGOs, political movements). Obedient to implies following someone\'s orders, not choosing a cause.'
      },
      {
        id: 'devoted_to_q1',
        sentence: 'The scientist has _____ himself to his research, and rarely comes out of his lab.',
        correct: 'devoted',
        options: [
          { verb: 'committed', hint: 'purposeful — close, but devoted = total absorption' },
          { verb: 'dedicated', hint: 'sustained effort — also close, but devoted = personal passion' },
          { verb: 'devoted', hint: 'total absorption + personal passion — scientist + lab' },
          { verb: 'loyal', hint: 'allegiance — you are loyal to people, not to research' }
        ],
        feedback: 'Devoted himself to his research is the phrase for total personal absorption — the "rarely comes out of his lab" shows he is consumed by it emotionally and personally, which is exactly what devoted implies. Committed to is purposeful but less about total absorption. Dedicated to is close, but devoted carries more passion and total surrender to the activity. Loyal to is for people and causes, not research topics.'
      },
      {
        id: 'faithful_to_q1',
        sentence: 'He was _____ to his wife throughout their 30-year marriage.',
        correct: 'faithful',
        options: [
          { verb: 'true', hint: 'personal oath — close, but faithful specifically = not betraying' },
          { verb: 'devoted', hint: 'emotional love — possible, but faithful = no betrayal' },
          { verb: 'faithful', hint: 'marriage + no betrayal = faithful is the exact word' },
          { verb: 'loyal', hint: 'general allegiance — faithful is specifically for relationships/trust' }
        ],
        feedback: 'Faithful to is the precise word for marital fidelity — not cheating, not betraying over 30 years. True to is close but broader. Devoted to suggests emotional love but doesn\'t specifically mean faithful (one can be devoted but still unfaithful in some interpretations). Loyal to is the general allegiance word — faithful to is specifically for trust and fidelity in personal relationships.'
      },
      {
        id: 'loyal_to_q1',
        sentence: 'Training programmes encourage workers to remain _____ to their employers.',
        correct: 'loyal',
        options: [
          { verb: 'faithful', hint: 'romantic/personal trust — employers are not spouses' },
          { verb: 'obedient', hint: 'following orders — training programs aim for loyalty, not submission' },
          { verb: 'loyal', hint: 'employer + allegiance = loyal is the workplace word' },
          { verb: 'devoted', hint: 'total absorption — workers shouldn\'t be slaves!' }
        ],
        feedback: 'Loyal to employers is the standard workplace phrase — it means giving consistent support and not leaving or working against your employer. Faithful to is for romantic/personal relationships. Obedient to implies following every order with no agency — modern training programmes don\'t preach submission. Devoted to implies total personal absorption, which is too extreme for a workplace relationship.'
      },
      {
        id: 'dedicated_to_q1',
        sentence: 'The Green Party is _____ to protecting the environment.',
        correct: 'dedicated',
        options: [
          { verb: 'committed', hint: 'purposeful stance — very close, almost the same' },
          { verb: 'devoted', hint: 'emotional — parties have missions, not emotions' },
          { verb: 'dedicated', hint: 'organization + cause = dedicated is the classic phrase' },
          { verb: 'true', hint: 'personal oath — organizations don\'t take personal oaths' }
        ],
        feedback: 'Dedicated to protecting the environment is the standard phrase for an organization\'s core mission — dedicated is commonly used with parties, companies, and institutions for their stated purpose. Committed to is also very close and nearly correct, but dedicated is more often used with organizations and their founding mission. Devoted to is emotional/personal. True to is for personal oaths.'
      }
    ]
  },

  'TO_Susceptibility': {
    intro: 'Ye words "kamzori" ya "asardaar hone" ke baare mein hain — koi cheez ya koi insaan kisi ke asar ke prati kitna vulnerable hai. Sab TO ke saath aate hain. Prone, susceptible, vulnerable, liable — sab mein ek "risk mein hona" ki feeling hai.',
    words: [
      {
        word: 'prone',
        preposition: 'to',
        def_en: 'Likely to suffer from or do something undesirable.',
        def_hi: 'Kisi buri cheez ke hone ki zyada sambhavna hona ।',
        example: 'Fast bowlers are prone to injuries.',
        note: 'Prone to is used for habitual or natural tendencies towards something negative. Susceptible to implies a physical/biological weakness. Liable to has a legal overtone of obligation or risk.'
      },
      {
        word: 'susceptible',
        preposition: 'to',
        def_en: 'Likely to be affected by a disease, influence or condition.',
        def_hi: 'Kisi bimari, prabhav ya avastha se prabhavit hone ki sambhavna ।',
        example: 'Owing to his high obesity level, He is susceptible to many diseases.',
        note: 'Susceptible to is often used for medical and biological vulnerability. Prone to is for behaviours and tendencies. Vulnerable to is more about emotional or situational weakness.'
      },
      {
        word: 'vulnerable',
        preposition: 'to',
        def_en: 'Exposed to the possibility of being attacked or harmed.',
        def_hi: 'Hamleh ya nuksan ki sambhavna ke prati anrakshit hona ।',
        example: 'People with low immunity are vulnerable to COVID-19.',
        note: 'Vulnerable to implies a state of being open/exposed to attack or harm — often used for emotional, military or health contexts. Susceptible to is more biological. Prone to is about tendencies.'
      },
      {
        word: 'liable',
        preposition: 'to',
        def_en: 'Legally responsible for something; or likely to experience something.',
        def_hi: 'Kanuni jimmedaari hona ya kuch hone ki zyada sambhavna hona ।',
        example: 'You are more liable to injuries if you exercise irregularly.',
        note: 'Liable to has two uses: legal responsibility (liable for damages) and likelihood of negative consequence. Prone to is for habitual tendencies. Susceptible to is biological. Liable to is often used for consequences and risks.'
      },
      {
        word: 'sensitive',
        preposition: 'to',
        def_en: 'Quick to react or be affected by something.',
        def_hi: 'Kisi cheez se jaldi prabhavit ya react karna ।',
        example: 'Her reply shows that she is very sensitive to criticism.',
        note: 'Sensitive to can be positive (sensitive to others\' feelings) or negative (oversensitive to criticism). Susceptible to is more about physical/biological weakness. Prone to is about habitual negative tendencies.'
      },
      {
        word: 'allergic',
        preposition: 'to',
        def_en: 'Having an allergy to a substance; or strongly disliking something (informal).',
        def_hi: 'Kisi cheez se allergy hona ya kisi cheez se sakht nafrat karna ।',
        example: 'Radhika is allergic to most animals, so she isn\'t able to breathe well around dogs or cats.',
        note: 'Allergic to is primarily medical — physical immune reaction. Informally it can mean strong aversion. Susceptible to is general vulnerability. Sensitive to is reactiveness without implying a medical condition.'
      },
      {
        word: 'immune',
        preposition: 'to',
        def_en: 'Protected against a disease or unaffected by something.',
        def_hi: 'Kisi bimari se surakshit hona ya kisi cheez se prabhavit na hona ।',
        example: 'Most people who\'ve had chickenpox once are immune to it for the rest of their lives.',
        note: 'Immune to is the opposite of susceptible/vulnerable — it means protection or resistance. Allergic to is a harmful reaction. Sensitive to is quick to react. Immune to means no reaction at all.'
      }
    ],
    questions: [
      {
        id: 'prone_to_q1',
        sentence: 'Fast bowlers are _____ to injuries.',
        correct: 'prone',
        options: [
          { verb: 'susceptible', hint: 'biological weakness — medical context' },
          { verb: 'vulnerable', hint: 'exposed to harm — emotional/situational' },
          { verb: 'prone', hint: 'habitual tendency — sports injuries ka natural word' },
          { verb: 'liable', hint: 'legal responsibility — not for sports injuries' }
        ],
        feedback: 'Prone to injuries is the natural sports/physical tendency word — fast bowlers habitually and naturally get injured due to the nature of their work. Susceptible to implies a biological/medical weakness. Vulnerable to implies being emotionally or situationally exposed. Liable to has a legal tone — legally responsible or at risk of consequences, not for physical sporting tendencies.'
      },
      {
        id: 'susceptible_to_q1',
        sentence: 'Owing to his high obesity level, He is _____ to many diseases.',
        correct: 'susceptible',
        options: [
          { verb: 'prone', hint: 'habitual tendency — obesity makes you biologically weak, not just tend to' },
          { verb: 'vulnerable', hint: 'exposed to harm — close, but susceptible is more medical' },
          { verb: 'susceptible', hint: 'biological weakness + obesity = medical context' },
          { verb: 'liable', hint: 'legal/consequence risk — not for medical conditions' }
        ],
        feedback: 'Susceptible to diseases is the precise medical word for biological vulnerability — obesity weakens the body\'s defences against disease, which is exactly what susceptible means. Prone to is for behavioural tendencies, not biological weakness from a condition. Vulnerable to is close but more about situational exposure. Liable to has a legal connotation, wrong for health.'
      },
      {
        id: 'vulnerable_to_q1',
        sentence: 'People with low immunity are _____ to COVID-19.',
        correct: 'vulnerable',
        options: [
          { verb: 'susceptible', hint: 'biological weakness — also correct, very close' },
          { verb: 'liable', hint: 'legal/consequence — not for viruses' },
          { verb: 'vulnerable', hint: 'exposed + low defence = vulnerable is the news/health word' },
          { verb: 'allergic', hint: 'immune reaction — opposite: allergic overreacts, vulnerable underreacts' }
        ],
        feedback: 'Vulnerable to COVID-19 became the standard public health phrase during the pandemic — it means exposed and without sufficient protection. Susceptible to is also medically correct and nearly synonymous, but vulnerable is the term established in COVID public health messaging. Liable to has legal overtones. Allergic to means having an overactive immune response — the opposite problem.'
      },
      {
        id: 'liable_to_q1',
        sentence: 'You are more _____ to injuries if you exercise irregularly.',
        correct: 'liable',
        options: [
          { verb: 'prone', hint: 'habitual tendency — liable has consequence/risk angle' },
          { verb: 'susceptible', hint: 'biological weakness — exercise pattern is behavioural' },
          { verb: 'liable', hint: 'risk + consequence — irregular exercise = higher risk' },
          { verb: 'vulnerable', hint: 'situational exposure — close but liable is stronger here' }
        ],
        feedback: 'Liable to injuries here means at a higher risk of consequence — the "more" comparative makes this about increased risk due to a behaviour (irregular exercise). Prone to is also close but prone is for habitual tendencies, not risk consequences. Susceptible to is for biological/medical weakness, not behavioural choices. Vulnerable to is possible but liable is stronger for the "more... if you do X" construction.'
      },
      {
        id: 'sensitive_to_q1',
        sentence: 'Her reply shows that she is very _____ to criticism.',
        correct: 'sensitive',
        options: [
          { verb: 'prone', hint: 'tendency — prone to criticism means tends to criticize, not be hurt by it' },
          { verb: 'vulnerable', hint: 'exposed to harm — possible, but sensitive is more psychological' },
          { verb: 'sensitive', hint: 'emotional reactiveness — criticism se jaldi prabhavit hona' },
          { verb: 'allergic', hint: 'strong reaction — informal use possible but sensitive is standard' }
        ],
        feedback: 'Sensitive to criticism is the standard psychological/emotional phrase — she reacts quickly and strongly to being criticised. Prone to criticism would mean she tends to criticise others, which is the opposite. Vulnerable to criticism is possible but vulnerable implies she\'s being attacked; sensitive is more about emotional reactiveness. Allergic to criticism is informal slang for strong aversion — possible but sensitive is the standard exam word.'
      },
      {
        id: 'immune_to_q1',
        sentence: 'Most people who\'ve had chickenpox once are _____ to it for the rest of their lives.',
        correct: 'immune',
        options: [
          { verb: 'resistant', hint: 'some protection — immune means complete protection' },
          { verb: 'allergic', hint: 'harmful reaction — immune is the OPPOSITE of allergic' },
          { verb: 'immune', hint: 'lifetime protection after chickenpox — exact medical fact' },
          { verb: 'susceptible', hint: 'biologically weak — complete opposite of immune' }
        ],
        feedback: 'Immune to chickenpox is the precise medical term for lifelong protection after having the disease — the body builds complete resistance. Resistant to implies some protection but not complete. Allergic to would mean the body overreacts harmfully — opposite of immunity. Susceptible to means the body is vulnerable, which is completely the opposite of what the sentence says.'
      }
    ]
  },

  'AT_Surprise': {
    intro: 'Ye sab words "hairaani" ya "aashcharya" ke synonyms hain — sab AT ke saath aate hain. Amazed, astonished, astounded, appalled — sab mein surprise hai, par intensity aur connotation bilkul alag hain. Yahi difference exam mein kaam aata hai!',
    words: [
      {
        word: 'amazed',
        preposition: 'at',
        def_en: 'Very surprised or impressed by something.',
        def_hi: 'Kisi cheez se bahut hairan ya prabhavit hona ।',
        example: 'She was amazed at how calmly the man behaved after the accident.',
        note: 'Amazed at is positive or neutral surprise — wonder and admiration. Astounded is stronger. Appalled is negative shock. Alarmed is about fear/concern.'
      },
      {
        word: 'astonished',
        preposition: 'at',
        def_en: 'Greatly surprised by something unexpected.',
        def_hi: 'Kisi anpekshit cheez se bahut zyada hairan hona ।',
        example: 'The doctors were astonished at the speed of her recovery.',
        note: 'Astonished at is stronger than amazed — it implies the surprise is beyond expectation. Astounded is even stronger. Both are neutral (not necessarily negative).'
      },
      {
        word: 'astounded',
        preposition: 'at',
        def_en: 'Shocked and amazed in a very strong way.',
        def_hi: 'Bahut hi zyada hairan aur achambhit hona ।',
        example: 'She looked astounded at the news of her topping the exam.',
        note: 'Astounded is the strongest of the three surprise words — amazed < astonished < astounded. All are neutral to positive. Appalled and aghast are the negative versions.'
      },
      {
        word: 'aghast',
        preposition: 'at',
        def_en: 'Struck with horror or shock, especially at something bad.',
        def_hi: 'Kisi buri ya kharaab cheez dekhkar dar ya horror se hairan hona ।',
        example: 'Workers and union officials were aghast at the layoffs.',
        note: 'Aghast is always negative — horrified shock at something terrible. Appalled is similar but more about moral outrage. Astounded is strong positive/neutral surprise.'
      },
      {
        word: 'surprised',
        preposition: 'at',
        def_en: 'Feeling mild wonder or astonishment.',
        def_hi: 'Halki hairani ya achambhe ki feeling ।',
        example: 'We were very surprised at her strange behaviour.',
        note: 'Surprised at is the mildest and most everyday word — appropriate for minor or moderate surprises. Amazed, astonished, astounded are progressively stronger. Appalled and aghast are negative.'
      },
      {
        word: 'shocked',
        preposition: 'at',
        def_en: 'Feeling sudden and intense surprise, especially at something bad.',
        def_hi: 'Kisi buri ya anpekshit cheez se achaanak aur tez hairani ।',
        example: 'She was shocked at the language they used.',
        note: 'Shocked at implies sudden, unpleasant surprise. Appalled at implies moral outrage too. Alarmed at implies fear more than moral shock. Surprised at is milder.'
      },
      {
        word: 'appalled',
        preposition: 'at',
        def_en: 'Filled with horror or disgust, especially at something morally wrong.',
        def_hi: 'Kisi naaitik roop se galat cheez se bhaya ya ghrina se bhar jaana ।',
        example: 'I am absolutely appalled at the state of these government hospitals.',
        note: 'Appalled at is the strongest negative shock — it carries moral outrage and disgust. Aghast is horror/terror. Shocked is unpleasant surprise without the moral dimension. Alarmed is fear-based.'
      },
      {
        word: 'alarmed',
        preposition: 'at',
        def_en: 'Feeling sudden fear or anxiety about a potential danger.',
        def_hi: 'Kisi sambhavit khatre ke baare mein achaanak darr ya chinta feel karna ।',
        example: 'She was a bit alarmed at the idea of travelling alone.',
        note: 'Alarmed at is about fear of danger, not moral outrage or wonder. Appalled at is moral disgust. Aghast at is horror. Shocked at is unpleasant surprise. Alarmed focuses on anxiety and danger.'
      }
    ],
    questions: [
      {
        id: 'amazed_at_q1',
        sentence: 'She was _____ at how calmly the man behaved after the accident.',
        correct: 'amazed',
        options: [
          { verb: 'alarmed', hint: 'fear of danger — calm behavior isn\'t dangerous' },
          { verb: 'amazed', hint: 'wonder/admiration — calmness is impressive, not horrifying' },
          { verb: 'appalled', hint: 'moral outrage — being calm is not morally wrong' },
          { verb: 'aghast', hint: 'horror at something bad — calmness is admirable' }
        ],
        feedback: 'Amazed at is perfect — being amazed at someone\'s calm behaviour is positive or neutral wonder/admiration. Alarmed implies fear of danger, but a calm person post-accident is reassuring, not alarming. Appalled implies moral disgust — there is nothing morally wrong about being calm. Aghast is horror at something terrible — calmness after an accident is actually admirable.'
      },
      {
        id: 'astonished_at_q1',
        sentence: 'The doctors were _____ at the speed of her recovery.',
        correct: 'astonished',
        options: [
          { verb: 'amazed', hint: 'wonder — also works but astonished = beyond expectation' },
          { verb: 'shocked', hint: 'unpleasant surprise — fast recovery is not bad news' },
          { verb: 'astonished', hint: 'beyond expectation + medical context = astonished' },
          { verb: 'appalled', hint: 'moral outrage — fast recovery is not morally wrong' }
        ],
        feedback: 'Astonished at is perfect — doctors use astonished when recovery exceeds all medical expectations — a strong positive surprise. Amazed is also possible but astonished implies it was truly beyond expectation, fitting for medical professionals. Shocked implies unpleasant surprise — fast recovery is good news. Appalled is moral disgust, completely wrong for a good recovery.'
      },
      {
        id: 'astounded_at_q1',
        sentence: 'She looked _____ at the news of her topping the exam.',
        correct: 'astounded',
        options: [
          { verb: 'astonished', hint: 'strong surprise — also close, but astounded is maximum surprise' },
          { verb: 'aghast', hint: 'horror — topping exam is not horrifying!' },
          { verb: 'astounded', hint: 'maximum surprise — exam mein top karna = jaw-drop' },
          { verb: 'alarmed', hint: 'fear/anxiety — good news doesn\'t cause alarm' }
        ],
        feedback: 'Astounded is the superlative of surprise — she was so completely overwhelmed by the unexpected news that she could barely believe it. Astonished is also close but astounded is a degree stronger. Aghast implies horror at something terrible — topping an exam is wonderful news. Alarmed is fear of danger — good news does not cause alarm.'
      },
      {
        id: 'aghast_at_q1',
        sentence: 'Workers and union officials were _____ at the layoffs.',
        correct: 'aghast',
        options: [
          { verb: 'amazed', hint: 'positive wonder — layoffs are not wonderful' },
          { verb: 'appalled', hint: 'moral outrage — similar but aghast = horror/shock' },
          { verb: 'aghast', hint: 'horror at bad news — layoffs = jobs gaye' },
          { verb: 'astonished', hint: 'neutral surprise — layoffs need stronger negative reaction' }
        ],
        feedback: 'Aghast at the layoffs captures the horror and shock of workers losing their jobs — it implies they were struck dumb with fear and dismay. Amazed is positive/neutral, wrong for bad news. Appalled is also close — it implies moral outrage — but aghast is more about the shock and horror of the event itself. Astonished is too neutral for devastating job losses.'
      },
      {
        id: 'shocked_at_q1',
        sentence: 'She was _____ at the language they used.',
        correct: 'shocked',
        options: [
          { verb: 'surprised', hint: 'mild wonder — language was clearly very bad, not just surprising' },
          { verb: 'alarmed', hint: 'fear/danger — language is offensive, not dangerous' },
          { verb: 'shocked', hint: 'sudden unpleasant surprise — bad language = shocked' },
          { verb: 'astounded', hint: 'maximum wonder — too strong and neutral for offensive language' }
        ],
        feedback: 'Shocked at the language they used is the natural phrase for being hit by unexpected offensive or inappropriate language — it captures sudden, unpleasant surprise. Surprised is too mild for offensive language. Alarmed implies fear of physical danger — language offends, doesn\'t endanger. Astounded is about extreme wonder/amazement — not the right register for moral/social offence.'
      },
      {
        id: 'appalled_at_q1',
        sentence: 'I am absolutely _____ at the state of these government hospitals.',
        correct: 'appalled',
        options: [
          { verb: 'shocked', hint: 'unpleasant surprise — appalled adds moral outrage' },
          { verb: 'aghast', hint: 'horror — close but aghast is fear, appalled is outrage' },
          { verb: 'appalled', hint: 'moral outrage + disgust — hospitals ki halat = social wrong' },
          { verb: 'alarmed', hint: 'fear of danger — outrage, not fear, about hospitals' }
        ],
        feedback: 'Appalled at is the strongest word for moral outrage and disgust — being appalled at hospital conditions means you find it morally unacceptable and outrageous, not just surprising. Shocked at is weaker and doesn\'t carry the moral dimension. Aghast is horror/terror — close but aghast focuses on personal shock, appalled on moral indignation. Alarmed implies fear of personal danger, not civic outrage.'
      },
      {
        id: 'alarmed_at_q1',
        sentence: 'She was a bit _____ at the idea of travelling alone.',
        correct: 'alarmed',
        options: [
          { verb: 'appalled', hint: 'moral outrage — solo travel is not morally wrong' },
          { verb: 'shocked', hint: 'sudden unpleasant surprise — travelling alone is not shocking' },
          { verb: 'alarmed', hint: 'anxiety + danger fear — "a bit" + safety concern = alarmed' },
          { verb: 'aghast', hint: 'horror — solo travel is not horrifying' }
        ],
        feedback: 'Alarmed at the idea of travelling alone perfectly captures low-level anxiety and fear about safety — "a bit alarmed" is exactly how you describe mild concern about potential danger. Appalled implies moral outrage — travelling alone is not a moral issue. Shocked implies sudden unpleasant news — the idea of travel is not shocking. Aghast is strong horror at something terrible — mild travel concern is not horror.'
      }
    ]
  },

  'AT_Laughter': {
    intro: 'Ye sab words "hasna" ya "mazak udaana" ke baare mein hain — sab AT ke saath aate hain. Chuckle, giggle, guffaw, sneer — in mein se har ek ki quality, intensity aur tone bilkul alag hai. Smile se scoff tak ka pura spectrum yahan hai!',
    words: [
      {
        word: 'chuckle',
        preposition: 'at',
        def_en: 'To laugh quietly and softly to oneself.',
        def_hi: 'Dheerey-dheerey apne aap mein muskurana ya hansna ।',
        example: 'He chuckled at the thought of the two of them stuck in the snow.',
        note: 'Chuckle is quiet, internal laughter — amused with yourself. Giggle is lighter and higher-pitched. Guffaw is loud and uncontrolled. Chuckle is the most dignified laugh.'
      },
      {
        word: 'giggle',
        preposition: 'at',
        def_en: 'To laugh in a light, silly, or uncontrolled way.',
        def_hi: 'Halki aur machli jaisi hansee hasna, khaaskar ladkiyan ।',
        example: 'All the girls giggled at jokes that the teacher cracked.',
        note: 'Giggle is light, silly, uncontrolled — often associated with children or girls. Chuckle is quieter and more dignified. Cackle is harsh and witch-like. Snigger is a suppressed, sly giggle.'
      },
      {
        word: 'guffaw',
        preposition: 'at',
        def_en: 'To laugh loudly and heartily.',
        def_hi: 'Zor se aur khul ke hansna ।',
        example: 'The man guffawed at her remarks.',
        note: 'Guffaw is the loudest, most uncontrolled laughter. Chuckle is the quietest. Giggle is light. Guffaw implies the person couldn\'t contain their laughter.'
      },
      {
        word: 'jeer',
        preposition: 'at',
        def_en: 'To make rude and mocking comments at someone.',
        def_hi: 'Kisi par zor se taklifdeh ya mazaakiya tippaniyaan karna ।',
        example: 'Striking workers jeered at those who crossed the picket line.',
        note: 'Jeer at is aggressive mockery — loud and public. Sneer at is more quiet disdain. Scoff at is dismissive disbelief. Jeer is the most aggressive and crowd-based.'
      },
      {
        word: 'smile',
        preposition: 'at',
        def_en: 'To form a happy or kind expression with the face.',
        def_hi: 'Khushi ya pyaar se muskurana ।',
        example: 'When he smiled at me I knew everything was all right.',
        note: 'Smile at is the mildest and most positive facial expression. Smirk at is a smile with arrogance or self-satisfaction. Grin is a bigger smile. Beam is the most joyful smile.'
      },
      {
        word: 'smirk',
        preposition: 'at',
        def_en: 'To smile in a smug, self-satisfied or sly way.',
        def_hi: 'Ghamand ya sharaarat se muskurana ।',
        example: 'I don\'t like the way he winks and smirks at me whenever he sees me.',
        note: 'Smirk at has a negative connotation — smugness or slyness. Smile at is genuine warmth. Grin at is open and happy. Beam at is joyful. Smirk is the only "negative" smile in this group.'
      },
      {
        word: 'sneer',
        preposition: 'at',
        def_en: 'To smile or speak in a contemptuous or dismissive way.',
        def_hi: 'Kisi ko tuchcha samajhkar muskurana ya bolna ।',
        example: 'She\'ll probably sneer at my new shoes because they\'re not expensive.',
        note: 'Sneer at implies contempt and looking down on someone. Scoff at is dismissive but about ideas/claims. Jeer at is loud public mockery. Sneer is quieter, more personal disdain.'
      },
      {
        word: 'scoff',
        preposition: 'at',
        def_en: 'To speak mockingly or disrespectfully, especially about ideas.',
        def_hi: 'Kisi cheez ko tuchcha ya bekaar samajhkar mazaak udaana ।',
        example: 'The critics scoffed at his paintings.',
        note: 'Scoff at is dismissive mockery of ideas, work or claims — suggesting something is not worth taking seriously. Sneer at is more personal contempt. Jeer at is loud and aggressive. Scoff is the most intellectual dismissal.'
      },
      {
        word: 'beam',
        preposition: 'at',
        def_en: 'To smile broadly and radiantly, expressing great joy.',
        def_hi: 'Khushi se chamakta hua bada sa muskurana ।',
        example: 'The child beamed at his teacher as he received the award.',
        note: 'Beam at is the most joyful and positive smile — radiating happiness. Smile at is more neutral. Grin at is big but not necessarily joyful. Smirk at is negative. Beam at is the happiest word in this group.'
      },
      {
        word: 'grin',
        preposition: 'at',
        def_en: 'To smile broadly, showing the teeth.',
        def_hi: 'Daant dikhaate hue bada sa muskurana ।',
        example: 'He grinned at me from the doorway.',
        note: 'Grin at is a wide, toothy smile — can be friendly or mischievous. Beam at is purely joyful. Smile at is more subtle. Smirk at has a negative, sly quality. Grin can be cheeky.'
      },
      {
        word: 'snicker',
        preposition: 'at',
        def_en: 'To laugh quietly and disrespectfully at something.',
        def_hi: 'Kisi ko chhupaa ke ya dheemi awaaz mein mazaak udaana ।',
        example: 'Stop snickering at that rude joke and get back to your class room.',
        note: 'Snicker at is a suppressed disrespectful laugh — quiet but mocking. Giggle is lighter and more innocent. Snigger is the British equivalent of snicker. Both are disrespectful.'
      },
      {
        word: 'snigger',
        preposition: 'at',
        def_en: 'To laugh in a half-suppressed, disrespectful way.',
        def_hi: 'Dabaai hui aur anuchit hansee hasna ।',
        example: 'They spent half the time sniggering at the clothes people were wearing.',
        note: 'Snigger at is the British version of snicker — a suppressed, disrespectful chuckle at someone else\'s expense. Giggle is lighter and more innocent. Jeer is louder and more aggressive.'
      },
      {
        word: 'laugh',
        preposition: 'at',
        def_en: 'To make sounds expressing amusement or ridicule.',
        def_hi: 'Khushi ya mazaak mein awaaz nikaalna ।',
        example: 'The children were laughing at the cartoons.',
        note: 'Laugh at is the most general word — neutral, positive, or mocking depending on context. All others in this group are more specific. "Laugh at someone" can also mean to mock them.'
      }
    ],
    questions: [
      {
        id: 'chuckle_at_q1',
        sentence: 'He _____ at the thought of the two of them stuck in the snow.',
        correct: 'chuckled',
        options: [
          { verb: 'guffawed', hint: 'loud uncontrolled — thought mein itna loud nahi hota' },
          { verb: 'chuckled', hint: 'quiet internal amusement — thought se akele smile' },
          { verb: 'jeered', hint: 'aggressive mockery — no one to mock here' },
          { verb: 'sneered', hint: 'contempt — it\'s his own funny thought, not contempt' }
        ],
        feedback: 'Chuckled at the thought is the classic phrase for quiet, internal amusement — he\'s amused by his own mental image, alone. Guffawed would mean he burst out laughing uncontrollably — too loud for a quiet private thought. Jeered is aggressive public mockery — no one is present to mock. Sneered implies contempt, but he\'s amused by a funny thought, not looking down on anyone.'
      },
      {
        id: 'giggle_at_q1',
        sentence: 'All the girls _____ at jokes that the teacher cracked.',
        correct: 'giggled',
        options: [
          { verb: 'chuckled', hint: 'quiet dignified — girls in class = more energetic' },
          { verb: 'guffawed', hint: 'too loud for a classroom' },
          { verb: 'giggled', hint: 'light silly class laughter — girls + teacher\'s jokes' },
          { verb: 'sniggered', hint: 'disrespectful suppressed — teacher\'s jokes are funny, not objects of mockery' }
        ],
        feedback: 'Giggled at jokes is the natural word for a classroom of girls laughing at teacher\'s humour — light, energetic, slightly uncontrolled. Chuckled is too quiet and dignified for excited students. Guffawed would be too loud and disruptive for a classroom. Sniggered implies disrespectful behind-the-hand laughter, wrong when the teacher is the one trying to be funny.'
      },
      {
        id: 'guffaw_at_q1',
        sentence: 'The man _____ at her remarks.',
        correct: 'guffawed',
        options: [
          { verb: 'chuckled', hint: 'quiet — too subdued for guffaw-level funny' },
          { verb: 'giggled', hint: 'light/childlike — grown man\'s loud laugh' },
          { verb: 'guffawed', hint: 'loud uncontrolled — man + remarks = belly laugh' },
          { verb: 'smiled', hint: 'too mild — remarks were clearly hilarious' }
        ],
        feedback: 'Guffawed at her remarks captures a loud, uncontrolled laugh that someone simply couldn\'t hold back. Chuckled is too quiet. Giggled is light and childlike — not natural for a grown man reacting to sharp remarks. Smiled is far too mild — if he guffawed, the remarks must have been genuinely hilarious.'
      },
      {
        id: 'jeer_at_q1',
        sentence: 'Striking workers _____ at those who crossed the picket line.',
        correct: 'jeered',
        options: [
          { verb: 'scoffed', hint: 'intellectual dismissal — workers need louder aggression' },
          { verb: 'sneered', hint: 'quiet personal contempt — this is public mob mockery' },
          { verb: 'jeered', hint: 'loud aggressive public mockery — picket line ka classic word' },
          { verb: 'sniggered', hint: 'suppressed disrespectful — too quiet for angry strikers' }
        ],
        feedback: 'Jeered at is exactly the word for a crowd making loud, aggressive mocking noises at people — strikers jeering at scabs at a picket line is a classic usage. Scoffed is intellectual dismissal of ideas, not physical crowd mockery. Sneered is quiet, personal contempt — too subtle for an angry crowd. Sniggered is a suppressed quiet laugh — opposite of what an angry crowd does.'
      },
      {
        id: 'smirk_at_q1',
        sentence: 'I don\'t like the way he winks and _____ at me whenever he sees me.',
        correct: 'smirks',
        options: [
          { verb: 'smiles', hint: 'genuine warmth — but "don\'t like" suggests something negative' },
          { verb: 'grins', hint: 'friendly cheeky — close, but smirk has sly/smug quality' },
          { verb: 'smirks', hint: 'smug/sly + winks = negative combination' },
          { verb: 'beams', hint: 'joyful radiant — beam doesn\'t cause discomfort' }
        ],
        feedback: 'Smirks at perfectly captures the sly, smug or disrespectful smile that makes the speaker uncomfortable — paired with "winks," it has a creepy or superior quality. Smiles is genuine and warm — that wouldn\'t bother someone. Grins is open and friendly or mischievous — close, but smirk has a clearly negative, smug connotation. Beams at is radiantly joyful — that would not make someone uncomfortable.'
      },
      {
        id: 'sneer_at_q1',
        sentence: 'She\'ll probably _____ at my new shoes because they\'re not expensive.',
        correct: 'sneer',
        options: [
          { verb: 'jeer', hint: 'loud public mockery — one person, quietly contemptuous' },
          { verb: 'scoff', hint: 'intellectual dismissal — shoes aren\'t ideas' },
          { verb: 'sneer', hint: 'personal contempt + snobbery — cheap shoes ka classic context' },
          { verb: 'laugh', hint: 'general amusement — too neutral for snobbish contempt' }
        ],
        feedback: 'Sneer at is perfect for snobbish contempt — looking down on someone\'s possessions because they\'re not expensive is exactly the scenario sneer was made for. Jeer is loud and public (a crowd jeers) — this is a one-on-one quiet disdain. Scoff at is for dismissing ideas or claims — shoes are not intellectual arguments. Laugh at is too neutral — this situation requires the specific contempt of sneer.'
      },
      {
        id: 'scoff_at_q1',
        sentence: 'The critics _____ at his paintings.',
        correct: 'scoffed',
        options: [
          { verb: 'sneered', hint: 'personal contempt — critics do this publicly/professionally' },
          { verb: 'jeered', hint: 'loud aggressive crowd mockery — critics write reviews, not jeer' },
          { verb: 'scoffed', hint: 'dismissive mockery of creative work — critics ka classic word' },
          { verb: 'laughed', hint: 'too general — scoffed is more specific contempt' }
        ],
        feedback: 'Scoffed at his paintings is the precise word for critics dismissing creative work as not worthy of serious consideration — it implies they treated it with contempt and disbelief. Sneered is more personal and one-on-one, while critics scoff publicly/professionally. Jeered is loud aggressive crowd behaviour — critics don\'t jeer, they write. Laughed at is too general and doesn\'t capture the intellectual dismissal of criticism.'
      },
      {
        id: 'beam_at_q1',
        sentence: 'The child _____ at his teacher as he received the award.',
        correct: 'beamed',
        options: [
          { verb: 'grinned', hint: 'big toothy smile — close but beam is more radiantly joyful' },
          { verb: 'smirked', hint: 'smug sly smile — child receiving award is pure joy' },
          { verb: 'beamed', hint: 'radiant joy + award moment = beam is perfect' },
          { verb: 'chuckled', hint: 'quiet amusement — this is big proud joy, not quiet amusement' }
        ],
        feedback: 'Beamed at is the word for a radiant, joyful smile — a child receiving an award from their teacher is a peak moment of happiness, exactly what beam captures. Grinned is close (a big smile) but less radiantly joyful. Smirked is negative/smug — wrong for an innocent child\'s joy. Chuckled is quiet, internal amusement — completely wrong for the big emotional moment of receiving an award.'
      }
    ]
  },

  'AT_Looking': {
    intro: 'Ye words "dekhne" ke alag-alag tarike hain — sab AT ke saath! Glare, gaze, gawk, stare — sab mein ankhein lagi hain, par kaun kaise aur kyun dekh raha hai — yahi alag hai. Dekhne ki quality, duration aur emotion se sab alag bante hain.',
    words: [
      {
        word: 'glare',
        preposition: 'at',
        def_en: 'To stare angrily or fiercely at someone.',
        def_hi: 'Kisi par gusse ya sakht najar se ghurna ।',
        example: 'She glared angrily at everyone and stormed out of the room.',
        note: 'Glare at is always angry — intense, hostile staring. Frown at is about expression but less intense stare. Scowl at is a hostile look with a facial expression. Glare is the purest angry stare.'
      },
      {
        word: 'glance',
        preposition: 'at',
        def_en: 'To look briefly and quickly at something.',
        def_hi: 'Kisi cheez par jaldi se ek nazar daalna ।',
        example: 'I only had time to glance at my emails.',
        note: 'Glance at is the quickest, briefest look. Gaze at is long and dreamy. Stare at is long and fixed. Glance is in-and-out, no lingering.'
      },
      {
        word: 'gape',
        preposition: 'at',
        def_en: 'To stare with the mouth open, especially in shock or wonder.',
        def_hi: 'Hairaani ya hairani mein munh kholkar ghurna ।',
        example: 'They stood gaping at the pig in the kitchen.',
        note: 'Gape at always involves an open mouth — strong surprise or bewilderment. Stare at is just sustained looking. Gawk at is similar but more foolish. Gape is more about the open-mouth shock.'
      },
      {
        word: 'gawk',
        preposition: 'at',
        def_en: 'To stare at something in a rude, stupid or open-mouthed way.',
        def_hi: 'Kisi ko bevaqoofi ya badtameezi se ghurna ।',
        example: 'Don\'t stand there gawking at her, give her a hand!',
        note: 'Gawk at is rude, unintelligent staring — you shouldn\'t do it. Gape at is surprised staring. Stare at is neutral sustained looking. Gawk has the most negative social connotation of the three.'
      },
      {
        word: 'gaze',
        preposition: 'at',
        def_en: 'To look steadily and intently, especially with admiration or deep thought.',
        def_hi: 'Ek taq lagakar dekhna, khaaskar admiration ya soch mein ।',
        example: 'Anjli gazed admiringly at Rahul as he spoke.',
        note: 'Gaze at is a long, steady, often admiring or dreamy look. Stare at is sustained but can be rude. Glance at is brief. Gaze has the most romantic/thoughtful quality.'
      },
      {
        word: 'glower',
        preposition: 'at',
        def_en: 'To stare at someone with an angry or threatening expression.',
        def_hi: 'Kisi par gusse ya dhamkibharee najar se ghurna ।',
        example: 'There\'s no point glowering at me like that - you know the rules.',
        note: 'Glower at is angry sustained staring with a menacing facial expression — stronger than frown, similar to glare but with more sustained brooding anger. Glare is a flash of anger. Glower is a prolonged, dark brooding stare.'
      },
      {
        word: 'frown',
        preposition: 'at',
        def_en: 'To look with a disapproving, worried or confused expression.',
        def_hi: 'Naraaz, chintit ya confuse hoke maathe par balein daal ke dekhna ।',
        example: 'She frowned at me, clearly annoyed.',
        note: 'Frown at is about facial expression of displeasure — not necessarily intense staring. Glare at is pure anger with intense staring. Scowl at is more intense than frown. Glower at is the most sustained dark anger.'
      },
      {
        word: 'scowl',
        preposition: 'at',
        def_en: 'To look at someone with a fierce, threatening frown.',
        def_hi: 'Kisi par gusse ya daraaney wale bhav se maathe per baliyan daal ke dekhna ।',
        example: 'The boy scowled at her and reluctantly followed her back into school.',
        note: 'Scowl at is a frown with anger — facial muscles tense, menacing. Frown at is milder displeasure. Glare at is more about the eyes (intense staring). Glower at is prolonged. Scowl combines all in one facial expression.'
      },
      {
        word: 'stare',
        preposition: 'at',
        def_en: 'To look fixedly at someone or something for a long time.',
        def_hi: 'Kisi par ya kisi cheez par lambe samay tak aankh gikaaye rehna ।',
        example: 'Don\'t stare at people like that, it\'s rude.',
        note: 'Stare at is neutral sustained looking — can be rude or simply fascinated. Gaze at is romantic/thoughtful. Gawk at is unintelligent. Glare at is angry. Stare is the most neutral prolonged look.'
      },
      {
        word: 'look',
        preposition: 'at',
        def_en: 'To direct one\'s eyes towards something to see it.',
        def_hi: 'Kisi cheez ko dekhne ke liye aankhein uski taraf karna ।',
        example: 'They looked at the picture and laughed.',
        note: 'Look at is the most basic and general seeing verb — no connotation of duration, emotion or manner. All other words in this group are more specific. Look at is the neutral base.'
      }
    ],
    questions: [
      {
        id: 'glare_at_q1',
        sentence: 'She _____ angrily at everyone and stormed out of the room.',
        correct: 'glared',
        options: [
          { verb: 'glowered', hint: 'prolonged brooding anger — stormed out = quick not prolonged' },
          { verb: 'glared', hint: 'intense angry flash — anger + stormed out = quick fierce glare' },
          { verb: 'scowled', hint: 'angry face expression — possible, but glared = pure eye anger' },
          { verb: 'frowned', hint: 'mild displeasure — storming out needs more anger than a frown' }
        ],
        feedback: 'Glared angrily at everyone is the perfect combination — glare is an intense, fierce look of anger, and storming out immediately after shows this was a quick, burning look, not a prolonged stare. Glowered implies prolonged, brooding anger — if she stormed out, she didn\'t stay long enough to glower. Scowled is possible but focuses more on facial expression; glared focuses on the eyes. Frowned is too mild for storming out of a room.'
      },
      {
        id: 'glance_at_q1',
        sentence: 'I only had time to _____ at my emails.',
        correct: 'glance',
        options: [
          { verb: 'stare', hint: 'prolonged looking — "only had time" means brief, not prolonged' },
          { verb: 'gaze', hint: 'dreamy admiring look — emails are not romantic' },
          { verb: 'glance', hint: 'quick brief look — "only had time" = fast' },
          { verb: 'gawk', hint: 'rude staring — emails don\'t get gawked at' }
        ],
        feedback: 'Glance at is the word for a quick, brief look — "only had time to" makes it clear there was no time for a prolonged look. Stare implies sustained, fixed looking — opposite of having no time. Gaze is dreamy and admiring — not how people look at emails. Gawk is rude unintelligent staring at something surprising — wrong for routine emails.'
      },
      {
        id: 'gape_at_q1',
        sentence: 'They stood _____ at the pig in the kitchen.',
        correct: 'gaping',
        options: [
          { verb: 'staring', hint: 'sustained neutral looking — a pig in kitchen needs shock reaction' },
          { verb: 'gaping', hint: 'open-mouth shock — pig in kitchen = shocked/bewildered' },
          { verb: 'gazing', hint: 'admiring dreamy — you don\'t admiringly gaze at a pig in kitchen' },
          { verb: 'glancing', hint: 'quick brief — stood = prolonged, not quick glance' }
        ],
        feedback: 'Gaping at the pig in the kitchen is perfect — a pig in your kitchen is so unexpected that you freeze with your mouth open in shock. Staring is neutral sustained looking — it misses the open-mouth shock element. Gazing is dreamy and admiring — you don\'t admiringly gaze at a pig that shouldn\'t be there. Glancing is brief — if they "stood" doing it, it was prolonged, not a quick glance.'
      },
      {
        id: 'gawk_at_q1',
        sentence: 'Don\'t stand there _____ at her, give her a hand!',
        correct: 'gawking',
        options: [
          { verb: 'gazing', hint: 'admiring — context is someone needing help, not a romantic scene' },
          { verb: 'staring', hint: 'neutral — possible but gawking adds the "rude/unhelpful" connotation' },
          { verb: 'gawking', hint: 'rude unintelligent staring — social criticism = gawk' },
          { verb: 'glancing', hint: 'quick — "stand there" means prolonged, not quick' }
        ],
        feedback: 'Gawking at her is exactly right — the sentence is a social scolding for staring rudely instead of helping. Gawk specifically implies unintelligent, inappropriate staring that you shouldn\'t do. Gazing is admiring and dreamy — the context is someone needing assistance, not a romantic moment. Staring is close but neutral — gawking adds the specific connotation of rudeness. Glancing is brief — standing and doing it means sustained staring.'
      },
      {
        id: 'gaze_at_q1',
        sentence: 'Anjli _____ admiringly at Rahul as he spoke.',
        correct: 'gazed',
        options: [
          { verb: 'stared', hint: 'neutral sustained look — admiringly needs gaze\'s romantic quality' },
          { verb: 'glared', hint: 'angry — admiringly + angry is a contradiction' },
          { verb: 'gazed', hint: 'admiring dreamy look — admiringly + Rahul + as he spoke = gaze' },
          { verb: 'gawked', hint: 'rude staring — admiringly ≠ rudely' }
        ],
        feedback: 'Gazed admiringly at Rahul is the romantic, admiring look word — gaze is specifically the word for a sustained, thoughtful or admiring look. The word "admiringly" is a strong hint. Stared is neutral and can be rude — doesn\'t fit "admiringly." Glared is angry — directly contradicts "admiringly." Gawked is rude and unintelligent — complete opposite of admiring.'
      },
      {
        id: 'glower_at_q1',
        sentence: 'There\'s no point _____ at me like that - you know the rules.',
        correct: 'glowering',
        options: [
          { verb: 'glaring', hint: 'intense flash of anger — glower is more sustained brooding' },
          { verb: 'scowling', hint: 'angry face — close, but glowering = prolonged dark staring' },
          { verb: 'glowering', hint: 'prolonged dark angry stare — "like that" + rules = sustained displeasure' },
          { verb: 'frowning', hint: 'mild displeasure — rules situation needs stronger anger' }
        ],
        feedback: 'Glowering at is perfect for a prolonged, dark, brooding angry stare — the "like that" suggests it has been going on, and the matter-of-fact "you know the rules" dismisses it. Glaring is a quick intense flash of anger — "there\'s no point" implies it\'s been sustained. Scowling focuses more on the facial grimace. Frowning is too mild — you wouldn\'t say "no point" to a mild frown.'
      },
      {
        id: 'stare_at_q1',
        sentence: 'Don\'t _____ at people like that, it\'s rude.',
        correct: 'stare',
        options: [
          { verb: 'gawk', hint: 'rude staring — also fits, but stare is the standard general advice' },
          { verb: 'gaze', hint: 'admiring dreamy — gaze isn\'t usually rude' },
          { verb: 'stare', hint: 'prolonged fixed looking — social rule: don\'t stare' },
          { verb: 'glare', hint: 'angry staring — the advice is general, not just about anger' }
        ],
        feedback: 'Stare at people is the standard social advice — "don\'t stare" is the rule everyone learns. Stare is the neutral word for sustained, fixed looking at someone. Gawk is also possible (and technically more specific to rude staring), but the sentence is stating a general social rule, and "don\'t stare" is the universal expression of this rule. Gaze implies admiration — not usually considered rude. Glare is specifically angry staring — the advice is more general than just angry looks.'
      }
    ]
  }

};
