import AboutSection from "../components/about-section";
import Reveal from "../components/reveal";
import SectionDots from "../components/section-dots";
import SkillsSection from "../components/skills-section";
import TimelineSection from "../components/timeline-section";
import { about, certifications, education, projects, skills } from "../data/portfolio";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata({
  title: "About me",
  description:
    "About John Raizel Bacang: who I am, the skills I use, and my education and certifications.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <AboutSection about={about}>
        <Reveal>
          <SkillsSection skills={skills} projects={projects} />
        </Reveal>
        <Reveal>
          <TimelineSection education={education} certifications={certifications} />
        </Reveal>
      </AboutSection>

      <SectionDots
        caption="About me"
        dots={[
          { href: "#about-intro", label: "About me" },
          { href: "#skills", label: "Skills" },
          { href: "#education", label: "Education & certifications" },
        ]}
      />
    </main>
  );
}
