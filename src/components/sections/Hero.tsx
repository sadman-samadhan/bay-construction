"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Sparkles, Phone, ArrowRight, Award, Clock } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenEstimate?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative bg-[#0F172A] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Social Proof Star Rating Badge */}
            <div className="inline-flex items-center gap-2.5 bg-slate-800/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-200">
                4.9 / 5.0 Rating • 450+ Verified Reviews
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Elite Craftsmanship for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Renovations, Repairs
              </span>{" "}
              & Complete Home Care.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              From gourmet kitchen remodels to emergency 24/7 plumbing and
              electrical repairs. We deliver licensed, on-time, and precision
              residential and commercial contractor services.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenEstimate}
                className="flex items-center justify-center gap-2.5 text-base shadow-amber-500/30 shadow-xl group"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Get Your Free Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="white"
                size="lg"
                href={`tel:${companyData.phoneFormatted}`}
                className="flex items-center justify-center gap-2 text-base"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call {companyData.phone}</span>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>5-Year Craft Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>24/7 Rapid Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/services/remodeling.jpg"
                  alt="Luxury Home Remodeling by Apex Home Pros"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Feature Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                    Featured Transformation
                  </span>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Completed On Schedule
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  Open-Concept Kitchen & Living Renovation
                </div>
                <p className="text-xs text-slate-400 line-clamp-1">
                  Custom cabinetry, waterfall marble island, recessed architectural lighting
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-[#1B2A4A] border border-amber-500/40 p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-[#F59E0B]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Top Rated Contractor</div>
                <div className="text-[11px] text-amber-400 font-medium">100% Guaranteed Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
