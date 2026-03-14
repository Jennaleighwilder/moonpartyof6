"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TRAVEL_QUESTIONS,
  computeDestination,
  type TravelDestination,
} from "@/lib/travelDestinations";
import { SITE } from "@/lib/siteConfig";

export function TravelQuiz({ variant = "default" }: { variant?: "default" | "editorial" }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<TravelDestination | null>(null);

  const currentQ = TRAVEL_QUESTIONS[step];
  const isLastStep = step === TRAVEL_QUESTIONS.length - 1;
  const isEditorial = variant === "editorial";

  const handleSelect = (optionId: string) => {
    const next = { ...answers, [currentQ.id]: optionId };
    setAnswers(next);
    if (isLastStep) {
      setResult(computeDestination(next));
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className={isEditorial ? "max-w-2xl mx-auto" : "max-w-xl mx-auto"}>
      {!isEditorial && (
        <>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-classic-black text-center mb-2">
            Where are you being called?
          </h3>
          <p className="text-charcoal text-center mb-8">
            Three questions. One destination. A postcard from your next adventure.
          </p>
        </>
      )}

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 md:p-8 ${
              isEditorial
                ? "bg-white/80 border-2 border-mahogany/20 shadow-xl backdrop-blur-sm"
                : "bg-white border border-charcoal/10 shadow-lg"
            }`}
          >
            <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${isEditorial ? "text-mahogany" : "text-deep-red/80"}`}>
              Question {step + 1} of {TRAVEL_QUESTIONS.length}
            </p>
            <h4 className={`font-display mb-6 ${isEditorial ? "text-2xl font-normal text-charcoal" : "text-xl font-semibold"}`}>
              {currentQ.question}
            </h4>
            <div className="space-y-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                    isEditorial
                      ? answers[currentQ.id] === opt.id
                        ? "border-mahogany bg-mahogany/10"
                        : "border-charcoal/20 hover:border-mahogany/40 hover:bg-mahogany/5"
                      : answers[currentQ.id] === opt.id
                        ? "border-deep-red bg-deep-red/5"
                        : "border-charcoal/15 hover:border-deep-red/40 hover:bg-pearl-white"
                  }`}
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <RetroPostcard destination={result} onReset={handleReset} />
        )}
      </AnimatePresence>
    </div>
  );
}

function RetroPostcard({
  destination,
  onReset,
}: {
  destination: TravelDestination;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Retro postcard — vintage postcard aesthetic */}
      <div className="bg-[#f8f0e6] border-2 border-charcoal/20 rounded-lg shadow-xl overflow-hidden">
        {/* Postcard "stamp" corner */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded border-2 border-deep-red/60 flex items-center justify-center text-deep-red font-display text-xs font-semibold">
          MOON
        </div>

        {/* Front: destination header */}
        <div className="p-6 pb-4 border-b border-charcoal/15 bg-gradient-to-b from-white/50 to-transparent">
          <p className="text-xs uppercase tracking-widest text-charcoal/60 mb-1">
            Greetings from
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-classic-black">
            {destination.name}
          </h2>
          <p className="text-charcoal/80 mt-1 italic">{destination.tagline}</p>
        </div>

        {/* "Photo" area — decorative */}
        <div className="h-32 md:h-40 bg-gradient-to-br from-mahogany/20 via-deep-red/10 to-charcoal/10 flex items-center justify-center">
          <span className="text-6xl md:text-7xl opacity-40">
            {destination.postcardVibe === "beach" && "🏖️"}
            {destination.postcardVibe === "historic" && "🏛️"}
            {destination.postcardVibe === "urban" && "🌆"}
            {destination.postcardVibe === "tropical" && "🌴"}
            {destination.postcardVibe === "arts" && "🎨"}
            {destination.postcardVibe === "coastal" && "⛵"}
          </span>
        </div>

        {/* Inscription — handwritten feel */}
        <div className="p-6 pt-4">
          <p className="text-charcoal leading-relaxed font-serif text-base md:text-lg italic">
            {destination.inscription}
          </p>
          <p className="mt-6 text-right font-display text-sm text-charcoal/70">
            — <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline">{SITE.handle}</a>
          </p>

          {/* Affiliate links — places Moonpartyof6 is affiliated with */}
          {destination.affiliateLinks && destination.affiliateLinks.length > 0 && (
            <div className="mt-8 pt-6 border-t border-charcoal/15">
              <p className="text-xs uppercase tracking-wider text-charcoal/60 mb-3">Where to go</p>
              <div className="flex flex-wrap gap-3">
                {destination.affiliateLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-deep-red/10 text-deep-red font-medium text-sm hover:bg-deep-red/20 transition-colors"
                  >
                    {link.label}
                    {link.note && <span className="text-charcoal/60 font-normal">({link.note})</span>}
                    {link.href.startsWith("http") && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-6 w-full py-3 text-sm font-medium text-deep-red hover:text-mahogany border border-deep-red/30 rounded-lg hover:bg-deep-red/5 transition-all"
      >
        Take the quiz again
      </button>
    </motion.div>
  );
}
