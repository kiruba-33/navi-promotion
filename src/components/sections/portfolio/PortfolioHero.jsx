import React from "react";
import { BriefcaseBusiness } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section
      className="
        relative
        h-[58vh]
        min-h-[460px]
        max-h-[620px]
        w-full
        overflow-hidden
        border-b
        border-slate-800
        flex
        items-center
        justify-center
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1400"
          alt="Portfolio Hero"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark Cinematic Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/50
            to-black/30
          "
        />

        {/* Extra Bottom Depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-black/20
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/15
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
            "
          >
            <BriefcaseBusiness
              className="
                h-4
                w-4
                text-brand-orange
              "
            />

            <span
              className="
                text-[11px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
              "
            >
              OUR WORK
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              heading-display
              mb-6
              text-3xl
              xs:text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              uppercase
              text-white
              tracking-tight
              drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]
            "
          >
            EXCEPTIONAL EXPERIENCES
          </h1>

          {/* Description */}
          <p
            className="
              body-large
              max-w-3xl
              mx-auto
              text-white/90
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]
            "
          >
            Explore our curated portfolio of high-converting campaigns,
            innovative products, and brand transformations.
          </p>
        </div>
      </div>
    </section>
  );
}