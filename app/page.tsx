import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import CursorTrail from "./components/cursor-trail";
import Footer from "./components/footer";
import GithubSection from "./components/github-section";
import Hero from "./components/hero";
import HomeSummary from "./components/home-summary";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projects-section";
import Reveal from "./components/reveal";
import SectionDots from "./components/section-dots";
import SkillsSection from "./components/skills-section";
import TimelineSection from "./components/timeline-section";
import {
  about,
  certifications,
  education,
  projects,
  skills,
} from "./data/portfolio";

// Four sections, matching the navbar and the side dots:
//   Home     - hero plus a short summary of everything below
//   Projects - the expanded version: projects and GitHub activity
//   About me - the expanded version: bio, skills, education
//   Contact  - the expanded version: ways to reach me
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home" className="scroll-mt-16">
          <Hero />
          <HomeSummary />
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-6 py-16">
          <ProjectsSection projects={projects}>
            <Reveal>
              <GithubSection />
            </Reveal>
          </ProjectsSection>

          <AboutSection about={about}>
            <Reveal>
              <SkillsSection skills={skills} projects={projects} />
            </Reveal>
            <Reveal>
              <TimelineSection education={education} certifications={certifications} />
            </Reveal>
          </AboutSection>

          <Reveal>
            <ContactSection />
          </Reveal>
        </div>
      </main>

      <Footer />
      <SectionDots />
      <CursorTrail />
    </>
  );
}
