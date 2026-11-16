import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  muted = false,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", muted && "border-y border-gray-100 bg-gray-50", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-gray-600">{text}</p>}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  outline: "border border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-50",
  light: "bg-white text-gray-900 hover:bg-gray-100",
  ghostLight: "border border-white/30 text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof buttonStyles;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
    buttonStyles[variant],
    className,
  );
  const external = /^(https?:|tel:|mailto:)/.test(href);
  return external ? (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHeader({
  title,
  text,
  crumbs = [],
}: {
  title: string;
  text?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="border-b border-gray-100 bg-gray-50">
      <Container className="py-14 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? (
                <Link href={c.href} className="hover:text-gray-900">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-900">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">{text}</p>}
      </Container>
    </div>
  );
}

export function EmergencyBand() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Emergency service · 24 hours / 7 days</p>
        <p className="mt-2 text-xl font-semibold text-gray-900">
          Burst pipe, power failure or storm damage? We respond day and night, all year round.
        </p>
      </div>
      <ButtonLink href={site.phoneHref} className="mt-5 shrink-0 sm:mt-0">
        <Phone className="h-4 w-4" /> {site.phone}
      </ButtonLink>
    </div>
  );
}

export function CTA({
  title = "Looking for a reliable property maintenance partner?",
  text = "Tell us what needs doing. We'll get back to you quickly with a clear, no-obligation estimate.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gray-900">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
            <p className="mt-3 text-lg text-gray-300">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="light">
              Get a free estimate
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghostLight">
              <Phone className="h-4 w-4" /> {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
