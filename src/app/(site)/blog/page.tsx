import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCard, CTABand } from "@/components/home/Blocks";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tips & Guides",
  description: "Practical home maintenance advice for Bangladesh: monsoon prep, AC servicing, water tanks, IPS care, handover checklists and more.",
};

export default function BlogPage() {
  const [lead, ...rest] = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero crumbs={[{ label: "Tips & Guides" }]} eyebrow="Insights & articles" title="Maintenance know-how from our technicians" description="Seasonal checklists, warning signs and simple habits that save you money and hassle." />
      <Section>
        <Link href={`/blog/${lead.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-ink-100 bg-white transition hover:shadow-2xl lg:grid-cols-2">
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <Image src={lead.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="w-fit rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-700">Featured · {lead.category}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink-950 group-hover:text-brand-700">{lead.title}</h2>
            <p className="mt-3 text-lg text-ink-500">{lead.excerpt}</p>
            <div className="mt-6 text-sm text-ink-400">{formatDate(lead.date)} · {lead.readMinutes} min read</div>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700">Read the guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </div>
        </Link>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
