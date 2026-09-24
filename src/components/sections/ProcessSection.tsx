import React from "react";
import { MessageSquare, FileText, CheckCircle, ArrowRight } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Contact & Free Consultation",
      description:
        "Call us 24/7 or submit your project details online. We discuss your needs, budget, and timeline with no pressure.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Fixed Scope & Upfront Proposal",
      description:
        "We provide a clear, itemized proposal detailing labor, materials, and project schedule. No hidden surprises or open-ended hourly fees.",
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Master Execution & Inspection",
      description:
        "Our certified craftsmen complete your project to exacting specifications, followed by a final client walkthrough and warranty sign-off.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Seamless Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How We Bring Your Project to Life in 3 Simple Steps
          </h2>

          <p className="text-base text-slate-600">
            A structured, reliable approach that ensures your project is completed
            on time, within budget, and with zero headache.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-lg transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-amber-500/50 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
