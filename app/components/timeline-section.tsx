import { LuAward, LuGraduationCap } from "react-icons/lu";
import type { TimelineItem } from "../data/portfolio";
import SectionHeading from "./section-heading";

const categoryIcons = { Education: LuGraduationCap, Certification: LuAward };

export default function TimelineSection({
  education,
  certifications,
}: {
  education: TimelineItem[];
  certifications: TimelineItem[];
}) {
  const rows = [
    ...education.map((item) => ({ ...item, category: "Education" })),
    ...certifications.map((item) => ({ ...item, category: "Certification" })),
  ];

  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-16">
      <SectionHeading
        id="education-title"
        number="03"
        label="Education & certifications"
        title="Where I've learned,"
        highlight="and what I've earned."
        intro="My degree, plus the courses and certificates I've completed along the way."
      />

      <ol className="mt-14 divide-y divide-line border-y border-line">
        {rows.map((row) => {
          const Icon = categoryIcons[row.category as keyof typeof categoryIcons];
          return (
          <li
            key={`${row.category}-${row.title}`}
            className="group grid gap-2 px-2 py-8 transition-colors hover:bg-surface/60 md:grid-cols-[9rem_9rem_1fr] md:gap-6"
          >
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">{row.period}</p>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
              <Icon aria-hidden="true" className="size-4 text-accent transition-transform motion-safe:group-hover:scale-125 motion-safe:group-hover:-rotate-6" />
              {row.category}
            </p>
            <div>
              <h3 className="text-xl font-semibold text-bright sm:text-2xl">{row.title}</h3>
              <p className="mt-1">{row.note}</p>
              {row.link && (
                <a
                  href={row.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  View certificate
                </a>
              )}
            </div>
          </li>
          );
        })}
      </ol>
    </section>
  );
}