"use client";

import { Children, isValidElement, useEffect, useRef, type ReactNode } from "react";

// Cards that pile up as you scroll: each one sticks near the top of the screen and the
// next card slides over it. Cards underneath sink back a little (smaller and darker) for
// every card that lands on top. On phones the cards just stack normally, because a tall
// card stuck to the top would hide its own bottom. `top` is the sticking point in px (it
// clears the navbar) and `step` is how far each card sits below the one before it.
export default function StackCards({
  children,
  top = 96,
  step = 14,
  className = "gap-8",
}: {
  children: ReactNode;
  top?: number;
  step?: number;
  className?: string;
}) {
  const items = Children.toArray(children);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = nodes.current.filter((node): node is HTMLDivElement => node !== null);

      if (!wide.matches || calm.matches) {
        for (const card of cards) {
          card.style.transform = "";
          card.style.filter = "";
        }
        return;
      }

      // How far the next card has slid over each card: 0 = not yet, 1 = fully landed.
      const covered = cards.map((card, i) => {
        const next = cards[i + 1];
        if (!next) return 0;
        const stuck = top + i * step + card.offsetHeight;
        const progress = (stuck - next.getBoundingClientRect().top) / (stuck - (top + (i + 1) * step));
        return Math.min(1, Math.max(0, progress));
      });

      // A card sinks a little more for every card that has landed on top of it.
      let depth = 0;
      for (let i = cards.length - 1; i >= 0; i--) {
        depth += covered[i];
        cards[i].style.transform = `scale(${1 - Math.min(depth * 0.035, 0.14)})`;
        cards[i].style.filter = `brightness(${1 - Math.min(depth * 0.12, 0.45)})`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wide.addEventListener("change", schedule);
    calm.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wide.removeEventListener("change", schedule);
      calm.removeEventListener("change", schedule);
    };
  }, [top, step, items.length]);

  return (
    <div className={`flex flex-col ${className}`}>
      {items.map((child, i) => (
        <div
          key={isValidElement(child) && child.key !== null ? child.key : i}
          ref={(node) => {
            nodes.current[i] = node;
          }}
          className="origin-top will-change-transform md:sticky"
          style={{ top: top + i * step, zIndex: i + 1 }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
