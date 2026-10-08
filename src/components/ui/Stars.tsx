import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i < Math.round(value) ? "fill-accent-400 text-accent-400" : "fill-ink-100 text-ink-100")}
        />
      ))}
    </div>
  );
}
