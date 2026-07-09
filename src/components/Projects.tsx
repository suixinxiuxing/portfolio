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
      <section id="projects" className="py-32 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="项目" title="科创实践" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((proj, i) => (
              <SpotlightCard key={proj.title} className="card-premium p-7 sm:p-8 h-full flex flex-col rounded-[16px]">
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#0f172a]">{proj.title}</h3>
                    <span className="text-[10px] text-slate-400 mt-1.5 shrink-0 font-mono">{proj.period}</span>
                  </div>
                  <p className="text-[#2563eb]/70 text-sm font-medium mb-4">{proj.subtitle}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tag-ocean">{proj.role}</span>
                    {proj.award && (
                      <span className="bg-amber-50 text-amber-600 text-xs px-2.5 py-0.5 rounded-full border border-amber-200 font-medium">
                        🏆 {proj.award}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.techs.map((t) => <span key={t} className="tag-muted tag-ocean text-xs">{t}</span>)}
                  </div>

                  <ul className="space-y-2 text-sm text-slate-500 leading-relaxed flex-1">
                    {proj.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2563eb]/40 shrink-0" />{d}
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
