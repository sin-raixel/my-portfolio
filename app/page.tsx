import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import FeaturedProject from "./components/featured-project";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProjectCard from "./components/project-card";
import SectionDots from "./components/section-dots";
import SectionHeading from "./components/section-heading";
import SkillsSection from "./components/skills-section";
import TimelineSection from "./components/timeline-section";
import {
  about,
  certifications,
  education,
  projects,
  skills,
} from "./data/portfolio";

export default function Home() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== featured);

  return (
    <>
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-16">
        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16">
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
        </section>

        <SkillsSection skills={skills} projects={projects} />

        <TimelineSection education={education} certifications={certifications} />

        <AboutSection about={about} />

        <ContactSection />
      </main>

      <Footer />
      <SectionDots />
    </>
  );
}