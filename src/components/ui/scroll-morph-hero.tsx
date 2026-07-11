"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface CardData {
  id: string;
  href: string;
  labelEn: string;
  labelZh: string;
  img: string;
  color: string;
}

interface ScrollMorphHeroProps {
  lang: "zh" | "en";
  heroSchool: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;
}

export default function ScrollMorphHero({ lang, heroSchool, heroSubtitle, heroCta1, heroCta2 }: ScrollMorphHeroProps) {
  const pathname = usePathname();
  const basePath = pathname && pathname.startsWith("/portfolio") ? "/portfolio" : "";
  const [flipped, setFlipped] = useState<string | null>(null);

  const navigateTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const cards: CardData[] = [
    { id: "about", href: "#about", labelEn: "About", labelZh: "关于", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80", color: "#8b5cf6" },
    { id: "education", href: "#education", labelEn: "Education", labelZh: "教育", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80", color: "#7c3aed" },
    { id: "experience", href: "#experience", labelEn: "Experience", labelZh: "经历", img: `${basePath || "/portfolio"}/images/internship/图片6.jpg`, color: "#6366f1" },
    { id: "projects", href: "#projects", labelEn: "Projects", labelZh: "项目", img: `${basePath || "/portfolio"}/images/projects/溯海行舟/微塑料收集三体船.png`, color: "#3b82f6" },
    { id: "research", href: "#research", labelEn: "Research", labelZh: "科研", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80", color: "#06b6d4" },
    { id: "skills", href: "#skills", labelEn: "Skills", labelZh: "技能", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80", color: "#0891b2" },
    { id: "contact", href: "#contact", labelEn: "Contact", labelZh: "联系", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80", color: "#0e7490" },
  ];

  return (
    <div className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden">
      {/* Subtle bg dots */}
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#e5e7eb 0.5px, transparent 0.5px)", backgroundSize: "24px 24px", opacity: 0.5 }} />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pb-32">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8"
        >
          <img src={`${basePath || "/portfolio"}/avatar.jpg`} alt="陈希" className="w-full h-full object-cover object-[center_23%]" />
        </motion.div>

        {/* School */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4"
        >
          {heroSchool}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-3"
        >
          陈<span className="text-framer">希</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-500 max-w-lg text-center leading-relaxed mb-8"
        >
          {heroSubtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <a href="#projects" className="px-10 py-5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors font-semibold text-lg">
            {heroCta1} →
          </a>
          <a href="#contact" className="px-10 py-5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors text-lg font-medium">
            {heroCta2}
          </a>
        </motion.div>
      </div>

      {/* Bottom horizontal card strip */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center gap-4 px-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.06 }}
              className="w-[120px] h-[170px] sm:w-[140px] sm:h-[200px] cursor-pointer"
              style={{ perspective: "800px" }}
              onClick={() => navigateTo(card.href)}
              onMouseEnter={() => setFlipped(card.id)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                animate={{ rotateY: flipped === card.id ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                  <img src={card.img} alt={card.labelEn} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{lang === "zh" ? card.labelZh : card.labelEn}</span>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center p-3" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: card.color }}>
                  <span className="text-white text-xs font-bold text-center">→ {lang === "zh" ? card.labelZh : card.labelEn}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
