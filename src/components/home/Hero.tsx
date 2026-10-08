"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { companyData } from "@/data/company";
import { ServiceFinder } from "@/components/interactive/ServiceFinder";

const PROBLEMS = ["leaking pipes", "tripping breakers", "dusty ACs", "damp walls", "dirty water tanks", "cockroaches"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PROBLEMS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm backdrop-blur"
          >
            <span className="flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-bold">
              <Star className="h-3 w-3 fill-white" /> {companyData.stats.rating}
            </span>
            <span className="text-ink-200">Rated by {companyData.stats.reviews.toLocaleString("en-US")}+ families in Dhaka & Chattogram</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]"
          >
            Say goodbye to
            <span className="relative block h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={PROBLEMS[i]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.61, 0.35, 1] }}
                  className="text-gradient absolute left-0"
                >
                  {PROBLEMS[i]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200"
          >
            One trusted team for every repair, service and maintenance job your home, building or office needs, from a dripping tap to a full annual care plan.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9">
            <ServiceFinder dark />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-ink-200 sm:grid-cols-3"
          >
            <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-brand-400" /> Verified technicians</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-400" /> Written warranty</li>
            <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-brand-400" /> ~60-min emergency</li>
          </motion.ul>
        </div>

        {/* Visual collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mx-auto hidden aspect-[4/4.2] w-full max-w-[560px] sm:block"
        >
          <div className="absolute left-0 top-0 h-[62%] w-[62%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/services/plumbing.jpg" alt="Plumber repairing a pipe" fill priority sizes="360px" className="object-cover" />
          </div>
          <div className="absolute right-0 top-[8%] h-[44%] w-[34%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/services/hvac.jpg" alt="AC technician servicing a unit" fill sizes="200px" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-[4%] h-[50%] w-[60%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/services/cleaning.jpg" alt="Cleaning crew deep-cleaning a kitchen" fill sizes="340px" className="object-cover" />
          </div>
          <div className="absolute bottom-[6%] left-[2%] h-[30%] w-[32%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/services/electrical.jpg" alt="Electrician at a distribution board" fill sizes="180px" className="object-cover" />
          </div>

          {/* Floating status cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -left-6 top-[54%] w-60 animate-float rounded-2xl bg-white p-4 text-ink-900 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
                RK
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
              </span>
              <div>
                <div className="text-xs font-semibold text-ink-400">Technician on the way</div>
                <div className="text-sm font-bold">Rakib · ETA 24 min</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500"><MapPin className="h-3.5 w-3.5 text-accent-500" /> Mohakhali → Gulshan 2</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            style={{ animationDelay: "1.5s" }}
            className="absolute -right-4 top-[56%] w-56 animate-float rounded-2xl bg-white p-4 text-ink-900 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-brand-700"><CheckCircle2 className="h-5 w-5" /> Job completed</div>
            <p className="mt-1.5 text-xs text-ink-500">Photo report sent · 90-day warranty activated</p>
            <div className="mt-2 flex gap-0.5">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />)}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
