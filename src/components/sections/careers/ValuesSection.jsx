import React from "react";
import { ShieldCheck } from "lucide-react";
import { careersValues } from "../../../data/careersBenefits";

export default function OurValues() {
return ( <section className="py-12 sm:py-16 lg:py-24 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          font-black

          uppercase
          tracking-[0.25em]

          text-brand-orange
        "
      >
        <ShieldCheck className="w-4 h-4" />
        Our Values
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
        How We Work
        <span className="block heading-highlight">
          At Navi Promotions
        </span>
      </h2>

      <p
        className="
          mt-6

          text-lg

          leading-relaxed

          text-slate-600
        "
      >
        The principles that guide our decisions,
        collaboration, and execution every day.
      </p>

    </div>

    {/* Values List */}
    <div className="max-w-5xl">

      {careersValues.map((value, index) => (
        <div key={value.number}>

          <div
            className="
              flex
              flex-col
              lg:flex-row

              gap-6
              lg:gap-16

              py-10
            "
          >
            {/* Number */}
            <div
              className="
                flex-shrink-0

                text-5xl
                lg:text-6xl

                font-black

                tracking-tight

                text-brand-orange/25
              "
            >
              {value.number}
            </div>

            {/* Content */}
            <div className="flex-1">

              <h3
                className="
                  heading-card

                  text-2xl
                  lg:text-3xl

                  text-slate-900
                "
              >
                {value.title}
              </h3>

              <p
                className="
                  mt-4

                  max-w-2xl

                  text-base
                  lg:text-lg

                  leading-relaxed

                  text-slate-600
                "
              >
                {value.description}
              </p>

            </div>

          </div>

          {index !== careersValues.length - 1 && (
            <div className="h-px bg-slate-200" />
          )}

        </div>
      ))}

    </div>

  </div>
</section>
);
}
