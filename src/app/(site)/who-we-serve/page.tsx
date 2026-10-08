import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { clientSegments } from "@/data/segments";
import { servicesData } from "@/data/services";
import { maintenancePlans } from "@/data/plans";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/home/Blocks";
import { BookButton } from "@/components/booking/BookingProvider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Property maintenance for homeowners, apartment owners' associations, landlords, NRB owners abroad, real estate developers, offices, shops and restaurants.",
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Who We Serve" }]}
        eyebrow="All property types"
        title="One partner for every property you own or manage"
        description="Residential, commercial, multi-family or vacant: we adapt our service, reporting and billing to how you own and run your property."
        image="/images/services/landscaping.jpg"
      >
        <div className="flex flex-wrap gap-2">
          {clientSegments.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
              <Icon name={s.iconName} className="h-4 w-4 text-brand-300" /> {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      {clientSegments.map((seg, idx) => {
        const plan = maintenancePlans.find((p) => p.id === seg.plan);
        return (
          <section key={seg.id} id={seg.id} className={cn("py-20 sm:py-24", idx % 2 ? "bg-ink-50/60" : "bg-white")}>
            <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <Reveal className={cn(idx % 2 && "lg:order-2")}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                  <Icon name={seg.iconName} className="h-7 w-7" />
                </span>
                <div className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{seg.title}</div>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-950 text-balance sm:text-4xl">{seg.headline}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">{seg.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {seg.needs.map((n) => (
                    <li key={n} className="flex items-start gap-2.5 font-semibold text-ink-800">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"><Check className="h-3.5 w-3.5" /></span>
                      {n}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BookButton service={seg.services[0]} className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-500 px-6 font-semibold text-white hover:bg-accent-600">
                    Get started <ArrowRight className="h-4 w-4" />
                  </BookButton>
                  {plan && (
                    <Link href="/maintenance-plans" className="inline-flex h-12 items-center rounded-full border border-ink-200 px-6 font-semibold text-ink-900 hover:border-ink-900">
                      See {plan.name} plan
                    </Link>
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
                {seg.services.map((slug) => {
                  const s = servicesData.find((x) => x.slug === slug);
                  if (!s) return null;
                  return (
                    <Link key={slug} href={`/services/${slug}`} className="group rounded-3xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-500 group-hover:text-white">
                        <Icon name={s.iconName} className="h-5 w-5" />
                      </span>
                      <div className="mt-4 font-bold text-ink-950">{s.title}</div>
                      <p className="mt-1 line-clamp-2 text-sm text-ink-500">{s.shortDescription}</p>
                    </Link>
                  );
                })}
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTABand title="Managing several properties?" text="Talk to us about a single contract, one point of contact and consolidated monthly billing across all your units or branches." />
    </>
  );
}
