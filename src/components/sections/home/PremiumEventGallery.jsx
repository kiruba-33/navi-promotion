import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
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
    <section id="premium-event-gallery" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F4] relative overflow-hidden w-full">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Minimal Premium Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
              <Camera className="w-4 h-4 text-orange-500" />
              <span>Latest Events</span>
            </div>

            {/* Large Heading */}
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-primary tracking-tighter leading-[1.05] sm:leading-[1.1] md:leading-[1.15]">
              Moments <span className="heading-highlight leading-none">In Motion</span>
            </h2>

            {/* Small Description */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Discover memorable moments from conferences, corporate events, exhibitions, launches and community initiatives.
            </p>
          </div>

          {/* Reusable ArrowButton CTA */}
          <div className="mt-2 sm:mt-4">

              <ArrowButton
                text="Explore Gallery"
                to="/gallery"
              />

        </div>
        </div>

        {/* Gallery Grid Columns Container */}
        <div 
          className="grid gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full" 
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {columnItems.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px]">
              {col.map((item) => (
                <div
                  key={item.id}
                  className="
                    group 
                    relative 
                    overflow-hidden 
                    rounded-[28px] sm:rounded-[32px] 
                    bg-white 
                    border border-slate-100/50 
                    shadow-[0_4px_20px_rgba(0,0,0,0.02)] 
                    cursor-pointer 
                    w-full
                    transition-all
                    duration-700
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

                  {/* Subtle Dark Gradient Overlay (Reveals on Hover) */}
                  <div 
                    className="
                      absolute 
                      inset-0 
                      bg-gradient-to-t 
                      from-black/60 
                      via-black/10 
                      to-transparent 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity 
                      duration-700 
                      ease-[cubic-bezier(0.16,1,0.3,1)] 
                      pointer-events-none
                    " 
                  />

                  {/* Overlay Content Container */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 text-white select-none">
                    <div 
                      className="
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-500
                      "
                    >
                      <span className="inline-flex items-center gap-2 font-bold text-sm sm:text-base tracking-wide text-white">
                        View Event
                        <ArrowRight className="w-4 h-4 stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform duration-300"  aria-hidden="true" focusable="false" />
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
