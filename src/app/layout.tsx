import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "陈希 | Chen Xi — Portfolio",
  description: "水利工程 · 海洋工程 · CFD数值模拟 · 流固耦合分析",
  keywords: ["陈希", "水利工程", "CFD", "海洋工程", "中国海洋大学"],
  authors: [{ name: "陈希" }],
  openGraph: { title: "陈希 | Portfolio", description: "水利工程 · CFD数值模拟", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#1a1a2e]">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
