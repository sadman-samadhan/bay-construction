"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { EstimateModal } from "@/components/sections/EstimateModal";
import { ServiceItem } from "@/data/services";

interface HomeClientWrapperProps {
  services: ServiceItem[];
}

export const HomeClientWrapper: React.FC<HomeClientWrapperProps> = ({ services }) => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string>(
    services[0]?.title || "Remodeling & Renovation"
  );

  const handleOpenEstimate = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForEstimate(serviceName);
    }
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Bar */}
      <TopBar />
      <Navbar onOpenEstimate={() => handleOpenEstimate()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenEstimate={() => handleOpenEstimate()} />

        {/* 3. Value & Trust Banner */}
        <TrustBanner />

        {/* 4. About Us Snapshot */}
        <AboutSnapshot />

        {/* 5. Services Grid with live CMS data */}
        <ServicesGrid
          initialServices={services}
          onSelectService={(service) => handleOpenEstimate(service)}
        />

        {/* 6. Stats Counter Bar */}
        <StatsBar />

        {/* 7. Featured Projects Portfolio */}
        <ProjectsShowcase />

        {/* 8. Why Choose Us (Comparison) */}
        <WhyChooseUs />

        {/* 9. 3-Step Process */}
        <ProcessSection />

        {/* 10. Client Reviews & Social Proof */}
        <TestimonialsSection />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Free Estimate & Call CTA Banner */}
        <CTABanner onOpenEstimate={() => handleOpenEstimate()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Free Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        initialService={selectedServiceForEstimate}
      />
    </div>
  );
};
