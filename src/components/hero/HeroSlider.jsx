import React, { memo } from "react";

const HeroSlider = memo(({ slides, currentSlide }) => {
  return (
    <>
      {/* STACKED BACKGROUND SLIDE LAYERS FOR INSTANT CROSS-FADING */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        const isFirst = index === 0;

        return (
          <div
            key={slide.id || index}
            className={`
              absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out
              ${
                isActive
                  ? "opacity-100 scale-105 z-10"
                  : "opacity-0 scale-100 z-0 pointer-events-none"
              }
            `}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            aria-hidden="true"
          >
            {/*
              Render a hidden <img> for slide 0 only.
              This gives the browser a real LCP candidate element (img > background-image),
              and lets fetchPriority="high" take effect on the critical resource.
              The image is visually hidden but still part of the LCP measurement.
            */}
            {isFirst && (
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        );
      })}

      {/* MAIN OVERLAY */}
      <div className="absolute inset-0 bg-slate-950/35 z-10 pointer-events-none" />

      {/* LEFT SOFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-[#020617]/20 to-transparent z-10 pointer-events-none" />

      {/* BOTTOM DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

      {/* LIGHT CINEMATIC FADE */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
    </>
  );
});

HeroSlider.displayName = "HeroSlider";

export default HeroSlider;