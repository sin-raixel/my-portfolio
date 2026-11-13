"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useActiveSection } from "./use-active-section";

export type Dot = { href: string; label: string };

const POP_MS = 2200;

// A numbered pill on the right edge (00, 01, 02...). Hover or focus it and it opens
// into a list with the section names. It also pops open for a moment whenever you
// reach a new section. Each page passes its own list, so it always matches the page:
// links to the other pages on Home, and links to the parts of the page everywhere else.
// A "#" link follows your scroll position; a page link is active when you are on it.
// Only shown on wide screens, where it fits beside the content; phones use the menu.
export default function SectionDots({ caption, dots }: { caption: string; dots: Dot[] }) {
  const pathname = usePathname();
  const ids = dots.filter((dot) => dot.href.startsWith("#")).map((dot) => dot.href.slice(1));
  const scrolled = useActiveSection(ids);

  const activeHref = ids.length > 0 ? `#${scrolled}` : pathname;
  const current = dots.some((dot) => dot.href === activeHref) ? activeHref : dots[0].href;

  // Open the list for a moment each time the current section changes (not on first load).
  const [seen, setSeen] = useState(current);
  const [popped, setPopped] = useState(false);
  if (seen !== current) {
    setSeen(current);
    setPopped(true);
  }
  useEffect(() => {
    if (!popped) return;
    const timer = setTimeout(() => setPopped(false), POP_MS);
    return () => clearTimeout(timer);
  }, [popped, seen]);

  if (dots.length < 2) return null;

  return (
    <nav
      aria-label={`${caption} navigation`}
      className="group/nav fixed top-1/2 right-2 z-10 hidden -translate-y-1/2 flex-col items-stretch gap-1 rounded-3xl glow border border-line bg-surface/85 p-1.5 shadow-lg shadow-black/40 backdrop-blur xl:flex"
    >
      {dots.map((dot, index) => {
        const isActive = current === dot.href;
        return (
          <Link
            key={dot.href}
            href={dot.href}
            aria-current={isActive ? (dot.href.startsWith("#") ? "location" : "page") : undefined}
            className={`flex items-center justify-end rounded-full px-2 py-1.5 transition-colors duration-300 motion-reduce:transition-none ${
              isActive
                ? "bg-accent/20 text-accent shadow-[0_0_14px_rgb(167_139_250/0.3)]"
                : "text-body/70 hover:text-bright focus-visible:text-bright"
            }`}
          >
            <span
              className={`overflow-hidden text-sm font-medium whitespace-nowrap transition-all duration-300 motion-reduce:transition-none ${
                popped
                  ? "mr-3 max-w-64 opacity-100"
                  : "mr-0 max-w-0 opacity-0 group-focus-within/nav:mr-3 group-focus-within/nav:max-w-64 group-focus-within/nav:opacity-100 group-hover/nav:mr-3 group-hover/nav:max-w-64 group-hover/nav:opacity-100"
              }`}
            >
              {dot.label}
            </span>
            <span aria-hidden="true" className="w-6 text-center text-xs font-semibold tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
