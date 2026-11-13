import { skills } from "../data/portfolio";
import HomeSection from "./home-section";

const MAX_CHIPS = 6;

// Frontend and QA first, then the rest in their original order.
const ORDER = ["Languages", "Frameworks", "Practices", "Tools", "Learning", "Databases", "Networking"];
const sorted = [...skills].sort((a, b) => {
  const rank = (name: string) => (ORDER.includes(name) ? ORDER.indexOf(name) : ORDER.length);
  return rank(a.group) - rank(b.group);
});

// Home preview of the Skills part of the About page.
export default function HomeSkills() {
  return (
    <HomeSection
      id="home-skills"
      number="02"
      label="Skills"
      title="What I work with"
      href="/about#skills"
      cta="See all skills"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((group) => {
          const shown = group.items.slice(0, MAX_CHIPS);
          const hidden = group.items.length - shown.length;
          return (
            <section key={group.group} className="rounded-xl glow border border-line bg-surface p-5">
              <h3 className="text-xs font-semibold tracking-widest text-accent uppercase">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {shown.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-bright">
                    {item}
                  </li>
                ))}
                {hidden > 0 && <li className="px-1 py-1 text-sm">+{hidden} more</li>}
              </ul>
            </section>
          );
        })}
      </div>
    </HomeSection>
  );
}
