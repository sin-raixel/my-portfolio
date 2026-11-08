"use client";

import { useMemo, useState } from "react";

export type Day = { date: string; count: number; level: number };

// Each day is a star: brighter and glowing the more you committed.
const star = [
  "bg-white/[0.07]",
  "bg-accent/40",
  "bg-accent/70",
  "bg-[#d8ccff]",
  "bg-white shadow-[0_0_10px_2px_rgb(196_181_253/0.75)] motion-safe:animate-[twinkle_3.5s_ease-in-out_infinite]",
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function describe(day: Day) {
  const date = new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const count = day.count === 0 ? "No contributions" : `${day.count} contribution${day.count > 1 ? "s" : ""}`;
  return { count, date };
}

export default function ContributionSky({ days }: { days: Day[] }) {
  const [hovered, setHovered] = useState<Day | null>(null);

  // Columns are weeks (Sunday first), like GitHub's own graph.
  const { weeks, labels } = useMemo(() => {
    const weeks: (Day | null)[][] = [];
    let week: (Day | null)[] = Array(new Date(`${days[0].date}T00:00:00Z`).getUTCDay()).fill(null);
    for (const day of days) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);

    const labels = weeks.map((w, i) => {
      const first = w.find((d) => d !== null);
      const month = first ? Number(first.date.slice(5, 7)) - 1 : -1;
      const previous = i > 0 ? weeks[i - 1].find((d) => d !== null) : null;
      const previousMonth = previous ? Number(previous.date.slice(5, 7)) - 1 : -1;
      return month !== previousMonth ? MONTHS[month] : "";
    });
    if (labels[0] && labels[1]) labels[0] = ""; // avoid two labels colliding at the start
    return { weeks, labels };
  }, [days]);

  const shown = describe(hovered ?? days[days.length - 1]);

  return (
    <div className="mt-12">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-[44rem] gap-3" aria-hidden="true" onPointerLeave={() => setHovered(null)}>
          <div className="mt-6 grid shrink-0 grid-rows-7 gap-[3px] pr-1 text-xs leading-none">
            {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
              <span key={i} className="self-center">
                {label}
              </span>
            ))}
          </div>

          <div className="flex-1">
            <div className="grid auto-cols-fr grid-flow-col gap-[3px] text-xs">
              {labels.map((label, i) => (
                <span key={i} className="h-6 whitespace-nowrap">
                  {label}
                </span>
              ))}
            </div>
            <div className="grid auto-cols-fr grid-flow-col grid-rows-7 gap-[3px]">
              {weeks.flatMap((week, wi) =>
                week.map((day, di) =>
                  day ? (
                    <div
                      key={day.date}
                      onPointerEnter={() => setHovered(day)}
                      style={day.level === 4 ? { animationDelay: `${((wi + di) % 7) * 0.5}s` } : undefined}
                      className={`aspect-square rounded-full transition-transform motion-safe:hover:scale-150 ${star[day.level] ?? star[0]}`}
                    />
                  ) : (
                    <div key={`empty-${wi}-${di}`} />
                  ),
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-semibold text-bright">{shown.count}</span>
          <span className="ml-3">{shown.date}</span>
        </p>
        <p aria-hidden="true" className="flex items-center gap-2 text-xs">
          Less
          {star.map((style, i) => (
            <span key={i} className={`size-3 rounded-full ${style.replace(/motion-safe:animate-\S+/, "")}`} />
          ))}
          More
        </p>
      </div>
    </div>
  );
}
