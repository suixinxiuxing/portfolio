"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function ShimmerButton({
  children,
  href,
  onClick,
  className = "",
}: ShimmerButtonProps) {
  const base = `relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 font-medium text-[10px]transition-all duration-300 ${className}`;

  const content = (
    <motion.span
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer gradient border */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0e7490] via-[#06b6d4] to-[#0e7490] bg-[length:200%_100%] animate-shimmer" />

      {/* Inner background */}
      <span className="absolute inset-[1.5px] rounded-full bg-[#0e7490]" />

      {/* Shimmer shine */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-shine" />

      {/* Text */}
      <span className="relative z-10 text-white">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button onClick={onClick}>{content}</button>;
}
