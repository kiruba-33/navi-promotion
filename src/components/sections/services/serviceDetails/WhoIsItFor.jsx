import React from "react";
import { Users } from "lucide-react";

export default function WhoIsItFor({
  title = "Who We Help",
  audience = [],
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
            <Users
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
              Clients We Serve
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
            Tailored digital solutions for
            businesses at every stage of
            growth and transformation.
          </p>
        </div>

        {/* MAGAZINE LAYOUT */}

        <div
          className="
            flex
            flex-col
            gap-24
          "
        >
          {audience.map((item, index) => {
            const reverse = index % 2 === 1;

            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  grid
                  lg:grid-cols-2
                  gap-12
                  lg:gap-20
                  items-center
                  ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >
                {/* TITLE SIDE */}

                <div>
                  {/* ICON */}

                  <div
                    className="
                      mb-6
                      inline-flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-orange-50
                        flex
                        items-center
                        justify-center
                        text-orange-500
                      "
                    >
                      {Icon && (
                        <Icon
                          className="
                            w-5
                            h-5
                          "
                        />
                      )}
                    </div>

                    <div
                      className="
                        h-px
                        w-12
                        bg-orange-200
                      "
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      heading-display
                      text-5xl
                      sm:text-6xl
                      lg:text-7xl
                      leading-none
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION SIDE */}

                <div>
                  <div
                    className="
                      w-20
                      h-1
                      bg-orange-500
                      rounded-full
                      mb-8
                    "
                  />

                  <p
                    className="
                      body-large
                      text-slate-600
                      max-w-lg
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}