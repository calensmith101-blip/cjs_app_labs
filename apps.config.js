// CJS App Labs public demo/download site config.
// Edit demoUrl, checkoutUrl, monthlyPrice and screenshots here without touching the page code.
// Real screenshots can be imported from your D:\apps folders by running: npm run import-screenshots

window.CJS_CONTACT = {
  "general": "info@cjsapplabs.xyz",
  "business": "admin@cjsapplabs.xyz",
  "owner": "cj@cjsapplabs.xyz"
};

window.CJS_PLANS = [
  {
    "id": "free-demos",
    "name": "Free demos",
    "price": "$0",
    "note": "Try the public demo versions before paying.",
    "features": [
      "Open public demos",
      "No card needed",
      "Good way to test if the app suits you",
      "Demo data may be limited or reset"
    ],
    "cta": "Browse demos",
    "href": "#/apps"
  },
  {
    "id": "single-app",
    "name": "Single app access",
    "price": "From $4.99/month",
    "note": "For people who only want one full app.",
    "features": [
      "One full app unlocked",
      "Use through the website",
      "Install from Chrome where supported",
      "Cancel anytime"
    ],
    "cta": "Choose an app",
    "href": "#/apps"
  },
  {
    "id": "all-apps",
    "name": "All Apps bundle",
    "price": "$29.99/month",
    "note": "Best value when you use several of these apps.",
    "features": [
      "All current supported apps",
      "New supported apps added over time",
      "One account",
      "Cancel anytime"
    ],
    "cta": "Request bundle access",
    "href": "mailto:info@cjsapplabs.xyz?subject=All%20Apps%20Bundle%20subscription"
  }
];

window.CJS_APPS = [
{
  "id": "the-accountant",
  "name": "The Accountant",
  "subtitle": "Invoicing, quoting, jobs and small business admin.",
  "category": "Business",
  "status": "Demo ready",
  "monthlyPrice": "$10.99/month",
  "demoUrl": "https://accountant.cjsapplabs.xyz",
  "checkoutUrl": "https://buy.stripe.com/fZu6oG7an422gle5rednW02",
  "iconText": "TA",
  "tags": [
    "Invoices",
    "Quotes",
    "Clients",
    "Tradies"
  ],
  "shortDescription": "A practical app for sole traders and small operators who need quotes, invoices, jobs and client records in one place.",
  "longDescription": "The Accountant started as a personal tool to make quote and invoice work less painful. When I started my handyman business I was so afriad to overcharge or undercharge on quotes. So I made this AI quoting system that gives me a better idea on what and how i should charge a client but also gives me a full scope and rundown of the job at hand including materials and tools needed. All of that with either just a quick photo or brief descrtiption it can tell you everything down to problems you may face.  It is designed for trade and maintenance work where you need to keep track of clients, job notes, materials, quotes, invoices and business records without living inside a complicated accounting package. It even has the ability to have multiple businesses separatley an at once with the choice of combined or indivdual finance and tax sections. The demo shows the general workflow. Full access is intended to add persistent user data, account-based storage and subscription access.",
  "screenshots": [
    "assets/screenshots/inout/screen-1.png",
    "assets/screenshots/inout/screen-2.png",
    "assets/screenshots/inout/screen-3.png",
    "assets/screenshots/inout/screen-4.png",
    "assets/screenshots/inout/screen-5.png"
  ]
},
   {
    "id": "sanctuary",
    "name": "Sanctuary",
    "subtitle": "A calm AI support space for reflection and check-ins.",
    "category": "Wellbeing",
    "status": "Demo ready",
    "monthlyPrice": "$7.99/month",
    "demoUrl": "https://sanctuary.cjsapplabs.xyz/",
    "checkoutUrl": "https://buy.stripe.com/bJefZg1Q36aa3ys06UdnW07",
    "iconText": "SA",
    "tags": [
      "Journaling",
      "Check-ins",
      "Routines",
      "AI support"
    ],
    "shortDescription": "A private-feeling digital space for journaling, self-reflection and daily support tools.",
    "longDescription": "Sanctuary is designed as a safe, quiet digital place for daily check-ins, journaling prompts, reflection tools and supportive AI-assisted conversation. It is not a replacement for a doctor, counsellor or crisis service, but it can help people organise thoughts, track patterns and build routines between real-world supports. The demo lets people experience the general feel before deciding whether full access is useful for them.",
    "screenshots": [
      "assets/screenshots/sanctuary/screen-1.png",
      "assets/screenshots/sanctuary/screen-2.png",
      "assets/screenshots/sanctuary/screen-3.png",
      "assets/screenshots/sanctuary/screen-4.png",
      "assets/screenshots/sanctuary/screen-5.png",
      "assets/screenshots/sanctuary/screen-6.png"
  ]
},
   {
    "id": "after-dark",
    "name": "After Dark Tales",
    "subtitle": "Personalised generated stories for adult readers.",
    "category": "Creative writing",
    "status": "Demo ready",
    "monthlyPrice": "$7.99/month",
    "demoUrl": "https://ad-demo.cjsapplabs.xyz/",
    "checkoutUrl": "https://buy.stripe.com/dRm28qeCPaqq1qkcTGdnW0a",
    "iconText": "AD",
    "tags": [
      "Stories",
      "AI writing",
      "Save reads",
      "Personalised"
    ],
    "shortDescription": "A creative story app that generates personalised stories based on user choices.",
    "longDescription": "After Dark Tales is a creative writing app that generates stories based on selected genre, tone, length and style. It is built for people who like personalised reading and want something different each time they open the app. Full access is intended to include saved stories, read-aloud style features and account-based history.",
    "screenshots": [
      "assets/screenshots/after-dark/screen-1.png",
      "assets/screenshots/after-dark/screen-2.png",
      "assets/screenshots/after-dark/screen-3.png"
    ]
  },
  {
    "id": "never-ending-story",
    "name": "Never Ending Story",
    "subtitle": "Self-generated stories based on your ideas or a completely new prompt.",
    "category": "Creative writing",
    "status": "Demo ready",
    "monthlyPrice": "$7.99/month",
    "demoUrl": "https://neverendingstory.cjsapplabs.xyz",
    "checkoutUrl": "https://buy.stripe.com/14AaEW3Yb0PQed66vidnW0b",
    "iconText": "NS",
    "tags": [
      "Stories",
      "Creative writing",
      "AI writing",
      "Reading"
    ],
    "shortDescription": "A story app that creates original stories from user ideas and reading preferences.",
    "longDescription": "Never Ending Story creates new stories from a user idea, theme, setting or prompt. It is designed for readers who want fresh stories and for families or creative users who like shaping what happens next. The demo gives people a feel for the story generation flow before full access is offered.",
    "screenshots": [
      "assets/screenshots/never-ending-story/screen-1.png",
      "assets/screenshots/never-ending-story/screen-2.png",
      "assets/screenshots/never-ending-story/screen-3.png"
    ]
  },
  {
    "id": "coach-court",
    "name": "Coach Court",
    "subtitle": "Basketball coaching notes, drills and rotations.",
    "category": "Sport",
    "status": "Demo ready",
    "monthlyPrice": "$5.99/month",
    "demoUrl": "https://coaching.cjsapplabs.xyz/",
    "checkoutUrl": "",
    "iconText": "CC",
    "tags": [
      "Basketball",
      "Coaching",
      "Drills",
      "Rotations"
    ],
    "shortDescription": "A basketball coaching helper for training, notes and game-day organisation.",
    "longDescription": "Coach Court is designed for junior basketball coaching, with tools for drills, player notes, sub planning, game feedback and simple training structure. It is meant to help coaches stay organised without needing a complicated sports management platform. Demo access shows the core layout and coaching workflow.",
    "screenshots": [
      "assets/screenshots/coach-court/screen-1.png",
      "assets/screenshots/coach-court/screen-2.png",
      "assets/screenshots/coach-court/screen-3.png"
    ]
  },
  {
    "id": "cursive",
    "name": "Cursive Helper",
    "subtitle": "Cursive writing practice and tracing support.",
    "category": "Kids learning",
    "status": "Demo ready",
    "monthlyPrice": "$4.99/month",
    "demoUrl": "https://cursivedemo.cjsapplabs.xyz/",
    "checkoutUrl": "",
    "iconText": "CU",
    "tags": [
      "Writing",
      "Kids",
      "Practice",
      "Tracing"
    ],
    "shortDescription": "A handwriting helper for cursive practice, tracing and letter confidence.",
    "longDescription": "Cursive Helper is designed to make handwriting practice feel simpler and less frustrating. It can be used for letter shapes, tracing, practice sessions and confidence-building. The public demo will let families test the layout and feel before full access is offered.",
    "screenshots": [
      "assets/screenshots/cursive-1.svg",
      "assets/screenshots/cursive-2.svg"
    ]
  },
  {
    "id": "electrolab",
    "name": "El3troLab",
    "subtitle": "Electrical calculators and practical trade helpers.",
    "category": "Trade tools",
    "status": "Demo ready",
    "monthlyPrice": "$9.99/month",
    "demoUrl": "https://electrolab.cjsapplabs.xyz/",
    "checkoutUrl": "",
    "iconText": "EL",
    "tags": [
      "Electrical",
      "Calculators",
      "Tools",
      "Reference"
    ],
    "shortDescription": "A handy reference and calculator app for electrical and low-voltage work.",
    "longDescription": "El3troLab is aimed at practical electrical, data, low-voltage and trade work. It is a place for calculators, wiring references, voltage drop checks, quick formulas and other job-site helpers. The demo shows the direction of the tool, while full versions can expand into saved jobs, favourites and deeper calculators.",
    "screenshots": [
      "assets/screenshots/electrolab-1.svg",
      "assets/screenshots/electrolab-2.svg"
    ]
  },
  {
    "id": "family-planner",
    "name": "Family Routine Planner",
    "subtitle": "Routines, rewards and structure for families.",
    "category": "Family",
    "status": "Demo ready",
    "monthlyPrice": "$5.99/month",
    "demoUrl": "https://familyapp.cjsapplabs.xyz/",
    "checkoutUrl": "https://familyapp.cjsapplabs.xyz/",
    "iconText": "FP",
    "tags": [
      "Routines",
      "Rewards",
      "Kids",
      "Parents"
    ],
    "shortDescription": "A family-focused app for routines, jobs, rewards and daily structure.",
    "longDescription": "Family Routine Planner was built around real family routines: getting tasks done, tracking rewards, keeping mornings and evenings calmer and making progress visible for kids. The goal is to make routine tracking feel encouraging rather than strict. Demo access lets families test the layout and the reward idea before moving to a full account-based version.",
    "screenshots": [
      "assets/screenshots/family-planner/screen-1.png",
      "assets/screenshots/family-planner/screen-2.png",
      "assets/screenshots/family-planner/screen-3.png"
    ]
  },
  {
    "id": "gamertabs",
    "name": "GamerTabs",
    "subtitle": "A growing collection of casual games and game tools.",
    "category": "Games",
    "status": "Demo ready",
    "monthlyPrice": "$4.99/month",
    "demoUrl": "https://gamertabs.cjsapplabs.xyz/",
    "checkoutUrl": "https://buy.stripe.com/00w14m9iv0PQ1qk2f2dnW08",
    "iconText": "GT",
    "tags": [
      "Board games",
      "Casino modes",
      "Multiplayer",
      "Fun"
    ],
    "shortDescription": "A casual game hub with multiple game ideas under one roof.",
    "longDescription": "GamerTabs is a playful app hub for board-game inspired modes, casino-style experiments and same-device or online play ideas. It is built as a place to keep expanding games over time instead of creating a separate site for every single game. The demo is there so people can try the style and see which modes are available before any paid full access is offered.",
    "screenshots": [
      "assets/screenshots/gamertabs/screen-1.png",
      "assets/screenshots/gamertabs/screen-2.png",
      "assets/screenshots/gamertabs/screen-3.png"
    ]
  },
  {
    "id": "grimoire",
    "name": "Grimoire Obscura",
    "subtitle": "A dark reference app for occult and mythology topics.",
    "category": "Reference",
    "status": "Demo ready",
    "monthlyPrice": "$4.99/month",
    "demoUrl": "https://grimoire.cjsapplabs.xyz/",
    "checkoutUrl": "https://buy.stripe.com/28E5kC8er1TU0mgcTGdnW09",
    "iconText": "GO",
    "tags": [
      "Reference",
      "Occult",
      "Mythology",
      "Dark UI"
    ],
    "shortDescription": "A styled reference app for mythology, symbolism, occult themes and dark encyclopaedia browsing.",
    "longDescription": "Grimoire Obscura is built as a dark, atmospheric reference app for people who enjoy mythology, symbolism, folklore, esoteric subjects and themed encyclopaedia browsing. It is intended as a creative reference experience rather than a plain list of articles. The demo gives users a feel for the style and content structure.",
    "screenshots": [
      "assets/screenshots/grimoire/screen-1.png",
      "assets/screenshots/grimoire/screen-2.png",
      "assets/screenshots/grimoire/screen-3.png",
      "assets/screenshots/grimoire/screen-4.png"
    ]
  },
  {
    "id": "learning-stars",
    "name": "Learning Stars",
    "subtitle": "Bright interactive learning for kids.",
    "category": "Kids learning",
    "status": "Demo ready",
    "monthlyPrice": "$4.99/month",
    "demoUrl": "https://learningstars.cjsapplabs.xyz",
    "checkoutUrl": "https://buy.stripe.com/cNi4gy0LZ566b0Ug5SdnW05",
    "iconText": "LS",
    "tags": [
      "Kids",
      "Learning",
      "Games",
      "Rewards"
    ],
    "shortDescription": "A colourful learning game designed to make practice feel positive and rewarding.",
    "longDescription": "Learning Stars is built for younger learners who respond better to games, colour and reward than plain worksheets. The idea is to turn practice into small wins, with friendly screens and activities that help kids stay engaged. Demo access will let parents and kids try the feel of the app before subscribing to the full version.",
    "screenshots": [
      "assets/screenshots/learning-stars-1.svg",
      "assets/screenshots/learning-stars-2.svg"
    ]
  },
  {
    "id": "mathquest",
    "name": "Math Quest",
    "subtitle": "Maths practice built like an adventure.",
    "category": "Kids learning",
    "status": "Demo ready",
    "monthlyPrice": "$2.99/month",
    "demoUrl": "https://mathquest.cjsapplabs.xyz/",
    "checkoutUrl": "https://buy.stripe.com/14A14mfGT6aa6KE06UdnW06",
    "iconText": "MQ",
    "tags": [
      "Maths",
      "Adventure",
      "Kids",
      "Practice"
    ],
    "shortDescription": "A quest-style maths app for practice, progress and confidence.",
    "longDescription": "Math Quest turns maths practice into a small adventure so it feels less like homework and more like progress through a game. It is designed for quick sessions, repeat practice and confidence-building. The demo version is free to try so kids and parents can see whether the style suits them before subscribing to full access.",
    "screenshots": [
      "assets/screenshots/mathquest-1.svg",
      "assets/screenshots/mathquest-2.svg"
    ]
  },
  {
    "id": "mixmate",
    "name": "MixMate Cocktails",
    "subtitle": "Cocktail discovery, ingredients and inventory.",
    "category": "Lifestyle",
    "status": "Demo ready",
    "monthlyPrice": "$4.99/month",
    "demoUrl": "https://mixmate.cjsapplabs.xyz/",
    "checkoutUrl": "",
    "iconText": "MM",
    "tags": [
      "Cocktails",
      "Ingredients",
      "Inventory",
      "Shopping list"
    ],
    "shortDescription": "A cocktail companion for recipes, ingredients, stock and shopping lists.",
    "longDescription": "MixMate Cocktails helps people explore drinks, manage ingredients, build shopping lists and find recipes based on what they have. It is made for home use, casual entertaining and people who like discovering new cocktails without constantly searching separate recipe sites. The demo lets users browse before full features are unlocked.",
    "screenshots": [
      "assets/screenshots/mixmate/screen-1.png",
      "assets/screenshots/mixmate/screen-2.png",
      "assets/screenshots/mixmate/screen-3.png"
    ]
  },
  {
    "id": "moneytalks",
    "name": "MoneyTalks",
    "subtitle": "A simple personal money and budget helper.",
    "category": "Finance",
    "status": "Demo ready",
    "monthlyPrice": "$5.99/month",
    "demoUrl": "https://moneymate.cjsapplabs.xyz/",
    "checkoutUrl": "",
    "iconText": "MT",
    "tags": [
      "Budget",
      "Bills",
      "Savings",
      "Planning"
    ],
    "shortDescription": "A visual money helper for bills, spending, savings and reminders.",
    "longDescription": "MoneyTalks is designed for people who want a simpler way to see where their money is going. It focuses on bills, income, savings goals, reminders and visual planning instead of heavy financial jargon. Demo access will help users decide whether the layout suits them before full data storage is enabled.",
    "screenshots": [
      "assets/screenshots/moneytalks-1.svg",
      "assets/screenshots/moneytalks-2.svg"
    ]
  }
];
