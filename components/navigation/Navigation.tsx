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
    <header className="sticky top-0 z-50 bg-cream/98 backdrop-blur-md border-b border-charcoal/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-normal text-charcoal hover:text-warm-gold transition-colors"
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
                <button className="font-sans text-sm font-bold text-charcoal hover:text-warm-gold uppercase tracking-[0.2em]">
                  {item.label}
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full left-0 mt-1 py-2 w-48 bg-cream border border-warm-gold/20 shadow-[0_15px_40px_rgba(169,111,19,0.12)] rounded-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-warm-gold/10 hover:text-warm-gold transition-colors font-medium"
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
            className="font-sans text-sm font-bold text-charcoal hover:text-warm-gold uppercase tracking-[0.2em] transition-colors"
          >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/start-here"
            className="bg-warm-gold text-pearl-white font-bold uppercase tracking-[0.35em] text-xs py-3 px-6 rounded-sm hover:bg-gold-light transition-colors"
          >
            Start Here
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-classic-black"
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
            className="lg:hidden fixed inset-0 top-[65px] bg-cream z-40 overflow-y-auto"
          >
            <div className="section-padding flex flex-col gap-8">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold">
                Home
              </Link>
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold">
                Start Here
              </Link>
              <div>
                <p className="text-sleek-silver text-sm uppercase tracking-wider mb-4">About</p>
                <div className="flex flex-col gap-4">
                  <Link href="/our-story" onClick={() => setMobileOpen(false)}>Our Story</Link>
                  <Link href="/mrs-moon" onClick={() => setMobileOpen(false)}>Mrs. Moon</Link>
                  <Link href="/mr-moon" onClick={() => setMobileOpen(false)}>Mr. Moon</Link>
                </div>
              </div>
              <div>
                <p className="text-sleek-silver text-sm uppercase tracking-wider mb-4">Resources</p>
                <div className="flex flex-col gap-4">
                  <Link href="/resources" onClick={() => setMobileOpen(false)}>Free Resources</Link>
                  <Link href="/guides" onClick={() => setMobileOpen(false)}>Guides & Tutorials</Link>
                  <Link href="/lovers" onClick={() => setMobileOpen(false)}>Lovers & Patterns</Link>
                  <Link href="/quiz" onClick={() => setMobileOpen(false)}>Take the Quiz</Link>
                  <Link href="/faqs" onClick={() => setMobileOpen(false)}>FAQs</Link>
                </div>
              </div>
              <div>
                <p className="text-sleek-silver text-sm uppercase tracking-wider mb-4">Experiences</p>
                <div className="flex flex-col gap-4">
                  <Link href="/date-nights" onClick={() => setMobileOpen(false)}>Date Nights & Travel</Link>
                  <Link href="/retreats" onClick={() => setMobileOpen(false)}>Retreats</Link>
                  <Link href="/media-press" onClick={() => setMobileOpen(false)}>Media & Press</Link>
                </div>
              </div>
              <Link href="/work-with-us" onClick={() => setMobileOpen(false)}>Work With Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
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
