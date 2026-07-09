"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stats = [
  { v: "90.48", u: "/100", l: "Master GPA", s: "Top 6%" },
  { v: "5", u: " papers", l: "Publications", s: "Nature sub-journal" },
  { v: "3", u: "", l: "Patents", s: "Invention + Utility" },
  { v: "10+", u: "", l: "Awards", s: "University+" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="About" title="Marine Engineering Researcher" />
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div className="space-y-5 text-white/45 leading-relaxed" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p>Currently pursuing a Master's in <strong className="text-white/80 font-semibold">Hydraulic Engineering at Ocean University of China (985)</strong>, specializing in <strong className="text-[#a78bfa] font-semibold">CFD numerical simulation</strong> and <strong className="text-[#a78bfa] font-semibold">fluid-structure interaction</strong> for marine engineering.</p>
            <p>Graduated from Jimei University with a bachelor's in Port & Coastal Engineering, ranking <strong className="text-white/80 font-semibold">top 5% (2/46)</strong>. Currently maintaining <strong className="text-white/80 font-semibold">top 6% (3/34)</strong> in graduate studies with a National Scholarship.</p>
            <p>Proficient in <strong className="text-white/80 font-semibold">Python, STAR-CCM+, MATLAB</strong> for engineering simulation, with extensive experience in hydrodynamic analysis and underwater acoustic signal processing.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-3" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            {stats.map((s, i) => (
              <motion.div key={s.l} className="card-framer p-7 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="text-[2.5rem] font-black text-white tracking-tight">{s.v}<span className="text-lg text-white/15 font-medium ml-0.5">{s.u}</span></div>
                <div className="text-[10px] text-white/25 font-semibold uppercase tracking-wider mt-2">{s.l}</div>
                <div className="text-[10px] text-white/10 mt-1">{s.s}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
