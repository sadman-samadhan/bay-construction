"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getCurrentSeasonId, seasons } from "@/data/seasons";
import { servicesData } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const noopSubscribe = () => () => {};

export function SeasonalPlanner() {
  // "Now" is resolved on the client only, so the prerendered HTML stays stable.
  const current = useSyncExternalStore(noopSubscribe, () => getCurrentSeasonId(), () => null);
  const [picked, setActive] = useState<string | null>(null);
  const active = picked ?? current ?? seasons[0].id;

  const season = seasons.find((s) => s.id === active)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:px-0">
        {seasons.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={cn(
              "group relative flex shrink-0 items-center gap-4 rounded-2xl border p-4 text-left transition lg:w-full",
              active === s.id ? "border-white/20 bg-white/10" : "border-white/5 hover:bg-white/5"
            )}
          >
            <span className={cn("grid h-11 w-11 place-items-center rounded-xl transition", active === s.id ? "bg-accent-500 text-white" : "bg-white/10 text-ink-200")}>
              <Icon name={s.iconName} className="h-5 w-5" />
            </span>
            <span>
              <span className="flex items-center gap-2 font-bold text-white">
                {s.name}
                {current === s.id && <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold uppercase">Now</span>}
              </span>
              <span className="block text-xs text-ink-300">{s.monthLabel} · {s.bangla}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={season.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <p className="text-lg font-semibold text-white">{season.focus}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {season.tasks.map((t, i) => {
              const svc = servicesData.find((s) => s.slug === t.service);
              return (
                <Link
                  key={t.title}
                  href={`/services/${t.service}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 text-ink-900 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-extrabold text-brand-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug">{t.title}</span>
                    {svc && <span className="block text-xs text-ink-400">{svc.title}</span>}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition group-hover:text-brand-600" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
