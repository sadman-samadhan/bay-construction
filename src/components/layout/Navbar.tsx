"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, Siren, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { serviceCategories, servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { useBooking } from "@/components/booking/BookingProvider";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render rather than in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMega(false);
    setMobile(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-ink-100 bg-white/90 shadow-sm backdrop-blur-xl" : "border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {mainNav.map((item) =>
            item.mega ? (
              <div key={item.href} className="flex h-[72px] items-center" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition",
                    isActive(item.href) ? "text-brand-700" : "text-ink-700 hover:text-ink-950"
                  )}
                  aria-expanded={mega}
                  onFocus={() => setMega(true)}
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", mega && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-1/2 top-full w-[min(1100px,calc(100vw-48px))] -translate-x-1/2 pt-1"
                    >
                      <div className="grid grid-cols-[1fr_280px] overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/15">
                        <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-7">
                          {serviceCategories.map((cat) => (
                            <div key={cat.id}>
                              <div className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-400">
                                <Icon name={cat.iconName} className="h-3.5 w-3.5 text-brand-500" /> {cat.title}
                              </div>
                              <ul className="space-y-0.5">
                                {servicesData
                                  .filter((s) => s.category === cat.id)
                                  .map((s) => (
                                    <li key={s.slug}>
                                      <Link
                                        href={`/services/${s.slug}`}
                                        className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
                                      >
                                        <Icon name={s.iconName} className="h-4 w-4 text-ink-300 group-hover:text-brand-600" />
                                        {s.title}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-7 text-white">
                          <div className="absolute inset-0 bg-grid-dark" />
                          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-2xl" />
                          <div className="relative">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-bold text-accent-300">
                              <Siren className="h-3.5 w-3.5" /> 24/7 Emergency
                            </span>
                            <p className="mt-4 text-lg font-bold leading-snug">Burst pipe or short circuit? We aim to be at your door in ~60 minutes.</p>
                            <a href={companyData.emergencyPhoneHref} className="mt-3 inline-block text-xl font-extrabold text-accent-300">
                              {companyData.emergencyPhone}
                            </a>
                          </div>
                          <Link href="/services" className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200">
                            View all {servicesData.length} services <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition",
                  isActive(item.href) ? "text-brand-700" : "text-ink-700 hover:text-ink-950"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={companyData.phoneHref} className="hidden items-center gap-2.5 whitespace-nowrap pr-2 2xl:flex">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold text-ink-400">Call us</span>
              <span className="block text-sm font-bold text-ink-950">{companyData.phone}</span>
            </span>
          </a>
          <button
            onClick={() => openBooking()}
            className="hidden h-11 items-center whitespace-nowrap rounded-full bg-accent-500 px-5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition hover:bg-accent-600 sm:inline-flex"
          >
            Book a Service
          </button>
          <button
            onClick={() => setMobile(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-100 text-ink-900 xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

    </header>

      {/* Mobile drawer — rendered outside <header> so its backdrop-filter doesn't trap position: fixed */}
      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[70] xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setMobile(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(420px,100%)] flex-col bg-white"
            >
              <div className="flex h-[72px] items-center justify-between border-b border-ink-100 px-5">
                <Logo />
                <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-full bg-ink-50" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
                <Link href="/" className="block rounded-xl px-3 py-3 text-base font-semibold text-ink-900">Home</Link>
                {mainNav.map((item) =>
                  item.mega ? (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileServices((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink-900"
                        aria-expanded={mobileServices}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-5 w-5 transition-transform", mobileServices && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServices && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="grid grid-cols-1 gap-1 pb-3 pl-3">
                              {servicesData.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-50">
                                  <Icon name={s.iconName} className="h-4 w-4 text-brand-500" /> {s.title}
                                </Link>
                              ))}
                              <Link href="/services" className="px-3 py-2 text-sm font-semibold text-brand-700">All services →</Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn("block rounded-xl px-3 py-3 text-base font-semibold", isActive(item.href) ? "bg-brand-50 text-brand-800" : "text-ink-900")}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link href="/emergency" className="mt-2 flex items-center gap-2 rounded-xl bg-accent-50 px-3 py-3 text-base font-semibold text-accent-700">
                  <Siren className="h-5 w-5" /> 24/7 Emergency
                </Link>
              </nav>
              <div className="space-y-3 border-t border-ink-100 p-5">
                <button
                  onClick={() => {
                    setMobile(false);
                    openBooking();
                  }}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-accent-500 font-semibold text-white"
                >
                  Book a Service
                </button>
                <a href={companyData.phoneHref} className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-ink-200 font-semibold text-ink-900">
                  <Phone className="h-4 w-4" /> {companyData.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
