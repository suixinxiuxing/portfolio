"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useT } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { t: tt, lang, toggleLang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const cb = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", cb); return () => window.removeEventListener("scroll", cb); }, []);

  const links = [
    { href: "#hero", label: tt("nav.home") }, { href: "#about", label: tt("nav.about") },
    { href: "#education", label: tt("nav.education") }, { href: "#experience", label: tt("nav.experience") },
    { href: "#projects", label: tt("nav.projects") }, { href: "#research", label: tt("nav.research") },
    { href: "#skills", label: tt("nav.skills") }, { href: "#contact", label: tt("nav.contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a href="#hero" className="text-lg font-bold tracking-tight text-gray-900" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          CX<span className="text-[#8b5cf6]">.</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a key={l.href} href={l.href} className="px-3 py-2 text-xs font-medium text-gray-500 hover:text-[#8b5cf6] transition-colors rounded-lg hover:bg-gray-50 uppercase tracking-wider" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>{l.label}</motion.a>
          ))}
          <button onClick={toggleLang} className="ml-2 px-3 py-2 text-xs font-medium text-gray-400 hover:text-[#8b5cf6] transition-colors rounded-lg hover:bg-gray-50 uppercase tracking-wider border border-gray-200">{lang === "zh" ? "EN" : "中"}</button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLang} className="px-2 py-1 text-[10px] font-medium text-gray-400 hover:text-[#8b5cf6] transition-colors rounded border border-gray-200">{lang === "zh" ? "EN" : "中"}</button>
          <button className="text-gray-400 hover:text-gray-600" onClick={() => setOpen(!open)}>{open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}</button>
        </div>
      </div>
      <AnimatePresence>{open && (
        <motion.div className="md:hidden bg-white border-b border-gray-100" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
          <div className="px-6 py-4 flex flex-col gap-1">{links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-gray-500 hover:text-[#8b5cf6] transition-colors uppercase tracking-wider">{l.label}</a>)}</div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  );
}
