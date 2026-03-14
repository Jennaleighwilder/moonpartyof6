"use client";

import Link from "next/link";
import { useState } from "react";

export function FloatingStartHere() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-14 right-0 w-72 bg-white border border-charcoal/10 rounded-xl shadow-2xl p-5">
          <p className="text-xs uppercase tracking-wider text-charcoal/70 mb-3">Quick links</p>
          <Link href="/start-here" className="block py-2.5 text-deep-red hover:underline font-medium">Start Here</Link>
          <Link href="/#email" className="block py-2.5 text-deep-red hover:underline font-medium">Join the List</Link>
          <Link href="/quiz" className="block py-2.5 text-deep-red hover:underline font-medium">Take the Quiz</Link>
          <Link href="/resources" className="block py-2.5 text-deep-red hover:underline font-medium">Free Guides</Link>
          <Link href="/our-story" className="block py-2.5 text-deep-red hover:underline font-medium">Our Story</Link>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-deep-red text-pearl-white shadow-lg hover:bg-mahogany transition-colors flex items-center justify-center font-display text-sm"
        aria-label="Start Here - quick links"
      >
        Start
      </button>
    </div>
  );
}
