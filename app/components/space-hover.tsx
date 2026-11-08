"use client";

import { useEffect } from "react";

// One shared pointer listener for the space hover effects:
//  - cards with the `glow` class get --mx/--my so starlight follows the cursor
//  - the whole page gets --px/--py (-1 to 1) so the planet and moon drift at different depths
// Only runs for mouse users; touch screens and reduced-motion users skip the parts that move.
export default function SpaceHover() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!reduceMotion) {
          root.style.setProperty("--px", String((event.clientX / window.innerWidth) * 2 - 1));
          root.style.setProperty("--py", String((event.clientY / window.innerHeight) * 2 - 1));
        }
        if (!(event.target instanceof Element)) return;
        const card = event.target.closest<HTMLElement>(".glow");
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
          card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
