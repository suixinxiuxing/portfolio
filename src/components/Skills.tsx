"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const skillGroups = [
  {
    group: "工程仿真",
    skills: [
      { name: "STAR-CCM+", level: 90 },
      { name: "CFD 数值模拟", level: 85 },
      { name: "AutoCAD", level: 80 },
      { name: "Autodesk Revit", level: 70 },
      { name: "ArcGIS", level: 65 },
    ],
  },
  {
    group: "编程与数据",
    skills: [
      { name: "Python", level: 85 },
      { name: "MATLAB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "数据分析", level: 85 },
    ],
  },
  {
    group: "语言能力",
    skills: [
      { name: "英语 (CET-6)", level: 80 },
      { name: "学术英语写作", level: 82 },
      { name: "国际会议交流", level: 75 },
    ],
  },
  {
    group: "通用技能",
    skills: [
      { name: "技术文档撰写", level: 88 },
      { name: "项目管理", level: 78 },
      { name: "新媒体运营", level: 75 },
      { name: "MS Office", level: 90 },
    ],
  },
];

const techScroll = ["STAR-CCM+", "CFD 数值模拟", "Python", "MATLAB", "AutoCAD", "SQL", "英语 CET-6", "数据分析", "Revit", "ArcGIS", "MS Office"];

export default function Skills() {
  return (
    <>
      <WaveDivider flip color="white" />
      <section id="skills" className="py-32 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="技能" title="专业能力" />

          {/* Marquee */}
          <div className="max-w-3xl mx-auto mb-16 overflow-hidden rounded-2xl bg-white border border-slate-100 py-5 shadow-sm">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...techScroll, ...techScroll].map((tech, i) => (
                <span key={i} className="text-sm font-semibold text-[#2563eb] bg-[#eff6ff] px-5 py-2.5 rounded-full border border-blue-100 shrink-0">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {skillGroups.map((group, gi) => (
              <motion.div key={group.group} className="card-premium p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.08 }}>
                <h3 className="text-sm font-bold text-[#0f172a] mb-6 uppercase tracking-wider">{group.group}</h3>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-500 font-medium">{skill.name}</span>
                        <span className="text-slate-300 font-mono">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <motion.div className="progress-fill" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ delay: gi * 0.1 + si * 0.08, duration: 0.6, ease: "easeOut" }} />
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
