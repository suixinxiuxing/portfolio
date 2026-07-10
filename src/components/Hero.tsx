"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { useT } from "@/i18n/LanguageContext";

const cards = [
  { id: "about", href: "#about", label: "About", labelZh: "关于", img: "https://picsum.photos/seed/about/400/500", color: "#8b5cf6" },
  { id: "education", href: "#education", label: "Education", labelZh: "教育", img: "https://picsum.photos/seed/education/400/500", color: "#7c3aed" },
  { id: "experience", href: "#experience", label: "Experience", labelZh: "经历", img: "https://picsum.photos/seed/experience/400/500", color: "#6366f1" },
  { id: "projects", href: "#projects", label: "Projects", labelZh: "项目", img: "https://picsum.photos/seed/projects/400/500", color: "#3b82f6" },
  { id: "research", href: "#research", label: "Research", labelZh: "科研", img: "https://picsum.photos/seed/research/400/500", color: "#06b6d4" },
  { id: "skills", href: "#skills", label: "Skills", labelZh: "技能", img: "https://picsum.photos/seed/skills/400/500", color: "#0891b2" },
  { id: "contact", href: "#contact", label: "Contact", labelZh: "联系", img: "https://picsum.photos/seed/contact/400/500", color: "#0e7490" },
];

// Scatter positions (random but deterministic)
const scatterPositions = [
  { x: 50, y: 80, r: -15 }, { x: 780, y: 60, r: 12 }, { x: 200, y: 420, r: -8 },
  { x: 850, y: 350, r: 18 }, { x: 400, y: 100, r: -22 }, { x: 650, y: 450, r: 10 },
  { x: 100, y: 250, r: -5 },
];

export default function Hero() {
  const { t: tt, lang } = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [mouseX, setMouseX] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Phase gates
  const phase1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);    // scatter fades
  const phase2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);  // line appears
  const phase3 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);   // circle forms
  const phase4 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]); // arc forms
  const finalText = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  // Circle SVG ring
  const circleRadius = useTransform(scrollYProgress, [0.2, 0.45], [300, 200]);
  const circleRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 360]);
  const ringOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.55, 0.7], [0, 1, 1, 0]);
  const ringDash = useTransform(scrollYProgress, [0.2, 0.4], [1256, 0]);

  // Arc spread
  const arcY = useTransform(scrollYProgress, [0.35, 0.6], [0, -60]);
  const arcSpread = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const arcOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  // Background morph
  const bgGradient = useTransform(scrollYProgress, [0, 0.4, 0.7], ["#0a0a0a", "#0f0f14", "#0a0a0a"]);

  const toggleFlip = (id: string) => {
    setFlipped(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  return (
    <div ref={containerRef} className="relative" style={{ height: "450vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Dynamic bg */}
        <motion.div className="absolute inset-0" style={{ background: bgGradient }} />
        <div className="absolute inset-0 bg-dots-dark opacity-20" />

        {/* Orbs */}
        <motion.div className="absolute w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[150px] top-[-100px] left-[-150px]" style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.08, 0.03]) }} />
        <motion.div className="absolute w-[400px] h-[400px] bg-[#06b6d4] rounded-full blur-[120px] bottom-[-80px] right-[-100px]" style={{ opacity: useTransform(scrollYProgress, [0.2, 0.6], [0.05, 0.02]) }} />

        {/* ===== Phase 1: Scattered Cards ===== */}
        <motion.div className="absolute inset-0" style={{ opacity: phase1 }}>
          {cards.map((card, i) => {
            const pos = scatterPositions[i];
            return (
              <motion.a
                key={card.id}
                href={card.href}
                className="absolute w-[140px] h-[180px] sm:w-[160px] sm:h-[210px] rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  left: pos.x,
                  top: pos.y,
                  rotate: pos.r,
                  x: useTransform(scrollYProgress, [0, 0.15], [0, pos.x > 400 ? 80 : -80]),
                  y: useTransform(scrollYProgress, [0, 0.15], [0, pos.y > 300 ? -60 : 60]),
                }}
                onClick={(e) => { e.preventDefault(); document.querySelector(card.href)?.scrollIntoView({ behavior: "smooth" }); }}
              >
                <div className="w-full h-full relative" style={{ perspective: "800px" }}>
                  <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{ rotateY: flipped.has(card.id) ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25,0.1,0.25,1] }}
                    onClick={(e) => { e.stopPropagation(); toggleFlip(card.id); }}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.06]">
                      <img src={card.img} alt={card.label} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{lang === "zh" ? card.labelZh : card.label}</span>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden flex items-center justify-center p-4 text-center" style={{ background: card.color, transform: "rotateY(180deg)" }}>
                      <p className="text-white text-sm font-bold">→ {lang === "zh" ? card.labelZh : card.label}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ===== Phase 2: Line → Circle ===== */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: useTransform(scrollYProgress, [0.08, 0.2], [0, 1]) }}>
          {/* SVG rings */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <motion.circle
              cx="500" cy="300" r={200}
              fill="none" stroke="url(#heroGrad1)" strokeWidth="1.5"
              strokeDasharray="1256"
              style={{ strokeDashoffset: ringDash, opacity: ringOpacity }}
            />
            <motion.circle
              cx="500" cy="300" r={260}
              fill="none" stroke="url(#heroGrad2)" strokeWidth="0.5"
              opacity={0.3}
              style={{ rotate: circleRotate }}
            />
            <motion.circle
              cx="500" cy="300" r="280"
              fill="none" stroke="url(#heroGrad3)" strokeWidth="0.5"
              opacity={0.15}
              style={{ rotate: useTransform(scrollYProgress, [0.2, 0.6], [360, 0]) }}
            />
            <defs>
              <linearGradient id="heroGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="50%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
              <linearGradient id="heroGrad2" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
              <linearGradient id="heroGrad3" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Phase 2 cards moving into circle */}
        <div className="absolute inset-0 pointer-events-none">
          {cards.map((card, i) => {
            const angle = (i / cards.length) * Math.PI * 2 - Math.PI / 2;
            const cx = 500, cy = 300, r = 180;
            const targetX = cx + Math.cos(angle) * r;
            const targetY = cy + Math.sin(angle) * r;
            const pos = scatterPositions[i];
            return (
              <motion.a
                key={`c-${card.id}`}
                href={card.href}
                className="absolute w-[100px] h-[130px] sm:w-[120px] sm:h-[150px] rounded-xl overflow-hidden pointer-events-auto cursor-pointer shadow-xl shadow-black/40"
                style={{
                  left: useTransform(scrollYProgress, [0.08, 0.35], [pos.x, targetX - 60]),
                  top: useTransform(scrollYProgress, [0.08, 0.35], [pos.y, targetY - 75]),
                  rotate: useTransform(scrollYProgress, [0.08, 0.35], [pos.r, 0]),
                  scale: useTransform(scrollYProgress, [0.08, 0.35], [1, 0.75]),
                  opacity: useTransform(scrollYProgress, [0.08, 0.2, 0.35], [0, 1, 1]),
                  zIndex: 10,
                }}
                onClick={(e) => { e.preventDefault(); document.querySelector(card.href)?.scrollIntoView({ behavior: "smooth" }); }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/[0.08]">
                  <img src={card.img} alt={card.label} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />
                  <div className="absolute bottom-2 left-2 right-2 text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-wider">
                    {lang === "zh" ? card.labelZh : card.label}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Phase 3: Circle → Arc at bottom */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: arcOpacity }}>
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-end gap-3 sm:gap-5" style={{ perspective: "800px" }}>
            {cards.map((card, i) => {
              const total = cards.length - 1;
              const centerX = total / 2;
              const arcAngle = (i - centerX) * 12;
              const lift = -Math.abs(i - centerX) * 15 + 20;
              return (
                <motion.a
                  key={`a-${card.id}`}
                  href={card.href}
                  className="w-[90px] h-[120px] sm:w-[110px] sm:h-[150px] rounded-xl overflow-hidden pointer-events-auto cursor-pointer shadow-2xl shadow-black/60 flex-shrink-0"
                  style={{
                    rotateX: 20,
                    rotateY: arcAngle,
                    y: lift,
                    scale: useTransform(arcSpread, [0, 1], [0.5, 1]),
                    opacity: useTransform(arcSpread, [0, 0.5], [0, 1]),
                    borderColor: card.color,
                  }}
                  onClick={(e) => { e.preventDefault(); document.querySelector(card.href)?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <img src={card.img} alt={card.label} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-wider">
                    {lang === "zh" ? card.labelZh : card.label}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-full" style={{ background: card.color }} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* ===== Final: Text + CTAs ===== */}
        <motion.div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none" style={{ opacity: finalText }}>
          <div className="text-center px-6">
            <motion.div style={{ y: useTransform(scrollYProgress, [0.5, 0.7], [40, 0]) }}>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#a78bfa] mb-6">
                {tt("hero.school")}
              </p>
              <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.04em] text-white mb-4">
                陈<span className="text-framer">希</span>
              </h1>
              <p className="text-sm sm:text-base text-white/20 font-mono mb-8">
                {tt("hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
                <a href="#projects" className="btn-apple btn-apple-primary text-sm">{tt("hero.cta1")} →</a>
                <a href="#contact" className="btn-apple btn-apple-ghost text-sm">{tt("hero.cta2")}</a>
                <span className="w-px h-6 bg-white/[0.06] hidden sm:block" />
                <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"><FiGithub size={16} /></a>
                <a href="mailto:yinnixingchen@163.com" className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"><FiMail size={16} /></a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20" style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}>
          <span className="text-[10px] text-white/15 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div className="w-4 h-7 rounded-full border border-white/10 flex justify-center pt-1" animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><div className="w-1 h-1.5 rounded-full bg-white/20" /></motion.div>
        </motion.div>
      </div>
    </div>
  );
}
