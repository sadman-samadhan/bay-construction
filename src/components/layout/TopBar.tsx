import React from "react";
import { Phone, Mail, Clock, ShieldAlert } from "lucide-react";
import { companyData } from "@/data/company";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left side: Operating Hours & Emergency notice */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{companyData.hours.regular}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-400 font-medium bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/50">
            <ShieldAlert className="w-3 h-3 text-[#F59E0B]" />
            <span>{companyData.hours.emergency}</span>
          </div>
        </div>

        {/* Right side: Direct Phone & Email */}
        <div className="flex items-center gap-5 ml-auto">
          <a
            href={`mailto:${companyData.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{companyData.email}</span>
          </a>
          <a
            href={`tel:${companyData.phoneFormatted}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#F59E0B] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Call 24/7: {companyData.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
