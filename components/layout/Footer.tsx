"use client";

import { useState } from "react";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

/** Executive Desk — Launchpad-style display options. Minimalist icons, stationary layout. */
function DisplayOptions() {
  const [open, setOpen] = useState(false);
  const [adhd, setAdhd] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="font-mono text-[11px] uppercase tracking-[0.25em] text-sleek-silver/90 hover:text-champagne-gold transition-colors tap-scale"
        aria-expanded={open}
      >
        Display
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute bottom-full right-0 mb-2 z-50 w-64 p-5 backdrop-blur-[20px] rounded-sm border border-white/10 bg-obsidian/60 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-pearl-white/70 mb-4">Launchpad</p>
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded hover:bg-pearl-white/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(243,229,171,0.15)]">
                <span className={`w-6 h-6 flex items-center justify-center rounded border text-xs transition-all duration-300 ${adhd ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold shadow-[0_0_12px_rgba(243,229,171,0.3)]" : "border-pearl-white/20 text-pearl-white/60 group-hover:border-champagne-gold/50 group-hover:shadow-[0_0_12px_rgba(243,229,171,0.2)]"}`}>⊙</span>
                <input type="checkbox" checked={adhd} onChange={(e) => { setAdhd(e.target.checked); document.documentElement.classList.toggle("adhd-focus", e.target.checked); }} className="sr-only" />
                <span className="text-sm text-pearl-white/90">Calm focus</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded hover:bg-pearl-white/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(243,229,171,0.15)]">
                <span className={`w-6 h-6 flex items-center justify-center rounded border text-xs transition-all duration-300 ${contrast ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold shadow-[0_0_12px_rgba(243,229,171,0.3)]" : "border-pearl-white/20 text-pearl-white/60 group-hover:border-champagne-gold/50 group-hover:shadow-[0_0_12px_rgba(243,229,171,0.2)]"}`}>◐</span>
                <input type="checkbox" checked={contrast} onChange={(e) => { setContrast(e.target.checked); document.documentElement.classList.toggle("high-contrast", e.target.checked); }} className="sr-only" />
                <span className="text-sm text-pearl-white/90">High contrast</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer py-2 px-3 rounded hover:bg-pearl-white/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(243,229,171,0.15)]">
                <span className={`w-6 h-6 flex items-center justify-center rounded border text-xs transition-all duration-300 ${motion ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold shadow-[0_0_12px_rgba(243,229,171,0.3)]" : "border-pearl-white/20 text-pearl-white/60 group-hover:border-champagne-gold/50 group-hover:shadow-[0_0_12px_rgba(243,229,171,0.2)]"}`}>◷</span>
                <input type="checkbox" checked={motion} onChange={(e) => { setMotion(e.target.checked); document.documentElement.classList.toggle("reduce-motion", e.target.checked); }} className="sr-only" />
                <span className="text-sm text-pearl-white/90">Reduce motion</span>
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const footerLinks = {
  about: [
    { href: "/our-story", label: "Our Story" },
    { href: "/mrs-moon", label: "Mrs. Moon" },
    { href: "/mr-moon", label: "Mr. Moon" },
  ],
  resources: [
    { href: "/resources", label: "Free Resources" },
    { href: "/guides", label: "Guides" },
    { href: "/lovers", label: "Lovers & Patterns" },
    { href: "/quiz", label: "Quiz" },
  ],
  experiences: [
    { href: "/date-nights", label: "Date Nights" },
    { href: "/retreats", label: "Retreats" },
  ],
  connect: [
    { href: "/work-with-us", label: "Work With Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-classic-black text-pearl-white">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Experiences</h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-charcoal/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-pearl-white/80 text-sm">
              {SITE.name} — {SITE.tagline}
            </p>
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-sleek-silver hover:text-warm-gold text-sm mt-1 block transition-colors">
              {SITE.handle}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <DisplayOptions />
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
