"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const cb = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", cb); return () => window.removeEventListener("scroll", cb); }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04] py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a href="#hero" className="text-lg font-bold tracking-tight text-white" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          CX<span className="text-[#8b5cf6]">.</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a key={l.href} href={l.href} className="px-3 py-2 text-xs font-medium text-white/40 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04] uppercase tracking-wider" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              {l.label}
            </motion.a>
          ))}
        </div>
        <button className="md:hidden text-white/50 hover:text-white" onClick={() => setOpen(!open)}>{open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}</button>
      </div>
      <AnimatePresence>{open && (
        <motion.div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.04]" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
          <div className="px-6 py-4 flex flex-col gap-1">{links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-white/40 hover:text-white transition-colors uppercase tracking-wider">{l.label}</a>)}</div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  );
}
