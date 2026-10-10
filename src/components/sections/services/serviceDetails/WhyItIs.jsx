import React from "react";
import { TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function WhyItIs({
  title = "Why It Matters",
  benefits = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-5 select-none">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Business Impact
              </span>
            </div>

            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
              {title}
            </h2>

            <p className="body-large text-slate-600 leading-relaxed mb-8">
              Strategic solutions designed to improve visibility, customer trust, performance, and long-term business growth.
            </p>

            {/* Value Callout Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Proven Methodology</h4>
                  <p className="text-xs text-slate-500">Validated across 100+ projects</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
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
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-orange-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Index & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-bold tracking-widest text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-orange-50 flex items-center justify-center text-slate-400 group-hover:text-orange-500 transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Benefit Title */}
                    <h3 className="heading-card text-lg sm:text-xl font-semibold text-slate-900 mb-2.5">
                      {benefit.title}
                    </h3>

                    {/* Benefit Description */}
                    <p className="body-normal text-slate-600 text-sm leading-relaxed font-normal">
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