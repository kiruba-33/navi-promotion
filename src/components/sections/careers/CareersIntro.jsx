import React from "react";
import { Award } from "lucide-react";
import { careersBenefits } from "../../../data/careersBenefits";

export default function WhyJoinNavi() {
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-brand-orange/20
              bg-brand-orange/5
              px-4
              py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-brand-orange
            "
          >
            <Award className="w-4 h-4"  aria-hidden="true" focusable="false" />
            Why Join Navi
          </span>

          <h2
            className="
              heading-section
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              heading-primary
            "
          >
            Build Your Career
            <span className="block heading-highlight">
              With Purpose
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              leading-relaxed
              text-slate-600
              font-sans
            "
          >
            We believe great work happens when talented
            people are given ownership, support, and
            opportunities to continuously grow.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {careersBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-[2rem]
                  font-sans
                  border
                  border-slate-200
                  bg-white
                  p-6
                  sm:p-8
                "
              >
  <div
    className="
      flex
      items-center
      justify-center

      w-14
      h-14

      rounded-2xl

      bg-slate-100

      text-slate-500

      transition-all
      duration-300

      group-hover:bg-brand-orange/10
      group-hover:text-brand-orange
    "
  >
    <Icon className="w-6 h-6" />
  </div>

  <h3
    className="
      mt-6

      text-xl

      font-semibold

      text-slate-900
    "
  >
    {item.title}
  </h3>

  <p
    className="
      mt-4

      text-sm

      leading-relaxed

      text-slate-600
    "
  >
    {item.description}
  </p>
</div>
        );
      })}
    </div>

  </div>
</section>
);
}
