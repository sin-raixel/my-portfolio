import { LuArrowUpRight } from "react-icons/lu";
import type { Project } from "../data/portfolio";

export default function ProjectCard({ title, description, tags, href }: Project) {
  const base = "group relative block rounded-lg border border-line bg-surface p-5";

  const content = (
    <>
      <h3 className="pr-8 text-lg font-semibold text-bright transition-colors group-hover:text-accent">
        {title}
      </h3>
      {href && (
        <LuArrowUpRight
          aria-hidden="true"
          className="absolute top-5 right-5 size-5 text-line transition-all group-hover:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
        />
      )}
      <p className="mt-2 leading-relaxed">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  if (!href) return <div className={base}>{content}</div>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-strong/10 motion-safe:hover:-translate-y-1`}
    >
      {content}
    </a>
  );
}