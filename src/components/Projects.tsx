"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import WaveDivider from "./WaveDivider";

const projects = [
  {
    title: "溯海行舟",
    subtitle: "基于清洁能源的海洋微塑料自动收集三体船",
    role: "副队长",
    period: "2021.10 — 2023.06",
    techs: ["STAR-CCM+", "CFD 模拟", "结构设计"],
    details: [
      "主导三体船动力与收集装置设计，利用 STAR-CCM+ 进行 CFD 数值模拟，优化水泵引流效率与船体阻力性能。",
      "主笔撰写项目申报书，成功获得校级「挑战杯」大学生课外学术科技作品三等奖。",
    ],
    award: "校级「挑战杯」三等奖",
  },
  {
    title: "精卫听音",
    subtitle: "海洋建设水下噪音监测预警先行者",
    role: "核心成员",
    period: "2022.03 — 2022.07",
    techs: ["Python", "信号处理", "声学分析"],
    details: [
      "利用 Python 对水下声学信号进行降噪与频谱分析，参与构建噪声预警阈值模型，支撑海洋生态评估。",
      "负责调研国内外海洋噪声法规标准，进行技术可行性调研，独立完成项目中期报告。",
    ],
    award: "「互联网+」校级金奖 · 省级银奖",
  },
];

export default function Projects() {
  return (
    <>
      <WaveDivider flip color="white" />
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="项目" title="科创实践" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((proj, i) => (
              <SpotlightCard
                key={proj.title}
                className="card p-6 sm:p-7 h-full flex flex-col rounded-[14px]"
              >
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#0c2d48]">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] text-slate-400 mt-1.5 shrink-0 font-mono">
                      {proj.period}
                    </span>
                  </div>
                  <p className="text-[#0e7490]/70 text-sm mb-4">{proj.subtitle}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tag">{proj.role}</span>
                    {proj.award && (
                      <span className="bg-sky-50 text-[#0e7490] text-xs px-2.5 py-0.5 rounded-full border border-sky-100">
                        🏆 {proj.award}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.techs.map((t) => (
                      <span key={t} className="tag tag-plain text-xs">{t}</span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-slate-500 leading-relaxed flex-1">
                    {proj.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0e7490]/40 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
