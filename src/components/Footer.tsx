"use client";

import { FiGithub, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,0 480,50 720,25 C960,0 1200,40 1440,20 L1440,60 L0,60 Z" fill="#ffffff" />
          <rect y="30" width="1440" height="30" fill="#0f172a" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold">Chen Xi<span className="text-[#3b82f6]">.</span></div>
            <p className="text-xs text-slate-400 mt-0.5">中国海洋大学 · 水利工程 · 海洋 CFD</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#hero" className="hover:text-[#3b82f6] transition-colors">首页</a>
            <a href="#about" className="hover:text-[#3b82f6] transition-colors">关于</a>
            <a href="#projects" className="hover:text-[#3b82f6] transition-colors">项目</a>
            <a href="#contact" className="hover:text-[#3b82f6] transition-colors">联系</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:yinnixingchen@163.com" className="p-2 rounded-lg text-slate-400 hover:text-[#3b82f6] hover:bg-white/5 transition-all">
              <FiMail size={15} />
            </a>
            <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-[#3b82f6] hover:bg-white/5 transition-all">
              <FiGithub size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-slate-500 font-mono">&copy; {new Date().getFullYear()} 陈希. Built with Next.js &amp; Tailwind CSS.</p>
          <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1">Made with <FiHeart size={10} className="text-red-400" /> by Chen Xi</p>
        </div>
      </div>
    </footer>
  );
}
