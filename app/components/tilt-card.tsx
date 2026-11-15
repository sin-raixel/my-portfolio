"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

// A card that tilts toward the cursor in 3D. The starlight that follows the cursor comes
// from the `glow` class. Callers add the shape (rounded-*), padding, and layout.
// `max` is the tilt in degrees at the edges: small for big cards, larger for small ones.
export default function TiltCard({
  children,
  className = "",
  max = 4,
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  accent?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const tilt = (x: number, y: number) => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--rx", `${(-y * max * 2).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * max * 2).toFixed(2)}deg`);
  };

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    tilt((event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => tilt(0, 0)}
      className={`tilt glow border bg-surface hover:border-accent/60 ${
        accent ? "border-accent/40" : "border-line"
      } ${className}`}
    >
      {children}
    </div>
  );
}
