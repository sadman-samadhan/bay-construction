import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTA, PageHeader, Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { about, highlights, standards, whyChooseUs } from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — property maintenance, repair and renovation for homes and businesses.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" text={about.motto} crumbs={[{ label: "About us" }]} />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/images/services/remodeling.jpg"
              alt="Our team at work on a residential project"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">What we do</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">{about.whatWeDo}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Our promise</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">{about.promise}</p>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white p-6">
              <Icon name={h.icon} className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 font-semibold text-gray-900">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Why choose us" title={`Why choose ${site.name}`} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => (
            <div key={w.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-700 ring-1 ring-gray-200">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="Safety & professionalism"
          text="Every visit reflects on you as well as us. These are the standards our teams follow on every job."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { title: "Field standards", items: standards.field },
            { title: "Respect for people and property", items: standards.respect },
          ].map((group) => (
            <div key={group.title} className="rounded-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
