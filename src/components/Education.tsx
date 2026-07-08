"use client";

import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const educations = [
  {
    school: "中国海洋大学（985）",
    degree: "水利工程 · 硕士",
    period: "2024.08 — 至今",
    location: "山东 · 青岛",
    gpa: "90.48 / 100",
    rank: "专业排名 3/34（前 6%）",
    awards: ["国家奖学金", "校级优秀研究生", "学习奖学金"],
    current: true,
  },
  {
    school: "集美大学（省双一流）",
    degree: "港口航道与海岸工程 · 本科",
    period: "2020.10 — 2024.06",
    location: "福建 · 厦门",
    gpa: "GPA 3.86 · 均分 85.02",
    rank: "专业排名 2/46（前 5%）",
    awards: [
      "厦门市陈嘉庚教育基金奖学金",
      "专业一等奖学金 ×1 · 二等奖学金 ×5",
      "校级优秀毕业生 · 优秀学生干部",
      "校级优秀共青团员 · 优秀共青团干部",
    ],
    current: false,
  },
];

export default function Education() {
  return (
    <>
      <WaveDivider flip color="white" />
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="教育经历" title="学海无涯" />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-sky-200 via-[#0e7490]/40 to-sky-200 hidden sm:block" />

            <div className="space-y-10">
              {educations.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  className="relative pl-14 sm:pl-16"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="absolute left-[14px] top-2 w-[12px] h-[12px] rounded-full bg-[#0e7490] border-[3px] border-white ring-2 ring-[#0e7490]/30 hidden sm:block" />

                  <div className="card p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0c2d48]">
                          {edu.school}
                        </h3>
                        <p className="text-sm text-[#0e7490]/70">{edu.degree}</p>
                      </div>
                      {edu.current && (
                        <span className="tag">在读</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <FiClock size={11} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={11} /> {edu.location}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-[#f0f9ff] rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-[#0c2d48]">{edu.gpa}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">GPA / 均分</div>
                      </div>
                      <div className="bg-[#f0f9ff] rounded-xl p-3 text-center">
                        <div className="text-base font-bold text-[#0e7490]">{edu.rank}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">专业排名</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.awards.map((a) => (
                        <span key={a} className="tag-plain tag text-xs">{a}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
