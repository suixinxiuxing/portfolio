"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Projects() {
  const { t: tt } = useT();
  const projects = [
    { title: tt("projects.p1Title"), sub: tt("projects.p1Sub"), role: tt("projects.p1Role"), period: "2021.10 — 2023.06", techs: ["STAR-CCM+", "CFD", "Structural"], details: [tt("projects.p1d1"), tt("projects.p1d2")], award: tt("projects.p1Award") },
    { title: tt("projects.p2Title"), sub: tt("projects.p2Sub"), role: tt("projects.p2Role"), period: "2022.03 — 2022.07", techs: ["Python", "Signal", "Acoustics"], details: [tt("projects.p2d1"), tt("projects.p2d2")], award: tt("projects.p2Award") },
  ];
  return (
    <section id="projects" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("projects.label")} title={tt("projects.title")} />
        <motion.div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          {projects.map(p => (
            <motion.div key={p.title} className="card-framer p-7 sm:p-8 flex flex-col" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <div className="flex items-start justify-between mb-3"><h3 className="text-2xl font-bold text-gray-900">{p.title}</h3><span className="text-xs text-gray-400 font-mono mt-1 shrink-0">{p.period}</span></div>
              <p className="text-[#7c3aed]/70 text-sm font-medium mb-4">{p.sub}</p>
              <div className="flex flex-wrap gap-2 mb-4"><span className="tag-framer">{p.role}</span>{p.award && <span className="tag-framer tag-framer-muted">🏆 {p.award}</span>}</div>
              <div className="flex flex-wrap gap-1.5 mb-4">{p.techs.map(t => <span key={t} className="tag-framer tag-framer-muted text-xs">{t}</span>)}</div>
              <ul className="space-y-2 text-base text-gray-500 leading-relaxed flex-1">{p.details.map((d,j) => <li key={j} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b5cf6]/50 shrink-0"/>{d}</li>)}</ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
