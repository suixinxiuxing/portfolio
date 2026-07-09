"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "水利工程 · 海洋工程 · CFD 数值模拟 · 流固耦合分析";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++; } else clearInterval(t); }, 55);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="orb w-[700px] h-[700px] bg-[#8b5cf6] top-[-150px] left-[-250px] animate-float" />
      <div className="orb w-[500px] h-[500px] bg-[#3b82f6] bottom-[-120px] right-[-180px] animate-glow" style={{ animationDelay: "-2s" }} />
      <div className="orb w-[300px] h-[300px] bg-[#06b6d4] top-[40%] left-[60%] animate-glow" style={{ animationDelay: "-1s", opacity: 0.06 }} />
      <div className="absolute inset-0 bg-dots-dark opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#a78bfa] mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          Ocean University of China
        </motion.p>

        <motion.h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.04em] text-white mb-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22,1,0.36,1] }}>
          陈<span className="text-framer">希</span>
        </motion.h1>

        <motion.div className="text-lg sm:text-xl text-white/20 font-mono h-7 mb-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <span>{typed}</span><span className="inline-block w-[2px] h-5 bg-[#8b5cf6] ml-0.5 align-middle animate-pulse" />
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <a href="#projects" className="btn-apple btn-apple-primary">
            View Projects <span className="text-[#8b5cf6]">→</span>
          </a>
          <a href="#contact" className="btn-apple btn-apple-ghost">Get In Touch</a>
          <span className="w-px h-6 bg-white/[0.06] hidden sm:block" />
          <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300" title="GitHub"><FiGithub size={18} /></a>
          <a href="mailto:yinnixingchen@163.com" className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300" title="Email"><FiMail size={18} /></a>
        </motion.div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 6, 0] }} transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}>
          <FiArrowDown className="text-white/10" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
