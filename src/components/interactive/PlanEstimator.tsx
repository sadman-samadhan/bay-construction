"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";
import { estimatorConfig } from "@/data/plans";
import { companyData } from "@/data/company";
import { composeMessage, whatsappUrl } from "@/lib/contact";
import { cn, formatBDT } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function PlanEstimator() {
  const [type, setType] = useState(estimatorConfig.propertyTypes[1].id);
  const [acs, setAcs] = useState(2);
  const [addOns, setAddOns] = useState<string[]>(["tank", "emergency"]);
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const base = estimatorConfig.propertyTypes.find((p) => p.id === type)!.base;
  const monthly =
    base + acs * estimatorConfig.perAc + estimatorConfig.addOns.filter((a) => addOns.includes(a.id)).reduce((s, a) => s + a.monthly, 0);
  // Yearly = 10 months' price (2 months free).
  const yearly = monthly * 10;
  const shown = billing === "monthly" ? monthly : yearly;

  const toggle = (id: string) => setAddOns((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const message = composeMessage(`Custom maintenance plan enquiry — ${companyData.name}`, {
    Property: estimatorConfig.propertyTypes.find((p) => p.id === type)?.label,
    "Number of ACs": String(acs),
    "Add-ons": estimatorConfig.addOns.filter((a) => addOns.includes(a.id)).map((a) => a.label).join(", "),
    "Estimate shown": `${formatBDT(monthly)}/month or ${formatBDT(yearly)}/year`,
  });

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-2xl shadow-ink-900/10 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-8 p-6 sm:p-10">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400">1 · Your property</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {estimatorConfig.propertyTypes.map((p) => (
              <button
                key={p.id}
                onClick={() => setType(p.id)}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                  type === p.id ? "border-brand-500 bg-brand-50 text-brand-800 ring-4 ring-brand-500/10" : "border-ink-200 text-ink-700 hover:border-ink-400"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400">2 · Number of ACs</h3>
          <div className="mt-4 flex items-center gap-4">
            <button onClick={() => setAcs((v) => Math.max(0, v - 1))} className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 hover:border-ink-900" aria-label="Fewer ACs">
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-3xl font-extrabold tabular-nums text-ink-950">{acs}</span>
            <button onClick={() => setAcs((v) => Math.min(20, v + 1))} className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 hover:border-ink-900" aria-label="More ACs">
              <Plus className="h-4 w-4" />
            </button>
            <span className="text-sm text-ink-500">Each AC gets scheduled jet-wash servicing.</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400">3 · Add-ons</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {estimatorConfig.addOns.map((a) => {
              const on = addOns.includes(a.id);
              return (
                <button
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition",
                    on ? "border-brand-500 bg-brand-50" : "border-ink-200 hover:border-ink-400"
                  )}
                >
                  <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-md border", on ? "border-brand-500 bg-brand-500 text-white" : "border-ink-300")}>
                    {on && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-ink-800">{a.label}</span>
                  <span className="text-xs text-ink-400">+{formatBDT(a.monthly)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-6 text-white sm:p-10">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative">
          <div className="inline-flex rounded-full bg-white/10 p-1 text-sm font-semibold">
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={cn("rounded-full px-4 py-1.5 capitalize transition", billing === b ? "bg-white text-ink-950" : "text-ink-200")}
              >
                {b}
                {b === "yearly" && <span className="ml-1.5 text-[10px] font-bold text-accent-400">2 months free</span>}
              </button>
            ))}
          </div>
          <div className="mt-8 text-sm text-ink-300">Your estimated plan</div>
          <motion.div key={shown} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-5xl font-extrabold tracking-tight">
            {formatBDT(shown)}
          </motion.div>
          <div className="mt-1 text-sm text-ink-300">per {billing === "monthly" ? "month" : "year"}{billing === "yearly" && ` · you save ${formatBDT(monthly * 2)}`}</div>

          <ul className="mt-8 space-y-2.5 text-sm text-ink-200">
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-brand-400" /> No call-out charges on repairs</li>
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-brand-400" /> Up to 15% off labour on extra jobs</li>
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-brand-400" /> We schedule and remind you</li>
          </ul>
        </div>
        <div className="relative mt-10">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent-500 font-semibold text-white transition hover:bg-accent-600"
          >
            <WhatsAppIcon className="h-5 w-5" /> Get this plan
          </a>
          <p className="mt-3 text-center text-xs text-ink-400">Indicative estimate. Final price is confirmed after a free site visit.</p>
        </div>
      </div>
    </div>
  );
}
