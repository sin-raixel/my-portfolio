import type { ReactNode } from "react";
import type { Project } from "../data/portfolio";
import FeaturedProject from "./featured-project";
import ProjectCard from "./project-card";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

// The full Projects section. Anything passed as children (like GitHub activity)
// is shown below the project list as part of the same section.
export default function ProjectsSection({
  projects,
  children,
}: {
  projects: Project[];
  children?: ReactNode;
}) {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16">
      <Reveal>
        <SectionHeading
          id="projects-title"
          number="01"
          label="Projects"
          title="Featured project,"
          highlight="and what I built."
          intro="A closer look at my strongest work: what the project is, what I contributed, and the stack behind it."
        />
        {featured && (
          <div className="mt-14">
            <FeaturedProject project={featured} />
          </div>
        )}
        {others.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-bright">More projects</h3>
            <ul className="mt-6 space-y-4">
              {others.map((project) => (
                <li key={project.title}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">More projects are in progress.</p>
          </div>
        )}
      </Reveal>

      {children && <div className="mt-24 space-y-24">{children}</div>}
    </section>
  );
}
