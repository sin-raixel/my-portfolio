import { LuDownload } from "react-icons/lu";
import { hero, nav, profile } from "../data/portfolio";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function Navbar() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  const links = [{ label: "Home", href: "#home" }, ...nav];

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3 font-semibold text-bright">
          <span className="grid size-9 place-items-center rounded-full bg-accent-strong text-sm text-white transition-transform duration-300 motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-110">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <NavLinks links={links} />

        <div className="flex items-center gap-3">
          <a
            href={hero.resume}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent hover:text-ink motion-safe:hover:-translate-y-0.5"
          >
            <LuDownload aria-hidden="true" className="size-4 transition-transform motion-safe:group-hover:translate-y-0.5" />
            Resume
          </a>

          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
