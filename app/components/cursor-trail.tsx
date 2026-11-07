"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // 1 -> 0
  size: number;
  rotation: number;
  spin: number;
  color: string;
};

// Tweak these to change the feel.
const COLORS = ["#a78bfa", "#7c3aed", "#f4f1ff"];
const SPAWN_DISTANCE = 14; // pixels the cursor must move before a new sparkle appears
const FADE_SPEED = 0.025; // higher = shorter trail
const MAX_PARTICLES = 60;

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip touch screens and people who prefer reduced motion.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !hasMouse) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: Particle[] = [];
    let lastX = -1000;
    let lastY = -1000;
    let frame = 0;

    // A four-point sparkle
    const drawSparkle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const radius = i % 2 === 0 ? p.size : p.size * 0.3;
        const angle = (Math.PI / 4) * i;
        ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.spin;
        p.life -= FADE_SPEED;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        drawSparkle(p);
      }

      // Stop the loop when nothing is left to draw
      frame = particles.length > 0 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (event: PointerEvent) => {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.hypot(dx, dy) < SPAWN_DISTANCE) return;
      lastX = event.clientX;
      lastY = event.clientY;

      particles.push({
        x: event.clientX,
        y: event.clientY,
        vx: (Math.random() - 0.5) * 0.8,
        vy: Math.random() * 0.6 + 0.2,
        life: 1,
        size: Math.random() * 5 + 4,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
      if (particles.length > MAX_PARTICLES) particles.shift();

      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
    />
  );
}