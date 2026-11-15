import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { projects } from "../data/portfolio";
import HomeSection from "./home-section";
import StackCards from "./stack-cards";
import TiltCard from "./tilt-card";

const MAX_TAGS = 5;

// Home preview of the Projects page. The cards pile up as you scroll, and each one
// opens that project's full panel.
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
      <StackCards top={96} step={16} className="gap-8 md:gap-12">
        {projects.map((project, index) => {
          const shot = project.screenshots?.[0];
          const shownTags = project.tags.slice(0, MAX_TAGS);
          const hiddenTags = project.tags.length - shownTags.length;
          return (
            <TiltCard key={project.slug} max={1.6} className="overflow-hidden rounded-3xl">
              <Link
                href={`/projects#project-${project.slug}`}
                className="group grid md:min-h-80 md:grid-cols-[1.15fr_1fr]"
              >
                <div className="relative aspect-video overflow-hidden border-b border-line bg-ink md:aspect-auto md:border-r md:border-b-0">
                  {shot ? (
                    <Image
                      src={shot.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 600px, 100vw"
                      className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full min-h-48 place-items-center bg-gradient-to-br from-accent-strong/30 to-surface px-6 text-center text-3xl font-bold text-bright/90">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    {project.category && <span className="ml-3 text-body/70">{project.category}</span>}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-bright transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  {project.role && <p className="mt-2 text-sm font-medium text-accent">{project.role}</p>}
                  <p className="mt-4 line-clamp-4 flex-1 leading-relaxed">
                    {project.tagline ?? project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2 text-xs">
                    {shownTags.map((tag) => (
                      <li key={tag} className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">
                        {tag}
                      </li>
                    ))}
                    {hiddenTags > 0 && <li className="px-1 py-1">+{hiddenTags} more</li>}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-bright transition-colors group-hover:text-accent">
                    View project
                    <LuArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </TiltCard>
          );
        })}
      </StackCards>
    </HomeSection>
  );
}
