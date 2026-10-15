import React, { useState } from "react";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import AppointmentBookingModal from "../../ui/AppointmentBookingModal";

export default function LetsTalkCTA() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <>
      <section
        id="ready-to-start"
        className="
          relative
          overflow-hidden
          bg-slate-950
          py-20
          sm:py-24
          lg:py-28
          border-t
          border-slate-800
        "
      >
        {/* Subtle Warm Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_50%,rgba(247,168,0,0.12)_0%,transparent_60%)]
          "
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              rounded-[2.5rem]
              border
              border-white/15
              bg-white/[0.06]
              p-8
              sm:p-12
              lg:p-16
              backdrop-blur-md
              shadow-2xl
              text-center
            "
          >
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              {/* Clearly Visible Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-500/10 text-orange-300 text-xs sm:text-sm font-bold mb-6 shadow-xs select-none">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span>Ready To Start</span>
              </div>

              {/* Clearly Visible Heading */}
              <h2 className="heading-section mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                Ready To Grow
                <span className="block text-white">Your Business?</span>
              </h2>

              {/* High Contrast Description */}
              <p className="body-large mb-8 max-w-xl text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                From brand architecture and performance marketing to custom software systems,
                book a direct strategy session with our senior leadership team.
              </p>

              {/* Clearly Visible Button */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-orange-500
                    hover:bg-orange-600
                    px-8
                    py-4
                    sm:py-4.5
                    text-xs
                    sm:text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    duration-200
                    cursor-pointer
                    shadow-lg
                    shadow-orange-500/25
                    hover:shadow-orange-500/40
                    hover:-translate-y-0.5
                    active:scale-[0.98]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-orange-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-950
                  "
                >
                  <Calendar className="w-4 h-4 text-white shrink-0" />
                  <span>Appointment Booking Form</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Modal */}
      <AppointmentBookingModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}