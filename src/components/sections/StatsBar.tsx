import React from "react";
import { CheckCircle2, Trophy, Users, Clock } from "lucide-react";
import { companyData } from "@/data/company";

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: CheckCircle2,
      number: `${companyData.stats.projectsCompleted}+`,
      label: "Projects Completed",
      sublabel: "Across residential & commercial properties",
    },
    {
      icon: Trophy,
      number: `${companyData.stats.yearsExperience}+`,
      label: "Years In Business",
      sublabel: "Providing trusted community service",
    },
    {
      icon: Users,
      number: `${companyData.stats.satisfactionRate}%`,
      label: "Client Satisfaction",
      sublabel: "Verified customer satisfaction rating",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Dispatch",
      sublabel: "On-call for urgent leaks & electrical issues",
    },
  ];

  return (
    <section className="bg-[#1B2A4A] text-white py-14 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2c4066_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#F59E0B]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200">
                    {stat.number}
                  </span>
                </div>
                <div className="text-sm font-bold text-amber-400">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 max-w-[200px] mx-auto">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
