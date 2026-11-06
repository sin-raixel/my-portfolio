// All your content lives here. Edit this file, not the components.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  note: string;
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
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "CICT-PPMP",
    description:
      "A web-based management system with machine learning analysis for optimized resource reallocation. Group project where I handled quality assurance and project documentation.",
    tags: ["TypeScript", "React", "Python", "Django", "scikit-learn", "Supabase", "Vercel", "Render"],
    href: "https://cict-ppmp.vercel.app/",
  },
  {
    title: "This portfolio",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. The source code is public.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/sin-raixel/my-portfolio",
  },
];

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
  },
];

export const skills = [
  { group: "Languages", items: "HTML, CSS, JavaScript, TypeScript, Java, Python, PHP, SQL" },
  { group: "Frameworks", items: "React, Node.js, Django" },
  { group: "Databases", items: "MySQL, Supabase" },
  { group: "Networking", items: "Cisco networking basics, device configuration, network security" },
  { group: "Learning", items: "Next.js, Tailwind CSS" },
  { group: "Tools", items: "Git, GitHub, Vercel, VS Code" },
  { group: "Practices", items: "Quality assurance, software testing, technical documentation" },
];