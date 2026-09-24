import React from "react";
import { Sparkles, Phone, ShieldCheck, Check } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  onOpenEstimate?: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenEstimate }) => {
  return (
    <section id="contact" className="py-20 bg-[#1B2A4A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2c4066_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get Started Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Ready to Remodel, Repair, or Upgrade Your Property?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Experience the confidence of working with verified master tradesmen.
          Get a complimentary, itemized estimate with transparent flat-rate
          pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="accent"
            size="lg"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto text-base shadow-xl shadow-amber-500/20"
          >
            <span>Request Free In-Home Estimate</span>
          </Button>

          <Button
            variant="white"
            size="lg"
            href={`tel:${companyData.phoneFormatted}`}
            className="w-full sm:w-auto text-base"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call Now: {companyData.phone}</span>
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>100% Free & No Obligation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Itemized Quotes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Licensed #GC-88412 & Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
};
