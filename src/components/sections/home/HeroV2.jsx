import React from 'react';
import { Award } from 'lucide-react';
import Ferrofluid from "@/components/Ferrofluid";

// Declare colors array outside component to prevent reference recreation on each render
const FERROFLUID_COLORS = [
  "#FFFFFF",
  "#7DD3FC",
  "#38BDF8"
];

const HeroV2 = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#081120]">
      {/* Background Ferrofluid */}
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={FERROFLUID_COLORS}
          speed={0.3}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={3.0}
          flowDirection="down"
          opacity={1.0}
          mouseInteraction={false}
          mouseStrength={0}
          mouseRadius={0.35}
        />
      </div>

      {/* Dark Overlay - temporarily disabled to test the full Ferrofluid glow */}
      {/* 
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(8, 17, 32, 0.65)' }}
      />
      */}

      {/* Centered Premium Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          
          {/* Top Premium Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-950/40 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide uppercase select-none">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>5+ Years of Digital Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight select-none">
            Grow Your Brand
            <span className="block mt-2 text-sky-300">Accelerate Your Business</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed select-none">
            Helping businesses grow through Digital Marketing, Website Development, Branding, SEO, Performance Marketing, and Creative Strategies that deliver measurable results.
          </p>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <button className="px-8 py-3.5 bg-white text-[#081120] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg text-sm sm:text-base w-full sm:w-auto">
              Start Your Project
            </button>
            <button className="px-8 py-3.5 bg-transparent text-white font-medium rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto">
              Explore Our Work
            </button>
          </div>

          {/* Trust Text */}
          <p className="text-gray-400 text-xs sm:text-sm tracking-wide font-normal pt-2 select-none uppercase">
            Trusted by Businesses Across Multiple Industries
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroV2;
