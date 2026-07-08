"use client";

import { useEffect, useRef, useCallback } from "react";

interface Bubble {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function OceanParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animRef = useRef<number>(0);

  const spawn = useCallback((w: number, h: number) => {
    return {
      x: Math.random() * w,
      y: h + 10,
      r: Math.random() * 3 + 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.6 + 0.3),
      alpha: Math.random() * 0.25 + 0.08,
      life: 0,
      maxLife: Math.random() * 400 + 300,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setSize();
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Initialize bubbles
    for (let i = 0; i < 30; i++) {
      bubblesRef.current.push(spawn(W(), H()));
    }

    const animate = () => {
      ctx.clearRect(0, 0, W(), H());

      const bubbles = bubblesRef.current;
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.x += b.vx;
        b.y += b.vy;
        b.life++;

        // Fade in/out
        const fadeIn = Math.min(b.life / 60, 1);
        const fadeOut = Math.max(0, 1 - (b.life - b.maxLife + 60) / 60);
        const alpha = b.alpha * fadeIn * fadeOut;

        // Draw bubble
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 116, 144, ${alpha})`;
        ctx.fill();

        // Draw highlight
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.5})`;
        ctx.fill();

        // Remove dead bubbles
        if (b.life > b.maxLife || b.y < -20 || b.x < -20 || b.x > W() + 20) {
          bubbles.splice(i, 1);
          bubbles.push(spawn(W(), H()));
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [spawn]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
