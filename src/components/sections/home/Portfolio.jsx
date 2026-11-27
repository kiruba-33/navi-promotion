import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const projects = [
  {
    id: 1,
    title: 'Aura Skincare',
    category: 'E-commerce & Branding',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Nexus Tech',
    category: 'B2B SaaS Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    title: 'Lumina Real Estate',
    category: 'Lead Generation Campaign',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    title: 'FitLife App',
    category: 'App UI/UX & Launch',
    image: 'https://images.unsplash.com/photo-1526506114642-903c5e4d783e?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Portfolio() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Viewport detection for Desktop (1440px and above) vs Laptop, Tablet, Mobile
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Dynamically calculate track scroll range for non-desktop layouts to eliminate extra scroll space
  useLayoutEffect(() => {
    if (isDesktop) return;

    const calculateRange = () => {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const containerStyle = window.getComputedStyle(containerRef.current);
        const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
        const paddingRight = parseFloat(containerStyle.paddingRight) || 0;

        // track has pl-2 which is 8px
        const trackLeft = paddingLeft + 8;

        // Exact travel distance to align the track's right edge with the container's right content padding boundary
        const travel = (trackLeft + trackWidth) - (containerWidth - paddingRight);
        setScrollRange(Math.max(0, travel));
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      calculateRange();
    });

    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isDesktop]);

  // Track scroll transform: maps 0->1 scroll to either original 0%->-78.5% (Desktop) or dynamic pixels (others)
  const x = useTransform(scrollYProgress, (value) => {
    if (isDesktop) {
      return `${value * -78.5}%`;
    } else {
      return `${value * -scrollRange}px`;
    }
  });

  // High-performance smooth linear transformation bounds for fluid hide action
  const headerY = useTransform(scrollYProgress, [0, 0.08], ["0px", "-160px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  // Toggle header visibility state using custom thresholds
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const threshold = isDesktop ? 0.07 : 0.08;
    if (latest > threshold) {
      if (!isHeaderHidden) setIsHeaderHidden(true);
    } else {
      if (isHeaderHidden) setIsHeaderHidden(false);
    }
  });

  return (
    <section
      id="portfolio"
      ref={targetRef}
      className="relative bg-[#102A56]"
      style={{
        height: isDesktop ? '300vh' : (scrollRange ? `calc(100vh + ${scrollRange}px)` : '300vh'),
      }}
    >
      {/* Container tracking full flex structure layouts safely */}
      <div className={`sticky top-0 h-screen overflow-hidden flex flex-col pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 ${isDesktop ? "justify-between" : ""}`}>

        {/* Subtle Deep Navy Ambient Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600"
            alt="Background Structure"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#102A56]/90 via-[#102A56]/75 to-[#102A56]" />
        </div>

        <div
          ref={containerRef}
          className={
            isDesktop
              ? "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col flex-grow justify-between h-full items-center text-center"
              : "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-center flex-grow gap-6 sm:gap-8 lg:gap-10 h-full items-center text-center"
          }
        >

          {/* Header Frame */}
          <motion.div
            style={{
              y: headerY,
              opacity: headerOpacity,
              ...(isDesktop ? { display: isHeaderHidden ? "none" : "flex" } : {})
            }}
            className={
              isDesktop
                ? "w-full max-w-2xl origin-top will-change-transform z-20 mb-auto text-center flex flex-col items-center mx-auto"
                : `w-full max-w-2xl origin-top will-change-transform z-20 text-center flex flex-col items-center mx-auto ${isHeaderHidden ? "pointer-events-none" : ""}`
            }
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/20 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
              <FolderOpen className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
              <span>Selected Works</span>
            </div>

            <h2 className="text-center text-[clamp(1.75rem,2.8vw,2.375rem)] text-[#FFFFFF] leading-[1.16] tracking-[-0.015em] font-semibold">
              Work that drives <br />
              <span className="text-[#F97316]">
                Real Results
              </span>
            </h2>
          </motion.div>

          {/* Horizontal Track Slider Container */}
          <div className={isDesktop ? "w-full overflow-visible mt-auto pt-6 z-10" : "w-full overflow-visible z-10"}>
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 sm:gap-10 items-center w-max pl-2"
            >
              {projects.map((project, index) => (
                <React.Fragment key={project.id || index}>
                  <div
                    className="group relative w-[86vw] sm:w-[460px] md:w-[520px] lg:w-[480px] h-[45vh] sm:h-[48vh] md:h-[460px] lg:h-[420px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer border border-white/15 bg-[#102A56] shadow-xl shadow-black/25 will-change-transform"
                  >
                    {/* Scalable Card Media Cover */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A56] via-[#102A56]/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Card Content Inlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end z-10">
                      <div>

                        {/* Category Label */}
                        <p className="text-[#F97316] mb-2 tracking-[0.04em] uppercase text-[12px] font-medium leading-[1.4]">
                          {project.category}
                        </p>

                        {/* Title and Dynamic CTA Action Wrapper */}
                        <div className="flex items-end justify-between gap-4">
                          <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#FFFFFF]">
                            {project.title}
                          </h3>

                          {/* Action Button */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#2563EB] border border-white/15 flex items-center justify-center text-[#FFFFFF] group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" focusable="false" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}