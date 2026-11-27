import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import ArrowButton from '../../ui/ArrowButton';

const eventImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-12 sm:py-16 lg:py-20 bg-[#FFFFFF] relative overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section Wrapper */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-14 gap-8">
          <div className="max-w-2xl">
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 select-none shadow-xs">
              <Calendar className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
              <span>Latest Events</span>
            </div>

            {/* HEADING */}
            <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-[#0F172A] mb-4">
              Moments In Motion
            </h2>

            {/* PARAGRAPH */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#0F172A]/80 font-normal leading-[1.65]">
              From high-stakes marketing summits to community development drives, peek into the vibrant world of Navi Promotions.
            </p>
          </div>

          {/* Reusable ArrowButton CTA */}
          <div className="mt-2 sm:mt-4">
            <ArrowButton
              text="Explore Gallery"
              to="/gallery"
              variant="orange"
              className="!text-[14px] sm:!text-[15px] !font-medium !py-3.5 !px-6 !rounded-[10px] !bg-[#F97316] hover:!bg-[#102A56] !shadow-md !shadow-[#F97316]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
            />
          </div>
        </div>

        {/* EVENTS GALLERY - Fixed Bounding Grid Layout with direct Gallery routing */}
        <div className="relative pt-4 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 items-start">
            {eventImages.map((img, idx) => (
              <div
                key={idx}
                className={`
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-[#0F172A]/10
                  group
                  cursor-pointer
                  shadow-xs hover:shadow-md
                  transition-shadow duration-300
                  will-change-transform
                  ${idx === 1 ? "mt-8 lg:mt-12" : ""}
                  ${idx === 2 ? "mt-0" : ""}
                  ${idx === 3 ? "mt-8 lg:mt-12" : ""}
                `}
              >
                <Link
                  to="/gallery"
                  aria-label="View event photo in gallery"
                  className="block relative w-full h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset rounded-2xl"
                >
                  <img
                    src={img}
                    alt="Event Showcase"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#102A56]/90
                      via-[#102A56]/25
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  />

                  {/* Action Badge */}
                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      z-10
                    "
                  >
                    <span className="text-[#FFFFFF] font-medium flex items-center gap-2 text-[14px] sm:text-[15px] leading-[1.4]">
                      View Event
                      <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" focusable="false" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}