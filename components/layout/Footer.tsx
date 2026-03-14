"use client";

import { useState } from "react";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

function DisplayOptions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sleek-silver hover:text-warm-gold text-xs uppercase tracking-wider transition-colors"
        aria-expanded={open}
      >
        Display options
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute bottom-full right-0 mb-2 z-50 w-56 p-4 bg-charcoal rounded-lg border border-charcoal/50 shadow-xl">
            <p className="text-xs text-sleek-silver mb-3">Adjust how the site displays</p>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-pearl-white/90 mb-2">
              <input type="checkbox" onChange={(e) => document.documentElement.classList.toggle("adhd-focus", e.target.checked)} className="rounded" />
              <span>Calm focus (reduced motion, narrower text)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-pearl-white/90 mb-2">
              <input type="checkbox" onChange={(e) => document.documentElement.classList.toggle("high-contrast", e.target.checked)} className="rounded" />
              <span>High contrast</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-pearl-white/90">
              <input type="checkbox" onChange={(e) => document.documentElement.classList.toggle("reduce-motion", e.target.checked)} className="rounded" />
              <span>Reduce motion</span>
            </label>
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
