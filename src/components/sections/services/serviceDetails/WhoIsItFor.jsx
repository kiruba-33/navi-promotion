import React from "react";
import { Users, CheckCircle2 } from "lucide-react";

export default function WhoIsItFor({
  title = "Who We Help",
  audience = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 shadow-xs mb-5 select-none">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Clients We Serve
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            {title}
          </h2>

          <p className="body-large text-slate-600 max-w-2xl leading-relaxed">
            Tailored digital solutions for businesses at every stage of growth and transformation.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white p-7 shadow-xs hover:border-orange-500/40 transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500 mb-6">
                    {Icon ? (
                      <Icon className="w-6 h-6" />
                    ) : (
                      <Users className="w-6 h-6" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="heading-card text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="body-normal text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-orange-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tailored Strategy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}