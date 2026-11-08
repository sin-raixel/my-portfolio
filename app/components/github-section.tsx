import { cacheLife } from "next/cache";
import { LuArrowUpRight } from "react-icons/lu";
import { github } from "../data/portfolio";
import ContributionSky, { type Day } from "./contribution-sky";
import SectionHeading from "./section-heading";

// Uses a free community API that reads the public GitHub contribution graph.
// The result is cached and refreshed in the background, so the page stays fast.
async function getContributions(username: string): Promise<Day[] | null> {
  "use cache";
  try {
        const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { signal: AbortSignal.timeout(10000) },
    );
    if (!res.ok) throw new Error(`GitHub activity request failed: ${res.status}`);
    const data = (await res.json()) as { contributions?: Day[] };
    if (!Array.isArray(data.contributions) || data.contributions.length === 0) throw new Error("No data");
    cacheLife("hours");
    return [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));
    } catch (error) {
    console.error("GitHub activity failed to load:", error);
    cacheLife("minutes");
    return null;
  }
}

export default async function GithubSection() {
  const days = await getContributions(github.username);
  const profileUrl = `https://github.com/${github.username}`;

  let total = 0;
  let active = 0;
  let longest = 0;
  let run = 0;
  for (const day of days ?? []) {
    total += day.count;
    run = day.count > 0 ? run + 1 : 0;
    if (day.count > 0) active += 1;
    longest = Math.max(longest, run);
  }

  const stats = [
    { value: total.toLocaleString("en-US"), label: "Contributions in the past year" },
    { value: active.toLocaleString("en-US"), label: "Active days" },
    { value: longest.toLocaleString("en-US"), label: "Longest streak", unit: "days" },
  ];

  return (
    <section id="github" aria-labelledby="github-title" className="scroll-mt-16">
      <SectionHeading
        id="github-title"
        number="06"
        label="GitHub activity"
        title="Every commit"
        highlight="lights a star."
        highlightStyle="outline"
        intro="A map of my GitHub activity over the past year. Every dot is a day, and the brighter the star, the more I committed."
      />

      <div className="glow mt-14 rounded-2xl border border-line bg-surface p-6 sm:p-10">
        {days ? (
          <>
            <dl className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-sm">{stat.label}</dt>
                  <dd className="text-5xl font-bold tracking-tight text-bright">
                    {stat.value}
                    {stat.unit && <span className="ml-2 text-xl font-medium text-accent">{stat.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <ContributionSky days={days} />
          </>
        ) : (
          <p>
            My GitHub activity couldn&apos;t load right now. It refreshes on its own, or you can see it on my profile.
          </p>
        )}

        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-line px-6 py-2.5 font-medium text-bright transition-all hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
        >
          @{github.username}
          <LuArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
