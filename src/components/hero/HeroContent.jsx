import { memo, useState } from "react";
import ArrowButton from "../ui/ArrowButton";
import BookStrategyModal from "../ui/BookStrategyModal";

// memo: re-renders only when `slide` reference changes (i.e. when the active slide changes)
const HeroContent = memo(({ slide }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        key={slide.id}
        className="relative z-20 w-full max-w-6xl"
      >
        {/* MAIN TITLE */}
        <h1
          className="text-white font-bold leading-[1.08] sm:leading-[1.06] tracking-tight whitespace-pre-line max-w-6xl
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[80px]"
        >
          {slide.title}
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-10 sm:mt-12 md:mt-14">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-7 md:px-8 py-4 rounded-full bg-brand-orange text-white font-semibold hover:scale-105 transition-all duration-300 text-sm md:text-base cursor-pointer shadow-lg"
          >
            Book Strategy Call
          </button>

          <ArrowButton
            text="Explore Services"
            to={slide.link || "/services"}
            variant="hero"
            className="w-full sm:w-auto justify-center"
          />
        </div>
      </div>

      {/* REUSABLE STRATEGY MODAL POPUP */}
      <BookStrategyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;