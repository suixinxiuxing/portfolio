"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { useT } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t: tt } = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Morph values driven by scroll progress
  const circleScale = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const circleOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const scatteredOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scatteredScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const scatteredY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const gradientAngle = useTransform(scrollYProgress, [0, 1], [135, 360]);
  const nameX1 = useTransform(scrollYProgress, [0, 0.3], [-60, 0]);
  const nameX2 = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const arcDash = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);
  const arcRotate = useTransform(scrollYProgress, [0.35, 1], [0, 360]);
  const revealScale = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const revealOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#0a0a0a", "#0f0f14", "#0a0a0a"]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "1200px" }}>
        {/* Dynamic background */}
        <motion.div className="absolute inset-0" style={{ background: bgColor }} />
        <div className="absolute inset-0 bg-dots-dark opacity-30" />

        {/* Gradient orbs */}
        <motion.div className="orb w-[600px] h-[600px] bg-[#8b5cf6] top-[-80px] left-[-200px]" style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.04]) }} />
        <motion.div className="orb w-[400px] h-[400px] bg-[#3b82f6] bottom-[-60px] right-[-120px]" style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.08, 0.03]) }} />

        {/* ===== STAGE 0: Scattered text phase ===== */}
        <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: scatteredOpacity, scale: scatteredScale, y: scatteredY }}>
          {/* Floating text fragments scattered around */}
          <motion.div className="absolute text-8xl font-black text-white/5 select-none top-[15%] left-[10%]" style={{ x: nameX1 }}>陈</motion.div>
          <motion.div className="absolute text-8xl font-black text-white/5 select-none top-[12%] right-[15%]" style={{ x: nameX2 }}>希</motion.div>
          <motion.div className="absolute text-3xl font-black text-[#8b5cf6]/15 select-none top-[30%] left-[25%]">Marine</motion.div>
          <motion.div className="absolute text-3xl font-black text-[#3b82f6]/10 select-none top-[28%] right-[30%]">Engineering</motion.div>
          <motion.div className="absolute text-2xl font-mono text-white/5 select-none top-[55%] left-[35%]">CFD</motion.div>
          <motion.div className="absolute text-2xl font-mono text-white/3 select-none top-[60%] right-[25%]">FSI</motion.div>

          {/* Main name and subtitle */}
          <div className="relative z-10 text-center">
            <motion.p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#a78bfa] mb-6">
              {tt("hero.school")}
            </motion.p>
            <motion.h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-white mb-4">
              陈<span className="text-framer">希</span>
            </motion.h1>
            <motion.p className="text-base sm:text-lg text-white/20 font-mono">
              {tt("hero.subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* ===== STAGE 1: Morphing circle ===== */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: circleOpacity }}>
          <motion.div
            className="relative"
            style={{ scale: circleScale }}
          >
            {/* SVG circle ring that grows */}
            <motion.svg width="500" height="500" viewBox="0 0 500 500" className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <motion.circle
                cx="250" cy="250" r="200"
                fill="none"
                stroke="url(#morphGrad)"
                strokeWidth="2"
                strokeDasharray="1256"
                style={{ strokeDashoffset: useTransform(arcDash, [0, 1], [1256, 0]) }}
              />
              <motion.circle
                cx="250" cy="250" r="150"
                fill="none"
                stroke="url(#morphGrad2)"
                strokeWidth="1"
                opacity="0.4"
                style={{ rotate: arcRotate }}
              />
              <defs>
                <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="morphGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Text inside the circle */}
            <motion.div className="text-center relative z-10" style={{ scale: useTransform(circleScale, [0.5, 1], [0, 1]) }}>
              <div className="text-6xl font-black text-white tracking-[-0.04em]">
                陈<span className="text-framer">希</span>
              </div>
              <div className="text-xs font-semibold text-[#a78bfa] mt-4 uppercase tracking-[0.3em]">Portfolio</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ===== STAGE 2: Rainbow arc reveal → Actual content ===== */}
        <motion.div className="absolute inset-0 flex items-center justify-center z-20" style={{ opacity: revealOpacity, scale: revealScale }}>
          <div className="text-center px-6 max-w-4xl">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={scrollYProgress.get() > 0.7 ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#a78bfa] mb-6">
                {tt("hero.school")}
              </p>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-white mb-4">
                陈<span className="text-framer">希</span>
              </h1>
              <p className="text-base sm:text-lg text-white/20 font-mono mb-10">
                {tt("hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="#projects" className="btn-apple btn-apple-primary group">
                  {tt("hero.cta1")} <span className="text-[#8b5cf6] group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </a>
                <a href="#contact" className="btn-apple btn-apple-ghost">{tt("hero.cta2")}</a>
                <span className="w-px h-6 bg-white/[0.06] hidden sm:block" />
                <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"><FiGithub size={18} /></a>
                <a href="mailto:yinnixingchen@163.com" className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"><FiMail size={18} /></a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
