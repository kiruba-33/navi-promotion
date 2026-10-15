import React from "react";
import { Workflow, CheckCircle2 } from "lucide-react";
import { hiringProcess } from "../../../data/careersBenefits";

export default function HiringProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            <Workflow className="w-3.5 h-3.5" aria-hidden="true" />
            Hiring Process
          </span>

          <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl heading-primary font-bold">
            A Clear &
            <span className="block heading-highlight">Transparent Journey</span>
          </h2>

          <p className="body-large mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Our hiring process is designed to be simple, collaborative, and focused on finding
            the right mutual fit for both you and our team.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6">
          {hiringProcess.map((item, index) => (
            <div
              key={item.step}
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                p-6
                shadow-xs
                hover:border-brand-orange/30
                transition-all
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-brand-orange/40 group-hover:text-brand-orange transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    Step {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-lg font-semibold text-slate-900 group-hover:text-brand-orange transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-brand-orange transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Stage {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
