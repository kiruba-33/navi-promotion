import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";

export default function RegulationsHero({
  badge,
  title,
  description,
  image,
}) {
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation();

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-[60vh]
        min-h-[520px]
        overflow-hidden
        bg-[#0F172A]
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}
      <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
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
            bg-black/25
          "
        />

        {/* Centered Contrast Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/30
            via-black/45
            to-black/35
          "
        />
      </motion.div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          style={{ y: yText, opacity: opacityHero }}
          className="
            max-w-3xl
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
            <ShieldCheck
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
              {badge}
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
            OFFICIAL{" "}
            <span className="ml-2">
              REGULATIONS
            </span>
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
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}