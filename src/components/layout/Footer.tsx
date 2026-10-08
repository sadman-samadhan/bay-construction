import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { footerNav } from "@/data/navigation";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { Logo } from "./Logo";

export function Footer() {
  const popular = servicesData.filter((s) => s.popular).slice(0, 7);
  const socials = [
    { href: companyData.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: companyData.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: companyData.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: companyData.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-950 pb-24 text-ink-300 md:pb-0">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />

      {/* Emergency strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-accent-500 text-white">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-500" />
              <Siren className="relative h-5 w-5" />
            </span>
            <div>
              <div className="text-lg font-bold text-white">Need help right now?</div>
              <div className="text-sm">Our emergency line is answered by a real person, 24/7, 365 days.</div>
            </div>
          </div>
          <a href={companyData.emergencyPhoneHref} className="text-2xl font-extrabold text-accent-300 hover:text-accent-200">
            {companyData.emergencyPhone}
          </a>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-8">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Repairs, maintenance and property care for homes, buildings and businesses, handled by one trusted team since {companyData.foundedYear}.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-ink-200 transition hover:bg-brand-500 hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">We accept</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {companyData.payments.map((p) => (
                <span key={p} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-ink-200">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Popular services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {popular.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-brand-300">{s.title}</Link></li>
            ))}
            <li><Link href="/services" className="font-semibold text-brand-300 hover:text-brand-200">All services →</Link></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.company.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-brand-300">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Help</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.help.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-brand-300">{l.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /><a href={companyData.phoneHref} className="hover:text-white">{companyData.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /><a href={`mailto:${companyData.email}`} className="break-all hover:text-white">{companyData.email}</a></li>
            {companyData.offices.map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span><span className="block font-semibold text-ink-100">{o.label}</span>{o.address}</span>
              </li>
            ))}
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /><span>{companyData.hours.regular}<br />{companyData.hours.friday}</span></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {footerNav.legal.map((l) => <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>)}
            <Link href="/admin" className="hover:text-white">Staff login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
