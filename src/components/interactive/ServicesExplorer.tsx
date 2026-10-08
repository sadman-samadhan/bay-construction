"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { serviceCategories, type ServiceCategoryId, type ServiceItem } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/** Category tabs + optional search over service cards. */
export function ServicesExplorer({
  services,
  withSearch = false,
  limit,
}: {
  services: ServiceItem[];
  withSearch?: boolean;
  limit?: number;
}) {
  const [cat, setCat] = useState<ServiceCategoryId | "all" | "popular">(limit ? "popular" : "all");
  const [q, setQ] = useState("");

  const tabs = [
    ...(limit ? [{ id: "popular" as const, title: "Most booked", iconName: "Sparkles" }] : [{ id: "all" as const, title: "All services", iconName: "Grid3x3" }]),
    ...serviceCategories,
  ];

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    let items = services.filter((s) =>
      cat === "all" ? true : cat === "popular" ? s.popular : s.category === cat
    );
    if (query) {
      items = items.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.shortDescription.toLowerCase().includes(query) ||
          s.keywords.some((k) => k.includes(query) || query.includes(k)) ||
          s.subServices.some((x) => x.toLowerCase().includes(query))
      );
    }
    return limit ? items.slice(0, limit) : items;
  }, [services, cat, q, limit]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setCat(t.id)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
                cat === t.id ? "border-ink-950 bg-ink-950 text-white shadow-lg" : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
              )}
            >
              <Icon name={t.iconName} className={cn("h-4 w-4", cat === t.id ? "text-brand-300" : "text-brand-600")} />
              {t.title}
            </button>
          ))}
        </div>
        {withSearch && (
          <div className="relative w-full lg:w-72">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services…"
              aria-label="Search services"
              className="h-11 w-full rounded-full border border-ink-200 bg-white pl-11 pr-10 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
            />
            {q && (
              <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700" aria-label="Clear search">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {cat !== "all" && cat !== "popular" && (
        <p className="mt-5 text-sm text-ink-500">{serviceCategories.find((c) => c.id === cat)?.blurb}</p>
      )}

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((s) => (
            <motion.div
              key={s.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-ink-200 p-10 text-center text-ink-500">
          No services match &ldquo;{q}&rdquo;. Try another word, or message us on WhatsApp. We probably still do it.
        </div>
      )}
    </div>
  );
}
