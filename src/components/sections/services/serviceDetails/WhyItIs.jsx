import React from "react";
import { TrendingUp } from "lucide-react";

export default function WhyItIs({
  title = "Why It Matters",
  benefits = [],
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
            <TrendingUp
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
              Impact
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
            {title}
          </h2>

          <p
            className="
              body-large
              text-slate-600
              max-w-2xl
            "
          >
            Strategic solutions designed to
            improve visibility, customer trust,
            performance, and long-term business
            growth.
          </p>
        </div>

        {/* BENEFITS */}

        <div
          className="
            max-w-6xl
            mx-auto

            flex
            flex-col
            gap-20
          "
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                grid
                lg:grid-cols-2
                gap-10
                items-center

                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* NUMBER */}

              <div>
                <span
                  className="
                    block

                    text-[5rem]
                    sm:text-[7rem]
                    lg:text-[9rem]

                    font-bold

                    text-orange-100

                    leading-none

                    select-none
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}

              <div>
                <h3
                  className="
                    heading-card

                    text-3xl
                    sm:text-4xl

                    heading-primary

                    mb-5
                  "
                >
                  {benefit.title}
                </h3>

                <div
                  className="
                    w-20
                    h-1

                    bg-orange-500

                    rounded-full

                    mb-6
                  "
                />

                <p
                  className="
                    body-large

                    text-slate-600

                    max-w-xl
                  "
                >
                 {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}