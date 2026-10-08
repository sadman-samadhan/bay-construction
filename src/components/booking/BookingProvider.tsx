"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { BookingWizard } from "./BookingWizard";

interface BookingCtx {
  openBooking: (serviceSlug?: string) => void;
}

const Ctx = createContext<BookingCtx>({ openBooking: () => {} });

export const useBooking = () => useContext(Ctx);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();
  // Bumped on every open so the wizard state resets.
  const [session, setSession] = useState(0);

  const openBooking = useCallback((slug?: string) => {
    setService(slug);
    setSession((s) => s + 1);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Ctx.Provider value={{ openBooking }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book a service"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-ink-950">Book a service</h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                    <ShieldCheck className="h-4 w-4 text-brand-600" /> Upfront price · Verified technicians · Written warranty
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-700 hover:bg-ink-100"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <BookingWizard key={session} initialService={service} onDone={() => setOpen(false)} compact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

/** Small client button that opens the booking modal — usable from server components. */
export function BookButton({
  service,
  className,
  children,
}: {
  service?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { openBooking } = useBooking();
  return (
    <button type="button" onClick={() => openBooking(service)} className={className}>
      {children}
    </button>
  );
}
