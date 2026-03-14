"use client";

import { motion } from "framer-motion";

type Idea = {
  title: string;
  tagline: string;
  desc: string;
  text: string;
  areaHint?: string;
};

function openPrintWindow(idea: Idea) {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${idea.title} — Moonpartyof6</title>
          <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Montserrat', sans-serif; padding: 40px; background: #f5f5f5; }
            .card { max-width: 500px; margin: 0 auto; background: linear-gradient(to bottom, #1a1a1a 0%, #2e2e2e 100%); color: #f5f5f5; padding: 48px; border-radius: 16px; }
            .card h1 { font-family: 'Bodoni Moda', serif; font-size: 28px; font-weight: 400; margin-bottom: 8px; }
            .card .tagline { font-style: italic; font-size: 18px; opacity: 0.95; margin-bottom: 24px; }
            .card .area { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #A96F13; margin-bottom: 24px; }
            .card .text { font-size: 16px; font-style: italic; padding: 20px; background: rgba(255,255,255,0.08); border-radius: 8px; margin: 24px 0; }
            .card .brand { font-size: 10px; letter-spacing: 0.3em; margin-top: 32px; opacity: 0.7; }
          </style>
        </head>
        <body>
          <div class="card">
            <p class="area">${idea.areaHint ? "Moon-approved · " + idea.areaHint : "Your Date Night"}</p>
            <h1>${idea.title}</h1>
            <p class="tagline">${idea.tagline}</p>
            <p class="text">"${idea.text}"</p>
            <p class="brand">MOONPARTYOF6 · INTENTIONAL MARRIAGE</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
}

export function InvitationCard({ idea }: { idea: Idea }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-obsidian to-charcoal text-pearl-white p-8 md:p-12 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.5)]"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-pearl-white/60 mb-4">Your Date Night Blueprint</p>
      <h3 className="font-display text-3xl md:text-4xl font-normal mb-2">{idea.title}</h3>
      <p className="text-lg italic text-pearl-white/95 mb-6">{idea.tagline}</p>
      {idea.areaHint && (
        <p className="text-xs uppercase tracking-[0.2em] text-warm-gold/90 mb-6">Moon-approved · {idea.areaHint}</p>
      )}
      <div className="rounded-xl bg-pearl-white/10 backdrop-blur-sm p-6 mb-8">
        <p className="text-sm text-pearl-white/70 mb-2">Text to send them</p>
        <p className="text-lg italic">&ldquo;{idea.text}&rdquo;</p>
      </div>
      <p className="text-[10px] uppercase tracking-[0.4em] text-pearl-white/50">Moonpartyof6 · Intentional Marriage</p>
      <button
        onClick={() => openPrintWindow(idea)}
        className="mt-6 w-full py-4 border border-pearl-white/30 text-pearl-white font-medium uppercase tracking-[0.2em] rounded-xl hover:bg-pearl-white/10 transition-all"
      >
        Download / Print Invitation
      </button>
    </motion.div>
  );
}
