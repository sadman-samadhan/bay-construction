import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCard, CTABand } from "@/components/home/Blocks";
import { BookButton } from "@/components/booking/BookingProvider";
import { Icon } from "@/components/ui/Icon";
import { formatBDT, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  return p ? { title: p.title, description: p.excerpt, openGraph: { images: [p.image], type: "article" } } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const service = getServiceBySlug(post.relatedService);
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero crumbs={[{ label: "Tips & Guides", href: "/blog" }, { label: post.category }]} eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="text-sm text-ink-300">{formatDate(post.date)} · {post.readMinutes} min read · By the Apex technical team</div>
      </PageHero>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_300px]">
          <article>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
            </div>
            <div className="prose-article">
              {post.body.map((b, i) => {
                if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
                if (b.type === "p") return <p key={i}>{b.text}</p>;
                if (b.type === "list")
                  return (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-3 text-ink-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-500" />{it}</li>
                      ))}
                    </ul>
                  );
                return (
                  <div key={i} className="my-8 flex gap-4 rounded-2xl border-l-4 border-accent-500 bg-accent-50 p-5">
                    <Lightbulb className="h-6 w-6 shrink-0 text-accent-600" />
                    <p className="!mb-0 font-medium !text-ink-800">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </article>

          {service && (
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-ink-950 p-7 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500"><Icon name={service.iconName} className="h-6 w-6" /></span>
                <div className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-300">Need a hand?</div>
                <div className="mt-1 text-xl font-extrabold">{service.title}</div>
                <p className="mt-2 text-sm text-ink-300">From {formatBDT(service.priceFrom)} / {service.priceUnit}</p>
                <BookButton service={service.slug} className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-accent-500 text-sm font-semibold hover:bg-accent-600">
                  Book this service
                </BookButton>
                <Link href={`/services/${service.slug}`} className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </Section>

      <Section tone="muted">
        <h2 className="mb-8 text-2xl font-extrabold text-ink-950">More guides</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {more.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
