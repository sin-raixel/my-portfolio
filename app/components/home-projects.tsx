import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/portfolio";
import HomeSection from "./home-section";

const MAX_TAGS = 4;

// Home preview of the Projects page: one small card per project. Each card opens that
// project's full panel.
export default function HomeProjects() {
  return (
    <HomeSection
      id="home-projects"
      number="01"
      label="Projects"
      title="What I've built"
      href="/projects"
      cta="See all projects"
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const shot = project.screenshots?.[0];
          const shownTags = project.tags.slice(0, MAX_TAGS);
          const hiddenTags = project.tags.length - shownTags.length;
          return (
            <li key={project.slug} className="flex">
              <Link
                href={`/projects#project-${project.slug}`}
                className="group flex w-full flex-col overflow-hidden rounded-2xl glow border border-line bg-surface transition-all hover:border-accent/60 motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden border-b border-line bg-ink">
                  {shot ? (
                    <Image
                      src={shot.src}
                      alt=""
                      fill
                      sizes="(min-width: 1152px) 368px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-gradient-to-br from-accent-strong/30 to-surface px-6 text-center text-2xl font-bold text-bright/90">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  {project.category && <p className="text-xs">{project.category}</p>}
                  <h3 className="mt-2 text-xl font-semibold text-bright transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  {project.role && <p className="mt-1 text-sm font-medium text-accent">{project.role}</p>}
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed">
                    {project.tagline ?? project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                    {shownTags.map((tag) => (
                      <li key={tag} className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">
                        {tag}
                      </li>
                    ))}
                    {hiddenTags > 0 && <li className="px-1 py-1">+{hiddenTags} more</li>}
                  </ul>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </HomeSection>
  );
}
