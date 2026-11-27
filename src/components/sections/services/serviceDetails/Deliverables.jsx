import React from "react";
import {
  PackageCheck,
  MonitorSmartphone,
  Search,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  "Responsive Design": MonitorSmartphone,
  "SEO-Friendly Structure": Search,
  "Performance Optimization": Zap,
  "CMS Integration": Settings,
  "Analytics Setup": BarChart3,
  "Security Enhancements": ShieldCheck,
  "Cross-Browser Support": Globe,
  "Maintenance Ready": LayoutDashboard,
};

export default function Deliverables({
  items = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            <PackageCheck className="w-4 h-4 text-[#F97316]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              Verified Deliverables
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            Everything Included
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl leading-[1.65]">
            Everything delivered as part of your complete service package.
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, index) => {
            const Icon = iconMap[item] || PackageCheck;

            return (
              <div
                key={index}
                className="group relative flex items-center justify-between gap-3.5 rounded-xl border border-slate-200/90 bg-[#F1F5F9]/60 hover:bg-white p-4.5 sm:p-5 shadow-xs hover:border-[#2563EB]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#2563EB]/20 text-[#2563EB] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#0F172A] truncate">
                    {item}
                  </h3>
                </div>

                <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}