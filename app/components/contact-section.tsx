import { profile } from "../data/portfolio";
import { socialIcons } from "../data/social-icons";
import EmailMenu from "./email-menu";
import SectionHeading from "./section-heading";

export default function ContactSection() {
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16">
      <SectionHeading
        id="contact-title"
        number="06"
        label="Contact"
        title="Open to an internship,"
        highlight="let's talk."
        highlightStyle="outline"
        intro={`Based in ${profile.location}. Email is the quickest way to reach me.`}
      />

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <EmailMenu email={profile.email} variant="primary" />
        {socials.map((link) => {
          const Icon = socialIcons[link.label];
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
            >
              {Icon && (
                <Icon aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110" />
              )}
              {link.label}
            </a>
          );
        })}
      </div>
      <p className="mt-6 text-bright">{profile.email}</p>
    </section>
  );
}