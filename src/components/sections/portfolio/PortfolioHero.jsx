import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";

export default function PortfolioHero() {
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation();

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-[58vh]
        min-h-[460px]
        max-h-[620px]
        w-full
        overflow-hidden
        border-b
        border-white/10
        bg-[#0F172A]
        flex
        items-center
        justify-center
      "
    >
      {/* Background Image */}
      <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
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

        {/* Subtle Neutral Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/22
          "
        />

        {/* Centered Contrast Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/30
            via-black/45
            to-black/30
          "
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: yText, opacity: opacityHero }}
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/25
              bg-black/35
              backdrop-blur-md
              px-3.5
              py-1.5
            "
          >
            <BriefcaseBusiness
              className="
                h-4
                w-4
                text-[#F97316]
              "
              aria-hidden="true"
            />

            <span
              className="
                text-[12px]
                sm:text-[13px]
                font-medium
                uppercase
                tracking-[0.04em]
                leading-[1.4]
                text-[#F1F5F9]
              "
            >
              OUR WORK
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              heading-display
              mb-5
              uppercase
              text-[#FFFFFF]
            "
          >
            EXCEPTIONAL EXPERIENCES
          </h1>

          {/* Description */}
          <p
            className="
              body-large
              max-w-2xl
              mx-auto
              text-[#F1F5F9]/90
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