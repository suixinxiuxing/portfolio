"use client";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold text-white">CX<span className="text-[#8b5cf6]">.</span></div>
            <p className="text-[10px] text-white/15 mt-0.5">Ocean University of China · Marine CFD</p>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-white/20 font-medium uppercase tracking-wider">
            <a href="#hero" className="hover:text-white/50 transition-colors">Home</a>
            <a href="#about" className="hover:text-white/50 transition-colors">About</a>
            <a href="#projects" className="hover:text-white/50 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:yinnixingchen@163.com" className="p-2 rounded-lg text-white/15 hover:text-[#a78bfa] hover:bg-white/[0.03] transition-all"><FiMail size={14} /></a>
            <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-white/15 hover:text-[#a78bfa] hover:bg-white/[0.03] transition-all"><FiGithub size={14} /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[9px] text-white/10 font-mono">&copy; {new Date().getFullYear()} Chen Xi. Built with Next.js &amp; Tailwind CSS.</p>
          <p className="text-[9px] text-white/10 font-mono flex items-center gap-1">Made with <FiHeart size={9} className="text-red-400" /> by Chen Xi</p>
        </div>
      </div>
    </footer>
  );
}
