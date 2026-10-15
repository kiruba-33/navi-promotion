import React from 'react';
import { FolderOpen } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { scrollStackProjects } from '@/data/homeScrollStackProjects';

const PortfolioScrollStack = () => {
  return (
    <section className="relative bg-slate-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      {/* Cinematic Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,72,142,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,140,0,0.06),transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-4 shadow-sm select-none">
            <FolderOpen className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
            <span>Case Studies Stack</span>
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
            Our Interactive Stack
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Take a fluid scroll through our selected works. Each card demonstrates our technical expertise in delivery and branding.
          </p>
        </div>

        {/* Scroll Stack Animation Component */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemStackDistance={100} // Configured to match card header height so headers remain visible during stacking
          baseScale={0.88}
          itemScale={0.02}
          rotationAmount={0}
        >
          {scrollStackProjects.map((item) => (
            <ScrollStackItem
              key={item.id}
              itemClassName="!h-[400px] sm:!h-[480px] md:!h-[520px] lg:!h-[560px] !w-full !max-w-4xl mx-auto !p-0 !rounded-[24px] sm:!rounded-[32px] overflow-hidden border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
            >
              <div className="relative w-full h-full flex flex-col group bg-[#081120]">

                {/* 1. Top Header Bar (Contains Identifiers, height: 90px-100px) */}
                <div className="w-full h-[90px] sm:h-[100px] bg-white border-b border-gray-200 px-6 sm:px-8 flex flex-col justify-center items-start text-left relative z-20">
                  {/* Category Label */}
                  <span className="text-sky-600 text-xs sm:text-sm font-semibold uppercase tracking-wider select-none">
                    {item.category} {item.subCategory ? `• ${item.subCategory}` : ''}
                  </span>

                  {/* Project & Client Name */}
                  <h3 className="heading-primary text-lg sm:text-xl md:text-2xl font-semibold tracking-tight leading-none mt-1 sm:mt-1.5 truncate w-full select-none">
                    {item.title} <span className="text-slate-500 font-medium text-sm sm:text-base ml-2">/ {item.client}</span>
                  </h3>
                </div>

                {/* 2. Project Image Area (Occupies remaining height) */}
                <div className="w-full h-[calc(100%-90px)] sm:h-[calc(100%-100px)] relative overflow-hidden z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform-gpu"
                    style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    loading="lazy"
                  />
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default PortfolioScrollStack;
