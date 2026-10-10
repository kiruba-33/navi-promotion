import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "../../data/heroData";
import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroControls from "./HeroControls";

// ─── Progressive preload cache ────────────────────────────────────────────────
// Tracks which images have already been preloaded so we never double-fetch.
const preloadedSet = new Set();

function preloadImage(src) {
  if (!src || preloadedSet.has(src)) return;
  preloadedSet.add(src);
  const img = new Image();
  // decoding=async keeps it off the main thread
  img.decoding = "async";
  img.src = src;
}

// Slide 0 is already preloaded by <link rel="preload"> in index.html.
// Register it so we never attempt a redundant network request.
if (typeof window !== "undefined" && heroSlides[0]?.image) {
  preloadedSet.add(heroSlides[0].image);
}

// ─────────────────────────────────────────────────────────────────────────────

const SLIDE_DURATION = 5000; // ms

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Stable refs avoid re-creating the interval on every render
  const isPausedRef = useRef(isPaused);
  const currentSlideRef = useRef(currentSlide);

  // Keep refs in sync without triggering effects
  useEffect(() => {
    isPausedRef.current = isPaused;
    currentSlideRef.current = currentSlide;
  }, [isPaused, currentSlide]);

  // ── Interval: created ONCE, never recreated ──────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(id);
  }, []); // ← empty dep array: single stable interval for the lifetime of Hero

  // ── Progressive preload: when slide N becomes active, preload slide N+1 ──
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    const nextSrc = heroSlides[nextIndex]?.image;
    preloadImage(nextSrc);
  }, [currentSlide]);

  // ── Stable callbacks for HeroControls (avoids re-renders) ─────────────────
  const handleSetCurrentSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleSetIsPaused = useCallback((val) => {
    setIsPaused(val);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* BACKGROUND */}
      <HeroSlider slides={heroSlides} currentSlide={currentSlide} />

      {/* CONTENT */}
      <div className="relative z-20 h-full">
        <div className="max-w-[1600px] mx-auto h-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center">
          <HeroContent slide={heroSlides[currentSlide]} />
        </div>
      </div>

      {/* CONTROLS */}
      <HeroControls
        slides={heroSlides}
        currentSlide={currentSlide}
        setCurrentSlide={handleSetCurrentSlide}
        isPaused={isPaused}
        setIsPaused={handleSetIsPaused}
      />
    </section>
  );
};

export default Hero;