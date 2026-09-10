import React from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section
      className="
        relative
        h-[76vh]
        min-h-[560px]
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

        {/* Dark Cinematic Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/40
            to-black/20
          "
        />

        {/* Extra Depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-black/10
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-5xl
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
          gap-3

          rounded-full

          border
          border-white/10

          bg-white/5
          backdrop-blur-md

          px-5
          py-2.5
        "
          >
            <BriefcaseBusiness
              className="
                h-4
                w-4
                text-white
              "
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                font-bold
                uppercase
                tracking-[0.2em]
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

              text-xl
              xs:text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl

              uppercase
              text-white
              tracking-tight
              whitespace-nowrap
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
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
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
            "
          >
            Explore our curated portfolio of high-converting campaigns,
            innovative products, and brand transformations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}