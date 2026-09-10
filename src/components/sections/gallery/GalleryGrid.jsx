import React from "react";
import { motion } from "motion/react";
import { Calendar, Maximize2, Camera } from "lucide-react";

export default function GalleryGrid({
  events,
  onSelectEvent,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Section Header */}
        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
            lg:mb-20
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none"
          >
            <Camera className="w-4 h-4 text-orange-500" />
            <span>Our Events</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              heading-section
              mb-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-slate-900
            "
          >
            Moments That Matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              body-large
              mx-auto
              max-w-2xl
              text-slate-600
            "
          >
            Explore memorable events, team celebrations,
            social initiatives and moments that define
            life at Navi Promotions.
          </motion.p>
        </div>

        {/* Event Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              onClick={() => onSelectEvent(event)}
              className="
                group
                relative
                h-[420px]
                cursor-pointer
                overflow-hidden
                rounded-[2rem]
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <img
                src={event.coverImage}
                alt={event.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  justify-end
                  p-8
                "
              >
                <div
                  className="
                    translate-y-4
                    transition-transform
                    duration-500
                    group-hover:translate-y-0
                  "
                >
                  {/* Date */}
                  <div className="mb-4 flex items-center">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-white
                        backdrop-blur-md
                      "
                    >
                      <Calendar className="h-3.5 w-3.5"  aria-hidden="true" focusable="false" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      heading-card
                      mb-3
                      text-2xl
                      sm:text-3xl
                      text-white
                    "
                  >
                    {event.title}
                  </h3>

                  {/* Category */}
                  <p
                    className="
                      mb-4
                      text-sm
                      font-medium
                      text-white/80
                    "
                  >
                    {event.category}
                  </p>

                  {/* CTA */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      View Gallery
                    </span>

                    <Maximize2 className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}