"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

const base = "/images/internship";
const internImgs = [`${base}/intern-1.jpg`, `${base}/intern-2.jpg`, `${base}/intern-3.jpg`, `${base}/intern-4.jpg`];

export default function Experience() {
  const { t: tt } = useT();
  const internship = [{ title: tt("experience.exp1Title"), org: tt("experience.exp1Org"), period: tt("experience.exp1Period"), loc: tt("experience.exp1Loc"), items: [tt("experience.exp1d1"), tt("experience.exp1d2")] }];
  const campus = [
    { title: tt("experience.exp2Title"), org: tt("experience.exp2Org"), period: "2022.09 — 2023.09", loc: "Xiamen", items: [tt("experience.exp2d1"), tt("experience.exp2d2")] },
    { title: tt("experience.exp3Title"), org: tt("experience.exp3Org"), period: "2021.09 — 2023.09", loc: "Xiamen", items: [tt("experience.exp3d1"), tt("experience.exp3d2"), tt("experience.exp3d3")] },
    { title: tt("experience.exp4Title"), org: tt("experience.exp4Org"), period: "2020.10 — 2022.09", loc: "Xiamen", items: [tt("experience.exp4d1"), tt("experience.exp4d2")] },
  ];
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("experience.label")} title={tt("experience.title")} />
        {/* Internship */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7c3aed] text-[10px]font-bold">01</div>
            <div><span className="tag-framer text-xs">{tt("experience.internship")}</span><h3 className="text-base font-bold text-gray-900 mt-1">{tt("experience.internshipTitle")}</h3></div>
          </motion.div>
          {internship.map((e, i) => (
            <motion.div key={e.title} className="card-framer p-7 sm:p-8" variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-base font-bold text-gray-900 mb-1">{e.title}</h3>
              <p className="text-[10px]text-[#7c3aed] font-medium mb-3">{e.org}</p>
              <div className="flex gap-4 text-[10px]text-gray-400 mb-5"><span className="flex items-center gap-1"><FiClock size={10}/>{e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/>{e.loc}</span></div>
              <ul className="space-y-3 text-sm text-gray-500 leading-relaxed">{e.items.map((d,j) => <li key={j} className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/50 shrink-0"/>{d}</li>)}</ul>
            </motion.div>
          ))}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {internImgs.map((src, i) => (
              <motion.div key={i} className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 hover:border-[#8b5cf6]/40 transition-colors cursor-pointer" whileHover={{ scale: 1.02 }}>
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Campus */}
        <div className="max-w-5xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3b82f6] text-[10px]font-bold">02</div>
            <div><span className="tag-framer tag-framer-muted text-xs">{tt("experience.campus")}</span><h3 className="text-base font-bold text-gray-900 mt-1">{tt("experience.campusTitle")}</h3></div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {campus.map((e, i) => (
              <motion.div key={e.title} className="card-framer p-7 flex flex-col" variants={item}>
                <h3 className="text-base font-bold text-gray-900 mb-1">{e.title}</h3>
                <p className="text-[10px]text-gray-400 mb-3">{e.org}</p>
                <div className="flex gap-3 text-[10px]text-gray-400 mb-4"><span className="flex items-center gap-1"><FiClock size={10}/>{e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/>{e.loc}</span></div>
                <ul className="space-y-2 text-sm text-gray-500 leading-relaxed flex-1">{e.items.map((d,j) => <li key={j} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#3b82f6]/50 shrink-0"/>{d}</li>)}</ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
