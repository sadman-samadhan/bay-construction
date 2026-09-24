import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-[#F59E0B] border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Trusted by Hundreds of Local Homeowners
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Read authentic feedback from residents who experienced our
            craftsmanship, reliability, and dedicated customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 rounded-2xl p-7 border border-slate-700/60 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-5 shadow-lg"
            >
              <div className="space-y-3">
                {/* Stars and Service Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs bg-slate-700/80 text-amber-400 font-semibold px-2.5 py-1 rounded-md border border-slate-600">
                    {item.service}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">{item.location}</div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Customer</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
