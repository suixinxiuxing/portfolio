"use client";

import { motion } from "framer-motion";
import { FiFileText, FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const patents = [
  { title: "一种浮式海洋工程结构运动响应非稳态特征检测技术", id: "CN120954199A", type: "发明专利" },
  { title: "水下微塑料收集装置", id: "ZL2023 2 0135062.8", type: "实用新型专利" },
  { title: "过滤网", id: "ZL 2023 3 0062702.2", type: "外观设计专利" },
];

const papers = [
  { journal: "Communications Engineering（Nature 子刊）", year: "2025", volume: "37卷", role: "第二作者（导师一作）", highlight: true },
  { journal: "PHYSICS OF FLUIDS — 中科院2区 · 流体力学TOP · IF=4.3", year: "2025", volume: "37卷", role: "第三作者（导师一作）", highlight: true },
  { journal: "2025 35th ISOPE 国际会议（EI 收录）", year: "2025", role: "第一作者 ×1 · 第二作者 ×1", highlight: false },
  { journal: "2026 45th OMAE 国际会议（EI 收录）", year: "2026", role: "第一作者", highlight: false },
  { journal: "第十届全国船舶与海洋工程 CFD 会议", year: "2025", role: "第一作者", highlight: false },
];

export default function Research() {
  return (
    <>
      <WaveDivider color="light" />
      <section id="research" className="py-24 px-6 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="科研" title="学术成果" />

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Patents */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-5">
                <FiAward className="text-[#0e7490]" size={18} />
                <h3 className="text-base font-semibold text-[#0c2d48]">专利成果 · 3 项</h3>
              </div>
              <div className="space-y-3">
                {patents.map((pat, i) => (
                  <motion.div
                    key={pat.id}
                    className="card p-4"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="tag text-[10px] mb-2 inline-block">{pat.type}</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{pat.title}</p>
                    <p className="text-xs text-slate-400 mt-1.5 font-mono">{pat.id}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Papers */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-5">
                <FiFileText className="text-[#0e7490]" size={18} />
                <h3 className="text-base font-semibold text-[#0c2d48]">论文发表 · 5 篇</h3>
              </div>
              <div className="space-y-3">
                {papers.map((paper, i) => (
                  <motion.div
                    key={paper.journal + paper.year}
                    className={`card p-4 ${paper.highlight ? "border-l-2 border-l-[#0e7490]" : ""}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={`text-[10px] font-medium mb-2 inline-block px-2 py-0.5 rounded-full ${
                      paper.highlight ? "tag" : "tag tag-plain"
                    }`}>
                      {paper.year}
                    </span>
                    <p className="text-sm text-slate-500 leading-relaxed">{paper.journal}</p>
                    <div className="flex gap-3 text-[10px] text-slate-400 mt-1.5 font-mono">
                      {paper.volume && <span>{paper.volume}</span>}
                      <span>{paper.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
