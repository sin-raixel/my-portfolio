export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string; // live link
  linkLabel?: string; // button text for the link
  repo?: string; // source code link
  featured?: boolean;
  category?: string;
  role?: string;
  built?: string;
  access?: string;
  builtWith?: string[];
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
    { label: "Resume (PDF)", href: "/resume.pdf" },
    { label: "Instagram", href: "https://www.instagram.com/rai.is.zel" },
    { label: "Facebook", href: "https://www.facebook.com/raixeru" },
  ],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = { group: string; items: string[] };

export type Screenshot = { src: string; alt: string };

export const projects: Project[] = [
  {
    title: "CICT-PPMP",
    featured: true,
    category: "Web application · College department",
    description:
      "A web-based management system with machine learning analysis for optimized resource reallocation, built for my college department.",
    tags: ["TypeScript", "React", "Python", "Django", "scikit-learn", "Supabase", "Vercel", "Render"],
    role: "QA and documentation · Group project",
    built: "Quality assurance and project documentation for the system.",
    screenshots: [
      { src: "/projects/titleHeader.png", alt: "CICT-PPMP landing page, top section" },
      { src: "/projects/systemFeatures.png", alt: "CICT-PPMP landing page, features" },
      { src: "/projects/userLevels.png", alt: "CICT-PPMP landing page, footer" },
    ],
    href: "https://cict-ppmp.vercel.app/",
    linkLabel: "Visit landing page",
    access: "The landing page is public. The system itself is limited to department administrators.",
  },
  {
    title: "Quizmos",
    featured: true,
    category: "Web application · Study tool",
    description:
      "Turns your notes into a study reviewer. Upload a PDF, Word, PowerPoint, or text file and get a quiz and flashcards, generated right in your browser, with optional AI for smarter questions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vitest"],
    role: "Personal project · Design, development, and testing",
    built:
      "File reading in the browser, a question generator, quiz and flashcard modes, PDF, Anki, and Quizlet export, saved history, and an optional Gemini AI mode with an access code and daily limits. It has unit tests and a GitHub Actions pipeline.",
    access: "Free to use. Your files are read on your device and only leave it if you turn on AI mode.",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
    href: "https://project-quizmos.vercel.app",
    linkLabel: "Try Quizmos",
    screenshots: [
      { src: "/projects/quizmos-home.png", alt: "Quizmos home screen with the file upload box and saved reviewers" },
      { src: "/projects/quizmos-upload.png", alt: "Quizmos with a PDF added and a reviewer ready to make" },
      { src: "/projects/quizmos-quiz.png", alt: "Quizmos quiz showing a multiple-choice question" },
      { src: "/projects/quizmos-flashcards.png", alt: "Quizmos flashcards mode" },
    ],
  },
  {
    title: "This portfolio",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. The source code is public.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/sin-raixel/my-portfolio",
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
