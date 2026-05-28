var DB = {

  // ===== FROM GIANT DB_PV (KEEPING ORIGINAL) =====

  'Back': {
    intro: 'Back ke phrasal verbs mein mostly withdrawal ya admission ke ideas hain. Yeh relatively few hain lekin exam mein important hain.',
    verbs: [
      {
        pv: 'back down',
        def_en: 'To admit that you were wrong or to withdraw a claim or demand.',
        def_hi: 'Apni galti maan lena ya apni maang ya dawa waapis lena ।',
        example: 'She refused to back down, so she was fired from the company.',
        note: 'Back down aur back out dono mein withdrawal hai, lekin back down zyada about admitting you were wrong ya giving up a position hai. Back out zyada about withdrawing from a commitment or plan hai.'
      },
      {
        pv: 'back out',
        def_en: 'To withdraw from a commitment or agreement that you previously agreed to.',
        def_hi: 'Kisi commitment ya agreement se hat jaana jo pehle accept ki thi ।',
        example: 'He backed out of the deal at the last minute.',
        note: 'Back out aur back down dono mein withdrawal hai, lekin back out zyada about leaving a specific commitment — deal, promise, plan. Back down zyada about conceding a point or position.'
      }
    ],
    questions: [
      {
        id: 'bkq1',
        sentence: 'She refused to _____, so she was fired from the company.',
        correct: 'back down',
        options: [
          { verb: 'back down', hint: 'galti maan lena ya yield karna — back down' },
          { verb: 'back out', hint: 'commitment se hatna — back out' },
          { verb: 'back over', hint: 'galat option' },
          { verb: 'back upon', hint: 'galat option' }
        ],
        feedback: '"Back down" ka matlab hai apni galat position se admit karna ya yield karna — naukri jaane ke baawajood na manna iska context hai. "Back out" galat hai — woh specific commitment ya deal se withdrawal ke liye hai. "Back over" aur "back upon" koi real phrasal verbs nahi hain.'
      },
      {
        id: 'bkq2',
        sentence: 'He _____ of the deal at the last minute.',
        correct: 'backed out',
        options: [
          { verb: 'backed down', hint: 'galti maan lena — back down' },
          { verb: 'backed away', hint: 'physically peechhe hatna — back away' },
          { verb: 'backed off', hint: 'pressure khatam karna — back off' },
          { verb: 'backed out', hint: 'commitment se hatna — back out' }
        ],
        feedback: '"Backed out" ka matlab hai kisi agreed commitment ya deal se last minute mein hat jaana — deal se withdraw karna iska perfect example hai. "Backed down" galat hai — woh apni position ya demand withdraw karna hai, commitment nahi specifically. "Backed away" galat hai — woh physically peechhe hatna hai. "Backed off" galat hai — woh pressure reduce karna hai.'
      }
    ]
  },

  'Beat': {
    intro: 'Beat up on ek specific phrasal verb hai jo violence ya bullying ke context mein aata hai. Simple lekin important hai.',
    verbs: [
      {
        pv: 'beat up on',
        def_en: 'To assault or repeatedly hit someone, or to unfairly criticize.',
        def_hi: 'Kisi ko baar baar maarna ya unfairly criticize karna ।',
        example: 'The older students were accused of beating up on the younger ones.',
        note: 'Beat up on aur beat up almost same hain — dono repeated physical assault ke liye hain. "Beat up on" zyada American English mein common hai. "Don\'t beat up on yourself" ek idiomatic use hai — khud ko mat koso.'
      }
    ],
    questions: [
      {
        id: 'btq1',
        sentence: 'Mr. Arvind was accused of _____ the students in the class.',
        correct: 'beating up on',
        options: [
          { verb: 'beating up off', hint: 'galat option' },
          { verb: 'beating up on', hint: 'baar baar maarna — beat up on' },
          { verb: 'beating up of', hint: 'galat option' },
          { verb: 'beating up in', hint: 'galat option' }
        ],
        feedback: '"Beating up on" ka matlab hai kisi ko baar baar maarna ya assault karna — teacher ka students ko maarne ka ilzaam iska example hai. "Beating up off", "beating up of", aur "beating up in" koi real phrasal verbs nahi hain. Sirf "beat up on" correct hai.'
      }
    ]
  },

  'Blow': {
    intro: 'Blow ke phrasal verbs mein wind actions, explosions, aur emotions ke ideas hain. "Blow up" aur "blow out" dono mein kuch destructive hai, lekin context alag hai — ek anger, doosra extinguish karna.',
    verbs: [
      {
        pv: 'blow out',
        def_en: 'To extinguish a flame by blowing air, or for a tyre to burst suddenly.',
        def_hi: 'Phunk maar ke bujhaana, ya tyre ka achanak phat jaana ।',
        example: 'She blew out all the candles on her birthday cake.',
        note: 'Blow out aur blow up dono mein violent action hai, lekin blow out zyada extinguishing ya bursting ke liye hai. Blow up zyada explosion ya anger ke liye. "Blow out" candles, tyres ke liye specific hai.'
      },
      {
        pv: 'blow up',
        def_en: 'To explode, to inflate something, or to lose your temper.',
        def_hi: 'Phatna ya phataana, kuch phulaana, ya gusse mein aa jaana ।',
        example: 'Mahesh\'s attitude annoyed me and I blew up.',
        note: 'Blow up ke teen alag meanings hain — explosion, inflation (balloon blow up karna), aur anger. Blow over se bilkul alag — blow over means to pass without serious effect. Blow up means real explosion or real anger.'
      },
      {
        pv: 'blow over',
        def_en: 'To pass away without having a serious effect.',
        def_hi: 'Koi baat ya mushkil bina serious asar ke guzar jaana ।',
        example: 'Don\'t worry about the argument — it will blow over.',
        note: 'Blow over aur blow up exact opposites hain in effect — blow up is intense and impactful, blow over is when something passes harmlessly. "It will blow over" is a reassuring phrase.'
      },
      {
        pv: 'blow off',
        def_en: 'To ignore someone or fail to meet an obligation.',
        def_hi: 'Kisi ko ignore karna ya kisi zimmedaari ko nazar andaz karna ।',
        example: 'He blew off the meeting without even sending a message.',
        note: 'Blow off aur blow over dono mein dismissal hai, lekin blow off zyada about actively ignoring an obligation hai. Blow over is about something passing naturally, blow off is a choice to ignore.'
      },
      {
        pv: 'blow down',
        def_en: 'If wind blows something down, it makes it fall.',
        def_hi: 'Hawa se kuch gir jaana ।',
        example: 'The strong winds blew down several trees in the park.',
        note: 'Blow down sirf physical falling due to wind ke liye hai. Blow out, blow up, blow over sab more metaphorical uses bhi rakhte hain, lekin blow down mostly literal hai.'
      }
    ],
    questions: [
      {
        id: 'blq1',
        sentence: 'The strong wind _____ all the candles.',
        correct: 'blew out',
        options: [
          { verb: 'blew out', hint: 'phunk maar ke bujhaana — blow out' },
          { verb: 'blow up', hint: 'phatna ya gussa — blow up' },
          { verb: 'blowing away', hint: 'galat form — wrong grammar' },
          { verb: 'blow down', hint: 'hawa se girna — blow down' }
        ],
        feedback: '"Blew out" ka matlab hai hawa ya phunk se bujhaana — tez hawa se mombattiyan bujhna iska perfect example hai. "Blow up" galat hai — woh explosion ya anger ke liye hai. "Blowing away" galat hai — bina helping verb ke V+ing nahi aati. "Blow down" galat hai — woh physically kisi cheez ko girne ke liye hai, bujhaane ke liye nahi.'
      },
      {
        id: 'blq2',
        sentence: 'Mahesh\'s attitude annoyed me and I _____.',
        correct: 'blew up',
        options: [
          { verb: 'blew over', hint: 'bina asar ke guzarna — blow over' },
          { verb: 'blew down', hint: 'hawa se girna — blow down' },
          { verb: 'blew off', hint: 'ignore karna — blow off' },
          { verb: 'blew up', hint: 'gusse mein aana — blow up' }
        ],
        feedback: '"Blew up" ka matlab hai achanak gusse mein aa jaana — kisi ki attitude se irritate hokar gussa hona iska perfect example hai. "Blew over" galat hai — woh kisi baat ke bina asar ke guzarne ke liye hai. "Blew down" galat hai — woh physical falling ke liye hai. "Blew off" galat hai — woh ignore karne ke liye hai.'
      },
      {
        id: 'blq3',
        sentence: 'Don\'t worry about the argument — it will _____ soon.',
        correct: 'blow over',
        options: [
          { verb: 'blow up', hint: 'phatna ya gussa — blow up' },
          { verb: 'blow out', hint: 'bujhaana — blow out' },
          { verb: 'blow over', hint: 'bina serious asar ke guzarna — blow over' },
          { verb: 'blow down', hint: 'hawa se girna — blow down' }
        ],
        feedback: '"Blow over" ka matlab hai koi baat ya mushkil bina serious asar ke guzar jaana — argument ka apne aap theek ho jaana iska perfect example hai. "Blow up" galat hai — woh explosion ya anger ke liye hai. "Blow out" galat hai — woh bujhaane ke liye hai. "Blow down" galat hai — woh physical wind damage ke liye hai.'
      },
      {
        id: 'blq4',
        sentence: 'He _____ the meeting without even sending a message.',
        correct: 'blew off',
        options: [
          { verb: 'blew up', hint: 'phatna ya gussa — blow up' },
          { verb: 'blew off', hint: 'ignore karna — blow off' },
          { verb: 'blew out', hint: 'bujhaana — blow out' },
          { verb: 'blew over', hint: 'bina asar guzarna — blow over' }
        ],
        feedback: '"Blew off" ka matlab hai kisi obligation ya meeting ko deliberately ignore karna — message bhi diye bina meeting miss karna iska example hai. "Blew up" galat hai — woh explosion ya anger ke liye hai. "Blew out" galat hai — woh extinguishing ke liye hai. "Blew over" galat hai — woh kisi baat ke naturally passing ke liye hai.'
      },
      {
        id: 'blq5',
        sentence: 'The strong winds _____ several trees in the park.',
        correct: 'blew down',
        options: [
          { verb: 'blew out', hint: 'bujhaana — blow out' },
          { verb: 'blew down', hint: 'hawa se girna — blow down' },
          { verb: 'blew over', hint: 'bina asar guzarna — blow over' },
          { verb: 'blew up', hint: 'phatna — blow up' }
        ],
        feedback: '"Blew down" ka matlab hai hawa ki wajah se physically kisi cheez ka gir jaana — tez hawaon se trees girna iska perfect example hai. "Blew out" galat hai — woh bujhaane ke liye hai. "Blew over" galat hai — woh kisi situation ke pass hone ke liye hai. "Blew up" galat hai — woh explosion ya anger ke liye hai.'
      }
    ]
  },

  'Break': {
    intro: 'Break ek bahut hi versatile verb hai — iska kaam sirf cheezein todna nahi, balki relationships todna, groups se alag hona, aur situations mein suddenly ghusna bhi hai. Iske phrasal verbs mein mostly direction ya separation ka idea hota hai, isliye particle pe dhyan do.',
    verbs: [
      {
        pv: 'break into',
        def_en: 'To enter a place by force, usually illegally.',
        def_hi: 'Kisi jagah mein zorardasti ya gaira-qanooni tarike se ghusna ।',
        example: 'Thieves broke into the museum and stole three paintings.',
        note: 'Break in aur break into mein fark: break into hamesha ek location ko follow karta hai — "broke into the house." Break in akela use hota hai bina location ke, aur uska ek aur matlab hai conversation interrupt karna.'
      },
      {
        pv: 'break down',
        def_en: 'To stop functioning (machines/vehicles), or to lose emotional control, or to analyze something into parts.',
        def_hi: 'Machine ka kharab ho jaana, ya emotionally toot jaana, ya kisi cheez ko parts mein todna ।',
        example: 'Our car broke down on the highway and we had to call for help.',
        note: 'Break down aur break off mein confusion hota hai — break down means function karna band karna ya emotionally toot jaana; break off means kisi cheez ya rishte ko beech mein rokna ya khatam karna.'
      },
      {
        pv: 'break with',
        def_en: 'To end an association, tradition, or relationship with someone or something.',
        def_hi: 'Kisi rishte, parampara, ya sambandh ko khatam karna ।',
        example: 'She broke with her family\'s tradition and started her own business.',
        note: 'Break with aur break off dono rishta todne ke liye use hote hain, lekin break with zyada tradition ya ideology ke sandarbh mein aata hai — jabki break off romantic ya concrete agreements ke liye.'
      },
      {
        pv: 'break off',
        def_en: 'To stop something suddenly, or to end a relationship or agreement.',
        def_hi: 'Kisi kaam ya rishte ko achanak beech mein rok dena ya khatam kar dena ।',
        example: 'The two countries broke off diplomatic relations after the incident.',
        note: 'Break off ek sharp, sudden ending hai — jaise engagement tod di ya baat karte karte ruk gaye. Break with zyada philosophical ya ideological separation hai.'
      },
      {
        pv: 'break away',
        def_en: 'To escape from a group or become separated from something.',
        def_hi: 'Kisi group ya jagah se alag ho jaana ya nikal bhaagna ।',
        example: 'One of the calves broke away from the herd and ran into the fields.',
        note: 'Break away aur break out dono escape ka idea dete hain, lekin break away zyada voluntary separation hai — group se khud alag hona — jabki break out forceful ya sudden escape ke liye hai jaise prison se bhaagna.'
      },
      {
        pv: 'break out',
        def_en: 'To start suddenly and violently, or to escape from a place.',
        def_hi: 'Koi buri situation achanak shuru hona, ya kisi jagah se bhaagna ।',
        example: 'A fire broke out in the kitchen early this morning.',
        note: 'Break out hamesha kuch sudden aur uncontrolled ke liye hai — fire, war, disease. Break away zyada controlled aur deliberate separation hai.'
      },
      {
        pv: 'break in',
        def_en: 'To enter a building by force, or to interrupt a conversation.',
        def_hi: 'Kisi imarat mein zorardasti ghusna, ya beech baat mein bol dena ।',
        example: 'Someone broke in while we were on vacation and took the laptop.',
        note: 'Break in aur break into almost same hain for forced entry, lekin break in akela khada ho sakta hai bina location ke. Break in ka ek aur matlab hai conversation mein interrupt karna — jo break into nahi karta.'
      },
      {
        pv: 'break up',
        def_en: 'To end a romantic relationship, or to separate into smaller parts.',
        def_hi: 'Romantic rishta khatam karna, ya chhote hisson mein toot jaana ।',
        example: 'He was very sad after they broke up last year.',
        note: 'Break up aur break off dono mein ending hai, lekin break up specifically romantic relationships ke liye bohot common hai. Break off zyada general agreements ya talks ke liye.'
      }
    ],
    questions: [
      {
        id: 'brq1',
        sentence: 'The commanders _____ the terrorists\' camp by force.',
        correct: 'broke into',
        options: [
          { verb: 'broke down', hint: 'machine kharab hona — break down' },
          { verb: 'broke into', hint: 'force se kisi jagah ghusna — break into' },
          { verb: 'broke away', hint: 'group se alag hona — break away' },
          { verb: 'broke off', hint: 'rishta ya kaam rokna — break off' }
        ],
        feedback: 'Yahan commanders ne force se terrorists ke camp mein entry ki. Kisi jagah mein zorardasti enter karne ke liye "broke into" sahi hai — yeh hamesha ek location follow karta hai. "Broke down" machinery failure ya emotional collapse ke liye hai. "Broke away" group se alag hone ke liye hai. "Broke off" kisi agreement ya rishte ko suddenly khatam karne ke liye hai.'
      },
      {
        id: 'brq2',
        sentence: 'The mechanic explained how to _____ the engine problem step by step.',
        correct: 'break down',
        options: [
          { verb: 'break off', hint: 'suddenly rokna — break off' },
          { verb: 'break out', hint: 'achanak shuru hona — break out' },
          { verb: 'break down', hint: 'cheez analyze karna — break down' },
          { verb: 'break into', hint: 'force se ghusna — break into' }
        ],
        feedback: '"Break down" ka ek important matlab hai kisi complex cheez ko chhote parts mein todna ya explain karna — mechanic ka engine problem explain karna iska perfect example hai. "Break off" kisi cheez ko beech mein rokne ke liye hai. "Break out" kuch violent ya sudden shuru hone ke liye hai. "Break into" force se kisi jagah ghusne ke liye hai.'
      },
      {
        id: 'brq3',
        sentence: 'After years of disagreement, she finally _____ her conservative upbringing and moved to the city.',
        correct: 'broke with',
        options: [
          { verb: 'broke off', hint: 'suddenly rokna ya todna — break off' },
          { verb: 'broke away', hint: 'physically alag hona — break away' },
          { verb: 'broke out', hint: 'achanak shuru hona — break out' },
          { verb: 'broke with', hint: 'parampara ya ideology chhodna — break with' }
        ],
        feedback: '"Broke with" ka use tab hota hai jab koi tradition, ideology, ya association se permanently alag ho jaata hai. "Broke off" zyada concrete agreements ya romantic relationships ke liye hai. "Broke away" physical separation ke liye hai, ideological nahi. "Break out" kisi violent ya sudden event ke shuru hone ke liye hai.'
      },
      {
        id: 'brq4',
        sentence: 'The engagement was _____ just two weeks before the wedding.',
        correct: 'broken off',
        options: [
          { verb: 'broken away', hint: 'group se alag hona — break away' },
          { verb: 'broken out', hint: 'achanak shuru hona — break out' },
          { verb: 'broken off', hint: 'rishta achanak khatam — break off' },
          { verb: 'broken down', hint: 'machine kharab ya toot jaana — break down' }
        ],
        feedback: '"Broken off" tab use hota hai jab koi concrete relationship ya agreement ko suddenly khatam kar diya jaaye — engagement todna iska classic example hai. "Broken away" physical separation ke liye hai. "Broken down" mechanical failure ya emotional collapse ke liye hai. "Broken out" kuch violent ya sudden shuru hone ke liye hai.'
      },
      {
        id: 'brq5',
        sentence: 'One of the baby elephants _____ from the herd and lost its way.',
        correct: 'broke away',
        options: [
          { verb: 'broke in', hint: 'force se ghusna ya interrupt — break in' },
          { verb: 'broke down', hint: 'machine kharab — break down' },
          { verb: 'broke off', hint: 'rishta rokna — break off' },
          { verb: 'broke away', hint: 'group se alag hona — break away' }
        ],
        feedback: 'Ek baby elephant apne herd se alag ho gaya — yeh ek group se separation hai. "Broke away" sahi hai kyunki yeh phrasal verb group ya crowd se alag ho jaane ke liye use hota hai. "Broke in" kisi jagah mein force se ghusne ya baat interrupt karne ke liye hai. "Broke down" machinery ya emotional breakdown ke liye hai. "Broke off" kisi agreement ya rishte ko achanak khatam karne ke liye hota hai.'
      },
      {
        id: 'brq6',
        sentence: 'A fire _____ in the basement of the house.',
        correct: 'broke out',
        options: [
          { verb: 'broke in', hint: 'force se ghusna — break in' },
          { verb: 'broke out', hint: 'achanak shuru — break out' },
          { verb: 'broke away', hint: 'group se alag — break away' },
          { verb: 'broke into', hint: 'jagah mein ghusna — break into' }
        ],
        feedback: '"Broke out" ka matlab hai achanak aur violently kuch shuru hona — fire, war, epidemic iske perfect examples hain. "Broke in" kisi imarat mein force se ghusne ya conversation interrupt karne ke liye hai. "Broke away" voluntary separation ke liye hai. "Broke into" hamesha ek specific location mein ghusne ke liye use hota hai.'
      },
      {
        id: 'brq7',
        sentence: 'It is a bad habit to _____ while someone is speaking.',
        correct: 'break in',
        options: [
          { verb: 'break into', hint: 'jagah mein ghusna — break into' },
          { verb: 'break off', hint: 'baat rok dena — break off' },
          { verb: 'break in', hint: 'baat karte waqt interrupt — break in' },
          { verb: 'break out', hint: 'achanak shuru hona — break out' }
        ],
        feedback: '"Break in" ka ek important meaning hai kisi ki baat ke beech mein interrupt karna. "Break into" location ke liye hai. "Break off" conversation ko permanently khatam karna hai. "Break out" kuch violent ya sudden shuru hone ke liye hai.'
      },
      {
        id: 'brq8',
        sentence: 'He was very sad after they _____ last year.',
        correct: 'broke up',
        options: [
          { verb: 'broke up', hint: 'romantic rishta khatam — break up' },
          { verb: 'gave away', hint: 'muft dena — give away' },
          { verb: 'set off', hint: 'safar shuru — set off' },
          { verb: 'came across', hint: 'achanak milna — come across' }
        ],
        feedback: '"Broke up" ka matlab hai romantic relationship khatam karna — couple ka alag hona iska classic example hai. "Gave away" galat hai — woh donation ke liye hai. "Set off" galat hai — woh journey start karne ke liye hai. "Came across" galat hai — woh accidentally meet karne ke liye hai.'
      }
    ]
  },

  'Brighten': {
    intro: 'Brighten ka ek main phrasal verb hai — brighten up. Simple lekin emotionally important hai — khushi aana ya mood theek hona.',
    verbs: [
      {
        pv: 'brighten up',
        def_en: 'To become happier or more cheerful, or to make something more attractive.',
        def_hi: 'Zyada khush ya cheerful ho jaana, ya kisi cheez ko zyada attractive banana ।',
        example: 'She brightened up when she heard the good news.',
        note: 'Brighten up sirf positive emotional change ya visual improvement ke liye hai. "Brighten of" jaise galat forms exam mein aate hain — inhe pehchano aur avoid karo. "Up" hamesha zaroori hai yahan.'
      }
    ],
    questions: [
      {
        id: 'bgq1',
        sentence: 'Amal _____ when they said he could go with them.',
        correct: 'brightened up',
        options: [
          { verb: 'brightened in', hint: 'galat option — brighten in' },
          { verb: 'brightened upon', hint: 'galat option — brighten upon' },
          { verb: 'brightened on', hint: 'galat option — brighten on' },
          { verb: 'brightened up', hint: 'khush ho jaana — brighten up' }
        ],
        feedback: '"Brightened up" ka matlab hai khush ya cheerful ho jaana — saath jaane ki permission milne pe khush hona iska perfect example hai. "Brightened in", "brightened on", aur "brightened upon" koi real phrasal verbs nahi hain. Sirf "brighten up" correct hai.'
      }
    ]
  },

  'Bring': {
    intro: 'Bring ke phrasal verbs mein introducing, raising, aur causing ke ideas hain. "Bring up" aur "bring about" dono mein kuch saamne lana hai lekin context kaafi different hai — ek conversation mein topic lana, doosra event cause karna.',
    verbs: [
      {
        pv: 'bring up',
        def_en: 'To mention a subject in conversation, or to raise a child.',
        def_hi: 'Baat karte waqt koi topic uthana, ya bacche ko palna-posna ।',
        example: 'She brought up the issue of pay during the meeting.',
        note: 'Bring up ke do important meanings hain — raising a topic aur raising a child. Context se samjho. Bring about se alag — bring up means introduce something into discussion, bring about means cause something to happen.'
      },
      {
        pv: 'bring about',
        def_en: 'To cause something to happen.',
        def_hi: 'Kisi cheez ko hone ka kaaran banna ।',
        example: 'The new policies brought about significant changes in the economy.',
        note: 'Bring about aur bring up bilkul alag hain — bring about is about causation, bring up is about mentioning. "What brought this about?" means "what caused this?" — a very common use.'
      },
      {
        pv: 'bring down',
        def_en: 'To reduce the level of something, or to cause someone to fall or lose power.',
        def_hi: 'Kisi cheez ka level kam karna, ya kisi ko girana ya power se hatana ।',
        example: 'Peter was brought down in the penalty area.',
        note: 'Bring down aur bring about dono mein strong action hai, lekin bring down zyada about causing someone to fall — physically or politically. Bring about is pure causation of any kind of event.'
      }
    ],
    questions: [
      {
        id: 'bnq1',
        sentence: 'The teacher asked the students to _____ their ideas during the class discussion.',
        correct: 'bring up',
        options: [
          { verb: 'bring about', hint: 'cause karna — bring about' },
          { verb: 'bring down', hint: 'kam karna ya girana — bring down' },
          { verb: 'bring up', hint: 'topic uthana — bring up' },
          { verb: 'bring in', hint: 'involve karna — bring in' }
        ],
        feedback: '"Bring up" ka matlab hai discussion ya conversation mein koi topic introduce karna — class discussion mein ideas rakhna iska perfect example hai. "Bring about" galat hai — woh kisi event ko cause karne ke liye hai. "Bring down" galat hai — woh reduce karne ya girane ke liye hai. "Bring in" galat hai — woh kisi ko involve karne ke liye hai.'
      },
      {
        id: 'bnq2',
        sentence: 'Peter was _____ in the penalty area.',
        correct: 'brought down',
        options: [
          { verb: 'brought up', hint: 'topic uthana ya palana — bring up' },
          { verb: 'brought down', hint: 'girana ya fall karna — bring down' },
          { verb: 'brought off', hint: 'successfully karna — bring off' },
          { verb: 'brought about', hint: 'cause karna — bring about' }
        ],
        feedback: '"Brought down" ka matlab hai kisi ko physically girana — football penalty area mein gira dena iska perfect example hai. "Brought up" galat hai — woh topic raise karna ya bachche paalana hai. "Brought about" galat hai — woh events cause karne ke liye hai. "Brought off" galat hai — woh kisi mushkil cheez ko achieve karne ke liye hai.'
      },
      {
        id: 'bnq3',
        sentence: 'The children were _____ by their grandparents after their parents passed away.',
        correct: 'brought up',
        options: [
          { verb: 'given in', hint: 'yield karna — give in' },
          { verb: 'brought up', hint: 'bachche paalana — bring up' },
          { verb: 'turned down', hint: 'refuse karna — turn down' },
          { verb: 'gone through', hint: 'mushkil se guzarna — go through' }
        ],
        feedback: '"Brought up" ka matlab hai kisi bachche ko paalana-posna — grandparents ka parents ke baad bachche paalana iska perfect example hai. "Given in" galat hai — woh surrender karne ke liye hai. "Turned down" galat hai — woh refuse karne ke liye hai. "Gone through" galat hai — woh difficult situation experience karne ke liye hai.'
      }
    ]
  },

  'Call': {
    intro: 'Call ke phrasal verbs mein mostly communication ya action ka idea hota hai — kisi ko bulana, kuch cancel karna, ya kisi ki galat harkat pe dhyan dilana. Particle change hone se meaning bilkul badal jaati hai, isliye har ek ko alag samjho.',
    verbs: [
      {
        pv: 'call out',
        def_en: 'To draw critical attention to someone\'s unacceptable behavior or actions publicly.',
        def_hi: 'Kisi ki galat harkat ke baare mein sab ke saamne kehna ya challenge karna ।',
        example: 'She called out her colleague for taking credit for her work in the meeting.',
        note: 'Call out aur call in dono mein summon ka idea lag sakta hai, lekin call out public confrontation ya criticism ke liye hai. Call in zyada formal professional context mein hota hai — doctor ya expert ko bulana.'
      },
      {
        pv: 'call in',
        def_en: 'To ask someone to come and help in a professional capacity, or to phone your workplace to say you won\'t be coming.',
        def_hi: 'Kisi expert ya specialist ko help ke liye bulana, ya workplace pe phone karke chutti lena ।',
        example: 'The police called in a forensic expert to examine the evidence.',
        note: 'Call in aur call on dono mein kisi ko engage karna hai, lekin call in zyada professional ya remote context mein hai — expert phone pe bulana — jabki call on physical visit ya direct face-to-face request hai.'
      },
      {
        pv: 'call into',
        def_en: 'Used in the fixed phrase "call into question" meaning to raise doubts about something.',
        def_hi: 'Kisi cheez ke baare mein shak ya sawaal uthana — hamesha "call into question" ke roop mein ।',
        example: 'The new evidence called his entire testimony into question.',
        note: 'Call into almost hamesha "call into question" ke roop mein aata hai — yeh ek fixed phrase hai. Ise call out se confuse mat karo; call out direct public criticism hai, jabki call into question intellectual doubt create karna hai.'
      },
      {
        pv: 'call off',
        def_en: 'To cancel a planned event, activity, or arrangement.',
        def_hi: 'Kisi planned kaam, event, ya arrangement ko cancel karna ।',
        example: 'They had to call off the cricket match because of heavy rain.',
        note: 'Call off sirf cancellation ke liye hai — permanently ya temporarily kuch band karna. Call out ke saath mat milao jo criticism ke liye hai, aur call on ke saath bhi nahi jo visit ke liye hai.'
      },
      {
        pv: 'call on',
        def_en: 'To visit someone formally, or to ask or invite someone to do something.',
        def_hi: 'Kisi se formally milne jaana, ya kisi ko kuch karne ke liye kehna ya invite karna ।',
        example: 'The professor called on three students to present their projects.',
        note: 'Call on aur call in mein subtle fark: call on has a direct, face-to-face quality — teacher ne student ko class mein address kiya. Call in zyada telephone ya distance-based summons hai.'
      },
      {
        pv: 'call around',
        def_en: 'To phone several different people or places to find information or help.',
        def_hi: 'Alag alag logon ya jagahon ko phone karke information ya help dhundna ।',
        example: 'I called around to several pharmacies to find the medicine.',
        note: 'Call around ka "around" indicate karta hai ki multiple places hain — yeh ek search process hai phoning many contacts. Call on sirf ek specific visit ya request hai. Call around always implies a search across several targets.'
      },
      {
        pv: 'call forth',
        def_en: 'To evoke or elicit a particular feeling, reaction, or response.',
        def_hi: 'Kisi khaas feeling, reaction, ya response ko uthana ya jagana ।',
        example: 'The challenging situation called forth all of his courage and resilience.',
        note: 'Call forth aur call out dono mein evoking hai, lekin call forth zyada about summoning qualities like courage, strength — more literary and formal. Call out zyada about challenging someone\'s behavior.'
      },
      {
        pv: 'call down',
        def_en: 'To scold or reprimand someone.',
        def_hi: 'Kisi ko daantna ya phatkarna ।',
        example: 'The teacher called Raju down for not completing his homework.',
        note: 'Call down aur call out dono mein negative response hai, lekin call down specifically scolding hai — authority se daant milna. Call out zyada public criticism hai.'
      },
      {
        pv: 'call up',
        def_en: 'To summon someone for military service, or to recall something from memory.',
        def_hi: 'Kisi ko military service ke liye bulana, ya yaad karna ।',
        example: 'He was called up for army duty after the conflict started.',
        note: 'Call up aur call in dono mein summoning hai, lekin call up specifically military context mein aata hai ya memories recall karna hai. Call in zyada professional expert ko summon karna hai.'
      },
      {
        pv: 'call for',
        def_en: 'To demand or require something.',
        def_hi: 'Kisi cheez ki maang karna ya zaroori hona ।',
        example: 'The situation calls for immediate action.',
        note: 'Call for aur call on dono mein requesting hai, lekin call for zyada about demanding or requiring — "this calls for celebration." Call on zyada about asking a specific person to do something.'
      }
    ],
    questions: [
      {
        id: 'caq1',
        sentence: 'I _____ an explanation for his rude behaviour.',
        correct: 'called out',
        options: [
          { verb: 'called in', hint: 'professional help bulana — call in' },
          { verb: 'called off', hint: 'cancel karna — call off' },
          { verb: 'called out', hint: 'galat kaam pe publicly bolna — call out' },
          { verb: 'called into question', hint: 'shak uthana — call into question' }
        ],
        feedback: 'Yahan speaker ne uski rude behaviour ke liye explanation maangi — yani usne unacceptable behavior ko publicly challenge kiya. "Called out" sahi hai jo kisi ki galat harkat ko confront karna hai. "Called in" galat hai kyunki woh professional expert ko summon karna hai. "Called off" galat hai kyunki woh kisi event ko cancel karna hai. "Called into question" galat hai kyunki woh intellectual doubt uthana hai.'
      },
      {
        id: 'caq2',
        sentence: 'The hospital _____ extra doctors to deal with the emergency.',
        correct: 'called in',
        options: [
          { verb: 'called off', hint: 'cancel karna — call off' },
          { verb: 'called out', hint: 'criticism karna — call out' },
          { verb: 'called in', hint: 'professional expert bulana — call in' },
          { verb: 'called on', hint: 'visit ya request — call on' }
        ],
        feedback: '"Called in" tab use hota hai jab kisi professional ko formally help ke liye summon kiya jaaye — hospital ka doctors ko bulana iska perfect example hai. "Called on" galat hai kyunki woh face-to-face visit ya formal request ke liye hai. "Called off" bilkul galat hai. "Called out" galat hai kyunki woh public criticism ke liye hai.'
      },
      {
        id: 'caq3',
        sentence: 'The new findings _____ the reliability of the earlier research.',
        correct: 'called into question',
        options: [
          { verb: 'called off', hint: 'cancel karna — call off' },
          { verb: 'called into question', hint: 'shak uthana — call into question' },
          { verb: 'called in', hint: 'expert bulana — call in' },
          { verb: 'called out', hint: 'publicly confront karna — call out' }
        ],
        feedback: '"Called into question" ek fixed phrase hai jiska matlab hai kisi cheez ki reliability ya truth ke baare mein doubt uthana. "Called off" galat hai kyunki woh cancellation ke liye hai. "Called in" galat hai kyunki woh professional summoning ke liye hai. "Called out" galat hai kyunki woh direct public confrontation ke liye hai.'
      },
      {
        id: 'caq4',
        sentence: 'The match was _____ due to bad weather.',
        correct: 'called off',
        options: [
          { verb: 'called around', hint: 'kai jagah phone karna — call around' },
          { verb: 'called out', hint: 'criticism — call out' },
          { verb: 'called in', hint: 'expert bulana — call in' },
          { verb: 'called off', hint: 'event cancel — call off' }
        ],
        feedback: '"Called off" ka matlab hai kisi planned event ko cancel karna — match cancel hona iska classic example hai. "Called around" galat hai kyunki woh multiple places ko phone karke information dhundna hai. "Called out" galat hai kyunki woh behavior ko publicly challenge karna hai. "Called in" galat hai kyunki woh professional ko summon karna hai.'
      },
      {
        id: 'caq5',
        sentence: 'The teacher _____ a student to solve the problem on the board.',
        correct: 'called on',
        options: [
          { verb: 'called out', hint: 'criticism ya galti pakadna — call out' },
          { verb: 'called off', hint: 'cancel karna — call off' },
          { verb: 'called in', hint: 'professional bulana — call in' },
          { verb: 'called on', hint: 'directly kisi ko address karna — call on' }
        ],
        feedback: '"Called on" tab use hota hai jab koi kisi specific person ko directly address kare ya invite kare kuch karne ke liye — teacher ka student ko board pe bulana iska perfect example hai. "Called out" galat hai kyunki woh public criticism ke liye hai. "Called off" galat hai kyunki yahan kuch cancel nahi hua. "Called in" galat hai kyunki woh professional summoning ke liye hai.'
      },
      {
        id: 'caq6',
        sentence: 'I decided to _____ various bookstores in the area to see if any of them had the book I needed.',
        correct: 'call around',
        options: [
          { verb: 'call on', hint: 'ek jagah visit — call on' },
          { verb: 'call off', hint: 'cancel karna — call off' },
          { verb: 'call around', hint: 'kai jagah phone karna — call around' },
          { verb: 'call out', hint: 'criticism karna — call out' }
        ],
        feedback: '"Call around" ka matlab hai kai alag alag logon ya jagahon ko phone karna information ke liye — multiple bookstores ko phone karna iska perfect example hai. "Call on" galat hai kyunki woh ek specific person ke paas physically jaana hai. "Call off" bilkul galat hai. "Call out" galat hai kyunki woh criticism ya confrontation ke liye hai.'
      },
      {
        id: 'caq7',
        sentence: 'The challenging situation _____ all of his courage and resilience.',
        correct: 'called forth',
        options: [
          { verb: 'called forth', hint: 'quality jagana ya uthana — call forth' },
          { verb: 'called down', hint: 'daantna — call down' },
          { verb: 'called up', hint: 'military bulana ya recall — call up' },
          { verb: 'called on', hint: 'visit ya request — call on' }
        ],
        feedback: '"Called forth" ka matlab hai kisi quality ya strength ko elicit karna — mushkil situation mein himmat bahar aana iska perfect example hai. "Called down" galat hai — woh scolding ke liye hai. "Called up" galat hai — woh military service ya memory ke liye hai. "Called on" galat hai — woh direct request ya visit ke liye hai.'
      },
      {
        id: 'caq8',
        sentence: 'Raju didn\'t complete his homework on time so the teacher called him _____.',
        correct: 'down',
        options: [
          { verb: 'down', hint: 'daantna — call down' },
          { verb: 'off', hint: 'cancel — call off' },
          { verb: 'for', hint: 'demand — call for' },
          { verb: 'up', hint: 'military ya recall — call up' }
        ],
        feedback: '"Call someone down" ka matlab hai kisi ko scold ya reprimand karna — homework na karne pe teacher ka daantna iska example hai. "Call off" galat hai — woh cancel karna hai. "Call for" galat hai — woh demand ya require karna hai. "Call up" galat hai — woh military summon ya memory recall ke liye hai.'
      }
    ]
  },

  'Carry': {
    intro: 'Carry ke phrasal verbs mein ek common thread hai — kisi kaam ko aage le jaana ya execute karna. Lekin particle badalne se meaning kaafi shift hoti hai — kuch complete karna, kuch dusri jagah lejana, ya emotionally beh jaana. Inhe context ke saath seekho.',
    verbs: [
      {
        pv: 'carry out',
        def_en: 'To perform or complete a task, plan, or instruction.',
        def_hi: 'Kisi kaam, plan, ya instruction ko execute karna ya poora karna ।',
        example: 'The soldiers carried out their orders without question.',
        note: 'Carry out aur carry off dono mein completion ka idea hai, lekin carry out zyada routine execution ke liye hai — instructions follow karna. Carry off mein ek extra element hai — something difficult ya unexpected ko successfully karna.'
      },
      {
        pv: 'carry over',
        def_en: 'To transfer something to a later time or a different situation.',
        def_hi: 'Kisi cheez ko baad ke liye ya doosri situation mein le jaana ।',
        example: 'Unused leave can be carried over to the next year.',
        note: 'Carry over aur carry out bilkul alag hain — carry over time ya context mein transfer hai, jabki carry out execution hai. Carry over ka matlab kuch postpone karna bhi ho sakta hai.'
      },
      {
        pv: 'carry away',
        def_en: 'To lose control of your emotions or actions because of excitement or enthusiasm.',
        def_hi: 'Excitement ya josh mein apne aap pe control kho dena ।',
        example: 'She got so carried away by the music that she forgot everything around her.',
        note: 'Carry away hamesha emotional loss of control ke liye hai — "got carried away" is the most common form. Yeh carry out se bilkul alag hai jo planned execution ke liye hai.'
      },
      {
        pv: 'carry off',
        def_en: 'To succeed in doing something difficult or unexpected.',
        def_hi: 'Kisi mushkil ya unexpected kaam ko successfully kar dikhana ।',
        example: 'Despite her nerves, she carried off the speech brilliantly.',
        note: 'Carry off aur carry out dono mein completion hai, lekin carry off mein ek challenge hota hai jo overcome kiya jaata hai — kuch difficult succeed karna. Carry out zyada neutral, routine execution hai.'
      }
    ],
    questions: [
      {
        id: 'cyq1',
        sentence: 'The Soldiers _____ the order of their commander without question.',
        correct: 'carried out',
        options: [
          { verb: 'carried over', hint: 'baad ke liye transfer — carry over' },
          { verb: 'carried away', hint: 'emotionally beh jaana — carry away' },
          { verb: 'carried off', hint: 'mushkil kaam succeed karna — carry off' },
          { verb: 'carried out', hint: 'kaam execute karna — carry out' }
        ],
        feedback: '"Carried out" ka matlab hai kisi instruction ya order ko execute karna — soldiers ka commander ka order follow karna iska perfect example hai. "Carried over" galat hai kyunki woh kisi cheez ko baad ke liye transfer karna hai. "Carried away" galat hai kyunki woh emotions pe control kho dena hai. "Carried off" galat hai kyunki woh kuch difficult cheez ko succeed karna hai.'
      },
      {
        id: 'cyq2',
        sentence: 'Unused vacation days can be _____ to the following year.',
        correct: 'carried over',
        options: [
          { verb: 'carried out', hint: 'kaam execute — carry out' },
          { verb: 'carried off', hint: 'mushkil succeed karna — carry off' },
          { verb: 'carried away', hint: 'emotionally beh jaana — carry away' },
          { verb: 'carried over', hint: 'baad ke liye transfer — carry over' }
        ],
        feedback: '"Carried over" tab use hota hai jab kisi cheez ko ek time period ya situation se doosre mein transfer kiya jaata hai — unused leave ka next year mein jaana iska perfect example hai. "Carried out" galat hai. "Carried off" galat hai. "Carried away" galat hai.'
      },
      {
        id: 'cyq3',
        sentence: 'I was _____ by her rapturous song.',
        correct: 'carried away',
        options: [
          { verb: 'carried off', hint: 'mushkil kaam mein succeed — carry off' },
          { verb: 'carried away', hint: 'emotionally beh jaana — carry away' },
          { verb: 'carried out', hint: 'task execute karna — carry out' },
          { verb: 'carried over', hint: 'baad ke liye transfer — carry over' }
        ],
        feedback: '"Carried away" ka matlab hai kisi cheez se itna prabhavit ho jaana ki apne emotions pe control na rahe — song se itna prabhavit hona iska classic example hai. "Carried off" galat hai. "Carried out" galat hai. "Carried over" galat hai.'
      },
      {
        id: 'cyq4',
        sentence: 'Despite her nerves, she _____ the difficult presentation brilliantly.',
        correct: 'carried off',
        options: [
          { verb: 'carried away', hint: 'emotionally beh jaana — carry away' },
          { verb: 'carried out', hint: 'routine task execute — carry out' },
          { verb: 'carried off', hint: 'mushkil kaam mein succeed — carry off' },
          { verb: 'carried over', hint: 'baad ke liye transfer — carry over' }
        ],
        feedback: '"Carried off" ka matlab hai kisi mushkil ya unexpected situation mein successfully perform karna — nervousness ke bawajood brilliant presentation dena iska perfect example hai. "Carried away" galat hai. "Carried over" galat hai. "Carried out" galat hai kyunki woh routine execution ke liye hai.'
      }
    ]
  },

  'Cash': {
    intro: 'Cash ka ek main phrasal verb hai exam mein — "cash in on." Yeh zyada tar opportunities leverage karne ke baare mein hai.',
    verbs: [
      {
        pv: 'cash in on',
        def_en: 'To take advantage of a situation to gain profit or benefit.',
        def_hi: 'Kisi situation ka faayda uthana ya usase profit lena ।',
        example: 'The company tried to cash in on the growing demand for electric vehicles.',
        note: 'Cash in on hamesha ek opportunity ya situation exploit karne ke baare mein hai — sometimes with a slightly negative connotation, like taking unfair advantage. "Cash out" se alag — woh convert assets into cash hai.'
      }
    ],
    questions: [
      {
        id: 'chq1',
        sentence: 'No efforts have been made by the Indian cricket team to _____ its vibrant image in the World Cup.',
        correct: 'cash in on',
        options: [
          { verb: 'cash up on', hint: 'galat option — cash up on' },
          { verb: 'cash off on', hint: 'galat option — cash off on' },
          { verb: 'cash in on', hint: 'faayda uthana — cash in on' },
          { verb: 'cash through in', hint: 'galat option — cash through in' }
        ],
        feedback: '"Cash in on" ka matlab hai kisi opportunity ya situation ka faayda uthana — World Cup mein vibrant image ko leverage na karna iska example hai. "Cash up on", "cash off on", aur "cash through in" koi real phrasal verbs nahi hain. Sirf "cash in on" sahi hai.'
      }
    ]
  },

  'Catch': {
    intro: 'Catch ka matlab hai pakadna — lekin "catch up on" ek alag hi race ka idea deta hai. Jab baaki sab aage nikal gaye hon aur aap peeche reh gaye ho — chahe kaam mein, news mein, ya neend mein — tab aap "catch up on" karte ho.',
    verbs: [
      {
        pv: 'catch up on',
        def_en: 'To do something that you have not been able to do until now, because you were too busy or missed it earlier.',
        def_hi: 'Woh kaam karna jo pehle busy hone ki wajah se nahi ho paya tha ।',
        example: 'I spent the whole weekend catching up on the assignments I had missed.',
        note: '"Catch up on" aur "make up for" mein fark: catch up on specific missed tasks ya content ke liye hai — kaam, neend, news. Make up for compensation ka idea deta hai — kisi ko hua nuksan ya time theek karna. "Catch up on sleep" natural; "make up for sleep" bhi hota hai lekin slightly different angle.'
      }
    ],
    questions: [
      {
        id: 'ctq1',
        sentence: 'I tried to _____ my work, but the noise kept distracting me.',
        correct: 'catch up on',
        options: [
          { verb: 'run into', hint: 'achanak milna — run into' },
          { verb: 'break down', hint: 'kharab hona — break down' },
          { verb: 'give up', hint: 'chod dena — give up' },
          { verb: 'catch up on', hint: 'missed kaam poora karna — catch up on' }
        ],
        feedback: '"Catch up on" sahi hai kyunki woh woh kaam complete karne ki koshish kar raha tha jo pehle nahi ho paya — noise distract kar raha tha matlab kuch miss hua tha. "Run into" achanak kisi se milna ya problem face karna hai. "Break down" machinery fail hona ya emotionally toot jaana hai. "Give up" chhodna hai — agar give up kare toh kaam aur peeche reh jaayega. Sirf "catch up on" yahan ka missed-work-recovery idea capture karta hai.'
      }
    ]
  },

  'Cave': {
    intro: 'Cave ka ek main phrasal verb hai jo structure collapse ke liye use hota hai. Simple hai lekin specific context mein important hai.',
    verbs: [
      {
        pv: 'cave in',
        def_en: 'If a ceiling, roof, or other structure caves in, it breaks and falls inward.',
        def_hi: 'Chhat ya structure ka andar ki taraf toot ke gir jaana ।',
        example: 'The roof of the mine caved in after the explosion.',
        note: 'Cave in sirf structural collapse ke liye hai — physically andar girna. Yeh "give in" (surrender) se confuse mat karo. Cave in can also mean to yield to pressure — "She finally caved in to their demands" — similar to give in but more informal.'
      }
    ],
    questions: [
      {
        id: 'cvq1',
        sentence: 'The walls of the temple _____ due to weak construction.',
        correct: 'caved in',
        options: [
          { verb: 'caved out', hint: 'galat option — cave out' },
          { verb: 'caved around', hint: 'galat option — cave around' },
          { verb: 'caved at', hint: 'galat option — cave at' },
          { verb: 'caved in', hint: 'andar gir jaana — cave in' }
        ],
        feedback: '"Caved in" ka matlab hai kisi structure ka andar ki taraf toot ke gir jaana — kamzor construction ki wajah se walls ka girna iska perfect example hai. "Caved out", "caved at", aur "caved around" koi real phrasal verbs nahi hain. Sirf "cave in" structure collapse ke liye use hota hai.'
      }
    ]
  },

  'Come': {
    intro: 'Come ke phrasal verbs bahut saare hain aur inke meanings surprising hote hain — sirf aana nahi, balki kisi result pe pahunchna, recover karna, ya kuch suddenly sochna bhi. "Come" ka direction hamesha "towards" hota hai, aur particle usse refine karta hai.',
    verbs: [
      {
        pv: 'come up',
        def_en: 'To be mentioned or discussed, or to arise unexpectedly.',
        def_hi: 'Kisi baat ka achanak ya discussion mein aana ।',
        example: 'The topic of salary came up during the meeting.',
        note: 'Come up aur come out dono mein kisi cheez ka saamne aana hota hai, lekin come up zyada unexpected ya discussion-based hai. Come out zyada about public revelation ya publication hai.'
      },
      {
        pv: 'come off',
        def_en: 'To happen successfully, or to become detached from something.',
        def_hi: 'Koi kaam successfully hona, ya kisi cheez se alag ho jaana ।',
        example: 'The plan didn\'t quite come off as expected.',
        note: 'Come off aur come out dono mein result ka idea hai, lekin come off zyada success/failure ke baare mein hai. Come out zyada about something being revealed or published.'
      },
      {
        pv: 'come round',
        def_en: 'To change your opinion and accept someone else\'s view, or to regain consciousness.',
        def_hi: 'Kisi ki baat se sehmat ho jaana ya behoshi se hosh mein aana ।',
        example: 'He eventually came round to her way of thinking.',
        note: 'Come round aur come around almost same hain — dono opinion change ya regaining consciousness ke liye. Come round zyada British English mein use hota hai.'
      },
      {
        pv: 'come out',
        def_en: 'To be published or released, or to become known publicly.',
        def_hi: 'Kisi cheez ka publish hona, release hona, ya publicly saamne aana ।',
        example: 'Her new book comes out next month.',
        note: 'Come out aur come up dono mein kuch saamne aata hai, lekin come out hamesha public revelation ya official release ke liye hai. Come up zyada discussion ya unexpected arising ke liye.'
      },
      {
        pv: 'come up with',
        def_en: 'To think of or produce an idea, plan, or solution.',
        def_hi: 'Koi nayi idea, plan, ya solution sochna ya banana ।',
        example: 'She came up with a brilliant solution to the problem.',
        note: 'Come up with aur come up mein fark: come up sirf discussion mein aana hai, jabki come up with ka matlab hai actively koi idea produce karna.'
      },
      {
        pv: 'come around',
        def_en: 'To change one\'s opinion or decision after some time, or to visit someone.',
        def_hi: 'Kuch time baad apni rai badalna, ya kisi ke yahan aana ।',
        example: 'After much persuasion, he finally came around to accepting the deal.',
        note: 'Come around aur come round almost same hain — opinion change ya visit ke liye. Come around zyada American English mein hai.'
      },
      {
        pv: 'come through',
        def_en: 'To successfully survive or deal with a difficult situation.',
        def_hi: 'Kisi mushkil situation se successfully nikalna ya survive karna ।',
        example: 'She came through the surgery without any complications.',
        note: 'Come through aur come round dono mein recovery ka idea ho sakta hai, lekin come through zyada about surviving a challenge hai.'
      },
      {
        pv: 'come down',
        def_en: 'To decrease in level or amount, or to move from a higher to a lower position.',
        def_hi: 'Kisi cheez ka ghattna ya neeche aana ।',
        example: 'Prices have come down significantly since last year.',
        note: 'Come down aur come down on bilkul alag hain — come down means decrease ya descend. Come down on means to criticize or punish someone harshly.'
      },
      {
        pv: 'come down on',
        def_en: 'To criticize or punish someone severely.',
        def_hi: 'Kisi ko sakht tarike se daantna ya sazaa dena ।',
        example: 'The manager came down on the team for their poor performance.',
        note: 'Come down on aur come down mein sirf "on" ka fark hai lekin meaning poori tarah badal jaati hai.'
      }
    ],
    questions: [
      {
        id: 'coq1',
        sentence: 'The question was _____ for discussion before the members during the assembly session.',
        correct: 'came up',
        options: [
          { verb: 'came off', hint: 'successfully hona — come off' },
          { verb: 'came out', hint: 'publish ya reveal hona — come out' },
          { verb: 'came up', hint: 'discussion mein aana — come up' },
          { verb: 'came round', hint: 'opinion badalna — come round' }
        ],
        feedback: '"Came up" tab use hota hai jab koi topic discussion ya meeting mein raise hota hai — assembly session mein question raise hona iska perfect example hai. "Came off" galat hai. "Came out" galat hai. "Came round" galat hai.'
      },
      {
        id: 'coq2',
        sentence: 'We planned the surprise party carefully, but it didn\'t quite _____.',
        correct: 'come off',
        options: [
          { verb: 'come out', hint: 'publish hona — come out' },
          { verb: 'come up', hint: 'discussion mein aana — come up' },
          { verb: 'come through', hint: 'mushkil se nikalna — come through' },
          { verb: 'come off', hint: 'plan succeed hona ya nahi — come off' }
        ],
        feedback: '"Come off" ka matlab hai koi plan ya event successfully hona ya nahi hona — party ka theek se na hona iska perfect example hai. "Come out" galat hai. "Come up" galat hai. "Come through" galat hai.'
      },
      {
        id: 'coq3',
        sentence: 'After hours of negotiation, they finally _____ to an agreement.',
        correct: 'came around',
        options: [
          { verb: 'came through', hint: 'mushkil se nikalna — come through' },
          { verb: 'came down', hint: 'ghattna — come down' },
          { verb: 'came up', hint: 'discussion mein aana — come up' },
          { verb: 'came around', hint: 'opinion badalna — come around' }
        ],
        feedback: '"Came around" ka matlab hai kisi position ya opinion ko accept karna — negotiation ke baad agreement pe aana iska example hai. "Came through" galat hai. "Came down" galat hai. "Came up" galat hai.'
      },
      {
        id: 'coq4',
        sentence: 'Her new novel will _____ next month.',
        correct: 'come out',
        options: [
          { verb: 'come off', hint: 'succeed hona — come off' },
          { verb: 'come out', hint: 'publish ya release hona — come out' },
          { verb: 'come up', hint: 'discussion mein aana — come up' },
          { verb: 'come round', hint: 'opinion badalna — come round' }
        ],
        feedback: '"Come out" ka matlab hai officially publish ya release hona — novel ka next month aana iska perfect example hai. "Come off" galat hai. "Come up" galat hai. "Come round" galat hai.'
      },
      {
        id: 'coq5',
        sentence: 'He _____ a brilliant idea during the brainstorming session.',
        correct: 'came up with',
        options: [
          { verb: 'came through', hint: 'mushkil se survive — come through' },
          { verb: 'came down on', hint: 'daantna ya sazaa dena — come down on' },
          { verb: 'came up with', hint: 'nayi idea sochna — come up with' },
          { verb: 'came off', hint: 'succeed hona — come off' }
        ],
        feedback: '"Came up with" ka matlab hai actively koi nayi idea ya solution produce karna — brainstorming session mein idea aana iska classic example hai. Baaki sab galat hain.'
      },
      {
        id: 'coq6',
        sentence: 'He eventually _____ to her way of thinking after much persuasion.',
        correct: 'came round',
        options: [
          { verb: 'came down', hint: 'ghattna — come down' },
          { verb: 'came off', hint: 'succeed hona — come off' },
          { verb: 'came round', hint: 'opinion badalna — come round' },
          { verb: 'came out', hint: 'reveal hona — come out' }
        ],
        feedback: '"Came round" ka matlab hai kisi ki baat se finally agree kar lena — persuasion ke baad opinion change karna iska example hai. Baaki sab galat hain.'
      },
      {
        id: 'coq7',
        sentence: 'She _____ the difficult surgery without any complications.',
        correct: 'came through',
        options: [
          { verb: 'came round', hint: 'opinion badalna ya hosh mein aana — come round' },
          { verb: 'came through', hint: 'mushkil situation se nikalna — come through' },
          { verb: 'came up with', hint: 'idea sochna — come up with' },
          { verb: 'came down on', hint: 'daantna — come down on' }
        ],
        feedback: '"Came through" ka matlab hai kisi difficult ya dangerous situation se successfully nikalna — surgery survive karna iska perfect example hai. Baaki sab galat hain.'
      },
      {
        id: 'coq8',
        sentence: 'Petrol prices have _____ significantly over the last few months.',
        correct: 'come down',
        options: [
          { verb: 'come down on', hint: 'daantna ya punish — come down on' },
          { verb: 'come off', hint: 'succeed hona — come off' },
          { verb: 'come down', hint: 'kam hona ya ghattna — come down' },
          { verb: 'come round', hint: 'opinion badalna — come round' }
        ],
        feedback: '"Come down" ka matlab hai kisi cheez ka level ya amount decrease hona — prices ka girna iska classic example hai. Baaki sab galat hain.'
      },
      {
        id: 'coq9',
        sentence: 'The manager _____ the team for their poor work on the project.',
        correct: 'came down on',
        options: [
          { verb: 'came down', hint: 'kam hona — come down' },
          { verb: 'came out', hint: 'reveal hona — come out' },
          { verb: 'came up', hint: 'discussion mein aana — come up' },
          { verb: 'came down on', hint: 'sakht daantna ya punish — come down on' }
        ],
        feedback: '"Came down on" ka matlab hai kisi ko sakht tarike se criticize ya punish karna — manager ka team ko daantna iska perfect example hai. Baaki sab galat hain.'
      }
    ]
  },

  'Cut': {
    intro: 'Cut ke phrasal verbs mein zyada tar reduce karne ya remove karne ka idea hota hai. Kuch mein kisi baat ko beech mein rok dena bhi hota hai. Particle carefully dekho — "down" reduce karta hai, "out" remove karta hai, "in" interrupt karta hai.',
    verbs: [
      {
        pv: 'cut down',
        def_en: 'To reduce the size, amount, or number of something.',
        def_hi: 'Kisi cheez ki matra, taadaad, ya size ko kam karna ।',
        example: 'You should cut down on sugar if you want to stay healthy.',
        note: 'Cut down aur cut down on mein fark sirf itna hai ki cut down on hamesha ek specific thing ke baare mein hota hai. Cut down akela bhi same matlab rakhta hai lekin sometimes physical cutting bhi ho sakta hai jaise tree cut down karna.'
      },
      {
        pv: 'cut down on',
        def_en: 'To reduce the amount of something you use, eat, or do.',
        def_hi: 'Kisi aadat ya cheez ki matra mein kami karna ।',
        example: 'The doctor advised him to cut down on salt.',
        note: 'Cut down on hamesha ek specific bad habit ya excess ke baare mein hota hai. Cut out se alag hai — cut down on matlab reduce karna, cut out matlab completely band karna.'
      },
      {
        pv: 'cut out',
        def_en: 'To remove or stop something completely, or to exclude something.',
        def_hi: 'Kisi cheez ko bilkul hata dena ya band kar dena ।',
        example: 'She cut out sugar completely from her diet.',
        note: 'Cut out aur cut down on dono mein restriction hai, lekin cut out more extreme hai — 100% stop. Cut down on sirf reduce karna hai.'
      },
      {
        pv: 'cut up',
        def_en: 'To cut something into pieces, or to cause someone emotional distress.',
        def_hi: 'Kisi cheez ke tukde karna, ya kisi ko emotionally bahut dukhi karna ।',
        example: 'She was really cut up about losing her job.',
        note: 'Cut up ka literal matlab hai pieces mein kaat dena, lekin as a feeling "cut up" matlab emotionally hurt ya distressed hona.'
      },
      {
        pv: 'cut in',
        def_en: 'To interrupt what someone is saying, or to move suddenly in front of another vehicle.',
        def_hi: 'Kisi ki baat ke beech mein bolna, ya gaadi ke aage achanak aa jaana ।',
        example: 'He kept cutting in while I was trying to explain my point.',
        note: 'Cut in aur break in dono interrupt karne ke liye use hote hain lekin cut in zyada abrupt aur rude feel karta hai.'
      }
    ],
    questions: [
      {
        id: 'cuq1',
        sentence: 'Pintu has been advised to _____ smoking by his family doctor.',
        correct: 'cut down',
        options: [
          { verb: 'cut out', hint: 'bilkul band karna — cut out' },
          { verb: 'cut up', hint: 'tukde karna ya dukhi hona — cut up' },
          { verb: 'cut down', hint: 'kam karna — cut down' },
          { verb: 'cut in', hint: 'interrupt karna — cut in' }
        ],
        feedback: '"Cut down" ka matlab hai kisi cheez ki quantity ya frequency kam karna. "Cut out" galat nahi lekin zyada extreme hai. "Cut in" bilkul galat hai. "Cut up" galat hai.'
      },
      {
        id: 'cuq2',
        sentence: 'You must _____ your expenses if you want to save money.',
        correct: 'cut down on',
        options: [
          { verb: 'cut out', hint: 'completely hatana — cut out' },
          { verb: 'cut up', hint: 'tukde ya dukhi — cut up' },
          { verb: 'cut down on', hint: 'specific cheez reduce karna — cut down on' },
          { verb: 'cut in', hint: 'interrupt — cut in' }
        ],
        feedback: '"Cut down on" tab use hota hai jab hum kisi specific cheez ki matra reduce karte hain. "Cut out" galat hai — woh completely eliminate karna hai. "Cut up" bilkul galat hai. "Cut in" galat hai.'
      },
      {
        id: 'cuq3',
        sentence: 'She decided to _____ junk food completely from her diet.',
        correct: 'cut out',
        options: [
          { verb: 'cut down', hint: 'kam karna — cut down' },
          { verb: 'cut in', hint: 'interrupt — cut in' },
          { verb: 'cut up', hint: 'tukde ya emotional hurt — cut up' },
          { verb: 'cut out', hint: 'bilkul band ya hata dena — cut out' }
        ],
        feedback: '"Cut out" ka matlab hai kisi cheez ko completely eliminate karna. "Cut down" galat hai — woh sirf reduce karna hai. Baaki sab galat hain.'
      },
      {
        id: 'cuq4',
        sentence: 'She was really _____ about losing her job.',
        correct: 'cut up',
        options: [
          { verb: 'cut out', hint: 'bilkul band — cut out' },
          { verb: 'cut down', hint: 'reduce karna — cut down' },
          { verb: 'cut up', hint: 'emotionally bahut dukhi — cut up' },
          { verb: 'cut in', hint: 'interrupt — cut in' }
        ],
        feedback: '"Cut up" ka emotional meaning hai — bahut zyada dukhi ya distressed hona. Baaki sab galat hain.'
      },
      {
        id: 'cuq5',
        sentence: 'It is a bad habit to _____ while someone is speaking.',
        correct: 'cut in',
        options: [
          { verb: 'cut down', hint: 'reduce karna — cut down' },
          { verb: 'cut out', hint: 'completely hatana — cut out' },
          { verb: 'cut up', hint: 'tukde ya dukhi hona — cut up' },
          { verb: 'cut in', hint: 'baat ke beech mein bolna — cut in' }
        ],
        feedback: '"Cut in" ka matlab hai kisi ki baat ke beech mein achanak interrupt karna. Baaki sab galat hain.'
      }
    ]
  },

  'Doze': {
    intro: 'Doze ka ek main phrasal verb hai — "doze off." Sleep ke context mein use hota hai, especially jab neend achanak aa jaaye.',
    verbs: [
      {
        pv: 'doze off',
        def_en: 'To fall asleep unintentionally, usually for a short period.',
        def_hi: 'Bina iraade ke, aksar thodi der ke liye, so jaana ।',
        example: 'He dozed off during the lecture after a sleepless night.',
        note: 'Doze off aur fall asleep almost same hain, lekin doze off zyada about unintentional, light sleep hai — jhapki aana. Fall asleep zyada general hai. "Doze off" always has that element of it happening without you intending to.'
      }
    ],
    questions: [
      {
        id: 'dzq1',
        sentence: 'She was so tired that she _____ as soon as she got home.',
        correct: 'dozed off',
        options: [
          { verb: 'passed away', hint: 'marna — pass away' },
          { verb: 'fell off', hint: 'physically girna ya decrease — fell off' },
          { verb: 'broke out', hint: 'achanak shuru hona — break out' },
          { verb: 'dozed off', hint: 'jhapki aana — doze off' }
        ],
        feedback: '"Dozed off" ka matlab hai bina iraade ke neend aa jaana — thakaan ki wajah se ghar aate hi so jaana iska perfect example hai. Baaki sab galat hain.'
      }
    ]
  },

  'Face': {
    intro: 'Face ka ek main phrasal verb hai — "face up to." Mushkil sach ka saamna karna. Simple lekin emotionally powerful phrase hai.',
    verbs: [
      {
        pv: 'face up to',
        def_en: 'To confront and accept a difficult or unpleasant situation or truth.',
        def_hi: 'Kisi mushkil ya buri situation ya sach ka saamna karna aur use accept karna ।',
        example: 'He finally faced up to the fact that he needed professional help.',
        note: 'Face up to aur get over dono mein difficult reality handle karna hai, lekin face up to zyada about acceptance and confrontation hai — sach ko sweekar karna. Get over zyada about recovering after the fact.'
      }
    ],
    questions: [
      {
        id: 'fcq1',
        sentence: 'She needs to _____ the truth before it\'s too late.',
        correct: 'face up to',
        options: [
          { verb: 'fall back on', hint: 'backup use karna — fall back on' },
          { verb: 'look forward to', hint: 'intezaar karna — look forward to' },
          { verb: 'face up to', hint: 'sach ka saamna karna — face up to' },
          { verb: 'run out of', hint: 'khatam hona — run out of' }
        ],
        feedback: '"Face up to" ka matlab hai kisi uncomfortable sach ya situation ko accept karna aur uska saamna karna. Baaki sab galat hain.'
      }
    ]
  },

  'Fall': {
    intro: 'Fall ke phrasal verbs mein zyada tar kisi cheez mein failure, relationship problems, ya expectations se peeche rehna hota hai. Particle carefully dekho — "behind" matlab peeche rehna, "for" matlab beguiled hona ya love mein padna, "out" matlab jhagda hona.',
    verbs: [
      {
        pv: 'fall behind',
        def_en: 'To fail to keep up with others or fail to complete something on time.',
        def_hi: 'Doosron se peeche reh jaana ya kaam time par poora na kar paana ।',
        example: 'He fell behind in his studies because of his illness.',
        note: 'Fall behind aur fall through dono mein failure ka idea hai, lekin fall behind zyada about pace ya progress hai. Fall through zyada about a plan or deal completely failing hai.'
      },
      {
        pv: 'fall for',
        def_en: 'To be attracted to someone and start loving them, or to be deceived by something.',
        def_hi: 'Kisi ke liye dil mein pyaar ya attraction aana, ya kisi ki chaal mein aa jaana ।',
        example: 'I can\'t believe you fell for that old trick.',
        note: 'Fall for ke do bilkul alag meanings hain — romantic attraction aur being deceived. Context se samjho.'
      },
      {
        pv: 'fall out',
        def_en: 'To have a serious argument with someone and damage a relationship.',
        def_hi: 'Kisi se badi ladaai hona aur rishta kharab ho jaana ।',
        example: 'She fell out with her best friend over money.',
        note: 'Fall out aur fall for bilkul alag hain — fall out relationship damage ke liye hai, fall for attraction ya deception ke liye.'
      },
      {
        pv: 'fall over',
        def_en: 'To lose balance and fall to the ground.',
        def_hi: 'Balance kho dena aur zameen pe gir jaana ।',
        example: 'The child fell over while running in the garden.',
        note: 'Fall over sirf physical falling ke liye hai. Fall down bhi same hai, lekin fall over zyada suggest karta hai ki koi object ya obstacle involved tha.'
      },
      {
        pv: 'fall short of',
        def_en: 'To fail to reach or meet a required standard or expectation.',
        def_hi: 'Kisi standard ya expectation tak pahunch na paana ।',
        example: 'His performance fell short of what the manager expected.',
        note: 'Fall short of hamesha ek standard ya expectation ke context mein aata hai — aur "of" zaroori hai.'
      },
      {
        pv: 'fall through',
        def_en: 'To fail to happen or be completed as planned.',
        def_hi: 'Koi plan ya deal poora na ho paana aur fail ho jaana ।',
        example: 'Our holiday plans fell through when she got sick.',
        note: 'Fall through aur fall behind dono mein failure hai, lekin fall through ek complete collapse hai — plan hi khatam ho gaya.'
      },
      {
        pv: 'fall back on',
        def_en: 'To use something or rely on someone when other options have failed.',
        def_hi: 'Jab baaki options fail ho jaayein toh kisi cheez ya insaan pe depend karna ।',
        example: 'When the business failed, he had his savings to fall back on.',
        note: 'Fall back on hamesha a backup plan ya reserve ke liye hai.'
      },
      {
        pv: 'fall in',
        def_en: 'If a roof or ceiling falls in, it drops to the ground because it is damaged.',
        def_hi: 'Chhat ya ceiling ka toote ya weak hone ki wajah se andar gir jaana ।',
        example: 'The roof of the old building fell in after the earthquake.',
        note: 'Fall in aur fall over dono physical collapse ke liye hain, lekin fall in specifically structure collapse ke liye hai — ceiling, roof.'
      },
      {
        pv: 'fall in with',
        def_en: 'To agree with or accept a plan, idea, or opinion.',
        def_hi: 'Kisi plan, idea, ya raai se sehmat hona ya use accept karna ।',
        example: 'The committee fell in with the proposal and it was approved unanimously.',
        note: 'Fall in with aur fall for dono mein acceptance hai, lekin fall in with zyada about going along with someone\'s plans. Fall for zyada about being deceived or romantically attracted.'
      },
      {
        pv: 'fall off',
        def_en: 'To fall from a position or place, or to decrease in amount or quality.',
        def_hi: 'Kisi jagah ya position se girna, ya quantity ya quality mein ghattna ।',
        example: 'Attendance at the meetings has been falling off recently.',
        note: 'Fall off aur fall down dono mein physical falling ya decrease hai, lekin fall off zyada about detaching from something or gradual decline. Fall down zyada about losing balance.'
      },
      {
        pv: 'fall down',
        def_en: 'To fall to the ground, or to be shown as unsuccessful or weak.',
        def_hi: 'Zameen pe gir jaana, ya kisi cheez mein kamzor ya naakaam sabit hona ।',
        example: 'The two brothers fell down when their father died — they couldn\'t cope.',
        note: 'Fall down aur fall over almost same hain for physical falling. Lekin fall down ka ek figurative meaning bhi hai — kisi situation ko handle na kar paana ya kisi point pe fail karna.'
      }
    ],
    questions: [
      {
        id: 'flq1',
        sentence: 'He _____ in studies owing to his illness.',
        correct: 'fell behind',
        options: [
          { verb: 'fell for', hint: 'pyaar ya dhoka — fall for' },
          { verb: 'fell out', hint: 'jhagda hona — fall out' },
          { verb: 'fell through', hint: 'plan fail hona — fall through' },
          { verb: 'fell behind', hint: 'peeche reh jaana — fall behind' }
        ],
        feedback: '"Fell behind" ka matlab hai doosron se ya expected pace se peeche reh jaana. Baaki sab galat hain.'
      },
      {
        id: 'flq2',
        sentence: 'I can\'t believe you _____ that old story about the haunted house.',
        correct: 'fell for',
        options: [
          { verb: 'fell out', hint: 'jhagda — fall out' },
          { verb: 'fell for', hint: 'kisi ki chaal mein aa jaana — fall for' },
          { verb: 'fell behind', hint: 'peeche rehna — fall behind' },
          { verb: 'fell through', hint: 'plan fail — fall through' }
        ],
        feedback: '"Fell for" ka ek important meaning hai deceived hona ya kisi ki chaal mein aa jaana. Baaki sab galat hain.'
      },
      {
        id: 'flq3',
        sentence: 'She _____ with her best friend over money.',
        correct: 'fell out',
        options: [
          { verb: 'fell behind', hint: 'peeche rehna — fall behind' },
          { verb: 'fell for', hint: 'pyaar ya dhoka — fall for' },
          { verb: 'fell out', hint: 'dost se ladai — fall out' },
          { verb: 'fell back on', hint: 'backup use karna — fall back on' }
        ],
        feedback: '"Fell out" ka matlab hai kisi se serious argument hona aur friendship damage hona. Baaki sab galat hain.'
      },
      {
        id: 'flq4',
        sentence: 'The child _____ while running in the garden.',
        correct: 'fell over',
        options: [
          { verb: 'fell in', hint: 'structure collapse — fall in' },
          { verb: 'fell out', hint: 'jhagda — fall out' },
          { verb: 'fell behind', hint: 'peeche rehna — fall behind' },
          { verb: 'fell over', hint: 'balance kho ke gir jaana — fall over' }
        ],
        feedback: '"Fell over" ka matlab hai physically balance kho ke zameen pe gir jaana. Baaki sab galat hain.'
      },
      {
        id: 'flq5',
        sentence: 'Our new accountant _____ my expectations.',
        correct: 'falls short of',
        options: [
          { verb: 'fell through', hint: 'plan fail — fall through' },
          { verb: 'falls short of', hint: 'expectation tak na pahunchna — fall short of' },
          { verb: 'falls behind', hint: 'peeche rehna — fall behind' },
          { verb: 'falls out', hint: 'jhagda — fall out' }
        ],
        feedback: '"Falls short of" ka matlab hai kisi standard ya expectation tak na pahunch paana. Baaki sab galat hain.'
      },
      {
        id: 'flq6',
        sentence: 'Our holiday plans _____ when she got sick.',
        correct: 'fell through',
        options: [
          { verb: 'fell behind', hint: 'peeche rehna — fall behind' },
          { verb: 'fell out', hint: 'jhagda — fall out' },
          { verb: 'fell through', hint: 'plan bilkul fail ho jaana — fall through' },
          { verb: 'fell for', hint: 'pyaar ya dhoka — fall for' }
        ],
        feedback: '"Fell through" ka matlab hai koi plan ya deal completely fail ho jaana. Baaki sab galat hain.'
      },
      {
        id: 'flq7',
        sentence: 'When the business failed, he had his savings to _____ .',
        correct: 'fall back on',
        options: [
          { verb: 'fall behind', hint: 'peeche rehna — fall behind' },
          { verb: 'fall through', hint: 'plan fail — fall through' },
          { verb: 'fall back on', hint: 'backup option use karna — fall back on' },
          { verb: 'fall out', hint: 'jhagda — fall out' }
        ],
        feedback: '"Fall back on" ka matlab hai jab sab fail ho jaaye toh kisi backup option ya resource pe rely karna. Baaki sab galat hain.'
      },
      {
        id: 'flq8',
        sentence: 'The roof of the old building _____ after the earthquake.',
        correct: 'fell in',
        options: [
          { verb: 'fell over', hint: 'balance kho ke girna — fall over' },
          { verb: 'fell through', hint: 'plan fail — fall through' },
          { verb: 'fell out', hint: 'jhagda — fall out' },
          { verb: 'fell in', hint: 'chhat andar gir jaana — fall in' }
        ],
        feedback: '"Fell in" ka matlab hai structure jaise roof ya ceiling ka andar ki taraf collapse ho jaana. Baaki sab galat hain.'
      },
      {
        id: 'flq9',
        sentence: 'The committee _____ the proposal, and it was approved unanimously.',
        correct: 'fell in with',
        options: [
          { verb: 'fell out', hint: 'jhagda — fall out' },
          { verb: 'fell off', hint: 'girna ya decrease — fall off' },
          { verb: 'fell through', hint: 'fail hona — fall through' },
          { verb: 'fell in with', hint: 'plan se agree karna — fall in with' }
        ],
        feedback: '"Fell in with" ka matlab hai kisi proposal ya plan se agree karna — committee ka unanimously proposal accept karna iska perfect example hai. "Fell out" galat hai. "Fell off" galat hai. "Fell through" galat hai — woh failure ke liye hai.'
      }
    ]
  },

  'Fill': {
    intro: 'Fill ka ek main phrasal verb hai jo exams mein bahut aata hai — fill out. Documents aur forms ke context mein yeh bahut important hai.',
    verbs: [
      {
        pv: 'fill out',
        def_en: 'To complete a form or document by writing information in the blank spaces.',
        def_hi: 'Kisi form ya document ke blank spaces mein information likhna ।',
        example: 'Please fill out this application form while you wait.',
        note: 'Fill out aur fill in almost same hain — dono forms complete karne ke liye. Fill out zyada American English mein use hota hai. Fill in bhi same meaning rakhta hai. "Fill in" ka ek aur meaning hai — kisi ki temporary jagah lena ya kisi ko information dena.'
      }
    ],
    questions: [
      {
        id: 'fiq1',
        sentence: 'Please _____ this application form while you wait for your turn.',
        correct: 'fill out',
        options: [
          { verb: 'fill away', hint: 'galat option — fill away' },
          { verb: 'fill on', hint: 'galat option — fill on' },
          { verb: 'fill out', hint: 'form complete karna — fill out' },
          { verb: 'fill by', hint: 'galat option — fill by' }
        ],
        feedback: '"Fill out" ka matlab hai kisi form ya document mein blank spaces mein information likhna. "Fill away", "fill on", aur "fill by" koi real phrasal verbs nahi hain.'
      }
    ]
  },

  'Get': {
    intro: 'Get ke phrasal verbs bahut common hain daily English mein — escape karna, rid hona, kisi jagah jaana, ya relationships ke baare mein. "Get" ek action verb hai jo movement aur change dono express karta hai, isliye iske phrasal verbs bhi kaafi varied hain.',
    verbs: [
      {
        pv: 'get away from',
        def_en: 'To escape from a place or situation, or to avoid being caught.',
        def_hi: 'Kisi jagah ya situation se bhaagna ya pakde jaane se bachna ।',
        example: 'The thief managed to get away from the police.',
        note: 'Get away from aur get out of dono escape ke liye hain, lekin get away from zyada physical escape hai. Get out of zyada responsibility ya obligation avoid karne ke liye hai.'
      },
      {
        pv: 'get rid of',
        def_en: 'To dispose of or remove something you no longer want.',
        def_hi: 'Kisi unwanted cheez ya insaan se chutkara paana ।',
        example: 'I need to get rid of these old clothes.',
        note: 'Get rid of aur get out of dono mein removal ka idea hai, lekin get rid of is about permanent disposal. Get out of zyada avoiding a situation ya obligation hai.'
      },
      {
        pv: 'get about',
        def_en: 'To go to different places or to move around.',
        def_hi: 'Alag alag jagahon pe jaana ya ghoomna ।',
        example: 'She gets about a lot during her vacation time.',
        note: 'Get about aur get along dono movement ya progress ke liye hain, lekin get about zyada physical movement aur travel ke liye hai.'
      },
      {
        pv: 'get along',
        def_en: 'To have a friendly relationship with someone, or to manage or progress.',
        def_hi: 'Kisi ke saath friendly rishta rakhna, ya kisi kaam mein aage badhna ।',
        example: 'She gets along well with all her colleagues.',
        note: 'Get along aur get on almost same hain — dono relationships mein compatibility ke liye.'
      },
      {
        pv: 'get after',
        def_en: 'To pursue someone, or to urge or pressure someone persistently.',
        def_hi: 'Kisi ke peeche padhna ya kisi ko baar baar karne ke liye dabaana ।',
        example: 'Mom keeps getting after me to clean my room.',
        note: 'Get after aur get along bilkul alag hain — get after nagging ya pursuing ke liye hai, get along friendly relationship ke liye.'
      },
      {
        pv: 'get on',
        def_en: 'To have a good relationship with someone, or to progress in a situation.',
        def_hi: 'Kisi ke saath accha rishta rakhna, ya kisi situation mein progress karna ।',
        example: 'How are you getting on in your new job?',
        note: 'Get on aur get along almost synonymous hain for relationships. Lekin get on ka ek extra use hai — asking about someone\'s progress.'
      },
      {
        pv: 'get over',
        def_en: 'To recover from something unpleasant, like an illness or a disappointment.',
        def_hi: 'Kisi buri cheez ya bimari se recover karna aur aage badhna ।',
        example: 'It took her months to get over the breakup.',
        note: 'Get over aur get through dono recovery ke baare mein hain, lekin get over zyada about emotional recovery hai.'
      },
      {
        pv: 'get out of',
        def_en: 'To avoid doing something, or to escape from a situation or obligation.',
        def_hi: 'Kisi kaam ya zimmedaari se bachna ya bahar nikalna ।',
        example: 'He always tries to get out of doing the dishes.',
        note: 'Get out of aur get away from dono avoidance ke baare mein hain, lekin get out of zyada obligation ya responsibility avoid karne ke liye hai.'
      },
      {
        pv: 'get on to',
        def_en: 'To become aware of or discover something, usually through investigation.',
        def_hi: 'Kisi baat ke baare mein jaankaar hona ya discover karna, aksar jaanch ke zariye ।',
        example: 'How did the police get on to the gang so quickly?',
        note: 'Get on to aur get about bilkul alag hain — get on to is discovering or investigating something, get about is traveling or moving around.'
      },
      {
        pv: 'get around',
        def_en: 'To spread or circulate, or to find a way to avoid a problem.',
        def_hi: 'Failna ya phailna, ya kisi problem se bachne ka raasta nikalna ।',
        example: 'News of the scandal got around quickly.',
        note: 'Get around aur get about similar hain for movement, lekin get around ka ek important extra meaning hai — avoiding or circumventing a problem or rule.'
      },
      {
        pv: 'get along with',
        def_en: 'To have a positive and friendly relationship with someone.',
        def_hi: 'Kisi ke saath accha aur friendly rishta rakhna ।',
        example: 'They don\'t always agree, but they get along with each other quite well.',
        note: 'Get along with aur get on almost same hain. Get along with hamesha ek person ya group ke saath use hota hai. Get on zyada general progress ke liye bhi use hota hai.'
      },
      {
        pv: 'get away with',
        def_en: 'To escape consequences or repercussions for wrongdoing.',
        def_hi: 'Galat kaam karne ke baad bhi bina sazaa ke bach jaana ।',
        example: 'He cheated in the exam but got away with it.',
        note: 'Get away with aur get away from bilkul alag hain — get away with means avoiding punishment for something wrong. Get away from means physically escaping.'
      },
      {
        pv: 'get back',
        def_en: 'To return to a place, or to retrieve something.',
        def_hi: 'Kisi jagah wapis aana, ya kisi cheez ko wapis paana ।',
        example: 'When my all policies went wrong I got back to my wife\'s savings.',
        note: 'Get back aur give back dono mein returning hai, lekin get back is about yourself returning OR retrieving something. Give back is about returning something to someone else.'
      },
      {
        pv: 'get out',
        def_en: 'To leave a place, or for information to become known.',
        def_hi: 'Kisi jagah se nikalna, ya koi baat zahir ho jaana ।',
        example: 'The news got out before the official announcement.',
        note: 'Get out aur get out of dono mein leaving hai, lekin get out is simply leaving or information leaking. Get out of is specifically avoiding an obligation.'
      }
    ],
    questions: [
      {
        id: 'gtq1',
        sentence: 'He _____ punishment as there was not enough evidence against him.',
        correct: 'got away from',
        options: [
          { verb: 'got rid of', hint: 'chutkara paana — get rid of' },
          { verb: 'got on', hint: 'relationship ya progress — get on' },
          { verb: 'got out of', hint: 'zimmedaari se bachna — get out of' },
          { verb: 'got away from', hint: 'bachna ya escape karna — get away from' }
        ],
        feedback: '"Got away from" ka matlab hai kisi situation ya consequence se bachna — evidence na hone ki wajah se punishment se bachna iska example hai. Baaki sab galat hain.'
      },
      {
        id: 'gtq2',
        sentence: 'Drink a mixture of wormwood oil and olive oil to _____ worms.',
        correct: 'get rid of',
        options: [
          { verb: 'get away from', hint: 'escape karna — get away from' },
          { verb: 'get out of', hint: 'obligation se bachna — get out of' },
          { verb: 'get over', hint: 'recover karna — get over' },
          { verb: 'get rid of', hint: 'chutkara paana — get rid of' }
        ],
        feedback: '"Get rid of" ka matlab hai kisi unwanted cheez ko permanently remove karna. Baaki sab galat hain.'
      },
      {
        id: 'gtq3',
        sentence: 'Arunima _____ a lot during her vacation time.',
        correct: 'gets about',
        options: [
          { verb: 'gets along', hint: 'friendly rehna — get along' },
          { verb: 'gets about', hint: 'kai jagah jaana — get about' },
          { verb: 'gets on', hint: 'progress ya relationship — get on' },
          { verb: 'gets after', hint: 'peeche padhna — get after' }
        ],
        feedback: '"Gets about" ka matlab hai alag alag jagahon pe jaana ya bahut ghoomna. Baaki sab galat hain.'
      },
      {
        id: 'gtq4',
        sentence: 'She _____ well with all her colleagues at work.',
        correct: 'gets along',
        options: [
          { verb: 'gets after', hint: 'peeche padhna — get after' },
          { verb: 'gets about', hint: 'ghoomna — get about' },
          { verb: 'gets over', hint: 'recover karna — get over' },
          { verb: 'gets along', hint: 'friendly rishta rakhna — get along' }
        ],
        feedback: '"Gets along" ka matlab hai kisi ke saath friendly aur comfortable rishta rakhna. Baaki sab galat hain.'
      },
      {
        id: 'gtq5',
        sentence: 'Mom keeps _____ me to clean my room.',
        correct: 'getting after',
        options: [
          { verb: 'getting along', hint: 'friendly rehna — get along' },
          { verb: 'getting over', hint: 'recover karna — get over' },
          { verb: 'getting after', hint: 'baar baar pressure dena — get after' },
          { verb: 'getting about', hint: 'ghoomna — get about' }
        ],
        feedback: '"Getting after" ka matlab hai kisi ko baar baar kuch karne ke liye pressure dena ya nag karna. Baaki sab galat hain.'
      },
      {
        id: 'gtq6',
        sentence: 'How are you _____ in your new job?',
        correct: 'getting on',
        options: [
          { verb: 'getting over', hint: 'recover karna — get over' },
          { verb: 'getting about', hint: 'ghoomna — get about' },
          { verb: 'getting on', hint: 'progress ya kaisa chal raha — get on' },
          { verb: 'getting after', hint: 'pressure dena — get after' }
        ],
        feedback: '"Getting on" ka use kisi ki progress ya situation ke baare mein poochne ke liye hota hai. Baaki sab galat hain.'
      },
      {
        id: 'gtq7',
        sentence: 'She couldn\'t _____ the idea that he was leaving for good.',
        correct: 'get over',
        options: [
          { verb: 'get out of', hint: 'obligation se bachna — get out of' },
          { verb: 'get along', hint: 'friendly rehna — get along' },
          { verb: 'get rid of', hint: 'chutkara paana — get rid of' },
          { verb: 'get over', hint: 'emotionally recover karna — get over' }
        ],
        feedback: '"Get over" ka matlab hai kisi baat se emotionally recover karna ya usse accept kar paana. Baaki sab galat hain.'
      },
      {
        id: 'gtq8',
        sentence: 'He always tries to _____ doing the dishes.',
        correct: 'get out of',
        options: [
          { verb: 'get away from', hint: 'physically escape — get away from' },
          { verb: 'get rid of', hint: 'chutkara — get rid of' },
          { verb: 'get out of', hint: 'kaam se bachna — get out of' },
          { verb: 'get over', hint: 'recover — get over' }
        ],
        feedback: '"Get out of" ka matlab hai kisi obligation ya responsibility se bachna. Baaki sab galat hain.'
      },
      {
        id: 'gtq9',
        sentence: 'It took a while for the team to _____ the underlying issue causing the software problems.',
        correct: 'get on to',
        options: [
          { verb: 'get about', hint: 'ghoomna — get about' },
          { verb: 'get around', hint: 'failna ya avoid — get around' },
          { verb: 'get on to', hint: 'discover ya aware hona — get on to' },
          { verb: 'find down', hint: 'galat option' }
        ],
        feedback: '"Get on to" ka matlab hai kisi issue ya cheez ke baare mein investigate karke aware hona — software problem ki underlying cause dhundna iska perfect example hai. "Get about" galat hai. "Get around" galat hai. "Find down" koi phrasal verb nahi hai.'
      },
      {
        id: 'gtq10',
        sentence: 'They don\'t always agree, but they _____ each other quite well.',
        correct: 'get along with',
        options: [
          { verb: 'get along with', hint: 'friendly rishta — get along with' },
          { verb: 'get on', hint: 'progress ya relationship — get on' },
          { verb: 'get out', hint: 'nikalna — get out' },
          { verb: 'get away with', hint: 'sazaa se bachna — get away with' }
        ],
        feedback: '"Get along with" ka matlab hai kisi ke saath positive aur friendly relationship rakhna — agreement na hote hue bhi saath rehna iska example hai. "Get on" bhi sahi ho sakta tha but "get along with" more specific hai. Baaki galat hain.'
      }
    ]
  },

  'Give': {
    intro: 'Give ke phrasal verbs mein giving aur surrendering dono ke ideas hain — kuch dena, kuch chhod dena, ya kisi situation ke aage jhuk jaana. "Give up" aur "give in" dono mein surrendering hai lekin different levels mein — inhe confuse mat karo.',
    verbs: [
      {
        pv: 'give up',
        def_en: 'To stop doing something, especially a habit or activity, or to surrender.',
        def_hi: 'Kisi kaam ya aadat ko band kar dena, ya haar maan lena ।',
        example: 'He finally gave up smoking after many attempts.',
        note: 'Give up aur give in dono mein surrendering hai, lekin give up zyada about abandoning an activity or habit hai. Give in zyada about yielding to pressure ya agreeing reluctantly hai.'
      },
      {
        pv: 'give in',
        def_en: 'To yield to pressure or agree to something you initially refused.',
        def_hi: 'Dabaav mein aa jaana ya pehle mana karne ke baad maan jaana ।',
        example: 'She kept asking until he finally gave in.',
        note: 'Give in aur give up dono mein yielding hai, lekin give in hamesha external pressure ke response mein hota hai. Give up more internal decision hai.'
      },
      {
        pv: 'give out',
        def_en: 'To distribute something to a number of people.',
        def_hi: 'Kai logon mein kuch baantna ya distribute karna ।',
        example: 'The teacher gave out the exam papers to the students.',
        note: 'Give out aur give away dono mein distribution hai, lekin give out zyada formal ya official distribution ke liye hai.'
      },
      {
        pv: 'give back',
        def_en: 'To return something to its owner.',
        def_hi: 'Kisi cheez ko uske malik ko wapis karna ।',
        example: 'Please give back the book you borrowed last week.',
        note: 'Give back aur give away bilkul opposite hain — give back means returning something to its original owner. Give away means permanently transferring something to someone else for free.'
      },
      {
        pv: 'give away',
        def_en: 'To donate or give something to someone for free, or to reveal a secret.',
        def_hi: 'Kisi cheez ko muft dena ya donate karna, ya koi raaz zahir kar dena ।',
        example: 'She gave away all her old clothes to charity.',
        note: 'Give away ke do meanings hain — donating freely aur revealing a secret. Give back se alag — give back return hai, give away permanent transfer hai.'
      },
      {
        pv: 'give way',
        def_en: 'To be replaced by something else, or to collapse, or to allow others to go first.',
        def_hi: 'Kisi cheez ki jagah koi aur cheez aana, ya collapse hona, ya pehle doosron ko jaane dena ।',
        example: 'Traditional stores gave way to online shopping.',
        note: 'Give way aur give in dono mein yielding hai, lekin give way zyada about being replaced or collapsing hai.'
      },
      {
        pv: 'give notice',
        def_en: 'To formally inform or warn someone about something, especially leaving a job.',
        def_hi: 'Kisi ko formally inform karna, especially naukri chhodne ke baare mein ।',
        example: 'She gave two weeks\' notice before leaving the company.',
        note: 'Give notice hamesha formal communication ke liye hai — specifically job resignation ya official warning.'
      }
    ],
    questions: [
      {
        id: 'gvq1',
        sentence: 'I am trying my best to _____ junk food.',
        correct: 'give up',
        options: [
          { verb: 'give in', hint: 'dabaav mein maan jaana — give in' },
          { verb: 'give out', hint: 'distribute karna — give out' },
          { verb: 'give away', hint: 'muft dena ya raaz batana — give away' },
          { verb: 'give up', hint: 'aadat band karna — give up' }
        ],
        feedback: '"Give up" ka matlab hai kisi aadat ya cheez ko permanently band kar dena. Baaki sab galat hain.'
      },
      {
        id: 'gvq2',
        sentence: 'She kept asking and asking until he finally _____.',
        correct: 'gave in',
        options: [
          { verb: 'gave away', hint: 'muft dena ya raaz — give away' },
          { verb: 'gave in', hint: 'dabaav mein maan jaana — give in' },
          { verb: 'gave up', hint: 'aadat chhodna — give up' },
          { verb: 'gave back', hint: 'wapis karna — give back' }
        ],
        feedback: '"Gave in" ka matlab hai kisi ke persistent pressure mein aa jaana. Baaki sab galat hain.'
      },
      {
        id: 'gvq3',
        sentence: 'The teacher _____ the exam papers to all the students.',
        correct: 'gave out',
        options: [
          { verb: 'gave out', hint: 'official distribution — give out' },
          { verb: 'gave away', hint: 'muft dena — give away' },
          { verb: 'gave back', hint: 'wapis karna — give back' },
          { verb: 'gave up', hint: 'chhod dena — give up' }
        ],
        feedback: '"Gave out" ka matlab hai kai logon mein formally distribute karna. Baaki sab galat hain.'
      },
      {
        id: 'gvq4',
        sentence: 'Please _____ the book you borrowed from me last week.',
        correct: 'give back',
        options: [
          { verb: 'give up', hint: 'chhod dena — give up' },
          { verb: 'give away', hint: 'muft dena — give away' },
          { verb: 'give out', hint: 'distribute karna — give out' },
          { verb: 'give back', hint: 'wapis karna — give back' }
        ],
        feedback: '"Give back" ka matlab hai kisi borrowed cheez ko uske owner ko wapis karna. Baaki sab galat hain.'
      },
      {
        id: 'gvq5',
        sentence: 'She has _____ her money and jewellery to help the poor.',
        correct: 'given away',
        options: [
          { verb: 'given back', hint: 'wapis karna — give back' },
          { verb: 'given in', hint: 'dabaav mein maan jaana — give in' },
          { verb: 'given away', hint: 'donate karna — give away' },
          { verb: 'given up', hint: 'chhod dena — give up' }
        ],
        feedback: '"Given away" ka matlab hai kisi cheez ko muft mein ya donate karna. Baaki sab galat hain.'
      },
      {
        id: 'gvq6',
        sentence: 'Traditional brick-and-mortar stores _____ to online shopping.',
        correct: 'gave way',
        options: [
          { verb: 'gave up', hint: 'quit karna — give up' },
          { verb: 'gave in', hint: 'pressure mein maan jaana — give in' },
          { verb: 'gave way', hint: 'kisi cheez ki jagah lena — give way' },
          { verb: 'gave out', hint: 'distribute karna — give out' }
        ],
        feedback: '"Gave way" ka matlab hai kisi cheez ki jagah koi aur cheez aa jaana. Baaki sab galat hain.'
      },
      {
        id: 'gvq7',
        sentence: 'She _____ two weeks before leaving the company.',
        correct: 'gave notice',
        options: [
          { verb: 'gave away', hint: 'muft dena — give away' },
          { verb: 'gave notice', hint: 'naukri chhodne ka formal inform — give notice' },
          { verb: 'gave out', hint: 'distribute karna — give out' },
          { verb: 'gave back', hint: 'wapis karna — give back' }
        ],
        feedback: '"Gave notice" ka matlab hai formally inform karna ki tum naukri chhod rahe ho. Baaki sab galat hain.'
      },
      {
        id: 'gvq8',
        sentence: 'One of the children stood at the door to _____ if he saw the apparitor coming.',
        correct: 'give notice',
        options: [
          { verb: 'give notice', hint: 'inform ya warn karna — give notice' },
          { verb: 'give advice', hint: 'salah dena — give advice' },
          { verb: 'give thought', hint: 'sochna — give thought' },
          { verb: 'give a hand', hint: 'madad karna — give a hand' }
        ],
        feedback: '"Give notice" ka matlab hai kisi ko kisi aane wali cheez ke baare mein inform ya warn karna — officer ke aane par khabar dena iska example hai. "Give advice" galat hai. "Give thought" galat hai. "Give a hand" galat hai — woh help karne ke liye hai.'
      }
    ]
  },

  'Go': {
    intro: 'Go ke phrasal verbs mein movement ke saath saath progress, explosion, aur agreement ke ideas bhi hain. "Go" ka basic matlab aage badhna hai, lekin particle is direction ko completely badal sakta hai.',
    verbs: [
      {
        pv: 'go over',
        def_en: 'To review or examine something carefully.',
        def_hi: 'Kisi cheez ko dhyan se dobara dekhna ya review karna ।',
        example: 'Please go over your essay before submitting it.',
        note: 'Go over aur go through dono mein careful examination hai, lekin go over zyada quick review ke liye hai. Go through zyada thorough, complete examination hai.'
      },
      {
        pv: 'go through',
        def_en: 'To experience something difficult, or to examine something thoroughly.',
        def_hi: 'Kisi mushkil situation se guzarna, ya kisi cheez ko thoroughly check karna ।',
        example: 'She went through a very difficult time after losing her job.',
        note: 'Go through aur go over dono review ke liye hain, lekin go through ka ek important emotional meaning bhi hai — painful experience se guzarna.'
      },
      {
        pv: 'go off',
        def_en: 'To explode or make a sudden loud noise, or for food to become bad.',
        def_hi: 'Bomb ya alarm ka achanak bajana, ya khana kharab ho jaana ।',
        example: 'The alarm went off at 6am and woke everyone up.',
        note: 'Go off ka food wala meaning bhi important hai — "the milk has gone off" means spoiled.'
      },
      {
        pv: 'go down',
        def_en: 'To decrease in level or amount, or to move to a lower position.',
        def_hi: 'Kisi cheez ka kam hona ya neeche jaana ।',
        example: 'The temperature went down sharply last night.',
        note: 'Go down aur go off bilkul alag hain — go down decrease ya descent ke liye, go off explosion ya spoilage ke liye.'
      },
      {
        pv: 'go along with',
        def_en: 'To agree with or support an idea, plan, or decision.',
        def_hi: 'Kisi idea, plan, ya decision se agree karna ya support dena ।',
        example: 'She didn\'t fully agree but decided to go along with the plan.',
        note: 'Go along with zyada agreement ya compliance ke liye hai — support karna bhale puri tarah agree na karo.'
      },
      {
        pv: 'go on',
        def_en: 'To continue doing something, or to happen.',
        def_hi: 'Kuch karte rehna ya koi event hona ।',
        example: 'Please go on — I\'m listening carefully.',
        note: 'Go on sirf continuation ke liye hai. "What\'s going on?" ek common phrase hai jisme go on ka "happening" meaning use hota hai.'
      },
      {
        pv: 'go away',
        def_en: 'To leave a place or person, or to stop existing.',
        def_hi: 'Kisi jagah ya insaan ko chhodna, ya khatam ho jaana ।',
        example: 'The wizard accidentally prompted the fire alarm to go away — wait, to go off!',
        note: 'Go away aur go off dono mein leaving hai, lekin go away zyada about departing from a person or place. Go off zyada about alarms or explosions. "Go away!" is also used to tell someone to leave.'
      },
      {
        pv: 'go under',
        def_en: 'To be overwhelmed, destroyed, or defeated; for a business to fail.',
        def_hi: 'Dab jaana, khatam ho jaana, ya kisi business ka fail ho jaana ।',
        example: 'Several small businesses went under during the pandemic.',
        note: 'Go under aur go down dono mein failure ya sinking hai, lekin go under zyada about complete failure or destruction hai — kuch permanently end hona.'
      },
      {
        pv: 'go ahead',
        def_en: 'To proceed or to start doing something.',
        def_hi: 'Aage badhna ya kuch karna shuru karna ।',
        example: 'He plans to go ahead with the training next week.',
        note: 'Go ahead aur go on dono mein proceeding hai, lekin go ahead zyada about getting permission or deciding to proceed with something specific. Go on zyada about continuing an existing action.'
      }
    ],
    questions: [
      {
        id: 'goq1',
        sentence: 'The teacher asked the students to _____ their essays before the deadline.',
        correct: 'go over',
        options: [
          { verb: 'go off', hint: 'blast ya kharab hona — go off' },
          { verb: 'go down', hint: 'kam hona — go down' },
          { verb: 'go through', hint: 'deeply check karna — go through' },
          { verb: 'go over', hint: 'review karna — go over' }
        ],
        feedback: '"Go over" ka matlab hai kisi cheez ko submit karne se pehle ek baar dhyan se review karna. Baaki sab galat hain.'
      },
      {
        id: 'goq2',
        sentence: 'She _____ a very difficult time after losing her job.',
        correct: 'went through',
        options: [
          { verb: 'went over', hint: 'review karna — go over' },
          { verb: 'went on', hint: 'continue karna — go on' },
          { verb: 'went through', hint: 'mushkil se guzarna — go through' },
          { verb: 'went down', hint: 'kam hona — go down' }
        ],
        feedback: '"Went through" ka ek important meaning hai kisi painful ya difficult situation ko experience karna. Baaki sab galat hain.'
      },
      {
        id: 'goq3',
        sentence: 'The alarm _____ at 6am and woke everyone up.',
        correct: 'went off',
        options: [
          { verb: 'went down', hint: 'kam hona — go down' },
          { verb: 'went off', hint: 'achanak bajana — go off' },
          { verb: 'went on', hint: 'continue ya happen — go on' },
          { verb: 'went over', hint: 'review — go over' }
        ],
        feedback: '"Went off" ka matlab hai alarm ya bomb ka achanak bajana ya phatna. Baaki sab galat hain.'
      },
      {
        id: 'goq4',
        sentence: 'The temperature _____ sharply last night.',
        correct: 'went down',
        options: [
          { verb: 'went off', hint: 'blast ya kharab hona — go off' },
          { verb: 'went along with', hint: 'agree karna — go along with' },
          { verb: 'went through', hint: 'mushkil se guzarna — go through' },
          { verb: 'went down', hint: 'kam ya neeche jaana — go down' }
        ],
        feedback: '"Went down" ka matlab hai level ya amount ka decrease hona. Baaki sab galat hain.'
      },
      {
        id: 'goq5',
        sentence: 'She didn\'t fully agree but decided to _____ the plan.',
        correct: 'go along with',
        options: [
          { verb: 'go over', hint: 'review karna — go over' },
          { verb: 'go through', hint: 'mushkil se guzarna — go through' },
          { verb: 'go along with', hint: 'agree ya support karna — go along with' },
          { verb: 'go off', hint: 'blast ya kharab — go off' }
        ],
        feedback: '"Go along with" ka matlab hai kisi decision ya plan ke saath comply karna, chahe poori tarah agree na karo. Baaki sab galat hain.'
      },
      {
        id: 'goq6',
        sentence: 'Please _____, I\'m listening carefully.',
        correct: 'go on',
        options: [
          { verb: 'go over', hint: 'review karna — go over' },
          { verb: 'go along with', hint: 'agree karna — go along with' },
          { verb: 'go on', hint: 'bolte rehna — go on' },
          { verb: 'go down', hint: 'kam hona — go down' }
        ],
        feedback: '"Go on" ka matlab hai continue karna — kisi se kehna ki bolte raho. Baaki sab galat hain.'
      },
      {
        id: 'goq7',
        sentence: 'The wizard accidentally prompted the fire alarm to _____.',
        correct: 'go off',
        options: [
          { verb: 'go away', hint: 'chale jaana — go away' },
          { verb: 'go under', hint: 'fail ya khatam hona — go under' },
          { verb: 'go off', hint: 'alarm bajana — go off' },
          { verb: 'go above', hint: 'galat option' }
        ],
        feedback: '"Go off" ka matlab hai alarm ya bomb ka achanak bajana — fire alarm trigger hona iska perfect example hai. "Go away" galat hai — woh departure ke liye hai. "Go under" galat hai — woh failure ke liye hai. "Go above" koi standard phrasal verb nahi hai.'
      },
      {
        id: 'goq8',
        sentence: 'He plans to _____ with the training next week.',
        correct: 'go ahead',
        options: [
          { verb: 'fall back', hint: 'retreat karna — fall back' },
          { verb: 'take over', hint: 'control lena — take over' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'go ahead', hint: 'aage badhna — go ahead' }
        ],
        feedback: '"Go ahead" ka matlab hai proceed karna ya kuch karna shuru karna — training ke saath aage badhna iska perfect example hai. Baaki sab galat hain.'
      }
    ]
  },

  'Hand': {
    intro: 'Hand ke phrasal verbs mein giving aur submitting ke ideas hain. Simple hain lekin important — "hand in" aur "hand up" mein sirf position ka fark hai lekin meaning kaafi alag hai.',
    verbs: [
      {
        pv: 'hand in',
        def_en: 'To give something to a person in authority, especially a piece of work for assessment.',
        def_hi: 'Kisi authority ke paas koi kaam ya cheez submit karna ।',
        example: 'All students must hand in their essays before Friday.',
        note: 'Hand in aur pass in almost same hain — dono submission ke liye hain. Hand in zyada common hai. "Hand in your notice" bhi ek important phrase hai — resign karna.'
      },
      {
        pv: 'hand up',
        def_en: 'To raise your hand or hold something up in the air.',
        def_hi: 'Haath upar uthana ya kisi cheez ko upar uthana ।',
        example: 'She handed up the documents from the lower shelf.',
        note: 'Hand up aur hand in bilkul alag hain — hand up physically upward movement hai, hand in submission hai. "Hands up!" ek common command hai — surrendering ya attention ke liye haath upar karo.'
      }
    ],
    questions: [
      {
        id: 'hdq1',
        sentence: 'The teacher asked the students to _____ their essays before the deadline.',
        correct: 'hand in',
        options: [
          { verb: 'hand up', hint: 'upar uthana — hand up' },
          { verb: 'hand over', hint: 'transfer karna — hand over' },
          { verb: 'hand in', hint: 'submit karna — hand in' },
          { verb: 'hand out', hint: 'distribute karna — hand out' }
        ],
        feedback: '"Hand in" ka matlab hai assignment ya work ko authority ke paas submit karna. Baaki sab galat hain.'
      },
      {
        id: 'hdq2',
        sentence: 'She _____ the documents from the lower shelf.',
        correct: 'handed up',
        options: [
          { verb: 'handed in', hint: 'submit karna — hand in' },
          { verb: 'handed out', hint: 'distribute karna — hand out' },
          { verb: 'handed up', hint: 'upar karna — hand up' },
          { verb: 'handed over', hint: 'transfer karna — hand over' }
        ],
        feedback: '"Handed up" ka matlab hai kisi cheez ko physically upar uthana. Baaki sab galat hain.'
      }
    ]
  },

  'Head': {
    intro: 'Head ke phrasal verbs mein direction aur movement ke ideas hain — kisi jagah ki taraf jaana, wahan se nikalna, ya neeche jaana. Simple particle change se meaning kaafi shift hoti hai.',
    verbs: [
      {
        pv: 'head for',
        def_en: 'To move towards a place or situation.',
        def_hi: 'Kisi jagah ya situation ki taraf badhna ।',
        example: 'It was apparent that the girl was heading for serious trouble.',
        note: 'Head for aur head out dono mein movement hai, lekin head for zyada about direction — towards a specific destination ya situation hai.'
      },
      {
        pv: 'head out',
        def_en: 'To leave a place.',
        def_hi: 'Kisi jagah se nikalna ya jaana ।',
        example: 'It\'s getting late — let\'s head out.',
        note: 'Head out aur head for bilkul alag hain — head out means leaving, head for means going towards.'
      },
      {
        pv: 'head down',
        def_en: 'To move towards a lower position or to lose value.',
        def_hi: 'Neeche ki taraf jaana ya value mein girna ।',
        example: 'Stock markets are heading down this week.',
        note: 'Head down aur head for dono mein direction hai, lekin head down specifically downward movement ya decrease ke liye hai.'
      }
    ],
    questions: [
      {
        id: 'heq1',
        sentence: 'It was apparent that the girl was _____ a serious disaster.',
        correct: 'heading for',
        options: [
          { verb: 'heading out', hint: 'jagah se nikalna — head out' },
          { verb: 'heading down', hint: 'neeche jaana ya giranaa — head down' },
          { verb: 'heading away', hint: 'duur jaana — head away' },
          { verb: 'heading for', hint: 'kisi situation ki taraf badhna — head for' }
        ],
        feedback: '"Heading for" ka matlab hai kisi jagah ya situation ki taraf badhna. Baaki sab galat hain.'
      },
      {
        id: 'heq2',
        sentence: 'It\'s getting late — let\'s _____.',
        correct: 'head out',
        options: [
          { verb: 'head for', hint: 'kisi jagah ki taraf — head for' },
          { verb: 'head down', hint: 'neeche jaana — head down' },
          { verb: 'head back', hint: 'wapis jaana — head back' },
          { verb: 'head out', hint: 'nikalna — head out' }
        ],
        feedback: '"Head out" ka matlab hai kisi jagah se informal tarike se nikalna ya departure karna. Baaki sab galat hain.'
      },
      {
        id: 'heq3',
        sentence: 'Stock markets are _____ this week.',
        correct: 'heading down',
        options: [
          { verb: 'heading for', hint: 'kisi situation ki taraf — head for' },
          { verb: 'heading out', hint: 'nikalna — head out' },
          { verb: 'heading back', hint: 'wapis jaana — head back' },
          { verb: 'heading down', hint: 'value mein girna — head down' }
        ],
        feedback: '"Heading down" ka matlab hai value ya level mein girna. Baaki sab galat hain.'
      }
    ]
  },

  'Hold': {
    intro: 'Hold ke phrasal verbs mein zyada tar rokne, dabaane, ya kisi cheez ko maintain karne ke ideas hain. "Hold on" aur "hold out" mein dono mein waiting ya persistence hai lekin context kaafi different hai — dhyan se seekho.',
    verbs: [
      {
        pv: 'hold out',
        def_en: 'To endure or resist in a difficult or dangerous situation.',
        def_hi: 'Kisi mushkil ya khatarnak situation mein tike rehna ya resist karna ।',
        example: 'The soldiers held out for several weeks without supplies.',
        note: 'Hold out aur hold on dono mein persisting ka idea hai, lekin hold out zyada dramatic situations ke liye hai. Hold on zyada everyday "wait" ya "don\'t give up" ke liye.'
      },
      {
        pv: 'hold back',
        def_en: 'To restrain or prevent someone or something from moving forward.',
        def_hi: 'Kisi ko ya kuch ko aage badhne se rokna ya apne aap ko rokna ।',
        example: 'He held back his tears during the farewell speech.',
        note: 'Hold back aur hold off dono mein restraint hai, lekin hold back zyada about preventing forward movement ya suppressing emotions hai.'
      },
      {
        pv: 'hold on',
        def_en: 'To wait for a short time, or to keep holding something tightly.',
        def_hi: 'Thodi der rukna ya kisi cheez ko mazbooti se pakde rehna ।',
        example: 'Hold on, I\'ll be with you in just a minute.',
        note: 'Hold on aur hold out dono mein persisting hai, lekin hold on zyada casual "wait" ya everyday persistence ke liye hai.'
      },
      {
        pv: 'hold off',
        def_en: 'To delay or postpone something.',
        def_hi: 'Kisi kaam ko baad ke liye delay ya postpone karna ।',
        example: 'Can you hold off on the decision until tomorrow?',
        note: 'Hold off aur hold back dono mein delaying ka element hai, lekin hold off zyada explicitly about postponing a specific action hai.'
      },
      {
        pv: 'hold onto',
        def_en: 'To keep something that is important or useful, or to grip something tightly.',
        def_hi: 'Kisi zaroori ya useful cheez ko apne paas rakhna, ya mazbooti se pakde rehna ।',
        example: 'Hold onto that idea — it could be very useful someday.',
        note: 'Hold onto aur hold on similar lagte hain, lekin hold onto zyada about keeping or retaining something valuable hai.'
      },
      {
        pv: 'hold to',
        def_en: 'To make someone keep a promise or commitment.',
        def_hi: 'Kisi ko apne vaade ya commitment ke liye zimmedaar rakhna ।',
        example: 'We will hold him to the promise he made last week.',
        note: 'Hold to specifically someone else ko unki commitment pe rokna hai — accountability.'
      },
      {
        pv: 'hold against',
        def_en: 'To allow something negative to make you have a lower opinion of someone.',
        def_hi: 'Kisi ki koi galti ya baat ko unke khilaf rakhna aur unhe bura maanna ।',
        example: 'I hope you won\'t hold my mistake against me.',
        note: 'Hold against ka meaning purely negative hai — past mistakes ko grudge ki tarah rakhna.'
      }
    ],
    questions: [
      {
        id: 'hlq1',
        sentence: 'The Ukrainian soldiers _____ for several weeks.',
        correct: 'held out',
        options: [
          { verb: 'held on', hint: 'wait ya pakde rehna — hold on' },
          { verb: 'held off', hint: 'delay karna — hold off' },
          { verb: 'held back', hint: 'rokna — hold back' },
          { verb: 'held out', hint: 'mushkil mein tike rehna — hold out' }
        ],
        feedback: '"Held out" ka matlab hai kisi dangerous ya difficult situation mein tike rehna. Baaki sab galat hain.'
      },
      {
        id: 'hlq2',
        sentence: 'He _____ his tears during the farewell speech.',
        correct: 'held back',
        options: [
          { verb: 'held out', hint: 'resist karna — hold out' },
          { verb: 'held onto', hint: 'koi cheez rakhna — hold onto' },
          { verb: 'held back', hint: 'emotions dabana — hold back' },
          { verb: 'held off', hint: 'delay karna — hold off' }
        ],
        feedback: '"Held back" ka matlab hai apne emotions ya expressions ko dabana ya rokna. Baaki sab galat hain.'
      },
      {
        id: 'hlq3',
        sentence: '_____, I\'ll be with you in just a minute.',
        correct: 'Hold on',
        options: [
          { verb: 'Hold out', hint: 'resist karna — hold out' },
          { verb: 'Hold back', hint: 'rokna — hold back' },
          { verb: 'Hold on', hint: 'thodi der rukna — hold on' },
          { verb: 'Hold against', hint: 'grudge rakhna — hold against' }
        ],
        feedback: '"Hold on" ka everyday meaning hai "thodi der ruko". Baaki sab galat hain.'
      },
      {
        id: 'hlq4',
        sentence: 'Can you _____ on the decision until tomorrow?',
        correct: 'hold off',
        options: [
          { verb: 'hold back', hint: 'rokna — hold back' },
          { verb: 'hold on', hint: 'wait — hold on' },
          { verb: 'hold out', hint: 'resist karna — hold out' },
          { verb: 'hold off', hint: 'delay karna — hold off' }
        ],
        feedback: '"Hold off" ka matlab hai kisi specific action ko delay ya postpone karna. Baaki sab galat hain.'
      },
      {
        id: 'hlq5',
        sentence: '_____ that thought. It will be a great idea someday.',
        correct: 'Hold onto',
        options: [
          { verb: 'Hold to', hint: 'vaada nibhana — hold to' },
          { verb: 'Hold on', hint: 'wait — hold on' },
          { verb: 'Hold back', hint: 'rokna — hold back' },
          { verb: 'Hold onto', hint: 'useful cheez apne paas rakhna — hold onto' }
        ],
        feedback: '"Hold onto" ka matlab hai kisi valuable ya useful cheez ko apne paas rakhna. Baaki sab galat hain.'
      },
      {
        id: 'hlq6',
        sentence: 'We will _____ him _____ the promise he made last week.',
        correct: 'hold to',
        options: [
          { verb: 'hold onto', hint: 'cheez retain karna — hold onto' },
          { verb: 'hold back', hint: 'rokna — hold back' },
          { verb: 'hold out', hint: 'resist karna — hold out' },
          { verb: 'hold to', hint: 'vaade ke liye zimmedaar rakhna — hold to' }
        ],
        feedback: '"Hold to" ka matlab hai kisi ko unki commitment ya promise ke liye accountable rakhna. Baaki sab galat hain.'
      },
      {
        id: 'hlq7',
        sentence: 'I hope you won\'t _____ my mistake _____ me.',
        correct: 'hold against',
        options: [
          { verb: 'hold out', hint: 'resist karna — hold out' },
          { verb: 'hold on', hint: 'wait — hold on' },
          { verb: 'hold to', hint: 'vaada nibhana — hold to' },
          { verb: 'hold against', hint: 'bura maanna — hold against' }
        ],
        feedback: '"Hold against" ka matlab hai kisi ki galti ya past action ko unke khilaf use karna ya unse grudge rakhna. Baaki sab galat hain.'
      },
      {
        id: 'hlq8',
        sentence: 'When I reached my room, I couldn\'t _____ back my smile.',
        correct: 'hold',
        options: [
          { verb: 'hold', hint: 'hold back — rokna' },
          { verb: 'squeeze', hint: 'nichod na — squeeze' },
          { verb: 'held', hint: 'galat tense here' },
          { verb: 'kept', hint: 'rakhna — keep' }
        ],
        feedback: '"Hold back" ka matlab hai kisi emotion ya expression ko rok lena — smile rok lena iska example hai. "Squeeze" galat hai. "Held" past tense hai — structure "couldn\'t + base verb" chahiye. "Kept" galat phrasal combination hai.'
      }
    ]
  },

  'Iron': {
    intro: 'Iron ka ek main phrasal verb hai jo problems solve karne ke liye use hota hai — "iron out." Simple lekin very useful phrase hai.',
    verbs: [
      {
        pv: 'iron out',
        def_en: 'To solve problems or remove difficulties from a situation.',
        def_hi: 'Kisi situation ke problems ya mushkilon ko solve karna ।',
        example: 'They met to iron out the differences between them.',
        note: 'Iron out ka imagery kapde se aata hai — jaise kapdon ki silatvaten door karna. Iron through ya iron aside jaise forms galat hain — sirf "iron out" correct hai.'
      }
    ],
    questions: [
      {
        id: 'irq1',
        sentence: 'The driver very subtly _____ the traffic violation he committed.',
        correct: 'ironed out',
        options: [
          { verb: 'ironed through', hint: 'galat option' },
          { verb: 'ironed out', hint: 'problem solve karna — iron out' },
          { verb: 'ironed in', hint: 'galat option' },
          { verb: 'ironed aside', hint: 'galat option' }
        ],
        feedback: '"Ironed out" ka matlab hai kisi problem ya conflict ko smoothly resolve karna. "Ironed through", "ironed in", aur "ironed aside" koi real phrasal verbs nahi hain.'
      }
    ]
  },

  'Keep': {
    intro: 'Keep ke phrasal verbs mein distance maintain karna ya pace maintain karna ka idea hota hai. Simple lekin important — "keep away from" aur "keep up" ka context samajhna zaroori hai.',
    verbs: [
      {
        pv: 'keep away from',
        def_en: 'To avoid going near or getting involved with something or someone.',
        def_hi: 'Kisi cheez ya insaan se door rehna ya involve na hona ।',
        example: 'His uncle advised him to keep away from the controversy.',
        note: 'Keep away from aur keep up with bilkul alag hain — keep away from avoidance ke liye hai, keep up with pace maintain karne ke liye.'
      },
      {
        pv: 'keep up',
        def_en: 'To continue at the same pace or level without falling behind.',
        def_hi: 'Doosron ke saath ya kisi standard ke saath pace maintain karna ।',
        example: 'She was walking so fast that I couldn\'t keep up.',
        note: 'Keep up aur keep up with almost same hain — keep up akela use hota hai bina object ke.'
      },
      {
        pv: 'keep up with',
        def_en: 'To stay at the same level or pace as someone or something.',
        def_hi: 'Kisi ke saath ya kisi cheez ke saath pace ya level maintain karna ।',
        example: 'It\'s hard to keep up with all the latest technology.',
        note: 'Keep up with aur keep away from exact opposites hain in spirit — one maintains closeness and pace, the other maintains distance.'
      }
    ],
    questions: [
      {
        id: 'kpq1',
        sentence: 'His uncle advised Naveen to _____ involving himself in the controversy.',
        correct: 'keep away from',
        options: [
          { verb: 'keep up', hint: 'pace maintain — keep up' },
          { verb: 'keep away from', hint: 'door rehna — keep away from' },
          { verb: 'keep up with', hint: 'pace maintain karna — keep up with' },
          { verb: 'keep out of', hint: 'bahar rehna — keep out of' }
        ],
        feedback: '"Keep away from" ka matlab hai kisi cheez ya situation se door rehna aur involve na hona. Baaki sab galat hain.'
      },
      {
        id: 'kpq2',
        sentence: 'She was walking so fast that I couldn\'t _____.',
        correct: 'keep up',
        options: [
          { verb: 'keep away from', hint: 'door rehna — keep away from' },
          { verb: 'keep back', hint: 'peeche rehna — keep back' },
          { verb: 'keep up with', hint: 'kisi ke saath pace — keep up with' },
          { verb: 'keep up', hint: 'saath chalna — keep up' }
        ],
        feedback: '"Keep up" ka matlab hai kisi ke saath pace maintain karna. Akela "keep up" natural hai jab context clear ho. Baaki sab galat hain.'
      },
      {
        id: 'kpq3',
        sentence: 'It\'s hard to _____ all the latest technology.',
        correct: 'keep up with',
        options: [
          { verb: 'keep away from', hint: 'door rehna — keep away from' },
          { verb: 'keep up', hint: 'pace maintain — keep up' },
          { verb: 'keep up with', hint: 'kisi cheez ke saath pace maintain — keep up with' },
          { verb: 'keep pace with', hint: 'saath chalna — keep pace with' }
        ],
        feedback: '"Keep up with" ka matlab hai kisi specific cheez ke saath pace ya level maintain karna. Baaki sab galat hain.'
      }
    ]
  },

  'Knock': {
    intro: 'Knock ke phrasal verbs mein force se kuch band karna ya kisi ko giraa dena ke ideas hain. Simple but important for exam.',
    verbs: [
      {
        pv: 'knock out',
        def_en: 'To cause a person to become unconscious, or to cause a failure or disruption in a system.',
        def_hi: 'Kisi ko behosh karna, ya kisi system mein disruption ya failure laana ।',
        example: 'Since the storm knocked out the power, we\'ve been using candles.',
        note: 'Knock out aur knock over bilkul alag hain — knock out means unconscious karna ya system failure. Knock over means physically topple karna.'
      },
      {
        pv: 'knock over',
        def_en: 'To hit someone or something and make them fall to the ground.',
        def_hi: 'Kisi ko ya kisi cheez ko maar ke zameen pe giraa dena ।',
        example: 'Be careful not to knock over that vase.',
        note: 'Knock over aur knock out dono mein impact hai, lekin knock over sirf physical toppling ke liye hai.'
      },
      {
        pv: 'knock down',
        def_en: 'To reduce the price of something, or to demolish a building.',
        def_hi: 'Kisi cheez ki keemat kam karna, ya kisi imarat ko todna ।',
        example: 'The seller knocked down the price of the car after some negotiation.',
        note: 'Knock down aur pull down dono demolition ke liye hain, lekin knock down ka ek important extra meaning hai — price reduce karna. Pull down zyada specifically buildings demolish karne ke liye.'
      },
      {
        pv: 'knock off',
        def_en: 'To stop working, or to complete a task quickly.',
        def_hi: 'Kaam khatam karna ya ruk jaana, ya kuch jaldi se kar lena ।',
        example: 'We usually knock off work at five o\'clock.',
        note: 'Knock off aur knock out bilkul alag hain — knock off is about stopping work or finishing something. Knock out is about disabling someone or something.'
      },
      {
        pv: 'knock up',
        def_en: 'To awaken someone by knocking on their door.',
        def_hi: 'Kisi ke darwaze pe dastak dekar unhe jagana ।',
        example: 'Can you knock me up at six tomorrow morning?',
        note: 'Knock up (British English) means to wake someone by knocking. Knock down se alag — knock down reduces or demolishes, knock up wakes someone.'
      },
      {
        pv: 'knock about',
        def_en: 'To treat someone roughly or to move around from place to place.',
        def_hi: 'Kisi ke saath rough tarike se behave karna ya idhar udhar ghoomna ।',
        example: 'He used to knock his classmates about without any reason.',
        note: 'Knock about aur knock around almost same hain — dono about rough treatment ya casual wandering. Knock about zyada British English mein common hai.'
      }
    ],
    questions: [
      {
        id: 'knq1',
        sentence: 'Since the storm _____ the power, we\'ve been using candles to light our home.',
        correct: 'knocked out',
        options: [
          { verb: 'knocked out', hint: 'system fail karna — knock out' },
          { verb: 'knocked over', hint: 'physically giraa dena — knock over' },
          { verb: 'knocked away', hint: 'galat option' },
          { verb: 'knocked in', hint: 'galat option' }
        ],
        feedback: '"Knocked out" ka matlab hai kisi system ya facility mein disruption ya failure laana — toofan ka bijli band kar dena iska perfect example hai. "Knocked over" galat hai. "Knocked away" aur "knocked in" real phrasal verbs nahi hain.'
      },
      {
        id: 'knq2',
        sentence: 'Be careful not to _____ that vase on the shelf.',
        correct: 'knock over',
        options: [
          { verb: 'knock out', hint: 'behosh karna ya system fail — knock out' },
          { verb: 'knock down', hint: 'demolish ya reduce — knock down' },
          { verb: 'knock over', hint: 'physically gira dena — knock over' },
          { verb: 'knock off', hint: 'stop work ya finish — knock off' }
        ],
        feedback: '"Knock over" ka matlab hai kisi cheez ko maar ke physically gira dena — shelf pe rakhi vase ko gira dena iska perfect example hai. "Knock out" galat hai — woh behosh ya system disable karna hai. "Knock down" galat hai — woh demolish ya price reduce karna hai. "Knock off" galat hai — woh kaam band karna hai.'
      },
      {
        id: 'knq3',
        sentence: 'The seller _____ the price of the car after some negotiation.',
        correct: 'knocked down',
        options: [
          { verb: 'knocked down', hint: 'keemat kam karna — knock down' },
          { verb: 'knocked off', hint: 'kaam khatam — knock off' },
          { verb: 'knocked up', hint: 'jagana — knock up' },
          { verb: 'knocked out', hint: 'behosh ya disable — knock out' }
        ],
        feedback: '"Knocked down" ka matlab hai kisi cheez ki keemat negotiate karke kam karna — car ki price reduce hona iska perfect example hai. "Knocked off" galat hai — woh kaam khatam karne ke liye hai. "Knocked up" galat hai — woh jagane ke liye hai. "Knocked out" galat hai — woh disable karne ke liye hai.'
      },
      {
        id: 'knq4',
        sentence: 'He used to _____ his classmates _____ without any rhyme or reason.',
        correct: 'knock about',
        options: [
          { verb: 'knock off', hint: 'kaam khatam — knock off' },
          { verb: 'kick off', hint: 'shuru karna — kick off' },
          { verb: 'hold over', hint: 'postpone karna — hold over' },
          { verb: 'knock about', hint: 'roughly treat karna — knock about' }
        ],
        feedback: '"Knock about" ka matlab hai kisi ke saath rough ya violent tarike se behave karna — classmates ko bina reason maarna iska perfect example hai. "Knock off" galat hai — woh kaam band karna hai. "Kick off" galat hai — woh kuch shuru karna hai. "Hold over" galat hai — woh postpone karna hai.'
      }
    ]
  },

  'Lay': {
    intro: 'Lay ke phrasal verbs mein placing aur employment ke ideas hain. "Lay off" ek very important business term hai — job loss. Ise "lie off" se confuse mat karo.',
    verbs: [
      {
        pv: 'lay off',
        def_en: 'To discharge workers because of economic conditions or shortage of work.',
        def_hi: 'Kaam ki kami ya economic problems ki wajah se workers ko nikalna ।',
        example: 'The factory laid off over two hundred workers when sales declined.',
        note: 'Lay off aur step down dono mein job loss hai, lekin lay off zyada about being dismissed due to external factors. Step down voluntary resignation hai. "Lay off" informally bhi use hota hai — "lay off me!" means stop bothering me.'
      },
      {
        pv: 'lay on',
        def_en: 'To provide something, especially food or entertainment, for people.',
        def_hi: 'Logon ke liye kuch, khaaskar khaana ya entertainment, provide karna ।',
        example: 'The company laid on a special dinner for all employees.',
        note: 'Lay on aur lay off exact opposite situations hain emotionally — lay on is generous provision, lay off is dismissal.'
      },
      {
        pv: 'lay out',
        def_en: 'To explain or present something clearly, or to arrange things.',
        def_hi: 'Kisi cheez ko clearly explain karna ya arrange karna ।',
        example: 'The team will lay out the new strategy during the next meeting.',
        note: 'Lay out aur lay on bilkul alag hain — lay out is about explaining or arranging, lay on is about providing. "Lay out a plan" means to explain it clearly.'
      }
    ],
    questions: [
      {
        id: 'lyq1',
        sentence: 'The company\'s profits were low and they were forced to _____ staff.',
        correct: 'lay off',
        options: [
          { verb: 'lay on', hint: 'provide karna — lay on' },
          { verb: 'lie on', hint: 'galat verb — lie on' },
          { verb: 'lisp off', hint: 'galat option' },
          { verb: 'lay off', hint: 'workers nikalna — lay off' }
        ],
        feedback: '"Lay off" ka matlab hai economic reasons ki wajah se workers ko dismiss karna. Baaki sab galat hain.'
      },
      {
        id: 'lyq2',
        sentence: 'The team will _____ the new strategy during the next meeting.',
        correct: 'lay out',
        options: [
          { verb: 'break down', hint: 'analyze karna — break down' },
          { verb: 'put up with', hint: 'tolerate — put up with' },
          { verb: 'lay out', hint: 'explain ya arrange karna — lay out' },
          { verb: 'take off', hint: 'udna ya remove — take off' }
        ],
        feedback: '"Lay out" ka matlab hai kisi cheez ko clearly explain karna ya present karna — meeting mein strategy explain karna iska perfect example hai. "Break down" galat hai — woh analyze karne ke liye hai. "Put up with" galat hai. "Take off" galat hai.'
      }
    ]
  },

  'Look': {
    intro: 'Look ke phrasal verbs mein mostly searching, caring, aur examining ke ideas hain. "Look up" aur "look up to" ek hi words hain lekin bilkul alag meanings hain — yeh common trap hai.',
    verbs: [
      {
        pv: 'look into',
        def_en: 'To investigate or examine the facts of a situation.',
        def_hi: 'Kisi situation ya mamle ki jaanch karna ya facts examine karna ।',
        example: 'The police are looking into the theft.',
        note: 'Look into aur look through dono mein examination hai, lekin look into zyada investigation ke liye hai — deeper inquiry.'
      },
      {
        pv: 'look up',
        def_en: 'To check a fact or find information about something in a reference source.',
        def_hi: 'Kisi dictionary, book, ya internet mein kuch dhundna ya check karna ।',
        example: 'I had to look up that word in the dictionary.',
        note: 'Look up aur look up to mein sirf "to" ka fark hai lekin meaning poori tarah alag hai — look up means search for information, look up to means respect and admire someone.'
      },
      {
        pv: 'look after',
        def_en: 'To take care of someone or something.',
        def_hi: 'Kisi ki dekhbhal karna ya kisi cheez ka khayal rakhna ।',
        example: 'She looked after her elderly parents for many years.',
        note: 'Look after aur look into bilkul alag hain — look after care ke baare mein hai, look into investigation ke baare mein.'
      },
      {
        pv: 'look through',
        def_en: 'To examine or quickly scan something like a document or collection.',
        def_hi: 'Kisi document ya collection ko jaldi se scan karna ya dekhna ।',
        example: 'She looked through the report before the meeting.',
        note: 'Look through aur look into dono mein examining hai, lekin look through zyada surface-level scanning hai.'
      },
      {
        pv: 'look up to',
        def_en: 'To admire and respect someone.',
        def_hi: 'Kisi ko bahut izzat dena aur unhe apna role model maanna ।',
        example: 'She looks up to her older sister in everything.',
        note: 'Look up to aur look up mein sirf "to" ka fark hai lekin meaning completely alag hai.'
      },
      {
        pv: 'look around',
        def_en: 'To go through a place in order to see what is there.',
        def_hi: 'Kisi jagah ko dekhne ke liye wahan ghoomna ya examine karna ।',
        example: 'We spent the afternoon looking around the old market.',
        note: 'Look around aur look into dono mein searching hai, lekin look around zyada casual physical exploration ke liye hai.'
      },
      {
        pv: 'look down on',
        def_en: 'To think that you are better than someone; to regard someone with contempt.',
        def_hi: 'Kisi ko apne se neecha samajhna ya unke baare mein buri rai rakhna ।',
        example: 'She looks down on people who haven\'t been to university.',
        note: 'Look down on aur look up to exact opposites hain — look up to means respect, look down on means contempt. Remember: up = positive, down = negative.'
      }
    ],
    questions: [
      {
        id: 'lkq1',
        sentence: 'Vishnu and family are _____ the possibility of moving to Canada.',
        correct: 'looking into',
        options: [
          { verb: 'looking up', hint: 'dictionary mein dhundna — look up' },
          { verb: 'looking after', hint: 'dekhbhal karna — look after' },
          { verb: 'looking around', hint: 'jagah dekhna — look around' },
          { verb: 'looking into', hint: 'investigate karna — look into' }
        ],
        feedback: '"Looking into" ka matlab hai kisi possibility ya situation ko investigate karna aur facts examine karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq2',
        sentence: 'Anita _____ the word in the dictionary, but she still did not understand it.',
        correct: 'looked up',
        options: [
          { verb: 'looked after', hint: 'dekhbhal — look after' },
          { verb: 'looked up to', hint: 'respect karna — look up to' },
          { verb: 'looked up', hint: 'dictionary mein dhundna — look up' },
          { verb: 'looked into', hint: 'investigate karna — look into' }
        ],
        feedback: '"Looked up" ka matlab hai kisi word ya information ko reference source mein check karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq3',
        sentence: 'She _____ her elderly parents for many years.',
        correct: 'looked after',
        options: [
          { verb: 'looked into', hint: 'investigate — look into' },
          { verb: 'looked down on', hint: 'neecha samajhna — look down on' },
          { verb: 'looked up', hint: 'dictionary mein dhundna — look up' },
          { verb: 'looked after', hint: 'dekhbhal karna — look after' }
        ],
        feedback: '"Looked after" ka matlab hai kisi ki dekhbhal karna ya care karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq4',
        sentence: 'We should _____ the report again before submitting it to the client.',
        correct: 'look through',
        options: [
          { verb: 'look after', hint: 'dekhbhal — look after' },
          { verb: 'look down on', hint: 'neecha samajhna — look down on' },
          { verb: 'look through', hint: 'quickly scan karna — look through' },
          { verb: 'look up to', hint: 'respect karna — look up to' }
        ],
        feedback: '"Look through" ka matlab hai kisi document ko submit karne se pehle quickly scan ya examine karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq5',
        sentence: 'She _____ her older sister in everything.',
        correct: 'looks up to',
        options: [
          { verb: 'looks up', hint: 'dictionary mein dhundna — look up' },
          { verb: 'looks after', hint: 'dekhbhal — look after' },
          { verb: 'looks up to', hint: 'respect aur admire karna — look up to' },
          { verb: 'looks into', hint: 'investigate — look into' }
        ],
        feedback: '"Looks up to" ka matlab hai kisi ko bahut admire aur respect karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq6',
        sentence: 'We spent the afternoon _____ the old market.',
        correct: 'looking around',
        options: [
          { verb: 'looking into', hint: 'investigate — look into' },
          { verb: 'looking up', hint: 'dhundna — look up' },
          { verb: 'looking around', hint: 'jagah explore karna — look around' },
          { verb: 'looking after', hint: 'dekhbhal — look after' }
        ],
        feedback: '"Looking around" ka matlab hai kisi jagah ko casually explore karna. Baaki sab galat hain.'
      },
      {
        id: 'lkq7',
        sentence: 'She _____ people who haven\'t been to university.',
        correct: 'looks down on',
        options: [
          { verb: 'looks up to', hint: 'admire karna — look up to' },
          { verb: 'looks after', hint: 'dekhbhal — look after' },
          { verb: 'looks into', hint: 'investigate — look into' },
          { verb: 'looks down on', hint: 'neecha samajhna — look down on' }
        ],
        feedback: '"Looks down on" ka matlab hai kisi ko apne se inferior ya neecha samajhna. Baaki sab galat hain.'
      }
    ]
  },

  'Make': {
    intro: 'Make ke phrasal verbs mein zyada tar create karna, understand karna, ya decide karna ka idea hota hai. "Make out" aur "make up" dono common hain lekin completely different — ek samajhne ke liye, doosra banane ya invent karne ke liye.',
    verbs: [
      {
        pv: 'make up',
        def_en: 'To invent a story or excuse, or to reconcile after an argument, or to constitute something.',
        def_hi: 'Koi kahani ya bahana banana, ya jhagde ke baad maan jaana, ya kisi cheez ka hissa hona ।',
        example: 'She made up an excuse for being late.',
        note: 'Make up ke teen alag meanings hain — inventing, reconciling, aur constituting. Context se samjho. Make out se bilkul alag — make up creation ya invention ke liye, make out understanding ke liye.'
      },
      {
        pv: 'make out',
        def_en: 'To hear, see, or understand something with difficulty.',
        def_hi: 'Kisi cheez ko mushkil se sunna, dekhna ya samajhna ।',
        example: 'I couldn\'t make out what he was trying to say.',
        note: 'Make out aur make up bilkul alag hain — make out means perceiving something difficult, make up means inventing or creating.'
      },
      {
        pv: 'make on',
        def_en: 'To turn on, light, or ignite something.',
        def_hi: 'Kisi cheez ko on karna ya jalana ।',
        example: 'Can you make on the light? It\'s too dark in here.',
        note: 'Make on sirf "turn on" ke liye use hota hai — yeh make up ya make out se bilkul alag hai.'
      },
      {
        pv: 'make up for',
        def_en: 'To compensate for something missed, lost, or done wrong.',
        def_hi: 'Kisi missed, khoi hui, ya galat cheez ki bhaarpaayi karna ।',
        example: 'I will work overtime this week to make up for the time I missed last week.',
        note: 'Make up for aur make up bilkul alag hain — make up for is about compensation. Make up is about inventing or reconciling. "To make up for lost time" is a very common phrase.'
      }
    ],
    questions: [
      {
        id: 'mkq1',
        sentence: 'I cannot _____ my mind about taking a vacation in winter.',
        correct: 'make up',
        options: [
          { verb: 'make out', hint: 'mushkil se samajhna — make out' },
          { verb: 'make on', hint: 'on karna — make on' },
          { verb: 'make off', hint: 'quickly bhaagna — make off' },
          { verb: 'make up', hint: 'decide karna ya banana — make up' }
        ],
        feedback: '"Make up one\'s mind" ek fixed phrase hai jiska matlab hai koi decision lena. Baaki sab galat hain.'
      },
      {
        id: 'mkq2',
        sentence: 'It is quite difficult to _____ what this doctor writes.',
        correct: 'make out',
        options: [
          { verb: 'make on', hint: 'on karna — make on' },
          { verb: 'make up', hint: 'banana ya decide — make up' },
          { verb: 'make off', hint: 'quickly bhaagna — make off' },
          { verb: 'make out', hint: 'mushkil se padhna ya samajhna — make out' }
        ],
        feedback: '"Make out" ka matlab hai kisi cheez ko mushkil se samajhna ya padhna — doctor ki handwriting padhna iska perfect example hai. Baaki sab galat hain.'
      },
      {
        id: 'mkq3',
        sentence: 'Can you _____ the light? It\'s too dark in here.',
        correct: 'make on',
        options: [
          { verb: 'make out', hint: 'mushkil se samajhna — make out' },
          { verb: 'make up', hint: 'banana ya invent — make up' },
          { verb: 'make off', hint: 'bhaagna — make off' },
          { verb: 'make on', hint: 'on karna ya jalana — make on' }
        ],
        feedback: '"Make on" ka matlab hai kisi cheez ko on ya start karna. Baaki sab galat hain.'
      },
      {
        id: 'mkq4',
        sentence: 'I will work overtime this week to _____ the time I missed last week.',
        correct: 'make up for',
        options: [
          { verb: 'give up', hint: 'quit karna — give up' },
          { verb: 'make up for', hint: 'bhaarpaayi karna — make up for' },
          { verb: 'hold on', hint: 'wait — hold on' },
          { verb: 'run out of', hint: 'khatam hona — run out of' }
        ],
        feedback: '"Make up for" ka matlab hai kisi missed ya lost cheez ki bhaarpaayi karna — missed time ke liye overtime karna iska perfect example hai. "Give up" galat hai. "Hold on" galat hai. "Run out of" galat hai.'
      },
      {
        id: 'mkq5',
        sentence: 'She _____ a story to explain why she was late.',
        correct: 'made up',
        options: [
          { verb: 'made up', hint: 'kahani banana — make up' },
          { verb: 'took over', hint: 'control lena — take over' },
          { verb: 'looked into', hint: 'investigate — look into' },
          { verb: 'carried out', hint: 'execute karna — carry out' }
        ],
        feedback: '"Made up" ka matlab hai koi excuse ya kahani invent karna. Baaki sab galat hain.'
      }
    ]
  },

  'Move': {
    intro: 'Move ke phrasal verbs mein transition aur progress ke ideas hain. "Move into" ek important phrase hai jo entering a new phase ya place ke liye use hota hai.',
    verbs: [
      {
        pv: 'move into',
        def_en: 'To enter a new place, situation, or phase of something.',
        def_hi: 'Kisi naye jagah, situation, ya phase mein daakhil hona ।',
        example: 'The project is now moving into its final phase.',
        note: 'Move into aur move on dono mein progression hai, lekin move into zyada about entering something specific. Move on zyada about leaving the past behind.'
      },
      {
        pv: 'move on',
        def_en: 'To progress to the next stage, or to stop thinking about the past.',
        def_hi: 'Agle step pe jaana, ya purani baaton ko chhod dena ।',
        example: 'After the breakup, it took her a long time to move on.',
        note: 'Move on aur move into dono mein movement hai — move on is about leaving something behind. Move into is about entering something new.'
      }
    ],
    questions: [
      {
        id: 'mvq1',
        sentence: 'The minor project put forward by the government is now _____ its third year.',
        correct: 'moving into',
        options: [
          { verb: 'moving along into', hint: 'grammatically awkward option' },
          { verb: 'moving at', hint: 'galat option' },
          { verb: 'moving into', hint: 'nayi phase mein daakhil hona — move into' },
          { verb: 'moving around into', hint: 'galat option' }
        ],
        feedback: '"Moving into" ka matlab hai kisi naye phase ya period mein enter karna — project ka teen saal mein jaana iska perfect example hai. Baaki sab galat options hain.'
      }
    ]
  },

  'Pass': {
    intro: 'Pass ke phrasal verbs mein time, information, aur consciousness ke ideas hain. "Pass out" aur "pass away" dono mein kuch khatam hota hai — ek temporarily aur ek permanently.',
    verbs: [
      {
        pv: 'pass off',
        def_en: 'If an event passes off in a particular way, it happens and ends that way.',
        def_hi: 'Koi event ek khaas tarike se hona aur khatam hona ।',
        example: 'The ceremony passed off without any problems.',
        note: 'Pass off aur pass out bilkul alag hain — pass off event completion ke liye hai. Pass out consciousness loss ke liye hai.'
      },
      {
        pv: 'pass out',
        def_en: 'To become unconscious, or to distribute something to people.',
        def_hi: 'Behosh ho jaana, ya logon mein kuch baantna ।',
        example: 'She passed out due to the heat and had to be carried inside.',
        note: 'Pass out ke do meanings hain — unconscious hona aur distribute karna. Context se samjho. Pass away se bilkul alag — pass out temporary unconsciousness hai, pass away death hai.'
      },
      {
        pv: 'pass on',
        def_en: 'To give or transfer something to someone else, or to die (euphemism).',
        def_hi: 'Kisi cheez ko aage dena ya transfer karna, ya marjana ।',
        example: 'Please pass on my regards to your family.',
        note: 'Pass on aur pass away dono death ke liye use hote hain euphemistically, lekin pass on zyada about transfer of something hai.'
      },
      {
        pv: 'pass away',
        def_en: 'To die — a gentle or polite way of saying someone has died.',
        def_hi: 'Marjana — ek gentle ya respectful tarika kehne ka ki koi mar gaya ।',
        example: 'Her grandfather passed away last winter at the age of 91.',
        note: 'Pass away sirf death ke liye hai — yeh ek euphemism hai. Pass out se bilkul alag — woh temporary unconsciousness ke liye hai.'
      },
      {
        pv: 'pass down',
        def_en: 'To transfer or share something from one person or generation to another.',
        def_hi: 'Kisi cheez ko ek insaan ya generation se doosre tak pahunchana ।',
        example: 'This recipe has been passed down through generations in our family.',
        note: 'Pass down aur pass on dono mein transfer hai, lekin pass down specifically generation-to-generation ya hierarchical transfer ke liye hai.'
      },
      {
        pv: 'pass back',
        def_en: 'To give something back to someone with your hand.',
        def_hi: 'Kisi cheez ko apne haath se wapis dena ।',
        example: 'He passed back the exam paper after checking it.',
        note: 'Pass back specifically returning something to its previous holder ke liye hai. Pass on is about forwarding, pass back is about returning.'
      },
      {
        pv: 'pass in',
        def_en: 'To give something to someone to review or submit.',
        def_hi: 'Kisi cheez ko review ya submission ke liye dena ।',
        example: 'All students must pass in their assignments by Friday.',
        note: 'Pass in aur hand in almost same hain — dono submission ke liye hain. Pass back se alag — woh returning hai, pass in is submitting.'
      }
    ],
    questions: [
      {
        id: 'psq1',
        sentence: 'He felt dejected but the feeling _____ in a minute.',
        correct: 'passed off',
        options: [
          { verb: 'passed out', hint: 'behosh hona — pass out' },
          { verb: 'passed on', hint: 'aage dena ya marna — pass on' },
          { verb: 'passed off', hint: 'event khatam hona — pass off' },
          { verb: 'passed away', hint: 'marna — pass away' }
        ],
        feedback: '"Passed off" ka matlab hai koi situation ya feeling ek khaas tarike se hona aur khatam ho jaana. Baaki sab galat hain.'
      },
      {
        id: 'psq2',
        sentence: 'The athlete _____ after the competition.',
        correct: 'passed out',
        options: [
          { verb: 'passed away', hint: 'marna — pass away' },
          { verb: 'passed on', hint: 'aage dena — pass on' },
          { verb: 'passed back', hint: 'wapis dena — pass back' },
          { verb: 'passed out', hint: 'behosh hona — pass out' }
        ],
        feedback: '"Passed out" ka matlab hai temporarily behosh ho jaana. Baaki sab galat hain.'
      },
      {
        id: 'psq3',
        sentence: 'Please _____ my regards to your family.',
        correct: 'pass on',
        options: [
          { verb: 'pass down', hint: 'generations mein dena — pass down' },
          { verb: 'pass back', hint: 'wapis dena — pass back' },
          { verb: 'pass out', hint: 'behosh hona — pass out' },
          { verb: 'pass on', hint: 'message aage dena — pass on' }
        ],
        feedback: '"Pass on" ka matlab hai kisi message ya greetings ko aage dena ya forward karna. Baaki sab galat hain.'
      },
      {
        id: 'psq4',
        sentence: 'Her grandfather _____ last winter at the age of 91.',
        correct: 'passed away',
        options: [
          { verb: 'passed out', hint: 'behosh hona — pass out' },
          { verb: 'passed off', hint: 'event khatam hona — pass off' },
          { verb: 'passed away', hint: 'marna — pass away' },
          { verb: 'passed on', hint: 'aage dena ya marna — pass on' }
        ],
        feedback: '"Passed away" ek polite aur gentle tarika hai yeh kehne ka ki koi mar gaya. Baaki sab galat hain.'
      },
      {
        id: 'psq5',
        sentence: 'The details were _____ from one person to the other within no time.',
        correct: 'passed down',
        options: [
          { verb: 'passed away', hint: 'marna — pass away' },
          { verb: 'passed in', hint: 'submit karna — pass in' },
          { verb: 'passed out', hint: 'behosh hona — pass out' },
          { verb: 'passed down', hint: 'ek se doosre tak transfer — pass down' }
        ],
        feedback: '"Passed down" ka matlab hai kisi information ya cheez ko ek person ya group se doosre tak transfer karna. Baaki sab galat hain.'
      },
      {
        id: 'psq6',
        sentence: 'He _____ the exam paper after checking it.',
        correct: 'passed back',
        options: [
          { verb: 'passed on', hint: 'aage dena — pass on' },
          { verb: 'passed down', hint: 'generations mein — pass down' },
          { verb: 'passed back', hint: 'wapis dena — pass back' },
          { verb: 'passed in', hint: 'submit karna — pass in' }
        ],
        feedback: '"Passed back" ka matlab hai kisi cheez ko uske previous holder ko wapis dena. Baaki sab galat hain.'
      },
      {
        id: 'psq7',
        sentence: 'All students must _____ their assignments by Friday.',
        correct: 'pass in',
        options: [
          { verb: 'pass on', hint: 'aage dena — pass on' },
          { verb: 'pass back', hint: 'wapis dena — pass back' },
          { verb: 'pass in', hint: 'submit karna — pass in' },
          { verb: 'pass down', hint: 'generations mein — pass down' }
        ],
        feedback: '"Pass in" ka matlab hai kisi cheez ko formally authority ke paas submit karna. Baaki sab galat hain.'
      }
    ]
  },

  'Point': {
    intro: 'Point ka ek main phrasal verb hai — "point out." Kisi cheez ki taraf dhyan dilana ya batana. Very common in academic aur professional English.',
    verbs: [
      {
        pv: 'point out',
        def_en: 'To direct someone\'s attention to something, or to make a fact or mistake known.',
        def_hi: 'Kisi cheez ki taraf dhyan dilana, ya koi fact ya galti zahir karna ।',
        example: 'The teacher pointed out several errors in his essay.',
        note: 'Point out aur bring up dono mein kuch saamne laana hai, lekin point out zyada specific — kisi particular cheez ki taraf point karna, highlight karna.'
      }
    ],
    questions: [
      {
        id: 'poq1',
        sentence: 'The teacher asked the student to _____ the errors in his essay.',
        correct: 'point out',
        options: [
          { verb: 'carry out', hint: 'execute karna — carry out' },
          { verb: 'look through', hint: 'scan karna — look through' },
          { verb: 'take down', hint: 'likhna ya utaarna — take down' },
          { verb: 'point out', hint: 'dhyan dilana ya batana — point out' }
        ],
        feedback: '"Point out" ka matlab hai kisi specific cheez ki taraf dhyan dilana. Baaki sab galat hain.'
      }
    ]
  },

  'Provide': {
    intro: 'Provide for ek important phrasal verb hai jo giving aur maintaining ke liye use hota hai. Exams mein infinitive structure ke saath aata hai.',
    verbs: [
      {
        pv: 'provide for',
        def_en: 'To give someone the things they need, such as money, food, or clothes.',
        def_hi: 'Kisi ki zarooraten — paisa, khaana, kapde — poora karna ।',
        example: 'He worked two jobs to provide for his family.',
        note: 'Provide for hamesha kisi ki needs meet karne ke baare mein hai. "Provide for" ka ek aur legal meaning hai — ek law ya agreement jo kuch ensure karta hai.'
      }
    ],
    questions: [
      {
        id: 'prq1',
        sentence: 'When I was your age, I was working two jobs to _____ my family.',
        correct: 'provide for',
        options: [
          { verb: 'to providing for', hint: 'galat grammar — double to' },
          { verb: 'for provide to', hint: 'galat order' },
          { verb: 'provide for', hint: 'zarooraten poora karna — provide for' },
          { verb: 'on providing', hint: 'galat preposition' }
        ],
        feedback: '"Provide for" ka matlab hai apne family ki zarooraten poora karna. Infinitive mein "to provide for" aata hai — "to" sirf ek baar aata hai. Baaki sab galat hain.'
      }
    ]
  },

  'Pull': {
    intro: 'Pull ke phrasal verbs mein movement aur survival dono ke ideas hain. "Pull through" aur "pull over" ka physical meaning bilkul alag hai — ek mushkil situation se nikalna, doosra road side pe rukna.',
    verbs: [
      {
        pv: 'pull through',
        def_en: 'To survive a dangerous or difficult situation, especially an illness.',
        def_hi: 'Kisi khatarnak ya mushkil situation se, khaaskar bimari se, bachna aur theek hona ।',
        example: 'The doctors weren\'t sure she would pull through, but she did.',
        note: 'Pull through aur pull for bilkul alag hain — pull through survival hai, pull for support dena hai.'
      },
      {
        pv: 'pull for',
        def_en: 'To support or encourage someone, especially when they are in difficulty.',
        def_hi: 'Kisi ko support ya encourage karna, khaaskar mushkil waqt mein ।',
        example: 'We\'re all pulling for you to get better soon.',
        note: '"Pulling for you" ek common encouraging phrase hai.'
      },
      {
        pv: 'pull down',
        def_en: 'To demolish a building or structure.',
        def_hi: 'Kisi imarat ya structure ko girana ya todna ।',
        example: 'They pulled down the old factory to build a shopping mall.',
        note: 'Pull down aur pull out bilkul alag hain — pull down demolition ke liye hai, pull out withdrawal ke liye.'
      },
      {
        pv: 'pull out',
        def_en: 'To withdraw from a commitment or move away from the side of the road.',
        def_hi: 'Kisi commitment se hat jaana, ya road ke side se nikalna ।',
        example: 'The company decided to pull out of the deal at the last minute.',
        note: 'Pull out aur pull over dono mein vehicle movement hai, lekin pull out means moving away from the curb into traffic. Exactly opposite directions.'
      },
      {
        pv: 'pull over',
        def_en: 'To move a vehicle to the side of the road and stop.',
        def_hi: 'Gaadi ko road ke side mein le jaana aur rokna ।',
        example: 'The police officer signalled us to pull over.',
        note: 'Pull over aur pull out exact opposites hain for vehicle movement — pull over means stop at the side, pull out means leave the side and join traffic.'
      },
      {
        pv: 'pull up',
        def_en: 'To cause a vehicle to stop, or to reprimand someone.',
        def_hi: 'Gaadi ko rokna, ya kisi ko galat kaam ke liye daantna ।',
        example: 'A black car pulled up outside the building.',
        note: 'Pull up aur pull over dono stopping ke liye hain, lekin pull up zyada about the act of arriving and stopping hai. Pull up ka "reprimand" meaning bhi exam mein aata hai — "the boss pulled him up for being late."'
      },
      {
        pv: 'pull round',
        def_en: 'To regain health or consciousness after a serious illness.',
        def_hi: 'Bimari ke baad theek hona ya hosh mein aana ।',
        example: 'She was very ill but eventually pulled round.',
        note: 'Pull round aur pull through almost same hain — dono recovery ke liye. Pull round zyada British English mein use hota hai. Pull through zyada dramatic situations ke liye.'
      }
    ],
    questions: [
      {
        id: 'puq1',
        sentence: 'His disease is serious but he will _____ eventually.',
        correct: 'pull through',
        options: [
          { verb: 'pull for', hint: 'support dena — pull for' },
          { verb: 'pull out', hint: 'withdraw karna — pull out' },
          { verb: 'pull over', hint: 'gaadi side pe rokna — pull over' },
          { verb: 'pull through', hint: 'bimari se survive karna — pull through' }
        ],
        feedback: '"Pull through" ka matlab hai kisi dangerous ya difficult situation se, especially bimari se, survive karna. Baaki sab galat hain.'
      },
      {
        id: 'puq2',
        sentence: 'We\'re all _____ you to get better soon.',
        correct: 'pulling for',
        options: [
          { verb: 'pulling through', hint: 'survive karna — pull through' },
          { verb: 'pulling down', hint: 'girani — pull down' },
          { verb: 'pulling for', hint: 'support karna — pull for' },
          { verb: 'pulling over', hint: 'gaadi rokna — pull over' }
        ],
        feedback: '"Pulling for" ka matlab hai kisi ko encourage aur support dena. Baaki sab galat hain.'
      },
      {
        id: 'puq3',
        sentence: 'After the old building was _____, the building contractor surveyed the progress of the work.',
        correct: 'pulled down',
        options: [
          { verb: 'pulled up', hint: 'rokna ya daantna — pull up' },
          { verb: 'pulled over', hint: 'gaadi side pe rokna — pull over' },
          { verb: 'pulled down', hint: 'imarat girani — pull down' },
          { verb: 'pulled out', hint: 'withdraw karna — pull out' }
        ],
        feedback: '"Pulled down" ka matlab hai kisi building ko demolish karna. Baaki sab galat hain.'
      },
      {
        id: 'puq4',
        sentence: 'The company decided to _____ of the deal at the last minute.',
        correct: 'pull out',
        options: [
          { verb: 'pull over', hint: 'gaadi rokna — pull over' },
          { verb: 'pull through', hint: 'survive karna — pull through' },
          { verb: 'pull out', hint: 'deal se hat jaana — pull out' },
          { verb: 'pull for', hint: 'support karna — pull for' }
        ],
        feedback: '"Pull out" ka matlab hai kisi commitment ya deal se withdraw kar lena. Baaki sab galat hain.'
      },
      {
        id: 'puq5',
        sentence: 'The police officer signalled us to _____.',
        correct: 'pull over',
        options: [
          { verb: 'pull out', hint: 'withdraw ya road se nikalna — pull out' },
          { verb: 'pull down', hint: 'girani — pull down' },
          { verb: 'pull up', hint: 'rokna — pull up' },
          { verb: 'pull over', hint: 'gaadi side pe rokna — pull over' }
        ],
        feedback: '"Pull over" ka matlab hai gaadi ko road ke side mein le jaana aur rokna. Baaki sab galat hain.'
      },
      {
        id: 'puq6',
        sentence: 'A black car _____ outside the building.',
        correct: 'pulled up',
        options: [
          { verb: 'pulled over', hint: 'side pe rokna — pull over' },
          { verb: 'pulled out', hint: 'withdraw ya side se nikalna — pull out' },
          { verb: 'pulled down', hint: 'demolish — pull down' },
          { verb: 'pulled up', hint: 'aa ke rokna — pull up' }
        ],
        feedback: '"Pulled up" ka matlab hai kisi jagah arrive karke rukna. Baaki sab galat hain.'
      },
      {
        id: 'puq7',
        sentence: 'Rahul was _____ by his boss because he often comes late.',
        correct: 'pulled up',
        options: [
          { verb: 'pulled through', hint: 'survive karna — pull through' },
          { verb: 'pulled round', hint: 'theek hona — pull round' },
          { verb: 'pulled with', hint: 'galat option' },
          { verb: 'pulled up', hint: 'criticize ya daantna — pull up' }
        ],
        feedback: '"Pulled up" ka matlab hai kisi ko unki galti ke liye reprimand karna — boss ka late aane pe daantna iska example hai. "Pulled through" galat hai. "Pulled round" galat hai. "Pulled with" koi phrasal verb nahi hai.'
      },
      {
        id: 'puq8',
        sentence: 'The authorities have _____ many unauthorized buildings in our city.',
        correct: 'pulled down',
        options: [
          { verb: 'pulled out', hint: 'withdraw — pull out' },
          { verb: 'pulled round', hint: 'theek hona — pull round' },
          { verb: 'pulled with', hint: 'galat option' },
          { verb: 'pulled down', hint: 'destroy a building — pull down' }
        ],
        feedback: '"Pulled down" ka matlab hai unauthorized buildings ko demolish karna — authorities ka illegal buildings todna iska example hai. Baaki sab galat hain.'
      }
    ]
  },

  'Put': {
    intro: 'Put ke phrasal verbs mein placing, tolerating, postponing, aur wearing ke ideas hain. "Put up with" aur "put up" — sirf "with" ka fark hai lekin meaning bilkul alag hai. Yeh ek bahut common confusion hai jo exam mein trap karta hai.',
    verbs: [
      {
        pv: 'put up with',
        def_en: 'To tolerate or bear something annoying or unpleasant without complaining.',
        def_hi: 'Kisi irritating ya unpleasant cheez ko bina shikayat ke bardaasht karna ।',
        example: 'I can\'t put up with his rude behaviour any longer.',
        note: 'Put up with aur put up mein sirf "with" ka fark hai lekin meaning poori tarah alag hai — put up with means tolerate, put up means build/display something.'
      },
      {
        pv: 'put up',
        def_en: 'To build or raise something, or to provide accommodation for someone.',
        def_hi: 'Kuch banana ya khada karna, ya kisi ko rehne ki jagah dena ।',
        example: 'They put up a tent in the garden for the party.',
        note: 'Put up aur put up with mein "with" ka fark bahut important hai.'
      },
      {
        pv: 'put away',
        def_en: 'To return something to its proper place, or to save money.',
        def_hi: 'Kisi cheez ko uski jagah wapis rakhna, ya paisa bachana ।',
        example: 'Please put away your toys before dinner.',
        note: 'Put away aur put off bilkul alag hain — put away is about storing/returning things. Put off is about postponing.'
      },
      {
        pv: 'put up to',
        def_en: 'To encourage or persuade someone to do something wrong or stupid.',
        def_hi: 'Kisi ko galat ya bewakoofi bhara kaam karne ke liye encourage ya persuade karna ।',
        example: 'I think his friends put him up to stealing the bike.',
        note: 'Put up to aur put up with dono mein "put up" hai lekin "to" vs "with" completely different meaning banaata hai.'
      },
      {
        pv: 'put forward',
        def_en: 'To propose or suggest something for consideration.',
        def_hi: 'Kisi cheez ko vichar ke liye propose ya suggest karna ।',
        example: 'She put forward a new idea during the meeting.',
        note: 'Put forward aur put off bilkul alag hain — put forward is proposal, put off is postponement.'
      },
      {
        pv: 'put out',
        def_en: 'To extinguish a fire or light, or to cause inconvenience.',
        def_hi: 'Aag ya roshni bujhaana, ya kisi ko takleef dena ।',
        example: 'Firefighters managed to put out the blaze quickly.',
        note: 'Put out aur put off similar lagte hain — put out is extinction of fire/light, put off is postponement.'
      },
      {
        pv: 'put on',
        def_en: 'To wear clothing or to switch on a device.',
        def_hi: 'Kapde pehenna ya koi device on karna ।',
        example: 'He put on his coat before stepping out into the cold.',
        note: 'Put on aur take off exact opposites hain — put on means wear/switch on, take off means remove/switch off.'
      },
      {
        pv: 'put off',
        def_en: 'To postpone or delay something, or to cause someone to feel dislike or disgust.',
        def_hi: 'Kisi kaam ko baad ke liye delay karna, ya kisi ko disgusted ya off feel karana ।',
        example: 'She put off the meeting until next week.',
        note: 'Put off ke do meanings hain — postpone karna aur kisi ko dislike karana.'
      },
      {
        pv: 'put together',
        def_en: 'To assemble or organize something from its parts.',
        def_hi: 'Kisi cheez ke hisson ko jodna ya organize karna ।',
        example: 'We need to put together the pieces of the furniture before we can use it.',
        note: 'Put together aur put up dono mein assembling hai, lekin put together zyada about combining pieces into a whole. Put up zyada about constructing something permanent.'
      },
      {
        pv: 'put down',
        def_en: 'To suppress or criticize someone, or to write something down.',
        def_hi: 'Kisi ko dabaana ya criticize karna, ya kuch likhna ।',
        example: 'The rich always put down the poor due to their miserable condition.',
        note: 'Put down aur put up exact opposite feelings dete hain — put down criticizes or suppresses, put up builds or accommodates.'
      },
      {
        pv: 'put at',
        def_en: 'To estimate or calculate something at a particular amount.',
        def_hi: 'Kisi cheez ka andaza lagana ya calculate karna ।',
        example: 'The cost of the project was put at ten million rupees.',
        note: 'Put at sirf estimation ke liye hai — "put at" kisi number ya amount ke saath aata hai. Put together se bilkul alag — woh assembling ke liye hai.'
      },
      {
        pv: 'put up at',
        def_en: 'To stay at a particular place, especially a hotel.',
        def_hi: 'Kisi jagah — khaaskar hotel mein — rukna ।',
        example: 'It is getting dark so we should put up at any hotel.',
        note: 'Put up at aur put up bilkul alag hain — put up at means staying somewhere, put up means building or accommodating someone. The "at" completely changes the meaning.'
      }
    ],
    questions: [
      {
        id: 'ptq1',
        sentence: 'I cannot _____ this sort of insult in office.',
        correct: 'put up with',
        options: [
          { verb: 'put up', hint: 'banana ya accommodate — put up' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'put away', hint: 'jagah pe rakhna — put away' },
          { verb: 'put up with', hint: 'bardaasht karna — put up with' }
        ],
        feedback: '"Put up with" ka matlab hai kisi irritating ya unpleasant cheez ko bina shikayat ke tolerate karna. Baaki sab galat hain.'
      },
      {
        id: 'ptq2',
        sentence: 'I cannot _____ with his rudeness any longer.',
        correct: 'put up',
        options: [
          { verb: 'put away', hint: 'jagah pe rakhna — put away' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'put up', hint: 'with ke saath = bardaasht — put up with' },
          { verb: 'put out', hint: 'bujhaana — put out' }
        ],
        feedback: 'Yahan "put up with" phrase hai — "put up" + "with" — jo tolerate karne ke liye use hota hai. Baaki sab galat hain.'
      },
      {
        id: 'ptq3',
        sentence: 'Please _____ your toys before dinner.',
        correct: 'put away',
        options: [
          { verb: 'put on', hint: 'pehenna ya on karna — put on' },
          { verb: 'put up', hint: 'banana ya accommodate — put up' },
          { verb: 'put away', hint: 'cheez jagah pe rakhna — put away' },
          { verb: 'put off', hint: 'delay karna — put off' }
        ],
        feedback: '"Put away" ka matlab hai kisi cheez ko use ke baad uski proper jagah rakhna. Baaki sab galat hain.'
      },
      {
        id: 'ptq4',
        sentence: 'I think his friends _____ him _____ stealing the bike.',
        correct: 'put up to',
        options: [
          { verb: 'put off', hint: 'delay — put off' },
          { verb: 'put up with', hint: 'bardaasht karna — put up with' },
          { verb: 'put up to', hint: 'galat kaam ke liye instigate — put up to' },
          { verb: 'put away', hint: 'jagah pe rakhna — put away' }
        ],
        feedback: '"Put up to" ka matlab hai kisi ko koi galat ya stupid kaam karne ke liye convince ya instigate karna. Baaki sab galat hain.'
      },
      {
        id: 'ptq5',
        sentence: 'The committee decided to _____ a new proposal for discussion.',
        correct: 'put forward',
        options: [
          { verb: 'put up with', hint: 'bardaasht — put up with' },
          { verb: 'put forward', hint: 'propose karna — put forward' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'put away', hint: 'jagah pe rakhna — put away' }
        ],
        feedback: '"Put forward" ka matlab hai koi idea ya proposal suggest karna. Baaki sab galat hain.'
      },
      {
        id: 'ptq6',
        sentence: 'The firemen managed to _____ the fire before it spread to other buildings.',
        correct: 'put out',
        options: [
          { verb: 'put off', hint: 'delay ya disgust — put off' },
          { verb: 'put up', hint: 'banana — put up' },
          { verb: 'put out', hint: 'aag bujhaana — put out' },
          { verb: 'put away', hint: 'jagah pe rakhna — put away' }
        ],
        feedback: '"Put out" ka matlab hai aag ya light ko bujhaana. Baaki sab galat hain.'
      },
      {
        id: 'ptq7',
        sentence: 'He _____ his coat before stepping out into the cold.',
        correct: 'put on',
        options: [
          { verb: 'put away', hint: 'jagah pe rakhna — put away' },
          { verb: 'put out', hint: 'bujhaana — put out' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'put on', hint: 'kapde pehenna — put on' }
        ],
        feedback: '"Put on" ka matlab hai kapde pehenna. Baaki sab galat hain.'
      },
      {
        id: 'ptq8',
        sentence: 'She _____ the meeting until next week.',
        correct: 'put off',
        options: [
          { verb: 'put on', hint: 'pehenna ya on karna — put on' },
          { verb: 'put away', hint: 'jagah pe rakhna — put away' },
          { verb: 'put out', hint: 'bujhaana — put out' },
          { verb: 'put off', hint: 'delay ya postpone — put off' }
        ],
        feedback: '"Put off" ka matlab hai kisi event ya kaam ko baad ke liye postpone karna. Baaki sab galat hain.'
      },
      {
        id: 'ptq9',
        sentence: 'We need to _____ the pieces of the furniture before we can use it.',
        correct: 'put together',
        options: [
          { verb: 'give up', hint: 'quit karna — give up' },
          { verb: 'look into', hint: 'investigate — look into' },
          { verb: 'put together', hint: 'assemble ya organize — put together' },
          { verb: 'take off', hint: 'udna ya remove — take off' }
        ],
        feedback: '"Put together" ka matlab hai kisi cheez ke hisson ko jod ke complete banana — furniture assemble karna iska perfect example hai. Baaki sab galat hain.'
      },
      {
        id: 'ptq10',
        sentence: 'The rich always _____ the poor due to their miserable condition.',
        correct: 'put down',
        options: [
          { verb: 'put up', hint: 'banana ya accommodate — put up' },
          { verb: 'put on', hint: 'pehenna — put on' },
          { verb: 'put at', hint: 'estimate karna — put at' },
          { verb: 'put down', hint: 'suppress ya criticize — put down' }
        ],
        feedback: '"Put down" ka matlab hai kisi ko suppress karna ya criticize karna — rich ka poor ko neecha dikhana iska perfect example hai. Baaki sab galat hain.'
      },
      {
        id: 'ptq11',
        sentence: 'It is getting dark so we should _____ any hotel.',
        correct: 'put up at',
        options: [
          { verb: 'put up with', hint: 'tolerate — put up with' },
          { verb: 'stayed in', hint: 'indoors rehna — stayed in' },
          { verb: 'put out', hint: 'bujhaana — put out' },
          { verb: 'put up at', hint: 'rukna — put up at' }
        ],
        feedback: '"Put up at" ka matlab hai kisi jagah — khaaskar hotel mein — rukna — andhera hone par hotel mein ruk jaana iska perfect example hai. Baaki sab galat hain.'
      }
    ]
  },

  'Reckon': {
    intro: 'Reckon ka ek main phrasal verb hai exam mein — "reckon with." Planning aur consideration ke context mein aata hai.',
    verbs: [
      {
        pv: 'reckon with',
        def_en: 'To consider or take into account something when making plans.',
        def_hi: 'Plan banate waqt kisi cheez ko consider karna ya dhyan mein rakhna ।',
        example: 'Any future strategy must reckon with the changing demographics.',
        note: 'Reckon with aur deal with dono mein something difficult handle karna hai, lekin reckon with zyada about anticipation aur planning hai. Deal with zyada about actively handling something already arisen.'
      }
    ],
    questions: [
      {
        id: 'rkq1',
        sentence: 'Have you _____ with the difficulties you might have to face?',
        correct: 'reckoned',
        options: [
          { verb: 'considered', hint: 'sochna — consider' },
          { verb: 'reckoned', hint: 'with ke saath — reckon with' },
          { verb: 'discussed', hint: 'baat karna — discuss' },
          { verb: 'pondered', hint: 'deeply sochna — ponder' }
        ],
        feedback: '"Reckon with" ka matlab hai planning mein possible difficulties ko consider karna — aane wali mushkilon ke baare mein soch lena. "Considered" bilkul galat nahi lekin yahan phrasal verb "reckon with" ka specific planning angle hai. "Discussed" galat hai. "Pondered" galat hai.'
      }
    ]
  },

  'Roll': {
    intro: 'Roll ke phrasal verbs mein launching aur arriving ke ideas hain. "Roll out" business context mein bahut common hai — products ya services launch karna.',
    verbs: [
      {
        pv: 'roll out',
        def_en: 'To officially launch or introduce a new product, service, or plan.',
        def_hi: 'Koi naya product, service, ya plan officially launch karna ।',
        example: 'The tech company will roll out its new app next quarter.',
        note: 'Roll out aur set up dono mein starting hai, lekin roll out zyada about launch ya deployment hai. Set up zyada about establishing infrastructure.'
      },
      {
        pv: 'roll in',
        def_en: 'To arrive in large quantities or numbers, often used when money or people flow in.',
        def_hi: 'Badi taadaad mein aana — khaaskar paisa ya log ।',
        example: 'After the viral post, messages started rolling in from around the world.',
        note: 'Roll in aur roll out opposite direction hain — roll out is releasing something outward, roll in is receiving something inward.'
      },
      {
        pv: 'roll over',
        def_en: 'To turn from one side to the other, or to extend a financial arrangement.',
        def_hi: 'Ek taraf se doosri taraf palatna, ya kisi financial arrangement ko extend karna ।',
        example: 'She rolled over in bed and went back to sleep.',
        note: 'Roll over aur roll out bilkul alag hain — roll over is physical turning or financial extension, roll out is launching.'
      },
      {
        pv: 'roll up',
        def_en: 'To arrive at a place, especially in a casual or unexpected manner.',
        def_hi: 'Kisi jagah par, khaaskar casual ya unexpected tarike se, pahunchna ।',
        example: 'They rolled up to the party two hours late.',
        note: 'Roll up aur turn up dono mein unexpected arrival ka idea hai. "Roll up your sleeves" ek common idiom hai — kaam ke liye taiyaar hona.'
      }
    ],
    questions: [
      {
        id: 'rlq1',
        sentence: 'The company will _____ a new product next year.',
        correct: 'roll out',
        options: [
          { verb: 'roll up', hint: 'casual arrive karna — roll up' },
          { verb: 'roll over', hint: 'palatna — roll over' },
          { verb: 'roll in', hint: 'badi taadaad mein aana — roll in' },
          { verb: 'roll out', hint: 'launch karna — roll out' }
        ],
        feedback: '"Roll out" ka matlab hai officially kuch launch ya introduce karna. Baaki sab galat hain.'
      }
    ]
  },

  'Run': {
    intro: 'Run ke phrasal verbs mein movement, accidents, aur financial problems ke ideas hain. "Run into" aur "run over" dono mein collision ya encounter hai, lekin severity aur context bilkul alag hain.',
    verbs: [
      {
        pv: 'run into',
        def_en: 'To accidentally meet someone, or to encounter a problem or difficulty.',
        def_hi: 'Kisi se achanak mil jaana, ya kisi problem ya mushkil ka saamna karna ।',
        example: 'I ran into my old school friend at the supermarket.',
        note: 'Run into ke do common meanings hain — accidental meeting aur encountering difficulties. "Run into debt" means to face debt problems.'
      },
      {
        pv: 'run along',
        def_en: 'To go away — used when telling a child to leave.',
        def_hi: 'Jao — usually bacho ko kahi jaane ke liye kehna ।',
        example: 'Run along now, children — the adults need to talk.',
        note: 'Run along sirf children ko dismiss karne ke liye use hota hai typically.'
      },
      {
        pv: 'run to',
        def_en: 'To reach a particular amount or total.',
        def_hi: 'Kisi khaas amount ya total tak pahunchna ।',
        example: 'The repair costs ran to over fifty thousand rupees.',
        note: 'Run to specifically about amounts and totals hai. Run into zyada about accidental encounters ya problems hai.'
      },
      {
        pv: 'run over',
        def_en: 'To hit someone with a vehicle, or to quickly review something.',
        def_hi: 'Gaadi se kisi ko kuchalana, ya kisi cheez ko jaldi review karna ।',
        example: 'He was run over by a truck while crossing the road.',
        note: 'Run over aur run into dono mein collision hai, lekin run over specifically kisi insaan ya animal ko vehicle se crush karna hai.'
      },
      {
        pv: 'run after',
        def_en: 'To chase someone or something, or to try to form a romantic relationship.',
        def_hi: 'Kisi ke peeche bhaagna, ya kisi ke saath romantic rishta banana ki koshish karna ।',
        example: 'The dog ran after the ball and caught it.',
        note: 'Run after aur run into dono mein chase ya encounter hai, lekin run after active pursuit hai.'
      },
      {
        pv: 'run out',
        def_en: 'To use up all of something so that none is left.',
        def_hi: 'Kisi cheez ka bilkul khatam ho jaana ।',
        example: 'We ran out of petrol in the middle of the highway.',
        note: 'Run out aur run down dono mein depletion ka idea hai, lekin run out zyada complete exhaustion ke liye hai.'
      },
      {
        pv: 'run down',
        def_en: 'To criticize someone unfairly, or to decrease gradually in power.',
        def_hi: 'Kisi ko najaayaz tarike se criticize karna, ya dheere dheere khatam hona ।',
        example: 'Stop running down your teammates — it\'s not fair.',
        note: 'Run down aur run out dono mein khatam hone ka idea hai, lekin run down zyada criticism ke liye hai ya gradual decrease ke liye.'
      },
      {
        pv: 'run away',
        def_en: 'To flee from a place or situation.',
        def_hi: 'Kisi jagah ya situation se bhaag jaana ।',
        example: 'As soon as the MP saw the media, he ran away to avoid their questions.',
        note: 'Run away aur get away from dono mein fleeing hai, lekin run away zyada about physically running to escape. Get away from zyada about escaping detection or responsibility.'
      },
      {
        pv: 'run away with',
        def_en: 'When emotions or imagination escape one\'s control, or to win easily.',
        def_hi: 'Emotions ya imagination pe kaaboo na rehna, ya bahut aasaani se jeet jaana ।',
        example: 'Don\'t let your imagination run away with you.',
        note: 'Run away with aur run away bilkul alag hain — run away with is about emotions/imagination being uncontrolled, or winning by a large margin. Run away is physically fleeing.'
      }
    ],
    questions: [
      {
        id: 'ruq1',
        sentence: 'Though Mr. Swami _____ debt, he did not stop wasting money.',
        correct: 'ran into',
        options: [
          { verb: 'ran over', hint: 'kisi ko kuchalana — run over' },
          { verb: 'ran out', hint: 'bilkul khatam — run out' },
          { verb: 'ran into', hint: 'problem ya debt ka saamna — run into' },
          { verb: 'ran down', hint: 'criticize ya decrease — run down' }
        ],
        feedback: '"Ran into" ka matlab hai kisi problem ya difficult situation ka saamna karna — "ran into debt" means debt ki problem face karna. Baaki sab galat hain.'
      },
      {
        id: 'ruq2',
        sentence: '_____ now, children — the adults need to talk.',
        correct: 'Run along',
        options: [
          { verb: 'Run out', hint: 'khatam hona — run out' },
          { verb: 'Run after', hint: 'peeche bhaagna — run after' },
          { verb: 'Run along', hint: 'baccho ko jaane kehna — run along' },
          { verb: 'Run into', hint: 'problem ya encounter — run into' }
        ],
        feedback: '"Run along" ek informal expression hai jo usually baccho ko kahi jaane ke liye kaha jaata hai. Baaki sab galat hain.'
      },
      {
        id: 'ruq3',
        sentence: 'The repair costs _____ over fifty thousand rupees.',
        correct: 'ran to',
        options: [
          { verb: 'ran into', hint: 'problem ya encounter — run into' },
          { verb: 'ran over', hint: 'kuchalana ya review — run over' },
          { verb: 'ran out', hint: 'khatam hona — run out' },
          { verb: 'ran to', hint: 'kisi amount tak pahunchna — run to' }
        ],
        feedback: '"Ran to" ka matlab hai kisi amount ya total tak pahunchna. Baaki sab galat hain.'
      },
      {
        id: 'ruq4',
        sentence: 'He was _____ by a truck while crossing the road.',
        correct: 'run over',
        options: [
          { verb: 'run into', hint: 'encounter ya meet — run into' },
          { verb: 'run down', hint: 'criticize ya decrease — run down' },
          { verb: 'run out', hint: 'khatam hona — run out' },
          { verb: 'run over', hint: 'gaadi se kuchalana — run over' }
        ],
        feedback: '"Run over" ka matlab hai kisi ko vehicle se kuchalana. Baaki sab galat hain.'
      },
      {
        id: 'ruq5',
        sentence: 'The dog _____ the ball and caught it.',
        correct: 'ran after',
        options: [
          { verb: 'ran into', hint: 'encounter ya meet — run into' },
          { verb: 'ran over', hint: 'kuchalana — run over' },
          { verb: 'ran along', hint: 'baccho ko kehna — run along' },
          { verb: 'ran after', hint: 'peeche bhaagna — run after' }
        ],
        feedback: '"Ran after" ka matlab hai kisi ke peeche chase karna. Baaki sab galat hain.'
      },
      {
        id: 'ruq6',
        sentence: 'We _____ of petrol in the middle of the highway.',
        correct: 'ran out',
        options: [
          { verb: 'ran down', hint: 'criticize ya decrease — run down' },
          { verb: 'ran over', hint: 'kuchalana ya review — run over' },
          { verb: 'ran into', hint: 'encounter ya meet — run into' },
          { verb: 'ran out', hint: 'bilkul khatam — run out' }
        ],
        feedback: '"Ran out" ka matlab hai kisi cheez ka bilkul khatam ho jaana. Baaki sab galat hain.'
      },
      {
        id: 'ruq7',
        sentence: 'Stop _____ your teammates — it\'s not fair.',
        correct: 'running down',
        options: [
          { verb: 'running out', hint: 'khatam hona — run out' },
          { verb: 'running after', hint: 'peeche bhaagna — run after' },
          { verb: 'running into', hint: 'encounter — run into' },
          { verb: 'running down', hint: 'criticize karna — run down' }
        ],
        feedback: '"Running down" ka matlab hai kisi ko najaayaz tarike se criticize karna. Baaki sab galat hain.'
      },
      {
        id: 'ruq8',
        sentence: 'As soon as the MP saw the media, he _____ to avoid media\'s questions.',
        correct: 'ran away',
        options: [
          { verb: 'put at', hint: 'estimate karna — put at' },
          { verb: 'pulled down', hint: 'demolish — pull down' },
          { verb: 'pulled up', hint: 'rokna — pull up' },
          { verb: 'ran away', hint: 'bhaag jaana — run away' }
        ],
        feedback: '"Ran away" ka matlab hai kisi jagah ya situation se bhaag jaana — media se bachne ke liye bhaagna iska perfect example hai. Baaki sab galat hain.'
      },
      {
        id: 'ruq9',
        sentence: 'The person who always _____ wealth can never be in a good relation with family members.',
        correct: 'runs after',
        options: [
          { verb: 'runs away with', hint: 'emotion uncontrolled ya win easily — run away with' },
          { verb: 'runs away', hint: 'bhaag jaana — run away' },
          { verb: 'round up', hint: 'arrest karna — round up' },
          { verb: 'runs after', hint: 'peeche bhaagna ya pursue — run after' }
        ],
        feedback: '"Runs after" ka matlab hai kisi cheez ko pursue karna ya uske peeche bhaagna — wealth ke peeche bhaagana iska perfect example hai. "Runs away with" galat hai — woh emotions/imagination ke baare mein hai. "Runs away" galat hai — woh physically flee karna hai. "Round up" galat hai — woh arrest karne ke liye hai.'
      }
    ]
  },

  'Set': {
    intro: 'Set ke phrasal verbs mein starting, establishing, aur beginning ke ideas hain. "Set up" aur "set out" dono mein shuruwat hai lekin context alag hai — ek organization establish karna, doosra journey start karna.',
    verbs: [
      {
        pv: 'set up',
        def_en: 'To establish or start a business, organization, or system.',
        def_hi: 'Koi business, organization, ya system banana ya establish karna ।',
        example: 'She set up her own bakery after years of working for others.',
        note: 'Set up aur set out dono mein starting hai, lekin set up zyada about establishing something permanent.'
      },
      {
        pv: 'set off',
        def_en: 'To start a journey, or to cause something to begin or happen.',
        def_hi: 'Safar shuru karna, ya kisi cheez ko trigger karna ।',
        example: 'We set off early in the morning to avoid traffic.',
        note: 'Set off aur set out dono mein journey starting hai, lekin set off ka ek extra meaning hai — triggering something like an alarm or reaction.'
      },
      {
        pv: 'set forward',
        def_en: 'To state or describe something clearly in writing or speech.',
        def_hi: 'Kisi cheez ko clearly bolna ya likhna ।',
        example: 'She set forward her arguments clearly in the report.',
        note: 'Set forward aur set up bilkul alag hain — set forward is about presenting ideas clearly, set up is about establishing something.'
      },
      {
        pv: 'set over',
        def_en: 'To transfer something from one person to another.',
        def_hi: 'Kisi cheez ko ek insaan se doosre insaan ko transfer karna ।',
        example: 'The property was set over to the new owner after the sale.',
        note: 'Set over is transfer of authority or property — less common than other set phrasal verbs.'
      },
      {
        pv: 'set upon',
        def_en: 'To suddenly and violently attack someone.',
        def_hi: 'Kisi par achanak aur zor se hamla karna ।',
        example: 'The travellers were set upon by robbers on the road.',
        note: 'Set upon specifically violent attack ke liye hai. Set about zyada about starting a task vigorously hai.'
      },
      {
        pv: 'set out',
        def_en: 'To begin a journey, or to start doing something with a specific aim.',
        def_hi: 'Safar shuru karna, ya kisi specific maqsad ke saath kaam shuru karna ।',
        example: 'Though he set out for Jamaica, he landed up in Nigeria.',
        note: 'Set out aur set off almost same hain for journeys. Set out zyada implies a specific purpose or destination.'
      },
      {
        pv: 'set about',
        def_en: 'To start doing something in a determined or energetic way, or to attack someone.',
        def_hi: 'Kisi kaam ko josh se shuru karna, ya kisi par hamla karna ।',
        example: 'She set about cleaning the house as soon as guests left.',
        note: 'Set about aur set upon dono mein attack ka meaning ho sakta hai, lekin set about zyada about vigorously starting a task hai.'
      },
      {
        pv: 'set aside',
        def_en: 'To save or keep something for a particular purpose.',
        def_hi: 'Kisi khaas maqsad ke liye kuch bachaana ya rakhna ।',
        example: 'She sets aside some money every month for emergencies.',
        note: 'Set aside aur set up bilkul alag hain — set aside is saving/reserving something for later.'
      },
      {
        pv: 'set in',
        def_en: 'When something unpleasant begins and seems likely to continue seriously.',
        def_hi: 'Jab koi buri cheez shuru ho aur serious taur pe jaari rehne lage ।',
        example: 'Winter has really set in — it\'s been freezing for weeks now.',
        note: 'Set in aur set off dono mein starting hai, lekin set in specifically unpleasant things ke liye hai jo ek baar shuru hone ke baad seriously continue karte hain. "Decay set in", "depression set in" — yeh common uses hain.'
      }
    ],
    questions: [
      {
        id: 'stq1',
        sentence: 'The NCERT was _____ by the government to assist Central and State Governments.',
        correct: 'set up',
        options: [
          { verb: 'set off', hint: 'safar shuru ya trigger — set off' },
          { verb: 'set over', hint: 'transfer karna — set over' },
          { verb: 'set upon', hint: 'attack karna — set upon' },
          { verb: 'set up', hint: 'organization banana — set up' }
        ],
        feedback: '"Set up" ka matlab hai kisi organization ya institution ko establish karna. Baaki sab galat hain.'
      },
      {
        id: 'stq2',
        sentence: 'We _____ early in the morning to avoid traffic.',
        correct: 'set off',
        options: [
          { verb: 'set up', hint: 'establish karna — set up' },
          { verb: 'set about', hint: 'kaam josh se shuru — set about' },
          { verb: 'set off', hint: 'safar shuru karna — set off' },
          { verb: 'set aside', hint: 'rakhna ya bachana — set aside' }
        ],
        feedback: '"Set off" ka matlab hai safar shuru karna. Baaki sab galat hain.'
      },
      {
        id: 'stq3',
        sentence: 'She _____ her arguments clearly in the report.',
        correct: 'set forward',
        options: [
          { verb: 'set aside', hint: 'rakhna — set aside' },
          { verb: 'set upon', hint: 'attack — set upon' },
          { verb: 'set off', hint: 'trigger ya safar — set off' },
          { verb: 'set forward', hint: 'clearly present karna — set forward' }
        ],
        feedback: '"Set forward" ka matlab hai kisi idea ya argument ko clearly articulate karna. Baaki sab galat hain.'
      },
      {
        id: 'stq4',
        sentence: 'The property was _____ to the new owner after the sale.',
        correct: 'set over',
        options: [
          { verb: 'set up', hint: 'establish — set up' },
          { verb: 'set out', hint: 'safar shuru — set out' },
          { verb: 'set over', hint: 'transfer karna — set over' },
          { verb: 'set about', hint: 'josh se shuru — set about' }
        ],
        feedback: '"Set over" ka matlab hai kisi cheez ko ek insaan se doosre ko formally transfer karna. Baaki sab galat hain.'
      },
      {
        id: 'stq5',
        sentence: 'The travellers were _____ by robbers on the road.',
        correct: 'set upon',
        options: [
          { verb: 'set about', hint: 'josh se shuru ya attack — set about' },
          { verb: 'set off', hint: 'trigger ya safar — set off' },
          { verb: 'set aside', hint: 'rakhna — set aside' },
          { verb: 'set upon', hint: 'violently attack karna — set upon' }
        ],
        feedback: '"Set upon" ka matlab hai kisi par achanak aur violently hamla karna. Baaki sab galat hain.'
      },
      {
        id: 'stq6',
        sentence: 'Though he _____ for Jamaica, he landed up in Nigeria.',
        correct: 'set out',
        options: [
          { verb: 'set up', hint: 'establish — set up' },
          { verb: 'set about', hint: 'josh se kaam shuru — set about' },
          { verb: 'set out', hint: 'safar shuru karna — set out' },
          { verb: 'set aside', hint: 'rakhna — set aside' }
        ],
        feedback: '"Set out" ka matlab hai kisi specific destination ke liye safar shuru karna. Baaki sab galat hain.'
      },
      {
        id: 'stq7',
        sentence: 'She _____ cleaning the house as soon as the guests left.',
        correct: 'set about',
        options: [
          { verb: 'set aside', hint: 'rakhna ya bachana — set aside' },
          { verb: 'set off', hint: 'trigger ya safar — set off' },
          { verb: 'set upon', hint: 'attack — set upon' },
          { verb: 'set about', hint: 'josh se kaam shuru karna — set about' }
        ],
        feedback: '"Set about" ka matlab hai kisi kaam ko energetically aur determinedly shuru karna. Baaki sab galat hain.'
      },
      {
        id: 'stq8',
        sentence: 'She _____ some money every month for emergencies.',
        correct: 'sets aside',
        options: [
          { verb: 'sets off', hint: 'trigger ya safar — set off' },
          { verb: 'sets up', hint: 'establish — set up' },
          { verb: 'sets aside', hint: 'khaas maqsad ke liye rakhna — set aside' },
          { verb: 'sets out', hint: 'safar shuru — set out' }
        ],
        feedback: '"Sets aside" ka matlab hai kisi khaas purpose ke liye regularly kuch bachana. Baaki sab galat hain.'
      },
      {
        id: 'stq9',
        sentence: 'Winter has really _____ — it\'s been freezing for weeks now.',
        correct: 'set in',
        options: [
          { verb: 'set off', hint: 'safar shuru ya trigger — set off' },
          { verb: 'set up', hint: 'establish — set up' },
          { verb: 'set in', hint: 'buri cheez ka serious hona — set in' },
          { verb: 'set out', hint: 'safar shuru — set out' }
        ],
        feedback: '"Set in" ka matlab hai jab koi unpleasant cheez shuru ho aur seriously continue hone lage — winter ka aana aur freezing temperature iska perfect example hai. "Set off" trigger karna hai. "Set up" establish karna hai. "Set out" journey start karna hai. Sirf "set in" yahan ka continuing unpleasant beginning capture karta hai.'
      }
    ]
  },
// ===== FROM SECOND SOURCE (APPENDED CODE) =====

  'Catch': {
    intro: 'Catch ka matlab hai pakadna — lekin "catch up on" ek alag hi race ka idea deta hai. Jab baaki sab aage nikal gaye hon aur aap peeche reh gaye ho — chahe kaam mein, news mein, ya neend mein — tab aap "catch up on" karte ho.',
    verbs: [
      {
        pv: 'catch up on',
        def_en: 'To do something that you have not been able to do until now, because you were too busy or missed it earlier.',
        def_hi: 'Woh kaam karna jo pehle busy hone ki wajah se nahi ho paya tha ।',
        example: 'I spent the whole weekend catching up on the assignments I had missed.',
        note: '"Catch up on" aur "make up for" mein fark: catch up on specific missed tasks ya content ke liye hai — kaam, neend, news. Make up for compensation ka idea deta hai.'
      }
    ],
    questions: [
      {
        id: 'ctq1',
        sentence: 'I tried to _____ my work, but the noise kept distracting me.',
        correct: 'catch up on',
        options: [
          { verb: 'run into', hint: 'achanak milna — run into' },
          { verb: 'break down', hint: 'kharab hona — break down' },
          { verb: 'give up', hint: 'chod dena — give up' },
          { verb: 'catch up on', hint: 'missed kaam poora karna — catch up on' }
        ],
        feedback: '"Catch up on" sahi hai kyunki woh woh kaam complete karne ki koshish kar raha tha jo pehle nahi ho paya — noise distract kar raha tha matlab kuch miss hua tha. Sirf "catch up on" yahan ka missed-work-recovery idea capture karta hai.'
      }
    ]
  },

  'Keep': {
    intro: '"Keep to oneself" ek bohot personal aur private expression hai — jab koi insaan ya toh apni baat share nahi karta, ya akela rehna prefer karta hai.',
    verbs: [
      {
        pv: 'keep to oneself',
        def_en: 'To not share information, thoughts, or feelings with others; or to prefer to spend time alone.',
        def_hi: 'Apni baatein doosron ko na batana ya khud mein rehna prefer karna ।',
        example: 'He always kept to himself at work and rarely joined team lunches.',
        note: '"Keep to oneself" ke do uses hain: ek information ke liye — "keep that to yourself." Doosra personality ke liye — "she keeps to herself." Context se samjho.'
      }
    ],
    questions: [
      {
        id: 'kpq1',
        sentence: 'You should have _____ that _____ yourself; it wasn\'t necessary to say it out loud.',
        correct: 'kept, to',
        options: [
          { verb: 'put, to', hint: 'rakhna — put to' },
          { verb: 'kept, to', hint: 'baat apne paas rakhna — kept to' },
          { verb: 'kept, from', hint: 'rokna — kept from' },
          { verb: 'hold, back', hint: 'rokna — hold back' }
        ],
        feedback: '"Kept to yourself" sahi answer hai — "keep something to yourself" ka matlab hai koi information share na karna, apne paas rakhna.'
      }
    ]
  },

  'Egg': {
    intro: '"Egg on" — egg se scrambled eggs nahi, yahan encouragement hai. Koi insaan doosre ko kisi risky ya foolish kaam ke liye provoke kare — that\'s egging someone on.',
    verbs: [
      {
        pv: 'egg on',
        def_en: 'To encourage or provoke someone to do something, often something risky or foolish.',
        def_hi: 'Kisi ko koi risky ya galat kaam karne ke liye encourage ya provoke karna ।',
        example: 'His friends egged him on to jump from the cliff, even though it was dangerous.',
        note: '"Egg on" mein zyada negative peer pressure ka flavor hai — koi doosre ko galat direction mein push kar raha hai.'
      }
    ],
    questions: [
      {
        id: 'egq1',
        sentence: 'His friends _____ him _____ to jump off the high dive, even though he was afraid.',
        correct: 'egged, on',
        options: [
          { verb: 'dragged, on', hint: 'tediously lamba rehna — drag on' },
          { verb: 'egged, on', hint: 'risky kaam ke liye provoke karna — egg on' },
          { verb: 'dwelt, on', hint: 'baar baar sochna — dwell on' },
          { verb: 'drew, on', hint: 'time karib aana — draw on' }
        ],
        feedback: '"Egged on" sahi hai kyunki doston ne use high dive se koodne ke liye provoke kiya — risky kaam ke liye encouragement. Sirf "egged on" yahan ka peer-pressure provocation capture karta hai.'
      }
    ]
  },

  'Mess': {
    intro: 'Mess matlab gandagi ya confusion — aur iske phrasal verbs bhi yahi vibe rakhte hain. "Mess with" kisi ko provoke karna hai aur "mess up" kuch bigaad dena.',
    verbs: [
      {
        pv: 'mess with',
        def_en: 'To tease, provoke, or annoy someone; or to tamper with something.',
        def_hi: 'Kisi ko chhedna, provoke karna, ya kisi cheez se chhedo karna ।',
        example: 'Don\'t mess with the electrical wiring — you could hurt yourself.',
        note: '"Mess with" ke do uses: ek people ke liye — "don\'t mess with me." Doosra objects ke liye — "don\'t mess with the settings."'
      },
      {
        pv: 'mess up',
        def_en: 'To spoil, ruin, or do something badly; or to make something untidy.',
        def_hi: 'Kuch bigaad dena, kharab karna, ya galti karna ।',
        example: 'I really messed up the presentation by forgetting the key slides.',
        note: '"Mess up" aur "screw up" almost same hain — dono kuch bigaadne ke liye.'
      }
    ],
    questions: [
      {
        id: 'msq1',
        sentence: 'If you _____ him, you\'re asking for trouble — he doesn\'t take jokes lightly.',
        correct: 'mess with',
        options: [
          { verb: 'mess up', hint: 'kuch bigaadna — mess up' },
          { verb: 'mess with', hint: 'kisi ko provoke karna — mess with' },
          { verb: 'own up', hint: 'galti maan lena — own up' },
          { verb: 'egg on', hint: 'kisi ko provoke karna — egg on' }
        ],
        feedback: '"Mess with" sahi hai kyunki woh use provoke ya annoy karne ki baat hai — "trouble maangna" clearly provocation context dikhata hai.'
      }
    ]
  },

  'Drag': {
    intro: '"Drag on" — jab koi cheez itni lambi ho jaaye ki boring aur exhausting lagne lage. Meetings, movies, speeches — sab "drag on" kar sakte hain.',
    verbs: [
      {
        pv: 'drag on',
        def_en: 'To last much longer than expected or desired, often in a tedious manner.',
        def_hi: 'Kisi cheez ka zaroorat se zyada lamba aur boring tarike se chalna ।',
        example: 'The meeting dragged on for three hours even though it was supposed to end at noon.',
        note: '"Drag on" mein tedium aur frustration ka undertone hai — "yeh khatam kyun nahi ho raha?"'
      }
    ],
    questions: [
      {
        id: 'dgq1',
        sentence: 'The debate _____ for hours without any conclusion.',
        correct: 'dragged on',
        options: [
          { verb: 'egged on', hint: 'provoke karna — egg on' },
          { verb: 'dragged on', hint: 'boring tarike se lamba rehna — drag on' },
          { verb: 'dwelt on', hint: 'baar baar sochna — dwell on' },
          { verb: 'drew on', hint: 'time karib aana — draw on' }
        ],
        feedback: '"Dragged on" sahi hai kyunki debate ghanton tak boring aur tedious tarike se chali bina kisi conclusion ke — yeh exactly "drag on" ka use case hai.'
      }
    ]
  },

  'Own': {
    intro: '"Own up" — "own" matlab maliki lena, aur jab galti ki baat ho toh "own up" ka matlab hai apni galti ki zimmedari lena.',
    verbs: [
      {
        pv: 'own up',
        def_en: 'To admit or confess to a mistake, fault, or wrongdoing.',
        def_hi: 'Apni galti ya gunah ko honestly sweekar karna ।',
        example: 'He finally owned up to breaking the vase, even though no one had suspected him.',
        note: '"Own up" mein agency aur responsibility lene ka idea zyada strong hai — "I own this mistake."'
      }
    ],
    questions: [
      {
        id: 'owq1',
        sentence: 'It\'s important to _____ when you make a mistake, so you can learn from it.',
        correct: 'own up',
        options: [
          { verb: 'pass out', hint: 'behosh hona — pass out' },
          { verb: 'look down', hint: 'neecha dekhna — look down' },
          { verb: 'own up', hint: 'galti maan lena — own up' },
          { verb: 'cut down', hint: 'kam karna — cut down' }
        ],
        feedback: '"Own up" sahi hai kyunki galti hone par honestly sweekar karna zaroori hai taaki seekh sako — yeh exactly "own up" hai.'
      }
    ]
  },

  'Rail': {
    intro: '"Rail against" — jab koi kisi system, policy, ya insaan ke khilaaf angrily bolte bolte nahi rukta — woh "railing against" kar raha hai.',
    verbs: [
      {
        pv: 'rail against',
        def_en: 'To complain or protest loudly and angrily about something, often repeatedly.',
        def_hi: 'Kisi cheez ke khilaaf baar baar aur angrily shikayat karna ya protest karna ।',
        example: 'The activists railed against the new environmental policies for weeks.',
        note: '"Rail against" persistent aur public protest ke liye use hota hai — often formal settings mein.'
      }
    ],
    questions: [
      {
        id: 'rlq1',
        sentence: 'The workers _____ the unfair policies of the government.',
        correct: 'railed against',
        options: [
          { verb: 'stood by', hint: 'support karna — stand by' },
          { verb: 'roped in', hint: 'persuade karke involve karna — rope in' },
          { verb: 'rooted out', hint: 'destroy karna — root out' },
          { verb: 'railed against', hint: 'angrily protest karna — rail against' }
        ],
        feedback: '"Railed against" sahi hai kyunki workers government ki unfair policies ke khilaaf angrily protest kar rahe the — yeh exactly "rail against" hai.'
      }
    ]
  },

  'Rope': {
    intro: '"Rope in" — literally rope se kisi ko kheenchna, figuratively kisi ko kisi kaam mein involve karna jab woh karna nahi chahta.',
    verbs: [
      {
        pv: 'rope in',
        def_en: 'To persuade someone to take part in an activity, often despite their reluctance.',
        def_hi: 'Kisi ko kisi kaam mein shamil karna, khaasakar tab jab woh karna nahi chahta ।',
        example: 'I got roped into organizing the office party even though I had no time.',
        note: '"Rope in" thoda softer — persuasion se involve karna. "Drag into" zyada forceful.'
      }
    ],
    questions: [
      {
        id: 'rpq1',
        sentence: 'The manager _____ new volunteers to handle the extra load.',
        correct: 'roped in',
        options: [
          { verb: 'railed against', hint: 'angrily protest karna — rail against' },
          { verb: 'roped in', hint: 'reluctant logon ko involve karna — rope in' },
          { verb: 'rooted out', hint: 'completely hatana — root out' },
          { verb: 'stood by', hint: 'support karna — stand by' }
        ],
        feedback: '"Roped in" sahi hai kyunki manager ne naye volunteers ko — shayad reluctantly — extra load handle karne ke liye involve kiya.'
      }
    ]
  },

  'Rip': {
    intro: '"Rip" ka matlab tezzi se phaadna — aur iske phrasal verbs bhi yahi energy rakhte hain. "Rip off" financial cheating, "rip out" forceful removal, "rip up" complete destruction.',
    verbs: [
      {
        pv: 'rip off',
        def_en: 'To cheat someone financially by overcharging or deceiving them.',
        def_hi: 'Kisi se zyada paisa leke ya dhoka dekar financially cheat karna ।',
        example: 'That mechanic ripped me off — he charged me double the actual repair cost.',
        note: '"Rip off" specifically financial overcharging ke liye zyada use hota hai.'
      },
      {
        pv: 'rip out',
        def_en: 'To remove something quickly and roughly, tearing it away.',
        def_hi: 'Kisi cheez ko jahan woh lagi thi wahan se force se aur jaldi nikaalna ।',
        example: 'She ripped out the pages of the diary she no longer wanted.',
        note: '"Rip out" thoda more violent and destructive feel karta hai.'
      },
      {
        pv: 'rip up',
        def_en: 'To tear something into small pieces, completely destroying it.',
        def_hi: 'Kisi cheez ko chote tukdon mein phaad dena, poori tarah khatam karna ।',
        example: 'He ripped up the contract in anger and threw the pieces on the floor.',
        note: '"Rip up" complete destruction into pieces.'
      }
    ],
    questions: [
      {
        id: 'rpq1',
        sentence: 'If you _____ anyone, surely you will be affected adversely in a direct or indirect way.',
        correct: 'rip off',
        options: [
          { verb: 'rip up', hint: 'pieces mein phaadna — rip up' },
          { verb: 'rip out', hint: 'force se nikalna — rip out' },
          { verb: 'rip off', hint: 'financially cheat karna — rip off' },
          { verb: 'rip on', hint: 'yeh sahi phrasal verb nahi' }
        ],
        feedback: '"Rip off" sahi hai kyunki kisi ko financially cheat karne ki baat hai — "adversely affected" clearly consequence of cheating ka idea deta hai.'
      }
    ]
  },

  'Sail': {
    intro: '"Sail through" — ship jo smooth water mein bina kisi rukaawat ke sail kare, wahi feeling jab koi exam ya challenge bahut easily clear kare.',
    verbs: [
      {
        pv: 'sail through',
        def_en: 'To pass or complete something with great ease.',
        def_hi: 'Kisi mushkil kaam ya exam ko aasaani se aur bina kisi takleef ke complete karna ।',
        example: 'She sailed through the interview and was offered the job on the spot.',
        note: '"Sail through" aur "breeze through" almost synonymous — dono effortless success ke liye.'
      }
    ],
    questions: [
      {
        id: 'slq1',
        sentence: 'He was an extraordinary student, that\'s why he _____ the SSC exams in only 3 months.',
        correct: 'sailed through',
        options: [
          { verb: 'harped on', hint: 'baar baar ek baat bolna — harp on' },
          { verb: 'ironed out', hint: 'problems solve karna — iron out' },
          { verb: 'jotted down', hint: 'jaldi likhna — jot down' },
          { verb: 'sailed through', hint: 'exam aasaani se clear karna — sail through' }
        ],
        feedback: '"Sailed through" sahi hai kyunki extraordinary student ne SSC exams sirf 3 mahine mein aasaani se clear kiye — "sail through" exactly yahi effortless success hai.'
      }
    ]
  },

  'Stamp': {
    intro: '"Stamp out" — jaise aap paaon se koi cheez crush karte ho, usi force se kisi burai ya problem ko destroy karna.',
    verbs: [
      {
        pv: 'stamp out',
        def_en: 'To completely destroy or eliminate something, especially something harmful.',
        def_hi: 'Kisi harmful ya buri cheez ko bilkul khatam kar dena ya destroy karna ।',
        example: 'The government launched a campaign to stamp out corruption at all levels.',
        note: '"Stamp out" zyada specific actions ya practices ke liye — corruption, disease, bad habits.'
      }
    ],
    questions: [
      {
        id: 'stq1',
        sentence: 'In Afghanistan, Talibans _____ the government and established their regime.',
        correct: 'stamped out',
        options: [
          { verb: 'lapped up', hint: 'eagerly receive karna — lap up' },
          { verb: 'laughed at', hint: 'mazak udaana — laugh at' },
          { verb: 'stamped out', hint: 'force se khatam karna — stamp out' },
          { verb: 'kept up', hint: 'maintain karna — keep up' }
        ],
        feedback: '"Stamped out" sahi hai kyunki Taliban ne force se government ko completely destroy kar ke apna regime establish kiya.'
      }
    ]
  },

  'Lap': {
    intro: '"Lap up" — jaise billi dudh laplapati hai, wahi eagerness kisi bhi cheez — compliments, attention, information — ke liye.',
    verbs: [
      {
        pv: 'lap up',
        def_en: 'To receive or enjoy something eagerly and enthusiastically.',
        def_hi: 'Kisi cheez ko bahut eagerness aur enthusiasm se receive ya enjoy karna ।',
        example: 'The audience lapped up every word of the comedian\'s performance.',
        note: '"Lap up" zyada immediate, enthusiastic enjoyment ke liye — compliments, praise, attention.'
      }
    ],
    questions: [
      {
        id: 'lpq1',
        sentence: 'The puppy eagerly drank the milk from the bowl, because it was likely hungry or thirsty.',
        correct: 'lapped up',
        options: [
          { verb: 'jotted down', hint: 'jaldi likhna — jot down' },
          { verb: 'lapped in', hint: 'yeh sahi phrasal verb nahi' },
          { verb: 'lapped up', hint: 'eagerly peena ya receive karna — lap up' },
          { verb: 'jotted on', hint: 'yeh sahi phrasal verb nahi' }
        ],
        feedback: '"Lapped up" sahi hai kyunki puppy milk eagerly pi raha tha — "lap up" literally animals ke liye use hota hai jab woh tongue se liquid peete hain.'
      },
      {
        id: 'lpq2',
        sentence: 'The public _____ the new regime\'s propaganda eagerly.',
        correct: 'lapped up',
        options: [
          { verb: 'stamped out', hint: 'force se khatam karna — stamp out' },
          { verb: 'lapped up', hint: 'eagerly accept karna — lap up' },
          { verb: 'kept up', hint: 'maintain karna — keep up' },
          { verb: 'laughed at', hint: 'mazak udaana — laugh at' }
        ],
        feedback: '"Lapped up" sahi hai kyunki public ne propaganda ko bahut eagerly aur enthusiastically accept kiya — yeh "lap up" ka figurative use hai.'
      }
    ]
  },

  'Harp': {
    intro: '"Harp on" — jab koi ek hi topic ko baar baar repeat karta rahe bina khatam kiye — woh "harping on" kar raha hai.',
    verbs: [
      {
        pv: 'harp on',
        def_en: 'To talk about something repeatedly and tediously, often to the annoyance of others.',
        def_hi: 'Kisi ek cheez ke baare mein baar baar aur boringly baat karte rehna ।',
        example: 'My grandfather always harps on about how much better things were in his day.',
        note: '"Harp on" mein listener ki frustration implied hai.'
      }
    ],
    questions: [
      {
        id: 'hrq1',
        sentence: 'His teacher kept _____ his one weakness, even though he was excellent otherwise.',
        correct: 'harping on',
        options: [
          { verb: 'ironing out', hint: 'problems solve karna — iron out' },
          { verb: 'sailing through', hint: 'aasaani se clear karna — sail through' },
          { verb: 'harping on', hint: 'baar baar ek baat bolna — harp on' },
          { verb: 'jotting down', hint: 'jaldi likhna — jot down' }
        ],
        feedback: '"Harping on" sahi hai kyunki teacher baar baar ek hi weakness ko boring aur repetitive tarike se mention karte rahe.'
      }
    ]
  },

  'Jot': {
    intro: '"Jot down" — jab koi cheez jaldi likhni ho taaki bhool na jao. Quick, informal, aur brief — notes, ideas, phone numbers.',
    verbs: [
      {
        pv: 'jot down',
        def_en: 'To write something down quickly and briefly so that you do not forget it.',
        def_hi: 'Koi cheez bhoolne se bachne ke liye jaldi aur thodi si likh lena ।',
        example: 'Let me jot down your phone number before I forget it.',
        note: '"Jot down" informal aur spontaneous — pen pakad ke turant likh lena.'
      }
    ],
    questions: [
      {
        id: 'jtq1',
        sentence: 'The student _____ the key points during the lecture.',
        correct: 'jotted down',
        options: [
          { verb: 'lapped up', hint: 'eagerly receive karna — lap up' },
          { verb: 'harped on', hint: 'baar baar repeat karna — harp on' },
          { verb: 'sailed through', hint: 'aasaani se clear karna — sail through' },
          { verb: 'jotted down', hint: 'jaldi notes likhna — jot down' }
        ],
        feedback: '"Jotted down" sahi hai kyunki student lecture mein key points jaldi likh raha tha yaad rakhne ke liye — exactly "jot down" ka use.'
      }
    ]
  },

  'Cast': {
    intro: '"Cast down" emotional state ke liye, "cast away" rejection ke liye — dono mein throwing energy hai.',
    verbs: [
      {
        pv: 'cast down',
        def_en: 'To make someone feel unhappy, discouraged, or dejected.',
        def_hi: 'Kisi ko udaas, nirash, ya haara hua feel karaana ।',
        example: 'The failure of his project left him feeling completely cast down for weeks.',
        note: '"Cast down" slightly old-fashioned aur literary feel.'
      },
      {
        pv: 'cast away',
        def_en: 'To throw something away as useless, or to be stranded in an isolated place.',
        def_hi: 'Kisi cheez ko bekar samajh ke phek dena; ya kisi sunsaan jagah par phas jaana ।',
        example: 'He was cast away on a deserted island after his ship sank.',
        note: '"Castaway" (noun) bhi hai — koi jo island pe stranded ho.'
      }
    ],
    questions: [
      {
        id: 'csq1',
        sentence: 'The failure of his business venture left him feeling _____ for weeks.',
        correct: 'cast down',
        options: [
          { verb: 'catch on', hint: 'popular hona ya samajhna — catch on' },
          { verb: 'cast away', hint: 'phek dena ya strand hona — cast away' },
          { verb: 'cast down', hint: 'discouraged aur sad feel karna — cast down' },
          { verb: 'catch out', hint: 'kisi ko pakadna — catch out' }
        ],
        feedback: '"Cast down" sahi hai kyunki business fail hone ke baad woh weeks tak discouraged aur sad tha — yeh exactly "cast down" hai: emotionally dejected feel karna.'
      }
    ]
  },

  'Bank': {
    intro: '"Bank upon" — jaise aap bank mein paisa rakho aur trust karo ki woh safe hai, usi trust ke saath kisi insaan ya situation par depend karna.',
    verbs: [
      {
        pv: 'bank upon',
        def_en: 'To rely on or depend on someone or something with confidence.',
        def_hi: 'Kisi insaan ya cheez par poore vishwas ke saath depend karna ।',
        example: 'You can always bank upon Priya — she never lets anyone down.',
        note: '"Bank upon", "rely on", aur "count on" teeno similar hain. Bank upon zyada confidence aur certainty ka feel deta hai.'
      }
    ],
    questions: [
      {
        id: 'bnkq1',
        sentence: 'You can _____ Nidhi to deliver the project on time; she\'s very reliable.',
        correct: 'bank upon',
        options: [
          { verb: 'bank upon', hint: 'poore vishwas ke saath depend karna — bank upon' },
          { verb: 'rely on', hint: 'depend karna — rely on' },
          { verb: 'count on', hint: 'depend karna — count on' },
          { verb: 'all of the above', hint: 'teeno sahi hain — all correct' }
        ],
        feedback: '"Bank upon", "rely on", aur "count on" teeno "depend karna" ka matlab rakhte hain aur teeno yahan grammatically fit hote hain. Isliye "all of the above" correct answer hai.'
      }
    ]
  },

  'Lie': {
    intro: '"Lie behind" kisi cheez ki hidden reason hai, "lie with" responsibility ya right ka hona hai.',
    verbs: [
      {
        pv: 'lie behind',
        def_en: 'To be the real, hidden reason or cause of something.',
        def_hi: 'Kisi cheez ki asli, chhipi hoi wajah ya cause hona ।',
        example: 'What lies behind his sudden decision to quit is still unknown.',
        note: '"Lie behind" slightly more mysterious or investigative tone.'
      },
      {
        pv: 'lie with',
        def_en: 'To be someone\'s responsibility, right, or duty.',
        def_hi: 'Kisi cheez ki zimmedari ya adhikaar kisi ke paas hona ।',
        example: 'The final decision lies with the board of directors.',
        note: '"Lie with" formal English mein common hai.'
      }
    ],
    questions: [
      {
        id: 'lwq1',
        sentence: 'What _____ his success in SSC CGL is two years of hard work and dedication.',
        correct: 'lies behind',
        options: [
          { verb: 'looks after', hint: 'dekhbhal karna — look after' },
          { verb: 'lies with', hint: 'zimmedari hona — lie with' },
          { verb: 'lies behind', hint: 'asli wajah hona — lie behind' },
          { verb: 'lies down', hint: 'let jaana — lie down' }
        ],
        feedback: '"Lies behind" sahi hai kyunki question puch raha hai SSC CGL success ki asli hidden wajah kya hai — "lie behind" exactly isi hidden cause ke liye use hota hai.'
      }
    ]
  },

  'Tide': {
    intro: '"Tide over" — jab koi mushkil time aa jaaye, koi temporarily help kare taaki aap us wave ko survive kar sako.',
    verbs: [
      {
        pv: 'tide over',
        def_en: 'To help someone through a difficult period temporarily.',
        def_hi: 'Kisi ko mushkil waqt mein temporarily help karna ।',
        example: 'Can you lend me some money to tide me over until I get my salary?',
        note: '"Tide over" hamesha temporary help ke liye hai — long-term solution nahi.'
      }
    ],
    questions: [
      {
        id: 'tdq1',
        sentence: 'The definition of a good relationship is that when he/she tides him/her _____ when another one is facing bad time.',
        correct: 'over',
        options: [
          { verb: 'on', hint: 'continue karna — on' },
          { verb: 'over', hint: 'mushkil time mein help karna — tide over' },
          { verb: 'off', hint: 'door karna — off' },
          { verb: 'at', hint: 'koi standard use nahi — at' }
        ],
        feedback: '"Over" sahi hai kyunki "tide someone over" ek fixed expression hai jiska matlab hai mushkil time mein temporarily help karna.'
      }
    ]
  },

  'Tell': {
    intro: '"Tell upon" — "tell" sirf batana nahi — "tell upon" ka matlab hai kisi par bura asar daalna.',
    verbs: [
      {
        pv: 'tell upon',
        def_en: 'To have a noticeably bad or harmful effect on someone or something.',
        def_hi: 'Kisi insaan ya cheez par bura asar dalna jo clearly dikhe ।',
        example: 'Years of stress are beginning to tell upon his health.',
        note: '"Tell upon" slightly formal aur old-fashioned.'
      }
    ],
    questions: [
      {
        id: 'tlq1',
        sentence: 'Some YouTube influencers who use abusive words are telling _____ the children.',
        correct: 'upon',
        options: [
          { verb: 'at', hint: 'criticize karna — tell at' },
          { verb: 'in', hint: 'koi standard use nahi — tell in' },
          { verb: 'off', hint: 'scold karna — tell off' },
          { verb: 'upon', hint: 'bura asar daalna — tell upon' }
        ],
        feedback: '"Upon" sahi hai kyunki influencers ke abusive language ka bacchon par bura asar pad raha hai — "tell upon" exactly yahi negative impact dikhata hai.'
      }
    ]
  },

  'Snow': {
    intro: '"Snowed under" — imagine karo snow itni zyada ho ki aap uske neeche dab jao. Usi tarah jab kaam itna zyada ho ki cope karna mushkil ho jaaye.',
    verbs: [
      {
        pv: 'snowed under',
        def_en: 'To have so much work that you can hardly manage.',
        def_hi: 'Itna zyada kaam hona ki usse handle karna mushkil ho jaaye ।',
        example: 'I can\'t take on any new projects right now — I\'m completely snowed under.',
        note: '"Snowed under" almost always used passively: "I\'m snowed under."'
      }
    ],
    questions: [
      {
        id: 'snq1',
        sentence: 'He has to reject his friend\'s invitation because he is _____ his work.',
        correct: 'snowed under',
        options: [
          { verb: 'sought after', hint: 'demand mein hona — sought after' },
          { verb: 'snowed under', hint: 'kaam se daba hona — snowed under' },
          { verb: 'part with', hint: 'kuch chodna — part with' },
          { verb: 'part from', hint: 'kisi ko chodna — part from' }
        ],
        feedback: '"Snowed under" sahi hai kyunki woh kaam ki wajah se itna busy tha ki birthday party attend nahi kar saka — "snowed under with work" exactly yahi overwhelming busyness hai.'
      }
    ]
  },

  'Black': {
    intro: '"Black out" — jab roshan duniya suddenly andhi ho jaaye. Physically behosh ho jaana, ya bijli jaana, ya memory ka part missing.',
    verbs: [
      {
        pv: 'black out',
        def_en: 'To become unconscious; or to lose all power in an area.',
        def_hi: 'Behosh ho jaana; ya kisi jagah bijli jaana ।',
        example: 'She blacked out from the heat and had to be carried inside.',
        note: '"Black out" ke teen uses hain: medical, electrical, aur censorship.'
      }
    ],
    questions: [
      {
        id: 'blkq1',
        sentence: 'When she got the news of her son\'s death, she got _____.',
        correct: 'blacked out',
        options: [
          { verb: 'looked black', hint: 'threatening lagana — look black' },
          { verb: 'blacked out', hint: 'behosh hona — black out' },
          { verb: 'turned away', hint: 'mood bad karna — turn away' },
          { verb: 'fell apart', hint: 'toot jaana — fall apart' }
        ],
        feedback: '"Blacked out" sahi hai kyunki bete ki maut ki khabar sunke woh behosh ho gayi — "black out" exactly yahi sudden unconsciousness hai from extreme shock.'
      }
    ]
  },

  'Shut': {
    intro: '"Shut down" — permanent closure ka idea. Sirf close karna nahi — completely operations band karna.',
    verbs: [
      {
        pv: 'shut down',
        def_en: 'To stop operating completely, either temporarily or permanently.',
        def_hi: 'Kisi business, system, ya operation ko completely band kar dena ।',
        example: 'The factory had to shut down because it couldn\'t afford to pay its workers.',
        note: '"Shut down" slightly more abrupt and complete. "Close down" more gradual.'
      }
    ],
    questions: [
      {
        id: 'sdq1',
        sentence: 'Many businesses were _____ during lockdown.',
        correct: 'shut down',
        options: [
          { verb: 'ended up', hint: 'finally ho jaana — end up' },
          { verb: 'fended off', hint: 'defend karna — fend off' },
          { verb: 'dressed down', hint: 'scold karna — dress down' },
          { verb: 'shut down', hint: 'completely band karna — shut down' }
        ],
        feedback: '"Shut down" sahi hai kyunki lockdown mein businesses ke operations completely band ho gaye the.'
      }
    ]
  },

  'Gear': {
    intro: '"Gear up for" — jaise machine mein gear shift karte ho higher speed ke liye, usi tarah kisi important task ke liye mentally aur practically ready hona.',
    verbs: [
      {
        pv: 'gear up for',
        def_en: 'To prepare for an important event, task, or challenge.',
        def_hi: 'Kisi important event ya mushkil kaam ke liye taiyaar hona ।',
        example: 'The entire team is gearing up for the product launch next month.',
        note: '"Gear up for" mein zyada energy aur excitement ka sense hai — active, enthusiastic preparation.'
      }
    ],
    questions: [
      {
        id: 'grq1',
        sentence: 'Now exams are very close, so we should _____ this.',
        correct: 'gear up for',
        options: [
          { verb: 'prepared for', hint: 'grammar issue — modal ke baad base form chahiye' },
          { verb: 'give up', hint: 'chodna — give up' },
          { verb: 'gain on', hint: 'karib aana — gain on' },
          { verb: 'gear up for', hint: 'taiyaar hona — gear up for' }
        ],
        feedback: '"Gear up for" sahi hai kyunki exams karib hain aur taiyaari karni hai — "gear up for" exactly preparation ka energetic sense deta hai.'
      }
    ]
  },

  'Slip': {
    intro: '"Slip off" — quietly aur without drama kisi jagah se chale jaana. Social situations mein yeh bahut common hai.',
    verbs: [
      {
        pv: 'slip off',
        def_en: 'To leave a place quietly and without attracting attention.',
        def_hi: 'Bina kisi ko bataaye chupke se nikal jaana ।',
        example: 'She slipped off before the party ended because she had an early flight.',
        note: '"Slip off" aur "slip away" almost same — dono quiet departure ke liye.'
      }
    ],
    questions: [
      {
        id: 'slpq1',
        sentence: 'He knew there was no value of him in this group so he _____.',
        correct: 'slipped off',
        options: [
          { verb: 'preferred to', hint: 'pasand karna — prefer to' },
          { verb: 'moved on', hint: 'aage badhna — move on' },
          { verb: 'nailed down', hint: 'precisely identify karna — nail down' },
          { verb: 'slipped off', hint: 'chupke se nikal jaana — slip off' }
        ],
        feedback: '"Slipped off" sahi hai kyunki woh group mein apni value na hone ki wajah se quietly nikal gaya.'
      }
    ]
  },

  'Seek': {
    intro: '"Sought after" — "seek" ka past participle form "sought" use hota hai. Jab koi cheez valuable ho aur bahut log chahte hon — woh "sought after" hai.',
    verbs: [
      {
        pv: 'sought after',
        def_en: 'In great demand because of being rare, valuable, or desirable.',
        def_hi: 'Kisi cheez ya insaan ki bahut zyada maang hona ।',
        example: 'Good Python developers are highly sought after in the tech industry.',
        note: '"Sought after" hamesha adjective ki tarah use hota hai.'
      }
    ],
    questions: [
      {
        id: 'skq1',
        sentence: 'The new product is very good in quality and affordable, so it is highly _____ in the market.',
        correct: 'sought after',
        options: [
          { verb: 'noted down', hint: 'likhna — note down' },
          { verb: 'moved out', hint: 'nikal jaana — move out' },
          { verb: 'sought after', hint: 'bahut demand mein hona — sought after' },
          { verb: 'parted from', hint: 'kisi se alaag hona — part from' }
        ],
        feedback: '"Sought after" sahi hai kyunki product quality aur price ki wajah se market mein bahut demand mein hai.'
      },
      {
        id: 'skq2',
        sentence: 'Priya\'s skills are _____ by all companies in the industry.',
        correct: 'sought after',
        options: [
          { verb: 'snowed under', hint: 'kaam se daba hona — snowed under' },
          { verb: 'blacked out', hint: 'behosh hona — black out' },
          { verb: 'sought after', hint: 'bahut demand mein hona — sought after' },
          { verb: 'shut down', hint: 'band hona — shut down' }
        ],
        feedback: '"Sought after" sahi hai kyunki Priya ki skills sabhi companies chahti hain — high demand, high desirability.'
      }
    ]
  },

  'Fend': {
    intro: '"Fend off" — jaise koi attack ho aur tum usse door kar do. Physical attacks, criticism, competition — sab "fend off" kiye ja sakte hain.',
    verbs: [
      {
        pv: 'fend off',
        def_en: 'To defend yourself against an attack, criticism, or unwanted approach.',
        def_hi: 'Kisi attack, criticism, ya unwanted approach ko rokna ya door karna ।',
        example: 'The company struggled to fend off the hostile takeover attempt.',
        note: '"Fend off" slightly more active and physical — you push back.'
      }
    ],
    questions: [
      {
        id: 'fdq1',
        sentence: 'The government tried to _____ the economic crisis.',
        correct: 'fend off',
        options: [
          { verb: 'shut down', hint: 'band karna — shut down' },
          { verb: 'gear up for', hint: 'taiyaar hona — gear up for' },
          { verb: 'fend off', hint: 'crisis ko door rakhna — fend off' },
          { verb: 'end up', hint: 'finally hona — end up' }
        ],
        feedback: '"Fend off" sahi hai kyunki government ne economic crisis ko aane se rokne ya usse minimize karne ki koshish ki.'
      }
    ]
  },

  'Gain': {
    intro: '"Gain on" — competition mein jab aap peeche ho aur aahista aahista aage waale ke karib aate jao.',
    verbs: [
      {
        pv: 'gain on',
        def_en: 'To gradually get closer to someone you are chasing or competing with.',
        def_hi: 'Kisi competition mein dheere dheere aage waale ke karib aate jaana ।',
        example: 'The second-place runner was gaining on the leader in the final stretch.',
        note: '"Gain on" specifically in competition/chase context.'
      }
    ],
    questions: [
      {
        id: 'gnq1',
        sentence: 'The competitor was slowly _____ the market leader.',
        correct: 'gaining on',
        options: [
          { verb: 'gear up for', hint: 'taiyaar hona — gear up for' },
          { verb: 'give up', hint: 'chodna — give up' },
          { verb: 'gaining on', hint: 'competition mein karib aana — gain on' },
          { verb: 'gearing up', hint: 'taiyaar hona — gear up' }
        ],
        feedback: '"Gaining on" sahi hai kyunki competitor dheere dheere market leader ke karib aa raha tha — gap km ho raha tha.'
      }
    ]
  },

  'Fly': {
    intro: '"Fly at" — jab gussa itna zyada ho ki aap literally kisi par "fly" karo, yaani suddenly attack karna.',
    verbs: [
      {
        pv: 'fly at',
        def_en: 'To suddenly attack or criticize someone angrily.',
        def_hi: 'Kisi par achanak gusse mein attack karna ya harshly criticize karna ।',
        example: 'She flew at him in a rage when she heard what he had done.',
        note: '"Fly at" slightly more dramatic and literary.'
      }
    ],
    questions: [
      {
        id: 'flyq1',
        sentence: 'When confronted, the manager suddenly _____ his colleague.',
        correct: 'flew at',
        options: [
          { verb: 'fell back on', hint: 'support lena — fall back on' },
          { verb: 'fooled around', hint: 'time waste karna — fool around' },
          { verb: 'flew at', hint: 'suddenly attack karna — fly at' },
          { verb: 'got back', hint: 'wapas aana — get back' }
        ],
        feedback: '"Flew at" sahi hai kyunki manager ne confrontation mein suddenly colleague par attack kiya — gusse mein achanak pil padna exactly "fly at" hai.'
      }
    ]
  },

  'Fool': {
    intro: '"Fool around" — jab serious hone ki bajaye time waste karo, silly cheezein karo.',
    verbs: [
      {
        pv: 'fool around',
        def_en: 'To waste time doing silly or unproductive things.',
        def_hi: 'Waqt waste karna silly cheezein karke ।',
        example: 'Stop fooling around and finish your homework before dinner.',
        note: '"Fool around" aur "mess around" almost same.'
      }
    ],
    questions: [
      {
        id: 'flq1',
        sentence: 'I could not afford to _____ anymore after the business loss.',
        correct: 'fool around',
        options: [
          { verb: 'fly at', hint: 'suddenly attack karna — fly at' },
          { verb: 'get back', hint: 'wapas aana — get back' },
          { verb: 'fell back on', hint: 'support lena — fall back on' },
          { verb: 'fool around', hint: 'time waste karna — fool around' }
        ],
        feedback: '"Fool around" sahi hai kyunki business mein loss ke baad woh silly ya unproductive cheezein karne ki situation mein nahi tha.'
      }
    ]
  },

  'Nose': {
    intro: '"Nose about" — detective ki tarah naak daalna! Jab koi bina permission ke kisi ki private cheezein dhundhe — woh "nosing about" kar raha hai.',
    verbs: [
      {
        pv: 'nose about',
        def_en: 'To look around to discover information, especially private or secret.',
        def_hi: 'Kisi ki private information dhundhne ke liye idhar udhar dekhna ।',
        example: 'I caught him nosing about in my office when I came back from lunch.',
        note: '"Nose about" aur "snoop around" almost same — unauthorized snooping ke liye.'
      }
    ],
    questions: [
      {
        id: 'nsq1',
        sentence: 'Someone was _____ my office while I was away.',
        correct: 'nosing about',
        options: [
          { verb: 'in for', hint: 'kuch experience karna — in for' },
          { verb: 'moving on', hint: 'aage badhna — move on' },
          { verb: 'about to', hint: 'hone wala hona — about to' },
          { verb: 'nosing about', hint: 'chupke se dhundhna — nose about' }
        ],
        feedback: '"Nosing about" sahi hai kyunki koi meri office mein bina permission ke kuch dhundh raha tha — exactly "nose about" ka meaning.'
      }
    ]
  },

  'Dream': {
    intro: '"Dream of" — sirf raat ki neend mein nahi, jaag ke bhi kisi cheez ki strong wish rakhna.',
    verbs: [
      {
        pv: 'dream of',
        def_en: 'To think about something you strongly desire or hope for.',
        def_hi: 'Kisi cheez ki gehri chahat ya aspiration rakhna ।',
        example: 'She has always dreamed of opening her own bakery in Paris.',
        note: '"Dream of" = aspiration or strong wish. "Dream about" = content of actual dream.'
      }
    ],
    questions: [
      {
        id: 'drq1',
        sentence: 'I dream _____ traveling the world one day.',
        correct: 'of',
        options: [
          { verb: 'on', hint: 'yeh sahi preposition nahi — dream on' },
          { verb: 'for', hint: 'yeh sahi preposition nahi — dream for' },
          { verb: 'upon', hint: 'yeh sahi preposition nahi — dream upon' },
          { verb: 'of', hint: 'aspiration rakhna — dream of' }
        ],
        feedback: '"Of" sahi hai kyunki "dream of" ek fixed phrasal combination hai — kisi cheez ki aspiration ke liye.'
      }
    ]
  },

  'Dwell': {
    intro: '"Dwell on" — mentally ek jagah ruk jaana. Baar baar kisi past event ke baare mein sochte rehna bina aage badhne ke.',
    verbs: [
      {
        pv: 'dwell on',
        def_en: 'To think about something at length, especially something unpleasant.',
        def_hi: 'Kisi cheez ke baare mein baar baar sochnा, khaasakar koi buri baat ।',
        example: 'There\'s no point in dwelling on past mistakes — just learn and move forward.',
        note: '"Dwell on" can be positive too but usually negative rumination.'
      }
    ],
    questions: [
      {
        id: 'dwq1',
        sentence: 'There\'s no point in _____ past failures.',
        correct: 'dwelling on',
        options: [
          { verb: 'egging on', hint: 'provoke karna — egg on' },
          { verb: 'dragging on', hint: 'boring tarike se lamba — drag on' },
          { verb: 'drawing on', hint: 'resources use karna — draw on' },
          { verb: 'dwelling on', hint: 'baar baar sochte rehna — dwell on' }
        ],
        feedback: '"Dwelling on" sahi hai kyunki past failures ke baare mein baar baar sochte rehna pointless hai.'
      }
    ]
  },

  'Draw': {
    intro: '"Draw on" — resources ya experiences ko use karna jab zaroorat ho. Apne past experience, savings, ya skills ko "draw on" karte ho.',
    verbs: [
      {
        pv: 'draw on',
        def_en: 'To use a supply of something, or to use skills or experiences.',
        def_hi: 'Apne paas maujood resources, skills, ya experiences ka use karna ।',
        example: 'She drew on her years of teaching experience to write the book.',
        note: '"Draw on" never means to sketch — confuse mat karna.'
      }
    ],
    questions: [
      {
        id: 'drwq1',
        sentence: 'He had to _____ all his courage to finally do it.',
        correct: 'draw on',
        options: [
          { verb: 'egg on', hint: 'provoke karna — egg on' },
          { verb: 'drag on', hint: 'boring tarike se lamba — drag on' },
          { verb: 'dwell on', hint: 'baar baar sochna — dwell on' },
          { verb: 'draw on', hint: 'resources use karna — draw on' }
        ],
        feedback: '"Draw on" sahi hai kyunki usne apne saare courage ko use kiya — internal resource ko access karna exactly "draw on" hai.'
      }
    ]
  },

  'Root': {
    intro: '"Root out" — jaise weed ko roots se nikalte ho, usi tarah kisi burai ko completely aur permanently eliminate karna.',
    verbs: [
      {
        pv: 'root out',
        def_en: 'To find and completely destroy or eliminate something harmful.',
        def_hi: 'Kisi harmful cheez ko dhundh ke bilkul khatam kar dena ।',
        example: 'The new commissioner promised to root out corruption from the police force.',
        note: '"Root out" mein investigation element hai — pehle dhundho, phir khatam karo.'
      }
    ],
    questions: [
      {
        id: 'rtq1',
        sentence: 'The new manager promised to _____ all corrupt practices.',
        correct: 'root out',
        options: [
          { verb: 'rail against', hint: 'angrily protest — rail against' },
          { verb: 'rope in', hint: 'involve karna — rope in' },
          { verb: 'stand by', hint: 'support karna — stand by' },
          { verb: 'root out', hint: 'dhundh ke khatam karna — root out' }
        ],
        feedback: '"Root out" sahi hai kyunki manager ne corrupt practices ko dhundh ke completely eliminate karne ka promise kiya.'
      }
    ]
  },

  'Stand': {
    intro: '"Stand by" — woh insaan jo mushkil mein bhi saath rahe. Literal: nearby khada rehna. Figurative: support karna.',
    verbs: [
      {
        pv: 'stand by',
        def_en: 'To remain loyal and supportive to someone, especially in difficult times.',
        def_hi: 'Mushkil waqt mein bhi kisi ka saath dena aur loyal rehna ।',
        example: 'True friends stand by you even when times are tough.',
        note: '"Stand by" ke do uses: loyalty aur readiness — "stand by for further instructions."'
      }
    ],
    questions: [
      {
        id: 'sbq1',
        sentence: 'The union leader promised to _____ the workers through the crisis.',
        correct: 'stand by',
        options: [
          { verb: 'railed against', hint: 'angrily protest — rail against' },
          { verb: 'root out', hint: 'khatam karna — root out' },
          { verb: 'stand by', hint: 'saath dena — stand by' },
          { verb: 'rope in', hint: 'involve karna — rope in' }
        ],
        feedback: '"Stand by" sahi hai kyunki union leader ne workers ke saath loyal support ka vaada kiya crisis mein.'
      }
    ]
  },

  'Round': {
    intro: '"Round up" — gather karna ya arrest karna. Jab police criminals ko pakadti hai ya log ikatthe kiye jaate hain.',
    verbs: [
      {
        pv: 'round up',
        def_en: 'To gather people together; or for police to arrest suspects.',
        def_hi: 'Logo ko ikattha karna; ya police ka criminals ko pakadna ।',
        example: 'The police rounded up several suspects after the robbery.',
        note: '"Round up" in math = higher nearest number. In phrasal verb = gather/collect.'
      }
    ],
    questions: [
      {
        id: 'rnq1',
        sentence: 'The police _____ the suspects after the robbery.',
        correct: 'rounded up',
        options: [
          { verb: 'ran after', hint: 'pursue karna — run after' },
          { verb: 'ran away', hint: 'bhagna — run away' },
          { verb: 'rounded up', hint: 'arrest karna ya ikattha karna — round up' },
          { verb: 'ran away with', hint: 'emotions control se bahar — run away with' }
        ],
        feedback: '"Rounded up" sahi hai kyunki police ne robbery ke baad suspects ko pakad ke ikattha kiya — "round up" in law enforcement context.'
      }
    ]
  },

  'Sit': {
    intro: '"Sit back" — literally chair mein peeche jana, aur figuratively kaam karna band karke aaram karna ya situation observe karna.',
    verbs: [
      {
        pv: 'sit back',
        def_en: 'To relax and take no active part; or to stop making effort.',
        def_hi: 'Aaram karna aur actively participate na karna ।',
        example: 'After years of hard work, she finally sat back and enjoyed her retirement.',
        note: '"Sit back" mein non-action ka deliberate choice hai.'
      }
    ],
    questions: [
      {
        id: 'stbq1',
        sentence: 'After doing strenuous work, he _____ in his bedroom.',
        correct: 'sat back',
        options: [
          { verb: 'fell apart', hint: 'toot jaana — fall apart' },
          { verb: 'complained of', hint: 'bimari se suffer karna — complain of' },
          { verb: 'cleared up', hint: 'explain karna — clear up' },
          { verb: 'sat back', hint: 'aaram karna — sit back' }
        ],
        feedback: '"Sat back" sahi hai kyunki mushkil kaam ke baad woh bedroom mein aaram karne gaya — "sit back" exactly yahi relaxation after effort hai.'
      }
    ]
  },

  'Clear': {
    intro: '"Clear up" — clouds clear hote hain aur weather achha ho jaata hai — yahi image "clear up" mein hai. Problems, confusion sab "cleared up" ho sakte hain.',
    verbs: [
      {
        pv: 'clear up',
        def_en: 'To explain or resolve a misunderstanding; or (of weather) to become fine.',
        def_hi: 'Kisi confusion ko explain karke sahi karna; ya mausam ka achha ho jaana ।',
        example: 'Can you clear up the confusion about tomorrow\'s meeting schedule?',
        note: '"Clear up" ke teen uses: intellectual, weather, aur cleaning — "clear up this mess."'
      }
    ],
    questions: [
      {
        id: 'clrq1',
        sentence: 'He tried to _____ the misunderstanding with his colleague.',
        correct: 'clear up',
        options: [
          { verb: 'sat back', hint: 'aaram karna — sit back' },
          { verb: 'fell apart', hint: 'toot jaana — fall apart' },
          { verb: 'clear up', hint: 'confusion explain karna — clear up' },
          { verb: 'complained of', hint: 'bimari se suffer karna — complain of' }
        ],
        feedback: '"Clear up" sahi hai kyunki woh colleague ke saath misunderstanding ko explain karke resolve karna chahta tha — exactly "clear up" hai: confusion ya misunderstanding door karna.'
      }
    ]
  },
  // ===== MISSING BASE VERBS — DB_PV COMPLETION =====
// Add these entries inside the existing DB_PV object.
// All 17 missing base verbs: Collapse, Do, End, Ham, Hanker, Shake, Shoot, Sort,
// Speed, Step, Swallow, Take, Talk, Track, Turn, Wind, Work

  'Collapse': {
    intro: '"Collapse under" ek powerful image hai — jaise koi cheez itne bade bojh ke neeche dab jaaye ki toot hi jaaye. Physical structures, systems, ya insaan — sab "collapse under" kar sakte hain.',
    verbs: [
      {
        pv: 'collapse under',
        def_en: 'To fall down or break apart suddenly because of a weight or pressure that is too much to bear.',
        def_hi: 'Itne bade bojh ya dabaav ke neeche dab ke toot jaana ya gir jaana ।',
        example: 'The old bridge collapsed under the weight of the heavy trucks.',
        note: '"Collapse under" hamesha ek external pressure ke saath aata hai — "under the weight", "under the strain". Sirf "collapse" se zyada specific hai kyunki wajah bhi bataata hai.'
      }
    ],
    questions: [
      {
        id: 'clq1',
        sentence: 'The roof _____ the weight of the snow.',
        correct: 'collapsed under',
        options: [
          { verb: 'collapsed to', hint: 'galat preposition — to' },
          { verb: 'collapsed under', hint: 'bojh ke neeche girna — collapse under' },
          { verb: 'collapsed with', hint: 'galat preposition — with' },
          { verb: 'collapsed for', hint: 'galat preposition — for' }
        ],
        feedback: '"Collapsed under" sahi hai kyunki roof snow ke weight ke neeche dab ke giri — "under" is load ya pressure indicate karta hai. "Collapsed to", "collapsed with", aur "collapsed for" — inse koi natural phrasal verb nahi banta. Sirf "collapse under" weight ya pressure se tootne ke liye sahi expression hai.'
      }
    ]
  },

  'Do': {
    intro: '"Do away with" ek decisive phrase hai — kuch bilkul khatam kar dena, hamesha ke liye. Laws, policies, old habits — jo bhi zaroori nahi raha, use "do away with" karte hain.',
    verbs: [
      {
        pv: 'do away with',
        def_en: 'To abolish, eliminate, or completely get rid of something.',
        def_hi: 'Kisi cheez ko poori tarah khatam kar dena, hatana, ya abolish karna ।',
        example: 'Many activists want to do away with outdated laws that no longer serve society.',
        note: '"Do away with" aur "get rid of" dono mein eliminating hai, lekin "do away with" zyada formal aur often used for policies, systems, ya institutions ke liye. "Get rid of" zyada physical objects ya personal annoyances ke liye.'
      }
    ],
    questions: [
      {
        id: 'doq1',
        sentence: 'The company decided to _____ outdated policies to improve efficiency.',
        correct: 'do away with',
        options: [
          { verb: 'go away from', hint: 'physically chale jaana — go away from' },
          { verb: 'do away with', hint: 'permanently khatam karna — do away with' },
          { verb: 'account for', hint: 'explain karna — account for' },
          { verb: 'back up', hint: 'support dena — back up' }
        ],
        feedback: '"Do away with" sahi hai kyunki company ne outdated policies ko completely eliminate karne ka faisla kiya — permanently hatana. "Go away from" physically departure ke liye hai. "Account for" explanation ke liye hai. "Back up" support dene ke liye hai.'
      },
      {
        id: 'doq2',
        sentence: 'When any law goes against the constitution, the Supreme Court has power to _____ that law.',
        correct: 'do away with',
        options: [
          { verb: 'done away with', hint: 'galat grammar — infinitive chahiye' },
          { verb: 'repeal', hint: 'yeh single verb hai — phrasal verb nahi' },
          { verb: 'do away with', hint: 'law khatam karna — do away with' },
          { verb: 'get up', hint: 'uthna — get up' }
        ],
        feedback: '"Do away with" sahi hai — "has power to" ke baad base form chahiye, isliye "do away with" correct hai. "Done away with" galat kyunki "to + done" wrong grammar hai. "Repeal" ek single word hai jo same meaning rakhta hai lekin yahan phrasal verb ka use hona chahiye. "Get up" bilkul galat hai.'
      }
    ]
  },

  'End': {
    intro: '"End up" — journey ka unexpected destination. Jab koi plan kuch aur tha lekin result kuch aur nikla — "ended up" woh gap capture karta hai.',
    verbs: [
      {
        pv: 'end up',
        def_en: 'To finally reach a state, place, or situation, especially one that was not planned or expected.',
        def_hi: 'Antmein kisi aisi jagah ya situation mein pahunchna jo plan nahi thi ।',
        example: 'He never intended to stay, but he ended up living there for ten years.',
        note: '"End up" aur "turn out" dono mein unexpected result hai, lekin "end up" zyada about the final state ya destination hai — "where you end up." "Turn out" zyada about how something reveals itself — "how things turned out."'
      }
    ],
    questions: [
      {
        id: 'enq1',
        sentence: 'Their plans for the new restaurant fell on due to a lack of funding, and they _____ closing the business entirely.',
        correct: 'ended up',
        options: [
          { verb: 'fell through', hint: 'plan fail hona — fall through' },
          { verb: 'ended up', hint: 'finally ek unexpected state mein pohonchna — end up' },
          { verb: 'fell for', hint: 'deceived hona ya pyaar — fall for' },
          { verb: 'end up', hint: 'correct base form but wrong tense here' }
        ],
        feedback: '"Ended up" sahi hai kyunki unka final, unplanned result tha — business poori tarah band karna pada. "Fell through" plan fail hone ke liye hai lekin "end up" woh final outcome capture karta hai. "Fell for" bilkul galat hai.'
      }
    ]
  },

  'Ham': {
    intro: '"Ham it up" — theatre ki duniya se aaya expression. Jab koi actor scene se zyada overact kare, ya normal zindagi mein bhi koi apni baat dramatic banane ke liye exaggerate kare — woh "hamming it up" hai.',
    verbs: [
      {
        pv: 'ham it up',
        def_en: 'To overact or exaggerate one\'s performance or behavior for dramatic or comedic effect.',
        def_hi: 'Kisi performance ya behavior mein zaroori se zyada exaggerate karna, drama karna ।',
        example: 'The comedian was clearly hamming it up, making wild gestures to get more laughs.',
        note: '"Ham it up" hamesha ek performance ya dramatic behavior ke context mein aata hai. "Play it up" se thoda alag — "play it up" zyada about emphasizing something, "ham it up" zyada about theatrical overacting.'
      }
    ],
    questions: [
      {
        id: 'hmq1',
        sentence: 'At the party, he _____ by telling exaggerated stories about his adventures.',
        correct: 'hammed it up',
        options: [
          { verb: 'followed through', hint: 'kaam poora karna — follow through' },
          { verb: 'hammed it up', hint: 'exaggerate karke drama karna — ham it up' },
          { verb: 'figured on', hint: 'expect karna — figure on' },
          { verb: 'filled in', hint: 'complete karna — fill in' }
        ],
        feedback: '"Hammed it up" sahi hai kyunki woh exaggerated stories sunaa raha tha — dramatic effect ke liye deliberately overact kar raha tha. "Followed through" kaam complete karne ke liye hai. "Figured on" kuch expect karne ke liye hai. "Filled in" information complete karne ke liye hai.'
      }
    ]
  },

  'Hanker': {
    intro: '"Hanker after" — sirf chahna nahi, baar baar chahna. Jab koi cheez mile nahi ya choot jaaye aur uski yaad aaye, tab "hanker after" use hota hai.',
    verbs: [
      {
        pv: 'hanker after',
        def_en: 'To have a strong, persistent desire or craving for something you cannot easily have.',
        def_hi: 'Kisi cheez ki gehri aur lagaataar chahat rakhna jo aasaani se nahi milti ।',
        example: 'He always hankered after the simple life he had left behind in his hometown.',
        note: '"Hanker after" aur "long for" almost synonymous hain — dono persistent desire ke liye. "Hanker after" mein slightly more restless, unsatisfied quality hai. "Crave" zyada immediate physical desire ke liye.'
      }
    ],
    questions: [
      {
        id: 'hkq1',
        sentence: 'He hankers _____ the vintage car he sold years ago and wishes he could buy it back.',
        correct: 'after',
        options: [
          { verb: 'for', hint: 'galat preposition — hanker for bhi chalti hai lekin after standard hai' },
          { verb: 'after', hint: 'persistent chahat — hanker after' },
          { verb: 'on', hint: 'galat preposition — on' },
          { verb: 'to', hint: 'galat preposition — to' }
        ],
        feedback: '"After" sahi hai kyunki "hanker after" ek fixed phrasal combination hai — kisi cheez ki persistent longing ke liye. "For" bhi kabhi kabhi use hota hai lekin "after" standard aur preferred form hai. "On" aur "to" — koi "hanker on/to" jaisi phrasal verb nahi hoti.'
      }
    ]
  },

  'Shake': {
    intro: 'Shake ke phrasal verbs mein mostly removing aur changing ke ideas hain. "Shake off" bimari ya problem se nikalna, "shake up" kuch badalna — ek negative hai, doosra positive change. Context dhyan se dekho.',
    verbs: [
      {
        pv: 'shake off',
        def_en: 'To successfully get rid of or recover from an illness, injury, or negative feeling.',
        def_hi: 'Kisi bimari, takleef, ya buri feeling se successfully chutkara paana ।',
        example: 'It took him two weeks to shake off the cold completely.',
        note: '"Shake off" aur "get over" dono recovery ke liye hain, lekin "shake off" zyada active — literally kuch jhad dena jaise kapdon se dhool. "Get over" zyada passive recovery hai — samay ke saath theek hona.'
      },
      {
        pv: 'shake out',
        def_en: 'To open or spread something by shaking it so that dirt or creases come off.',
        def_hi: 'Kisi cheez ko jhad ke khol dena taaki dhool ya silatvaten nikal jayein ।',
        example: 'She shook out the tablecloth before laying it on the table.',
        note: '"Shake out" sirf physical shaking ke liye — kapda jharna, bedsheet straight karna. "Shake off" bimari ya unwanted feelings ke liye hai.'
      },
      {
        pv: 'shake up',
        def_en: 'To make important changes to an organization to make it more efficient; or to shock or disturb someone.',
        def_hi: 'Kisi organization mein bade changes lana, ya kisi ko shock ya disturb karna ।',
        example: 'The new CEO shook up the company by restructuring every department.',
        note: '"Shake up" ke do uses hain — organizational change aur emotional shock. "Shake down" se alag — shake down ek new situation ke settle hone ke baare mein hai, shake up creating disruption ke baare mein.'
      },
      {
        pv: 'shake down',
        def_en: 'For a new situation or arrangement to become established and stable over time.',
        def_hi: 'Koi nayi situation ya arrangement dhire dhire stable aur established ho jaana ।',
        example: 'It took a few months for the new team to shake down and work smoothly.',
        note: '"Shake down" ek process hai — turbulence ke baad stability aana. "Shake up" se ulta hai — shake up disruption create karta hai, shake down disruption ke baad stability aana hai.'
      }
    ],
    questions: [
      {
        id: 'skq1',
        sentence: 'It took seven years for Harish to _____ his migraine.',
        correct: 'shake off',
        options: [
          { verb: 'shake up', hint: 'changes lana ya shock — shake up' },
          { verb: 'shake out', hint: 'kapda jharna — shake out' },
          { verb: 'shake off', hint: 'bimari ya problem se nikalna — shake off' },
          { verb: 'shake down', hint: 'settle hona — shake down' }
        ],
        feedback: '"Shake off" sahi hai kyunki Harish saat saal mein migraine se chutkara paa saka — ek bimari ya persistent problem se successfully recover karna. "Shake up" organizational change ya shock ke liye hai. "Shake out" physical shaking ke liye hai. "Shake down" kisi nayi arrangement ke stable hone ke liye hai.'
      }
    ]
  },

  'Shoot': {
    intro: '"Shoot" ke phrasal verbs mein sudden dramatic actions hain — reject karna, suddenly badhna, ya jaldi nikalna. "Shot down" aur "shot up" dono intense hain lekin direction aur meaning bilkul alag.',
    verbs: [
      {
        pv: 'shoot down',
        def_en: 'To reject or dismiss an idea, plan, or suggestion quickly and firmly.',
        def_hi: 'Kisi idea, plan, ya suggestion ko jaldi aur firmly reject kar dena ।',
        example: 'The board shot down his proposal without even giving it proper consideration.',
        note: '"Shoot down" aur "turn down" dono rejection ke liye hain, lekin "shoot down" zyada dismissive aur abrupt hai — jaise kisi ki baat beech mein hi kaat dena. "Turn down" zyada polite refusal hai.'
      },
      {
        pv: 'shoot up',
        def_en: 'To increase rapidly and dramatically in size, price, or number.',
        def_hi: 'Kisi cheez ka bahut tezi se aur dramatically badhna ।',
        example: 'After the product launch went viral, sales shot up by 300% in a week.',
        note: '"Shoot up" aur "shoot down" exact opposites hain direction mein — shoot up = rapid increase, shoot down = dismiss/reject.'
      },
      {
        pv: 'shoot out',
        def_en: 'To move out quickly, or to extend outward suddenly.',
        def_hi: 'Tezi se bahar nikalna ya achanak bahar ki taraf extend hona ।',
        example: 'Her hand shot out to catch the falling glass.',
        note: '"Shoot out" always implies sudden, fast movement outward — a hand, a branch, light. Less commonly used than shoot down or shoot up.'
      }
    ],
    questions: [
      {
        id: 'shq1',
        sentence: 'The manager _____ the proposal without a second thought.',
        correct: 'shot down',
        options: [
          { verb: 'shot up', hint: 'tezi se badhna — shoot up' },
          { verb: 'shot out', hint: 'jaldi nikalna — shoot out' },
          { verb: 'shot down', hint: 'firmly reject karna — shoot down' },
          { verb: 'shot in', hint: 'koi standard phrasal verb nahi' }
        ],
        feedback: '"Shot down" sahi hai kyunki manager ne proposal ko sochne ka bhi mauka diye bina quickly aur firmly dismiss kar diya — wahi "shoot down" ka meaning hai. "Shot up" tezi se badhne ke liye hai. "Shot out" sudden outward movement ke liye hai. "Shot in" koi real phrasal verb nahi hai.'
      }
    ]
  },

  'Sort': {
    intro: '"Sort out" — jab koi problem ho ya koi cheez disorganized ho, use theek karna. "Sort" matlab organize karna, aur "sort out" problems ya confusion organize ya resolve karna.',
    verbs: [
      {
        pv: 'sort out',
        def_en: 'To organize, resolve, or deal with a problem or complicated situation.',
        def_hi: 'Kisi problem ya complicated situation ko organize karna ya solve karna ।',
        example: 'Let me sort out this mess before the meeting starts.',
        note: '"Sort out" aur "iron out" dono problem-solving ke liye hain, lekin "sort out" zyada general hai — organizing ya resolving kuch bhi. "Iron out" specifically differences, disagreements, ya wrinkles ko smooth karne ke liye.'
      }
    ],
    questions: [
      {
        id: 'srq1',
        sentence: 'He was able to _____ the problem with his friend\'s help.',
        correct: 'sort out',
        options: [
          { verb: 'give away', hint: 'muft dena ya secret batana — give away' },
          { verb: 'drop out', hint: 'quit karna — drop out' },
          { verb: 'turn off', hint: 'band karna ya dislike — turn off' },
          { verb: 'sort out', hint: 'problem resolve karna — sort out' }
        ],
        feedback: '"Sort out" sahi hai kyunki dost ki madad se problem solve ki — kisi complicated situation ko organize ya resolve karna. "Give away" muft dena ya secret reveal karne ke liye hai. "Drop out" kuch chhod dene ke liye hai. "Turn off" kuch band karne ke liye hai.'
      }
    ]
  },

  'Speed': {
    intro: '"Speed up" — simple aur powerful phrase. Jab koi cheez dheere chal rahi ho aur use tez karna ho, tab "speed up." Yeh kisi bhi process, vehicle, ya project pe apply hota hai.',
    verbs: [
      {
        pv: 'speed up',
        def_en: 'To increase the rate or pace of something; to make something happen faster.',
        def_hi: 'Kisi kaam ya cheez ki speed ya pace badhana; kuch jaldi karna ।',
        example: 'They hired more workers to speed up the construction of the bridge.',
        note: '"Speed up" aur "hurry up" dono tezi ke liye hain, lekin "speed up" zyada about rate ya process hai — kisi kaam ki speed badhana. "Hurry up" zyada about a person — jaldi karo.'
      }
    ],
    questions: [
      {
        id: 'spdq1',
        sentence: 'The project manager decided to _____ the work to meet the deadline.',
        correct: 'speed up',
        options: [
          { verb: 'look forward to', hint: 'intezaar karna — look forward to' },
          { verb: 'give in', hint: 'surrender karna — give in' },
          { verb: 'speed up', hint: 'tez karna — speed up' },
          { verb: 'back out', hint: 'withdraw karna — back out' }
        ],
        feedback: '"Speed up" sahi hai kyunki deadline meet karne ke liye kaam ki pace badhani thi. "Look forward to" anticipation ke liye hai. "Give in" surrender ke liye hai. "Back out" commitment se hatne ke liye hai.'
      }
    ]
  },

  'Step': {
    intro: 'Step ke phrasal verbs mein mostly movement ya decision — kab aage badhna hai, kab peeche hatna hai, kab rokna hai. "Step down" aur "step up" life decisions mein bahut use hote hain — exam favorite bhi.',
    verbs: [
      {
        pv: 'step back',
        def_en: 'To stop doing something and take time to think about a situation more carefully.',
        def_hi: 'Kuch karna rokna aur situation ke baare mein zyada dhyan se sochna ।',
        example: 'Sometimes you need to step back and look at the bigger picture.',
        note: '"Step back" aur "back down" dono mein withdrawing hai, lekin "step back" zyada about gaining perspective — temporarily pausing to reflect. "Back down" zyada about admitting you were wrong.'
      },
      {
        pv: 'step up',
        def_en: 'To take action or increase effort when there is a need or opportunity for it.',
        def_hi: 'Jab zaroorat ya mauka ho toh aage aana aur kuch karna ya effort badhana ।',
        example: 'When the team leader fell ill, Priya stepped up and managed everything.',
        note: '"Step up" aur "step in" dono mein getting involved hai, lekin "step up" zyada about rising to a challenge or increasing effort. "Step in" zyada about intervening in an existing situation.'
      },
      {
        pv: 'step in',
        def_en: 'To become involved in a difficult situation in order to help find a solution.',
        def_hi: 'Kisi mushkil situation mein solution dhundne ke liye involve hona ।',
        example: 'The principal stepped in to resolve the argument between the two students.',
        note: '"Step in" aur "step up" mein fark: "step in" is more about mediating or intervening — physically entering a situation. "Step up" is about rising to take on responsibility.'
      },
      {
        pv: 'step on',
        def_en: 'To treat someone unkindly or disrespectfully, ignoring their feelings or needs.',
        def_hi: 'Kisi ke saath bure aur disrespectful tarike se behave karna ।',
        example: 'He was the kind of manager who always stepped on his subordinates to climb the ladder.',
        note: '"Step on" always has a negative, unkind connotation — using someone or treating them badly. "Step back" aur "step up" more neutral/positive hain.'
      },
      {
        pv: 'step down',
        def_en: 'To resign or leave a position of authority, especially voluntarily.',
        def_hi: 'Kisi position ya authority se khud resign karna ya hata lena ।',
        example: 'After the scandal, the minister agreed to step down from his post.',
        note: '"Step down" aur "lay off" dono mein job loss hai, lekin "step down" voluntary hai — khud chhod dena. "Lay off" involuntary dismissal hai — company force kare.'
      }
    ],
    questions: [
      {
        id: 'spq1',
        sentence: 'Prince Harry and his wife announced their decision to _____ from their role as senior royals.',
        correct: 'step back',
        options: [
          { verb: 'step up', hint: 'aage aana ya effort badhana — step up' },
          { verb: 'step in', hint: 'intervene karna — step in' },
          { verb: 'step back', hint: 'kuch karna rokna — step back' },
          { verb: 'step on', hint: 'kisi ke saath bura behave — step on' }
        ],
        feedback: '"Step back" sahi hai kyunki Harry aur Meghan apni senior royal duties se withdraw karna chahte the — role se pause lena ya hata lena. "Step up" ulta hai — aage aana. "Step in" intervene karna hai. "Step on" unkind treatment ke liye hai.'
      },
      {
        id: 'spq2',
        sentence: 'He _____ from his job to pursue his dream of writing a novel.',
        correct: 'stepped down',
        options: [
          { verb: 'gave in', hint: 'pressure mein maan jaana — give in' },
          { verb: 'handed over', hint: 'kisi ko dena — hand over' },
          { verb: 'broke into', hint: 'force se ghusna — break into' },
          { verb: 'stepped down', hint: 'job se resign karna — step down' }
        ],
        feedback: '"Stepped down" sahi hai kyunki usne khud se apni naukri chhodi — voluntary resignation. "Gave in" pressure mein haarna hai. "Handed over" kisi ko kuch dena hai. "Broke into" force se enter karna hai.'
      }
    ]
  },

  'Swallow': {
    intro: '"Swallow down" — jaldi se khaana ya peena, bina mazze ke. Jab waqt kam ho ya koi uncomfortable situation ho, toh khaana/peena "swallow down" hota hai.',
    verbs: [
      {
        pv: 'swallow down',
        def_en: 'To eat or drink something quickly, especially in one gulp or without proper enjoyment.',
        def_hi: 'Kuch jaldi jaldi khaana ya peena, khaaskar bina theek se chaba ke ya ek ghooont mein ।',
        example: 'He swallowed down his breakfast in a hurry before rushing to catch the train.',
        note: '"Swallow down" aur "gobble up" dono mein jaldi khaana hai, lekin "swallow down" zyada about the act of getting food past the throat — physically jaldi andar karna. "Gobble up" zyada about greedily eating everything.'
      }
    ],
    questions: [
      {
        id: 'swq1',
        sentence: 'She swallowed _____ her breakfast in a hurry.',
        correct: 'down',
        options: [
          { verb: 'in', hint: 'galat preposition — swallow in' },
          { verb: 'up', hint: 'swallow up matlab consume ya engulf karna — swallow up' },
          { verb: 'into', hint: 'galat preposition — swallow into' },
          { verb: 'down', hint: 'jaldi khaana ya peena — swallow down' }
        ],
        feedback: '"Down" sahi hai kyunki "swallow down" ka matlab hai jaldi se khaana ya peena — hurry mein breakfast karna. "Swallow in" koi standard phrasal verb nahi. "Swallow up" ka alag meaning hai — completely consume karna ya engulf karna, jaise "the jungle swallowed up the path." "Swallow into" wrong preposition.'
      }
    ]
  },

  'Take': {
    intro: 'Take ke phrasal verbs bahut hain — lena, shuru karna, sambhalna, resemble karna. "Take" movement aur acceptance dono ideas deta hai, isliye iske phrasal verbs mein variety hai. "Take after" aur "take up" exam favorites hain.',
    verbs: [
      {
        pv: 'take after',
        def_en: 'To resemble a parent or other older relative in appearance or character.',
        def_hi: 'Apne kisi purane family member — jaise maa ya baap — ki tarah dikhna ya behave karna ।',
        example: 'She really takes after her grandmother — same smile, same stubbornness.',
        note: '"Take after" sirf family resemblance ke liye hai — appearance ya character. "Take from" galat construction hai. Always about resembling an older relative, not a friend or colleague.'
      },
      {
        pv: 'take up',
        def_en: 'To start doing a new activity, hobby, or job; or to use an amount of time, space, or effort.',
        def_hi: 'Koi nayi activity ya hobby shuru karna; ya kisi cheez ka jagah, waqt, ya mehnat lena ।',
        example: 'She took up painting after retiring from her corporate job.',
        note: '"Take up" ke do uses hain — starting a new activity, aur occupying space/time. "Take to" se alag — "take to something" means to start liking it naturally. "Take up something" is a deliberate choice to start doing it.'
      },
      {
        pv: 'take over',
        def_en: 'To assume control, authority, or responsibility over something.',
        def_hi: 'Kisi cheez ki control, authority, ya zimmedari apne haath mein lena ।',
        example: 'Mohan took over the charge of the department from Mustafa.',
        note: '"Take over" can be negative (hostile takeover) or positive (someone taking responsibility). "Take on" se alag — take on is accepting a new task or challenge, take over is assuming control from someone else.'
      },
      {
        pv: 'take back',
        def_en: 'To retract or withdraw something you have said; or to return something to a shop.',
        def_hi: 'Apni koi baat vapas lena ya maafi maangna; ya kisi cheez ko dukan wapis karna ।',
        example: 'She tried to take back what she had said earlier, but it was too late.',
        note: '"Take back" ke do meanings hain — retracting words aur returning items. "Give back" se alag — give back is returning something to its owner. Take back involves returning to the original source/store OR withdrawing words.'
      },
      {
        pv: 'take on',
        def_en: 'To accept a new responsibility, challenge, or employee.',
        def_hi: 'Koi nayi zimmedari, challenge, ya naye employee ko accept karna ।',
        example: 'They decided to take on a new employee to handle the increased workload.',
        note: '"Take on" aur "take over" dono mein accepting responsibility hai, lekin "take on" is about adding new responsibilities to what you already have. "Take over" is about replacing someone in their entire role.'
      },
      {
        pv: 'take off',
        def_en: 'To remove clothing; or for an aircraft to leave the ground; or to become suddenly successful.',
        def_hi: 'Kapde utaarna; ya hawai jahaz ka zameen chhod ke udna; ya achanak successful ho jaana ।',
        example: 'The startup really took off after getting featured in a major magazine.',
        note: '"Take off" ke teen meanings hain — removing clothes (opposite of put on), aircraft departing, aur sudden success. Context se samjho.'
      },
      {
        pv: 'take in',
        def_en: 'To absorb or understand information; or to deceive someone; or to provide shelter for someone.',
        def_hi: 'Koi information samajhna ya absorb karna; ya kisi ko dhoka dena; ya kisi ko rehne ki jagah dena ।',
        example: 'She was so tired that she couldn\'t take in what the professor was saying.',
        note: '"Take in" ke teen meanings hain — understanding information, being deceived, aur providing accommodation. Context se carefully samjho.'
      }
    ],
    questions: [
      {
        id: 'tkq1',
        sentence: 'When it comes to love of sports, he _____ his father.',
        correct: 'takes after',
        options: [
          { verb: 'takes from', hint: 'galat construction — takes from' },
          { verb: 'takes by', hint: 'galat preposition — by' },
          { verb: 'takes after', hint: 'family resemblance — take after' },
          { verb: 'takes off', hint: 'udna ya remove karna — take off' }
        ],
        feedback: '"Takes after" sahi hai kyunki woh khel se pyaar mein apne baap jaisa hai — family trait ya resemblance. "Takes from" wrong construction hai. "Takes by" koi phrasal verb nahi. "Takes off" udne ya kapde utaarne ke liye hai.'
      },
      {
        id: 'tkq2',
        sentence: 'I have been wondering about _____ skating as a hobby.',
        correct: 'taking up',
        options: [
          { verb: 'taking to', hint: 'kisi cheez ko naturally pasand karna — take to' },
          { verb: 'taking up', hint: 'nayi activity shuru karna — take up' },
          { verb: 'taking off', hint: 'udna ya success — take off' },
          { verb: 'taking in', hint: 'samajhna ya dhoka — take in' }
        ],
        feedback: '"Taking up" sahi hai kyunki woh deliberately ek nayi hobby shuru karne ke baare mein soch raha hai — "take up" a new activity. "Taking to" ka matlab kisi cheez ko naturally like karna hai. "Taking off" success ya departure ke liye hai. "Taking in" understand karne ya deceive ke liye hai.'
      },
      {
        id: 'tkq3',
        sentence: 'Mohan _____ the charge of Centre for Life Skills from Mustafa.',
        correct: 'took over',
        options: [
          { verb: 'took out', hint: 'bahar le jaana — take out' },
          { verb: 'took through', hint: 'kisi ko kuch sikhana — take through' },
          { verb: 'took off', hint: 'udna ya success — take off' },
          { verb: 'took over', hint: 'control ya zimmedari lena — take over' }
        ],
        feedback: '"Took over" sahi hai kyunki Mohan ne Mustafa se charge liya — authority aur responsibility assume karna. "Took out" bahar le jaana hai. "Took through" kisi ko kuch sikhana hai. "Took off" udne ya success ke liye hai.'
      },
      {
        id: 'tkq4',
        sentence: 'She tried to _____ what she had said earlier, but it was too late.',
        correct: 'take back',
        options: [
          { verb: 'run out', hint: 'khatam hona — run out' },
          { verb: 'put off', hint: 'delay karna — put off' },
          { verb: 'take back', hint: 'apni baat wapis lena — take back' },
          { verb: 'go over', hint: 'review karna — go over' }
        ],
        feedback: '"Take back" sahi hai kyunki woh apni pehle ki baat ko retract karna chahti thi — words wapis lena. "Run out" khatam hone ke liye hai. "Put off" postpone ke liye hai. "Go over" review ke liye hai.'
      },
      {
        id: 'tkq5',
        sentence: 'They decided to _____ a new employee to help with the increased workload.',
        correct: 'take on',
        options: [
          { verb: 'look after', hint: 'dekhbhal karna — look after' },
          { verb: 'take on', hint: 'naye employee hire karna — take on' },
          { verb: 'turn down', hint: 'reject karna — turn down' },
          { verb: 'back out', hint: 'withdraw karna — back out' }
        ],
        feedback: '"Take on" sahi hai kyunki unhone naye employee ko hire kiya — nayi responsibility ya person ko accept karna. "Look after" dekhbhal ke liye hai. "Turn down" reject karne ke liye hai. "Back out" commitment se hatne ke liye hai.'
      },
      {
        id: 'tkq6',
        sentence: 'She left her job and _____ acting last year.',
        correct: 'took up',
        options: [
          { verb: 'took out', hint: 'bahar le jaana — take out' },
          { verb: 'took off', hint: 'udna ya success — take off' },
          { verb: 'took up', hint: 'nayi activity shuru karna — take up' },
          { verb: 'took in', hint: 'samajhna ya deceive — take in' }
        ],
        feedback: '"Took up" sahi hai kyunki usne naukri chhod ke deliberately acting shuru ki — a new career/activity. "Took out" bahar le jaana hai. "Took off" departure ya sudden success ke liye hai. "Took in" absorb karna ya deceive karna hai.'
      },
      {
        id: 'tkq7',
        sentence: 'The recent cloudburst completely _____ the village and its people.',
        correct: 'took apart',
        options: [
          { verb: 'took back', hint: 'wapis lena — take back' },
          { verb: 'took apart', hint: 'pieces mein karna ya destroy — take apart' },
          { verb: 'took after', hint: 'resemble karna — take after' },
          { verb: 'took up', hint: 'nayi activity ya occupy — take up' }
        ],
        feedback: '"Took apart" sahi hai kyunki cloudburst ne village ko completely dismantled kar diya — tukde tukde kar dena. "Took back" kuch return ya retract karna hai. "Took after" family resemblance ke liye hai. "Took up" new activity ke liye hai.'
      }
    ]
  },

  'Talk': {
    intro: '"Talk over" — sirf baat karna nahi, kisi matter ko thoroughly discuss karna taaki koi decision ya agreement ho sake. Formal meetings aur personal decisions — dono mein use hota hai.',
    verbs: [
      {
        pv: 'talk over',
        def_en: 'To discuss a matter thoroughly with someone, usually to reach a decision or agreement.',
        def_hi: 'Kisi matter ko thoroughly discuss karna, aksar koi decision ya agreement tak pahunchne ke liye ।',
        example: 'Before signing the contract, they talked over every clause carefully.',
        note: '"Talk over" aur "talk through" almost same hain — dono thorough discussion ke liye. "Talk over" can also mean to interrupt someone while they\'re talking — context se samjho. "Discuss" se zyada informal hai.'
      }
    ],
    questions: [
      {
        id: 'tlq1',
        sentence: 'The delegates _____ the matter for an hour but without any result.',
        correct: 'talked over',
        options: [
          { verb: 'talked to', hint: 'galat preposition — talked to' },
          { verb: 'talked above', hint: 'galat option — talked above' },
          { verb: 'talked from', hint: 'galat option — talked from' },
          { verb: 'talked over', hint: 'matter discuss karna — talk over' }
        ],
        feedback: '"Talked over" sahi hai kyunki delegates ne ek ghante tak matter thoroughly discuss kiya bina kisi result ke — yeh exactly "talk over" ka use hai: kisi matter ko decision ya agreement ke liye discuss karna. "Talked to" wrong preposition hai for this meaning. "Talked above" aur "talked from" koi real phrasal verbs nahi hain.'
      }
    ]
  },

  'Track': {
    intro: '"Track down" — detective style search. Jab normal dhundhne se koi na mile aur zyada effort lagani pade — tab "track down." Police suspects ko, scientists rare species ko, aur log missing people ko "track down" karte hain.',
    verbs: [
      {
        pv: 'track down',
        def_en: 'To find someone or something after a long search or investigation.',
        def_hi: 'Lambey search ya investigation ke baad kisi ko ya kisi cheez ko dhundh nikalna ।',
        example: 'After weeks of investigation, the detective finally tracked down the suspect.',
        note: '"Track down" aur "hunt down" almost same hain — dono determined searching ke liye. "Track down" slightly more methodical — following a trail. "Hunt down" slightly more aggressive. "Look for" se zyada intense hai — track down implies significant effort and persistence.'
      }
    ],
    questions: [
      {
        id: 'trq1',
        sentence: 'The police were able to _____ the suspect in a small town.',
        correct: 'track down',
        options: [
          { verb: 'turn in', hint: 'submit karna ya kisi ko report karna — turn in' },
          { verb: 'track down', hint: 'lambey search ke baad dhundna — track down' },
          { verb: 'make up', hint: 'invent karna ya reconcile — make up' },
          { verb: 'break in', hint: 'force se ghusna — break in' }
        ],
        feedback: '"Track down" sahi hai kyunki police ne ek chhote sheher mein suspect ko dhundh nikala — determined search ke baad location find karna. "Turn in" kisi ko authorities ko report karna hai. "Make up" invent karna hai. "Break in" force se enter karna hai.'
      }
    ]
  },

  'Turn': {
    intro: 'Turn ke phrasal verbs mein mostly change ke ideas hain — reject karna, transform karna, ya appear karna. "Turn down" aur "turn up" opposites hain emotionally — ek disappointment, doosra pleasant surprise.',
    verbs: [
      {
        pv: 'turn down',
        def_en: 'To refuse or reject an offer, request, or person.',
        def_hi: 'Kisi offer, request, ya insaan ko refuse ya reject karna ।',
        example: 'She turned down the job offer because the salary was too low.',
        note: '"Turn down" aur "shoot down" dono rejection ke liye hain, lekin "turn down" zyada about politely refusing offers or requests. "Shoot down" zyada about dismissing ideas abruptly.'
      },
      {
        pv: 'turn into',
        def_en: 'To cause someone or something to become something different.',
        def_hi: 'Kisi insaan ya cheez ko kuch alag banana ya kisi alag cheez mein badal jaana ।',
        example: 'The abandoned warehouse was turned into a modern art gallery.',
        note: '"Turn into" aur "become" same meaning rakhte hain lekin "turn into" zyada suggests a transformation — one thing literally changing into another.'
      },
      {
        pv: 'turn up',
        def_en: 'To arrive or appear, especially unexpectedly; or to increase volume/intensity.',
        def_hi: 'Kisi jagah pahunchna ya dikhai dena, khaaskar achanak; ya volume ya intensity badhana ।',
        example: 'We had given up hoping he would come, when he suddenly turned up.',
        note: '"Turn up" aur "show up" almost same hain for arriving. "Turn up" slightly more British English. "Turn down" ke saath confuse mat karo — turn up = arrive/increase, turn down = reject/decrease.'
      },
      {
        pv: 'turn out',
        def_en: 'To happen or result in a particular way; or to prove to be something.',
        def_hi: 'Kisi khaas tarike se result ya aant hona; ya koi cheez sabit hona ।',
        example: 'Despite our worries, the event turned out to be a great success.',
        note: '"Turn out" aur "end up" dono final result ke baare mein hain, lekin "turn out" zyada about the final nature or quality of something. "End up" zyada about where or what you finally arrive at.'
      }
    ],
    questions: [
      {
        id: 'tnq1',
        sentence: 'She _____ the job offer because it didn\'t meet her expectations.',
        correct: 'turned down',
        options: [
          { verb: 'took up', hint: 'accept karna ya shuru karna — take up' },
          { verb: 'turned down', hint: 'reject karna — turn down' },
          { verb: 'set off', hint: 'trigger ya safar — set off' },
          { verb: 'fell through', hint: 'plan fail hona — fall through' }
        ],
        feedback: '"Turned down" sahi hai kyunki usne job offer ko politely refuse kiya — expectations match nahi karti thi. "Took up" accept karna ya shuru karna hai — ulta meaning. "Set off" journey ya trigger ke liye hai. "Fell through" plan fail hone ke liye hai.'
      },
      {
        id: 'tnq2',
        sentence: 'How can seawater from the oceans be _____ fresh water that is suitable for people to drink?',
        correct: 'turned into',
        options: [
          { verb: 'change about', hint: 'galat construction — change about' },
          { verb: 'surrender in', hint: 'koi phrasal verb nahi' },
          { verb: 'minced on', hint: 'koi phrasal verb nahi' },
          { verb: 'turned into', hint: 'kuch aur banana — turn into' }
        ],
        feedback: '"Turned into" sahi hai kyunki seawater ko fresh water mein transform karna hai — "turn into" conversion ya transformation ke liye. Baaki sab galat hain.'
      },
      {
        id: 'tnq3',
        sentence: 'It\'s a challenge, and men find it hard to turn _____ challenges.',
        correct: 'down',
        options: [
          { verb: 'up', hint: 'arrive ya increase — turn up' },
          { verb: 'below', hint: 'galat preposition' },
          { verb: 'down', hint: 'reject karna — turn down' },
          { verb: 'aside', hint: 'side mein karna — turn aside' }
        ],
        feedback: '"Down" sahi hai kyunki "turn down challenges" ka matlab hai challenges ko refuse karna ya avoid karna — yahi unke liye mushkil hai. "Turn up" arrive ya increase ke liye hai. "Below" koi phrasal verb nahi banaata. "Turn aside" kisi ko side mein hataana hai.'
      }
    ]
  },

  'Wind': {
    intro: '"Wind down" — machine ko slowly band karna, ya din khatam hone ke baad relax karna. Jab koi intense period ke baad dheere dheere settle karna ho, tab "wind down."',
    verbs: [
      {
        pv: 'wind down',
        def_en: 'To relax after a period of activity or stress; or for a business or activity to gradually end.',
        def_hi: 'Kisi kaam ya stress ke baad dheere dheere relax karna; ya kisi business ya activity ka dheere khatam hona ।',
        example: 'After a long day, she liked to wind down with a cup of herbal tea and a book.',
        note: '"Wind down" aur "calm down" dono relaxing ke liye hain, lekin "wind down" zyada gradual process hai — like a clock spring unwinding. "Calm down" zyada about reducing emotional agitation.'
      }
    ],
    questions: [
      {
        id: 'wdq1',
        sentence: 'After a long day at work, he likes to _____ with a good book.',
        correct: 'wind down',
        options: [
          { verb: 'turn down', hint: 'reject karna — turn down' },
          { verb: 'break out', hint: 'escape ya suddenly start — break out' },
          { verb: 'wind down', hint: 'relax karna — wind down' },
          { verb: 'run out', hint: 'khatam hona — run out' }
        ],
        feedback: '"Wind down" sahi hai kyunki lambi mehnat ke baad woh kitaab padh ke relax karna chahta hai — gradually settle hona aur stress release karna. "Turn down" reject karne ke liye hai. "Break out" suddenly shuru hone ya escape ke liye hai. "Run out" khatam hone ke liye hai.'
      },
      {
        id: 'wdq2',
        sentence: 'They have decided to _____ their business without delay.',
        correct: 'wind up',
        options: [
          { verb: 'wind out', hint: 'galat phrasal verb' },
          { verb: 'wind down', hint: 'gradually khatam karna — wind down' },
          { verb: 'wind up', hint: 'completely khatam karna — wind up' },
          { verb: 'wind over', hint: 'galat phrasal verb' }
        ],
        feedback: '"Wind up" sahi hai kyunki "without delay" se pata chalta hai woh business quickly aur completely khatam karna chahte hain — "wind up" means to bring something to a final end. "Wind down" gradual ending hai, "wind up" more final/complete closing. "Wind out" aur "wind over" koi real phrasal verbs nahi hain.'
      }
    ]
  },

  'Work': {
    intro: '"Work on" — effort lagaana kisi kaam ya skill pe. Jab koi cheez improve karni ho ya kisi project pe time dena ho, tab "work on." Simple lekin bahut common in professional context.',
    verbs: [
      {
        pv: 'work on',
        def_en: 'To spend time and effort improving something or trying to complete a task.',
        def_hi: 'Kisi cheez ko improve karne ya kaam complete karne mein time aur effort lagana ।',
        example: 'I need to work on my public speaking skills before the next presentation.',
        note: '"Work on" aur "work at" almost same hain — dono improvement ya effort ke liye. "Work on" zyada about a specific project or thing. "Work at" zyada about continuous practice or effort in general.'
      }
    ],
    questions: [
      {
        id: 'wkq1',
        sentence: 'I have to _____ my presentation for tomorrow\'s meeting.',
        correct: 'work on',
        options: [
          { verb: 'work on', hint: 'improve karna ya kaam karna — work on' },
          { verb: 'bring about', hint: 'cause karna — bring about' },
          { verb: 'take in', hint: 'samajhna ya deceive — take in' },
          { verb: 'look up to', hint: 'admire karna — look up to' }
        ],
        feedback: '"Work on" sahi hai kyunki presentation ko better banana ya complete karne ke liye effort lagana hai. "Bring about" kuch cause karne ke liye hai. "Take in" information absorb karne ke liye hai. "Look up to" kisi ko respect karne ke liye hai.'
      },
      {
        id: 'wkq2',
        sentence: 'He needs to _____ how to improve his time management.',
        correct: 'figure out',
        options: [
          { verb: 'figure out', hint: 'solve ya understand karna — figure out' },
          { verb: 'look down on', hint: 'neecha samajhna — look down on' },
          { verb: 'give up', hint: 'chhodna — give up' },
          { verb: 'fall back', hint: 'retreat karna — fall back' }
        ],
        feedback: '"Figure out" sahi hai kyunki ushe time management better karne ka solution ya tarika dhundna hai — "figure out" means to solve or understand something. "Look down on" kisi ko inferior samajhna hai. "Give up" chhodna hai. "Fall back" retreat karna hai.'
      }
    ]
  }

// ===== END OF MISSING BASE VERBS =====
// Total added: Collapse, Do, End, Ham, Hanker, Shake, Shoot, Sort, Speed,
//              Step, Swallow, Take, Talk, Track, Turn, Wind, Work
};
