import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";
import { companyData } from "@/data/company";

export const AboutSnapshot: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "Master Level Craftsmanship",
      description:
        "Every technician on our crew is a seasoned specialist in their trade, adhering to strict quality codes and precision finishing.",
    },
    {
      icon: HeartHandshake,
      title: "Clear, Honest Communication",
      description:
        "You get a dedicated project lead who keeps you updated daily with no hidden fees, surprise delays, or unexpected invoices.",
    },
    {
      icon: ShieldCheck,
      title: "Fully Licensed & Insured",
      description:
        "Comprehensive $2,000,000 general liability and workers' compensation coverage ensures complete safety and peace of mind.",
    },
    {
      icon: Sparkles,
      title: "Clean Jobsite Promise",
      description:
        "We treat your home like our own — using heavy-duty floor runners, plastic dust containment, and magnetic nail sweeps daily.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/5]">
              <Image
                src="/images/services/carpentry.jpg"
                alt="Master Artisan at Work"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#F59E0B] font-black text-lg">
                    16+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Years of Excellence
                    </div>
                    <div className="text-xs text-slate-500">
                      Serving the greater metropolitan region
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 border-t border-slate-100 pt-2 italic">
                  &ldquo;We don’t cut corners. We build relationships and homes that stand the test of time.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>About Apex Home Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Higher Standard of Construction & Home Renovation
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded on the principle that home improvement should be stress-free,
              reliable, and beautifully executed, {companyData.name} has grown to
              become the trusted partner for homeowners, realtors, and property
              managers throughout our region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#F59E0B] mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Zero Subcontractor Surprises</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Daily Clean-Up Protocol</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Written Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
