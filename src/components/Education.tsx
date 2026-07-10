"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Education() {
  const { t: tt } = useT();
  const edu = [
    { school: tt("education.school1"), degree: tt("education.degree1"), period: tt("education.period1"), location: tt("education.loc1"), gpa: tt("education.gpa1"), rank: tt("education.rank1"), awards: (tt("education.awards1") as unknown) as string[], current: true },
    { school: tt("education.school2"), degree: tt("education.degree2"), period: tt("education.period2"), location: tt("education.loc2"), gpa: tt("education.gpa2"), rank: tt("education.rank2"), awards: (tt("education.awards2") as unknown) as string[], current: false },
  ];

  return (
    <section id="education" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("education.label")} title={tt("education.title")} />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-gray-100 hidden sm:block" />
          <div className="space-y-12">
            {edu.map((e, i) => (
              <motion.div key={e.school} className="relative pl-14 sm:pl-16" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <div className="absolute left-[14px] top-2 w-[11px] h-[11px] rounded-full bg-[#8b5cf6] border-[2px] border-[#fafafa] ring-1 ring-[#8b5cf6]/20 hidden sm:block" />
                <div className="card-framer p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div><h3 className="text-lg font-bold text-gray-900">{e.school}</h3><p className="text-xs text-[#7c3aed] font-medium">{e.degree}</p></div>
                    {e.current && <span className="tag-framer">{tt("education.current")}</span>}
                  </div>
                  <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 mb-4"><span className="flex items-center gap-1"><FiClock size={10}/> {e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/> {e.location}</span></div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg font-bold text-gray-900">{e.gpa}</div><div className="text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">{tt("education.gpaLabel")}</div></div>
                    <div className="bg-purple-50 rounded-xl p-3 text-center"><div className="text-base font-bold text-[#7c3aed]">{e.rank}</div><div className="text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">{tt("education.rankLabel")}</div></div>
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
