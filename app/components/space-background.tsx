"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; depth: number; alpha: number; speed: number; phase: number; color: string };
type Shooting = { x: number; y: number; vx: number; vy: number; born: number };

const COLORS = ["255,255,255", "255,255,255", "196,181,253", "147,197,253", "249,168,212"];

// A fixed starfield: stars twinkle, drift slightly as you scroll (nearer stars move more),
// and a shooting star crosses every so often. Reduced motion gets a still sky.
export default function SpaceBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let shooting: Shooting | null = null;
    let nextShot = performance.now() + 5000;
    let raf = 0;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (width !== w || height > h) {
        stars = Array.from({ length: Math.round((width * height) / 5500) }, () => {
          const depth = Math.random();
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            r: 0.35 + depth * depth * 1.3,
            depth,
            alpha: 0.35 + Math.random() * 0.65,
            speed: 0.4 + Math.random() * 1.8,
            phase: Math.random() * Math.PI * 2,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          };
        });
      }
      w = width;
      h = height;
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, w, h);
      const scroll = window.scrollY;

      for (const s of stars) {
        const y = (((s.y - scroll * (0.02 + s.depth * 0.08)) % h) + h) % h;
        const twinkle = still ? 1 : 0.65 + 0.35 * Math.sin(now / 1000 * s.speed + s.phase);
        const a = s.alpha * twinkle;
        if (s.r > 1) {
          ctx!.fillStyle = `rgba(${s.color},${a * 0.15})`;
          ctx!.beginPath();
          ctx!.arc(s.x, y, s.r * 3, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = `rgba(${s.color},${a})`;
        ctx!.beginPath();
        ctx!.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!still) {
        if (!shooting && now > nextShot) {
          shooting = { x: w * (0.4 + Math.random() * 0.6), y: Math.random() * h * 0.4, vx: -9, vy: 5, born: now };
        }
        if (shooting) {
          const age = now - shooting.born;
          const px = shooting.x + shooting.vx * (age / 16);
          const py = shooting.y + shooting.vy * (age / 16);
          const fade = Math.max(0, 1 - age / 900);
          const grad = ctx!.createLinearGradient(px, py, px - shooting.vx * 12, py - shooting.vy * 12);
          grad.addColorStop(0, `rgba(255,255,255,${fade})`);
          grad.addColorStop(1, "rgba(196,181,253,0)");
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.moveTo(px, py);
          ctx!.lineTo(px - shooting.vx * 12, py - shooting.vy * 12);
          ctx!.stroke();
          if (age > 900) {
            shooting = null;
            nextShot = now + 7000 + Math.random() * 8000;
          }
        }
        raf = requestAnimationFrame(draw);
      }
    }

    function onResize() {
      build();
      if (still) draw(0);
    }

    build();
    if (still) {
      draw(0);
      window.addEventListener("scroll", onResize, { passive: true });
    } else {
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />;
}
