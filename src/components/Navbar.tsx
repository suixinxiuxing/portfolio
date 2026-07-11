"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { useT } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { t: tt, lang, toggleLang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const links = [
    { href: "#hero", label: tt("nav.home") },
    { href: "#about", label: tt("nav.about") },
    { href: "#education", label: tt("nav.education") },
    {
      href: "#experience", label: tt("nav.experience"),
      subs: [{ label: tt("experience.internship"), href: "#experience" }, { label: tt("experience.campus"), href: "#experience" }],
    },
    {
      href: "#projects", label: tt("nav.projects"),
      subs: [{ label: tt("projects.p1Title"), href: "#projects" }, { label: tt("projects.p2Title"), href: "#projects" }],
    },
    {
      href: "#research", label: tt("nav.research"),
      subs: [{ label: tt("research.patentsTitle"), href: "#research" }, { label: tt("research.papersTitle"), href: "#research" }],
    },
    { href: "#skills", label: tt("nav.skills") },
    {
      href: "#awards", label: tt("nav.awards"),
      subs: [{ label: tt("awards.scholarship"), href: "#awards" }, { label: tt("awards.competition"), href: "#awards" }, { label: tt("awards.honor"), href: "#awards" }],
    },
    { href: "#contact", label: tt("nav.contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" ref={dropdownRef}>
        <motion.a href="#hero" className="text-lg font-bold tracking-tight text-gray-900 shrink-0" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          Xi<span className="text-[#8b5cf6]"> Chen</span>
        </motion.a>

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <div key={l.label} className="relative">
              <a
                href={l.href}
                className={`flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-gray-500 hover:text-[#8b5cf6] transition-colors rounded-lg hover:bg-gray-50 uppercase tracking-wider whitespace-nowrap ${l.subs ? "cursor-pointer" : ""}`}
                onClick={(e) => {
                  if (l.subs) { e.preventDefault(); setActiveDropdown(activeDropdown === l.label ? null : l.label); }
                }}
              >
                {l.label}
                {l.subs && <HiChevronDown size={10} className={`transition-transform ${activeDropdown === l.label ? "rotate-180" : ""}`} />}
              </a>
              <AnimatePresence>
                {l.subs && activeDropdown === l.label && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-2 px-1 min-w-[150px]">
                    {l.subs.map((s) => (
                      <a key={s.label} href={s.href} className="block px-3 py-1.5 text-[11px] text-gray-500 hover:text-[#8b5cf6] hover:bg-gray-50 rounded-lg whitespace-nowrap transition-colors" onClick={() => setActiveDropdown(null)}>{s.label}</a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button onClick={toggleLang} className="ml-2 px-3 py-2 text-xs font-medium text-gray-400 hover:text-[#8b5cf6] transition-colors rounded-lg hover:bg-gray-50 uppercase tracking-wider border border-gray-200 shrink-0">{lang === "zh" ? "EN" : "中"}</button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleLang} className="px-2 py-1 text-[10px] font-medium text-gray-400 rounded border border-gray-200">{lang === "zh" ? "EN" : "中"}</button>
          <button className="text-gray-400 hover:text-gray-600" onClick={() => setOpen(!open)}>{open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}</button>
        </div>
      </div>

      <AnimatePresence>{open && (
        <motion.div className="lg:hidden bg-white border-b border-gray-100" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
          <div className="px-6 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {links.map(l => (
              <div key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-[#8b5cf6] transition-colors uppercase tracking-wider font-medium">{l.label}</a>
                {l.subs && l.subs.map(s => (
                  <a key={s.label} href={s.href} onClick={() => setOpen(false)} className="block py-1.5 pl-4 text-xs text-gray-400 hover:text-[#8b5cf6] transition-colors ml-3 border-l border-gray-100">{s.label}</a>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  );
}
