import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProjectsGallery } from "@/components/interactive/ProjectsGallery";
import { BeforeAfter } from "@/components/interactive/BeforeAfter";
import { CTABand, StatsBand } from "@/components/home/Blocks";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Recently completed maintenance, repair and property care jobs across Dhaka and Chattogram, with before and after results.",
};

const showcase = [
  { after: "/images/services/painting.jpg", alt: "Damp wall treatment and repaint" },
  { after: "/images/services/flooring.jpg", alt: "Tile replacement and re-grouting" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Our Work" }]}
        eyebrow="Projects & case studies"
        title="Recently completed work"
        description="Every job is photo-documented. Here are some of the problems we've solved for homes, buildings and businesses."
        image="/images/services/roofing.jpg"
      />
      <Section>
        <ProjectsGallery />
      </Section>
      <StatsBand />
      <Section tone="muted">
        <SectionHeading eyebrow="Before & after showcase" title="Drag to see the difference" />
        <div className="grid gap-6 md:grid-cols-2">
          {showcase.map((s, i) => (
            <Reveal key={s.alt} delay={i * 0.08}>
              <BeforeAfter after={s.after} alt={s.alt} className="aspect-[4/3]" />
              <p className="mt-3 text-center text-sm font-semibold text-ink-700">{s.alt}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand title="Have a problem like these?" text="Send us a few photos on WhatsApp and we'll tell you what it'll take, usually within the hour." />
    </>
  );
}
