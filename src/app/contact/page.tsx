import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for a free estimate on property maintenance, repairs and renovation.`,
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone.replace(/\D/g, "") === site.whatsapp ? site.phone : `+${site.whatsapp}`, href: site.whatsappHref },
    { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
    { icon: MapPin, label: "Address", value: site.address },
    { icon: Clock, label: "Working hours", value: `${site.hours} · Emergency line 24/7` },
  ];

  return (
    <>
      <PageHeader
        title="Contact us"
        text="Submit the form and we'll respond as quickly as possible. Need help right now? Call our emergency line."
        crumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Get in touch</h2>
            <ul className="mt-6 space-y-5">
              {details.map(({ icon: I, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <I className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="break-all font-medium text-gray-900 hover:text-brand-700"
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Send us a message</h2>
            <p className="mt-2 text-gray-600">Tell us about the job and we&apos;ll get back to you with a free estimate.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <div className="border-t border-gray-100">
        <iframe
          title={`Map showing ${site.address}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          className="block h-96 w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
