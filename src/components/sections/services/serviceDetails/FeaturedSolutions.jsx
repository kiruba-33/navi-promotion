import React from "react";
import { Layers } from "lucide-react";

export default function FeaturedSolutions({
  solutions = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            <Layers className="w-4 h-4 text-[#F97316]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              Specialized Solutions
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            Featured Solutions
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl leading-[1.65]">
            Powerful systems, strategies, and execution frameworks designed to solve real business challenges and create measurable growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/25 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/45">
                    Engineered Solution
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-[20px] sm:text-[22px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="body-normal text-[#0F172A]/75 text-[14px] sm:text-[15px] leading-[1.6] mb-6 font-normal">
                  {solution.description}
                </p>
              </div>

              {/* Tags with Icons */}
              {solution.tags && solution.tags.length > 0 && (
                <div className="pt-5 border-t border-slate-200/70 flex flex-wrap gap-2">
                  {solution.tags.map((tag, tagIndex) => {
                    const TagIcon = solution.tagIcons?.[tagIndex];

                    return (
                      <div
                        key={tag}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] border border-slate-200/80 text-[#102A56] text-xs font-medium hover:border-[#2563EB]/40 transition-colors"
                      >
                        {TagIcon && (
                          <TagIcon className="w-3.5 h-3.5 text-[#F97316]" />
                        )}
                        <span>{tag}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}