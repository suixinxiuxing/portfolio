"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const exp = [
  { title: "Engineering Technician", org: "CCCC Third Harbor Engineering Co.", period: "2022.07 — 2022.08", loc: "Zhejiang", type: "Internship", items: ["Supervised caisson engineering site compliance, conducted daily inspections per design specs and industry standards, achieving zero violations.", "Managed construction documentation, technical briefings, and daily record-keeping ensuring process traceability."] },
  { title: "Party Building Assistant", org: "Jimei University", period: "2022.09 — 2023.09", loc: "Xiamen", type: "Campus", items: ["Organized 6 thematic education events covering 320 participants across college and branch levels.", "Managed full-cycle Party member development: assessed 120 activists and processed 32 admissions."] },
  { title: "Student Chair · Media Director", org: "Academic Affairs Information Center", period: "2021.09 — 2023.09", loc: "Xiamen", type: "Campus", items: ["Led campus-wide student info team across 16 colleges, delivered 20+ academic events.", "Built 'Collect-Feedback-Improve' teaching feedback loop, turned 100+ suggestions into actionable changes.", "Launched and managed the Academic Affairs official WeChat account, executed 7 major campus events with 11k+ total impressions."] },
  { title: "Class President · League Secretary", org: "Jimei University", period: "2020.10 — 2022.09", loc: "Xiamen", type: "Campus", items: ["Organized 12 themed League activities; class earned 'May Fourth Red Flag League Branch' distinction.", "Tracked 28 students' academic progress, raising core course pass rate to 86%."] },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Experience" title="Practice & Leadership" />
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {exp.map((e, i) => (
            <motion.div key={e.title + e.period} className="card-framer p-7 flex flex-col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium mb-2 ${e.type === "Internship" ? "tag-framer" : "tag-framer tag-framer-muted"}`}>{e.type}</span>
              <h3 className="text-base font-bold text-white mb-0.5">{e.title}</h3>
              <p className="text-xs text-white/25 mb-3">{e.org}</p>
              <div className="flex gap-3 text-[10px] text-white/15 mb-4"><span className="flex items-center gap-1"><FiClock size={10}/>{e.period}</span><span className="flex items-center gap-1"><FiMapPin size={10}/>{e.loc}</span></div>
              <ul className="space-y-2 text-sm text-white/35 leading-relaxed flex-1">{e.items.map((d,j) => <li key={j} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b5cf6]/50 shrink-0"/>{d}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
