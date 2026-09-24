"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Hammer, Phone, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData, ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { getServices } from "@/sanity/client";

interface NavbarProps {
  onOpenEstimate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [services, setServices] = useState<ServiceItem[]>(servicesData);

  useEffect(() => {
    let isMounted = true;
    getServices().then((data) => {
      if (isMounted && data && data.length > 0) {
        setServices(data);
      }
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1B2A4A] shadow-xl py-3 border-b border-slate-700/60"
          : "bg-[#1B2A4A]/95 backdrop-blur-md py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
              <Hammer className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white block leading-none">
                APEX<span className="text-[#F59E0B]">PROS</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wider uppercase block mt-1">
                Construction & Repair
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors py-2"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#F59E0B]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown */}
              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`#services`}
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          {service.shortDescription}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-800 text-center">
                    <Link
                      href="#services"
                      onClick={() => setServicesDropdown(false)}
                      className="text-xs font-bold text-[#F59E0B] hover:underline"
                    >
                      View All 12 Specialized Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#about"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold text-white/90 hover:text-[#F59E0B] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyData.phoneFormatted}`}
              className="hidden xl:flex items-center gap-2 text-white font-bold text-sm bg-white/10 hover:bg-white/15 px-3.5 py-2 rounded-lg border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>{companyData.phone}</span>
            </a>

            <Button
              variant="accent"
              size="md"
              onClick={onOpenEstimate}
              className="flex items-center gap-2 shadow-amber-500/25 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Estimate</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="accent"
              size="sm"
              onClick={onOpenEstimate}
              className="text-xs px-3"
            >
              Estimate
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F59E0B]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 border-t border-slate-700/80 space-y-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-[#F59E0B] hover:bg-slate-800 flex items-center justify-between"
              >
                <span>Services ({services.length} Available)</span>
                <span className="text-xs bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-0.5 rounded-full">
                  All
                </span>
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                About Us
              </Link>
              <Link
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                Recent Projects
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                Client Reviews
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-slate-800"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={`tel:${companyData.phoneFormatted}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-800 text-white font-bold text-sm border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call {companyData.phone}</span>
              </a>
              <Button
                variant="accent"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEstimate) onOpenEstimate();
                }}
                className="w-full"
              >
                Request Free Estimate
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
