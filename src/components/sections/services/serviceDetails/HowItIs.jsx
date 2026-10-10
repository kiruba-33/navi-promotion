import React from "react";
import { Workflow, ArrowRight } from "lucide-react";

export default function HowItIs({
  steps = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 shadow-xs mb-5 select-none">
            <Workflow className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Workflow & Process
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            How We Work
          </h2>

          <p className="body-large text-slate-600 max-w-2xl leading-relaxed">
            Every project follows a structured process focused on strategy, execution, and measurable results.
          </p>
        </div>

        {/* Steps Grid with Progressive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white p-7 sm:p-8 shadow-xs hover:border-orange-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Background Step Watermark */}
              <span className="absolute -top-4 -right-2 text-7xl font-bold text-slate-900/5 select-none pointer-events-none group-hover:text-orange-500/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-sm shadow-orange-500/30">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      Phase {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all hidden sm:block" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="heading-card text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="body-normal text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Accent */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                <span>Stage Milestone</span>
                <span className="text-orange-600 font-bold">Standardized Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}