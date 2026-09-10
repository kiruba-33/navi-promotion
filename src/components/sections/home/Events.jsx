import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, ArrowRight } from 'lucide-react';
import ArrowButton from '../../ui/ArrowButton';

const eventImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
];

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden flex items-center">
      {/* Background Subtle Ambient Polish Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section Wrapper */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            {/* TAG */}
            <React.Fragment>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 select-none shadow-sm">
                <Calendar className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
                <span>Latest Events</span>
              </div>
            </React.Fragment>

            {/* HEADING */}
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-primary tracking-tighter sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15]">
              Moments <span className="heading-highlight leading-none">In Motion</span>
            </h2>

            {/* PARAGRAPH */}
            <p className="body-large mt-6 text-slate-600 font-medium leading-relaxed">
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

        {/* EVENTS GALLERY - Fixed Bounding Grid Layout */}
        <div className="relative pt-8 pb-12 sm:pb-16 md:pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 items-start">

            {eventImages.map((img, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    lg:rounded-[2.5rem]
                    group
                    cursor-pointer
                    shadow-sm
                    will-change-transform
                    ${idx === 1 ? "mt-10 lg:mt-14" : ""}
                    ${idx === 2 ? "mt-0 lg:mt-0" : ""}
                    ${idx === 3 ? "mt-10 lg:mt-14" : ""}
                  `}
                >
                  <img
                    src={img}
                    alt="Event Asset"
                    className="
                      w-full
                      h-[280px]
                      sm:h-[380px]
                      lg:h-[480px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      opacity-0
                      translate-y-4
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      z-10
                    "
                  >
                    <span className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                      View Event
                      <ArrowRight className="w-4 h-4 text-orange-400"  aria-hidden="true" focusable="false" />
                    </span>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}