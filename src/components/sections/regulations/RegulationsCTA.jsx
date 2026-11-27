import React from "react";
import { ArrowRight } from "lucide-react";

export default function RegulationsCTA({
  stats,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#102A56]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-white/15
            bg-white/5
            p-8
            backdrop-blur-sm
            md:p-12
            lg:p-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <h2
                className="
                  heading-section
                  mb-5
                  text-[#FFFFFF]
                "
              >
                Can't Find A Specific
                <br />
                Protocol?
              </h2>

              <p
                className="
                  body-large
                  mb-8
                  text-[#F1F5F9]/85
                "
              >
                Our legal and administrative
                teams are available for direct
                clarification on any corporate
                notice, regulation or policy.
              </p>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-[10px]
                  bg-[#F97316]
                  px-6
                  py-3.5
                  text-[14px]
                  sm:text-[15px]
                  font-medium
                  text-[#FFFFFF]
                  transition-colors
                  hover:bg-[#2563EB]
                  cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]
                "
              >
                Contact Helpdesk

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-[#FFFFFF]
                  "
                 aria-hidden="true" focusable="false" />
              </button>
            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-4
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/5
                    p-6
                    sm:p-7
                    text-center
                  "
                >
                  <p
                    className="
                      mb-1.5
                      text-[28px]
                      sm:text-[34px]
                      font-semibold
                      text-[#FFFFFF]
                      tabular-nums
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}