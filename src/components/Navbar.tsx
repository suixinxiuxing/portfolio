"use client";
import {useState,useEffect} from "react";
import {FiMenu,FiX} from "react-icons/fi";
import {useT} from "@/i18n/LanguageContext";
export default function Navbar(){
 const {t,lang,toggleLang}=useT(); const [open,setOpen]=useState(false);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[]);
 const links=["about","projects","research","experience","education","skills","awards","contact"];
 return <header className="site-header"><a className="skip-link" href="#about">{lang==="zh"?"跳转正文":"Skip to content"}</a><nav className="nav-inner" aria-label={lang==="zh"?"主导航":"Main navigation"}>
 <a href="#hero" className="brand">CHEN XI<span>.</span></a><div className="desktop-links">{links.map(id=><a href={"#"+id} key={id}>{t("nav."+id)}</a>)}</div>
 <div className="nav-tools"><button className="language-button" onClick={toggleLang} aria-label={lang==="zh"?"Switch to English":"切换中文"}>{lang==="zh"?"EN":"中文"}</button><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={lang==="zh"?"切换导航菜单":"Toggle navigation"}>{open?<FiX/>:<FiMenu/>}</button></div>
 {open&&<div id="mobile-nav" className="mobile-links">{links.map(id=><a href={"#"+id} key={id} onClick={()=>setOpen(false)}>{t("nav."+id)}</a>)}</div>}</nav></header>;
}
