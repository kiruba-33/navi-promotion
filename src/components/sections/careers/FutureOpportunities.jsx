import React from "react";
import { Send } from "lucide-react";

export default function FutureOpportunities() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            rounded-[2rem]
            lg:rounded-[3rem]

            border
            border-slate-200

            bg-white

            p-6
            sm:p-10
            md:p-16
            lg:p-20
          "
        >
          {/* Tag */}
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-brand-orange/20

              bg-brand-orange/5

              px-4
              py-2

              text-[11px]
              font-black

              uppercase
              tracking-[0.25em]

              text-brand-orange
            "
          >
            <Send className="w-4 h-4" />
            Future Opportunities
          </span>

          {/* Heading */}
          <h2
            className="
              heading-section

              mt-8

              text-4xl
              sm:text-5xl
              lg:text-6xl

              heading-primary
            "
          >
            Don't See The
            <span className="block heading-highlight">
              Right Role?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-6

              max-w-3xl

              text-lg

              leading-relaxed

              text-slate-600
            "
          >
            We're always interested in meeting talented
            marketers, designers, developers, strategists,
            and creators who share our passion for growth,
            innovation, and execution.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="mailto:careers@navipromotions.com"
              className="
                inline-flex
                items-center
                justify-center

                rounded-2xl

                bg-slate-900

                px-8
                py-4

                text-sm
                font-bold

                text-white

                transition-colors
                duration-300

                hover:bg-brand-orange
              "
            >
              Send Your Portfolio
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}