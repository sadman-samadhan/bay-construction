"use client";

import { useState } from "react";
import { CheckCircle2, ImagePlus, Mail } from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { composeMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const PHONE_RE = /^(?:\+?88)?01[3-9]\d{8}$/;

/** General enquiry form. Composes the message and hands off to WhatsApp or the mail client. */
export function ContactForm({ title = "Send us a message", subject = "Website enquiry" }: { title?: string; subject?: string }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", area: "", service: "", message: "", via: "WhatsApp" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof f, v: string) => {
    setF((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (channel: "whatsapp" | "email") => {
    const e: Record<string, string> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!PHONE_RE.test(f.phone.replace(/[\s-]/g, ""))) e.phone = "Enter a valid mobile number (01XXXXXXXXX).";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Check your email address.";
    if (f.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
    setErrors(e);
    if (Object.keys(e).length) return;

    const body = composeMessage(`${subject} — ${companyData.name}`, {
      Name: f.name,
      Phone: f.phone,
      Email: f.email,
      Area: f.area,
      Service: f.service,
      Message: f.message,
      "Preferred contact": f.via,
    });
    window.open(channel === "whatsapp" ? whatsappUrl(body) : mailtoUrl(subject, body), channel === "whatsapp" ? "_blank" : "_self");
    setSent(true);
  };

  const field = (k: string) =>
    cn(
      "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10",
      errors[k] ? "border-red-400" : "border-ink-200"
    );
  const err = (k: string) => (errors[k] ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors[k]}</p> : null);

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border border-ink-100 bg-white p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-500" />
        <h3 className="mt-5 text-2xl font-extrabold text-ink-950">Thanks, {f.name.split(" ")[0]}!</h3>
        <p className="mt-2 max-w-sm text-ink-500">Once your message reaches us, we&apos;ll reply within 30 minutes during working hours.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-brand-700 underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit("whatsapp"); }} className="rounded-[2rem] border border-ink-100 bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-10" noValidate>
      <h3 className="text-2xl font-extrabold text-ink-950">{title}</h3>
      <p className="mt-1 text-sm text-ink-500">We usually reply within 30 minutes during working hours.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-ink-900">Full name<input value={f.name} onChange={(e) => set("name", e.target.value)} className={field("name")} autoComplete="name" />{err("name")}</label>
        <label className="text-sm font-bold text-ink-900">Mobile number<input value={f.phone} onChange={(e) => set("phone", e.target.value)} className={field("phone")} inputMode="tel" placeholder="01XXX-XXXXXX" autoComplete="tel" />{err("phone")}</label>
        <label className="text-sm font-bold text-ink-900">Email <span className="font-normal text-ink-400">(optional)</span><input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} className={field("email")} autoComplete="email" />{err("email")}</label>
        <label className="text-sm font-bold text-ink-900">Area<input value={f.area} onChange={(e) => set("area", e.target.value)} className={field("area")} placeholder="e.g. Uttara Sector 7" /></label>
        <label className="text-sm font-bold text-ink-900 sm:col-span-2">Service
          <select value={f.service} onChange={(e) => set("service", e.target.value)} className={field("service")}>
            <option value="">Not sure / general enquiry</option>
            {servicesData.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Maintenance plan (AMC)</option>
            <option>Partnership / business enquiry</option>
          </select>
        </label>
        <label className="text-sm font-bold text-ink-900 sm:col-span-2">How can we help?
          <textarea rows={4} value={f.message} onChange={(e) => set("message", e.target.value)} className={cn(field("message"), "resize-none")} placeholder="Describe the problem, your property and any timing preferences." />
          {err("message")}
        </label>
        <div className="sm:col-span-2">
          <span className="text-sm font-bold text-ink-900">Preferred contact</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {["WhatsApp", "Phone call", "Email"].map((v) => (
              <button type="button" key={v} onClick={() => set("via", v)} className={cn("rounded-full border px-4 py-2 text-sm font-semibold transition", f.via === v ? "border-brand-500 bg-brand-500 text-white" : "border-ink-200 text-ink-700 hover:border-ink-400")}>{v}</button>
            ))}
          </div>
        </div>
        <p className="flex items-start gap-2 rounded-xl bg-ink-50 p-3 text-xs text-ink-500 sm:col-span-2">
          <ImagePlus className="h-4 w-4 shrink-0 text-brand-600" /> Have photos of the problem? Attach them in the WhatsApp chat that opens after you send. It helps us quote faster.
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#1ebe5a]">
          <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
        </button>
        <button type="button" onClick={() => submit("email")} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-200 font-semibold text-ink-900 hover:border-ink-900">
          <Mail className="h-4 w-4" /> Send via Email
        </button>
      </div>
    </form>
  );
}
