import React from "react";
import { Sparkles } from "lucide-react";

export default function FeaturedSolutions({
  solutions = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-5 select-none">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Specialized Solutions
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            Featured Solutions
          </h2>

          <p className="body-large text-slate-600 max-w-2xl leading-relaxed">
            Powerful systems, strategies, and execution frameworks designed to solve real business challenges and create measurable growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:border-orange-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Engineered Solution
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-card text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="body-normal text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {solution.description}
                </p>
              </div>

              {/* Tags with Icons */}
              {solution.tags && solution.tags.length > 0 && (
                <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-2.5">
                  {solution.tags.map((tag, tagIndex) => {
                    const TagIcon = solution.tagIcons?.[tagIndex];

                    return (
                      <div
                        key={tag}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold hover:border-orange-300 transition-colors"
                      >
                        {TagIcon && (
                          <TagIcon className="w-3.5 h-3.5 text-orange-500" />
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