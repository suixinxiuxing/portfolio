"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Research() {
  const { t: tt } = useT();
  const patents = [
    { title: tt("research.pat1"), id: "CN120954199A", type: tt("research.pat1Type") },
    { title: tt("research.pat2"), id: "ZL2023 2 0135062.8", type: tt("research.pat2Type") },
    { title: tt("research.pat3"), id: "ZL 2023 3 0062702.2", type: tt("research.pat3Type") },
  ];
  const papers = [
    { journal: tt("research.paper1J"), year: "2025", vol: "Vol. 37", role: tt("research.paper1R"), hl: true },
    { journal: tt("research.paper2J"), year: "2025", vol: "Vol. 37", role: tt("research.paper2R"), hl: true },
    { journal: tt("research.paper3J"), year: "2025", role: tt("research.paper3R"), hl: false },
    { journal: tt("research.paper4J"), year: "2026", role: tt("research.paper4R"), hl: false },
    { journal: tt("research.paper5J"), year: "2025", role: tt("research.paper5R"), hl: false },
  ];
  return (
    <section id="research" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("research.label")} title={tt("research.title")} />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">{tt("research.patentsTitle")}</h3>
            <div className="space-y-3">{patents.map((p,i) => (
              <motion.div key={p.id} className="card-framer p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
                <span className="tag-framer text-xs mb-2 inline-block">{p.type}</span>
                <p className="text-base text-gray-600 leading-relaxed font-medium">{p.title}</p>
                <p className="text-xs text-gray-400 font-mono mt-1.5">{p.id}</p>
              </motion.div>
            ))}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">{tt("research.papersTitle")}</h3>
            <div className="space-y-3">{papers.map((p,i) => (
              <motion.div key={p.journal+i} className={`card-framer p-5 ${p.hl ? "border-l-2 border-l-[#8b5cf6]" : ""}`} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
                <span className={`text-xs font-medium mb-2 inline-block px-2 py-0.5 rounded-full ${p.hl ? "tag-framer" : "tag-framer tag-framer-muted"}`}>{p.year}</span>
                <p className="text-base text-gray-500 leading-relaxed">{p.journal}</p>
                <div className="flex gap-3 text-xs text-gray-400 font-mono mt-1.5">{p.vol && <span>{p.vol}</span>}<span>{p.role}</span></div>
              </motion.div>
            ))}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
