import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

/** Shared dark hero band for inner pages, with breadcrumbs. */
export function PageHero({
  title,
  description,
  crumbs,
  eyebrow,
  image,
  children,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: Crumb[];
  eyebrow?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/90 to-brand-900/70" />
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-300">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200 text-pretty">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
