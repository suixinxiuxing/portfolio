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

function resolveTranslation(path: string): unknown {
  let value: unknown = translations;
  for (const segment of path.split(".")) {
    if (!value || typeof value !== "object" || !(segment in value)) return undefined;
    value = (value as Record<string, unknown>)[segment];
  }
  return value;
}

export function useT() {
  const { lang, toggleLang } = useContext(LangContext);
  return {
    lang,
    toggleLang,
    t: (key: string): string => {
      const val = resolveTranslation(key);
      if (val && typeof val === "object" && lang in val) {
        const localized = (val as Record<Lang, unknown>)[lang];
        if (typeof localized === "string") return localized;
      }
      if (process.env.NODE_ENV !== "production") console.warn(`Missing translation: ${key}`);
      return "";
    },
    ta: (key: string): string[] => {
      const val = resolveTranslation(key);
      if (val && typeof val === "object" && lang in val) {
        const localized = (val as Record<Lang, unknown>)[lang];
        return Array.isArray(localized) ? localized as string[] : [];
      }
      if (Array.isArray(val)) {
        // Each array element should be a {zh, en} object
        return (val as Array<Record<Lang, string>>).map(v => v[lang]).filter(Boolean);
      }
      return [];
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "zh" ? "en" : "zh";
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations }}>
      {children}
    </LangContext.Provider>
  );
}
