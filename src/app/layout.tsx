import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { companyData } from "@/data/company";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(companyData.siteUrl),
  title: {
    default: `${companyData.name} | Repairs, Maintenance & Home Services in Dhaka`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.shortDescription,
  keywords: [
    "property maintenance Dhaka",
    "plumber Dhaka",
    "electrician Dhaka",
    "AC servicing Dhaka",
    "water tank cleaning",
    "home repair Bangladesh",
    "deep cleaning Dhaka",
    "waterproofing Dhaka",
    "annual maintenance contract",
    "pest control Dhaka",
  ],
  openGraph: {
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.shortDescription,
    type: "website",
    locale: "en_BD",
    siteName: companyData.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2133",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
