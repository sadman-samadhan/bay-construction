"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { faqCategories, faqsData } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

export function FaqExplorer() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    return faqsData.filter(
      (f) =>
        (cat === "All" || f.category === cat) &&
        (!query || f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query))
    );
  }, [cat, q]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search questions, e.g. warranty, bKash, reschedule…"
          aria-label="Search FAQs"
          className="h-14 w-full rounded-full border border-ink-200 bg-white pl-14 pr-5 shadow-lg shadow-ink-900/5 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
      <div className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
        {["All", ...faqCategories].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
              cat === c ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {items.length ? (
          <Accordion key={`${cat}-${q}`} items={items} defaultOpen={q ? 0 : null} />
        ) : (
          <p className="rounded-2xl border border-dashed border-ink-200 p-8 text-center text-ink-500">No questions match. Ask us directly using the form below.</p>
        )}
      </div>
    </div>
  );
}
