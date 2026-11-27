import React from "react";
import { Workflow, CheckCircle2 } from "lucide-react";
import { hiringProcess } from "../../../data/careersBenefits";

export default function HiringProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
            <Workflow className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
            Hiring Process
          </span>

          <h2 className="heading-section mt-4 text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#0F172A] font-semibold">
            A Clear &amp;
            <span className="block">Transparent Journey</span>
          </h2>

          <p className="body-large mt-4 text-[#0F172A]/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our hiring process is designed to be simple, collaborative, and focused on finding
            the right mutual fit for both you and our team.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {hiringProcess.map((item, index) => (
            <div
              key={item.step}
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-200/90
                bg-white
                p-6
                shadow-xs
                hover:border-[#2563EB]/40
                hover:shadow-md
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
                  <span className="text-2xl sm:text-[28px] font-semibold text-[#102A56]/30 group-hover:text-[#2563EB] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#102A56] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md">
                    Step {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-[18px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.55] text-[#0F172A]/75 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center gap-1.5 text-[12px] font-medium text-[#0F172A]/55 group-hover:text-[#F97316] transition-colors">
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
