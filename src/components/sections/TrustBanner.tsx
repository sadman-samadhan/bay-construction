import React from "react";
import { ShieldCheck, DollarSign, Clock, Award } from "lucide-react";

export const TrustBanner: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Full $2M liability coverage & state-certified trade master contractors",
    },
    {
      icon: DollarSign,
      title: "Transparent Upfront Pricing",
      description: "Fixed-rate proposals with itemized breakdown — never hidden surprise fees",
    },
    {
      icon: Clock,
      title: "24/7 Rapid Response",
      description: "Prompt emergency dispatch for urgent plumbing, electrical, or roofing leaks",
    },
    {
      icon: Award,
      title: "5-Year Craft Warranty",
      description: "We stand behind our materials and labor with written satisfaction guarantees",
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-[#F59E0B]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
