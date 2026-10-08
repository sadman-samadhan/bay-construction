import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="8 October 2026"
      sections={[
        { h: "What we collect", p: "When you book or contact us, we collect your name, phone number, email (optional), address and details of the service you need. If you send photos, we use them only to assess the job." },
        { h: "How we use it", p: "To schedule and deliver your service, send booking confirmations and on-my-way alerts, issue invoices and warranties, and, with your consent, send maintenance reminders." },
        { h: "Sharing", p: "We share your details only with the technician assigned to your job and with payment providers (e.g. bKash, Nagad, card processors) when you pay. We never sell your data." },
        { h: "WhatsApp & email", p: "Forms on this website open WhatsApp or your email app with a pre-filled message. Those messages are handled under WhatsApp's and your email provider's own privacy terms." },
        { h: "Retention & your rights", p: `We keep job records for up to 5 years for warranty and accounting purposes. You can ask us to see, correct or delete your data at any time by emailing ${companyData.email}.` },
      ]}
    />
  );
}
