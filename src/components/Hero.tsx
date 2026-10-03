"use client";

import Image from "next/image";
import GazePortrait from "./GazePortrait";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { useT } from "@/i18n/LanguageContext";
import { researchCounts } from "@/data/resume-research";

type ProfileCard = {
  label: string;
  title: string;
  section: string;
  image: string;
};

const cards: ProfileCard[] = [
  { label: "PROFILE", title: "关于我", section: "about", image: "avatar.jpg" },
  { label: "SELECTED WORK", title: "项目实践", section: "projects", image: "images/projects/溯海行舟/ocean-cleaner-main.png" },
  { label: "RESEARCH", title: "科研成果", section: "research", image: "images/projects/精卫听音/ocean-ear-1.jpg" },
  { label: "EXPERIENCE", title: "实习经历", section: "experience", image: "images/internship/intern-1.jpg" },
  { label: "EDUCATION", title: "教育经历", section: "education", image: "images/internship/intern-2.jpg" },
  { label: "RECOGNITION", title: "荣誉奖励", section: "awards", image: "images/awards/scholarship-national-2025.jpg" },
];

function scrollToSection(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { lang, t } = useT();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.8 });
  const copyY = useTransform(scrollYProgress, [0, 0.18], [0, reduceMotion ? 0 : -78]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.16], [1, reduceMotion ? 1 : 0.28]);
  const portraitY = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : -36]);
  const railY = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : -18]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  return (
    <section id="hero" className="morph-hero" onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(-180); pointerY.set(-180); }}>
      <motion.div className="morph-spotlight" style={{ left: springX, top: springY }} aria-hidden="true" />
      <div className="morph-grid" aria-hidden="true" />
      <div className="morph-shell">
        <motion.div className="morph-copy" style={{ y: copyY, opacity: copyOpacity }}>
          <p className="morph-eyebrow"><span className="morph-status-dot" /> CHEN XI · PORTFOLIO</p>
          <h1>{lang === "zh" ? "陈希" : "Chen Xi"}<span>{lang === "zh" ? "让复杂问题变得清晰" : "Making complex problems clear"}</span></h1>
          <p className="morph-degree">{lang === "zh" ? "中国海洋大学 · 水利工程硕士" : "Ocean University of China · M.S. Hydraulic Engineering"}</p>
          <p className="morph-description">{lang === "zh" ? "从需求调研到数据验证，把工程洞察转化为可落地的方案。" : "From discovery to data validation, turning engineering insight into work that moves."}</p>
          <div className="morph-tags">{(lang === "zh" ? ["需求调研", "数据分析", "跨团队协作", "技术理解"] : ["Needs research", "Data analysis", "Cross-team collaboration", "Technical fluency"]).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="morph-actions"><a className="morph-primary-action" href="#projects">{t("hero.cta1")}<FiArrowUpRight /></a><a className="morph-secondary-action" href="#contact">{t("hero.cta2")}<FiArrowUpRight /></a></div>
          <div className="morph-stats" aria-label={lang === "zh" ? "个人概览" : "Profile overview"}><div><strong>{String(researchCounts.papers).padStart(2, "0")}</strong><span>{lang === "zh" ? "篇论文" : "Papers"}</span></div><div><strong>{String(researchCounts.patents).padStart(2, "0")}</strong><span>{lang === "zh" ? "项专利与申请" : "Patents & applications"}</span></div><div><strong>3/34</strong><span>{lang === "zh" ? "专业排名" : "Major rank"}</span></div></div>
        </motion.div>

        <motion.div className="morph-portrait-wrap" style={{ y: portraitY }}>
          <div className="morph-orbit morph-orbit-one" aria-hidden="true" /><div className="morph-orbit morph-orbit-two" aria-hidden="true" />
          <div className="morph-portrait-label" aria-hidden="true">01 / PROFILE</div>
          <motion.div className="morph-portrait" initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}><GazePortrait label={lang === "zh" ? "陈希插画肖像" : "Illustrated portrait of Chen Xi"} /></motion.div>
          <div className="morph-portrait-caption"><span>{lang === "zh" ? "水利工程 · 海洋工程" : "Hydraulic & Ocean Engineering"}</span><span>QINGDAO, CHINA</span></div><div className="morph-scroll-mark" aria-hidden="true">SCROLL / 01</div>
        </motion.div>
      </div>

      <motion.div className="morph-card-rail" style={{ y: railY }}><div className="morph-rail-heading"><span>{lang === "zh" ? "浏览我的档案" : "Explore my profile"}</span><span>06 MODULES</span></div><div className="morph-card-track">
        {cards.map((card, index) => <motion.button type="button" className="morph-card" key={card.section} onClick={() => scrollToSection(card.section)} initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.18 + index * 0.07, duration: 0.55 }} aria-label={`${lang === "zh" ? card.title : card.label} - ${card.label}`}>
          <span className="morph-card-inner"><span className="morph-card-face morph-card-front"><Image src={card.image} fill sizes="220px" alt="" /><span className="morph-card-shade" /><span className="morph-card-index">0{index + 1}</span><span className="morph-card-title">{lang === "zh" ? card.title : card.label}</span></span><span className="morph-card-face morph-card-back"><span className="morph-card-label">{card.label}</span><strong>{lang === "zh" ? card.title : card.label}</strong><span className="morph-card-open">OPEN <FiExternalLink /></span></span></span>
        </motion.button>)}
      </div></motion.div>
      <a className="morph-scroll-link" href="#about"><FiArrowDown />{lang === "zh" ? "了解我的专业与经历" : "Explore my background"}</a>
    </section>
  );
}
