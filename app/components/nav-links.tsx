"use client";

import { useActiveSection } from "./use-active-section";

export type NavItem = { label: string; href: string };

// Desktop navigation. Highlights the link for the section you're reading.
export default function NavLinks({ links }: { links: NavItem[] }) {
  const active = useActiveSection(links.map((item) => item.href.slice(1)));

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex gap-8 text-sm font-medium">
        {links.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 hover:[text-shadow:0_0_14px_rgb(167_139_250/0.8)] ${
                  isActive
                    ? "text-accent [text-shadow:0_0_14px_rgb(167_139_250/0.6)] after:scale-x-100"
                    : "after:scale-x-0"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
