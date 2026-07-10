"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <motion.div className="mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <span className="text-sm font-semibold tracking-[0.25em] uppercase text-[#7c3aed]">{label}</span>
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mt-4 tracking-[-0.03em]">{title}</h2>
      <div className="mt-5 section-line" />
    </motion.div>
  );
}
