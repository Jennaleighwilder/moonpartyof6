"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const QUESTIONS = [
  { id: "focus", q: "What do you want to focus on most right now?", options: ["Communication", "Romance / date nights", "Reconnecting after conflict", "Physical intimacy", "All of the above"] },
  { id: "time", q: "How much time can you invest weekly?", options: ["5–15 min", "30 min", "1+ hours", "We're ready for a retreat"] },
  { id: "format", q: "What format works best for you?", options: ["Quick reads / guides", "Videos / reels", "Interactive tools", "In-person experiences"] },
];

export default function CompassQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const currentQ = QUESTIONS[step];
  const handleSelect = (opt: string) => {
    setAnswers({ ...answers, [currentQ.id]: opt });
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-pearl-white">
      {/* Editorial header — compass identity */}
      <section className="border-b border-pearl-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-12">
          <Link href="/quiz" className="text-xs uppercase tracking-widest text-pearl-white/50 hover:text-pearl-white transition-colors">
            ← choose another path
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-deep-red/80 mt-6">Relationship Compass</p>
          <h1 className="font-display text-3xl md:text-4xl font-normal mt-2">
            Focus · Time · Format
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-wider text-pearl-white/50 mb-6">
                  Question {step + 1} of {QUESTIONS.length}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-normal mb-10 leading-relaxed">
                  {currentQ.q}
                </h2>
                <div className="space-y-4">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className="w-full p-5 text-left rounded-xl border border-pearl-white/15 hover:border-deep-red/50 hover:bg-deep-red/10 transition-all duration-300"
                    >
                      <span className="text-pearl-white/90">{opt}</span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 mt-10">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-deep-red" : "bg-pearl-white/20"}`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <p className="text-xs uppercase tracking-wider text-deep-red/80">Your map</p>
                <h2 className="font-display text-3xl font-normal">
                  Based on where you are, we recommend:
                </h2>
                <div className="space-y-6">
                  <Link href="/resources" className="block p-8 rounded-2xl border border-pearl-white/15 hover:border-deep-red/40 hover:bg-deep-red/5 transition-all group">
                    <span className="font-display text-xl font-normal group-hover:text-deep-red transition-colors">Free: At-Home Date Guide</span>
                    <p className="text-pearl-white/60 mt-2">Start here for quick wins</p>
                  </Link>
                  <Link href="/guides" className="block p-8 rounded-2xl border border-pearl-white/15 hover:border-deep-red/40 hover:bg-deep-red/5 transition-all group">
                    <span className="font-display text-xl font-normal group-hover:text-deep-red transition-colors">30-Day Relationship Reset</span>
                    <p className="text-pearl-white/60 mt-2">Go deeper with a structured program</p>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link href="/start-here" className="btn-primary">Explore Start Here</Link>
                  <Link href="/quiz" className="px-6 py-3 border border-pearl-white/30 text-pearl-white rounded-lg hover:bg-pearl-white/10 transition-colors">
                    Choose another path
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
