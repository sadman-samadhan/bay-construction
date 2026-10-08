import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, BadgeCheck, BellRing, Camera, CheckCircle2, ClipboardList, Footprints, HandCoins, Phone,
  ShieldCheck, Sparkles, Star, Timer, Wrench,
} from "lucide-react";
import { brandsWeService, companyData } from "@/data/company";
import { maintenancePlans, type MaintenancePlan } from "@/data/plans";
import type { BlogPost } from "@/data/blog";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/booking/BookingProvider";
import { cn, formatBDT, formatDate } from "@/lib/utils";

/* ───────────── Brand marquee ───────────── */
export function BrandMarquee() {
  const row = [...brandsWeService, ...brandsWeService];
  return (
    <div className="border-y border-ink-100 bg-white py-7">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-ink-400 md:block">Brands we service</span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {row.map((b, i) => (
              <span key={`${b}-${i}`} className="text-lg font-extrabold tracking-tight text-ink-300 transition hover:text-ink-700">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Stats band ───────────── */
export function StatsBand() {
  const s = companyData.stats;
  const items = [
    { value: s.jobsCompleted, suffix: "+", label: "Jobs completed" },
    { value: s.rating, decimals: 1, suffix: "/5", label: `Average rating (${s.reviews.toLocaleString("en-US")}+ reviews)` },
    { value: s.technicians, suffix: "+", label: "Verified technicians" },
    { value: s.amcClients, suffix: "+", label: "Active maintenance plans" },
    { value: s.emergencyMinutes, prefix: "~", suffix: " min", label: "Emergency arrival (core Dhaka)" },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 py-16 text-white">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.06} className={cn("text-center md:text-left", i === 4 && "col-span-2 md:col-span-1")}>
            <div className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <Counter value={it.value} decimals={it.decimals} prefix={it.prefix} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-sm text-brand-100">{it.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────── How it works ───────────── */
export const processSteps = [
  { Icon: ClipboardList, title: "Book in 60 seconds", text: "Online, on WhatsApp or by phone. Pick a date and a 2-hour arrival window." },
  { Icon: BellRing, title: "Get an on-my-way alert", text: "Your technician's name, photo and ETA arrive by SMS or WhatsApp before they set out." },
  { Icon: Wrench, title: "Approve, then we fix", text: "Diagnosis and a clear price first. Work starts only once you approve, with drop sheets down." },
  { Icon: Camera, title: "Photo report & warranty", text: "Before and after photos, a digital invoice and your written warranty, all on WhatsApp." },
];

export function ProcessSteps({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute left-0 right-0 top-9 hidden h-px lg:block", dark ? "bg-white/10" : "bg-ink-100")} />
      {processSteps.map(({ Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 0.08} className="relative">
          <div className={cn("relative z-10 grid h-[72px] w-[72px] place-items-center rounded-2xl shadow-xl", i === 0 ? "bg-accent-500 text-white shadow-accent-500/30" : dark ? "bg-white/10 text-brand-300" : "bg-white text-brand-600 ring-1 ring-ink-100")}>
            <Icon className="h-7 w-7" />
            <span className={cn("absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full text-xs font-extrabold", dark ? "bg-white text-ink-950" : "bg-ink-950 text-white")}>{i + 1}</span>
          </div>
          <h3 className={cn("mt-6 text-lg font-bold", dark ? "text-white" : "text-ink-950")}>{title}</h3>
          <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-ink-300" : "text-ink-500")}>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ───────────── Why choose us ───────────── */
export const valueProps = [
  { Icon: BadgeCheck, title: "Verified, in-house technicians", text: "NID & police verified, skills-tested and trained in our conduct standards. Uniformed with ID cards." },
  { Icon: HandCoins, title: "Upfront, honest pricing", text: "Published starting prices and a firm quote before work. No surprises on the invoice." },
  { Icon: ShieldCheck, title: "Written workmanship warranty", text: "From 30 days to 5 years depending on the job. If it fails, we come back free." },
  { Icon: Footprints, title: "Respect for your home", text: "Shoe covers, drop sheets, dust control and a full clean-up before we leave." },
  { Icon: Timer, title: "On time, every time", text: "2-hour arrival windows, live ETA alerts and ~60-minute emergency response." },
  { Icon: Phone, title: "One number for everything", text: "Plumbing to pest control. No more juggling five different mistris." },
];

export function ValueGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {valueProps.map(({ Icon, title, text }, i) => (
        <Reveal key={title} delay={(i % 3) * 0.06} className="group rounded-3xl border border-ink-100 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/5">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-ink-950">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ───────────── Plan cards ───────────── */
export function PlanCard({ plan }: { plan: MaintenancePlan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-[2rem] border p-8 transition",
        plan.highlight ? "border-transparent bg-ink-950 text-white shadow-2xl shadow-ink-900/30 lg:-translate-y-3" : "border-ink-100 bg-white hover:shadow-xl hover:shadow-ink-900/5"
      )}
    >
      {plan.badge && (
        <span className={cn("absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-bold", plan.highlight ? "bg-accent-500 text-white" : "bg-ink-50 text-ink-600")}>
          {plan.badge}
        </span>
      )}
      <div className={cn("text-sm font-semibold", plan.badge && "pr-24", plan.highlight ? "text-brand-300" : "text-brand-700")}>{plan.audience}</div>
      <h3 className="mt-2 text-2xl font-extrabold">{plan.name}</h3>
      <p className={cn("mt-2 text-sm", plan.highlight ? "text-ink-300" : "text-ink-500")}>{plan.description}</p>
      <div className="mt-6">
        {plan.monthly ? (
          <>
            <span className="text-4xl font-extrabold tracking-tight">{formatBDT(plan.monthly)}</span>
            <span className={cn("text-sm", plan.highlight ? "text-ink-300" : "text-ink-400")}> / month</span>
            <div className={cn("mt-1 text-xs", plan.highlight ? "text-ink-400" : "text-ink-400")}>or {formatBDT(plan.yearly!)} / year (2 months free)</div>
          </>
        ) : (
          <>
            <span className="text-4xl font-extrabold tracking-tight">Custom</span>
            <div className="mt-1 text-xs text-ink-400">Quoted after a free site survey</div>
          </>
        )}
      </div>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm">
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-brand-400" : "text-brand-600")} />
            <span className={plan.highlight ? "text-ink-100" : "text-ink-700"}>{f}</span>
          </li>
        ))}
      </ul>
      <BookButton
        service="property-inspection"
        className={cn(
          "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full font-semibold transition",
          plan.highlight ? "bg-accent-500 text-white hover:bg-accent-600" : "bg-ink-950 text-white hover:bg-ink-800"
        )}
      >
        {plan.monthly ? `Choose ${plan.name}` : "Request a site survey"}
      </BookButton>
    </div>
  );
}

export function PlanCards({ ids }: { ids?: string[] }) {
  const plans = ids ? maintenancePlans.filter((p) => ids.includes(p.id)) : maintenancePlans;
  return (
    <div className={cn("grid gap-6", plans.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3")}>
      {plans.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.06}>
          <PlanCard plan={p} />
        </Reveal>
      ))}
    </div>
  );
}

/* ───────────── Blog card ───────────── */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs font-semibold text-ink-400">{formatDate(post.date)} · {post.readMinutes} min read</div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-ink-950 group-hover:text-brand-700">{post.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-500">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

/* ───────────── CTA band ───────────── */
export function CTABand({
  title = "Let's take care of it for you.",
  text = "Book a verified technician in under a minute, or talk to our team about a maintenance plan for your home, building or business.",
  service,
}: {
  title?: string;
  text?: string;
  service?: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-14 text-white sm:px-14 sm:py-20">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-300">
              <Sparkles className="h-4 w-4" /> Fast response · Transparent pricing · No commitment
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-ink-200">{text}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-ink-300">
              <span className="flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />)}</span>
              {companyData.stats.rating} from {companyData.stats.reviews.toLocaleString("en-US")}+ reviews
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <BookButton service={service} className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 px-8 text-base font-semibold text-white shadow-xl shadow-accent-500/30 transition hover:bg-accent-600">
              Book a Service <ArrowRight className="h-5 w-5" />
            </BookButton>
            <a href={companyData.phoneHref} className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
              <Phone className="h-5 w-5" /> {companyData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

