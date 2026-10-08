"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CalendarCheck, Phone } from "lucide-react";
import { companyData } from "@/data/company";
import { whatsappUrl } from "@/lib/contact";
import { useBooking } from "@/components/booking/BookingProvider";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Floating WhatsApp + back-to-top on desktop; sticky Call / WhatsApp / Book bar on mobile. */
export function FloatingActions() {
  const { openBooking } = useBooking();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = whatsappUrl(`Hi ${companyData.shortName}! I'd like help with a service at my property.`);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-100 bg-white text-ink-800 shadow-lg hover:bg-ink-50"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 font-semibold text-white shadow-xl shadow-[#25D366]/30 transition hover:bg-[#1ebe5a]"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366] opacity-40" />
          <WhatsAppIcon className="relative h-6 w-6" />
          <span className="relative text-sm">Chat on WhatsApp</span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a href={companyData.phoneHref} className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold text-ink-700">
            <Phone className="h-5 w-5 text-brand-600" /> Call
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold text-ink-700">
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
          </a>
          <button onClick={() => openBooking()} className="flex flex-col items-center gap-1 rounded-xl bg-accent-500 py-1.5 text-[11px] font-semibold text-white">
            <CalendarCheck className="h-5 w-5" /> Book now
          </button>
        </div>
      </div>
    </>
  );
}
