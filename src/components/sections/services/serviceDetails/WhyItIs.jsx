import React from "react";
import { TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function WhyItIs({
  title = "Why It Matters",
  benefits = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
              <TrendingUp className="w-4 h-4 text-[#F97316]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
                Business Impact
              </span>
            </div>

            <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
              {title}
            </h2>

            <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] leading-[1.65] mb-8">
              Strategic solutions designed to improve visibility, customer trust, performance, and long-term business growth.
            </p>

            {/* Value Callout Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#2563EB]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">Proven Methodology</h4>
                  <p className="text-xs text-[#0F172A]/60">Validated across 100+ projects</p>
                </div>
              </div>
              <p className="text-xs text-[#0F172A]/75 leading-relaxed pt-3 border-t border-slate-200/70">
                We combine analytical rigor with creative execution to deliver solutions that continuously perform.
              </p>
            </div>
          </div>

          {/* Right Benefits Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Index & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold tracking-widest text-[#2563EB] bg-[#F1F5F9] px-2.5 py-1 rounded-lg border border-[#2563EB]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] group-hover:bg-[#102A56] flex items-center justify-center text-[#2563EB] group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Benefit Title */}
                    <h3 className="heading-card text-[18px] sm:text-[19px] font-semibold leading-[1.3] text-[#0F172A] mb-2">
                      {benefit.title}
                    </h3>

                    {/* Benefit Description */}
                    <p className="body-normal text-[#0F172A]/75 text-[14px] leading-[1.6] font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}