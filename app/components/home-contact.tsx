import { profile } from "../data/portfolio";
import { socialIcons } from "../data/social-icons";
import EmailMenu from "./email-menu";
import HomeSection from "./home-section";

// Home preview of the Contact page.
export default function HomeContact() {
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <HomeSection
      id="home-contact"
      number="04"
      label="Contact"
      title="Open to an internship"
      href="/contact"
      cta="Get in touch"
    >
      <div className="flex flex-col gap-6 rounded-2xl glow border border-line bg-surface p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-md leading-relaxed">
          Based in {profile.location}. Email is the quickest way to reach me.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <EmailMenu email={profile.email} variant="primary" />
          {socials.map((link) => {
            const Icon = socialIcons[link.label];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="group grid size-12 place-items-center rounded-full border border-line text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
              >
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="size-5 transition-transform motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </HomeSection>
  );
}
