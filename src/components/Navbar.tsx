"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useT } from "@/i18n/LanguageContext";

const links = ["about", "projects", "research", "experience", "education", "skills", "awards", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang } = useT();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#about">{lang === "zh" ? "跳转正文" : "Skip to content"}</a>
      <nav className="nav-inner" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
        <a href="#hero" className="brand">CHEN XI<span>.</span></a>
        <div className="desktop-links">
          {links.map((id) => <a href={`#${id}`} key={id}>{t(`nav.${id}`)}</a>)}
        </div>
        <div className="nav-tools">
          <button className="language-button" onClick={toggleLang} aria-label={lang === "zh" ? "Switch to English" : "Switch to Chinese"}>
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <button ref={menuButton} className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={lang === "zh" ? "切换导航菜单" : "Toggle navigation"}>
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
        {open && <div id="mobile-nav" className="mobile-links">
          {links.map((id) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{t(`nav.${id}`)}</a>)}
        </div>}
      </nav>
    </header>
  );
}
