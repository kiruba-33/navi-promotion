import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceIntro({
  icon,
  label = "Service",
  title,
  description,
}) {
  return (
    <section
      className="
        relative
        pt-32
        pb-12
        sm:pt-36
        sm:pb-14
        lg:pt-40
        lg:pb-16
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
        <div
          className="
            max-w-5xl
          "
        >
          {/* LABEL */}

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
            {icon && (
              <span
                className="
                  flex
                  items-center
                  justify-center
                  text-brand-orange
                "
              >
                {icon}
              </span>
            )}

            <span
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-brand-orange
              "
            >
              {label}
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              heading-display

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              heading-primary
              mt-6

              
              sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15]

              mb-6
            "
          >
            {title}
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-3xl

              text-base
              sm:text-lg
              lg:text-xl

              leading-relaxed

              text-slate-600

              mb-10
            "
          >
            {description}
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
<Link
  to="/become-client"
  className="
    h-14
    px-8

    rounded-full

    bg-slate-900
    text-white

    font-semibold

    inline-flex
    items-center
    justify-center
    gap-2

    transition-all
    duration-300

    lg:hover:bg-[#f97316]
    lg:hover:shadow-lg
    lg:hover:shadow-orange-200
  ">
  Become Client

  <ArrowRight className="w-4 h-4"  aria-hidden="true" focusable="false" />
</Link>

<Link
  to="/contact"
  className="
    h-14
    px-8

    rounded-full

    border-2
    border-slate-300

    heading-primary

    font-semibold

    inline-flex
    items-center
    justify-center

    transition-all
    duration-300

    lg:hover:border-[#f97316]
    lg:hover:text-[#f97316]
    lg:hover:bg-[#fff7ed]
  ">
  Let's Talk
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}