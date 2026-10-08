import type { Metadata } from "next";
import { careerPerks } from "@/data/careers";
import { companyData } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CareersBoard } from "@/components/interactive/CareersBoard";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${companyData.name}: technician, cleaning, operations and customer care roles in Dhaka and Chattogram.`,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Careers" }]}
        eyebrow="We're hiring"
        title="Build a career you're proud of"
        description="Skilled tradespeople deserve respect, fair pay and a path to grow. Join a team that invests in your skills and your safety."
        image="/images/services/electrical.jpg"
      />
      <Section>
        <SectionHeading eyebrow="Why work with us" title="More than just a job" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerPerks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="rounded-3xl border border-ink-100 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon name={p.iconName} className="h-6 w-6" /></span>
              <h3 className="mt-5 text-lg font-extrabold text-ink-950">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="muted" id="openings">
        <SectionHeading eyebrow="Open positions" title="Find your role" />
        <div className="mx-auto max-w-5xl">
          <CareersBoard />
        </div>
      </Section>
    </>
  );
}
