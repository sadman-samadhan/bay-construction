"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { servicesData } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { useBooking } from "@/components/booking/BookingProvider";
import { cn, formatBDT } from "@/lib/utils";

const SUGGESTIONS = ["AC not cooling", "Leaking pipe", "Water tank cleaning", "Cockroaches", "Breaker tripping", "Roof leak"];

/** Natural-language-ish search: matches the problem the user types to the right service. */
export function ServiceFinder({ dark = false }: { dark?: boolean }) {
  const router = useRouter();
  const { openBooking } = useBooking();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(0);
  const blurTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const words = query.split(/\s+/).filter((w) => w.length > 1);
    return servicesData
      .map((s) => {
        const hay = [s.title, s.shortDescription, ...s.keywords, ...s.subServices].join(" ").toLowerCase();
        let score = 0;
        if (s.title.toLowerCase().includes(query)) score += 10;
        s.keywords.forEach((k) => {
          if (query.includes(k)) score += 6;
          else if (k.includes(query)) score += 4;
        });
        words.forEach((w) => hay.includes(w) && (score += 1));
        return { s, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((r) => r.s);
  }, [q]);

  const showDropdown = focused && q.trim().length > 0;

  const go = (slug: string) => router.push(`/services/${slug}`);

  return (
    <div className="relative w-full max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (results[active]) go(results[active].slug);
          else openBooking();
        }}
        className={cn(
          "flex items-center gap-2 rounded-full p-1.5 pl-5 shadow-2xl transition",
          dark ? "bg-white shadow-black/30" : "border border-ink-100 bg-white shadow-ink-900/10"
        )}
      >
        <Search className="h-5 w-5 shrink-0 text-ink-400" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          onFocus={() => {
            clearTimeout(blurTimer.current);
            setFocused(true);
          }}
          onBlur={() => (blurTimer.current = setTimeout(() => setFocused(false), 150))}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            }
          }}
          placeholder="What needs fixing? e.g. “AC dripping water”"
          aria-label="Describe your problem"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="finder-results"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] text-ink-900 outline-none placeholder:text-ink-400"
        />
        <button type="submit" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-accent-500 px-5 text-sm font-semibold text-white transition hover:bg-accent-600">
          <span className="hidden sm:inline">Find help</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      {showDropdown && (
        <div id="finder-results" role="listbox" className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-3xl border border-ink-100 bg-white p-2 shadow-2xl shadow-ink-900/20">
          {results.length > 0 ? (
            results.map((s, i) => (
              <button
                key={s.slug}
                role="option"
                aria-selected={i === active}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go(s.slug)}
                onMouseEnter={() => setActive(i)}
                className={cn("flex w-full items-center gap-3 rounded-2xl p-3 text-left", i === active && "bg-ink-50")}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={s.iconName} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-ink-900">{s.title}</span>
                  <span className="block truncate text-xs text-ink-500">{s.shortDescription}</span>
                </span>
                <span className="hidden shrink-0 text-xs font-semibold text-ink-400 sm:block">from {formatBDT(s.priceFrom)}</span>
              </button>
            ))
          ) : (
            <div className="p-4 text-sm text-ink-500">
              Not sure what you need?{" "}
              <button onMouseDown={(e) => e.preventDefault()} onClick={() => openBooking()} className="font-semibold text-brand-700 underline">
                Describe it in a booking
              </button>{" "}
              and we&apos;ll send the right expert.
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={cn("text-xs font-semibold", dark ? "text-ink-300" : "text-ink-400")}>Popular:</span>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setQ(s);
              setFocused(true);
            }}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition",
              dark ? "bg-white/10 text-ink-100 hover:bg-white/20" : "bg-ink-50 text-ink-600 hover:bg-ink-100"
            )}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
