import React from "react";
import { Layers3, CheckCircle2 } from "lucide-react";

export default function WhatWeDeliver({
  icon,
  label = "Solutions",
  title = "What We Deliver",
  description = "Every solution is strategically planned, designed, and delivered to help businesses build stronger digital experiences, improve customer engagement, and achieve measurable growth.",
  items = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            {icon ? (
              <span className="flex items-center justify-center text-[#F97316]">
                {icon}
              </span>
            ) : (
              <Layers3 className="w-4 h-4 text-[#F97316]" />
            )}

            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              {label}
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            {title}
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl leading-[1.65]">
            {description}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Index Pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/25 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors font-semibold text-sm tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/45">
                    Core Capability
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-[19px] sm:text-[20px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="body-normal text-[#0F172A]/75 text-[14px] sm:text-[15px] leading-[1.6] mb-5 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Extended Details Box */}
              {item.details && (
                <div className="pt-4 border-t border-slate-200/70 mt-2">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F1F5F9] border border-slate-200/60 text-xs text-[#0F172A]/80 leading-relaxed font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>{item.details}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}