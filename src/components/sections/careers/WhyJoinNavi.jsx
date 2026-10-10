import React from "react";
import { Award, Send, ArrowUpRight } from "lucide-react";
import { careersBenefits } from "../../../data/careersBenefits";

export default function WhyJoinNavi() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            Why Join Navi
          </span>

          <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl heading-primary font-bold">
            Build Your Career
            <span className="block heading-highlight">With Purpose</span>
          </h2>

          <p className="body-large mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We believe great work happens when talented people are given real ownership,
            strong mentorship, and genuine opportunities to continuously grow.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {careersBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  sm:p-8
                  shadow-xs
                  hover:shadow-lg
                  hover:border-brand-orange/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-between
                "
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-brand-orange/10 text-slate-600 group-hover:text-brand-orange flex items-center justify-center transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="heading-card text-xl font-semibold text-slate-900 group-hover:text-brand-orange transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Opportunities CTA Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xs">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
              <Send className="w-3 h-3" />
              Future Opportunities
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Don&apos;t See The Right Role Right Now?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
              We are always excited to connect with talented engineers, designers, digital marketers,
              and storytellers. Send us your portfolio and let us know what you want to build with us.
            </p>

            <a
              href="mailto:careers@navipromotions.com"
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-slate-900
                hover:bg-brand-orange
                text-white
                px-6
                py-3.5
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-wider
                transition-all
                duration-200
                shadow-sm
              "
            >
              <span>Send Your Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
