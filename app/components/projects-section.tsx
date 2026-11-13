import type { ReactNode } from "react";
import type { Project } from "../data/portfolio";
import ProjectPanel from "./project-panel";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

// The full Projects section: one detailed panel per project, then anything passed as
// children (like GitHub activity). The side dots use the ids set here and in the panels.
export default function ProjectsSection({
  projects,
  children,
}: {
  projects: Project[];
  children?: ReactNode;
}) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16">
      <Reveal>
        <div id="projects-intro" className="scroll-mt-16">
          <SectionHeading
            id="projects-title"
            level={1}
            number="01"
            label="Projects"
            title="What I built,"
            highlight="and how it works."
            intro="Each project covers what it is, how it works, the stack behind it, and what I worked on, with the focus on frontend development and QA."
          />
        </div>
      </Reveal>

      <div className="mt-16 space-y-28">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectPanel project={project} index={index} total={projects.length} />
          </Reveal>
        ))}
      </div>

      {children && <div className="mt-28 space-y-24">{children}</div>}
    </section>
  );
}
