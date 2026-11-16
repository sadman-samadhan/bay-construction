import { site } from "@/lib/site";

/** wa.me deep link with a pre-filled message. */
export function whatsappUrl(message?: string) {
  return message ? `${site.whatsappHref}?text=${encodeURIComponent(message)}` : site.whatsappHref;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Turns a label → value record into a readable multi-line message, skipping empty values. */
export function composeMessage(heading: string, fields: Record<string, string | undefined>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`);
  return [heading, "", ...lines].join("\n");
}
