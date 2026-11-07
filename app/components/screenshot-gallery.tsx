"use client";

import Image from "next/image";
import { useState } from "react";
import type { Screenshot } from "../data/portfolio";

export default function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  const [index, setIndex] = useState(0);
  const current = shots[index];

  return (
    <div>
      {/* Browser-style frame */}
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex gap-2 border-b border-line px-4 py-3" aria-hidden="true">
          <span className="size-3 rounded-full bg-line" />
          <span className="size-3 rounded-full bg-line" />
          <span className="size-3 rounded-full bg-line" />
        </div>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1600}
          height={900}
          priority={index === 0}
          className="block h-auto w-full"
        />
      </div>

      {shots.length > 1 && (
        <ul className="mt-3 flex gap-3">
          {shots.map((shot, i) => (
            <li key={shot.src} className="flex-1">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1} of ${shots.length}`}
                aria-pressed={i === index}
                className={`block w-full overflow-hidden rounded-lg border transition-all ${
                  i === index ? "border-accent" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={shot.src} alt="" width={400} height={225} className="block h-auto w-full" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}