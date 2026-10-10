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

  {/* Main Dark Fade */}
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
    px-5
    py-2.5
    rounded-full
    bg-white/10
    backdrop-blur-md
    border
    border-white/20
    text-white
    label-text
    mb-8
  "
>
  <Newspaper className="w-4 h-4 text-orange-500" />
  Navi Insights
</div>

          {/* HEADING */}
         <h1
  className="
    heading-display
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    text-white
    tracking-tight
    mb-8
  "
>
  Insights That Drive Growth
</h1>

          {/* DESCRIPTION */}
         <p
  className="
    body-large
    text-white/90
    max-w-3xl
    mx-auto
    mb-12
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
              gap-3
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-6
                  py-3
                  rounded-2xl
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-500 hover:text-slate-900"
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