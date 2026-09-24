"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Phone,
  X,
  Shield,
  Layers,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { getServices } from "@/sanity/client";

interface ServicesGridProps {
  initialServices?: ServiceItem[];
  onSelectService?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  initialServices,
  onSelectService,
}) => {
  const [services, setServices] = useState<ServiceItem[]>(
    initialServices || servicesData
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Fetch live CMS data on load and on focus
  React.useEffect(() => {
    let isMounted = true;
    getServices().then((data) => {
      if (isMounted && data && data.length > 0) {
        setServices(data);
      }
    });

    const handleFocus = () => {
      getServices().then((data) => {
        if (isMounted && data && data.length > 0) {
          setServices(data);
        }
      });
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      isMounted = false;
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(services.map((s) => s.category))),
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalService(null);
      }
    };
    if (activeModalService) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalService]);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Specialized Services For Every Corner of Your Property
          </h2>

          <p className="text-base text-slate-600">
            Whether you need a complete architectural kitchen remodel or
            prompt emergency electrical and plumbing repairs, our certified
            craftsmen deliver excellence on every project.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#1B2A4A] text-white shadow-md shadow-[#1B2A4A]/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid (12 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with 16:9 Aspect Ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Badge if present */}
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-[#F59E0B] text-slate-950 text-[11px] font-black uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
                    {service.badge}
                  </span>
                )}

                {/* Category Pill */}
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10">
                  {service.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1B2A4A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Sub-services pills */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Specialties:
                  </span>
                  <ul className="space-y-1.5">
                    {service.subServices.slice(0, 3).map((sub, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-[#1B2A4A] hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Button
                    variant="accent"
                    size="sm"
                    onClick={() => {
                      if (onSelectService) onSelectService(service.title);
                    }}
                    className="text-xs shadow-sm font-bold"
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Deep Dive */}
        {activeModalService && (
          <div
            onClick={() => setActiveModalService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <Image
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] block mb-1">
                    {activeModalService.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Service Scope & Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalService.fullDescription}
                  </p>
                </div>

                {/* Sub Services */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Sub-Services Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalService.subServices.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Why Choose Our Specialists
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalService.keyBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200/60 text-xs font-medium text-amber-950"
                      >
                        <Shield className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="md"
                    href="tel:+15557892470"
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#F59E0B]" />
                    <span>Call To Schedule</span>
                  </Button>

                  <Button
                    variant="accent"
                    size="md"
                    onClick={() => {
                      const title = activeModalService.title;
                      setActiveModalService(null);
                      if (onSelectService) onSelectService(title);
                    }}
                    className="w-full sm:w-auto shadow-md"
                  >
                    Request Free Estimate For This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
