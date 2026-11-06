// All your content lives here. Edit this file, not the components.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const profile = {
  name: "John Raizel Bacang",
  role: "Full-Stack developer",
  bio: "I build fast, accessible interfaces with React and TypeScript. Currently learning Next.js and Tailwind by building this site.",
  email: "johnraizelbacang@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/sin-raixel" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-raizel-bacang-627875394" },
    { label: "Resume (PDF)", href: "/resume.pdf" }, 
  ],
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "This portfolio",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel. The source code is public.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/sin-raixel/my-portfolio",
  },
];
export const experience = [
  { period: "2026 – Present", title: "Freelance web developer", note: "Small business sites and landing pages." },
  { period: "2024 – 2025", title: "Student projects", note: "Group projects in web development and databases." },
];

export const skills = [
  { group: "Languages", items: "HTML, CSS, JavaScript, TypeScript" },
  { group: "Frameworks", items: "React, Next.js, Tailwind CSS" },
  { group: "Tools", items: "Git, GitHub, Vercel, VS Code" },
];