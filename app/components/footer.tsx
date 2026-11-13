import { LuArrowUp } from "react-icons/lu";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p>&copy; 2026 {profile.name}</p>
        <p>Built with Next.js and Tailwind CSS</p>
        <a href="#top" className="group flex items-center gap-2 text-accent transition-colors hover:text-bright">
          Back to top
          <LuArrowUp aria-hidden="true" className="size-4 transition-transform motion-safe:group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}