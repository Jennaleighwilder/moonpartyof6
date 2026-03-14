import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityBar } from "@/components/layout/AccessibilityBar";
import { FloatingStartHere } from "@/components/layout/FloatingStartHere";
import { ChatButton } from "@/components/ChatButton";

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
      className={`${bodoniModa.variable} ${montserrat.variable}`}
    >
      <body className="font-sans bg-cream text-charcoal antialiased">
        <AccessibilityBar />
        <Navigation />
        <main>{children}</main>
        <FloatingStartHere />
        <ChatButton />
        <Footer />
      </body>
    </html>
  );
}
