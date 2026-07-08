"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0e7490]">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2d48] mt-3">
        {title}
      </h2>
      <div className="mt-4 section-line" />
    </motion.div>
  );
}
