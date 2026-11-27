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
          bg-[#102A56]
          py-16
          sm:py-20
          lg:py-24
          border-t
          border-white/10
        "
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              rounded-2xl
              border
              border-white/15
              bg-white/5
              p-8
              sm:p-12
              lg:p-14
              backdrop-blur-md
              shadow-xl
              text-center
            "
          >
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/20 bg-white/10 text-[#F1F5F9] text-[12px] sm:text-[13px] font-medium mb-5 shadow-xs select-none">
                <TrendingUp className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>Ready To Start</span>
              </div>

              {/* Heading */}
              <h2 className="heading-section mb-4 text-[#FFFFFF]">
                Ready To Grow{" "}
                <span className="text-[#F97316]">Your Business?</span>
              </h2>

              {/* Description */}
              <p className="body-large mb-8 max-w-xl text-[#F1F5F9]/85">
                From brand architecture and performance marketing to custom software systems,
                book a direct strategy session with our senior leadership team.
              </p>

              {/* Button */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-[10px]
                    bg-[#F97316]
                    hover:bg-[#2563EB]
                    px-6
                    py-3.5
                    text-[14px]
                    sm:text-[15px]
                    font-medium
                    text-[#FFFFFF]
                    transition-colors
                    duration-200
                    cursor-pointer
                    shadow-md
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#FFFFFF]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#102A56]
                  "
                >
                  <Calendar className="w-4 h-4 text-[#FFFFFF] shrink-0" />
                  <span>Appointment Booking Form</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFFFF] shrink-0" />
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