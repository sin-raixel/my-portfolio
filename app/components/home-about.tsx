import { about, certifications, education } from "../data/portfolio";
import HomeSection from "./home-section";

const label = "text-xs font-semibold tracking-widest text-accent uppercase";

// Home preview of the About me page.
export default function HomeAbout() {
  return (
    <HomeSection
      id="home-about"
      number="03"
      label="About me"
      title="A bit about me"
      href="/about"
      cta="More about me"
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl glow border border-line bg-surface p-6 sm:p-8">
          <p className="leading-relaxed">{about.paragraphs[0]}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {about.currently.map((row) => (
              <div key={row.label}>
                <dt className={label}>{row.label}</dt>
                <dd className="mt-1 text-sm text-bright">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl glow border border-line bg-surface p-6 sm:p-8">
          <dl className="space-y-5">
            {education[0] && (
              <div>
                <dt className={label}>Education</dt>
                <dd className="mt-1 text-bright">{education[0].title}</dd>
                <dd className="text-sm">{education[0].note}</dd>
              </div>
            )}
            <div>
              <dt className={label}>Certifications</dt>
              <dd className="mt-1 text-bright">{certifications.length} completed</dd>
              <dd className="text-sm">Cybersecurity, networking, and more</dd>
            </div>
          </dl>
        </div>
      </div>
    </HomeSection>
  );
}
