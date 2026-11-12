import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/content/site";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-bodoni", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${brand.name} · Social media, content & strategy`, template: `%s · ${brand.name}` },
  description: "Daisy Digital is a creative agency for social media, content, strategy and consulting.",
};

export const viewport: Viewport = { themeColor: "#fbf9fc" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${hanken.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
