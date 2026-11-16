import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { ButtonLink, CTA, EmergencyBand, PageHeader, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { getService, services } from "@/data/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.title, description: s.intro } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHeader title={s.title} text={s.summary} crumbs={[{ label: "Services", href: "/services/" }, { label: s.title }]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            {s.image && (
              <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={`/images/services/${s.image}.jpg`}
                  alt={s.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-lg leading-relaxed text-gray-600">{s.intro}</p>

            <h2 className="mt-10 text-2xl font-semibold text-gray-900">What we offer</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-md border border-gray-200 px-4 py-3 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <EmergencyBand />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-700 ring-1 ring-gray-200">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-900">Need {s.title.toLowerCase()}?</h2>
              <p className="mt-2 text-sm text-gray-600">Get a free, no-obligation estimate from our team.</p>
              <div className="mt-5 flex flex-col gap-2">
                <ButtonLink href="/contact/">Get a free estimate</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" /> {site.phone}
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Other services</h2>
              <ul className="mt-4 max-h-96 space-y-2 overflow-y-auto pr-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}/`} className="text-gray-700 hover:text-brand-700">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
