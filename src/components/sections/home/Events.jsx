import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArrowButton from '../../ui/ArrowButton';

const eventImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
];

export default function Events() {
  return (
    <section id="events" className="py-10 sm:py-14 lg:py-16 bg-slate-50 relative overflow-hidden flex items-center">
      {/* Background Subtle Ambient Polish Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section Wrapper */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl">
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 select-none shadow-sm">
              <Calendar className="w-4 h-4 text-orange-500" aria-hidden="true" focusable="false" />
              <span>Latest Events</span>
            </div>

            {/* HEADING */}
            <h2 className="heading-section heading-primary tracking-tight mb-4 whitespace-normal lg:whitespace-nowrap">
              Moments <span className="heading-highlight leading-none">In Motion</span>
            </h2>

            {/* PARAGRAPH */}
            <p className="body-large text-slate-600 font-normal leading-relaxed">
              From high-stakes marketing summits to community development drives, peek into the vibrant world of Navi Promotions.
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

        {/* EVENTS GALLERY - Fixed Bounding Grid Layout with direct Gallery routing */}
        <div className="relative pt-4 pb-8 sm:pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 items-start">
            {eventImages.map((img, idx) => (
              <div
                key={idx}
                className={`
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  lg:rounded-[2.5rem]
                  group
                  cursor-pointer
                  shadow-sm
                  will-change-transform
                  ${idx === 1 ? "mt-8 lg:mt-12" : ""}
                  ${idx === 2 ? "mt-0" : ""}
                  ${idx === 3 ? "mt-8 lg:mt-12" : ""}
                `}
              >
                <Link
                  to="/gallery"
                  aria-label="View event photo in gallery"
                  className="block relative w-full h-[280px] sm:h-[380px] lg:h-[480px] overflow-hidden"
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
                      from-black/75
                      via-black/15
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
                    <span className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                      View Event
                      <ArrowRight className="w-4 h-4 text-orange-400" aria-hidden="true" focusable="false" />
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