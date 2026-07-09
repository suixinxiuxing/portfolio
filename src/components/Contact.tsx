"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const contactInfo = [
  { icon: <FiMail size={18} />, label: "邮箱", value: "yinnixingchen@163.com", href: "mailto:yinnixingchen@163.com" },
  { icon: <FiPhone size={18} />, label: "电话", value: "15750958002", href: "tel:15750958002" },
  { icon: <FiMapPin size={18} />, label: "所在地", value: "山东 · 青岛", href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <WaveDivider color="light" />
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="联系" title="Get In Touch" />

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-14">
            <motion.div className="space-y-6" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-slate-500 text-base leading-relaxed">
                如果你对我的研究方向感兴趣，或希望展开合作，欢迎随时联系我。期待与你交流！
              </p>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#eff6ff] border border-blue-100 flex items-center justify-center text-[#2563eb] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-slate-600 hover:text-[#2563eb] transition-colors font-medium">{item.value}</a>
                    ) : (
                      <p className="text-sm text-slate-600 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="space-y-4" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <input type="text" placeholder="你的名字" required className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-[#2563eb]/40 focus:ring-2 focus:ring-[#2563eb]/5 transition-all font-medium" />
              <input type="email" placeholder="你的邮箱" required className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-[#2563eb]/40 focus:ring-2 focus:ring-[#2563eb]/5 transition-all font-medium" />
              <textarea placeholder="留言内容..." rows={4} required className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-[#2563eb]/40 focus:ring-2 focus:ring-[#2563eb]/5 transition-all resize-none font-medium" />
              <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#2563eb]/15 hover:shadow-xl hover:shadow-[#2563eb]/20">
                {submitted ? "✓ 发送成功！" : <><FiSend size={14} /> 发送消息</>}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
