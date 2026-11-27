import React from "react";
import { ShieldCheck, Compass, Zap, GraduationCap, Users, Award } from "lucide-react";
import { careersValues } from "../../../data/careersBenefits";

const valueIcons = [Compass, Zap, GraduationCap, Users, Award];

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-[#F1F5F9] px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
            Our Values
          </span>

          <h2 className="heading-section mt-4 text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#0F172A] font-semibold">
            How We Work
            <span className="block">At Navi Promotions</span>
          </h2>

          <p className="body-large mt-4 text-[#0F172A]/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The core principles that guide our decisions, team collaboration, and daily execution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {careersValues.map((value, index) => {
            const Icon = valueIcons[index % valueIcons.length];

            return (
              <div
                key={value.number}
                className="
                  group
                  relative
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
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#F1F5F9] text-[#2563EB] group-hover:bg-[#102A56] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-semibold text-[#102A56]/20 group-hover:text-[#F97316] transition-colors">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="heading-card text-[19px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2.5">
                    {value.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#0F172A]/75 font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
