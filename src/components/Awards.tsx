"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

const base = "/images/awards";

const scholarshipImgs = [
  `${base}/scholarship-2021-1-1st.jpg`,
  `${base}/scholarship-chen-jiageng.jpg`,
  `${base}/scholarship-2021-2-2nd.jpg`,
  `${base}/scholarship-2020-1-3rd.jpg`,
  `${base}/scholarship-2020-2-2nd.jpg`,
];

const competitionImgs = [
  `${base}/award-innovation-gold.png`,
  `${base}/award-challenge-cup.jpg`,
];

const honorImgs = [
  `${base}/honor-merit-student-2022.jpg`,
  `${base}/honor-merit-student-2023.jpg`,
  `${base}/honor-student-leader-2021.jpg`,
  `${base}/honor-league-member-2021.jpg`,
  `${base}/honor-league-leader-2022.jpg`,
  `${base}/award-teaching-officer-2021.jpg`,
  `${base}/award-teaching-officer-2022.jpg`,
  `${base}/award-teaching-officer-2024.jpg`,
];

function ImageGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="aspect-[3/4] rounded-lg overflow-hidden cursor-pointer border border-gray-100 hover:border-[#8b5cf6]/40 transition-colors"
            onClick={() => setSelected(src)}
            whileHover={{ scale: 1.03 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelected(null)}><HiX /></button>
            <img src={selected} alt="" className="max-h-[85vh] max-w-full rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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

        {/* Scholarships */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7c3aed] text-xs font-bold">01</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.scholarship")}</h3>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2 mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {scholarships.map((s, i) => <motion.span key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{s}</motion.span>)}
          </motion.div>
          <ImageGallery images={scholarshipImgs} />
        </div>

        {/* Competitions */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3b82f6] text-xs font-bold">02</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.competition")}</h3>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2 mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {competitions.map((c, i) => <motion.span key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{c}</motion.span>)}
          </motion.div>
          <ImageGallery images={competitionImgs} />
        </div>

        {/* Honors */}
        <div className="max-w-5xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xs font-bold">03</div>
            <h3 className="text-lg font-bold text-gray-900">{tt("awards.honor")}</h3>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 gap-2 mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {honors.map((h, i) => <motion.div key={i} className="card-framer px-5 py-3 text-sm text-gray-600 font-medium" variants={item}>{h}</motion.div>)}
          </motion.div>
          <ImageGallery images={honorImgs} />
        </div>
      </div>
    </section>
  );
}
