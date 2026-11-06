import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16">
      <h2 id={`${id}-title`} className="text-2xl font-semibold text-bright">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}