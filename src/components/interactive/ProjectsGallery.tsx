"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { projectSegments, projectsData } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGallery({ limit }: { limit?: number }) {
  const [seg, setSeg] = useState("All");
  const list = projectsData.filter((p) => seg === "All" || p.segment === seg).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
          {projectSegments.map((s) => (
            <button
              key={s}
              onClick={() => setSeg(s)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                seg === s ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
              <Link href={`/projects/${p.slug}`} className="group block overflow-hidden rounded-3xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900">{p.segment}</span>
                  <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-white/10 p-2 text-center text-white backdrop-blur">
                        <div className="text-sm font-extrabold">{m.value}</div>
                        <div className="truncate text-[10px] text-ink-200">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-ink-400">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink-950 group-hover:text-brand-700">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read case study <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
