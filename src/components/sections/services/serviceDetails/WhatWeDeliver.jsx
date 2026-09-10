import React from "react";

export default function WhatWeDeliver({
  icon,
  label = "Solutions",
  title = "What We Deliver",
  description = "Every solution is strategically planned, designed, and delivered to help businesses build stronger digital experiences, improve customer engagement, and achieve measurable growth.",
  items = [],
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
        {/* Header */}

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
            {icon && (
              <span
                className="
                  flex
                  items-center
                  justify-center
                  text-orange-500
                "
              >
                {icon}
              </span>
            )}

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-500
              "
            >
              {label}
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
            {description}
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
              "
            >
              {/* Number */}

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-orange-50
                  flex
                  items-center
                  justify-center
                  text-orange-500
                  font-bold
                  text-lg
                  mb-6
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}

              <h3
                className="
                  heading-card
                  text-2xl
                  heading-primary
                  mb-4
                "
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
                  body-normal
                  text-slate-600
                  mb-6
                "
              >
                {item.description}
              </p>

              {/* Details */}

              {item.details && (
                <div
                  className="
                    pt-6
                    border-t
                    border-slate-100
                  "
                >
                  <p
                    className="
                      text-sm
                      text-slate-500
                      leading-relaxed
                    "
                  >
                    {item.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}