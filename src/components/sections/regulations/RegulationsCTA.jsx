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
        bg-slate-900
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(247,168,0,0.08)_0%,transparent_70%)]
        "
      />

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
            rounded-[3rem]
            border
            border-white/10
            bg-white/5
            p-10
            backdrop-blur-sm
            md:p-14
            lg:p-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-12
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <h2
                className="
                  heading-section
                  mb-8
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-white
                "
              >
                Can't Find A Specific
                <br />
                Protocol?
              </h2>

              <p
                className="
                  body-large
                  mb-10
                  text-slate-400
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
                  gap-3
                  rounded-2xl
                  bg-orange-500
                  px-8
                  py-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-900
                  transition-all
                  hover:bg-white
                "
              >
                Contact Helpdesk

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-orange-500
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
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    text-center
                  "
                >
                  <p
                    className="
                      mb-2
                      text-4xl
                      font-bold
                      text-white
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