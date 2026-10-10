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
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 shadow-xs mb-5 select-none">
            <PackageCheck className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Verified Deliverables
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            Everything Included
          </h2>

          <p className="body-large text-slate-600 max-w-2xl leading-relaxed">
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
                className="group relative flex items-center justify-between gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white p-4.5 sm:p-5 shadow-xs hover:border-orange-500/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                    {item}
                  </h3>
                </div>

                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}