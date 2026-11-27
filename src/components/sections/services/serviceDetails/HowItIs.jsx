import React from "react";
import { Workflow, ArrowRight } from "lucide-react";

export default function HowItIs({
  steps = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            <Workflow className="w-4 h-4 text-[#F97316]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              Workflow &amp; Process
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            How We Work
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl leading-[1.65]">
            Every project follows a structured process focused on strategy, execution, and measurable results.
          </p>
        </div>

        {/* Steps Grid with Progressive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#F1F5F9]/60 hover:bg-white p-6 sm:p-7 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#2563EB] text-white font-semibold text-sm flex items-center justify-center shadow-xs">
                      {index + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#2563EB]">
                      Phase {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all hidden sm:block" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="heading-card text-[19px] sm:text-[20px] font-semibold leading-[1.3] text-[#0F172A] mb-2.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="body-normal text-[#0F172A]/75 text-[14px] sm:text-[15px] leading-[1.6] font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Accent */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-medium text-[#0F172A]/50 uppercase tracking-wider">
                <span>Stage Milestone</span>
                <span className="text-[#F97316] font-medium">Standardized Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}