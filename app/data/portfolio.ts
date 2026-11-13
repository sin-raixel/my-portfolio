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
  role: "IT student and full-stack developer",
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
  lines: ["I build", "web apps", "end to end."], // the middle line is highlighted
  intro:
    "IT student at Bulacan State University, turning ideas into intuitive learning websites. Currently looking for an internship where I can ship real features.",
  resume: "/resume.pdf",
  photo: "/portpic.jpg", // e.g. "/me.jpg" after adding the file to the public folder
};
// Used for SEO and social previews (see layout.tsx, opengraph-image.tsx, sitemap.ts).
export const site = {
  url: "https://johnraizel.vercel.app",
  title: "John Raizel Bacang | Full-stack developer",
  description:
    "Portfolio of John Raizel Bacang, an IT student and full-stack developer building web apps with React, Next.js, and TypeScript. Open to internships.",
  keywords: [
    "John Raizel Bacang",
    "full-stack developer",
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
