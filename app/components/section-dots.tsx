"use client";

import { nav } from "../data/portfolio";
import { useActiveSection } from "./use-active-section";

// Built from the same `nav` data as the navbar, so the two never drift apart.
const items = [
  { id: "home", label: "Home" },
  ...nav.map((item) => ({ id: item.href.slice(1), label: item.label })),
];

export default function SectionDots() {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-4 z-10 hidden -translate-y-1/2 rounded-full glow border border-line bg-surface/80 p-1 backdrop-blur xl:block"
    >
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              title={item.label}
              aria-label={item.label}
              aria-current={active === item.id ? "location" : undefined}
              className={`grid size-8 place-items-center rounded-full text-xs font-semibold transition-colors ${
                active === item.id ? "bg-accent-strong text-white" : "hover:text-accent"
              }`}
            >
              {String(index).padStart(2, "0")}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
