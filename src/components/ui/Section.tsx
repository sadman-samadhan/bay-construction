import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  children,
  tone = "white",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "white" | "muted" | "dark";
}) {
  const tones = {
    white: "bg-white",
    muted: "bg-ink-50/60",
    dark: "bg-ink-950 text-white",
  };
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em]",
            dark ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-700"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-brand-300" : "bg-brand-500")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-ink-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg text-pretty", dark ? "text-ink-200" : "text-ink-500")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
