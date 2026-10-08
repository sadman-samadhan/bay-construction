import type { Metadata } from "next";
import { Siren } from "lucide-react";
import { getServices } from "@/sanity/client";
import { companyData } from "@/data/company";
import { serviceCategories } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ServicesExplorer } from "@/components/interactive/ServicesExplorer";
import { CTABand, ProcessSteps } from "@/components/home/Blocks";
import { SectionHeading } from "@/components/ui/Section";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Plumbing, electrical, AC servicing, waterproofing, painting, deep cleaning, water tank cleaning, pest control, CCTV and full property care in Dhaka & Chattogram.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow={`${services.length} services · one trusted team`}
        title="Property maintenance services"
        description="Residential and commercial repairs, servicing and care, delivered by verified in-house technicians with upfront pricing and a written warranty."
        image="/images/services/home-repair.jpg"
      >
        <div className="grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {serviceCategories.map((c) => (
            <div key={c.id} className="glass rounded-2xl p-3 text-center">
              <Icon name={c.iconName} className="mx-auto h-5 w-5 text-brand-300" />
              <div className="mt-1.5 text-xs font-semibold text-white">{c.title}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <Section>
        <ServicesExplorer services={services} withSearch />
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-accent-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500 text-white"><Siren className="h-6 w-6" /></span>
            <div>
              <div className="text-lg font-extrabold text-ink-950">Here 365 days a year when something breaks</div>
              <div className="text-sm text-ink-600">Burst pipes, short circuits, no water, lockouts. Our emergency line is answered 24/7.</div>
            </div>
          </div>
          <a href={companyData.emergencyPhoneHref} className="inline-flex h-12 shrink-0 items-center rounded-full bg-accent-500 px-6 font-semibold text-white hover:bg-accent-600">
            Call {companyData.emergencyPhone}
          </a>
        </div>
      </div>

      <Section>
        <SectionHeading eyebrow="How it works" title="Every service, the same simple process" />
        <ProcessSteps />
      </Section>

      <CTABand title="Can't find what you need?" text="If it's in your home, building or office and it needs fixing, servicing or cleaning, we can most likely help. Just ask." />
    </>
  );
}
