import Header from "./components/header";
import ProjectCard from "./components/project-card";
import Section from "./components/section";
import {
  certifications,
  education,
  profile,
  projects,
  skills,
  type TimelineItem,
} from "./data/portfolio";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="space-y-6 border-l border-line pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[1.9rem] size-2 rounded-full bg-accent-strong"
          />
          <p className="text-sm">{item.period}</p>
          <p className="font-semibold text-bright">{item.title}</p>
          <p>{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:flex lg:gap-20">
      <Header />

      <main className="space-y-24 py-16 lg:flex-1 lg:py-24">
        <Section id="projects" title="Projects">
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.title}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">More projects are in progress.</p>
        </Section>

        <Section id="education" title="Education">
          <Timeline items={education} />
        </Section>

        <Section id="certifications" title="Certifications">
          <Timeline items={certifications} />
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.group} className="sm:flex sm:gap-6">
                <dt className="w-32 shrink-0 font-semibold text-bright">{skill.group}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-md leading-relaxed">
            I&rsquo;m currently looking for an internship. Based in {profile.location}. The
            quickest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block rounded-md bg-accent-strong px-5 py-3 font-medium text-white transition-colors hover:bg-accent hover:text-ink"
          >
            Email {profile.email}
          </a>
        </Section>

        <footer className="text-sm">
          &copy; 2026 {profile.name}. Built with Next.js and Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}