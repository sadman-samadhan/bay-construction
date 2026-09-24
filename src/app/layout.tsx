import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Home & Construction Solutions | Remodeling, Repairs & 24/7 Services",
  description:
    "Licensed residential & commercial construction, kitchen and bath remodeling, plumbing, electrical, HVAC, roofing, and handyman repairs. Free upfront estimates and 24/7 emergency service.",
  keywords: [
    "home remodeling",
    "home repair services",
    "emergency plumber",
    "residential electrician",
    "roofing contractor",
    "handyman services",
    "HVAC repair",
    "kitchen renovation",
    "painting contractor",
  ],
  openGraph: {
    title: "Apex Home & Construction Solutions | Master Craftsmanship",
    description:
      "Licensed residential & commercial construction, kitchen and bath remodeling, plumbing, electrical, HVAC, roofing, and handyman repairs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
