import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import { premiumEventsData } from '../../../data/premiumEventsData';
import ArrowButton from '../../ui/ArrowButton';

// Custom Media Query hook to determine number of columns responsively
const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const handler = () => {
      const matchIndex = queries.findIndex(q => window.matchMedia(q).matches);
      setValue(matchIndex !== -1 ? values[matchIndex] : defaultValue);
    };

    handler();
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    
    mediaQueryLists.forEach(mql => {
      if (mql.addEventListener) {
        mql.addEventListener('change', handler);
      } else {
        // Fallback for older browsers
        mql.addListener(handler);
      }
    });

    return () => {
      mediaQueryLists.forEach(mql => {
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handler);
        } else {
          // Fallback for older browsers
          mql.removeListener(handler);
        }
      });
    };
  }, [queries, values, defaultValue]);

  return value;
};

export default function PremiumEventGallery() {
  // Determine active columns based on screen size query values
  const columns = useMedia(
    ['(min-width: 1280px)', '(min-width: 1024px)', '(min-width: 380px)'],
    [4, 3, 2],
    1
  );

  // Distribute items across active columns using a greedy height-balancing algorithm
  const columnItems = useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    const colHeights = new Array(columns).fill(0);

    premiumEventsData.forEach(item => {
      const minColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[minColIndex].push(item);
      colHeights[minColIndex] += item.height;
    });

    return cols;
  }, [columns]);

  return (
    <section
      id="premium-event-gallery"
      className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] relative overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Minimal Premium Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-14 gap-8">
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
              <Camera className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
              <span>Latest Events</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold text-[#0F172A] tracking-[-0.015em] leading-[1.16]">
              Moments In Motion
            </h2>

            {/* Small Description */}
            <p className="mt-4 text-[#0F172A]/80 text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65] max-w-xl">
              Discover memorable moments from conferences, corporate events, exhibitions, launches and community initiatives.
            </p>
          </div>

          {/* Reusable ArrowButton CTA */}
          <div className="mt-2 sm:mt-4">
              <ArrowButton
                text="Explore Gallery"
                to="/gallery"
                className="!text-[14px] sm:!text-[15px] !font-medium !py-3.5 !px-6 !rounded-[10px] !bg-[#2563EB] hover:!bg-[#102A56] !shadow-md !shadow-[#2563EB]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              />
          </div>
        </div>

        {/* Gallery Grid Columns Container */}
        <div 
          className="grid gap-3 sm:gap-4 w-full" 
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {columnItems.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3 sm:gap-4">
              {col.map((item) => (
                <div
                  key={item.id}
                  className="
                    group 
                    relative 
                    overflow-hidden 
                    rounded-2xl 
                    bg-[#F1F5F9] 
                    border border-[#0F172A]/10 
                    shadow-xs hover:shadow-md 
                    cursor-pointer 
                    w-full
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                  "
                  style={{ aspectRatio: `800 / ${item.height}` }}
                >
                  {/* Full-Color Corporate Event Photo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full 
                      h-full 
                      object-cover 
                    "
                    loading="lazy"
                  />

                  {/* Subtle Deep Navy Gradient Overlay (Reveals on Hover) */}
                  <div 
                    className="
                      absolute 
                      inset-0 
                      bg-gradient-to-t 
                      from-[#102A56]/85 
                      via-[#102A56]/25 
                      to-transparent 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity 
                      duration-500 
                      ease-[cubic-bezier(0.16,1,0.3,1)] 
                      pointer-events-none
                    " 
                  />

                  {/* Overlay Content Container */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 text-[#FFFFFF] select-none">
                    <div 
                      className="
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-500
                      "
                    >
                      <span className="inline-flex items-center gap-2 font-medium text-[14px] sm:text-[15px] leading-[1.4] tracking-[0.01em] text-[#FFFFFF]">
                        View Event
                        <ArrowRight className="w-4 h-4 stroke-[2] text-[#F97316] group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" focusable="false" />
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
