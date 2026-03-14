"use client";

import { useState } from "react";

export function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [adhdMode, setAdhdMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div className="bg-charcoal/5 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-charcoal hover:text-deep-red text-sm font-medium"
          aria-expanded={open}
          aria-label="Accessibility options"
        >
          <span aria-hidden>♿</span>
          <span>Accessibility</span>
          <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="max-w-7xl mx-auto px-6 pb-4 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={adhdMode}
              onChange={(e) => {
                setAdhdMode(e.target.checked);
                document.documentElement.classList.toggle("adhd-focus", e.target.checked);
              }}
              className="rounded"
            />
            <span>ADHD Focus (reduced animations, narrower text)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(e) => {
                setHighContrast(e.target.checked);
                document.documentElement.classList.toggle("high-contrast", e.target.checked);
              }}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={(e) => {
                setReducedMotion(e.target.checked);
                document.documentElement.classList.toggle("reduce-motion", e.target.checked);
              }}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>
        </div>
      )}
    </div>
  );
}
