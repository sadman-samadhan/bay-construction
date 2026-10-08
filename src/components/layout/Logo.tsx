import Link from "next/link";
import { companyData } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label={`${companyData.name} home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-lg shadow-brand-600/30 transition-transform group-hover:-rotate-6">
        {/* House + wrench mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 9.8V20h13V9.8" />
          <path d="m10 15.5 2-2 2 2" />
          <path d="M12 13.5V18" />
        </svg>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-accent-500" />
      </span>
      <span className="leading-none">
        <span className={cn("block text-xl font-extrabold tracking-tight", dark ? "text-white" : "text-ink-950")}>
          {companyData.logoWord[0]}
          <span className="text-brand-500">{companyData.logoWord[1]}</span>
        </span>
        <span className={cn("mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em]", dark ? "text-ink-300" : "text-ink-400")}>
          Property Care
        </span>
      </span>
    </Link>
  );
}
