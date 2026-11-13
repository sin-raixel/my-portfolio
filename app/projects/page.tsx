import GithubSection from "../components/github-section";
import ProjectsSection from "../components/projects-section";
import Reveal from "../components/reveal";
import SectionDots from "../components/section-dots";
import { projects } from "../data/portfolio";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by John Raizel Bacang: how each one works, the stack behind it, and the frontend and QA work I did.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <ProjectsSection projects={projects}>
        <Reveal>
          <GithubSection />
        </Reveal>
      </ProjectsSection>

      <SectionDots
        caption="Projects"
        dots={[
          { href: "#projects-intro", label: "Projects overview" },
          ...projects.map((project) => ({ href: `#project-${project.slug}`, label: project.title })),
          { href: "#github", label: "GitHub activity" },
        ]}
      />
    </main>
  );
}
