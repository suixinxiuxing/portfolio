"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const skillGroups = [
  {
    group: "🏗️ 工程仿真",
    skills: [
      { name: "STAR-CCM+", level: 90 },
      { name: "CFD 数值模拟", level: 85 },
      { name: "AutoCAD", level: 80 },
      { name: "Autodesk Revit", level: 70 },
      { name: "ArcGIS", level: 65 },
    ],
  },
  {
    group: "💻 编程与数据",
    skills: [
      { name: "Python", level: 85 },
      { name: "MATLAB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "数据分析", level: 85 },
    ],
  },
  {
    group: "🌐 语言能力",
    skills: [
      { name: "英语 (CET-6)", level: 80 },
      { name: "学术英语写作", level: 82 },
      { name: "国际会议交流", level: 75 },
    ],
  },
  {
    group: "📝 通用技能",
    skills: [
      { name: "技术文档撰写", level: 88 },
      { name: "项目管理", level: 78 },
      { name: "新媒体运营", level: 75 },
      { name: "MS Office", level: 90 },
    ],
  },
];

// Build the scrolling list — duplicated for seamless loop
const techScroll = ["STAR-CCM+", "CFD 数值模拟", "Python", "MATLAB", "AutoCAD", "SQL", "英语 CET-6", "数据分析", "Revit", "ArcGIS", "MS Office"];

export default function Skills() {
  return (
    <>
      <WaveDivider flip color="white" />
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="技能" title="专业能力" />

          {/* Scrolling tech stack marquee */}
          <div className="max-w-3xl mx-auto mb-14 overflow-hidden rounded-xl bg-[#f0f9ff] border border-sky-100 py-4">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...techScroll, ...techScroll].map((tech, i) => (
                <span
                  key={i}
                  className="text-sm font-medium text-[#0e7490] bg-white/60 px-4 py-2 rounded-full border border-sky-100 shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skill bars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.group}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-[#0c2d48] mb-5">
                  {group.group}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-500">{skill.name}</span>
                        <span className="text-slate-300 font-mono">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.15 + si * 0.1, duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
