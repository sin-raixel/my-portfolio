"use client";

import { useEffect, useRef, useState } from "react";
import { LuCheck, LuChevronDown, LuCopy, LuExternalLink, LuMail } from "react-icons/lu";

const SUBJECT = "Reaching out from your portfolio";

const styles = {
  primary:
    "group inline-flex cursor-pointer items-center gap-2 shine rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-all hover:bg-accent hover:text-ink hover:shadow-lg hover:shadow-accent-strong/30 motion-safe:hover:-translate-y-0.5",
  link: "group flex cursor-pointer items-center gap-2 transition-colors hover:text-accent",
};

// Where the dropdown lines up with its button. The hero link sits toward the right
// on phones, so its menu grows leftward there; the Contact button is always on the left.
const align = {
  primary: "left-0",
  link: "right-0 sm:right-auto sm:left-0",
};

const item =
  "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm text-bright transition-colors hover:bg-ink hover:text-accent";

// mailto: only opens the visitor's default mail app, which is often not Gmail.
// This lets people choose Gmail, their default app, or just copy the address.
export default function EmailMenu({
  email,
  variant,
}: {
  email: string;
  variant: keyof typeof styles;
}) {
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(SUBJECT)}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(SUBJECT)}`;

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

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopyState("idle");
      setOpen(false);
    }, 1600);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={`email-menu-${variant}`}
        className={styles[variant]}
      >
        <LuMail
          aria-hidden="true"
          className="size-5 transition-transform motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110"
        />
        {variant === "primary" ? "Email me" : "Email"}
        <LuChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={`email-menu-${variant}`}
        hidden={!open}
        className={`absolute top-full z-30 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-lg glow border border-line bg-surface p-2 shadow-lg shadow-black/40 ${align[variant]}`}
      >
        <a
          href={gmail}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className={item}
        >
          <LuExternalLink aria-hidden="true" className="size-4 shrink-0" />
          Open in Gmail
        </a>
        <a href={mailto} onClick={() => setOpen(false)} className={item}>
          <LuMail aria-hidden="true" className="size-4 shrink-0" />
          Open in mail app
        </a>
        <button type="button" onClick={copy} className={item}>
          {copyState === "copied" ? (
            <LuCheck aria-hidden="true" className="size-4 shrink-0 text-emerald-400" />
          ) : (
            <LuCopy aria-hidden="true" className="size-4 shrink-0" />
          )}
          <span className="min-w-0">
            <span className="block">Copy email address</span>
            <span className="block truncate text-xs text-body">{email}</span>
          </span>
        </button>
        <p role="status" aria-live="polite" className="px-3 pt-1 text-xs text-emerald-400 empty:hidden">
          {copyState === "copied" && "Copied to clipboard"}
          {copyState === "failed" && (
            <span className="text-rose-400">Couldn&apos;t copy. The address is shown above.</span>
          )}
        </p>
      </div>
    </div>
  );
}
