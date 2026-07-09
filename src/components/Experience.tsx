"use client";

import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const experiences = [
  {
    title: "工程部技术员",
    company: "中交第三航务工程局有限公司厦门分公司",
    period: "2022.07 — 2022.08",
    location: "浙江 · 大件码头",
    type: "实习",
    details: [
      "负责浙江大件码头沉箱工程现场技术监督，对照设计图纸与行业规范开展日常巡检，跟进整改复核全流程闭环，保障负责环节零施工违规。",
      "配合项目技术组完成技术交底辅助工作，负责施工台账的日常记录、核对与归档。",
    ],
  },
  {
    title: "院级及专业支部党建助理",
    company: "集美大学港口与海岸工程学院",
    period: "2022.09 — 2023.09",
    location: "福建 · 厦门",
    type: "校园",
    details: [
      "双线管理院级与支部党建工作，组织 6 场主题党日教育活动（覆盖 320 人次）。",
      "规范执行党员发展全流程，完成 120 名积极分子的培训考察与 32 名党员的接收工作。",
    ],
  },
  {
    title: "学生主席 · 宣传部部长",
    company: "集美大学校学生教学信息中心",
    period: "2021.09 — 2023.09",
    location: "福建 · 厦门",
    type: "校园",
    details: [
      "统筹教务信息中心日常运营，管理覆盖全校 16 个学院的学生信息员团队，落地 20+ 场教务活动。",
      "主导搭建「收集-反馈-改进」教学信息闭环，推动 100+ 条合理化建议转化为实际改进举措。",
      "担任校教务处公众号首届学生负责人，统筹 7 场校级大型活动，实现 1.1w+ 阅读曝光量。",
    ],
  },
  {
    title: "学习委员 · 团支书",
    company: "集美大学港工 2012",
    period: "2020.10 — 2022.09",
    location: "福建 · 厦门",
    type: "校园",
    details: [
      "团支书任期内策划 12 场主题团日活动，带领班级斩获校级「五四红旗团支部」称号。",
      "学习委员任期内跟进全班 28 名同学学习进度，班级核心课程及格率提升至 86%。",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <WaveDivider color="light" />
      <section id="experience" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="经历" title="实习与实践" />

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                className="card-premium p-7 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${
                    exp.type === "实习" ? "tag-ocean" : "tag-muted tag-ocean"
                  }`}>
                    {exp.type}
                  </span>
                  <h3 className="text-base font-bold text-[#0f172a]">{exp.title}</h3>
                  <p className="text-sm text-slate-400">{exp.company}</p>
                </div>

                <div className="flex gap-3 text-[10px] text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><FiClock size={10} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={10} /> {exp.location}</span>
                </div>

                <ul className="space-y-2 text-sm text-slate-500 leading-relaxed flex-1">
                  {exp.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2563eb]/40 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
