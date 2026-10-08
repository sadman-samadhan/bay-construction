"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ratingLabels, testimonialsData, type Testimonial } from "@/data/testimonials";
import { Stars } from "@/components/ui/Stars";
import { cn } from "@/lib/utils";

const avg = (t: Testimonial) => Object.values(t.ratings).reduce((a, b) => a + b, 0) / 5;

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonialsData[i];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonialsData.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (d: number) => setI((v) => (v + d + testimonialsData.length) % testimonialsData.length);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 text-white sm:p-12">
          <div className="absolute inset-0 bg-grid-dark" />
          <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5" />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <Stars value={avg(t)} />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed sm:text-2xl">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 font-bold">
                  {t.name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(-2).map((w) => w[0]).join("")}
                </span>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-ink-300">{t.role} · {t.location}</div>
                </div>
                <span className="ml-auto hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-300 sm:block">{t.service}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] border border-ink-100 bg-white p-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-ink-400">How they rated us</div>
            <div className="mt-6 space-y-4">
              {(Object.keys(ratingLabels) as (keyof Testimonial["ratings"])[]).map((k) => (
                <div key={k}>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-ink-700">{ratingLabels[k]}</span>
                    <span className="font-bold text-ink-950">{t.ratings[k]}.0</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink-50">
                    <motion.div
                      key={`${t.id}-${k}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(t.ratings[k] / 5) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {testimonialsData.map((x, idx) => (
                <button
                  key={x.id}
                  onClick={() => setI(idx)}
                  aria-label={`Show review ${idx + 1}`}
                  className={cn("h-2 rounded-full transition-all", idx === i ? "w-7 bg-brand-500" : "w-2 bg-ink-200 hover:bg-ink-300")}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 hover:border-ink-900" aria-label="Previous review">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full bg-ink-950 text-white hover:bg-ink-800" aria-label="Next review">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
