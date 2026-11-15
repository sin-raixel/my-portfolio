"use client";

import Image from "next/image";
import { useState } from "react";
import type { Screenshot } from "../data/portfolio";

// Every screenshot sits in the same wide frame, so the page doesn't jump around when
// you switch between them. Up to four thumbnails share one row; more wrap into a grid.
export default function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  const [index, setIndex] = useState(0);
  const current = shots[index];

  return (
    <div>
      {/* Browser-style frame */}
      <div className="overflow-hidden rounded-2xl glow border border-line bg-surface">
        <div className="flex gap-2 border-b border-line px-4 py-3" aria-hidden="true">
          <span className="size-3 rounded-full bg-line" />
          <span className="size-3 rounded-full bg-line" />
          <span className="size-3 rounded-full bg-line" />
        </div>
        <div className="relative aspect-[11/5] bg-ink">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1152px) 600px, 100vw"
            priority={index === 0}
            className="object-contain"
          />
        </div>
      </div>

      {shots.length > 1 && (
        <>
          <p aria-live="polite" className="mt-3 text-sm">
            {current.alt}
          </p>
          <ul
            className={`mt-3 gap-2 ${shots.length > 4 ? "grid grid-cols-4" : "grid auto-cols-fr grid-flow-col"}`}
          >
            {shots.map((shot, i) => (
              <li key={shot.src}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1} of ${shots.length}: ${shot.alt}`}
                  aria-pressed={i === index}
                  className={`relative block aspect-[11/5] w-full overflow-hidden rounded-lg border transition-all ${
                    i === index ? "border-accent" : "border-line opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes="150px"
                    className="object-cover object-top"
                  />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
