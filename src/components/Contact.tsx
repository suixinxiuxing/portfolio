"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t: tt } = useT();
  const [ok, setOk] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setOk(true); setTimeout(() => setOk(false), 3000); };
  const info = [
    { icon: <FiMail size={18} />, label: tt("contact.email"), value: "yinnixingchen@163.com", href: "mailto:yinnixingchen@163.com" },
    { icon: <FiPhone size={18} />, label: tt("contact.phone"), value: "157-5095-8002", href: "tel:15750958002" },
    { icon: <FiMapPin size={18} />, label: tt("contact.location"), value: tt("contact.locVal"), href: null },
  ];
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={tt("contact.label")} title={tt("contact.title")} />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-14">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-gray-500 text-sm leading-relaxed">{tt("contact.desc")}</p>
            {info.map(i => (
              <div key={i.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7c3aed] shrink-0">{i.icon}</div>
                <div><p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{i.label}</p>
                {i.href ? <a href={i.href} className="text-sm text-gray-600 hover:text-[#7c3aed] transition-colors font-medium">{i.value}</a> : <p className="text-sm text-gray-600 font-medium">{i.value}</p>}</div>
              </div>
            ))}
          </motion.div>
          <motion.form onSubmit={submit} className="space-y-4" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <input type="text" placeholder={tt("contact.namePlaceholder")} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors" />
            <input type="email" placeholder={tt("contact.emailPlaceholder")} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors" />
            <textarea placeholder={tt("contact.msgPlaceholder")} rows={4} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors resize-none" />
            <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-gray-900 text-white hover:bg-black transition-colors font-semibold text-sm flex items-center justify-center gap-2">{ok ? tt("contact.sent") : <><FiSend size={14} /> {tt("contact.send")}</>}</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
