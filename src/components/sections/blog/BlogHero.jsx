import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export default function BlogHero({
  categories = [],
  activeCategory,
  setActiveCategory,
  containerRef,
  yText,
  opacityHero,
  scaleImage,
}) {
  return (
    <section
  ref={containerRef}
  className="
    relative
    min-h-[70vh]
    sm:min-h-[75vh]
    flex
    flex-col
    justify-center
    overflow-hidden
    pt-32
    pb-20
  "
>
    {/* BACKGROUND */}
<motion.div
  style={{ scale: scaleImage }}
  className="absolute inset-0 z-0"
>
  <img
    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1400"
    alt="Blog Background"
    fetchPriority="high"
    decoding="async"
    className="w-full h-full object-cover"
  />

  {/* Subtle Neutral Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-black/18
    "
  />

  {/* Center Readability Gradient */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/25
      via-black/38
      to-black/28
    "
  />
</motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">

        <motion.div
          style={{
            y: yText,
            opacity: opacityHero,
          }}
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >

          {/* TAG */}
          <div
  className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-lg
    bg-black/35
    backdrop-blur-md
    border
    border-white/25
    text-white
    text-[12px]
    font-medium
    uppercase
    tracking-[0.14em]
    mb-6
  "
>
  <Newspaper className="w-4 h-4 text-[#F97316]" />
  Navi Insights
</div>

          {/* HEADING */}
         <h1
  className="
    heading-display
    text-[clamp(2rem,3.6vw,3.125rem)]
    leading-[1.12]
    font-semibold
    text-white
    tracking-[-0.025em]
    mb-6
  "
>
  Insights That Drive Growth
</h1>

          {/* DESCRIPTION */}
         <p
  className="
    body-large
    text-[#F1F5F9]/90
    text-[15px]
    sm:text-[17px]
    leading-[1.65]
    max-w-3xl
    mx-auto
    mb-10
  "
>
  Explore expert perspectives, industry trends,
  digital strategies, and practical insights that
  help businesses grow smarter and faster.
</p>

          {/* CATEGORY FILTERS */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2.5
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-4
                  py-2.5
                  rounded-[10px]
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  cursor-pointer

                  ${
                    activeCategory === category
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "bg-white/95 text-[#102A56] hover:bg-[#F1F5F9]"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}