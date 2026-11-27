import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";

export default function LetsTalkHero({
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
        overflow-hidden
        bg-[#0F172A]
        h-[60vh]
        sm:h-[55vh]
        lg:h-[58vh]
        xl:h-[60vh]
        min-h-[460px]
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
        <div className="absolute inset-0 bg-black/20" />

        {/* Balanced Contrast Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/40
            to-black/30
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
          max-w-4xl
          px-5
          sm:px-6
          lg:px-8
          text-center
        "
      >
        <motion.div style={{ y: yText, opacity: opacityHero }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/25 bg-black/35 text-[#F1F5F9] text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.04em] mb-5 shadow-xs select-none backdrop-blur-md">
            <MessageCircle className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
            <span>{badge}</span>
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
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              body-large
              mx-auto
              max-w-2xl
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