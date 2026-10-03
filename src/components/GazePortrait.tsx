"use client";

import { useEffect, useId, useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

/** Eye geometry is in the source portrait's 1122 × 1402 coordinate space. */
export default function GazePortrait({ label }: { label: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const id = useId().replace(/:/g, "");
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 24 });
  const y = useSpring(0, { stiffness: 180, damping: 24 });

  useEffect(() => {
    const reset = () => { x.set(0); y.set(0); };
    reset();
    if (reduced) return;
    const hero = document.getElementById("hero");
    if (!hero) return;
    const move = (event: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = (event.clientX - rect.left - rect.width * .48) / Math.max(rect.width, 1);
      const dy = (event.clientY - rect.top - rect.height * .28) / Math.max(rect.height, 1);
      const length = Math.max(1, Math.hypot(dx, dy));
      x.set(dx / length * 7);
      y.set(dy / length * 3);
    };
    const release = (event: PointerEvent) => { if (event.pointerType !== "mouse") reset(); };
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerdown", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    hero.addEventListener("pointerup", release);
    hero.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerdown", move);
      hero.removeEventListener("pointerleave", reset);
      hero.removeEventListener("pointerup", release);
      hero.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
    };
  }, [reduced, x, y]);

  return <svg ref={ref} viewBox="0 0 1122 1402" role="img" aria-label={label} style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <clipPath id={`${id}-eyes`}>
        <path d="M433 391 Q465 368 496 398 Q464 410 433 391Z M589 398 Q620 367 651 391 Q623 412 589 398Z" />
      </clipPath>
      <clipPath id={`${id}-irises`}>
        <ellipse cx="465" cy="389" rx="16" ry="17" />
        <ellipse cx="621" cy="389" rx="16" ry="17" />
      </clipPath>
      <linearGradient id={`${id}-sclera`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#b79a92" />
        <stop offset=".65" stopColor="#eee0d9" />
        <stop offset="1" stopColor="#d8b8aa" />
      </linearGradient>
    </defs>
    <style>{`@media (prefers-reduced-motion: reduce) { [data-gaze-pupils] { transform: none !important; } }`}</style>
    <image href="images/chen-xi-cartoon-clean-v2.png" width="1122" height="1402" />
    <g clipPath={`url(#${id}-eyes)`} aria-hidden="true">
      <path fill={`url(#${id}-sclera)`} d="M425 375H660V408H425Z" />
      <motion.g data-gaze-pupils style={{ x: reduced ? 0 : x, y: reduced ? 0 : y }}>
        <g clipPath={`url(#${id}-irises)`}>
          <image href="images/chen-xi-cartoon-clean-v2.png" width="1122" height="1402" />
        </g>
      </motion.g>
    </g>
  </svg>;
}
