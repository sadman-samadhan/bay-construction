import React from "react";
import { Check, X, ShieldCheck, Sparkles } from "lucide-react";
import { companyData } from "@/data/company";

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Workmanship Warranty",
      us: "Up to 5-Year Written Craft Guarantee",
      others: "30 days or no written warranty",
    },
    {
      feature: "Cost Transparency",
      us: "Fixed Upfront Flat-Rate Estimates",
      others: "Open-ended hourly billing with surprise additions",
    },
    {
      feature: "Trade Qualifications",
      us: "Certified & Licensed Master Tradesmen",
      others: "Unvetted day laborers or sub-contractors",
    },
    {
      feature: "Jobsite Cleanliness",
      us: "Drop Cloths, HEPA Vacuums & Daily Cleanup",
      others: "Leaves drywall dust and debris behind",
    },
    {
      feature: "Insurance & Licensing",
      us: "$2,000,000 Liability Coverage & Full Bond",
      others: "Often uninsured or underinsured",
    },
    {
      feature: "Emergency Dispatch",
      us: "24/7 Rapid Emergency Response Team",
      others: "Only available during business hours",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>The Apex Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Homeowners Choose Us Over Other Contractors
          </h2>

          <p className="text-base text-slate-600">
            We operate with complete accountability, transparent pricing, and
            craftsmen who genuinely care about the quality of your home.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 text-sm font-bold">
            <div className="col-span-5 sm:col-span-4 text-slate-300">
              Contractor Standard
            </div>
            <div className="col-span-4 sm:col-span-4 text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{companyData.name}</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-400">
              Other Typical Contractors
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-slate-50/80 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-800">
                  {item.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 flex items-center gap-2 text-slate-900 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  </div>
                  <span className="text-slate-900">{item.us}</span>
                </div>
                <div className="col-span-3 sm:col-span-4 flex items-center gap-2 text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-rose-500 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through decoration-slate-300">
                    {item.others}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
