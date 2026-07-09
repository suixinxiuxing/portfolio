"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  { title: "Ocean Cleaner", sub: "Clean-energy autonomous trimaran for marine microplastic collection", role: "Deputy Lead", period: "2021.10 — 2023.06", techs: ["STAR-CCM+", "CFD", "Structural Design"], details: ["Led power & collection system design, optimized pump efficiency and hull resistance via CFD simulation.", "Authored project proposal; won university 'Challenge Cup' 3rd prize."], award: "Challenge Cup · 3rd Prize" },
  { title: "Ocean Ear", sub: "Underwater noise monitoring & early warning for marine construction", role: "Core Member", period: "2022.03 — 2022.07", techs: ["Python", "Signal Processing", "Acoustics"], details: ["Applied Python for underwater acoustic denoising & spectral analysis; built noise threshold model for ecological assessment.", "Researched global ocean noise regulations; delivered mid-term report independently."], award: "Internet+ · Gold (School) + Silver (Province)" },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25,0.1,0.25,1] } } };

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Projects" title="Innovation & Research" />
        <motion.div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {projects.map(p => (
            <motion.div key={p.title} className="card-framer p-7 sm:p-8 flex flex-col" variants={item}>
              <div className="flex items-start justify-between mb-3"><h3 className="text-xl font-bold text-white">{p.title}</h3><span className="text-[10px] text-white/15 font-mono mt-1 shrink-0">{p.period}</span></div>
              <p className="text-[#a78bfa]/70 text-sm font-medium mb-4">{p.sub}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag-framer">{p.role}</span>
                {p.award && <span className="tag-framer tag-framer-muted">🏆 {p.award}</span>}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">{p.techs.map(t => <span key={t} className="tag-framer tag-framer-muted text-[10px]">{t}</span>)}</div>
              <ul className="space-y-2 text-sm text-white/35 leading-relaxed flex-1">{p.details.map((d,j) => <li key={j} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b5cf6]/50 shrink-0"/>{d}</li>)}</ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
