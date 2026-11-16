"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-gray-100 bg-gray-50 text-xs text-gray-600 md:block">
        <Container className="flex h-9 items-center justify-between gap-6">
          <span className="truncate">{site.address}</span>
          <div className="flex shrink-0 items-center gap-5">
            <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-gray-900">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-gray-900">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(item.href) ? "text-brand-700" : "text-gray-600 hover:text-gray-900",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Free estimate
          </Link>
        </nav>
        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-gray-100 md:hidden">
          <Container className="flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-3 text-base font-medium",
                  isActive(item.href) ? "text-brand-700" : "text-gray-700",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-2 flex items-center gap-2 px-2 py-3 text-base font-medium text-gray-700">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
