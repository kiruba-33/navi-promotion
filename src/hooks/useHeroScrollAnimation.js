import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Reproduces the Blog hero scroll-linked upward exit animation consistently across
 * all hero sections while respecting prefers-reduced-motion and mobile screen heights.
 */
export function useHeroScrollAnimation({
  yDesktop = 300,
  yMobile = 120,
  fadeEnd = 0.5,
  scaleEnd = 1.1,
} = {}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const activeY = shouldReduceMotion ? 0 : isMobile ? yMobile : yDesktop;
  const activeScale = shouldReduceMotion ? 1 : scaleEnd;
  const opacityTarget = shouldReduceMotion ? 1 : 0;

  const yText = useTransform(scrollYProgress, [0, 1], [0, activeY]);
  const opacityHero = useTransform(scrollYProgress, [0, fadeEnd], [1, opacityTarget]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, activeScale]);

  return {
    containerRef,
    yText,
    opacityHero,
    scaleImage,
    shouldReduceMotion: Boolean(shouldReduceMotion),
  };
}
