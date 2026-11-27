import React from "react";
import { Award, Send, ArrowUpRight } from "lucide-react";
import { careersBenefits } from "../../../data/careersBenefits";

export default function WhyJoinNavi() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-white px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
            <Award className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
            Why Join Navi
          </span>

          <h2 className="heading-section mt-4 text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#0F172A] font-semibold">
            Build Your Career
            <span className="block">With Purpose</span>
          </h2>

          <p className="body-large mt-4 text-[#0F172A]/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            We believe great work happens when talented people are given real ownership,
            strong mentorship, and genuine opportunities to continuously grow.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 lg:mb-14">
          {careersBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  sm:p-7
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
                  <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] group-hover:bg-[#102A56] text-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="heading-card text-[19px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#0F172A]/75 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Opportunities CTA Card */}
        <div className="rounded-2xl border border-[#102A56]/15 bg-[#102A56] p-8 sm:p-10 lg:p-14 relative overflow-hidden shadow-md">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white mb-4">
              <Send className="w-3 h-3 text-[#F97316]" />
              Future Opportunities
            </span>

            <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.02em] font-semibold text-white mb-4">
              Don&apos;t See The Right Role Right Now?
            </h3>

            <p className="text-[15px] sm:text-[16px] text-[#F1F5F9]/85 leading-[1.6] mb-8 max-w-2xl">
              We are always excited to connect with talented engineers, designers, digital marketers,
              and storytellers. Send us your portfolio and let us know what you want to build with us.
            </p>

            <a
              href="mailto:careers@navipromotions.com"
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-[10px]
                bg-[#F97316]
                hover:bg-[#2563EB]
                text-white
                px-6
                py-3
                text-[14px]
                sm:text-[15px]
                font-medium
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
