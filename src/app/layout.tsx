import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HtmlLang from "@/components/HtmlLang";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://suixinxiuxing.github.io"),
  alternates: { canonical: "/portfolio/" },
  title: "陈希 Chen Xi | 海洋工程与数据分析作品集",
  description: "陈希的个人作品集：海洋工程、流体仿真、数据分析与项目实践。中国海洋大学水利工程硕士。",
  keywords: ["陈希", "Chen Xi", "水利工程", "CFD", "海洋工程", "中国海洋大学"],
  authors: [{ name: "陈希" }],
  openGraph: {
    title: "陈希 Chen Xi | 海洋工程与数据分析作品集",
    description: "海洋工程、流体仿真、数据分析与项目实践。",
    url: "/portfolio/",
    siteName: "陈希 · Chen Xi",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HtmlLang className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </HtmlLang>
  );
}
