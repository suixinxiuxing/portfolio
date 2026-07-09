"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t: tt, lang } = useT();
  const groups = [
    { name: tt("skills.g1"), skills: [{n:"STAR-CCM+",l:90},{n:tt("skills.sCFD"),l:85},{n:"AutoCAD",l:80},{n:"Revit",l:70},{n:"ArcGIS",l:65}] },
    { name: tt("skills.g2"), skills: [{n:"Python",l:85},{n:"MATLAB",l:80},{n:"SQL",l:75},{n:tt("skills.sData"),l:85}] },
    { name: tt("skills.g3"), skills: [{n:tt("skills.sEng"),l:80},{n:tt("skills.sWriting"),l:82},{n:tt("skills.sPresent"),l:75}] },
    { name: tt("skills.g4"), skills: [{n:tt("skills.sDoc"),l:88},{n:tt("skills.sMgmt"),l:78},{n:tt("skills.sSocial"),l:75},{n:"MS Office",l:90}] },
  ];
  const scroll = ["STAR-CCM+",tt("skills.sCFD"),"Python","MATLAB","AutoCAD","SQL",tt("skills.sEng"),tt("skills.sData"),"Revit","ArcGIS","MS Office"];

  return (
    <section id="skills" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("skills.label")} title={tt("skills.title")} />
        <div className="max-w-3xl mx-auto mb-16 overflow-hidden rounded-2xl glass-heavy py-5">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...scroll,...scroll].map((t,i) => <span key={i} className="text-sm font-semibold text-[#a78bfa] bg-[#8b5cf6]/[0.06] px-5 py-2.5 rounded-full border border-[#8b5cf6]/10 shrink-0">{t}</span>)}
          </div>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          {groups.map(g => (
            <motion.div key={g.name} className="card-framer p-7" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">{g.name}</h3>
              <div className="space-y-4">{g.skills.map(s => (
                <div key={s.n}><div className="flex justify-between text-[10px] mb-1.5"><span className="text-white/35 font-medium">{s.n}</span><span className="text-white/15 font-mono">{s.l}%</span></div>
                <div className="progress-track"><motion.div className="progress-fill" initial={{ width: 0 }} whileInView={{ width: `${s.l}%` }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}/></div></div>
              ))}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
