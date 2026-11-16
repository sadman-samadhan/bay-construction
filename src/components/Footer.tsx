import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { featuredServices } from "@/data/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {featuredServices.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about/" className="hover:text-white">About us</Link></li>
            <li><Link href="/services/" className="hover:text-white">All services</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Free estimate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {site.address}</li>
            <li>
              <a href={site.phoneHref} className="flex gap-2.5 hover:text-white"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> {site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref} className="flex gap-2.5 break-all hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> {site.email}</a>
            </li>
            <li className="flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0" /> {site.hours}</li>
          </ul>
          {site.socials.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
      <div className="border-t border-gray-800">
        <Container className="py-6 text-xs">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
