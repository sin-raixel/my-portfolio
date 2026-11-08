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
  ],
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Quiz", href: "#quiz" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = { group: string; items: string[] };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // index of the correct option
  explanation: string;
};
export type QuizTopic = {
  id: string;
  label: string;
  emoji: string;
  questions: QuizQuestion[];
};
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

// Edit these freely. `answer` is the position of the correct option, starting at 0.
export const quiz: QuizTopic[] = [
  {
    id: "space",
    label: "Space",
    emoji: "🔭",
    questions: [
      {
        question: "About how long does sunlight take to reach Earth?",
        options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
        answer: 1,
        explanation:
          "The Sun is about 150 million km away, and light covers that in roughly 8 minutes and 20 seconds. The Sun you see is always a few minutes in the past.",
      },
      {
        question: "Which planet has the shortest day?",
        options: ["Mercury", "Earth", "Mars", "Jupiter"],
        answer: 3,
        explanation:
          "Jupiter spins once in just under 10 hours, even though it is more than 11 times wider than Earth. That fast spin flattens its poles slightly.",
      },
      {
        question: "A light-year is a unit of what?",
        options: ["Time", "Distance", "Brightness", "Speed"],
        answer: 1,
        explanation:
          "It is the distance light travels in one year, about 9.5 trillion km. The name is misleading because it sounds like a measure of time.",
      },
      {
        question: "Why do we always see the same side of the Moon?",
        options: [
          "The Moon does not rotate at all",
          "The far side is always dark",
          "The Moon spins exactly once per orbit",
          "Earth's gravity hides the far side",
        ],
        answer: 2,
        explanation:
          "Tidal locking made the Moon's spin match its orbit. It does rotate, and the far side gets just as much sunlight as the near side. We simply never see it from Earth.",
      },
      {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
        answer: 3,
        explanation:
          "Hydrogen makes up roughly three quarters of all normal matter. Helium is second, and everything else, including us, is a small fraction.",
      },
    ],
  },
  {
    id: "cooking",
    label: "Cooking",
    emoji: "🍲",
    questions: [
      {
        question: "What traditionally gives sinigang its sour taste?",
        options: ["Cane vinegar", "Tamarind (sampalok)", "Coconut milk", "Fish sauce"],
        answer: 1,
        explanation:
          "Sampalok is the classic souring agent. Cooks also use calamansi, kamias, or green guava, depending on the region and the dish.",
      },
      {
        question: "Which ingredient gives kare-kare its thick, nutty sauce?",
        options: ["Ground peanuts", "Coconut cream", "Cornstarch", "Cheese"],
        answer: 0,
        explanation:
          "Ground peanuts, often with toasted ground rice, make the sauce thick and rich. It is usually served with bagoong on the side.",
      },
      {
        question: "Adobo is built on which pair of ingredients?",
        options: [
          "Coconut milk and chili",
          "Tomato and cheese",
          "Fish sauce and lemon",
          "Vinegar and soy sauce",
        ],
        answer: 3,
        explanation:
          "Vinegar and soy sauce, with garlic, bay leaves, and peppercorns. The vinegar also helps preserve the meat, which is how the dish started.",
      },
      {
        question: "What gas does yeast produce that makes bread dough rise?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Steam"],
        answer: 1,
        explanation:
          "Yeast eats the sugars in dough and gives off carbon dioxide. The gluten network traps the bubbles, so the dough stretches and rises.",
      },
      {
        question: "What causes the browning and deep flavor when you sear meat?",
        options: ["Fermentation", "Pasteurization", "The Maillard reaction", "Emulsification"],
        answer: 2,
        explanation:
          "In the Maillard reaction, amino acids and sugars react at high heat and form hundreds of new flavor compounds. It works best on a dry surface, so pat meat dry first.",
      },
    ],
  },
];

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
