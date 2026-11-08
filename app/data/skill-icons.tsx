import type { IconType } from "react-icons/lib";
import { FaJava } from "react-icons/fa";
import { LuBug, LuCheck, LuDatabase, LuFileText, LuShield, LuTerminal } from "react-icons/lu";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiCisco,
  SiClaude,
  SiCss,
  SiDjango,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// react-icons has no Canva logo, so this is a simple Canva-style mark.
const CanvaIcon: IconType = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none">
    <defs>
      <linearGradient id="canva-fill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00c4cc" />
        <stop offset="100%" stopColor="#7d2ae8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#canva-fill)" />
    <path d="M16.5 8.2A5.2 5.2 0 1 0 16.5 15.8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const bright = "#f4f1ff"; // for logos that are black or white in real life
const generic = "#a78bfa"; // for skills that have no brand logo

// Keys must match the tool names in `skills` (data/portfolio.ts) exactly.
export const skillIcons: Record<string, { icon: IconType; color?: string }> = {
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#2965f1" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  Java: { icon: FaJava, color: "#ed8b00" },
  Python: { icon: SiPython, color: "#4b8bbe" },
  PHP: { icon: SiPhp, color: "#777bb4" },
  SQL: { icon: LuDatabase, color: generic },
  React: { icon: SiReact, color: "#61dafb" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  Django: { icon: SiDjango, color: "#44b78b" },
  MySQL: { icon: SiMysql, color: "#4f9bc9" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  "Cisco networking basics": { icon: SiCisco, color: "#1ba0d7" },
  "Device configuration": { icon: LuTerminal, color: generic },
  "Network security": { icon: LuShield, color: generic },
  "Next.js": { icon: SiNextdotjs, color: bright },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: bright },
  Vercel: { icon: SiVercel, color: bright },
  "VS Code": { icon: VscVscode, color: "#3b9ce8" },
  Figma: { icon: SiFigma, color: "#f24e1e" },
  Canva: { icon: CanvaIcon },
  ChatGPT: { icon: RiOpenaiFill, color: "#10a37f" },
  Claude: { icon: SiClaude, color: "#d97757" },
  "Quality assurance": { icon: LuCheck, color: generic },
  "Software testing": { icon: LuBug, color: generic },
  "Technical documentation": { icon: LuFileText, color: generic },
};
