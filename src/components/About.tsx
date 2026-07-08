"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const highlights = [
  { label: "硕士 GPA", value: "90.48", unit: "/100", sub: "专业前6%" },
  { label: "论文发表", value: "5", unit: " 篇", sub: "含 Nature 子刊" },
  { label: "专利成果", value: "3", unit: " 项", sub: "发明+实用新型" },
  { label: "竞赛获奖", value: "10+", unit: "", sub: "校级以上" },
];

export default function About() {
  return (
    <>
      <WaveDivider />
      <section id="about" className="py-24 px-6 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="关于我" title="中国海洋大学 · 水利工程硕士" />

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              className="space-y-4 text-slate-500 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                我是陈希，目前就读于
                <strong className="text-[#0c2d48]">中国海洋大学（985）水利工程专业</strong>，
                专注于
                <strong className="text-[#0e7490]">船舶与海洋工程 CFD 数值模拟</strong>与
                <strong className="text-[#0e7490]">流固耦合分析</strong>方向研究。
              </p>
              <p>
                本科毕业于集美大学港口航道与海岸工程专业，以专业排名
                <strong className="text-[#0c2d48]">前 5%（2/46）</strong>的成绩
                保送至中国海洋大学。硕士期间保持专业
                <strong className="text-[#0c2d48]">前 6%（3/34）</strong>的优异成绩，
                获评国家奖学金及校级优秀研究生。
              </p>
              <p>
                掌握 <strong className="text-[#0c2d48]">Python、STAR-CCM+、MATLAB</strong> 等
                工程数值模拟工具，在海洋结构水动力分析、水下声学信号处理等领域积累了丰富经验。
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="card p-6 text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-[2rem] font-bold text-[#0c2d48]">
                    {item.value}
                    <span className="text-base text-slate-300 font-normal ml-0.5">
                      {item.unit}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 font-medium">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-300 mt-1">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
