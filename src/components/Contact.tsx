"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";

// 在 https://formspree.io 免费注册，创建表单后替换这里的 ID
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const { t: tt } = useT();
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      // 未配置 Formspree 时，用 mailto 兜底
      const form = formRef.current;
      if (!form) return;
      const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || "";
      const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || "";
      const msg = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || "";
      window.location.href = `mailto:yinnixingchen@163.com?subject=${encodeURIComponent("来自 " + name + " 的留言")}&body=${encodeURIComponent(msg + "\n\n——" + name + " (" + email + ")")}`;
      setOk(true);
      setTimeout(() => setOk(false), 3000);
      return;
    }

    setSending(true);
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(formRef.current!),
        headers: { Accept: "application/json" },
      });
      setOk(true);
      formRef.current?.reset();
      setTimeout(() => setOk(false), 3000);
    } catch {
      alert("发送失败，请直接发邮件到 yinnixingchen@163.com");
    }
    setSending(false);
  };

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
                <div><p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{i.label}</p>
                {i.href ? <a href={i.href} className="text-base text-gray-600 hover:text-[#7c3aed] transition-colors font-medium">{i.value}</a> : <p className="text-base text-gray-600 font-medium">{i.value}</p>}</div>
              </div>
            ))}
          </motion.div>
          <motion.form ref={formRef} onSubmit={submit} className="space-y-4" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <input type="text" name="name" placeholder={tt("contact.namePlaceholder")} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors" />
            <input type="email" name="email" placeholder={tt("contact.emailPlaceholder")} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors" />
            <textarea name="message" placeholder={tt("contact.msgPlaceholder")} rows={4} required className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#8b5cf6]/40 transition-colors resize-none" />
            <button type="submit" disabled={sending} className="w-full px-6 py-3.5 rounded-full bg-gray-900 text-white hover:bg-black transition-colors font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50">
              {sending ? "⏳ Sending..." : ok ? tt("contact.sent") : <><FiSend size={14} /> {tt("contact.send")}</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
