"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, MapPin, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  tag: string;
}

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: "p1",
      title: "Luxury Chef's Kitchen & Island Remodel",
      category: "Renovations",
      location: "Oakwood Hills",
      duration: "3 Weeks",
      image: "/images/services/remodeling.jpg",
      description:
        "Complete demolition and rebuild with custom navy cabinetry, waterfall Calacatta marble, and brass designer hardware.",
      tag: "Full Remodel",
    },
    {
      id: "p2",
      title: "Hardwood Floor Restoration & Laying",
      category: "Interior",
      location: "Westside Heights",
      duration: "4 Days",
      image: "/images/services/flooring.jpg",
      description:
        "Precision installation of 7-inch wide plank European white oak flooring with acoustic underlayment and custom transitions.",
      tag: "Flooring",
    },
    {
      id: "p3",
      title: "Complete Architectural Shingle Replacement",
      category: "Exterior",
      location: "North Suburbs",
      duration: "2 Days",
      image: "/images/services/roofing.jpg",
      description:
        "Tear-off and replacement with 50-year architectural shingles, leak barrier underlayment, and seamless 6-inch aluminum gutters.",
      tag: "Roofing",
    },
    {
      id: "p4",
      title: "Custom Built-in Study & Bookshelves",
      category: "Interior",
      location: "Riverfront Park",
      duration: "1 Week",
      image: "/images/services/carpentry.jpg",
      description:
        "Floor-to-ceiling solid oak cabinetry with integrated LED lighting and concealed cable routing for a home office.",
      tag: "Carpentry",
    },
    {
      id: "p5",
      title: "Front Yard Estate Landscaping Transformation",
      category: "Exterior",
      location: "Highland Estates",
      duration: "5 Days",
      image: "/images/services/landscaping.jpg",
      description:
        "Natural stone paver walkway, manicured lawn sodding, and tiered mulch flowerbeds with seasonal perennial accents.",
      tag: "Landscaping",
    },
    {
      id: "p6",
      title: "High-Efficiency HVAC System Replacement",
      category: "Mechanical",
      location: "Pinecrest Valley",
      duration: "1 Day",
      image: "/images/services/hvac.jpg",
      description:
        "Installation of ultra-quiet 18 SEER central heat pump system and smart multi-zone WiFi thermostats.",
      tag: "Climate",
    },
  ];

  const filters = ["All", "Renovations", "Interior", "Exterior", "Mechanical"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-[#F59E0B] border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Recent Master Projects & Transformations
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Browse a curated selection of our residential craftsmanship. Every
              project is delivered with precision detailing and guaranteed
              warranties.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeFilter === filter
                    ? "bg-[#F59E0B] text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-amber-500/40 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#F59E0B] text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium">
                    ✓ Completed & Inspected
                  </span>
                  {/* <span className="text-[#F59E0B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Scope <ArrowRight className="w-3.5 h-3.5" />
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
