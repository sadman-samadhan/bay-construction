import type { Metadata } from "next";
import { BadgeCheck, Clock, ShieldCheck, Star, Wallet } from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { BookingWizard } from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Book a Service",
  description: "Book a verified technician in under a minute. Choose a service, date and arrival window, with an upfront starting price.",
};

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const initial = servicesData.some((s) => s.slug === service) ? service : undefined;

  return (
    <section className="relative bg-ink-50/60">
      <div className="absolute inset-x-0 top-0 h-80 bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Book a service</h1>
          <p className="mt-3 text-ink-200">Takes less than a minute. A coordinator confirms within 30 minutes.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-ink-900/10 sm:p-10">
            <BookingWizard initialService={initial} />
          </div>
          <aside className="space-y-4">
            {[
              { Icon: Wallet, t: "Upfront pricing", d: "Starting prices shown. Final quote before work." },
              { Icon: BadgeCheck, t: "Verified technicians", d: "NID & police verified, uniformed." },
              { Icon: Clock, t: "On-time arrival", d: "2-hour window plus a live ETA alert." },
              { Icon: ShieldCheck, t: "Written warranty", d: "Up to 5 years depending on the job." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="font-bold text-ink-950">{t}</div>
                  <div className="text-sm text-ink-500">{d}</div>
                </div>
              </div>
            ))}
            <div className="rounded-3xl bg-ink-950 p-6 text-white">
              <div className="flex gap-0.5">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />)}</div>
              <p className="mt-3 text-sm text-ink-200">&ldquo;They called back in 10 minutes, came on time and fixed it in one visit.&rdquo;</p>
              <div className="mt-3 text-xs font-semibold text-ink-400">{companyData.stats.rating} average · {companyData.stats.reviews.toLocaleString("en-US")}+ reviews</div>
            </div>
            <a href={companyData.phoneHref} className="block rounded-3xl border border-ink-200 bg-white p-5 text-center font-semibold text-ink-900 hover:border-ink-900">
              Prefer to talk? Call {companyData.phone}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
