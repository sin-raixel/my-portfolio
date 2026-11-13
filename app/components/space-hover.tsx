"use client";

import { useEffect } from "react";

// One shared pointer listener for the space hover effects:
//  - cards with the `glow` class get --mx/--my so starlight follows the cursor
//  - the whole page gets --px/--py (-1 to 1) so the planet and moon drift at different depths
// Only runs for mouse users; touch screens and reduced-motion users skip the parts that move.

// React tags every DOM node it has hydrated with a "__reactFiber$..." key. A card that
// doesn't have it yet is still plain server HTML, and writing a style onto it now makes
// React report a hydration mismatch. So cards are only touched once React has hydrated them.
const isHydrated = (element: Element) =>
  Object.keys(element).some((key) => key.startsWith("__reactFiber$"));
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
        if (card && isHydrated(card)) {
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
