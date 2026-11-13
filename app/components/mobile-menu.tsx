"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { isCurrentPage, type NavItem } from "./nav-links";

// Mobile navigation. Closes when you pick a link, press Escape, or tap outside.
export default function MobileMenu({ links }: { links: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 cursor-pointer place-items-center rounded-full border border-line text-bright transition-colors hover:border-accent hover:text-accent"
      >
        {open ? (
          <LuX aria-hidden="true" className="size-5" />
        ) : (
          <LuMenu aria-hidden="true" className="size-5" />
        )}
      </button>

      <ul
        id="mobile-menu"
        hidden={!open}
        className="absolute right-0 mt-2 w-44 space-y-1 rounded-lg glow border border-line bg-surface p-2 text-sm shadow-lg shadow-black/40"
      >
        {links.map((item) => {
          const isActive = isCurrentPage(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-md px-3 py-2 hover:bg-ink hover:text-accent ${
                  isActive ? "bg-ink text-accent" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
