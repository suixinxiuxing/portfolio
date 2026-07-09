"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t: tt } = useT();
  const exp = [
    { title: tt("experience.exp1Title"), org: tt("experience.exp1Org"), period: tt("experience.exp1Period"), loc: tt("experience.exp1Loc"), type: "internship", items: [tt("experience.exp1d1"), tt("experience.exp1d2")] },
    { title: tt("experience.exp2Title"), org: tt("experience.exp2Org"), period: "2022.09 — 2023.09", loc: "Xiamen", type: "campus", items: [tt("experience.exp2d1"), tt("experience.exp2d2")] },
    { title: tt("experience.exp3Title"), org: tt("experience.exp3Org"), period: "2021.09 — 2023.09", loc: "Xiamen", type: "campus", items: [tt("experience.exp3d1"), tt("experience.exp3d2"), tt("experience.exp3d3")] },
    { title: tt("experience.exp4Title"), org: tt("experience.exp4Org"), period: "2020.10 — 2022.09", loc: "Xiamen", type: "campus", items: [tt("experience.exp4d1"), tt("experience.exp4d2")] },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("experience.label")} title={tt("experience.title")} />
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {exp.map((e, i) => (
            <motion.div key={e.title + e.period} className="card-framer p-7 flex flex-col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium mb-2 ${e.type === "internship" ? "tag-framer" : "tag-framer tag-framer-muted"}`}>{e.type === "internship" ? tt("experience.internship") : tt("experience.campus")}</span>
              <h3 className="text-base font-bold text-white mb-0.5">{e.title}</h3>
              <p className="text-xs text-white/25 mb-3">{e.org}</p>
              <div className="flex gap-3 text-[10px] text-white/15 mb-4"><span className="flex items-center gap-1"><FiClock size={10}/>{e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/>{e.loc}</span></div>
              <ul className="space-y-2 text-sm text-white/35 leading-relaxed flex-1">{e.items.map((d,j) => <li key={j} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b5cf6]/50 shrink-0"/>{d}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
