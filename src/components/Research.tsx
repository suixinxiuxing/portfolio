"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Research() {
  const { t: tt } = useT();

  const patents = [
    { title: tt("research.pat2"), id: "ZL2023 2 0135062.8", type: tt("research.pat2Type"), link: "http://epub.cnipa.gov.cn/Dxb/IndexQuery" },
    { title: tt("research.pat3"), id: "ZL 2023 3 0062702.2", type: tt("research.pat3Type"), link: "http://epub.cnipa.gov.cn/Dxb/IndexQuery" },
    {
      title: tt("research.pat4"),
      id: "ZL202511043698.X",
      type: tt("research.pat4Type"),
      link: "https://kns.cnki.net/kcms2/article/abstract?v=VNVtbp4NFXcUNC9Pha8DTpcZN_gVJjVM3q6YKRPNPSBiOFg19p-JquZZAm9a8tSxRHXR8XdO0iPY_iL-oXHGHrkw8NPRkb8sDkl5o9_s7kGw13CGHy7dPw0o2wEwWWRD8dfNrXzlmViU_r1krZfwpjlJwTxgPEevZT0q6BK1fPdnI7whWcJCfQ==",
    },
    {
      title: tt("research.pat5"),
      id: "202511372767.1",
      type: tt("research.pat5Type"),
      link: "https://kns.cnki.net/kcms2/article/abstract?v=VNVtbp4NFXc86WI7qxzpPAfb5zxG-JP9XbGaBuzAHTUVtqvqRv9LH_fzosmTd6fFUgDRJo19TSHK6IhXlZgfFAdaV89oE7pYtDOED8Kn0rGn5Qi0sFzj323mKuA4MlA12EOb2EVIjaDwh18RM3ND1j3A46CDAbPjuU2sZ0hN909_joKTNUtYJA==",
    },
    {
      title: tt("research.pat6"),
      id: "ZL202521459093.4",
      type: tt("research.pat6Type"),
      link: "https://kns.cnki.net/kcms2/article/abstract?v=VNVtbp4NFXcoRZlH4dKeDThY99A3escXAUyZrgdGog7a7DKRwl0WSZ6aMp_ueSnmI4wmvTZ1tR0eW7ukRHdg5m8CaSb7BpLjvluQDAd6OjrHu0Wc_oX8kNw-nP6xUgwDGeFoBa4k6YrUkwrpN4UsN-oylSJQnbyICT-rpUn5iiVRu2WU0p2PXw==",
    },
  ];

  const papers = [
    {
      title: tt("research.paper1T"),
      journal: tt("research.paper1J"),
      authors: tt("research.paper1A"),
      role: tt("research.paper1R"),
      year: "2025",
      hl: true,
      link: "https://www.nature.com/articles/s44172-025-00402-9",
    },
    {
      title: tt("research.paper2T"),
      journal: tt("research.paper2J"),
      authors: tt("research.paper2A"),
      role: tt("research.paper2R"),
      year: "2025",
      hl: true,
      link: "https://pubs.aip.org/aip/pof/article-abstract/37/8/087117/3357868/A-new-interpretation-for-the-non-stationary?redirectedFrom=fulltext",
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
      link: "https://onepetro.org/ISOPEIOPEC/proceedings-abstract/ISOPE25/ISOPE25/ISOPE-I-25-022/713015",
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
      link: "https://onepetro.org/ISOPEIOPEC/proceedings-abstract/ISOPE25/ISOPE25/ISOPE-I-25-418/713641",
    },
  ];

  return (
    <section id="research" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("research.label")} title={tt("research.title")} />

        {/* ===== 01 · Patents ===== */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7c3aed] text-xs font-bold">01</div>
            <div>
              <span className="tag-framer text-[10px]">{tt("research.label")}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{tt("research.patentsTitle")}</h3>
            </div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {patents.map((p, i) => (
              <motion.a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="card-framer p-5 block hover:border-[#8b5cf6]/40 transition-colors" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <span className="tag-framer text-[10px] mb-2 inline-block">{p.type}</span>
                <p className="text-sm text-gray-600 hover:text-[#8b5cf6] transition-colors leading-relaxed font-medium">{p.title}</p>
                <p className="text-[10px] text-gray-400 font-mono mt-1.5">{p.id}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ===== 02 · Papers ===== */}
        <div className="max-w-5xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3b82f6] text-xs font-bold">02</div>
            <div>
              <span className="tag-framer tag-framer-muted text-[10px]">{tt("research.label")}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{tt("research.papersTitle")}</h3>
            </div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
            {papers.map((p, i) => (
              <motion.div
                key={p.title + i}
                className={`card-framer p-5 ${p.hl ? "border-l-2 border-l-[#8b5cf6]" : ""}`}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className={`text-[10px] font-medium mb-2 inline-block px-2 py-0.5 rounded-full ${p.hl ? "tag-framer" : "tag-framer tag-framer-muted"}`}>{p.year}</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}