import Image from "next/image";
import { LuArrowRight, LuDownload, LuSparkles } from "react-icons/lu";
import { hero, profile } from "../data/portfolio";
import { socialIcons } from "../data/social-icons";
import EmailMenu from "./email-menu";

const primary =
  "group inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-all hover:bg-accent hover:text-ink hover:shadow-lg hover:shadow-accent-strong/30 motion-safe:hover:-translate-y-0.5";
const outline =
  "group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5";
const social =
  "group flex items-center gap-2 transition-colors hover:text-accent";

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
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-bright">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to internships
        </p>

        <h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-bright sm:text-7xl">
          {first}
          <span className="block text-accent">{highlight}</span>
          <span className="text-outline transition-colors duration-300 hover:text-accent">{last}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">{hero.intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className={primary}>
            View projects
            <LuArrowRight aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:translate-x-1" />
          </a>
          <a href={hero.resume} download className={outline}>
            Download resume
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

      <div className="relative mx-auto w-full max-w-sm">
        <LuSparkles aria-hidden="true" className="absolute -top-5 -right-4 z-10 size-9 text-accent motion-safe:animate-float" />
        <LuSparkles aria-hidden="true" className="absolute top-1/3 -left-7 z-10 size-5 text-accent-strong motion-safe:animate-float [animation-delay:1.5s]" />
        <LuSparkles aria-hidden="true" className="absolute right-[-1.75rem] bottom-10 z-10 size-6 text-accent motion-safe:animate-float [animation-delay:3s]" />

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
      </div>
    </section>
  );
}