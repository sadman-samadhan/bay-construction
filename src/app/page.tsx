import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import { ButtonLink, Container, CTA, EmergencyBand, Section, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";
import { featuredServices } from "@/data/services";
import { about, highlights, whyChooseUs } from "@/data/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Property maintenance services</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your one-stop property maintenance partner
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Trusted by homeowners, property managers and management companies for repairs, maintenance and
              renovation — one call covers every trade.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
              {["Licensed & insured", "Satisfaction guaranteed", "24/7 emergency service"].map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-700" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact/">Get a free estimate</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline">
                <Phone className="h-4 w-4" /> Call {site.phone}
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/images/services/home-repair.jpg"
              alt="Technician carrying out a home repair"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* About strip */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="About us" title="Trusted property experts" />
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{about.whatWeDo}</p>
            <p className="mt-4 text-lg font-medium text-gray-900">{about.motto}</p>
            <ButtonLink href="/about/" variant="outline" className="mt-6">
              More about us <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white p-6">
                <Icon name={h.icon} className="h-6 w-6 text-brand-700" />
                <h3 className="mt-4 font-semibold text-gray-900">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section muted>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Our services" title="Property maintenance services" />
          <ButtonLink href="/services/" variant="outline" className="self-start sm:self-auto">
            View all services <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} showImage />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why choose us"
          title={`Why choose ${site.name}`}
          text="One dependable team for maintenance, repairs and improvements — so you can stop juggling contractors."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => (
            <div key={w.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{w.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <EmergencyBand />
        </div>
      </Section>

      <CTA />
    </>
  );
}
