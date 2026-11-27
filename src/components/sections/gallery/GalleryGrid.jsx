import React from "react";
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
        bg-[#FFFFFF]
        py-14
        sm:py-16
        lg:py-20
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
            mb-12
            max-w-3xl
            text-center
            lg:mb-14
          "
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none"
          >
            <Camera className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
            <span>Our Events</span>
          </div>

          <h2
            className="
              heading-section
              mb-4
              text-[#0F172A]
            "
          >
            Moments That Matter
          </h2>

          <p
            className="
              body-large
              mx-auto
              max-w-2xl
              text-[#0F172A]/80
            "
          >
            Explore memorable events, team celebrations,
            social initiatives and moments that define
            life at Navi Promotions.
          </p>
        </div>

        {/* Event Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="
                group
                relative
                h-[400px]
                sm:h-[420px]
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border border-[#0F172A]/10
                bg-[#FFFFFF]
                shadow-xs hover:shadow-md
                hover:border-[#2563EB]/40
                transition-all
                duration-300
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
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#102A56]/95
                  via-[#102A56]/40
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
                  p-6
                  sm:p-7
                "
              >
                <div>
                  {/* Date */}
                  <div className="mb-3 flex items-center">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/20
                        bg-[#102A56]/75
                        px-3
                        py-1.5
                        text-[12px]
                        font-medium
                        text-[#F1F5F9]
                        backdrop-blur-md
                      "
                    >
                      <Calendar className="h-3.5 w-3.5 text-[#F97316]" aria-hidden="true" focusable="false" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      heading-card
                      mb-1.5
                      text-[#FFFFFF]
                    "
                  >
                    {event.title}
                  </h3>

                  {/* Category */}
                  <p
                    className="
                      mb-3.5
                      text-[13px]
                      font-normal
                      text-[#F1F5F9]/80
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
                      opacity-100
                      lg:opacity-0
                      transition-opacity
                      duration-300
                      lg:group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        text-[13px]
                        font-medium
                        text-[#FFFFFF]
                      "
                    >
                      View Gallery
                    </span>

                    <Maximize2 className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}