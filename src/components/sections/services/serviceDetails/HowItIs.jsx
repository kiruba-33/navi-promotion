import React from "react";
import { Workflow } from "lucide-react";

export default function HowItIs({
  steps = [],
}) {
  return (
    <section
      className="
        py-12
        sm:py-16
        lg:py-20
        bg-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}

        <div
          className="
            max-w-3xl
            mb-12
            sm:mb-14
            lg:mb-16
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-orange-50
              border
              border-orange-200

              mb-6
            "
          >
            <Workflow
              className="
                w-4
                h-4
                text-orange-500
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-500
              "
            >
              Workflow
            </span>
          </div>

          <h2
            className="
              heading-display
              text-4xl
              sm:text-5xl
              lg:text-6xl
              heading-primary
              mb-5
            "
          >
            How We Work
          </h2>

          <p
            className="
              body-large
              text-slate-600
              max-w-2xl
            "
          >
            Every project follows a structured
            process focused on strategy,
            execution, and measurable results.
          </p>
        </div>

        {/* TIMELINE */}

        <div
          className="
            relative
            max-w-5xl
          "
        >
          <div
            className="
              absolute
              left-5
              top-0
              bottom-0

              w-px

              bg-slate-200
            "
          />

          <div
            className="
              flex
              flex-col
              gap-16
            "
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="
                  relative
                  pl-16
                "
              >
                {/* DOT */}

                <div
                  className="
                    absolute
                    left-0
                    top-1

                    w-10
                    h-10

                    rounded-full

                    bg-orange-500

                    flex
                    items-center
                    justify-center

                    text-white
                    text-sm
                    font-bold
                  "
                >
                  {index + 1}
                </div>

                {/* CONTENT */}

                <div>
                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-widest
                      uppercase

                      text-orange-500
                    "
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="
                      heading-card
                      text-2xl
                      sm:text-3xl

                      heading-primary

                      mt-2
                      mb-4
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      body-large
                      text-slate-600
                      max-w-3xl
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}