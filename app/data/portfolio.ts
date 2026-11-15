export type Project = {
  slug: string; // used for the section id, e.g. "project-quizmos"
  title: string;
  description: string;
  tags: string[];
  href?: string; // live link
  linkLabel?: string; // button text for the live link
  repo?: string; // source code link
  featured?: boolean;
  category?: string;
  tagline?: string; // one short line under the title
  role?: string;
  built?: string; // "My part" box
  period?: string;
  status?: string;
  access?: string;
  highlights?: string[]; // short feature list
  stack?: { area: string; items: string[] }[]; // tech grouped by area
  howItWorks?: { title: string; text: string }[]; // numbered steps
  factors?: {
    title: string;
    intro: string;
    items: { label: string; note: string }[];
    footnote?: string;
  };
  frontend?: string[]; // frontend work
  qa?: string[]; // QA and testing work
  builtWith?: string[]; // used to count tools on the Skills section
  screenshots?: Screenshot[];
};

export type TimelineItem = {
  period: string;
  title: string;
  note: string;
  link?: string;
};

export const profile = {
  name: "John Raizel Bacang",
  role: "IT student and frontend developer focused on UI/UX",
  bio: "I'm an IT student at Bulacan State University who enjoys building intuitive learning websites. Outside of code I'm into space science and cooking. Right now I'm learning Next.js and Tailwind CSS by building this site.",
  location: "San Jose del Monte, Bulacan, Philippines",
  email: "johnraizelbacang@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/sin-raixel" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-raizel-bacang-627875394" },
    { label: "Facebook", href: "https://www.facebook.com/raixeru" },
    { label: "Instagram", href: "https://www.instagram.com/rai.is.zel" },
    { label: "Resume (PDF)", href: "/resume.pdf" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About me", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type SkillGroup = { group: string; items: string[] };

export type Screenshot = { src: string; alt: string };

export const projects: Project[] = [
  {
    slug: "cict-ppmp",
    title: "CICT-PPMP",
    featured: true,
    category: "Web application · College department",
    tagline: "Procurement planning and budget balancing for the CICT department.",
    description:
      "A web-based management system with machine learning analysis for optimized resource reallocation. It helps the CICT department at Bulacan State University manage its Project Procurement Management Plan (PPMP).",
    tags: ["TypeScript", "React", "Python", "Django", "scikit-learn", "Supabase", "Vercel", "Render"],
    role: "QA and documentation · Group project",
    built:
      "Quality assurance and documentation: black-box and manual test cases tracked in Excel, and the system's capstone manuscript.",
    access:
      "The landing page is public. The system itself is limited to the department's procurement staff and the Dean.",
    highlights: [
      "Dashboard and procurement monitoring",
      "PPMP spreadsheet upload and master list",
      "In-Lieu Reallocation with Dean approval",
      "AI-powered budget balancing",
      "Purchase request generation",
      "Supplemental PPMP",
    ],
    stack: [
      { area: "Frontend", items: ["React", "TypeScript"] },
      { area: "Backend and data", items: ["Django", "Python", "Supabase"] },
      { area: "Machine learning", items: ["scikit-learn", "Knapsack algorithm"] },
      { area: "Hosting", items: ["Vercel", "Render"] },
    ],
    howItWorks: [
      {
        title: "Upload the plan",
        text: "Procurement staff upload the department's PPMP spreadsheet, and the PPMP Master List keeps every planned item in one place.",
      },
      {
        title: "Monitor procurement",
        text: "The Dashboard and Procurement Monitoring show where the items and the overall budget stand.",
      },
      {
        title: "Balance the budget",
        text: "For In-Lieu Reallocation, a machine learning model scores items using past years of data, then the knapsack algorithm finds the combination with the lowest total price that fits the target budget.",
      },
      {
        title: "Dean approves",
        text: "The Dean reviews reallocations in In-Lieu Approval before they go ahead, and also manages users.",
      },
      {
        title: "Generate the paperwork",
        text: "The system generates Purchase Requests, and Supplemental PPMP covers items added to the plan later.",
      },
    ],
    factors: {
      title: "AI decision factors",
      intro:
        "What the bulk budget balancing tool looks at, learned from the department's historical data. How much each factor counts changes as new data comes in.",
      items: [
        { label: "Available quantity", note: "How many of each item were left unused in the past" },
        { label: "Planned quantity", note: "How many of each item were planned in the past" },
        { label: "Item category", note: "How each category of items was used in the past" },
        { label: "Price per unit", note: "How price per unit related to past use" },
        { label: "Utilized quantity", note: "How many of each item were actually used in the past" },
      ],
      footnote: "Then the knapsack algorithm finds the lowest possible price of the combined items for the target budget.",
    },
    qa: [
      "Black-box test cases written for the system",
      "Manual test cases recorded in an Excel spreadsheet",
      "Wrote the system's capstone manuscript, the project documentation",
    ],
    screenshots: [
      { src: "/projects/titleHeader.png", alt: "CICT-PPMP landing page, top section" },
      { src: "/projects/systemFeatures.png", alt: "CICT-PPMP landing page, features" },
      { src: "/projects/userLevels.png", alt: "CICT-PPMP landing page, footer" },
    ],
    href: "https://cict-ppmp.vercel.app/",
    linkLabel: "Visit landing page",
  },
  {
    slug: "quizmos",
    title: "Quizmos",
    featured: true,
    category: "Web application · Study tool",
    tagline: "Turn your notes into a study reviewer.",
    description:
      "Upload a PDF, Word, PowerPoint, or text file and get a quiz and flashcards, generated right in your browser, with optional AI for smarter questions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vitest"],
    role: "Personal project · Frontend development and testing",
    built:
      "The full interface, from upload to quiz, flashcards, history, and export, plus the unit tests and CI that keep it working.",
    status: "Live at project-quizmos.vercel.app",
    access: "Free to use. Your files are read on your device and only leave it if you turn on AI mode.",
    highlights: [
      "Reads PDF, Word, PowerPoint, and text files",
      "Quiz with scoring and keyboard shortcuts",
      "Flashcards that flip in 3D",
      "Export to PDF, Anki, and Quizlet",
    ],
    stack: [
      { area: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { area: "Reading files", items: ["pdf.js", "mammoth", "JSZip"] },
      { area: "Testing", items: ["Vitest", "GitHub Actions"] },
      { area: "Optional AI", items: ["Gemini API"] },
    ],
    howItWorks: [
      {
        title: "Add your notes",
        text: "Drop a PDF, Word, PowerPoint, or text file, or paste your notes. Files are read on your device, so nothing is uploaded.",
      },
      {
        title: "Find the key terms",
        text: "The app looks for lines shaped like \"X is ...\" or \"Term: meaning\" and filters out headings, formulas, bullet lists, and cut-off lines.",
      },
      {
        title: "Build the questions",
        text: "Definitions become multiple choice, with wrong answers taken from the same notes so the choices look like they belong together. Optional AI mode adds true or false and select-all questions, and falls back to the free method if a request fails.",
      },
      {
        title: "Study it",
        text: "Take the quiz with scoring and keyboard shortcuts, flip through flashcards, or remove questions that came out wrong in edit mode.",
      },
      {
        title: "Save or export",
        text: "Every reviewer is saved in your browser history. Print a PDF with an answer key, or download the flashcards for Anki or Quizlet.",
      },
    ],
    frontend: [
      "Upload card with drag and drop, file type badges, and a notes box",
      "Quiz screen with progress, scoring, A, B, C keyboard shortcuts, and a results screen that retries missed questions",
      "Flashcards that flip in 3D, with shuffle and arrow-key navigation",
      "Edit mode, saved reviewer history, and an export menu",
      "Space theme with a CSS starfield, cursor parallax, and a cursor-following light on hover",
    ],
    qa: [
      "Unit tests with Vitest for question generation, checking AI answers, enumeration grading, backup validation, and Anki and Quizlet export",
      "GitHub Actions runs lint, the tests, and a full build on every push and pull request",
      "Known limits written down: scanned PDFs need OCR, and history lives in the browser",
    ],
    screenshots: [
      { src: "/projects/quizmos-home.png", alt: "Quizmos home screen with the file upload box and saved reviewers" },
      { src: "/projects/quizmos-upload.png", alt: "Quizmos with a PDF added and a reviewer ready to make" },
      { src: "/projects/quizmos-quiz.png", alt: "Quizmos quiz showing a multiple-choice question" },
      { src: "/projects/quizmos-flashcards.png", alt: "Quizmos flashcards mode" },
    ],
    href: "https://project-quizmos.vercel.app",
    linkLabel: "Try Quizmos",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
  },
  {
    slug: "starboard",
    title: "Starboard",
    featured: true,
    category: "Web application · Data dashboard",
    tagline: "NASA pictures, asteroids, a live ISS tracker, and tonight's sky.",
    description:
      "A space dashboard with four pages: the NASA astronomy picture of the day, near-Earth asteroids you can filter and sort, a live map of the International Space Station, and the constellations above you at the time you pick.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Leaflet", "Vitest"],
    role: "Personal project · Frontend development and testing",
    built:
      "The space-themed interface for all four pages, including the charts, the live map, and the sky chart, plus the unit tests behind the data handling.",
    access: "Free to use. The data comes from NASA and a public ISS feed.",
    highlights: [
      "Picture of the day with the last seven days",
      "Asteroids with filters, sorting, and charts",
      "Live ISS map with its orbit and trail",
      "Sky chart for your place and time",
    ],
    stack: [
      { area: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { area: "Charts and maps", items: ["Recharts", "Leaflet"] },
      { area: "Data", items: ["NASA APIs", "Public ISS feed"] },
      { area: "Testing", items: ["Vitest"] },
    ],
    howItWorks: [
      {
        title: "Get the data",
        text: "The server asks NASA for the week's pictures and the next seven days of near-Earth asteroids, and a public feed for the ISS. Good results are cached for hours, so visitors don't each trigger a new request.",
      },
      {
        title: "Handle failures",
        text: "Every request has a timeout and retries with a growing delay. If a feed is down or busy, the page shows a clear message instead of breaking.",
      },
      {
        title: "Browse the pictures and asteroids",
        text: "Picture of the day opens any of the last seven days. Asteroids can be filtered by size and hazard and sorted by date, distance, size, or speed, with charts alongside.",
      },
      {
        title: "Track the ISS live",
        text: "The ISS page asks for its position every few seconds, slows down if the feed gets busy, and draws the orbit and live trail on a map that handles the 180 degree line.",
      },
      {
        title: "Find the sky tonight",
        text: "In the browser, the app works out which constellations are above you from your location and the time you choose, then draws the chart and the list.",
      },
    ],
    frontend: [
      "Space theme with a purple color motif, Orbitron and Exo 2 fonts, glowing cards, and hover effects",
      "Four pages sharing one navigation and page layout",
      "Loading skeletons while NASA data arrives, and clear error messages when a feed fails",
      "Interactive ISS map with a follow toggle and a live trail",
      "Asteroid charts, filters, and sorting that are kept in the page address",
      "Sky chart with a time picker and a choice of device location or typed coordinates",
    ],
    qa: [
      "Unit tests with Vitest across ten test files: request retries, feed parsing, asteroid filters, ISS map geometry, and sky calculations",
      "Tests for bad data and edge cases, like the ISS crossing the 180 degree line",
    ],
    screenshots: [
      { src: "/projects/starboard-apod.webp", alt: "Picture of the day, an Apollo 12 photo with its description" },
      { src: "/projects/starboard-week.webp", alt: "The past week of pictures, ready to open" },
      { src: "/projects/starboard-asteroids.webp", alt: "Near-Earth asteroids with summary cards and filters" },
      { src: "/projects/starboard-asteroid-charts.webp", alt: "Asteroid charts: close approaches per day and size against miss distance" },
      { src: "/projects/starboard-iss-map.webp", alt: "Live ISS map with its orbit and current position" },
      { src: "/projects/starboard-iss-stats.webp", alt: "ISS position details: latitude, longitude, altitude, and speed" },
      { src: "/projects/starboard-sky.webp", alt: "Sky tonight with the time picker and summary cards" },
      { src: "/projects/starboard-sky-chart.webp", alt: "Sky chart and the list of constellations above the horizon" },
    ],
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git", "GitHub"],
  },
  {
    slug: "my-portfolio",
    title: "This portfolio",
    category: "Personal website · Portfolio",
    tagline: "The site you are looking at.",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. The source code is public.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Personal project · Frontend development",
    built: "The design and code for every section, from the Home summary to the side navigation.",
    highlights: [
      "Four sections with a Home summary",
      "Side dots that adapt to the section",
      "Starfield cursor trail and hover glow",
      "GitHub activity drawn as stars",
    ],
    stack: [
      { area: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { area: "Tools and hosting", items: ["Git", "GitHub", "Vercel"] },
    ],
    frontend: [
      "Responsive layout from phone to desktop",
      "Section-aware side navigation with hover labels",
      "Scroll reveal and cursor effects that respect reduced-motion settings",
    ],
    repo: "https://github.com/sin-raixel/my-portfolio",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git", "GitHub"],
  },
];

  export type About = {
    paragraphs: string[];
    away: string;
    atKeyboard: string;
    currently: { label: string; value: string }[];
  };
  export const about: About = {
    paragraphs: [
      "I'm an IT student at Bulacan State University, and I want to build interactive learning tools, starting with reviewers that quiz you instead of just handing you notes.",
      "I took the Cookery and Bakery strand in Grade 9 and 10, and I still cook at home: sinigang, adobo, kare-kare, afritada, menudo, and curry. I also follow astronomy, cosmology, biology, and earth science. Cooking taught me to follow a process and adjust when it goes wrong, and science keeps me curious about how things work.",
    ],
    away: "Home cooking, astronomy, cosmology, biology, and earth science.",
    atKeyboard: "Interactive learning tools and web apps with clear interfaces.",
    currently: [
      { label: "Learning", value: "Next.js and Tailwind CSS" },
      { label: "Building", value: "This portfolio, then an interactive reviewer app" },
      { label: "Looking for", value: "An internship" },
    ],
  };

export const education: TimelineItem[] = [
  {
    period: "Currently studying",
    title: "BS in Information Technology",
    note: "Bulacan State University",
  },
];

export const certifications: TimelineItem[] = [
  {
    period: "2026",
    title: "Cybersecurity Certificate of Completion",
    note: "ADBI E-Learning",
  },
  {
    period: "2025",
    title: "Network Support and Security",
    note: "Cisco Networking Academy",
  },
  {
    period: "2025",
    title: "Networking Devices and Initial Configuration",
    note: "Cisco Networking Academy",
  },
    {
    period: "2025",
    title: "Cisco Networking Basics",
    note: "Cisco Networking Academy",
    },
  {
    period: "2025",
    title: "Salesforce Agentblazer",
    note: "Salesforce",
    link: "/certificates/Agentblazer Certificate.pdf"
  },
];

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "PHP", "SQL"] },
  { group: "Frameworks", items: ["React", "Node.js", "Django"] },
  { group: "Databases", items: ["MySQL", "Supabase"] },
  { group: "Networking", items: ["Cisco networking basics", "Device configuration", "Network security"] },
  { group: "Learning", items: ["Next.js", "Tailwind CSS"] },
  { group: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "Canva", "ChatGPT", "Claude"] },
  { group: "Practices", items: ["Quality assurance", "Software testing", "Technical documentation"] },
];

export const hero = {
  lines: ["I design", "& build web", "interfaces."], // the middle line is highlighted; the last one gets the underline
  intro: {
    before:
      "I'm an IT student at Bulacan State University focused on frontend development and UI/UX. I built ",
    highlight: "Quizmos",
    href: "/projects#project-quizmos",
    after:
      ", a study tool that turns notes into quizzes and flashcards, and I'm looking for an internship where I can ship real interfaces.",
  },
  coreStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"], // names from your Skills list
  badge: "Frontend · UI/UX · QA · Open to internships", // text that circles the badge on your photo
  resume: "/resume.pdf",
  photo: "/portpic.jpg", // e.g. "/me.jpg" after adding the file to the public folder
};
// Used for SEO and social previews (see layout.tsx, opengraph-image.tsx, sitemap.ts).
export const site = {
  url: "https://johnraizel.vercel.app",
  title: "John Raizel Bacang | Frontend developer and UI/UX",
  description:
    "Portfolio of John Raizel Bacang, an IT student focused on frontend development and UI/UX, building web interfaces with React, Next.js, and TypeScript. Open to internships.",
  keywords: [
    "John Raizel Bacang",
    "frontend developer",
    "UI/UX",
    "web developer portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Bulacan State University",
    "Philippines",
    "internship",
  ],
};

// Used by the GitHub activity section.
export const github = { username: "sin-raixel" };
