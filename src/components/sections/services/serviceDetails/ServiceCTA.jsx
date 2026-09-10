import React from "react";
import {
  ArrowRight,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCTA({
  title = "Ready To Grow Your Business?",
  description = "Let's create a strategy and solution tailored to your business goals.",
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div
          className="
            border
            border-slate-200
            rounded-[40px]
            p-10
            md:p-16
            lg:p-20
          "
        >
          {/* Tag */}

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
            "
          >
            <Rocket className="w-4 h-4 text-orange-500" />

            <span
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-orange-500
              "
            >
              Let's Build Together
            </span>
          </div>

          {/* Content */}

          <div className="mt-10 max-w-4xl">

            <h2
              className="
                heading-display
                heading-primary
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-tight
                sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-8
                text-lg
                sm:text-xl
                text-slate-600
                leading-relaxed
                max-w-3xl
              "
            >
              {description}
            </p>

          </div>

          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-12
            "
          >
            <Link
              to="/become-client"
              className="
                h-14
                px-8
                rounded-full
                bg-orange-500
                text-white
                font-semibold
                inline-flex
                items-center
                justify-center
                gap-2
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
                border
                border-slate-300
                text-slate-900
                font-semibold
                inline-flex
                items-center
                justify-center
              ">
              Let's Talk
            </Link>
          </div>

          {/* Trust Indicators */}

          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-12
              pt-10
              border-t
              border-slate-200
            "
          >
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
              Strategy First
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
              Mobile Responsive
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
              SEO Ready
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}