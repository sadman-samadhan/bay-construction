"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Drag / keyboard comparison slider.
 * When only one photo is available, the "before" side is simulated with a worn-look filter —
 * replace `before` with a real photo of the job for production.
 */
export function BeforeAfter({
  before,
  after,
  alt,
  className,
}: {
  before?: string;
  after: string;
  alt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative select-none overflow-hidden rounded-3xl bg-ink-900 touch-pan-y", className)}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={after} alt={`${alt} — after`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before ?? after}
          alt={`${alt} — before`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn("object-cover", !before && "brightness-[0.6] contrast-[0.85] saturate-[0.35] sepia-[0.45]")}
          draggable={false}
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">After</span>

      <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-ink-900 shadow-xl ring-4 ring-white/30"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
