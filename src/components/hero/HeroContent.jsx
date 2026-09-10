import { memo } from "react";
import { motion } from "framer-motion";
import ArrowButton from "../ui/ArrowButton";

// memo: re-renders only when `slide` reference changes (i.e. when the active slide changes)
const HeroContent = memo(({ slide }) => {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-20 w-full max-w-6xl"
    >

      {/* TOP LABEL */}
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">

        <div className="w-14 sm:w-20 md:w-28 h-[2px] bg-brand-orange" />

        <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-bold text-white uppercase whitespace-nowrap">
          {slide.eyebrow}
        </span>

      </div>

      {/* MAIN TITLE */}
      <h1 className="text-white font-black leading-[0.95] tracking-tight whitespace-pre-line max-w-6xl
      text-[52px]
      sm:text-[68px]
      md:text-[82px]
      lg:text-[96px]
      xl:text-[110px]">
        {slide.title}
      </h1>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-10 sm:mt-12 md:mt-14">

        <button className="w-full sm:w-auto px-7 md:px-8 py-4 rounded-full bg-brand-orange text-white font-bold hover:scale-105 transition-all duration-300 text-sm md:text-base">
          Book Strategy Call
        </button>

        <ArrowButton
          text="Explore Services"
          to={slide.link || "/services"}
          variant="hero"
          className="w-full sm:w-auto justify-center"
        />

      </div>

    </motion.div>
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;