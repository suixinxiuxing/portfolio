"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const patents = [
  { title: "Unsteady Feature Detection for Floating Marine Structures", id: "CN120954199A", type: "Invention" },
  { title: "Underwater Microplastic Collection Device", id: "ZL2023 2 0135062.8", type: "Utility Model" },
  { title: "Filter Mesh", id: "ZL 2023 3 0062702.2", type: "Design Patent" },
];

const papers = [
  { journal: "Communications Engineering (Nature sub-journal)", year: "2025", vol: "Vol. 37", role: "2nd Author (Advisor 1st)", hl: true },
  { journal: "Physics of Fluids — CAS Q2 · TOP · IF=4.3", year: "2025", vol: "Vol. 37", role: "3rd Author (Advisor 1st)", hl: true },
  { journal: "35th ISOPE Conference (EI-indexed)", year: "2025", role: "1st Author ×1 · 2nd Author ×1", hl: false },
  { journal: "45th OMAE Conference (EI-indexed)", year: "2026", role: "1st Author", hl: false },
  { journal: "10th National CFD Conference (Ship & Ocean)", year: "2025", role: "1st Author", hl: false },
];

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Research" title="Publications & Patents" />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">3 Patents</h3>
            <div className="space-y-3">
              {patents.map((p,i) => (
                <motion.div key={p.id} className="card-framer p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
                  <span className="tag-framer text-[10px] mb-2 inline-block">{p.type}</span>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">{p.title}</p>
                  <p className="text-[10px] text-white/15 font-mono mt-1.5">{p.id}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">5 Papers</h3>
            <div className="space-y-3">
              {papers.map((p,i) => (
                <motion.div key={p.journal+i} className={`card-framer p-5 ${p.hl ? "border-l-2 border-l-[#8b5cf6]" : ""}`} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
                  <span className={`text-[10px] font-medium mb-2 inline-block px-2 py-0.5 rounded-full ${p.hl ? "tag-framer" : "tag-framer tag-framer-muted"}`}>{p.year}</span>
                  <p className="text-sm text-white/40 leading-relaxed">{p.journal}</p>
                  <div className="flex gap-3 text-[10px] text-white/15 font-mono mt-1.5">{p.vol && <span>{p.vol}</span>}<span>{p.role}</span></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
