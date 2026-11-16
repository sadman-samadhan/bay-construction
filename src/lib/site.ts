/**
 * All business contact details come from environment variables (see .env / .env.example).
 * They are baked into the static HTML at build time: edit .env, run `npm run build`, upload `out/`.
 */
const env = (value: string | undefined, fallback: string) => (value && value.trim() ? value.trim() : fallback);

const phone = env(process.env.NEXT_PUBLIC_PHONE, "+1 (212) 555-0100");
const whatsapp = env(process.env.NEXT_PUBLIC_WHATSAPP, phone).replace(/\D/g, "");
const email = env(process.env.NEXT_PUBLIC_EMAIL, "info@pipropertysolution.com");
const address = env(process.env.NEXT_PUBLIC_ADDRESS, "New York, NY 10001, USA");

export const site = {
  name: env(process.env.NEXT_PUBLIC_SITE_NAME, "Pi Property Solution"),
  url: env(process.env.NEXT_PUBLIC_SITE_URL, "https://www.pipropertysolution.com").replace(/\/$/, ""),
  tagline: "Your one-stop property maintenance partner",
  description:
    "Pi Property Solution provides property maintenance, repair and renovation services for homeowners, property managers and businesses — one vendor for every trade.",
  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,
  whatsapp,
  whatsappHref: `https://wa.me/${whatsapp}`,
  email,
  emailHref: `mailto:${email}`,
  address,
  mapQuery: env(process.env.NEXT_PUBLIC_MAP_QUERY, address),
  hours: env(process.env.NEXT_PUBLIC_HOURS, "Monday – Saturday, 8:00 AM – 6:00 PM"),
  socials: [
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK ?? "" },
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM ?? "" },
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN ?? "" },
  ].filter((s) => s.href.trim() !== ""),
};
