import Link from "next/link";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";

// Shared frame for the previews on Home: a small label, a title, a link to the full
// page, and the preview itself. The id is what the side buttons jump to.
export default function HomeSection({
  id,
  number,
  label,
  title,
  href,
  cta,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  href: string;
  cta: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            {number} — {label}
          </p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-bright sm:text-4xl">
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 font-medium text-bright transition-colors hover:text-accent"
        >
          {cta}
          <LuArrowRight
            aria-hidden="true"
            className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
