"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";
import { t as translations } from "./translations";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations;
}

const LangContext = createContext<LangContextType>({
  lang: "zh",
  toggleLang: () => {},
  t: translations,
});

export function useT() {
  const { lang, t: trans } = useContext(LangContext);
  return {
    lang,
    toggleLang: () => {
      const next = lang === "zh" ? "en" : "zh";
      localStorage.setItem("lang", next);
      window.location.reload();
    },
    t: (key: string) => {
      const keys = key.split(".");
      let val: unknown = trans;
      for (const k of keys) {
        val = (val as Record<string, unknown>)[k];
      }
      if (val && typeof val === "object" && "zh" in val) {
        return (val as Record<Lang, string>)[lang];
      }
      return key;
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang: () => {}, t: translations }}>
      {children}
    </LangContext.Provider>
  );
}
