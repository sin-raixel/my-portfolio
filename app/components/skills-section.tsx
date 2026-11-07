import type { Project, SkillGroup } from "../data/portfolio";
import SectionHeading from "./section-heading";

// Counts only projects where you listed the tool in `builtWith`.
function countProjects(tool: string, projects: Project[]) {
  const key = tool.toLowerCase();
  return projects.filter((p) => p.builtWith?.some((t) => t.toLowerCase() === key)).length;
}

export default function SkillsSection({
  skills,
  projects,
}: {
  skills: SkillGroup[];
  projects: Project[];
}) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16">
      <SectionHeading
        id="skills-title"
        number="02"
        label="Skills"
        title="The tools"
        highlight="I build with."
        intro="Grouped by where they fit. A number means that many of my projects here were built with that tool."
      />

      <div className="mt-14 divide-y divide-line border-y border-line">
        {skills.map((group, index) => (
          <div key={group.group} className="grid gap-4 py-6 md:grid-cols-[16rem_1fr] md:items-center">
            <h3 className="flex items-baseline gap-3 font-semibold text-bright">
              <span className="text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((tool) => {
                const count = countProjects(tool, projects);
                return (
                  <li
                    key={tool}
                    className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105"
                  >
                    {tool}
                    {count > 0 && (
                      <span
                        aria-label={`${count} project${count > 1 ? "s" : ""}`}
                        className="grid size-5 place-items-center rounded-full bg-accent/20 text-xs text-accent"
                      >
                        {count}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}