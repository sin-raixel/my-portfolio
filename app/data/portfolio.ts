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
    title: "CICT-PPMP: A Web-Based Management System with Machine Learning Analysis for Optimized Resource Reallocation",
    description:
      "Search any city and see a 5-day forecast with charts. Built with a public weather API and cached responses.",
    tags: ["React", "Vite", "Chart.js"],
    href: "https://github.com/sin-raixel/weather-dashboard",
  },
  {
    title: "Budget Tracker",
    description:
      "Track income and expenses by category, with monthly summaries saved to local storage.",
    tags: ["TypeScript", "Tailwind CSS"],
    href: "https://github.com/sin-raixel/budget-tracker",
  },
  {
    title: "Recipe Finder",
    description:
      "Filter recipes by the ingredients you already have. Responsive layout, keyboard friendly.",
    tags: ["Next.js", "REST API"],
    href: "https://github.com/sin-raixel/recipe-finder",
  },
];

export const experience = [
  { period: "2025 – Present", title: "Freelance web developer", note: "Small business sites and landing pages." },
  { period: "2024 – 2025", title: "Student projects", note: "Group projects in web development and databases." },
];

export const skills = [
  { group: "Languages", items: "HTML, CSS, JavaScript, TypeScript" },
  { group: "Frameworks", items: "React, Next.js, Tailwind CSS" },
  { group: "Tools", items: "Git, GitHub, Vercel, VS Code" },
];