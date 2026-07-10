"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function About() {
  const { t: tt } = useT();
  const stats = [
    { v: "90.48", u: "/100", l: tt("about.stat1"), s: tt("about.stat1sub") },
    { v: "5", u: "", l: tt("about.stat2"), s: tt("about.stat2sub") },
    { v: "3", u: "", l: tt("about.stat3"), s: tt("about.stat3sub") },
    { v: "10+", u: "", l: tt("about.stat4"), s: tt("about.stat4sub") },
  ];
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("about.label")} title={tt("about.title")} />
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div className="space-y-5 text-gray-500 leading-relaxed" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p>{tt("about.p1")}</p><p>{tt("about.p2")}</p><p>{tt("about.p3")}</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-3" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            {stats.map((s, i) => (
              <motion.div key={s.l} className="card-framer p-7 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="text-[2.5rem] font-black text-gray-900 tracking-tight">{s.v}</div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-2">{s.l}</div>
                <div className="text-[10px] text-gray-300 mt-1">{s.s}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
