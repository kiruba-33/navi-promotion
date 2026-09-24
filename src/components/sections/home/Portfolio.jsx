import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

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
    if (isDesktop) {
      setScrollRange(0);
      return;
    }

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

    calculateRange();

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
      className="relative bg-slate-950"
      style={{ height: isDesktop ? '300vh' : (scrollRange ? `calc(100vh + ${scrollRange}px)` : '300vh') }}
    >
      {/* Container tracking full flex structure layouts safely */}
      <div className={`sticky top-0 h-screen overflow-hidden flex flex-col pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 ${isDesktop ? "justify-between" : ""}`}>

        {/* Premium Transparent Tint Mask - Background image is explicitly visible now */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600"
            alt="Background Structure"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          {/* Gentle cinematic linear shading mask instead of pitch-black opaque wall */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/90" />
        </div>

        {/* Crisp Ambient Radial Accent Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,72,142,0.3),transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,140,0,0.18),transparent_60%)] pointer-events-none z-0" />

        <div
          ref={containerRef}
          className={
            isDesktop
              ? "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col flex-grow justify-between h-full items-center text-center"
              : "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-center flex-grow gap-6 sm:gap-8 lg:gap-10 h-full items-center text-center"
          }
        >

          {/* Header Frame - Static Flex Layer element to completely prevent overlapping */}
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
            {/* Local Text Back Shading Layer block for anti-blending typography backdrop setup */}
            <div className="absolute -inset-4 bg-slate-950/20 blur-xl rounded-full -z-10 pointer-events-none" />

            <React.Fragment>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-4 shadow-sm select-none">
                <FolderOpen className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
                <span>Selected Works</span>
              </div>
            </React.Fragment>

            {/* Added dynamic inline high-fidelity text-shadow wrappers to completely isolate text colors from image blend */}
            <h2
              className="heading-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15] tracking-tighter"
              style={{
                textShadow: '0 4px 18px rgba(0, 0, 0, 0.95), 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              Work that drives <br />
              <span
                className="text-orange-500 font-bold"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.7)'
                }}
              >
                Real Results
              </span>
            </h2>
          </motion.div>

          {/* Horizontal Track Slider Container - Scale Optimized Specifically For Laptop Viewports */}
          <div className={isDesktop ? "w-full overflow-visible mt-auto pt-6 z-10" : "w-full overflow-visible z-10"}>
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 sm:gap-10 items-center w-max pl-2"
            >
              {projects.map((project, index) => (
                <React.Fragment key={project.id || index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, rotateY: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    // High-fidelity spring physics setup for premium butter smooth scrolling tracking effects
                    transition={{
                      delay: index * 0.04,
                      type: "spring",
                      stiffness: 45,
                      damping: 18,
                      mass: 0.8
                    }}
                    className="group relative w-[86vw] sm:w-[460px] md:w-[520px] lg:w-[480px] h-[45vh] sm:h-[48vh] md:h-[460px] lg:h-[420px] rounded-[2.5rem] overflow-hidden flex-shrink-0 cursor-pointer border border-white/10 bg-slate-900 shadow-2xl shadow-black/40 will-change-transform"
                  >
                    {/* Scalable Card Media Cover */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Card Content Inlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end z-10">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                        {/* Category Label */}
                        <p className="text-orange-500 label-text mb-2.5 tracking-wider text-xs drop-shadow-sm font-bold">
                          {project.category}
                        </p>

                        {/* Title and Dynamic CTA Action Wrapper */}
                        <div className="flex items-end justify-between gap-4">
                          <h3 className="heading-card text-2xl sm:text-3xl lg:text-3xl text-white drop-shadow-md">
                            {project.title}
                          </h3>

                          {/* Action Button Rounded Layout matching ArrowButton theme */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500 shrink-0">
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}