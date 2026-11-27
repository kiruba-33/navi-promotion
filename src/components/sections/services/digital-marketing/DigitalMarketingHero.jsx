import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import { useHeroScrollAnimation } from "../../../../hooks/useHeroScrollAnimation";

export default function DigitalMarketingHero() {
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
      <motion.div style={{ scale: scaleImage }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
          alt="Digital Marketing"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-black/25
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/30
            via-black/48
            to-black/32
          "
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: yText, opacity: opacityHero }}
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-2
              rounded-lg
              border
              border-white/25
              bg-black/35
              backdrop-blur-md
              mb-6
            "
          >
            <Megaphone className="w-4 h-4 text-[#F97316]" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                font-medium
                text-white
              "
            >
              DIGITAL MARKETING
            </span>
          </div>

          <h1
            className="
              heading-display
              mb-5
              text-[clamp(2rem,3.6vw,3.125rem)]
              leading-[1.12]
              font-semibold
              tracking-[-0.025em]
              text-white
            "
          >
            Digital That Delivers
          </h1>

          <p
            className="
              body-large
              max-w-3xl
              mx-auto
              text-[15px]
              sm:text-[17px]
              leading-[1.65]
              text-[#F1F5F9]/90
            "
          >
            Data-driven performance marketing
            solutions designed to generate
            visibility, engagement, qualified
            leads, and measurable business
            growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}