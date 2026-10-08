import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlanCards, CTABand } from "@/components/home/Blocks";
import { PlanEstimator } from "@/components/interactive/PlanEstimator";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Annual Maintenance Plans (AMC)",
  description:
    "Annual maintenance contracts for flats, duplexes, apartment buildings and offices in Dhaka: scheduled AC servicing, tank cleaning, check-ups and priority repairs.",
};

const compare: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "AC jet-wash servicing", values: ["2× / yr (2 units)", "3× / yr (4 units)", "All common units", "Custom schedule"] },
  { feature: "Water tank cleaning", values: ["2× / yr", "2× / yr", "Every 6 months", "On request"] },
  { feature: "Plumbing & electrical check-up", values: ["Bi-annual", "Quarterly", "Monthly (common areas)", "Planned PPM"] },
  { feature: "Pest control", values: [false, "Quarterly", "Common areas", "Quarterly"] },
  { feature: "Generator / pump / IPS care", values: [false, "IPS check", true, true] },
  { feature: "24/7 emergency priority", values: [false, true, true, true] },
  { feature: "Call-out charge on repairs", values: ["Free", "Free", "Free", "Free"] },
  { feature: "Labour discount on extra jobs", values: ["10%", "15%", "Resident rates", "Contract rates"] },
  { feature: "Dedicated account manager", values: [false, true, true, true] },
  { feature: "Monthly service report", values: [false, false, true, true] },
];

export default function PlansPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Maintenance Plans" }]}
        eyebrow="Annual Maintenance Contracts"
        title="Peace of mind, on a schedule"
        description="We remember every service date, show up on time, and fix things before they break. All for less than booking each visit on its own."
        image="/images/services/hvac.jpg"
      />

      <Section>
        <PlanCards />
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Compare" title="What each plan covers" />
        <div className="overflow-x-auto rounded-3xl border border-ink-100 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 bg-ink-50/60">
                <th className="p-5 font-bold text-ink-500">Feature</th>
                {["Home Essential", "Home Plus", "Building Care", "Business Care"].map((h, i) => (
                  <th key={h} className={`p-5 font-extrabold ${i === 1 ? "text-brand-700" : "text-ink-950"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.feature} className="border-b border-ink-50 last:border-0">
                  <td className="p-5 font-semibold text-ink-800">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className={`p-5 ${i === 1 ? "bg-brand-50/40" : ""}`}>
                      {v === true ? <Check className="h-5 w-5 text-brand-600" /> : v === false ? <Minus className="h-5 w-5 text-ink-200" /> : <span className="text-ink-700">{v}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Plan builder"
          title="Build a plan that fits your property"
          description="Choose your property, number of ACs and the extras you want, and see your estimate update instantly."
        />
        <PlanEstimator />
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="About maintenance plans" />
          <Accordion items={faqsData.filter((f) => f.category === "Plans & Contracts" || f.category === "Pricing & Payment")} />
        </div>
      </Section>

      <CTABand title="Not sure which plan is right?" text="Book a free property health check and we'll recommend a plan based on what your home or building actually needs." service="property-inspection" />
    </>
  );
}
