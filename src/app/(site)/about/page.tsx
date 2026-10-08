import type { Metadata } from "next";
import Image from "next/image";
import { Eye, HeartHandshake, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { companyData } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrandMarquee, CTABand, StatsBand, ValueGrid } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "About Us",
  description: `${companyData.name} keeps homes, buildings and businesses in Bangladesh running, with verified technicians, upfront pricing and a written warranty.`,
};

const timeline = [
  { year: "2013", title: "Started with three plumbers", text: "A small team in Banani taking calls from neighbours who were tired of unreliable mistris." },
  { year: "2016", title: "Electrical, AC & cleaning added", text: "Customers kept asking 'can you also…?', so we built in-house teams for each trade." },
  { year: "2019", title: "First building contracts", text: "Owners' associations in Gulshan and Uttara signed up for annual Building Care." },
  { year: "2022", title: "Chattogram branch opens", text: "Same standards, same warranty, now from our GEC Circle office." },
  { year: "2024", title: "Developer after-sales partner", text: "Real estate developers began using us for buyer handover and warranty-period repairs." },
  { year: "2026", title: "18,500+ jobs and counting", text: "140+ technicians, 420+ maintenance plans and a 4.9 average rating." },
];

const standards = [
  { Icon: ShieldCheck, title: "Field safety standards", text: "PPE on every job, isolated power before electrical work, safe ladders and confined-space practice for tanks." },
  { Icon: Sparkles, title: "Clean-site promise", text: "Shoe covers, drop sheets and dust control. We leave every room cleaner than we found it." },
  { Icon: Users, title: "Respect for people & property", text: "Polite, uniformed staff who introduce themselves, explain what they're doing and ask before touching anything." },
];

const leaders = [
  { initials: "AR", name: "Ahsan Rahman", role: "Founder & Managing Director" },
  { initials: "SN", name: "Sharmin Nahar", role: "Head of Operations" },
  { initials: "MK", name: "Mizanur Karim", role: "Chief Technical Officer" },
  { initials: "TF", name: "Tasnim Ferdous", role: "Head of Customer Experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        eyebrow={`Since ${companyData.foundedYear}`}
        title="Your property, our responsibility"
        description="We started with a simple idea: Bangladeshi families deserve service providers who turn up on time, charge fairly and stand behind their work."
        image="/images/services/carpentry.jpg"
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl"><Image src="/images/services/electrical.jpg" alt="Electrician at work" fill sizes="25vw" className="object-cover" /></div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl"><Image src="/images/services/cleaning.jpg" alt="Cleaning crew at work" fill sizes="25vw" className="object-cover" /></div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="What we do"
              title="Preservation and maintenance that protects your property's value"
              className="mb-6"
            />
            <Reveal className="space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                {companyData.name} is a property maintenance company. We don&apos;t do construction. We take over where construction ends, keeping homes, apartment buildings and workplaces safe, comfortable and in good repair for years after handover.
              </p>
              <p>
                Plumbing, electrical, AC, pumps, waterproofing, painting, cleaning, pest control, safety systems and full property care all run through one workflow: one booking, one point of contact, and photos and status updates in one place.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Target, title: "Our mission", text: "Make reliable, honest property care the norm in Bangladesh, not the exception." },
            { Icon: Eye, title: "Our vision", text: "A country where every family and business has a maintenance partner they genuinely trust." },
            { Icon: HeartHandshake, title: "Our promise", text: "On-time arrival, documented work and quality that holds up, or we come back and make it right." },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500 text-white"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-extrabold text-ink-950">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />

      <Section>
        <SectionHeading eyebrow="Our journey" title="From three plumbers to 140+ technicians" />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-ink-100 sm:left-1/2" />
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={0.05} className={`relative mb-10 flex gap-6 sm:w-1/2 ${i % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
              <span className={`absolute top-1 grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-xs font-extrabold text-white ring-8 ring-white left-0 ${i % 2 ? "sm:-left-5" : "sm:left-auto sm:-right-5"}`}>
                {t.year.slice(2)}
              </span>
              <div className="pl-14 sm:pl-0">
                <div className="text-sm font-bold text-brand-700">{t.year}</div>
                <h3 className="mt-1 text-lg font-extrabold text-ink-950">{t.title}</h3>
                <p className="mt-1 text-ink-500">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Why choose us" title="What makes Apex different" />
        <ValueGrid />
      </Section>

      <Section>
        <SectionHeading eyebrow="Safety & professionalism" title="Field standards we never compromise on" />
        <div className="grid gap-6 md:grid-cols-3">
          {standards.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="rounded-3xl border border-ink-100 p-8">
              <Icon className="h-8 w-8 text-brand-600" />
              <h3 className="mt-5 text-lg font-extrabold text-ink-950">{title}</h3>
              <p className="mt-2 text-ink-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Leadership" title="The people behind the promise" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06} className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-ink-800 text-2xl font-extrabold text-white">{l.initials}</div>
              <div className="mt-5 text-lg font-extrabold text-ink-950">{l.name}</div>
              <div className="text-sm text-ink-500">{l.role}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <BrandMarquee />
      <CTABand title="Join 18,500+ happy customers" />
    </>
  );
}
