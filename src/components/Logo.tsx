import Link from "next/link";
import { cn } from "@/lib/utils";

/** π drawn as a house: the top bar is a gable roof over two pillar legs. */
export function LogoMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const bg = inverted ? "#FFFFFF" : "#1F5F5B";
  const fg = inverted ? "#1F5F5B" : "#FFFFFF";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="11" fill={bg} />
      <g fill="none" stroke={fg} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 19.5 L24 10.5 L38.5 19.5" />
        <path d="M18 15.5 V37.5" />
        <path d="M30 15.5 V32 Q30 37 35 37" />
      </g>
    </svg>
  );
}

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Pi Property Solution — home">
      <LogoMark className="h-9 w-9 shrink-0" inverted={inverted} />
      <span className="text-lg leading-none tracking-tight">
        <span className={cn("font-bold", inverted ? "text-white" : "text-gray-900")}>Pi</span>{" "}
        <span className={cn("font-medium", inverted ? "text-gray-300" : "text-gray-600")}>Property Solution</span>
      </span>
    </Link>
  );
}
