"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, Clock, MapPin, Search } from "lucide-react";
import { jobOpenings } from "@/data/careers";
import { companyData } from "@/data/company";
import { mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

export function CareersBoard() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const list = useMemo(
    () =>
      jobOpenings.filter(
        (j) =>
          (dept === "All" || j.department === dept) &&
          (loc === "All" || j.location === loc) &&
          (!q.trim() || `${j.title} ${j.summary}`.toLowerCase().includes(q.trim().toLowerCase()))
      ),
    [q, dept, loc]
  );

  const select = "h-12 rounded-full border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-800 outline-none focus:border-brand-500";

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
        <div className="relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search roles…" aria-label="Search roles" className="h-12 w-full rounded-full border border-ink-200 bg-white pl-12 pr-5 text-sm outline-none focus:border-brand-500" />
        </div>
        <select value={dept} onChange={(e) => setDept(e.target.value)} className={select} aria-label="Department">
          <option>All</option>
          {uniq(jobOpenings.map((j) => j.department)).map((d) => <option key={d}>{d}</option>)}
        </select>
        <select value={loc} onChange={(e) => setLoc(e.target.value)} className={select} aria-label="Location">
          <option>All</option>
          {uniq(jobOpenings.map((j) => j.location)).map((d) => <option key={d}>{d}</option>)}
        </select>
        <span className="text-sm font-semibold text-ink-500 md:pl-2">{list.length} of {jobOpenings.length} roles</span>
      </div>

      <div className="mt-8 space-y-3">
        {list.map((j) => {
          const isOpen = open === j.id;
          const msg = `Hi, I'd like to apply for the ${j.title} role (${j.location}).\n\nName:\nPhone:\nExperience:\n\nI'll attach my CV.`;
          return (
            <div key={j.id} className={cn("overflow-hidden rounded-3xl border bg-white transition", isOpen ? "border-brand-200 shadow-xl shadow-ink-900/5" : "border-ink-100")}>
              <button onClick={() => setOpen(isOpen ? null : j.id)} className="flex w-full flex-col gap-3 p-6 text-left sm:flex-row sm:items-center" aria-expanded={isOpen}>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600">{j.department}</div>
                  <div className="mt-1 text-lg font-bold text-ink-950">{j.title}</div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {j.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {j.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {j.experience}</span>
                  </div>
                </div>
                <ChevronDown className={cn("h-5 w-5 text-ink-400 transition-transform", isOpen && "rotate-180")} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="border-t border-ink-100 p-6">
                      <p className="text-ink-600">{j.summary}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {j.requirements.map((r) => <li key={r} className="flex gap-2 text-sm text-ink-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{r}</li>)}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a href={mailtoUrl(`Application: ${j.title}`, msg, companyData.careersEmail)} className="inline-flex h-11 items-center rounded-full bg-accent-500 px-5 text-sm font-semibold text-white hover:bg-accent-600">
                          Apply by email
                        </a>
                        <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-ink-200 px-5 text-sm font-semibold text-ink-900 hover:border-ink-900">
                          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Apply on WhatsApp
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {list.length === 0 && <p className="rounded-3xl border border-dashed border-ink-200 p-10 text-center text-ink-500">No open roles match. Send your CV to {companyData.careersEmail} and we&apos;ll keep it on file.</p>}
      </div>
    </div>
  );
}
