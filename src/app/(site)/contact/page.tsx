import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { companyData } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/interactive/ContactForm";
import { AreaChecker } from "@/components/interactive/AreaChecker";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call, WhatsApp or message ${companyData.name}. Offices in Banani, Dhaka and GEC Circle, Chattogram.`,
};

export default function ContactPage() {
  const cards = [
    { Icon: Phone, title: "Call us", lines: [companyData.phone, `Hotline ${companyData.hotline}`], href: companyData.phoneHref },
    { Icon: WhatsAppIcon, title: "WhatsApp", lines: ["Chat with a coordinator", "Send photos for a quote"], href: whatsappUrl("Hi! I have a question.") },
    { Icon: Mail, title: "Email", lines: [companyData.email, "Replies within a few hours"], href: `mailto:${companyData.email}` },
    { Icon: Siren, title: "24/7 Emergency", lines: [companyData.emergencyPhone, "Answered day and night"], href: companyData.emergencyPhoneHref, accent: true },
  ];
  return (
    <>
      <PageHero crumbs={[{ label: "Contact" }]} eyebrow="We're here to help" title="Get in touch" description="Questions, quotes or a problem that needs fixing today: reach us however suits you best." />

      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, lines, href, accent }) => (
            <a
              key={title}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group rounded-3xl p-6 shadow-xl shadow-ink-900/5 transition hover:-translate-y-1 ${accent ? "bg-accent-500 text-white" : "border border-ink-100 bg-white"}`}
            >
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent ? "bg-white/20" : "bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white"}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 font-extrabold">{title}</div>
              {lines.map((l) => <div key={l} className={`text-sm ${accent ? "text-white/85" : "text-ink-500"}`}>{l}</div>)}
            </a>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            {companyData.offices.map((o) => (
              <div key={o.label} className="overflow-hidden rounded-[2rem] border border-ink-100 bg-white">
                <iframe
                  title={`Map: ${o.label}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&z=15&output=embed`}
                  className="h-52 w-full border-0 grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <div className="font-extrabold text-ink-950">{o.label}</div>
                  <p className="mt-1 flex gap-2 text-sm text-ink-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {o.address}</p>
                </div>
              </div>
            ))}
            <div className="rounded-[2rem] bg-ink-950 p-6 text-white">
              <div className="flex items-center gap-2 font-extrabold"><Clock className="h-5 w-5 text-brand-300" /> Working hours</div>
              <p className="mt-3 text-sm text-ink-200">{companyData.hours.regular}</p>
              <p className="text-sm text-ink-200">{companyData.hours.friday}</p>
              <p className="mt-2 text-sm font-semibold text-accent-300">{companyData.hours.emergency}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading align="left" eyebrow="Coverage" title="Do we serve your area?" description="Type your neighbourhood to check coverage and response times." className="mb-0" />
          <AreaChecker />
        </div>
      </Section>
    </>
  );
}
