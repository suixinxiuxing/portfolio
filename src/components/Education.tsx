"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const edu = [
  { school: "Ocean University of China (985)", degree: "M.S. Hydraulic Engineering", period: "2024.08 — Present", location: "Qingdao, Shandong", gpa: "90.48 / 100", rank: "Rank 3/34 (Top 6%)", awards: ["National Scholarship", "Outstanding Graduate Student", "Academic Scholarship"], current: true },
  { school: "Jimei University (Prov. Double First-Class)", degree: "B.S. Port & Coastal Engineering", period: "2020.10 — 2024.06", location: "Xiamen, Fujian", gpa: "GPA 3.86 · Avg 85.02", rank: "Rank 2/46 (Top 5%)", awards: ["Chen Jiageng Scholarship", "First-class Scholarship", "Outstanding Graduate", "Excellent Student Leader"], current: false },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Education" title="Academic Journey" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-white/[0.04] hidden sm:block" />
          <div className="space-y-12">
            {edu.map((e, i) => (
              <motion.div key={e.school} className="relative pl-14 sm:pl-16" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}>
                <div className="absolute left-[14px] top-2 w-[11px] h-[11px] rounded-full bg-[#8b5cf6] border-[2px] border-[#0a0a0a] ring-1 ring-white/10 hidden sm:block" />
                <div className="card-framer p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div><h3 className="text-lg font-bold text-white">{e.school}</h3><p className="text-xs text-[#a78bfa] font-medium">{e.degree}</p></div>
                    {e.current && <span className="tag-framer">Current</span>}
                  </div>
                  <div className="flex flex-wrap gap-4 text-[10px] text-white/25 mb-4"><span className="flex items-center gap-1"><FiClock size={10}/> {e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/> {e.location}</span></div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/[0.015] rounded-xl p-3 text-center"><div className="text-lg font-bold text-white">{e.gpa}</div><div className="text-[9px] text-white/20 uppercase tracking-wider mt-0.5">GPA / Average</div></div>
                    <div className="bg-[#8b5cf6]/[0.04] rounded-xl p-3 text-center"><div className="text-base font-bold text-[#a78bfa]">{e.rank}</div><div className="text-[9px] text-white/20 uppercase tracking-wider mt-0.5">Class Rank</div></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">{e.awards.map(a => <span key={a} className="tag-framer tag-framer-muted text-[10px]">{a}</span>)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
