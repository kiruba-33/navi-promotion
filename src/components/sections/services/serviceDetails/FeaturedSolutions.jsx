import React from "react";
import { Sparkles } from "lucide-react";

export default function FeaturedSolutions({
  solutions = [],
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

<div className="mb-12 sm:mb-14 lg:mb-16 max-w-3xl">

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
      border-orange-100
      text-orange-500
      text-xs
      font-black
      uppercase
      tracking-[0.2em]
    "
  >
    <Sparkles className="w-4 h-4" />
    <span>Solutions</span>
  </div>

  <h2
    className="
      heading-display
      text-4xl
      sm:text-5xl
      heading-primary
      mt-6
    "
  >
    Featured Solutions
  </h2>

  <p
    className="
      mt-6
      text-lg
      text-slate-600
      leading-relaxed
    "
  >
    Powerful systems, strategies, and execution
    frameworks designed to solve real business
    challenges and create measurable growth.
  </p>

</div>

        {/* Solutions */}

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="
                border-b
                border-slate-200
                pb-12
              "
            >
              {/* Number */}

              <span
                className="
                  inline-block
                  text-sm
                  font-black
                  tracking-[0.2em]
                  text-orange-500
                  mb-5
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  heading-primary
                  mb-4
                "
              >
                {solution.title}
              </h3>

              {/* Description */}

              <p
                className="
                  text-lg
                  leading-relaxed
                  text-slate-600
                  max-w-4xl
                  mb-8
                "
              >
                {solution.description}
              </p>

              {/* Tags */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {solution.tags?.map(
                  (tag, tagIndex) => {
                    const TagIcon =
                      solution.tagIcons?.[
                        tagIndex
                      ];

                    return (
                      <div
                        key={tag}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-full
                          bg-slate-100
                          text-slate-700
                          text-sm
                          font-medium
                        "
                      >
                        {TagIcon && (
                          <TagIcon
                            className="
                              w-4
                              h-4
                              text-orange-500
                            "
                          />
                        )}

                        <span>{tag}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}