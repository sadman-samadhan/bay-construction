"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Droplets, Flame, KeyRound, Phone, Waves, Zap } from "lucide-react";
import { companyData } from "@/data/company";
import { cn } from "@/lib/utils";

const GUIDES = [
  {
    id: "water",
    label: "Burst pipe / major leak",
    Icon: Droplets,
    steps: [
      "Close the main water valve for the flat (usually near the kitchen or bathroom entrance).",
      "Switch off electricity to rooms where water is near sockets or appliances.",
      "Move valuables and electronics away and soak up water with towels.",
      "Warn the flat below, because water travels fast through slabs.",
    ],
  },
  {
    id: "electric",
    label: "Sparks / burning smell",
    Icon: Zap,
    steps: [
      "Switch off the main breaker at the DB if you can do so safely.",
      "Never touch wires or appliances with wet hands. Do not use water on electrical fires.",
      "Unplug the affected appliance only once power is off.",
      "If there is smoke or fire, leave and call 999 (Fire Service) first.",
    ],
  },
  {
    id: "gas",
    label: "Gas smell",
    Icon: Flame,
    steps: [
      "Do NOT switch any light, fan or appliance on or off, and don't light a match.",
      "Close the gas valve at the stove and the riser if reachable.",
      "Open all windows and doors and get everyone out.",
      "From outside, call the gas utility emergency line (Titas: 16496) and then us.",
    ],
  },
  {
    id: "flood",
    label: "Flooding / waterlogging",
    Icon: Waves,
    steps: [
      "Switch off power to the ground floor and the pump room.",
      "Move vehicles, generators and stored goods to higher ground.",
      "Keep the underground reservoir lid sealed to prevent contamination.",
      "After the water recedes, book tank cleaning before using the water.",
    ],
  },
  {
    id: "lock",
    label: "Locked out",
    Icon: KeyRound,
    steps: [
      "Check with your caretaker or guard for a spare key.",
      "Don't try to force the door or the lock cylinder, as it may increase the damage.",
      "Have your NID ready. We verify residency before opening any door.",
      "Call us and we'll send a lock technician, typically within the hour.",
    ],
  },
];

export function EmergencyGuide() {
  const [active, setActive] = useState(GUIDES[0].id);
  const g = GUIDES.find((x) => x.id === active)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="flex flex-col gap-2">
        {GUIDES.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={cn(
              "flex items-center gap-3 rounded-2xl border p-4 text-left font-semibold transition",
              active === id ? "border-accent-500 bg-accent-50 text-accent-700" : "border-ink-100 bg-white text-ink-800 hover:border-ink-300"
            )}
          >
            <span className={cn("grid h-10 w-10 place-items-center rounded-xl", active === id ? "bg-accent-500 text-white" : "bg-ink-50 text-ink-600")}>
              <Icon className="h-5 w-5" />
            </span>
            {label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={g.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          className="rounded-[2rem] border border-ink-100 bg-white p-6 sm:p-10"
        >
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-600">
            <AlertTriangle className="h-4 w-4" /> While you wait for us
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-ink-950">{g.label}</h3>
          <ol className="mt-6 space-y-4">
            {g.steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-950 text-sm font-bold text-white">{i + 1}</span>
                <span className="pt-1 leading-relaxed text-ink-700">{s}</span>
              </li>
            ))}
          </ol>
          <a href={companyData.emergencyPhoneHref} className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent-500 px-6 font-semibold text-white hover:bg-accent-600">
            <Phone className="h-4 w-4" /> Call {companyData.emergencyPhone}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
