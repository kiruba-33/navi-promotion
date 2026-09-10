import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import {
  letsTalkStats,
} from "../../../data/letsTalk";

export default function LetsTalkCTA() {
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
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(247,168,0,0.08)_0%,transparent_70%)]
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
            {/* Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-6 shadow-sm select-none backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Ready To Start</span>
              </div>

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
                Ready To Grow
                <br />
                Your Brand?
              </h2>

              <p
                className="
                  body-large
                  mb-10
                  max-w-xl
                  text-slate-400
                "
              >
                From strategy and branding
                to development and marketing,
                let's create something that
                drives measurable results.
              </p>

              <button
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-brand-orange
                  px-8
                  py-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-900
                  transition-all
                  hover:bg-white
                "
              >
                Schedule Consultation

                <ArrowRight
                  className="
                    h-4
                    w-4
                  "
                 aria-hidden="true" focusable="false" />
              </button>
            </div>

            {/* Stats */}
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-3
              "
            >
              {letsTalkStats.map(
                (stat) => (
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
                        font-black
                        text-white
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}