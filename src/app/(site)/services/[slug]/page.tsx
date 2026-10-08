import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, BadgeCheck, CheckCircle2, Clock, ShieldCheck, Wallet } from "lucide-react";
import { getServices } from "@/sanity/client";
import { getCategory, servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { companyData } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { BookButton } from "@/components/booking/BookingProvider";
import { CTABand, ProcessSteps } from "@/components/home/Blocks";
import { whatsappUrl } from "@/lib/contact";
import { formatBDT } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export const revalidate = 300;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

async function load(slug: string) {
  const services = await getServices();
  return { service: services.find((s) => s.slug === slug), services };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { service } = await load(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Dhaka & Chattogram`,
    description: service.shortDescription,
    openGraph: { images: service.image ? [service.image] : undefined },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { service, services } = await load(slug);
  if (!service) notFound();

  const category = getCategory(service.category);
  const related = [
    ...services.filter((s) => s.category === service.category && s.slug !== service.slug),
    ...services.filter((s) => s.category !== service.category && s.popular),
  ].slice(0, 3);
  const cases = projectsData.filter((p) => p.serviceSlugs.includes(service.slug)).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: { "@type": "LocalBusiness", name: companyData.name, telephone: companyData.phone, areaServed: ["Dhaka", "Chattogram"] },
    offers: { "@type": "Offer", priceCurrency: "BDT", price: service.priceFrom },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={category?.title}
        title={service.title}
        description={service.shortDescription}
        image={service.image}
      >
        <div className="flex flex-wrap gap-3">
          <BookButton service={service.slug} className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-500 px-6 font-semibold text-white shadow-lg shadow-accent-500/30 transition hover:bg-accent-600">
            Book {service.title} <ArrowRight className="h-4 w-4" />
          </BookButton>
          <a
            href={whatsappUrl(`Hi! I'd like a quote for ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            <WhatsAppIcon className="h-5 w-5" /> Send photos for a quote
          </a>
        </div>
      </PageHero>

      {/* Quick facts */}
      <div className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 shadow-xl shadow-ink-900/5 lg:grid-cols-4">
          {[
            { Icon: Wallet, label: "Starting from", value: `${formatBDT(service.priceFrom)}`, sub: service.priceUnit },
            { Icon: Clock, label: "Typical duration", value: service.duration },
            { Icon: ShieldCheck, label: "Warranty", value: service.warranty },
            { Icon: BadgeCheck, label: "Technicians", value: "Verified & uniformed" },
          ].map(({ Icon: I, label, value, sub }) => (
            <div key={label} className="bg-white p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400"><I className="h-4 w-4 text-brand-500" /> {label}</div>
              <div className="mt-2 font-extrabold text-ink-950 sm:text-lg">{value}</div>
              {sub && <div className="text-xs text-ink-400">{sub}</div>}
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink-950">Overview</h2>
              {service.fullDescription.split("\n\n").map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-lg leading-relaxed text-ink-600">{p}</p>
              ))}
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold text-ink-950">What&apos;s included</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.subServices.map((s) => (
                  <div key={s} className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-brand-200 hover:shadow-md">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={service.iconName} className="h-4 w-4" /></span>
                    <span className="text-sm font-semibold text-ink-800">{s}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {service.signs.length > 0 && (
              <Reveal className="mt-14">
                <h2 className="text-2xl font-extrabold text-ink-950">Signs you need this service</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.signs.map((s) => (
                    <li key={s} className="flex gap-3 rounded-2xl bg-accent-50 p-4 text-sm font-medium text-ink-800">
                      <AlertCircle className="h-5 w-5 shrink-0 text-accent-600" /> {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold text-ink-950">Why book with {companyData.shortName}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.keyBenefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span className="font-semibold text-ink-800">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.faqs.length > 0 && (
              <Reveal className="mt-14">
                <h2 className="mb-6 text-2xl font-extrabold text-ink-950">{service.title}: FAQs</h2>
                <Accordion items={service.faqs} />
              </Reveal>
            )}
          </div>

          {/* Sticky booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-2xl shadow-ink-900/10">
              <ServiceVisual service={service} className="aspect-[16/9]" sizes="380px" />
              <div className="p-7">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">Starting from</div>
                <div className="mt-1 text-4xl font-extrabold text-ink-950">{formatBDT(service.priceFrom)}</div>
                <div className="text-sm text-ink-500">{service.priceUnit}</div>
                <p className="mt-4 rounded-xl bg-ink-50 p-3 text-xs text-ink-500">
                  Indicative price. Your technician confirms the final quote on site before starting, and nothing is done without your approval.
                </p>
                <BookButton service={service.slug} className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent-500 font-semibold text-white transition hover:bg-accent-600">
                  Book now <ArrowRight className="h-4 w-4" />
                </BookButton>
                <a href={companyData.phoneHref} className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-ink-200 font-semibold text-ink-900 hover:border-ink-900">
                  Call {companyData.phone}
                </a>
                <ul className="mt-6 space-y-2 text-sm text-ink-600">
                  {["Same / next-day slots", "Pay by bKash, Nagad, card or cash", "Photo report after every job"].map((t) => (
                    <li key={t} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How it works" title={`Booking ${service.title.toLowerCase()} is simple`} />
        <ProcessSteps />
      </Section>

      {cases.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Case studies" title="Recent jobs like this" />
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} href={`/projects/${c.slug}`} className="group rounded-3xl border border-ink-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-xs font-semibold text-ink-400">{c.location} · {c.duration}</div>
                <h3 className="mt-2 text-xl font-bold text-ink-950 group-hover:text-brand-700">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{c.result}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read case study <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section tone={cases.length ? "muted" : "white"}>
        <SectionHeading eyebrow="Related services" title="Often booked together" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>

      <CTABand service={service.slug} title={`Ready to book ${service.title.toLowerCase()}?`} />
    </>
  );
}
