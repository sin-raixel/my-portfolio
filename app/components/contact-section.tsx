import { profile } from "../data/portfolio";
import SectionHeading from "./section-heading";

export default function ContactSection() {
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16">
      <SectionHeading
        id="contact-title"
        number="05"
        label="Contact"
        title="Open to an internship,"
        highlight="let's talk."
        intro={`Based in ${profile.location}. Email is the quickest way to reach me.`}
      />

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-colors hover:bg-accent hover:text-ink"
        >
          Email me
        </a>
        {socials.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-3 font-medium text-bright transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-6 text-bright">{profile.email}</p>
    </section>
  );
}