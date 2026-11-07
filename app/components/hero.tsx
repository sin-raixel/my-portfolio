import Image from "next/image";
import { hero, profile } from "../data/portfolio";

export default function Hero() {
  const [first, highlight, last] = hero.lines;
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl scroll-mt-16 items-center gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-24"
    >
      <div>
        <h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-bright sm:text-7xl">
          {first}
          <span className="block text-accent">{highlight}</span>
          {last}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">{hero.intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-colors hover:bg-accent hover:text-ink"
          >
            View projects
          </a>
          <a
            href={hero.resume}
            download
            className="rounded-full border border-line px-7 py-3 font-medium text-bright transition-colors hover:border-accent hover:text-accent"
          >
            Download resume
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-6 font-medium text-bright">
          {socials.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
              Email
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-accent/15">
          {hero.photo ? (
            <Image
              src={hero.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 24rem, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid h-full place-items-center text-8xl font-bold text-accent/50"
            >
              {initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}