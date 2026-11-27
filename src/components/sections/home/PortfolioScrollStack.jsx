import React from 'react';
import { FolderOpen } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { scrollStackProjects } from '@/data/homeScrollStackProjects';

const PortfolioScrollStack = () => {
  return (
    <section
      className="relative bg-[#102A56] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/20 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
            <FolderOpen className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Case Studies Stack</span>
          </div>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-[#FFFFFF]">
            Our Interactive <span className="text-[#F97316]">Stack</span>
          </h2>
          <p className="text-[#F1F5F9]/85 text-[15px] sm:text-[16px] lg:text-[17px] max-w-2xl mx-auto mt-4 font-normal leading-[1.65]">
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
              itemClassName="!h-[400px] sm:!h-[480px] md:!h-[520px] lg:!h-[560px] !w-full !max-w-4xl mx-auto !p-0 !rounded-2xl overflow-hidden border border-white/15 shadow-xl shadow-black/30"
            >
              <div className="relative w-full h-full flex flex-col group bg-[#102A56]">

                {/* 1. Top Header Bar (Contains Identifiers, height: 90px-100px) */}
                <div className="w-full h-[90px] sm:h-[100px] bg-[#FFFFFF] border-b border-[#0F172A]/10 px-6 sm:px-8 flex flex-col justify-center items-start text-left relative z-20">
                  {/* Category Label */}
                  <span className="text-[#2563EB] text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.04em] leading-[1.4] select-none">
                    {item.category} {item.subCategory ? `• ${item.subCategory}` : ''}
                  </span>

                  {/* Project & Client Name */}
                  <h3 className="text-[#0F172A] text-[18px] sm:text-[20px] md:text-[22px] font-semibold tracking-[-0.005em] leading-[1.25] mt-1 sm:mt-1.5 truncate w-full select-none">
                    {item.title} <span className="text-[#0F172A]/65 font-normal text-[14px] sm:text-[15px] ml-2">/ {item.client}</span>
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
