import React from "react";
import Link from "next/link";
import {
  Hammer,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Company Info & Trust (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-slate-950 shadow-md">
                <Hammer className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block leading-none">
                  APEX<span className="text-[#F59E0B]">PROS</span>
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase block mt-1">
                  Construction & Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {companyData.shortDescription}
            </p>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>Licensed & Fully Insured</span>
              </div>
              <p className="text-xs text-slate-400">
                General Contractor License #GC-88412 • $2,000,000 Liability
                Coverage • Bonded Tradesmen
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Free Estimates
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 5-Yr Warranty
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 24/7 Dispatch
              </span>
            </div>
          </div>

          {/* Column 2: Services Column A (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#services`}
                    className="text-slate-400 hover:text-[#F59E0B] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Column B (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Specialties
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(6, 12).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#services`}
                    className="text-slate-400 hover:text-[#F59E0B] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Contact & Hours
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {companyData.address.street}, {companyData.address.city},{" "}
                  {companyData.address.state} {companyData.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a
                  href={`tel:${companyData.phoneFormatted}`}
                  className="text-white font-bold hover:text-[#F59E0B] transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="text-slate-300 font-semibold">
                    {companyData.hours.regular}
                  </div>
                  <div className="text-amber-400 font-medium">
                    {companyData.hours.emergency}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-[#F59E0B] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
