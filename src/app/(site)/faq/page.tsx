import type { Metadata } from "next";
import { faqsData } from "@/data/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqExplorer } from "@/components/interactive/FaqExplorer";
import { ContactForm } from "@/components/interactive/ContactForm";
import { CTABand } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Booking, pricing, payment, warranty, technicians and coverage: answers to the questions our customers ask most.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero crumbs={[{ label: "FAQs" }]} eyebrow="Help centre" title="Frequently asked questions" description="Everything you need to know about booking, pricing, warranty and how we work." />
      <Section>
        <div className="mx-auto max-w-4xl">
          <FaqExplorer />
        </div>
      </Section>
      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <ContactForm title="Ask a question" subject="Question from FAQ page" />
        </div>
      </Section>
      <CTABand />
    </>
  );
}
