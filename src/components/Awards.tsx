"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Awards() {
  const { t: tt } = useT();

  const scholarships = [tt("awards.s1"), tt("awards.s2"), tt("awards.s3"), tt("awards.s4"), tt("awards.s5")];
  const competitions = [tt("awards.c1"), tt("awards.c2"), tt("awards.c3")];
  const honors = [tt("awards.h1"), tt("awards.h2"), tt("awards.h3"), tt("awards.h4"), tt("awards.h5"), tt("awards.h6"), tt("awards.h7"), tt("awards.h8")];

  const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <section id="awards" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("awards.label")} title={tt("awards.title")} />

        {/* ===== Scholarships ===== */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7c3aed] text-xs font-bold">01</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.scholarship")}</h3>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {scholarships.map((s, i) => (
              <motion.span key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{s}</motion.span>
            ))}
          </motion.div>
        </div>

        {/* ===== Competitions ===== */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3b82f6] text-xs font-bold">02</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.competition")}</h3>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {competitions.map((c, i) => (
              <motion.span key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{c}</motion.span>
            ))}
          </motion.div>
        </div>

        {/* ===== Honors ===== */}
        <div className="max-w-5xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xs font-bold">03</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.honor")}</h3>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {honors.map((h, i) => (
              <motion.div key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{h}</motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
