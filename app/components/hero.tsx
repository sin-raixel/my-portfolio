import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuDownload, LuSparkles } from "react-icons/lu";
import { hero, profile } from "../data/portfolio";
import { skillIcons } from "../data/skill-icons";
import { socialIcons } from "../data/social-icons";
import EmailMenu from "./email-menu";

const primary =
  "group inline-flex items-center gap-2 shine rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-all hover:bg-accent hover:text-ink hover:shadow-lg hover:shadow-accent-strong/30 motion-safe:hover:-translate-y-0.5";
const outline =
  "group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5";
const social =
  "group flex items-center gap-2 transition-colors hover:text-accent";
const label = "text-xs font-semibold tracking-widest text-accent uppercase";

// Draws any "&" in a headline line as an outline, like the rest of the site's accents.
function withOutlinedAmpersand(text: string) {
  return text.split(/(&)/).map((part, i) =>
    part === "&" ? (
      <span key={i} className="text-outline">
        &
      </span>
    ) : (
      part
    ),
  );
}

// Text that circles the photo, slowly turning, with a star in the middle.
function Badge({ text }: { text: string }) {
  const radius = 58;
  const circumference = Math.round(2 * Math.PI * radius);
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      className="absolute -top-8 -left-6 z-20 size-32 sm:-left-10 sm:size-36"
    >
      <circle cx="80" cy="80" r="78" className="fill-surface stroke-line" strokeWidth="1.5" />
      <defs>
        <path id="hero-badge-path" d={`M 80,80 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <g className="origin-center motion-safe:animate-spin-slow">
        <text className="fill-bright text-[10.5px] font-semibold">
          <textPath href="#hero-badge-path" textLength={circumference - 2} lengthAdjust="spacing">
            {`${text.toUpperCase()} · `}
          </textPath>
        </text>
      </g>
      <circle cx="80" cy="80" r="24" className="fill-accent-strong/30 stroke-accent" strokeWidth="1.5" />
      <path
        d="M80 66 C81 76 84 79 94 80 C84 81 81 84 80 94 C79 84 76 81 66 80 C76 79 79 76 80 66 Z"
        className="fill-accent"
      />
    </svg>
  );
}

export default function Hero() {
  const [first, highlight, last] = hero.lines;
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
  const surname = profile.name.split(" ").at(-1) ?? profile.name;
  const socials = profile.links.filter((link) => !link.label.startsWith("Resume"));

  return (
    <section
      aria-label="Introduction"
      className="mx-auto grid max-w-6xl gap-x-12 gap-y-14 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-24"
    >
      <div className="md:self-center">
        <h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-bright sm:text-7xl">
          {first}{" "}
          <span className="block text-accent">{withOutlinedAmpersand(highlight)}</span>{" "}
          <span className="relative inline-block text-accent">
            {last}
            <svg
              viewBox="0 0 200 12"
              aria-hidden="true"
              fill="none"
              className="absolute -bottom-3 left-0 w-full"
            >
              <path
                d="M2 8 C 22 2, 38 2, 56 7 S 92 12, 112 6 S 160 2, 198 7"
                pathLength="1"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="draw-in"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed">
          {hero.intro.before}
          <Link
            href={hero.intro.href}
            className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {hero.intro.highlight}
          </Link>
          {hero.intro.after}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className={primary}>
            View projects
            <LuArrowRight aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
          <a href={hero.resume} download className={outline}>
            Download CV
            <LuDownload aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:translate-y-0.5" />
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-6 font-medium text-bright">
          {socials.map((link) => {
            const Icon = socialIcons[link.label];
            return (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className={social}>
                  {Icon && (
                    <Icon aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110" />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <EmailMenu email={profile.email} variant="link" />
          </li>
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:self-center">
        <Badge text={hero.badge} />
        <LuSparkles aria-hidden="true" className="absolute -top-5 -right-4 z-10 size-9 text-accent motion-safe:animate-float" />
        <LuSparkles aria-hidden="true" className="absolute top-1/3 -left-7 z-10 size-5 text-accent-strong motion-safe:animate-float [animation-delay:1.5s]" />
        <LuSparkles aria-hidden="true" className="absolute right-[-1.75rem] bottom-24 z-10 size-6 text-accent motion-safe:animate-float [animation-delay:3s]" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-accent/15 transition-transform duration-500 motion-safe:hover:-rotate-1 motion-safe:hover:scale-[1.02]">
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
            <div aria-hidden="true" className="grid h-full place-items-center text-8xl font-bold text-accent/50">
              {initials}
            </div>
          )}
        </div>

        <span
          aria-hidden="true"
          className="text-outline pointer-events-none absolute bottom-6 -left-4 z-10 text-7xl font-bold tracking-tight select-none sm:-left-10 sm:text-8xl"
        >
          {surname}
        </span>
      </div>

      <div className="md:self-start">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6">
          <p className={label}>Core stack</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-bright">
            {hero.coreStack.map((tool) => {
              const entry = skillIcons[tool];
              const Icon = entry?.icon;
              return (
                <li key={tool} className="flex items-center gap-2">
                  {Icon && <Icon aria-hidden="true" className="size-4 shrink-0" style={{ color: entry.color }} />}
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 md:self-start">
        <div>
          <dt className={label}>Name</dt>
          <dd className="mt-2 font-medium text-bright">{profile.name}</dd>
        </div>
        <div>
          <dt className={label}>Based in</dt>
          <dd className="mt-2 font-medium text-bright">{profile.location}</dd>
        </div>
      </dl>
    </section>
  );
}
