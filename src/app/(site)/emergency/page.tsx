import type { Metadata } from "next";
import { Clock, Headphones, Phone, ShieldCheck, Truck } from "lucide-react";
import { companyData, serviceAreas } from "@/data/company";
import { getServiceBySlug } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EmergencyGuide } from "@/components/interactive/EmergencyGuide";
import { BookButton } from "@/components/booking/BookingProvider";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { formatBDT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "24/7 Emergency Repairs",
  description: "Burst pipes, short circuits, flooding, no water or lockouts? Our emergency line is answered 24/7, with ~60-minute arrival in core Dhaka.",
};

export default function EmergencyPage() {
  const svc = getServiceBySlug("emergency-repairs")!;
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-600 via-accent-700 to-ink-950 text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 animate-ping rounded-full bg-white" /><span className="relative h-2.5 w-2.5 rounded-full bg-white" /></span>
              Emergency line live: 24/7, 365 days
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">Need help right now?</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              A real coordinator answers, talks you through making things safe, and dispatches the nearest on-call technician. We aim for ~{companyData.stats.emergencyMinutes} minutes in core Dhaka.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={companyData.emergencyPhoneHref} className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-lg font-extrabold text-accent-700 shadow-2xl transition hover:scale-[1.02]">
                <Phone className="h-5 w-5" /> {companyData.emergencyPhone}
              </a>
              <a href={whatsappUrl("EMERGENCY: I need urgent help at my property. Location: ")} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 font-semibold backdrop-blur hover:bg-white/20">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-center">
            {[
              { Icon: Headphones, v: "24/7", l: "Answered by a person" },
              { Icon: Clock, v: `~${companyData.stats.emergencyMinutes} min`, l: "Core Dhaka arrival" },
              { Icon: Truck, v: "40+", l: "On-call technicians nightly" },
              { Icon: ShieldCheck, v: formatBDT(svc.priceFrom), l: "Night call-out (free for AMC)" },
            ].map(({ Icon, v, l }) => (
              <div key={l} className="glass rounded-3xl p-5">
                <Icon className="h-6 w-6 text-white/80" />
                <div className="mt-3 text-2xl font-extrabold">{v}</div>
                <div className="text-xs text-white/75">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Stay safe" title="What to do while you wait" description="Choose your situation for quick safety steps from our technicians." />
        <EmergencyGuide />
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="We handle" title="Emergencies we respond to" className="mb-6" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {svc.subServices.map((s) => (
                <li key={s} className="rounded-2xl bg-white p-4 font-semibold text-ink-800 shadow-sm">{s}</li>
              ))}
            </ul>
          </div>
          <Reveal className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink-950">Emergency response coverage</h3>
            <div className="mt-6 space-y-5">
              {serviceAreas.map((g) => (
                <div key={g.city} className="border-b border-ink-100 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-ink-900">{g.city}</span>
                    <span className="text-xs font-semibold text-brand-700">{g.note}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-500">{g.areas.slice(0, 8).join(", ")}{g.areas.length > 8 ? "…" : ""}</p>
                </div>
              ))}
            </div>
            <BookButton service="emergency-repairs" className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent-500 font-semibold text-white hover:bg-accent-600">
              Log an emergency online
            </BookButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
