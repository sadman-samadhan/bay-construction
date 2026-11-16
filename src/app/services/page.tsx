import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTA, EmergencyBand, PageHeader, Section } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { servicesIntro, whyChooseUs } from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `All ${services.length} property maintenance, repair and renovation services offered by ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our services" text={servicesIntro[0]} crumbs={[{ label: "Services" }]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-gray-600">{servicesIntro[1]}</p>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Why choose {site.name}?</h2>
            <ul className="mt-4 space-y-3">
              {whyChooseUs.map((w) => (
                <li key={w.title} className="flex gap-3 text-gray-600">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">{w.title}:</strong> {w.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <EmergencyBand />
        </div>
      </Section>

      <Section muted>
        <h2 className="text-2xl font-semibold text-gray-900">All services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
