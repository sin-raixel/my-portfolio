"use client";

import { nav } from "../data/portfolio";
import { useActiveSection } from "./use-active-section";

// Built from the same `nav` data as the navbar, so the two never drift apart.
const items = nav.map((item) => ({ id: item.href.slice(1), label: item.label }));

// Floating dots on the right edge. Click one to jump to that section; hover
// (or keyboard focus) shows its name. Hidden on phones, where the menu is used.
export default function SectionDots() {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-1 z-10 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col gap-3">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="group relative">
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? "location" : undefined}
                className="grid size-5 place-items-center rounded-full"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "size-3.5 bg-accent shadow-[0_0_12px_rgb(167_139_250/0.9)]"
                      : "size-2.5 bg-line ring-1 ring-accent/50 group-hover:bg-accent group-hover:ring-accent group-focus-within:bg-accent motion-safe:group-hover:scale-125"
                  }`}
                />
              </a>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 translate-x-2 rounded-full glow border border-line bg-surface px-3 py-1.5 text-xs font-medium whitespace-nowrap text-bright opacity-0 shadow-lg shadow-black/40 transition-all duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
