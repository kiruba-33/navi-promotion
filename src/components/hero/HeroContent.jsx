import { memo, useState, lazy, Suspense } from "react";
import ArrowButton from "../ui/ArrowButton";

const BookStrategyModal = lazy(() => import("../ui/BookStrategyModal"));

// memo: re-renders only when `slide` reference changes (i.e. when the active slide changes)
const HeroContent = memo(({ slide }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasEverOpened, setHasEverOpened] = useState(false);

  const handleOpenModal = () => {
    setHasEverOpened(true);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        key={slide.id}
        className="relative z-20 w-full max-w-3xl"
      >
        {/* SLIDE EYEBROW LABEL */}
        {slide.eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/25 bg-black/35 backdrop-blur-sm text-[#F1F5F9] text-[12px] sm:text-[13px] font-medium tracking-[0.04em] uppercase leading-[1.4] mb-5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" aria-hidden="true" />
            <span>{slide.eyebrow}</span>
          </div>
        )}

        {/* MAIN TITLE */}
        <h1 className="text-[#FFFFFF] font-semibold leading-[1.14] tracking-[-0.015em] whitespace-pre-line max-w-3xl text-[clamp(2rem,3.6vw,3.125rem)]">
          {slide.title}
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={handleOpenModal}
            style={{ fontFamily: "inherit" }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-[10px] bg-[#F97316] hover:bg-[#2563EB] text-[#FFFFFF] font-medium transition-colors duration-200 text-[14px] sm:text-[15px] leading-[1.3] cursor-pointer shadow-lg shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
          >
            Book Strategy Call
          </button>

          <ArrowButton
            text="Explore Services"
            to={slide.link || "/services"}
            variant="hero"
            className="w-full sm:w-auto justify-center !font-['Inter',system-ui,-apple-system,sans-serif] !text-[14px] sm:!text-[15px] !font-medium !py-3.5 !px-6 !rounded-[10px] !bg-[#102A56]/65 !border-white/30 !text-[#FFFFFF] hover:!bg-[#FFFFFF] hover:!text-[#102A56] hover:!border-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A56]"
          />
        </div>
      </div>

      {/* REUSABLE STRATEGY MODAL POPUP */}
      {hasEverOpened && (
        <Suspense fallback={null}>
          <BookStrategyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;