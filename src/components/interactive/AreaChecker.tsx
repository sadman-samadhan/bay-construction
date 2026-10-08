"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MapPin, Search, XCircle } from "lucide-react";
import { serviceAreas } from "@/data/company";
import { whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

function findArea(input: string) {
  const query = input.trim().toLowerCase();
  if (query.length < 3) return null;
  for (const g of serviceAreas) {
    const area = g.areas.find((a) => a.toLowerCase().includes(query) || query.includes(a.toLowerCase()));
    if (area) return { area, ...g };
  }
  return false;
}

export function AreaChecker({ dark = false }: { dark?: boolean }) {
  const [q, setQ] = useState("");
  const [activeCity, setActiveCity] = useState(serviceAreas[0].city);

  const match = findArea(q);

  const city = serviceAreas.find((g) => g.city === activeCity)!;

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type your area, e.g. Mirpur DOHS"
          aria-label="Check your area"
          className="h-14 w-full rounded-full border border-ink-200 bg-white pl-14 pr-5 text-ink-900 shadow-lg shadow-ink-900/5 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
      <AnimatePresence mode="wait">
        {match !== null && (
          <motion.div
            key={match ? match.area : "none"}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "mt-3 flex items-start gap-3 rounded-2xl p-4 text-sm",
              match ? "bg-brand-50 text-brand-900" : "bg-accent-50 text-accent-700"
            )}
          >
            {match ? (
              <>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <strong>Yes, we cover {match.area}</strong> ({match.city}). {match.note}.
                </span>
              </>
            ) : (
              <>
                <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  We couldn&apos;t find that area, but we may still be able to help.{" "}
                  <a className="font-semibold underline" target="_blank" rel="noopener noreferrer" href={whatsappUrl(`Hi! Do you serve ${q}?`)}>
                    Ask us on WhatsApp
                  </a>
                  .
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap gap-2">
        {serviceAreas.map((g) => (
          <button
            key={g.city}
            onClick={() => setActiveCity(g.city)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              activeCity === g.city
                ? "bg-ink-950 text-white"
                : dark ? "bg-white/10 text-ink-100 hover:bg-white/20" : "bg-ink-50 text-ink-700 hover:bg-ink-100"
            )}
          >
            {g.city}
          </button>
        ))}
      </div>
      <p className={cn("mt-4 text-sm", dark ? "text-ink-300" : "text-ink-500")}>{city.note}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {city.areas.map((a) => (
          <span key={a} className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium", dark ? "border-white/15 text-ink-100" : "border-ink-100 bg-white text-ink-700")}>
            <MapPin className="h-3 w-3 text-brand-500" /> {a}
          </span>
        ))}
      </div>
    </div>
  );
}
