import { LuArrowUpRight } from "react-icons/lu";
import type { Project } from "../data/portfolio";
import ScreenshotGallery from "./screenshot-gallery";

const label = "text-xs font-semibold tracking-widest text-accent uppercase";

function Diamond() {
  return <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" />;
}

// One full project: the summary on the left, screenshots on the right, then how it
// works and what was worked on (frontend and QA first) underneath. Every block only
// shows up when the project has data for it.
export default function ProjectPanel({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const shots = project.screenshots ?? [];
  const number = String(index + 1).padStart(2, "0");

  const meta: [string, string][] = [
    ["Role", project.role],
    ["Period", project.period],
    ["Status", project.status],
    ["Access", project.access],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  const hasWork = Boolean(project.frontend?.length || project.qa?.length);

  return (
    <article
      id={`project-${project.slug}`}
      aria-labelledby={`project-${project.slug}-title`}
      className="scroll-mt-20"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <p className={label}>
            {number} / {String(total).padStart(2, "0")}
            {project.category && <span className="ml-3 text-body/70">{project.category}</span>}
          </p>
          <h3
            id={`project-${project.slug}-title`}
            className="mt-4 text-4xl leading-tight font-bold tracking-tight text-bright sm:text-5xl"
          >
            {project.title}
          </h3>
          {project.tagline && (
            <p className="mt-4 text-xl leading-snug font-medium text-accent">{project.tagline}</p>
          )}
          <p className="mt-5 leading-relaxed">{project.description}</p>

          {project.built && (
            <div className="mt-7 rounded-xl border border-line bg-surface p-5">
              <p className={label}>My part</p>
              <p className="mt-2 leading-relaxed">{project.built}</p>
            </div>
          )}

          {meta.length > 0 && (
            <dl className="mt-7 divide-y divide-line border-y border-line">
              {meta.map(([name, value]) => (
                <div key={name} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-6">
                  <dt className={label}>{name}</dt>
                  <dd className="text-bright">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-6 grid gap-x-6 gap-y-2 text-bright sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <Diamond />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7">
            {project.stack ? (
              <dl className="space-y-2 text-sm">
                {project.stack.map((group) => (
                  <div key={group.area} className="flex flex-wrap gap-x-3">
                    <dt className="w-28 shrink-0 text-body/70">{group.area}</dt>
                    <dd className="text-bright">{group.items.join("  /  ")}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <ul className="flex flex-wrap gap-2 text-sm">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {(project.href || project.repo) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block shine rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  {project.linkLabel ?? "Visit project"}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 font-medium text-bright underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Source code
                  <LuArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-24">
          {shots.length > 0 ? (
            <ScreenshotGallery shots={shots} />
          ) : (
            <div className="flex min-h-72 flex-col justify-between rounded-2xl glow border border-line bg-surface p-8">
              <p className="text-sm">{project.category}</p>
              <p className="py-8 text-4xl leading-tight font-bold tracking-tight text-bright/90 sm:text-5xl">
                {project.title}
              </p>
              <ul className="flex flex-wrap gap-2 text-sm">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {project.howItWorks && project.howItWorks.length > 0 && (
        <div className="mt-14">
          <h4 className={label}>How it works</h4>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.howItWorks.map((step, i) => (
              <li key={step.title} className="rounded-xl glow border border-line bg-surface p-5">
                <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-lg font-semibold text-bright">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {project.factors && (
        <section className="mt-10 rounded-xl glow border border-line bg-surface p-6">
          <h4 className={label}>{project.factors.title}</h4>
          <p className="mt-3 max-w-2xl leading-relaxed">{project.factors.intro}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.factors.items.map((item) => (
              <li key={item.label} className="rounded-lg border border-line p-4">
                <p className="font-medium text-bright">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed">{item.note}</p>
              </li>
            ))}
          </ul>
          {project.factors.footnote && (
            <p className="mt-6 border-t border-line pt-4 text-sm">{project.factors.footnote}</p>
          )}
        </section>
      )}

      {hasWork && (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.frontend && project.frontend.length > 0 && (
            <section className="rounded-xl glow border border-accent/40 bg-surface p-6">
              <h4 className={label}>Frontend work</h4>
              <ul className="mt-4 space-y-3 text-bright">
                {project.frontend.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Diamond />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {project.qa && project.qa.length > 0 && (
            <section className="rounded-xl glow border border-accent/40 bg-surface p-6">
              <h4 className={label}>QA and testing</h4>
              <ul className="mt-4 space-y-3 text-bright">
                {project.qa.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Diamond />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </article>
  );
}
