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
                  className="group text-left shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm"
                  aria-current={active ? "true" : "false"}
                >

                  {/* TOP LINE */}
                  <div
                    className={`h-[3px] rounded-full mb-4 transition-all duration-500 ${
                      active
                        ? "bg-brand-orange w-24"
                        : "bg-white/25 w-14 group-hover:w-20"
                    }`}
                  />

                  {/* TITLE */}
                  <span
                    className={`text-xs lg:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-white/55 group-hover:text-white/90"
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
                className={`rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[44px] after:h-[44px] after:content-[''] ${
                  currentSlide === index
                    ? "w-10 h-2 bg-brand-orange"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}

          </div>

          {/* PAUSE BUTTON */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play hero slider" : "Pause hero slider"}
            aria-pressed={isPaused}
            className="group relative w-14 h-14 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange transition-all duration-300 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >

            <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {isPaused ? (
              <Play className="w-5 h-5 relative z-10" aria-hidden="true" />
            ) : (
              <Pause className="w-5 h-5 relative z-10" aria-hidden="true" />
            )}

          </button>

        </div>

      </div>

    </div>
  );
});

HeroControls.displayName = "HeroControls";

export default HeroControls;