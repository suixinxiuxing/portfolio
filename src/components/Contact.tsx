"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const info = [
  { icon: <FiMail size={18} />, label: "Email", value: "yinnixingchen@163.com", href: "mailto:yinnixingchen@163.com" },
  { icon: <FiPhone size={18} />, label: "Phone", value: "157-5095-8002", href: "tel:15750958002" },
  { icon: <FiMapPin size={18} />, label: "Location", value: "Qingdao, Shandong, China", href: null },
];

export default function Contact() {
  const [ok, setOk] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setOk(true); setTimeout(() => setOk(false), 3000); };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Contact" title="Get In Touch" />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-14">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-white/30 text-sm leading-relaxed">Interested in my research or looking to collaborate? Feel free to reach out anytime.</p>
            {info.map(i => (
              <div key={i.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-[#a78bfa] shrink-0">{i.icon}</div>
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider font-semibold">{i.label}</p>
                  {i.href ? <a href={i.href} className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors font-medium">{i.value}</a> : <p className="text-sm text-white/50 font-medium">{i.value}</p>}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.form onSubmit={submit} className="space-y-4" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <input type="text" placeholder="Your Name" required className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-sm text-white/70 placeholder:text-white/15 focus:outline-none focus:border-[#8b5cf6]/30 focus:ring-2 focus:ring-[#8b5cf6]/5 transition-all" />
            <input type="email" placeholder="Your Email" required className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-sm text-white/70 placeholder:text-white/15 focus:outline-none focus:border-[#8b5cf6]/30 focus:ring-2 focus:ring-[#8b5cf6]/5 transition-all" />
            <textarea placeholder="Your Message..." rows={4} required className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-sm text-white/70 placeholder:text-white/15 focus:outline-none focus:border-[#8b5cf6]/30 focus:ring-2 focus:ring-[#8b5cf6]/5 transition-all resize-none" />
            <button type="submit" className="w-full btn-apple btn-apple-primary">{ok ? "✓ Sent!" : <><FiSend size={14} /> Send Message</>}</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
