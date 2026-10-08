"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { clientSegments } from "@/data/segments";
import { servicesData } from "@/data/services";
import { maintenancePlans } from "@/data/plans";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function SegmentTabs() {
  const [active, setActive] = useState(clientSegments[0].id);
  const seg = clientSegments.find((s) => s.id === active)!;
  const plan = maintenancePlans.find((p) => p.id === seg.plan);

  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-6 lg:px-0">
        {clientSegments.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={cn(
              "flex shrink-0 flex-col items-center gap-2 rounded-2xl border px-4 py-4 text-center text-sm font-semibold transition lg:shrink",
              active === s.id ? "border-brand-500 bg-brand-500 text-white shadow-xl shadow-brand-500/25" : "border-ink-100 bg-white text-ink-700 hover:border-ink-300"
            )}
          >
            <Icon name={s.iconName} className="h-6 w-6" />
            <span className="leading-tight">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={seg.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid gap-8 rounded-[2rem] border border-ink-100 bg-white p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <h3 className="text-2xl font-extrabold leading-tight text-ink-950 sm:text-3xl">{seg.headline}</h3>
            <p className="mt-4 leading-relaxed text-ink-500">{seg.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {seg.needs.map((n) => (
                <li key={n} className="flex items-start gap-2.5 text-sm font-medium text-ink-800">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"><Check className="h-3.5 w-3.5" /></span>
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/who-we-serve#${seg.id}`} className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white hover:bg-ink-800">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
              {plan && (
                <Link href="/maintenance-plans" className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-ink-900 hover:border-ink-900">
                  Recommended: {plan.name}
                </Link>
              )}
            </div>
          </div>
          <div className="rounded-3xl bg-ink-50 p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-ink-400">Most-used services</div>
            <div className="mt-4 space-y-2">
              {seg.services.map((slug) => {
                const s = servicesData.find((x) => x.slug === slug);
                if (!s) return null;
                return (
                  <Link key={slug} href={`/services/${slug}`} className="group flex items-center gap-3 rounded-2xl bg-white p-3 transition hover:shadow-lg">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name={s.iconName} className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-sm font-bold text-ink-900">{s.title}</span>
                    <ArrowRight className="h-4 w-4 text-ink-300 group-hover:text-brand-600" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
