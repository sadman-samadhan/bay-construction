import { companyData } from "@/data/company";

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${companyData.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoUrl(subject: string, body: string, to: string = companyData.email) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Turns a label → value record into a readable multi-line message, skipping empty values. */
export function composeMessage(heading: string, fields: Record<string, string | undefined>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `• ${k}: ${v!.trim()}`);
  return [heading, "", ...lines].join("\n");
}
