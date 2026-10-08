"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, Clock, Mail, MapPin, Search, User,
} from "lucide-react";
import { serviceCategories, servicesData, type ServiceCategoryId } from "@/data/services";
import { companyData, serviceAreas } from "@/data/company";
import { composeMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn, formatBDT } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const STEPS = ["Service", "Details", "Schedule", "Contact", "Review"] as const;
const PROPERTY_TYPES = ["Flat / Apartment", "Duplex / House", "Office", "Shop / Restaurant", "Whole building"];
const URGENCY = [
  { id: "emergency", label: "Emergency", hint: "Within ~60 min" },
  { id: "today", label: "Today", hint: "Same day" },
  { id: "week", label: "This week", hint: "Pick a slot" },
  { id: "flexible", label: "Flexible", hint: "Best price slot" },
];
const SLOTS = ["9 – 11 AM", "11 AM – 1 PM", "2 – 4 PM", "4 – 6 PM", "6 – 8 PM"];
const ALL_AREAS = serviceAreas.flatMap((g) => g.areas);
const PHONE_RE = /^(?:\+?88)?01[3-9]\d{8}$/;

interface FormState {
  service: string;
  tasks: string[];
  details: string;
  property: string;
  urgency: string;
  date: string;
  slot: string;
  name: string;
  phone: string;
  email: string;
  area: string;
  address: string;
  contactVia: "WhatsApp" | "Phone call" | "Email";
}

function nextDays(count: number) {
  const days: { iso: string; day: string; date: string; month: string; label: string; friday: boolean }[] = [];
  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    days.push({
      iso: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
      label: d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }),
      day: i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-GB", { weekday: "short" }),
      date: String(d.getDate()),
      month: d.toLocaleDateString("en-GB", { month: "short" }),
      friday: d.getDay() === 5,
    });
  }
  return days;
}

export function BookingWizard({
  initialService,
  onDone,
  compact = false,
}: {
  initialService?: string;
  onDone?: () => void;
  compact?: boolean;
}) {
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<ServiceCategoryId | "all">("all");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    service: initialService ?? "",
    tasks: [],
    details: "",
    property: PROPERTY_TYPES[0],
    urgency: "week",
    date: "",
    slot: "",
    name: "",
    phone: "",
    email: "",
    area: "",
    address: "",
    contactVia: "WhatsApp",
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const selected = servicesData.find((s) => s.slug === form.service);
  const days = useMemo(() => nextDays(10), []);

  const filtered = servicesData.filter((s) => {
    const inCat = cat === "all" || s.category === cat;
    const q = query.trim().toLowerCase();
    const inQuery = !q || s.title.toLowerCase().includes(q) || s.keywords.some((k) => k.includes(q) || q.includes(k));
    return inCat && inQuery;
  });

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 0 && !form.service) e.service = "Please choose a service.";
    if (s === 1 && form.details.trim().length < 8 && form.tasks.length === 0)
      e.details = "Tick a task or describe the problem in a few words.";
    if (s === 2 && form.urgency !== "emergency") {
      if (!form.date) e.date = "Pick a date.";
      if (!form.slot) e.slot = "Pick an arrival window.";
    }
    if (s === 3) {
      if (form.name.trim().length < 2) e.name = "Please enter your name.";
      if (!PHONE_RE.test(form.phone.replace(/[\s-]/g, ""))) e.phone = "Enter a valid Bangladeshi mobile number (01XXXXXXXXX).";
      if (!form.area.trim()) e.area = "Tell us your area.";
      if (form.contactVia === "Email" && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => validate(step) && setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const when =
    form.urgency === "emergency"
      ? "EMERGENCY — as soon as possible"
      : `${days.find((d) => d.iso === form.date)?.label ?? ""} · ${form.slot}`;

  const message = composeMessage(`New booking request — ${companyData.name}`, {
    Service: selected?.title,
    Tasks: form.tasks.join(", "),
    Problem: form.details,
    Property: form.property,
    Urgency: URGENCY.find((u) => u.id === form.urgency)?.label,
    "Preferred time": when,
    Name: form.name,
    Phone: form.phone,
    Email: form.email,
    Area: form.area,
    Address: form.address,
    "Contact me via": form.contactVia,
  });

  const send = (channel: "whatsapp" | "email") => {
    const url = channel === "whatsapp" ? whatsappUrl(message) : mailtoUrl(`Booking request: ${selected?.title ?? "Service"}`, message);
    window.open(url, channel === "whatsapp" ? "_blank" : "_self");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center px-2 py-10 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-600"
        >
          <CheckCircle2 className="h-10 w-10" />
        </motion.div>
        <h3 className="mt-6 text-2xl font-extrabold text-ink-950">Request ready to send!</h3>
        <p className="mt-3 max-w-md text-ink-500">
          Once your message reaches us, a coordinator will confirm your booking within 30 minutes during working hours, with your technician&apos;s name and arrival window.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => send("whatsapp")} className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-800 hover:border-ink-900">
            Didn&apos;t open? Try WhatsApp again
          </button>
          {onDone && (
            <button onClick={onDone} className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white">
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  const fieldCls = (key: string) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10",
      errors[key] ? "border-red-400" : "border-ink-200"
    );
  const err = (k: string) => (errors[k] ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors[k]}</p> : null);

  return (
    <div>
      {/* Progress */}
      <ol className="mb-7 flex items-center gap-1.5 sm:gap-2" aria-label="Booking progress">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 flex-col gap-2">
            <div className={cn("h-1.5 rounded-full transition-colors duration-300", i <= step ? "bg-brand-500" : "bg-ink-100")} />
            <span className={cn("hidden text-[11px] font-semibold uppercase tracking-wider sm:block", i === step ? "text-ink-900" : "text-ink-400")}>
              {i + 1}. {label}
            </span>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.22 }}
        >
          {/* STEP 0 — SERVICE */}
          {step === 0 && (
            <div>
              <h3 className="text-xl font-extrabold text-ink-950">What do you need help with?</h3>
              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try “leaking tap”, “AC not cooling”, “cockroach”…"
                  className={cn(fieldCls("service"), "pl-11")}
                />
              </div>
              <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
                {[{ id: "all" as const, title: "All" }, ...serviceCategories].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCat(c.id)}
                    className={cn(
                      "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                      cat === c.id ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 text-ink-600 hover:border-ink-400"
                    )}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
              <div className={cn("mt-4 grid gap-2.5 overflow-y-auto pr-1", compact ? "max-h-[38vh] sm:grid-cols-2" : "max-h-[460px] sm:grid-cols-2 lg:grid-cols-3")}>
                {filtered.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      set("service", s.slug);
                      set("tasks", []);
                    }}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border p-3 text-left transition",
                      form.service === s.slug ? "border-brand-500 bg-brand-50 ring-4 ring-brand-500/10" : "border-ink-100 hover:border-ink-300"
                    )}
                  >
                    <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", form.service === s.slug ? "bg-brand-500 text-white" : "bg-ink-50 text-ink-700")}>
                      <Icon name={s.iconName} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-ink-900">{s.title}</span>
                      <span className="block text-xs text-ink-400">From {formatBDT(s.priceFrom)}</span>
                    </span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="col-span-full rounded-2xl bg-ink-50 p-5 text-sm text-ink-500">
                    No match. Choose <button className="font-semibold text-brand-700 underline" onClick={() => { set("service", "home-repair-handyman"); setQuery(""); }}>Home Repair & Handyman</button> and describe the problem. We&apos;ll send the right expert.
                  </p>
                )}
              </div>
              {err("service")}
            </div>
          )}

          {/* STEP 1 — DETAILS */}
          {step === 1 && selected && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 rounded-2xl bg-ink-50 p-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon name={selected.iconName} className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-ink-900">{selected.title}</div>
                  <div className="text-xs text-ink-500">From {formatBDT(selected.priceFrom)} / {selected.priceUnit}</div>
                </div>
                <button onClick={() => setStep(0)} className="text-xs font-semibold text-brand-700 hover:underline">Change</button>
              </div>
              <div>
                <label className="text-sm font-bold text-ink-900">What needs doing? <span className="font-normal text-ink-400">(tick any)</span></label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.subServices.slice(0, 8).map((t) => {
                    const on = form.tasks.includes(t);
                    return (
                      <button
                        key={t}
                        onClick={() => set("tasks", on ? form.tasks.filter((x) => x !== t) : [...form.tasks, t])}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                          on ? "border-brand-500 bg-brand-500 text-white" : "border-ink-200 text-ink-600 hover:border-ink-400"
                        )}
                      >
                        {on && <Check className="h-3 w-3" />} {t}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label htmlFor="bw-details" className="text-sm font-bold text-ink-900">Describe the problem</label>
                <textarea
                  id="bw-details"
                  rows={3}
                  value={form.details}
                  onChange={(e) => set("details", e.target.value)}
                  placeholder="e.g. Water dripping from the bathroom ceiling since yesterday. You can send photos on WhatsApp after booking."
                  className={cn(fieldCls("details"), "mt-2 resize-none")}
                />
                {err("details")}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-ink-900">Property type</label>
                  <select value={form.property} onChange={(e) => set("property", e.target.value)} className={cn(fieldCls("property"), "mt-2")}>
                    {PROPERTY_TYPES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <span className="text-sm font-bold text-ink-900">How urgent?</span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {URGENCY.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => set("urgency", u.id)}
                        className={cn(
                          "rounded-xl border px-3 py-2 text-left transition",
                          form.urgency === u.id
                            ? u.id === "emergency" ? "border-accent-500 bg-accent-50" : "border-brand-500 bg-brand-50"
                            : "border-ink-200 hover:border-ink-400"
                        )}
                      >
                        <span className="block text-xs font-bold text-ink-900">{u.label}</span>
                        <span className="block text-[11px] text-ink-400">{u.hint}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — SCHEDULE */}
          {step === 2 && (
            <div className="space-y-6">
              {form.urgency === "emergency" ? (
                <div className="rounded-2xl border border-accent-200 bg-accent-50 p-5">
                  <h3 className="font-extrabold text-ink-950">Emergency selected — we&apos;ll dispatch the nearest technician.</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    For the fastest response, also call our 24/7 line:{" "}
                    <a href={companyData.emergencyPhoneHref} className="font-bold text-accent-700 underline">{companyData.emergencyPhone}</a>
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <span className="flex items-center gap-2 text-sm font-bold text-ink-900"><CalendarDays className="h-4 w-4 text-brand-600" /> Choose a date</span>
                    <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-2">
                      {days.map((d) => (
                        <button
                          key={d.iso}
                          onClick={() => set("date", d.iso)}
                          className={cn(
                            "flex w-[70px] shrink-0 flex-col items-center rounded-2xl border py-3 transition",
                            form.date === d.iso ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 hover:border-ink-400"
                          )}
                        >
                          <span className={cn("text-[11px] font-semibold", form.date === d.iso ? "text-ink-200" : "text-ink-400")}>{d.day}</span>
                          <span className="text-xl font-extrabold">{d.date}</span>
                          <span className={cn("text-[11px]", form.date === d.iso ? "text-ink-200" : "text-ink-400")}>{d.month}</span>
                        </button>
                      ))}
                    </div>
                    {err("date")}
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-sm font-bold text-ink-900"><Clock className="h-4 w-4 text-brand-600" /> Arrival window</span>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {SLOTS.map((s) => {
                        const isFriMorning = days.find((d) => d.iso === form.date)?.friday && SLOTS.indexOf(s) < 2;
                        return (
                          <button
                            key={s}
                            disabled={isFriMorning}
                            onClick={() => set("slot", s)}
                            className={cn(
                              "rounded-xl border px-3 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40",
                              form.slot === s ? "border-brand-500 bg-brand-50 text-brand-800" : "border-ink-200 text-ink-700 hover:border-ink-400"
                            )}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-2 text-xs text-ink-400">Friday service starts at 2 PM. You&apos;ll get an &ldquo;on my way&rdquo; alert with your technician&apos;s ETA.</p>
                    {err("slot")}
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 3 — CONTACT */}
          {step === 3 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="bw-name" className="text-sm font-bold text-ink-900">Your name</label>
                <div className="relative mt-2">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                  <input id="bw-name" value={form.name} onChange={(e) => set("name", e.target.value)} className={cn(fieldCls("name"), "pl-11")} placeholder="Full name" autoComplete="name" />
                </div>
                {err("name")}
              </div>
              <div>
                <label htmlFor="bw-phone" className="text-sm font-bold text-ink-900">Mobile number</label>
                <input id="bw-phone" inputMode="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={cn(fieldCls("phone"), "mt-2")} placeholder="01XXX-XXXXXX" autoComplete="tel" />
                {err("phone")}
              </div>
              <div>
                <label htmlFor="bw-area" className="text-sm font-bold text-ink-900">Area</label>
                <div className="relative mt-2">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                  <input id="bw-area" list="bw-areas" value={form.area} onChange={(e) => set("area", e.target.value)} className={cn(fieldCls("area"), "pl-11")} placeholder="e.g. Dhanmondi" />
                  <datalist id="bw-areas">{ALL_AREAS.map((a) => <option key={a} value={a} />)}</datalist>
                </div>
                {err("area")}
              </div>
              <div>
                <label htmlFor="bw-email" className="text-sm font-bold text-ink-900">Email <span className="font-normal text-ink-400">(optional)</span></label>
                <div className="relative mt-2">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                  <input id="bw-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={cn(fieldCls("email"), "pl-11")} placeholder="you@example.com" autoComplete="email" />
                </div>
                {err("email")}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bw-address" className="text-sm font-bold text-ink-900">Address <span className="font-normal text-ink-400">(house, road, flat)</span></label>
                <input id="bw-address" value={form.address} onChange={(e) => set("address", e.target.value)} className={cn(fieldCls("address"), "mt-2")} placeholder="House 12, Road 5, Flat 4B" autoComplete="street-address" />
              </div>
              <div className="sm:col-span-2">
                <span className="text-sm font-bold text-ink-900">Best way to reach you</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["WhatsApp", "Phone call", "Email"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => set("contactVia", c)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-semibold transition",
                        form.contactVia === c ? "border-brand-500 bg-brand-500 text-white" : "border-ink-200 text-ink-700 hover:border-ink-400"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 — REVIEW */}
          {step === 4 && selected && (
            <div>
              <h3 className="text-xl font-extrabold text-ink-950">Review your request</h3>
              <dl className="mt-4 divide-y divide-ink-100 rounded-2xl border border-ink-100">
                {[
                  ["Service", selected.title],
                  ["Tasks", form.tasks.join(", ") || "—"],
                  ["Problem", form.details || "—"],
                  ["Property", form.property],
                  ["When", when],
                  ["Name", form.name],
                  ["Phone", form.phone],
                  ["Area", [form.area, form.address].filter(Boolean).join(" · ")],
                  ["Contact via", form.contactVia],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-3 px-4 py-2.5 text-sm">
                    <dt className="font-semibold text-ink-400">{k}</dt>
                    <dd className="col-span-2 text-ink-900">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3">
                <span className="text-sm font-semibold text-brand-800">Starting price</span>
                <span className="text-lg font-extrabold text-brand-800">{formatBDT(selected.priceFrom)} <span className="text-xs font-medium">/ {selected.priceUnit}</span></span>
              </div>
              <p className="mt-3 text-xs text-ink-400">Final price is confirmed on site before any work begins. No work starts without your approval.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button onClick={() => send("whatsapp")} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1ebe5a]">
                  <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
                </button>
                <button onClick={() => send("email")} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-200 font-semibold text-ink-900 transition hover:border-ink-900">
                  <Mail className="h-4 w-4" /> Send via Email
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      {step < 4 && (
        <div className="mt-7 flex items-center justify-between border-t border-ink-100 pt-5">
          <button
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition hover:text-ink-900 disabled:invisible"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            onClick={next}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-accent-500 px-6 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition hover:bg-accent-600"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
      {step === 4 && (
        <button onClick={back} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-ink-900">
          <ArrowLeft className="h-4 w-4" /> Edit details
        </button>
      )}
    </div>
  );
}
