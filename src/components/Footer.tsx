"use client";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { useT } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t: tt } = useT();
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-gray-900">Xi<span className="text-[#8b5cf6]"> Chen</span></div>
            <p className="text-xs text-gray-400 mt-0.5">{tt("footer.tagline")}</p>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-400 font-medium uppercase tracking-wider">
            <a href="#hero" className="hover:text-gray-700 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-700 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-700 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:yinnixingchen@163.com" className="p-2 rounded-lg text-gray-300 hover:text-[#7c3aed] hover:bg-gray-50 transition-all"><FiMail size={14} /></a>
            <a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-300 hover:text-[#7c3aed] hover:bg-gray-50 transition-all"><FiGithub size={14} /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-gray-300 font-mono">&copy; {new Date().getFullYear()} Chen Xi</p>
          <p className="text-[10px] text-gray-300 font-mono flex items-center gap-1">Made with <FiHeart size={9} className="text-red-400" /> by Chen Xi</p>
        </div>
      </div>
    </footer>
  );
}
