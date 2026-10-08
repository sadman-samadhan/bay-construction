import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, MapPin, Quote, Users } from "lucide-react";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { BeforeAfter } from "@/components/interactive/BeforeAfter";
import { CTABand } from "@/components/home/Blocks";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectsData.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectsData.find((x) => x.slug === slug);
  if (!p) notFound();

  const services = servicesData.filter((s) => p.serviceSlugs.includes(s.slug));
  const idx = projectsData.indexOf(p);
  const next = projectsData[(idx + 1) % projectsData.length];

  return (
    <>
      <PageHero crumbs={[{ label: "Our Work", href: "/projects" }, { label: p.location }]} eyebrow={`Case study · ${p.segment}`} title={p.title} description={p.summary} image={p.image}>
        <div className="flex flex-wrap gap-5 text-sm text-ink-200">
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-300" /> {p.location}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-300" /> {p.duration}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand-300" /> {p.year}</span>
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-brand-300" /> {p.segment}</span>
        </div>
      </PageHero>

      <div className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 shadow-xl">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-white p-5 text-center sm:p-7">
              <div className="text-2xl font-extrabold text-brand-600 sm:text-4xl">{m.value}</div>
              <div className="mt-1 text-xs font-semibold text-ink-500 sm:text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent-600">The challenge</h2>
              <p className="mt-3 text-xl leading-relaxed text-ink-800">{p.challenge}</p>
            </Reveal>
            <Reveal className="mt-12">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">Our approach</h2>
              <ol className="mt-5 space-y-4">
                {p.approach.map((a, i) => (
                  <li key={a} className="flex gap-4 rounded-2xl border border-ink-100 p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink-950 text-sm font-bold text-white">{i + 1}</span>
                    <span className="pt-1.5 text-ink-700">{a}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="mt-12">
              <BeforeAfter after={p.image} alt={p.title} className="aspect-[16/10]" />
              <p className="mt-2 text-center text-xs text-ink-400">Drag to compare before and after</p>
            </Reveal>
            <Reveal className="mt-12 rounded-3xl bg-brand-50 p-7">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">The result</h2>
              <p className="mt-3 text-xl font-semibold leading-relaxed text-ink-900">{p.result}</p>
            </Reveal>
            {p.quote && (
              <Reveal className="relative mt-12 overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
                <Quote className="absolute right-6 top-6 h-20 w-20 text-white/5" />
                <blockquote className="relative text-xl font-medium leading-relaxed">&ldquo;{p.quote.text}&rdquo;</blockquote>
                <div className="relative mt-5 text-sm"><span className="font-bold">{p.quote.author}</span> <span className="text-ink-300">· {p.quote.role}</span></div>
              </Reveal>
            )}
          </div>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink-100 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-ink-400">Services used</div>
              <div className="mt-4 space-y-2">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-3 rounded-2xl bg-ink-50 p-3 hover:bg-brand-50">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-600"><Icon name={s.iconName} className="h-4 w-4" /></span>
                    <span className="flex-1 text-sm font-bold text-ink-900">{s.title}</span>
                    <ArrowRight className="h-4 w-4 text-ink-300 group-hover:text-brand-600" />
                  </Link>
                ))}
              </div>
            </div>
            <Link href={`/projects/${next.slug}`} className="group block rounded-3xl bg-ink-950 p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300">Next case study</div>
              <div className="mt-2 font-bold leading-snug group-hover:underline">{next.title}</div>
              <ArrowRight className="mt-4 h-5 w-5 text-brand-300 transition group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </Section>

      <CTABand service={p.serviceSlugs[0]} />
    </>
  );
}
