"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";
import OceanParticles from "./OceanParticles";
import ShimmerButton from "./ShimmerButton";

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50/40 to-[#e0f2fe] overflow-hidden"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-ocean-dots opacity-30" />

      {/* Ocean bubble particles */}
      <OceanParticles />

      {/* Bottom waves */}
      <div className="hero-waves">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[180px]">
          <path
            d="M0,120 C320,60 640,180 960,120 C1280,60 1600,160 1920,100 L1920,200 L0,200 Z"
            fill="rgba(14, 116, 144, 0.07)"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C400,140 800,40 1200,100 C1600,160 1800,80 1920,60 L1920,200 L0,200 Z"
            fill="rgba(14, 116, 144, 0.10)"
            className="animate-wave"
          />
          <path
            d="M0,100 C280,40 720,160 1200,80 C1600,20 1800,120 1920,90 L1920,200 L0,200 Z"
            fill="rgba(6, 182, 212, 0.09)"
            className="animate-wave-slow"
            style={{ animationDelay: "-4s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-20">
        {/* Greeting */}
        <motion.p
          className="text-[#0e7490] font-mono text-sm tracking-widest mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          你好，我是
        </motion.p>

        {/* Name with sparkle-like gradient */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-ocean">陈希</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          className="text-lg sm:text-xl text-slate-400 font-mono h-7 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>{typed}</span>
          <span className="inline-block w-[2px] h-5 bg-[#0e7490] ml-0.5 align-middle animate-pulse" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <ShimmerButton href="#projects">查看项目</ShimmerButton>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-sky-200 text-slate-500 hover:text-[#0e7490] hover:border-[#0e7490]/40 transition-all duration-300 text-sm"
          >
            联系我
          </a>

          <span className="w-px h-6 bg-sky-200 hidden sm:block" />

          <a
            href="https://github.com/suixinxiuxing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-sky-100 text-slate-400 hover:text-[#0e7490] hover:border-[#0e7490]/30 transition-all duration-300"
            title="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="mailto:yinnixingchen@163.com"
            className="p-2.5 rounded-full border border-sky-100 text-slate-400 hover:text-[#0e7490] hover:border-[#0e7490]/30 transition-all duration-300"
            title="Email"
          >
            <FiMail size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-28 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 1.1 }, y: { repeat: Infinity, duration: 2 } }}
        >
          <FiArrowDown className="text-sky-300" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
