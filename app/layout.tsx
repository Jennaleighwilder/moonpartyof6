import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat, Roboto_Slab, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingStartHere } from "@/components/layout/FloatingStartHere";
import { ChatButton } from "@/components/ChatButton";
import { NeedleCursor } from "@/components/NeedleCursor";
import { AmbientBackground } from "@/components/AmbientBackground";
import { BackgroundManager } from "@/components/BackgroundManager";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moonpartyof6 — Intentional Marriage in the Real World",
  description:
    "Dee & Josh Moon's relationship and lifestyle platform. Free guides, date night ideas, communication tools, and retreats for couples who want deeper connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${montserrat.variable} ${robotoSlab.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-obsidian text-pearl-white antialiased relative min-h-screen">
        <BackgroundManager />
        <AmbientBackground />
        <NeedleCursor />
        <Navigation />
        <main>{children}</main>
        <FloatingStartHere />
        <ChatButton />
        <Footer />
      </body>
    </html>
  );
}
