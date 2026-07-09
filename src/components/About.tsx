"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const highlights = [
  { label: "硕士 GPA", value: "90.48", unit: "/100", sub: "专业前 6%" },
  { label: "论文发表", value: "5", unit: " 篇", sub: "含 Nature 子刊" },
  { label: "专利成果", value: "3", unit: " 项", sub: "发明+实用新型" },
  { label: "竞赛获奖", value: "10+", unit: "", sub: "校级以上" },
];

export default function About() {
  return (
    <>
      <WaveDivider />
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="关于我" title="海洋工程研究者" />

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              className="space-y-5 text-slate-500 leading-relaxed text-base"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                我是陈希，目前就读于
                <strong className="text-[#0f172a] font-semibold">中国海洋大学（985）水利工程专业</strong>，
                师从知名教授，专注于
                <strong className="text-[#2563eb] font-semibold">船舶与海洋工程 CFD 数值模拟</strong>
                与<strong className="text-[#2563eb] font-semibold">流固耦合分析</strong>方向研究。
              </p>
              <p>
                本科毕业于集美大学港口航道与海岸工程专业，以专业排名
                <strong className="text-[#0f172a] font-semibold">前 5%（2/46）</strong> 的成绩
                保送至中国海洋大学。硕士期间保持专业
                <strong className="text-[#0f172a] font-semibold">前 6%（3/34）</strong>，
                获评国家奖学金及校级优秀研究生。
              </p>
              <p>
                掌握 <strong className="text-[#0f172a] font-semibold">Python、STAR-CCM+、MATLAB</strong> 等
                工程数值模拟工具，在海洋结构水动力分析、水下声学信号处理等领域积累了丰富项目经验。
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="card-premium p-7 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="text-[2.5rem] font-black text-[#0f172a] tracking-tight">
                    {item.value}
                    <span className="text-lg text-slate-300 font-medium ml-0.5">{item.unit}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 font-semibold uppercase tracking-wider">{item.label}</div>
                  <div className="text-[11px] text-slate-300 mt-1">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
