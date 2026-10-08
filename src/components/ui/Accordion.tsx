"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({
  items,
  defaultOpen = 0,
  dark = false,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-2xl border transition-colors",
              dark
                ? "border-white/10 bg-white/5"
                : isOpen
                  ? "border-brand-200 bg-white shadow-lg shadow-ink-900/5"
                  : "border-ink-100 bg-white hover:border-ink-200"
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={cn("font-bold sm:text-lg", dark ? "text-white" : "text-ink-950")}>{item.q}</span>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                  isOpen ? "rotate-45 bg-accent-500 text-white" : dark ? "bg-white/10 text-white" : "bg-ink-50 text-ink-700"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className={cn("px-5 pb-6 leading-relaxed sm:px-6", dark ? "text-ink-200" : "text-ink-500")}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
