"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  {
    label: "About",
    children: [
      { href: "/our-story", label: "Our Story" },
      { href: "/mrs-moon", label: "Mrs. Moon" },
      { href: "/mr-moon", label: "Mr. Moon" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: "/resources", label: "Free Resources" },
      { href: "/guides", label: "Guides & Tutorials" },
      { href: "/lovers", label: "Lovers & Patterns" },
      { href: "/quiz", label: "Quiz" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    label: "Experiences",
    children: [
      { href: "/date-nights", label: "Date Nights & Travel" },
      { href: "/retreats", label: "Retreats" },
      { href: "/media-press", label: "Media & Press" },
    ],
  },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur-[20px] border-b border-champagne-gold/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-normal text-pearl-white hover:text-champagne-gold transition-colors"
        >
          Dee & Josh Moon
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="font-sans text-sm font-bold text-pearl-white hover:text-champagne-gold uppercase tracking-[0.2em]">
                  {item.label}
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full left-0 mt-1 py-2 w-48 backdrop-blur-[20px] bg-obsidian/95 border border-champagne-gold/20 shadow-xl rounded-sm"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-pearl-white hover:bg-champagne-gold/10 hover:text-champagne-gold transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
          <Link
            key={item.href}
            href={item.href}
            className="font-sans text-sm font-bold text-pearl-white hover:text-champagne-gold uppercase tracking-[0.2em] transition-colors"
          >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/start-here"
            className="bg-champagne-gold text-obsidian font-bold uppercase tracking-[0.35em] text-xs py-3 px-6 rounded-sm hover:bg-champagne-gold/90 transition-colors"
          >
            Start Here
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-pearl-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-[65px] bg-obsidian z-40 overflow-y-auto"
          >
            <div className="section-padding flex flex-col gap-8">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold text-pearl-white hover:text-champagne-gold">
                Home
              </Link>
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold text-pearl-white hover:text-champagne-gold">
                Start Here
              </Link>
              <div>
                <p className="text-champagne-gold/80 text-sm uppercase tracking-wider mb-4">About</p>
                <div className="flex flex-col gap-4">
                  <Link href="/our-story" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Our Story</Link>
                  <Link href="/mrs-moon" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Mrs. Moon</Link>
                  <Link href="/mr-moon" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Mr. Moon</Link>
                </div>
              </div>
              <div>
                <p className="text-champagne-gold/80 text-sm uppercase tracking-wider mb-4">Resources</p>
                <div className="flex flex-col gap-4">
                  <Link href="/resources" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Free Resources</Link>
                  <Link href="/guides" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Guides & Tutorials</Link>
                  <Link href="/lovers" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Lovers & Patterns</Link>
                  <Link href="/quiz" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Take the Quiz</Link>
                  <Link href="/faqs" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">FAQs</Link>
                </div>
              </div>
              <div>
                <p className="text-champagne-gold/80 text-sm uppercase tracking-wider mb-4">Experiences</p>
                <div className="flex flex-col gap-4">
                  <Link href="/date-nights" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Date Nights & Travel</Link>
                  <Link href="/retreats" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Retreats</Link>
                  <Link href="/media-press" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Media & Press</Link>
                </div>
              </div>
              <Link href="/work-with-us" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Work With Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-pearl-white hover:text-champagne-gold">Contact</Link>
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center">
                Start Here
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
