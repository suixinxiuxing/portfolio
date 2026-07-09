"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2563eb]">
        {label}
      </span>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] mt-4 tracking-[-0.03em]">
        {title}
      </h2>
      <div className="mt-5 section-line" />
    </motion.div>
  );
}
