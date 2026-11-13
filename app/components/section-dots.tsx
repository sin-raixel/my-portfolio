"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "./use-active-section";

export type Dot = { href: string; label: string };

// Floating dots on the right edge. Each page passes its own list, so the dots always
// match what is on the page: links to the other pages on Home, and links to the parts
// of the page (each project, Skills, Education...) everywhere else. A "#" link follows
// your scroll position; a page link is active when you are on that page. Hover or
// keyboard focus shows the name. Hidden on phones, which use the menu instead.
export default function SectionDots({ caption, dots }: { caption: string; dots: Dot[] }) {
  const pathname = usePathname();
  const ids = dots.filter((dot) => dot.href.startsWith("#")).map((dot) => dot.href.slice(1));
  const scrolled = useActiveSection(ids);

  if (dots.length < 2) return null;

  const activeHref = ids.length > 0 ? `#${scrolled}` : pathname;
  const current = dots.some((dot) => dot.href === activeHref) ? activeHref : dots[0].href;

  return (
    <nav
      aria-label={`${caption} navigation`}
      className="fixed top-1/2 right-1 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
    >
      <p
        aria-hidden="true"
        className="dots-in rotate-180 text-[10px] font-semibold tracking-widest text-accent/70 uppercase [writing-mode:vertical-rl]"
      >
        {caption}
      </p>

      <ul className="dots-in flex flex-col gap-3">
        {dots.map((dot) => {
          const isActive = current === dot.href;
          return (
            <li key={dot.href} className="group relative">
              <Link
                href={dot.href}
                aria-label={dot.label}
                aria-current={isActive ? (dot.href.startsWith("#") ? "location" : "page") : undefined}
                className="grid size-5 place-items-center rounded-full"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "size-3.5 bg-accent shadow-[0_0_12px_rgb(167_139_250/0.9)]"
                      : "size-2.5 bg-line ring-1 ring-accent/50 group-hover:bg-accent group-hover:ring-accent group-focus-within:bg-accent motion-safe:group-hover:scale-125"
                  }`}
                />
              </Link>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 translate-x-2 rounded-full glow border border-line bg-surface px-3 py-1.5 text-xs font-medium whitespace-nowrap text-bright opacity-0 shadow-lg shadow-black/40 transition-all duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
              >
                {dot.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
