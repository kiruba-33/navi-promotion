import { memo } from "react";
import { Pause, Play } from "lucide-react";

// memo: only re-renders when currentSlide, isPaused, or the stable callbacks change
const HeroControls = memo(({
  slides,
  currentSlide,
  setCurrentSlide,
  isPaused,
  setIsPaused,
}) => {
  return (
    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 z-30">

      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        <div className="flex items-end justify-between gap-6">

          {/* DESKTOP CONTROLS */}
          <div className="hidden md:flex items-end gap-8 lg:gap-12 overflow-x-auto">

            {slides.map((slide, index) => {
              const active = currentSlide === index;

              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  style={{ fontFamily: "inherit" }}
                  className="group text-left shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#102A56] rounded-sm cursor-pointer"
                  aria-current={active ? "true" : "false"}
                >

                  {/* TOP LINE */}
                  <div
                    className={`h-[3px] rounded-sm mb-3 transition-all duration-500 ${
                      active
                        ? "bg-[#F97316] w-20"
                        : "bg-[#FFFFFF]/25 w-12 group-hover:w-16 group-hover:bg-[#FFFFFF]/50"
                    }`}
                  />

                  {/* TITLE */}
                  <span
                    className={`text-[12px] lg:text-[13px] font-medium tracking-[0.04em] leading-[1.4] uppercase transition-colors duration-300 ${
                      active
                        ? "text-[#FFFFFF]"
                        : "text-[#F1F5F9]/60 group-hover:text-[#F1F5F9]"
                    }`}
                  >
                    {slide.eyebrow}
                  </span>

                </button>
              );
            })}

          </div>

          {/* MOBILE DOTS */}
          <div className="flex md:hidden items-center gap-3">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
                className={`rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[44px] after:h-[44px] after:content-[''] ${
                  currentSlide === index
                    ? "w-8 h-2 bg-[#F97316]"
                    : "w-2 h-2 bg-[#FFFFFF]/40"
                }`}
              />
            ))}

          </div>

          {/* PAUSE BUTTON */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play hero slider" : "Pause hero slider"}
            aria-pressed={isPaused}
            style={{ fontFamily: "inherit" }}
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/25 bg-[#102A56]/75 backdrop-blur-md flex items-center justify-center text-[#FFFFFF] hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-300 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A56]"
          >
            {isPaused ? (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" aria-hidden="true" />
            ) : (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" aria-hidden="true" />
            )}

          </button>

        </div>

      </div>

    </div>
  );
});

HeroControls.displayName = "HeroControls";

export default HeroControls;