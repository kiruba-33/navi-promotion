import { motion } from "motion/react";
import { Megaphone } from "lucide-react";

export default function DigitalMarketingHero() {
  return (
    <section
      className="
        relative
        h-[60vh]
        min-h-[520px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <div className="absolute inset-0">
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
            bg-gradient-to-r
            from-black/80
            via-black/60
            to-black/40
          "
        />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              mb-6
            "
          >
            <Megaphone className="w-4 h-4 text-[#ffb300]" />

            <span
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.25em]
                font-semibold
                text-white
              "
            >
              DIGITAL MARKETING
            </span>
          </div>

          <h2
            className="
               heading-display

    mb-6

    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl

    uppercase
    text-white

    lg:whitespace-nowrap

              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
            "
          >
            DIGITAL THAT DELIVERS
          </h2>

          <p
            className="
              body-large
              max-w-3xl
              mx-auto
              text-white/85
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