"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider><MotionConfig reducedMotion="user">{children}</MotionConfig></LanguageProvider>;
}
