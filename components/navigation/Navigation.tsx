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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[20px] border-b border-charcoal/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-normal text-classic-black hover:text-deep-red transition-colors"
          data-cursor-label="home"
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
                <button className="font-sans text-sm font-bold text-classic-black hover:text-deep-red uppercase tracking-[0.2em]">
                  {item.label}
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full left-0 mt-1 py-2 w-48 backdrop-blur-[20px] bg-white border border-charcoal/10 shadow-xl rounded-sm"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-classic-black hover:bg-charcoal/5 hover:text-deep-red transition-colors font-medium"
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
            className="font-sans text-sm font-bold text-classic-black hover:text-deep-red uppercase tracking-[0.2em] transition-colors"
          >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/start-here"
            className="bg-deep-red text-pearl-white font-bold uppercase tracking-[0.35em] text-xs py-3 px-6 rounded-sm hover:bg-mahogany transition-colors"
            data-cursor-label="step inside"
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
            className="lg:hidden fixed inset-0 top-[65px] bg-white z-40 overflow-y-auto"
          >
            <div className="section-padding flex flex-col gap-8">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold text-classic-black hover:text-deep-red">
                Home
              </Link>
              <Link href="/start-here" onClick={() => setMobileOpen(false)} className="font-display text-2xl font-semibold text-classic-black hover:text-deep-red">
                Start Here
              </Link>
              <div>
                <p className="text-deep-red/80 text-sm uppercase tracking-wider mb-4">About</p>
                <div className="flex flex-col gap-4">
                  <Link href="/our-story" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Our Story</Link>
                  <Link href="/mrs-moon" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Mrs. Moon</Link>
                  <Link href="/mr-moon" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Mr. Moon</Link>
                </div>
              </div>
              <div>
                <p className="text-deep-red/80 text-sm uppercase tracking-wider mb-4">Resources</p>
                <div className="flex flex-col gap-4">
                  <Link href="/resources" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Free Resources</Link>
                  <Link href="/guides" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Guides & Tutorials</Link>
                  <Link href="/lovers" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Lovers & Patterns</Link>
                  <Link href="/quiz" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Take the Quiz</Link>
                  <Link href="/faqs" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">FAQs</Link>
                </div>
              </div>
              <div>
                <p className="text-deep-red/80 text-sm uppercase tracking-wider mb-4">Experiences</p>
                <div className="flex flex-col gap-4">
                  <Link href="/date-nights" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Date Nights & Travel</Link>
                  <Link href="/retreats" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Retreats</Link>
                  <Link href="/media-press" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Media & Press</Link>
                </div>
              </div>
              <Link href="/work-with-us" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Work With Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-classic-black hover:text-deep-red">Contact</Link>
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
