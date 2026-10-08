import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="8 October 2026"
      sections={[
        { h: "Bookings", p: "A booking is confirmed once our coordinator confirms your date and arrival window. You may reschedule or cancel free of charge up to 2 hours before your slot." },
        { h: "Pricing", p: "Published prices are starting prices. The final price is confirmed on site before any work begins, and no work is carried out without your approval. Visit charges are adjusted against the bill if you proceed." },
        { h: "Payment", p: "Payment is due on completion unless covered by a maintenance plan or business contract. We accept bKash, Nagad, Rocket, cards, bank transfer and cash." },
        { h: "Warranty", p: "Workmanship is guaranteed for the period stated on your invoice. The warranty does not cover misuse, power surges, third-party work or customer-supplied parts." },
        { h: "Maintenance plans", p: "Plans run for 12 months from activation. Monthly plans can be cancelled with 30 days' notice; yearly plans are refundable pro-rata within the first 60 days, minus services already delivered." },
        { h: "Liability", p: "We carry insurance for accidental damage caused by our staff. Any damage must be reported within 48 hours of the visit, with photos where possible." },
      ]}
    />
  );
}
