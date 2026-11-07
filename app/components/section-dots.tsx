"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    // The section crossing the middle of the screen counts as active.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-4 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-surface/80 p-1 backdrop-blur xl:block"
    >
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              title={item.label}
              aria-label={item.label}
              aria-current={active === item.id ? "true" : undefined}
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