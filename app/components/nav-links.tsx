"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { label: string; href: string };

// True when the link points at the page you are on.
export function isCurrentPage(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

// Desktop navigation. Highlights the link for the page you are on.
export default function NavLinks({ links }: { links: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex gap-8 text-sm font-medium">
        {links.map((item) => {
          const isActive = isCurrentPage(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 hover:[text-shadow:0_0_14px_rgb(167_139_250/0.8)] ${
                  isActive
                    ? "text-accent [text-shadow:0_0_14px_rgb(167_139_250/0.6)] after:scale-x-100"
                    : "after:scale-x-0"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
