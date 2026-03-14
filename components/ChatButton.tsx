"use client";

import { useState } from "react";
import Link from "next/link";

export function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-deep-red text-pearl-white shadow-[0_10px_20px_rgba(122,12,24,0.25)] hover:bg-mahogany transition-all duration-300 flex items-center justify-center border border-pearl-white/20"
        aria-label="Chat with us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] rounded-2xl bg-white shadow-xl border border-sleek-silver/30 p-4 animate-fade-in">
          <p className="text-sm text-charcoal mb-3">
            hey! we&apos;re dee + josh. want to chat? drop us a line.
          </p>
          <Link
            href="/contact"
            className="inline-block text-deep-red font-medium text-sm hover:underline"
          >
            contact us →
          </Link>
        </div>
      )}
    </>
  );
}
