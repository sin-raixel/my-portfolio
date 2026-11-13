import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import {
  about,
  certifications,
  education,
  github,
  profile,
  projects,
  skills,
} from "../data/portfolio";
import { socialIcons } from "../data/social-icons";
import EmailMenu from "./email-menu";

const MAX_SKILLS = 6;

function Card({
  number,
  label,
  href,
  cta,
  children,
}: {
  number: string;
  label: string;
  href: string;
  cta: string;
  children: ReactNode;
}) {
  return (
    <article className="group/card flex flex-col rounded-2xl glow border border-line bg-surface p-6 transition-all hover:border-accent/60 sm:p-8">
      <h3 className="text-xs font-semibold tracking-widest text-accent uppercase">
        {number} — {label}
      </h3>
      <div className="mt-5 flex-1 space-y-5">{children}</div>
      <a
        href={href}
        className="group mt-8 inline-flex items-center gap-2 self-start font-medium text-bright transition-colors hover:text-accent"
      >
        {cta}
        <LuArrowRight
          aria-hidden="true"
          className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Home keeps a short version of every other section. Each card links to the
// full section below, which holds the expanded version of the same content.
export default function HomeSummary() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const allSkills = skills.flatMap((group) => group.items);
  const shownSkills = allSkills.slice(0, MAX_SKILLS);
  const hiddenSkills = allSkills.length - shownSkills.length;
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <section aria-labelledby="summary-title" className="mx-auto max-w-6xl px-6 pb-8">
      <h2
        id="summary-title"
        className="text-xs font-semibold tracking-widest text-accent uppercase"
      >
        At a glance
      </h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card number="01" label="Projects" href="#projects" cta="See all projects">
          <div>
            <p className="text-2xl font-bold tracking-tight text-bright">{featured.title}</p>
            <p className="mt-2 line-clamp-3 leading-relaxed">{featured.description}</p>
          </div>
          <Tags items={featured.tags.slice(0, 5)} />
          <p className="text-sm">
            {projects.length} {projects.length === 1 ? "project" : "projects"} · GitHub activity
            for @{github.username}
          </p>
        </Card>

        <Card number="02" label="About me" href="#about" cta="More about me">
          <p className="line-clamp-4 leading-relaxed">{about.paragraphs[0]}</p>
          <dl className="space-y-3 text-sm">
            {education[0] && (
              <div>
                <dt className="text-xs font-semibold tracking-widest text-accent uppercase">
                  Education
                </dt>
                <dd className="mt-1 text-bright">
                  {education[0].title}, {education[0].note}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-semibold tracking-widest text-accent uppercase">
                Certifications
              </dt>
              <dd className="mt-1 text-bright">{certifications.length} completed</dd>
            </div>
          </dl>
          <Tags items={shownSkills} />
          {hiddenSkills > 0 && <p className="-mt-3 text-sm">+{hiddenSkills} more skills</p>}
        </Card>

        <Card number="03" label="Contact" href="#contact" cta="Get in touch">
          <p className="leading-relaxed">
            Open to an internship. Based in {profile.location}. Email is the quickest way to reach
            me.
          </p>
          <EmailMenu email={profile.email} variant="primary" />
          <ul className="flex flex-wrap gap-4 font-medium text-bright">
            {socials.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        className="size-5 transition-transform motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110"
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </section>
  );
}
