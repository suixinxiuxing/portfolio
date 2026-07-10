"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
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
    {
      title: tt("research.paper1T"),
      journal: tt("research.paper1J"),
      authors: tt("research.paper1A"),
      role: tt("research.paper1R"),
      year: "2025",
      hl: true,
      link: "https://doi.org/10.1038/s44172-025-00172-0",
    },
    {
      title: tt("research.paper2T"),
      journal: tt("research.paper2J"),
      authors: tt("research.paper2A"),
      role: tt("research.paper2R"),
      year: "2025",
      hl: true,
      link: "https://doi.org/10.1063/5.0266019",
    },
    {
      title: tt("research.paper3T"),
      journal: tt("research.paper3J"),
      role: tt("research.paper3R"),
      year: "2026",
      hl: false,
    },
    {
      title: tt("research.paper4T"),
      journal: tt("research.paper4J"),
      role: tt("research.paper4R"),
      year: "2025",
      hl: false,
    },
    {
      title: tt("research.paper5T"),
      journal: tt("research.paper5J"),
      role: tt("research.paper5R"),
      year: "2025",
      hl: false,
    },
    {
      title: tt("research.paper6T"),
      journal: tt("research.paper6J"),
      role: tt("research.paper6R"),
      year: "2025",
      hl: false,
    },
  ];

  return (
    <section id="research" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("research.label")} title={tt("research.title")} />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Patents */}
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-5">{tt("research.patentsTitle")}</h3>
            <div className="space-y-3">
              {patents.map((p, i) => (
                <motion.div key={p.id} className="card-framer p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <span className="tag-framer text-[10px] mb-2 inline-block">{p.type}</span>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{p.title}</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1.5">{p.id}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Papers */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-5">{tt("research.papersTitle")}</h3>
            <div className="space-y-3">
              {papers.map((p, i) => (
                <motion.div
                  key={p.title + i}
                  className={`card-framer p-5 ${p.hl ? "border-l-2 border-l-[#8b5cf6]" : ""}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className={`text-[10px] font-medium mb-2 inline-block px-2 py-0.5 rounded-full ${p.hl ? "tag-framer" : "tag-framer tag-framer-muted"}`}>
                    {p.year}
                  </span>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-[#8b5cf6] transition-colors leading-relaxed font-medium flex items-start gap-1 group">
                      {p.title}
                      <FiExternalLink size={12} className="mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 text-[#8b5cf6]" />
                    </a>
                  ) : (
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{p.title}</p>
                  )}
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">{p.journal}</p>
                  {p.authors && <p className="text-[10px] text-gray-300 font-mono mt-0.5">{p.authors}</p>}
                  <p className="text-[10px] text-gray-400 mt-0.5 font-medium">{p.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
