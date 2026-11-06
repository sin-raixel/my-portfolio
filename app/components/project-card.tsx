import type { Project } from "../data/portfolio";

export default function ProjectCard({ title, description, tags, href }: Project) {
  const base = "group block rounded-lg border border-line bg-surface p-5";

  const content = (
    <>
      <h3 className="text-lg font-semibold text-bright transition-colors group-hover:text-accent">
        {title}
      </h3>
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
      className={`${base} transition-colors hover:border-accent`}
    >
      {content}
    </a>
  );
}