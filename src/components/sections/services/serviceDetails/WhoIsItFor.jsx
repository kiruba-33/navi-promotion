import React from "react";
import { Users, CheckCircle2 } from "lucide-react";

export default function WhoIsItFor({
  title = "Who We Help",
  audience = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              Clients We Serve
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            {title}
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl leading-[1.65]">
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
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#F1F5F9]/60 hover:bg-white p-6 sm:p-7 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 border border-[#F97316]/25 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors mb-5">
                    {Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : (
                      <Users className="w-5 h-5" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="heading-card text-[19px] font-semibold leading-[1.3] text-[#0F172A] mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="body-normal text-[#0F172A]/75 text-[14px] leading-[1.6] font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#F97316]">
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