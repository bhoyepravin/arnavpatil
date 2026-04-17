// ─── Company & Person Info ────────────────────────────────────────────────────



export const coachInfo = {
  name: "Arnav Patil",
  fullName: "Mr. Arnav Patil",
  title: "International Business Coach, Strategist & Keynote Speaker",
  shortTitle: "Business Coach & Strategist",
  company: "Arnav Patil & Co. Arnasoft Solutions",
  phone: "+91-9272056528 ",
  whatsapp: "https://wa.me/919272056528 ",
  email: "coacharnavpatil@gmail.com",
  email2 : "support@arnavpatil.com",
  
  instagram: "https://www.instagram.com/coacharnavpatil",
  instagramHandle: "@coacharnavpatil",
  location: "India",
  tagline: "Transform Your Business with Arnasoft Solutions",
  subTagline:
    "Helping business owners scale, automate and grow with proven strategies — across India and 5 countries.",
  bio: `Mr. Arnav Patil is a self-made entrepreneur and seasoned business coach with over 10 years of experience helping business owners scale their ventures to new heights. Specialising in the jewellery industry, he has trained 1000+ clients across India and 5 countries, delivering proven strategies for real business growth.

A passionate mentor and guide for young entrepreneurs and aspiring businesswomen, Arnav believes every business has unlimited potential — it just needs the right system, strategy, and mindset. Through his flagship Jewellers Masterclass and multiple coaching programmes, he helps Vyaparis evolve into true CEOs.

At Arnav Patil & Co., powered by Arnasoft Solutions, the mission is simple: create lasting impact on every life and business we touch.`,
  yearsExp: "10+",
  clientsCount: "1000+",
  countriesCount: "5",
  socialFollowing: "11K+",
};

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "1000+", label: "Coaching Clients" },
  { value: "10+",   label: "Years Experience" },
  { value: "5",     label: "Countries" },
  { value: "11K+",  label: "Social Following" },
];

// ─── Nav Items ────────────────────────────────────────────────────────────────
export const navItems = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events",   href: "/events" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

// ─── Programs ─────────────────────────────────────────────────────────────────
export const programs = [
  {
    slug: "jewellers-masterclass",
    contact : "contact",
    link : "/programs",
    title: "Jewellers Masterclass",
    shortTitle: "Jewellers Masterclass",
    tagline: "The Ultimate Programme for Jewellery Business Owners",
    badge: "Flagship",
    icon: "💎",
    duration: "2 Days",
    mode: "Offline / Live",
    language: "Marathi & Hindi",
    audience: "Jewellery business owners, retailers, manufacturers",
    description:
      "India's most impactful programme specifically designed for jewellery business owners. Learn proven systems to automate operations, double sales, and build a brand that lasts generations. Over 1000+ jewellers have transformed their businesses through this masterclass.",
    highlights: [
      "Jewellery business automation systems",
      "Sales strategies to double revenue",
      "Brand building & digital presence",
      "Staff management & leadership",
      "Customer retention strategies",
      "Future-proofing your jewellery brand",
    ],
    testimonialIds: [1, 2, 3, 4],
    image: "/programms/arnav_patil_programm_01.webp",
  },
  {
    slug: "business-scaling-program",
    title: "Business Scaling Program",
    link : "/programs",
    shortTitle: "Scaling Program",
    tagline: "From Vyapari to CEO — Scale Beyond Limits",
    badge: "Most Popular",
    icon: "🚀",
    duration: "3 Months",
    mode: "Online & Offline",
    language: "Marathi, Hindi & English",
    audience: "Business owners across all sectors",
    description:
      "A comprehensive 3-month coaching programme helping business owners in all sectors systematize, scale, and lead their businesses like a true CEO. Covers strategy, systems, people, and profit.",
    highlights: [
      "Business strategy & roadmapping",
      "Systems & SOPs for operations",
      "Team building & leadership",
      "Marketing & customer acquisition",
      "Financial management & profitability",
      "CEO mindset transformation",
    ],
    testimonialIds: [1, 2],
    image: "/programms/arnav_patil_programm_02.webp",
  },
  {
    slug: "leadership-mastery",
    title: "Leadership Mastery",
    link : "/programs",
    shortTitle: "Leadership",
    tagline: "Lead with Confidence. Inspire with Vision.",
    badge: "New",
    icon: "🎯",
    duration: "1 Day Workshop",
    mode: "Offline",
    language: "Marathi & Hindi",
    audience: "Business leaders, managers, young entrepreneurs",
    description:
      "A high-impact leadership workshop designed to unlock the leader within. Develop the mindset, communication skills and strategic thinking that separates good managers from great leaders.",
    highlights: [
      "Leadership psychology & mindset",
      "Effective communication & influence",
      "Decision-making under pressure",
      "Building high-performance teams",
      "Conflict resolution strategies",
      "Vision setting & execution",
    ],
    testimonialIds: [2],
    image: "/programms/arnav_patil_programm_03.webp",
  },
  {
    slug: "women-entrepreneurs-program",
    title: "Women Entrepreneurs Program",
    link : "/programs",
    shortTitle: "Women Entrepreneurs",
    tagline: "Empowering Women to Build Their Empire",
    badge: "Empowerment",
    icon: "🌟",
    duration: "1 Day",
    mode: "Offline",
    language: "Marathi & Hindi",
    audience: "Women business owners, homemakers starting a business",
    description:
      "A specially crafted programme empowering women to unleash their inner potential and build self-sustaining businesses. Arnav mentors women to stand confidently on their own feet with the right business tools and mindset.",
    highlights: [
      "Finding your business idea & niche",
      "Starting with zero capital",
      "Digital tools for women entrepreneurs",
      "Confidence & personal branding",
      "Balancing business & family",
      "Networking & community building",
    ],
    testimonialIds: [1],
    image: "/programms/arnav_patil_programm_04.webp",
  },
];

// ─── Why Choose Arnav ─────────────────────────────────────────────────────────
export const whyChoose = [
  {
    icon: "💼",
    title: "10+ Years of Real Experience",
    desc: "Not theory — real strategies from real business transformations across India and 5 countries.",
  },
  {
    icon: "💎",
    title: "Jewellery Business Expert",
    desc: "Unmatched expertise in the jewellery sector. The go-to coach for jewellers across India.",
  },
  {
    icon: "🎯",
    title: "Proven Systems & Frameworks",
    desc: "Every strategy is tested, refined and proven across 1000+ businesses before it reaches you.",
  },
  {
    icon: "🌍",
    title: "International Perspective",
    desc: "Coaching clients across 5 countries, bringing a global mindset to every Indian business.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    desc: "Arnav personally engages with every client, ensuring tailored guidance — not cookie-cutter advice.",
  },
  {
    icon: "📈",
    title: "Measurable Business Growth",
    desc: "Clients consistently report doubled sales, reduced chaos, and a true CEO-level business structure.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Ms. Divya Choudhari",
    location: "Nashik",
    program: "Jewellers Masterclass",
    rating: 5,
    text: "Connecting with Arnav Sir was the best decision of my life. I am so excited to launch my new jewellery brand after attending Arnav Sir's Masterclass. Thank You Arnav Sir!",
    language: "en",
  },
  {
    id: 2,
    name: "Mr. Aakash Maid",
    location: "Mumbai",
    program: "Jewellers Masterclass",
    rating: 5,
    text: "काळानुसार आपल्यामध्ये जो बदल अपेक्षित आहे, जो बदल आपल्याला स्वतःमध्ये आणि व्यवसायामध्ये करायला पाहिजे, ते मला या मास्टरक्लास मधून समजले.",
    language: "mr",
  },
  {
    id: 3,
    name: "Mr. Akshay Shahane",
    location: "Thane",
    program: "Jewellers Masterclass",
    rating: 5,
    text: "मी आजपर्यंत बरेच प्रोग्राम अटेंड केले आहेत, पण ज्वेलर्स मास्टर क्लास सारखा हा स्पेसिफिक ज्वेलरी बिझनेस प्रोग्रॅम मी पहिल्यांदाच अटेंड केला. आत्तापर्यंतचा सगळ्यात बेस्ट अनुभव होता. One of the best investments of time and money.",
    language: "mr",
  },
  {
    id: 4,
    name: "Mr. Sai Kharote",
    location: "Nagpur",
    program: "Jewellers Masterclass",
    rating: 5,
    text: "कुठेतरी जो कॉन्फिडन्स डाउन झाला होता तो पुन्हा एकदा जागा झाला आहे. आपल्या धंद्यात खूप पोटेन्शिअल आहे आणि आपण त्याचा योग्य वापर करून आपल्या ब्रांडला मोठं केलं पाहिजे हे आज मला शिकायला मिळाले.",
    language: "mr",
  },
  {
    id: 5,
    name: "Jewellers Masterclass Batch",
    location: "Maharashtra",
    program: "Jewellers Masterclass",
    rating: 5,
    text: "आम्ही अर्णव सरांसोबत आमचे पिढीजात व्यवसाय Automation ला नेले. Sale दुपटीने वाढला आणि Brand मोठा करण्याचा confidence वाढला.",
    language: "mr",
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────
export const events = [
  {
    slug: "jewellers-masterclass-pune-may-2025",
    title: "Jewellers Masterclass — Pune",
    shortTitle: "Jewellers Masterclass",
    date: "2025-05-18",
    endDate: "2025-05-19",
    time: "9:00 AM – 6:00 PM",
    venue: "Pune, Maharashtra",
    mode: "Offline",
    language: "Marathi & Hindi",
    seats: "Limited Seats",
    description:
      "India's most sought-after jewellery business programme is coming to Pune. Two powerful days that will transform how you run, grow, and scale your jewellery business forever.",
    highlights: [
      "Business automation for jewellers",
      "Sales & marketing strategies",
      "Brand building in the digital age",
      "Staff management systems",
    ],
    status: "upcoming",
    badge: "Flagship Event",
  },
  {
    slug: "business-growth-webinar-june-2025",
    title: "Free Business Growth Webinar",
    shortTitle: "Growth Webinar",
    date: "2025-06-05",
    endDate: "2025-06-05",
    time: "7:00 PM – 9:00 PM",
    venue: "Online (Zoom)",
    mode: "Online",
    language: "Marathi & Hindi",
    seats: "Open Registration",
    description:
      "Join Arnav Patil for a FREE 2-hour business growth webinar covering the top 5 strategies that have helped 1000+ business owners scale their revenue without working harder.",
    highlights: [
      "Top 5 revenue growth strategies",
      "How to systemize your business",
      "Mindset shift: Vyapari to CEO",
      "Live Q&A with Arnav Sir",
    ],
    status: "upcoming",
    badge: "Free Event",
  },
  {
    slug: "leadership-summit-nashik-2025",
    title: "Leadership Summit — Nashik",
    shortTitle: "Leadership Summit",
    date: "2025-07-12",
    endDate: "2025-07-12",
    time: "10:00 AM – 5:00 PM",
    venue: "Nashik, Maharashtra",
    mode: "Offline",
    language: "Marathi, Hindi & English",
    seats: "100 Seats Only",
    description:
      "A full-day leadership immersion programme bringing together business leaders, managers, and entrepreneurs for an intensive day of leadership skills, networking, and growth.",
    highlights: [
      "Leadership & influence workshop",
      "Networking with 100+ business owners",
      "Panel discussion with industry leaders",
      "Certificate of participation",
    ],
    status: "upcoming",
    badge: "Premium Event",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: "5-mistakes-jewellery-business-owners-make",
    title: "5 Mistakes Every Jewellery Business Owner Makes (And How to Fix Them)",
    excerpt:
      "Most jewellery businesses stagnate not because of bad products — but because of avoidable mistakes in operations, branding, and mindset. Here's what to watch out for.",
    date: "2025-04-01",
    readTime: "6 min",
    category: "Jewellery Business",
    tags: ["jewellery business", "business mistakes", "growth strategies"],
    content: [
      {
        type: "intro",
        text: "Running a jewellery business in India is both a privilege and a challenge. You carry forward generations of trust, artisanship, and relationships. But in today's rapidly changing market, even the most respected jewellery houses can find themselves losing relevance — not because of poor products, but because of five critical, and very fixable, mistakes.",
      },
      {
        type: "heading",
        text: "Mistake 1: No System, Only Dependence on the Owner",
      },
      {
        type: "paragraph",
        text: "The most common trap in family jewellery businesses: everything runs through the owner. Every decision, every transaction, every customer relationship depends on one person. This is not a business — it's a very stressful job. The solution is to build systems and SOPs (Standard Operating Procedures) that allow the business to function without you being physically present for every task.",
      },
      {
        type: "heading",
        text: "Mistake 2: Ignoring Digital Presence",
      },
      {
        type: "paragraph",
        text: "In 2025, your customer is online before they walk into your store. If your business isn't visible on Instagram, Google, or WhatsApp Business — you're invisible to a huge segment of buyers. A professional digital presence isn't optional anymore — it's the new storefront.",
      },
      {
        type: "heading",
        text: "Mistake 3: Not Training the Team",
      },
      {
        type: "paragraph",
        text: "Your staff represents your brand. An undertrained salesperson can lose a customer worth lakhs. Regular training on product knowledge, customer handling, and upselling can dramatically increase conversion rates and average ticket size.",
      },
      {
        type: "heading",
        text: "Mistake 4: No Customer Retention Strategy",
      },
      {
        type: "paragraph",
        text: "Jewellery businesses often focus on acquiring new customers while ignoring existing ones. But a loyal existing customer is worth 5x a new one. Simple retention strategies — birthday/anniversary messages, exclusive pre-launch invites, loyalty programmes — can transform your revenue.",
      },
      {
        type: "heading",
        text: "Mistake 5: Competing on Price Instead of Value",
      },
      {
        type: "paragraph",
        text: "The moment you start competing purely on making charges and price, you enter a race to the bottom. The most profitable jewellery businesses compete on trust, experience, design expertise, and brand story — not the cheapest rate card.",
      },
      {
        type: "callout",
        text: "Want to audit your jewellery business and fix these mistakes? Attend the next Jewellers Masterclass with Arnav Patil or connect on WhatsApp for a free business review.",
      },
    ],
  },
  {
    slug: "how-to-automate-your-jewellery-business",
    title: "How to Automate Your Jewellery Business in 5 Simple Steps",
    excerpt:
      "Business automation isn't just for tech companies. Here's a step-by-step guide to automating your jewellery business — so it runs smoothly even when you're not there.",
    date: "2025-03-15",
    readTime: "7 min",
    category: "Business Systems",
    tags: ["automation", "business systems", "jewellery business", "SOPs"],
    content: [
      {
        type: "intro",
        text: "When most jewellery business owners hear 'automation', they think of robots or expensive software. In reality, automating your jewellery business is about creating simple systems, processes, and tools that keep things running smoothly — even when you're not standing in the shop. Here's how to start in five practical steps.",
      },
      {
        type: "heading",
        text: "Step 1: Document Your Processes (Build SOPs)",
      },
      {
        type: "paragraph",
        text: "Start by writing down every major task in your business — from opening the shop and handling customer inquiries to billing, inventory management, and follow-ups. These become your SOPs (Standard Operating Procedures). Once documented, any team member can follow them without asking you every five minutes.",
      },
      {
        type: "heading",
        text: "Step 2: Set Up a WhatsApp Business System",
      },
      {
        type: "paragraph",
        text: "WhatsApp Business is the single most powerful free tool for Indian jewellers. Set up automated greetings, away messages, quick replies for FAQs (pricing, making charges, new arrivals), and a catalogue of your products. This alone reduces the owner's communication burden by 40-50%.",
      },
      {
        type: "heading",
        text: "Step 3: Implement a Simple Inventory Management System",
      },
      {
        type: "paragraph",
        text: "Manual stock tracking on paper or memory is the #1 source of loss in jewellery businesses. A simple inventory app (even a well-structured Excel file to start) tracks stock, alerts you when items are low, and eliminates the guesswork that costs you money.",
      },
      {
        type: "heading",
        text: "Step 4: Automate Customer Follow-Ups",
      },
      {
        type: "paragraph",
        text: "Use a simple CRM or even a structured WhatsApp contact list to track customer birthdays, anniversaries, and past purchases. Set reminders to send personalised messages on these occasions. This single habit has helped many of my clients recover lapsed customers and generate significant repeat business.",
      },
      {
        type: "heading",
        text: "Step 5: Delegate with Accountability Systems",
      },
      {
        type: "paragraph",
        text: "Automation without delegation is incomplete. Once you have SOPs, train your team to follow them — and set up a simple daily reporting system (even a WhatsApp group where each team member shares a brief end-of-day update). Now your business runs on systems, not solely on you.",
      },
      {
        type: "callout",
        text: "Ready to automate your jewellery business? Join the Jewellers Masterclass where Arnav Patil walks you through these systems in detail, with templates and tools you can implement immediately.",
      },
    ],
  },
  {
    slug: "from-vyapari-to-ceo-mindset-shift",
    title: "From Vyapari to CEO: The Mindset Shift That Changes Everything",
    excerpt:
      "The difference between a struggling business owner and a successful CEO isn't capital or luck — it's mindset. Here's the mental shift that transforms businesses.",
    date: "2025-02-28",
    readTime: "5 min",
    category: "Mindset",
    tags: ["CEO mindset", "vyapari to CEO", "business growth", "mindset"],
    content: [
      {
        type: "intro",
        text: "I've worked with hundreds of business owners across India. And in almost every case, the biggest obstacle to growth wasn't money, location, or competition. It was mindset. Specifically: the mindset of a Vyapari vs the mindset of a CEO. Both run businesses — but they think completely differently, and those thoughts produce completely different results.",
      },
      {
        type: "heading",
        text: "The Vyapari Mindset",
      },
      {
        type: "paragraph",
        text: "A Vyapari thinks: 'I am my business.' They are in the shop 12 hours a day. They handle every problem personally. They distrust delegation. They optimise for today's sale, not tomorrow's scale. And most importantly, they believe that working harder is the only path to more success. The result? A business that is completely dependent on one person — and that simply cannot grow beyond that person's physical capacity.",
      },
      {
        type: "heading",
        text: "The CEO Mindset",
      },
      {
        type: "paragraph",
        text: "A CEO thinks: 'I build systems that run my business.' A CEO hires for their weaknesses, delegates with accountability, invests in team training, and thinks in quarters and years — not just today. A CEO builds a business that can function and grow even in their absence. This is the shift that unlocks real, scalable growth.",
      },
      {
        type: "heading",
        text: "The Three Core Shifts",
      },
      {
        type: "list",
        items: [
          "From 'I do everything' → 'I build systems and people who do things'",
          "From 'Save money on staff' → 'Invest in the right team'",
          "From 'Today's profit' → 'Long-term brand and business value'",
        ],
      },
      {
        type: "heading",
        text: "How to Start the Shift",
      },
      {
        type: "paragraph",
        text: "The first step is awareness — recognising which mindset you're operating from. The second is education — learning what CEO thinking looks like in practice. The third is implementation — building one system at a time until your business no longer needs you to run every function. It starts with one decision: to stop being a Vyapari and start building like a CEO.",
      },
      {
        type: "callout",
        text: "Ready to make the shift? Arnav Patil's Business Scaling Program is specifically designed to walk you through this transformation, step by step, with a community of business owners doing it alongside you.",
      },
    ],
  },
];

// ─── Gallery items (placeholders — add real photos) ────────────────────────
export const galleryItems = [
  { id: 1, category: "Events", caption: "Jewellers Masterclass — Pune Batch", image: "/gallery/arnav_patil_sir_01.webp" },
  { id: 2, category: "Events", caption: "Business Scaling Workshop — Nashik", image: "/gallery/arnav_patil_sir_02.webp" },
  { id: 3, category: "Events", caption: "Leadership Masterclass — Mumbai", image: "/gallery/arnav_patil_sir_03.webp" },
  { id: 4, category: "Clients", caption: "Client Success — Jewellers Batch", image: "/gallery/arnav_patil_sir_04.webp" },
  { id: 5, category: "Clients", caption: "Women Entrepreneurs Programme", image: "/gallery/arnav_patil_sir_05.webp" },
  { id: 6, category: "Media", caption: "Speaking at Business Summit", image: "/gallery/arnav_patil_sir_06.webp" },
  { id: 7, category: "Events", caption: "Speaking at Business Summit", image: "/gallery/pranav_patil_programm_01.webp" },
  { id: 8, category: "Events", caption: "Speaking at Business Summit", image: "/gallery/pranav_patil_programm_02.webp" },
  { id: 9, category: "Events", caption: "Speaking at Business Summit", image: "/gallery/pranav_patil_programm_03.webp" },
];
