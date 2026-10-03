"use client";
import {useT} from "@/i18n/LanguageContext";
export default function Footer(){const {lang}=useT();return <footer className="site-footer"><div className="section-container"><span>© {new Date().getFullYear()} Chen Xi</span><a href="https://github.com/suixinxiuxing" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="#hero">{lang==="zh"?"返回顶部 ↑":"Back to top ↑"}</a></div></footer>}
