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
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-5 select-none">
            {icon ? (
              <span className="flex items-center justify-center text-orange-500">
                {icon}
              </span>
            ) : (
              <Layers3 className="w-4 h-4 text-orange-500" />
            )}

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              {label}
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            {title}
          </h2>

          <p className="body-large text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-orange-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Index Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 font-bold text-sm tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Core Capability
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="body-normal text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Extended Details Box */}
              {item.details && (
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
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