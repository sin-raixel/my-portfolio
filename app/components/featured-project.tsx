import type { Project } from "../data/portfolio";
import ScreenshotGallery from "./screenshot-gallery";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm">
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function FeaturedProject({ project }: { project: Project }) {
  const link = project.href ?? project.repo;
  const shots = project.screenshots ?? [];

  const rows: [string, string][] = [
    ["My role", project.role],
    ["I built", project.built],
    ["Access", project.access],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return (
    <article className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      {shots.length > 0 ? (
        <figure>
          <ScreenshotGallery shots={shots} />
          <figcaption className="mt-4">
            <Tags tags={project.tags} />
          </figcaption>
        </figure>
      ) : (
        <div className="flex min-h-72 flex-col justify-between rounded-2xl border border-line bg-surface p-8">
          <p className="text-sm">{project.category}</p>
          <p className="py-8 text-4xl leading-tight font-bold tracking-tight text-bright/90 sm:text-5xl">
            {project.title}
          </p>
          <Tags tags={project.tags} />
        </div>
      )}

      <div>
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">Featured</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-bright sm:text-4xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed">{project.description}</p>

        <dl className="mt-8 divide-y divide-line border-y border-line">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <dt className="text-xs font-semibold tracking-widest text-accent uppercase">{label}</dt>
              <dd className="text-bright">{value}</dd>
            </div>
          ))}
        </dl>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-colors hover:bg-accent hover:text-ink"
          >
            {project.linkLabel ?? (project.href ? "Visit project" : "View source")}
          </a>
        )}
      </div>
    </article>
  );
}