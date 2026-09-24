"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: initialService || "Remodeling & Renovation",
    timeline: "This Week",
    details: "",
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetAndClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={resetAndClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Estimate Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. One of our project leads will review your request for{" "}
              <span className="font-bold text-slate-800">{formData.service}</span> and reach out to you within a few business hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              Need immediate emergency help? Call directly at{" "}
              <a
                href={`tel:${companyData.phoneFormatted}`}
                className="font-bold text-[#1B2A4A] underline"
              >
                {companyData.phone}
              </a>
            </div>
            <div className="pt-2">
              <Button variant="primary" size="md" onClick={resetAndClose}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-amber-50 px-2.5 py-1 rounded-md mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free, No-Obligation Consultation</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Request Your Estimate
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us about your home improvement or repair project.
              </p>
            </div>

            {/* Service dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Select Service Type *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
                />
              </div>
            </div>

            {/* Email & Zip Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Zip Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 43215"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Desired Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              >
                <option value="Urgent / Emergency">
                  Urgent / Emergency (Within 24 Hours)
                </option>
                <option value="This Week">This Week</option>
                <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                <option value="Planning / Future Project">
                  Planning Ahead / Getting Estimates
                </option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Details & Scope
              </label>
              <textarea
                rows={3}
                placeholder="Describe what needs repair, remodel or installation..."
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]"
              />
            </div>

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full text-base font-bold shadow-md"
            >
              Submit Estimate Request
            </Button>

            <p className="text-[11px] text-center text-slate-400">
              🔒 We respect your privacy. Your information is never sold or shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
