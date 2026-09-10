import React from "react";
import { Workflow } from "lucide-react";
import { hiringProcess } from "../../../data/careersBenefits";

export default function HiringProcess() {
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
        <Workflow className="w-4 h-4" />
        Hiring Process
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
        A Clear &
        <span className="block heading-highlight">
          Transparent Process
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
        Our hiring process is designed to be simple,
        transparent, and focused on finding the right
        fit for both the candidate and our team.
      </p>

    </div>

    {/* Process List */}
    <div className="max-w-5xl">

      {hiringProcess.map((item, index) => (
        <div key={item.step}>

          <div
            className="
              flex
              flex-col
              md:flex-row

              gap-6
              md:gap-12

              py-10
            "
          >
            {/* Number */}
            <div
              className="
                flex-shrink-0

                text-5xl
                md:text-6xl

                font-black

                tracking-tight

                text-brand-orange/25
              "
            >
              {item.step}
            </div>

            {/* Content */}
            <div className="flex-1">

              <h3
                className="
                  heading-card

                  text-2xl
                  md:text-3xl

                  text-slate-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4

                  max-w-2xl

                  text-base
                  md:text-lg

                  leading-relaxed

                  text-slate-600
                "
              >
                {item.description}
              </p>

            </div>

          </div>

          {index !== hiringProcess.length - 1 && (
            <div className="h-px bg-slate-200" />
          )}

        </div>
      ))}

    </div>

  </div>
</section>
);
}
