"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  label: string;
  color: string;
  onClick: () => void;
}

// --- FlipCard ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, total, target, label, color, onClick }: FlipCardProps) {
  return (
    <motion.div
      animate={{ x: target.x, y: target.y, rotate: target.rotation, scale: target.scale, opacity: target.opacity }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{ position: "absolute", width: IMG_WIDTH, height: IMG_HEIGHT, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-800" style={{ backfaceVisibility: "hidden" }}>
          <img src={src} alt={label} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span className="text-[8px] font-bold text-white uppercase tracking-widest drop-shadow-md">{label}</span>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center p-3" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: color }}>
          <p className="text-[8px] font-bold text-white/80 uppercase tracking-widest mb-1">Explore</p>
          <p className="text-xs font-bold text-white">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Data ---
const SECTION_IMAGES = [
  { label: "Education", labelZh: "教育", href: "#education", color: "#8b5cf6", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80" },
  { label: "Experience", labelZh: "经历", href: "#experience", color: "#7c3aed", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80" },
  { label: "Projects", labelZh: "项目", href: "#projects", color: "#6366f1", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80" },
  { label: "Research", labelZh: "科研", href: "#research", color: "#3b82f6", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=300&q=80" },
  { label: "Skills", labelZh: "技能", href: "#skills", color: "#06b6d4", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80" },
  { label: "Contact", labelZh: "联系", href: "#contact", color: "#0891b2", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80" },
];

const TOTAL_IMAGES = SECTION_IMAGES.length;
const MAX_SCROLL = 3000;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

// --- Hero Component ---
interface ScrollMorphHeroProps {
  lang: "zh" | "en";
  heroSchool: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;
}

export default function ScrollMorphHero({ lang, heroSchool, heroSubtitle, heroCta1, heroCta2 }: ScrollMorphHeroProps) {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Container size
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
    return () => observer.disconnect();
  }, []);

  // Virtual scroll
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  // Morph: circle → arc (scroll 0→600)
  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  // Scroll rotation (scroll 600→3000)
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Intro sequence
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Scatter positions
  const scatterPositions = useMemo(() => {
    return SECTION_IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  // Sync state
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);
  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => { u1(); u2(); u3(); };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  const navigateTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center" style={{ perspective: "1000px" }}>

        {/* Intro Text - Fades out */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="text-2xl font-black tracking-tight text-white md:text-5xl"
          >
            陈<span className="text-framer">希</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-xs font-bold tracking-[0.2em] text-[#a78bfa] uppercase"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Arc Active Content - Fades in */}
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="absolute top-[12%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#a78bfa] mb-4">{heroSchool}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
            陈<span className="text-framer">希</span>
          </h2>
          <p className="text-sm md:text-base text-white/40 max-w-lg leading-relaxed">{heroSubtitle}</p>
          <div className="flex gap-3 mt-6 pointer-events-auto">
            <a href="#projects" className="btn-apple btn-apple-primary text-sm">{heroCta1} →</a>
            <a href="#contact" className="btn-apple btn-apple-ghost text-sm">{heroCta2}</a>
          </div>
        </motion.div>

        {/* Main image container */}
        <div className="relative flex items-center justify-center w-full h-full">
          {SECTION_IMAGES.map((section, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              // Circle position
              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // Bottom arc (rainbow) position
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - (spreadAngle / 2);
              const step = spreadAngle / (TOTAL_IMAGES - 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;

              const currentArcAngle = startAngle + (i * step) + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              // Lerp between circle and arc
              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={section.img}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
                label={lang === "zh" ? section.labelZh : section.label}
                color={section.color}
                onClick={() => navigateTo(section.href)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
