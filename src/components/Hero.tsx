"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";
import OceanParticles from "./OceanParticles";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "水利工程 · 海洋工程 · CFD 数值模拟 · 流固耦合分析";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8fafc] via-[#eff6ff] to-[#dbeafe] overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots-light opacity-40" />

      {/* Refined ocean bubbles */}
      <OceanParticles />

      {/* Bottom waves */}
      <div className="hero-waves">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[180px]">
          <path
            d="M0,130 C360,70 720,190 1080,120 C1360,60 1600,160 1920,110 L1920,200 L0,200 Z"
            fill="rgba(37, 99, 235, 0.04)"
            className="animate-wave-slow"
          />
          <path
            d="M0,90 C400,140 800,50 1200,110 C1560,160 1800,80 1920,70 L1920,200 L0,200 Z"
            fill="rgba(37, 99, 235, 0.06)"
            className="animate-wave"
          />
          <path
            d="M0,110 C300,50 720,160 1200,90 C1560,30 1800,130 1920,100 L1920,200 L0,200 Z"
            fill="rgba(30, 58, 95, 0.05)"
            className="animate-wave-slow"
            style={{ animationDelay: "-5s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-20">
        {/* Label */}
        <motion.p
          className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          中国海洋大学 · 水利工程硕士
        </motion.p>

        {/* Name — Exaggerated Minimalism: oversized, bold, tight tracking */}
        <motion.h1
          className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.9] tracking-[-0.04em] text-[#0f172a] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          陈希
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-lg sm:text-xl text-slate-400 font-mono h-7 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>{typed}</span>
          <span className="inline-block w-[2px] h-5 bg-[#2563eb] ml-0.5 align-middle animate-pulse" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {/* Primary CTA — Shimmer button */}
          <a
            href="#projects"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb] bg-[length:200%_100%] animate-shimmer" />
            <span className="absolute inset-[1.5px] rounded-full bg-[#2563eb]" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-shine" />
            <span className="relative z-10 text-white">查看项目</span>
          </a>

          {/* Secondary */}
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-slate-200 text-slate-500 hover:text-[#2563eb] hover:border-[#2563eb]/30 transition-all duration-300 text-sm font-medium bg-white/60 backdrop-blur-sm"
          >
            联系我
          </a>

          <span className="w-px h-6 bg-slate-200 hidden sm:block" />

          {/* Social */}
          <a
            href="https://github.com/suixinxiuxing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-[#2563eb] hover:border-[#2563eb]/30 transition-all duration-300 bg-white/60 backdrop-blur-sm"
            title="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="mailto:yinnixingchen@163.com"
            className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-[#2563eb] hover:border-[#2563eb]/30 transition-all duration-300 bg-white/60 backdrop-blur-sm"
            title="Email"
          >
            <FiMail size={18} />
          </a>
        </motion.div>

        {/* Scroll */}
        <motion.div
          className="absolute bottom-28 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 1.1 }, y: { repeat: Infinity, duration: 2 } }}
        >
          <FiArrowDown className="text-slate-300" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
