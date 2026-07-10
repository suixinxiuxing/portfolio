"use client";

import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { useT } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t: tt, lang } = useT();
  return (
    <section id="hero">
      <ScrollMorphHero
        lang={lang}
        heroSchool={tt("hero.school")}
        heroSubtitle={tt("hero.subtitle")}
        heroCta1={tt("hero.cta1")}
        heroCta2={tt("hero.cta2")}
      />
    </section>
  );
}
