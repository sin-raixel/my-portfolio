export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string; // live link
  repo?: string; // source code link
  featured?: boolean;
  category?: string;
  role?: string;
  built?: string;
  access?: string;
  builtWith?: string[];
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
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = { group: string; items: string[] };

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
    access: "Private. Limited to department administrators, so there is no public demo.",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git", "GitHub"],
  },
  {
    title: "This portfolio",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. The source code is public.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/sin-raixel/my-portfolio",
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
    link: "/certificates/cisco-networking-basics.png",
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
  { group: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code"] },
  { group: "Practices", items: ["Quality assurance", "Software testing", "Technical documentation"] },
];

export const hero = {
  lines: ["I build", "web apps", "end to end."], // the middle line is highlighted
  intro:
    "IT student at Bulacan State University, turning ideas into intuitive learning websites. Currently looking for an internship where I can ship real features.",
  resume: "/resume.pdf",
  photo: "", // e.g. "/me.jpg" after adding the file to the public folder
};