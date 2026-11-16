"use client";

import { Mail, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { composeMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";

const input =
  "mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700";
const label = "block text-sm font-medium text-gray-700";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const via = submitter?.value === "email" ? "email" : "whatsapp";
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "");
    const message = composeMessage("New estimate request", {
      Name: get("name"),
      Phone: get("phone"),
      Email: get("email"),
      Address: get("address"),
      Service: get("service"),
      "Preferred contact": get("preferred"),
      Details: get("details"),
    });
    const url = via === "whatsapp" ? whatsappUrl(message) : mailtoUrl(`Estimate request from ${get("name")}`, message);
    window.open(url, via === "whatsapp" ? "_blank" : "_self");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Full name *</label>
        <input id="name" name="name" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone number *</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={input} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="address" className={label}>Property address</label>
        <input id="address" name="address" autoComplete="street-address" className={input} />
      </div>
      <div>
        <label htmlFor="service" className={label}>Service needed</label>
        <select id="service" name="service" defaultValue={defaultService} className={input}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="preferred" className={label}>Preferred contact method</label>
        <select id="preferred" name="preferred" className={input} defaultValue="Phone call">
          <option>Phone call</option>
          <option>Message</option>
          <option>Email</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="details" className={label}>How can we help? *</label>
        <textarea id="details" name="details" rows={5} required className={input} placeholder="Describe the job, the location in the property and any timing needs." />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button
          type="submit"
          value="whatsapp"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800"
        >
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp
        </button>
        <button
          type="submit"
          value="email"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        >
          <Mail className="h-4 w-4" /> Send via email
        </button>
      </div>
      <p className="text-xs text-gray-500 sm:col-span-2">
        Submitting opens WhatsApp or your email app with your details filled in — just press send.
      </p>
    </form>
  );
}
