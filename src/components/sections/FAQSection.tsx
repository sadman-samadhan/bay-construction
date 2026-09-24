"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Phone } from "lucide-react";
import { faqData } from "@/data/testimonials";
import { companyData } from "@/data/company";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600">
            Find immediate answers regarding our estimates, warranty coverages,
            and service capabilities.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1B2A4A] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#F59E0B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-amber-950">
              Have a custom project or immediate question?
            </div>
            <div className="text-xs text-amber-800 mt-0.5">
              Our specialists are ready to discuss your requirements.
            </div>
          </div>
          <a
            href={`tel:${companyData.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#2C4066] transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Call Us: {companyData.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
