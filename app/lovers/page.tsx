"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/siteConfig";

// Lovers, Liars & All Things Patterned — editorial, dark, literary magazine feel

const LOVERS_QUESTIONS = [
  { q: "In relationships, your deepest pattern is:", A: "I attract the same type of person over and over", B: "I lose myself — I become what they need", C: "I keep walls up until it's too late", D: "I see the real them before they show me, and I stay anyway" },
  { q: "The lie you tell yourself most in love is:", A: "\"This time will be different\"", B: "\"I don't need that much\"", C: "\"If I just give more, they'll finally see me\"", D: "\"I'm too much for anyone to handle\"" },
  { q: "When a relationship ends, what haunts you?", A: "The version of me I became with them", B: "The signs I ignored", C: "How fast I was replaced or forgotten", D: "That I still understand why they did what they did" },
  { q: "The love you secretly want but won't say out loud:", A: "Someone who stays without being convinced", B: "Someone who matches my intensity without flinching", C: "Someone who sees the parts I hide and doesn't run", D: "Someone who fights FOR me, not with me" },
  { q: "What do you most need to understand about your love patterns?", A: "Why I keep choosing the same wound", B: "What I'm actually afraid of underneath it all", C: "Whether I'm repeating something that didn't start with me", D: "How to break the cycle without breaking myself" },
];

const LOVERS_REPORTS: Record<string, { title: string; body: string }> = {
  A: {
    title: "The Loop Runner",
    body: "You already know the pattern. You have watched yourself walk into the same room with a different face at the door. Different name. Same architecture. The loop is not about bad taste — it's a code running beneath your conscious choices. You're drawn to a specific emotional signature because your system was calibrated to recognize it as love. The hardest part is that you see it happening and still cannot stop. That is not weakness. That is a pattern too deep for willpower alone.",
  },
  B: {
    title: "The Invisible Giver",
    body: "You love by disappearing. Slowly. You adjust. You accommodate. You read what they need and become it. The lie that holds this in place: \"I don't need that much.\" You do. You need enormously. But somewhere you learned that your needs were too heavy — so you made yourself lighter. You gave more. You asked for less. And you called it love. It is not love. It is a survival strategy that outlived the danger it was built for.",
  },
  C: {
    title: "The Watcher",
    body: "You see everything. You clock the micro-expressions, the shifts in tone, the distance between what someone says and what they mean. You built walls. Not obvious ones — yours are sophisticated. You let people close enough to think they're in, but there is a room they never reach. You watch from that room. You wait for the evidence that confirms what you expect: that they will leave, or lie, or replace you. The walls don't protect you. They guarantee the outcome you fear.",
  },
  D: {
    title: "The Mirror Keeper",
    body: "You hold the mirror for everyone. You see people with devastating clarity — their wounds, their patterns, their potential — and you stay. Not because you're naive. Because you understand. You understand so deeply that you absorb their pain as if comprehension were responsibility. But who holds the mirror for you? Who sees YOUR pattern with the same clarity you give everyone else? So far, no one. Because you have made yourself the seer and never the seen.",
  },
  MIXED: {
    title: "The Pattern Breaker",
    body: "Your answers don't settle into one pattern because you're running several. The loop, the giving, the walls, the mirror — they take turns. This is actually a sign of transition. When a single dominant pattern starts fracturing, it means the original code is breaking down. You're between loops. The old architecture is crumbling and the new one hasn't been built yet. This is disorienting. It is also powerful. Right now, before the next pattern calcifies, you have a window to choose differently.",
  },
};

function getDominantAnswer(answers: string[]): string {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => { if (a && counts.hasOwnProperty(a)) counts[a]++; });
  const max = Math.max(...Object.values(counts));
  const dominantLetters = Object.keys(counts).filter((k) => counts[k] === max);
  if (dominantLetters.length === 1) return dominantLetters[0];
  const q5 = answers[4];
  if (q5 && dominantLetters.includes(q5)) return q5;
  return "MIXED";
}

export default function LoversPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{ title: string; body: string } | null>(null);

  const currentQ = LOVERS_QUESTIONS[step];

  const handleSelect = (letter: string) => {
    const next = [...answers, letter];
    setAnswers(next);
    if (step >= 4) {
      const key = getDominantAnswer(next);
      setResult(LOVERS_REPORTS[key] || LOVERS_REPORTS.MIXED);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-classic-black text-pearl-white">
      {/* Editorial masthead — Lovers identity */}
      <section className="border-b border-pearl-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-12">
          <Link href="/quiz" className="text-xs uppercase tracking-widest text-pearl-white/40 hover:text-pearl-white transition-colors">
            ← choose another path
          </Link>
          <p className="text-xs uppercase tracking-[0.35em] text-deep-red/70 mt-8">
            Lovers, Liars & All Things Patterned
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-normal mt-4 max-w-2xl leading-[1.15]">
            Your Pattern Glimpse
          </h1>
          <p className="text-pearl-white/60 mt-6 max-w-xl">
            Five questions. One thread. Every relationship has a pattern running underneath.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-pearl-white/40 mb-8">
                  Question {step + 1} of 5
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-normal leading-relaxed mb-12">
                  {currentQ.q}
                </h2>
                <div className="space-y-4">
                  {["A", "B", "C", "D"].map((letter) => {
                    const text = (currentQ as Record<string, string>)[letter];
                    return (
                      <motion.button
                        key={letter}
                        onClick={() => handleSelect(letter)}
                        whileHover={{ scale: 1.01, x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-start gap-6 p-6 rounded-xl border border-pearl-white/10 hover:border-deep-red/40 hover:bg-deep-red/5 text-left transition-all duration-300 group"
                      >
                        <span className="font-display text-deep-red/80 group-hover:text-deep-red shrink-0 text-lg">
                          {letter}.
                        </span>
                        <span className="text-pearl-white/85 leading-relaxed">{text}</span>
                      </motion.button>
                    );
                  })}
                </div>
                <div className="flex gap-3 mt-12">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-deep-red" : "bg-pearl-white/15"}`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-deep-red/70">
                  Your Love Pattern
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
                  {result.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-pearl-white/80 text-lg md:text-xl leading-relaxed">
                    {result.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-8">
                  <button onClick={handleReset} className="px-6 py-3 border border-pearl-white/30 rounded-xl hover:bg-pearl-white/10 transition-colors">
                    Take Again
                  </button>
                  <Link href="/date-nights" className="btn-primary">
                    Date Night Spark Generator
                  </Link>
                </div>
                <p className="pt-12 text-sm text-pearl-white/40 border-t border-pearl-white/10">
                  This is a glimpse. The full Pattern Map — 24 categories, 5 DYAD depth questions — is available through The Forgotten Code Research Institute.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-20 text-center text-sm text-pearl-white/30">
            From <Link href="/" className="text-deep-red/80 hover:text-deep-red transition-colors">{SITE.name}</Link>
            {" · "}
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red/80 hover:text-deep-red transition-colors">
              {SITE.handle}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
