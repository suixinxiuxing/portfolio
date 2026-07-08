"use client";

import { FiGithub, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0c2d48] text-white">
      {/* Top wave */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,0 480,50 720,25 C960,0 1200,40 1440,20 L1440,60 L0,60 Z" fill="#f0f9ff" />
          <rect y="30" width="1440" height="30" fill="#0c2d48" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold">
              Chen Xi<span className="text-[#06b6d4]">.</span>
            </div>
            <p className="text-xs text-sky-200/60 mt-0.5">
              中国海洋大学 · 水利工程 · 海洋工程 CFD
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-sky-200/60">
            <a href="#hero" className="hover:text-[#06b6d4] transition-colors">首页</a>
            <a href="#about" className="hover:text-[#06b6d4] transition-colors">关于</a>
            <a href="#projects" className="hover:text-[#06b6d4] transition-colors">项目</a>
            <a href="#contact" className="hover:text-[#06b6d4] transition-colors">联系</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:yinnixingchen@163.com"
              className="p-2 rounded-lg text-sky-200/60 hover:text-[#06b6d4] hover:bg-white/10 transition-all">
              <FiMail size={14} />
            </a>
            <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-sky-200/60 hover:text-[#06b6d4] hover:bg-white/10 transition-all">
              <FiGithub size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sky-200/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-sky-200/40 font-mono">
            &copy; {new Date().getFullYear()} 陈希. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p className="text-[10px] text-sky-200/40 font-mono flex items-center gap-1">
            Made with <FiHeart size={10} className="text-red-400" /> by Chen Xi
          </p>
        </div>
      </div>
    </footer>
  );
}
