import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Siren } from "lucide-react";
import { getServices } from "@/sanity/client";
import { companyData } from "@/data/company";
import { faqsData } from "@/data/faqs";
import { blogPosts } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { Hero } from "@/components/home/Hero";
import { BlogCard, BrandMarquee, CTABand, PlanCards, ProcessSteps, StatsBand, ValueGrid } from "@/components/home/Blocks";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ServicesExplorer } from "@/components/interactive/ServicesExplorer";
import { SeasonalPlanner } from "@/components/interactive/SeasonalPlanner";
import { SegmentTabs } from "@/components/interactive/SegmentTabs";
import { ProjectsGallery } from "@/components/interactive/ProjectsGallery";
import { BeforeAfter } from "@/components/interactive/BeforeAfter";
import { TestimonialCarousel } from "@/components/interactive/TestimonialCarousel";
import { AreaChecker } from "@/components/interactive/AreaChecker";
import { ButtonLink } from "@/components/ui/Button";

export const revalidate = 300;

export default async function HomePage() {
  const services = await getServices();
  const featured = projectsData[1];

  return (
    <>
      <Hero />
      <BrandMarquee />

      {/* About snapshot */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem]">
              <Image src="/images/services/home-repair.jpg" alt="Apex technician carrying out a home repair" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-64 rounded-3xl bg-white p-6 shadow-2xl shadow-ink-900/15 sm:right-8">
              <div className="text-5xl font-extrabold text-brand-600">{companyData.stats.yearsExperience}+</div>
              <div className="mt-1 font-semibold text-ink-900">years caring for homes in Bangladesh</div>
            </div>
            <div className="absolute -left-4 top-6 hidden rounded-2xl bg-accent-500 px-5 py-4 text-white shadow-xl sm:block">
              <div className="flex items-center gap-2 text-sm font-bold"><Siren className="h-4 w-4" /> 24/7 emergency</div>
              <div className="text-xs opacity-90">365 days a year</div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="After the keys are handed over"
              title={<>We don&apos;t build properties. <span className="text-brand-600">We keep them working.</span></>}
              description="Construction ends on handover day. Everything after that, from leaks, wiring and ACs to damp walls, cleaning, pests and safety, is what we do, every day, for families, buildings and businesses."
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  `${services.length} services under one roof`,
                  "In-house, verified technicians",
                  "Published starting prices",
                  "Photo-documented work",
                  "Written workmanship warranty",
                  "Homes, buildings & offices",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 font-semibold text-ink-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="outline" size="lg">Our story</ButtonLink>
                <ButtonLink href="/services" size="lg">Explore services <ArrowRight className="h-4 w-4" /></ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="muted" id="services">
        <SectionHeading
          eyebrow="Our services"
          title="Everything your property needs, one booking away"
          description="Browse by category or pick from what Dhaka families book most. Every service comes with an upfront starting price."
        />
        <ServicesExplorer services={services} limit={6} />
        <div className="mt-12 text-center">
          <ButtonLink href="/services" variant="outline" size="lg">View all {services.length} services <ArrowRight className="h-4 w-4" /></ButtonLink>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="How it works" title="From booking to warranty in four simple steps" />
        <ProcessSteps />
      </Section>

      <StatsBand />

      {/* Why us */}
      <Section>
        <SectionHeading
          eyebrow="Why Apex"
          title="The standards you wish every service provider had"
          description="We built Apex around the frustrations Bangladeshi families told us about: no-shows, surprise bills, messy work and no accountability."
        />
        <ValueGrid />
      </Section>

      {/* Seasonal planner */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Seasonal maintenance calendar"
            title="Bangladesh's seasons are hard on homes. Stay a step ahead."
            description="What to service and when, from pre-summer AC checks to pre-monsoon waterproofing. Tap a season to see the checklist."
          />
          <SeasonalPlanner />
        </div>
      </section>

      {/* Plans */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Annual maintenance plans"
          title="Stop remembering. Start relaxing."
          description="One yearly plan covers scheduled AC servicing, tank cleaning, check-ups and priority repairs, for less than booking each visit separately."
        />
        <PlanCards ids={["essential", "plus", "building"]} />
        <div className="mt-10 text-center">
          <Link href="/maintenance-plans" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
            Compare all plans & build your own <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionHeading eyebrow="Who we serve" title="Built for every kind of property owner" />
        <SegmentTabs />
      </Section>

      {/* Work */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Before & after"
              title="Real problems, properly fixed"
              description={featured.summary}
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-extrabold text-ink-950">{m.value}</div>
                    <div className="mt-1 text-xs text-ink-500">{m.label}</div>
                  </div>
                ))}
              </div>
              <Link href={`/projects/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
                Read the full case study <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <BeforeAfter after={featured.image} alt={featured.title} className="aspect-[4/3]" />
            <p className="mt-3 text-center text-xs text-ink-400">Drag the handle to compare</p>
          </Reveal>
        </div>
        <div className="mt-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-extrabold text-ink-950">Recently completed work</h3>
            <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">All projects <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <ProjectsGallery limit={3} />
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading eyebrow="Reviews" title="Families and businesses who trust us with their property" />
        <TestimonialCarousel />
      </Section>

      {/* Coverage */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow="Areas we serve"
            title="Across Dhaka, greater Dhaka & Chattogram"
            description="Type your neighbourhood to check coverage and response times."
            className="mb-0"
          />
          <Reveal delay={0.1}>
            <AreaChecker />
          </Reveal>
        </div>
      </Section>

      {/* FAQ + tips */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions? We've got answers."
              description="Can't find what you're looking for? Message us on WhatsApp. A real person replies."
              className="mb-6"
            />
            <ButtonLink href="/faq" variant="outline">See all FAQs <ArrowRight className="h-4 w-4" /></ButtonLink>
          </div>
          <Accordion items={faqsData.filter((_, i) => [0, 4, 6, 8, 11, 17].includes(i))} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Tips & guides" title="Maintenance know-how from our technicians" className="mb-0" />
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">All guides <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
