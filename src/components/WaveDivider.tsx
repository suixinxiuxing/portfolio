"use client";

interface WaveDividerProps {
  flip?: boolean;
  color?: "light" | "white" | "dark";
}

export default function WaveDivider({ flip, color = "light" }: WaveDividerProps) {
  const fills: Record<string, { top: string; bottom: string }> = {
    light: { top: "#ffffff", bottom: "#f8fafc" },
    white: { top: "#f8fafc", bottom: "#ffffff" },
    dark: { top: "#ffffff", bottom: "#0f172a" },
  };

  const { top, bottom } = fills[color];
  const path = flip
    ? "M0,0 C240,50 480,-15 720,5 C960,25 1200,-5 1440,0 L1440,60 L0,60 Z"
    : "M0,30 C240,0 480,55 720,25 C960,0 1200,45 1440,20 L1440,60 L0,60 Z";

  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill={top} />
        <rect y="30" width="1440" height="30" fill={bottom} />
      </svg>
    </div>
  );
}
