import React from "react";
import { ShieldCheck, Compass, Zap, Sparkles, Users, Award } from "lucide-react";
import { careersValues } from "../../../data/careersBenefits";

const valueIcons = [Compass, Zap, Sparkles, Users, Award];

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Our Values
          </span>

          <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl heading-primary font-bold">
            How We Work
            <span className="block heading-highlight">At Navi Promotions</span>
          </h2>

          <p className="body-large mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            The core principles that guide our decisions, team collaboration, and daily execution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {careersValues.map((value, index) => {
            const Icon = valueIcons[index % valueIcons.length];

            return (
              <div
                key={value.number}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  sm:p-8
                  shadow-xs
                  hover:shadow-lg
                  hover:border-brand-orange/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-between
                "
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-bold text-slate-200 group-hover:text-brand-orange/30 transition-colors">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="heading-card text-xl font-semibold text-slate-900 group-hover:text-brand-orange transition-colors mb-3">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 font-normal">
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
