import React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";

export default function GalleryModal({
  selectedEvent,
  setSelectedEvent,
  selectedMediaIndex,
  setSelectedMediaIndex,
}) {
  return (
    <>
      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-[#102A56]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="
                relative
                w-full
                max-w-6xl
                overflow-hidden
                rounded-2xl
                border border-[#0F172A]/10
                bg-[#FFFFFF]
                shadow-2xl
                max-h-[90vh]
                flex
                flex-col
              " role="dialog" aria-modal="true" aria-label="Gallery Modal"
            >
              {/* Header */}
              <div
                className="
                  sticky
                  top-0
                  z-20
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#0F172A]/10
                  bg-[#FFFFFF]
                  px-6
                  py-5
                  md:px-8
                "
              >
                <div>
                  <h2
                    className="
                      heading-card
                      text-[20px]
                      md:text-[24px]
                      text-[#0F172A]
                    "
                  >
                    {selectedEvent.title}
                  </h2>

                  <div
                    className="
                      mt-1.5
                      flex
                      items-center
                      gap-2
                      text-[13px]
                      font-medium
                      text-[#0F172A]/70
                    "
                  >
                    <Calendar className="h-4 w-4 text-[#F97316]" aria-hidden="true" focusable="false" />
                    {selectedEvent.date}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Close gallery modal"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#0F172A]/15
                    bg-[#F1F5F9]
                    text-[#102A56]
                    transition-colors
                    hover:bg-[#102A56]
                    hover:text-[#FFFFFF]
                    cursor-pointer
                  "
                >
                  <X className="h-5 w-5" aria-hidden="true" focusable="false" />
                </button>
              </div>

              {/* Content */}
              <div
                className="
                  overflow-y-auto
                  p-6
                  md:p-8
                "
              >
                <div
                  className="
                    columns-1
                    gap-4
                    space-y-4
                    sm:columns-2
                    lg:columns-3
                  "
                >
                  {selectedEvent.media.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setSelectedMediaIndex(index)
                      }
                      className="
                        group
                        relative
                        cursor-pointer
                        overflow-hidden
                        rounded-2xl
                        border border-[#0F172A]/10
                        break-inside-avoid
                      "
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.url}
                          alt="Event"
                          className="
                            w-full
                            h-auto
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      ) : (
                        <div className="relative">
                          <video
                            src={item.url}
                            poster={selectedEvent.coverImage}
                            className="w-full h-auto object-cover"
                          />

                          <div
                            className="
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <div
                              className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#2563EB]/95
                                text-[#FFFFFF]
                                shadow-md
                              "
                            >
                              <Play className="h-5 w-5 ml-0.5" aria-hidden="true" focusable="false" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedEvent &&
          selectedMediaIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                z-[110]
                bg-[#0F172A]/95
              "
            >
              <div
                className="
                  relative
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  group
                "
              >
                {/* Close */}
                <button
                  onClick={() =>
                    setSelectedMediaIndex(null)
                  }
                  aria-label="Close lightbox"
                  className="
                    absolute
                    top-6
                    right-6
                    z-50
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#102A56]/80
                    border border-white/20
                    backdrop-blur-md
                    text-[#FFFFFF]
                    hover:bg-[#2563EB]
                    transition-colors
                    cursor-pointer
                  "
                >
                  <X className="h-5 w-5" aria-hidden="true" focusable="false" />
                </button>

                {/* Prev */}
                <button
                  onClick={() =>
                    setSelectedMediaIndex(
                      (prev) =>
                        (prev -
                          1 +
                          selectedEvent.media.length) %
                        selectedEvent.media.length
                    )
                  }
                  aria-label="Previous media"
                  className="
                    absolute
                    left-6
                    top-1/2
                    z-50
                    hidden
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#102A56]/80
                    border border-white/20
                    text-[#FFFFFF]
                    hover:bg-[#2563EB]
                    transition-colors
                    backdrop-blur-md
                    lg:flex
                    cursor-pointer
                  "
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" focusable="false" />
                </button>

                {/* Next */}
                <button
                  onClick={() =>
                    setSelectedMediaIndex(
                      (prev) =>
                        (prev + 1) %
                        selectedEvent.media.length
                    )
                  }
                  aria-label="Next media"
                  className="
                    absolute
                    right-6
                    top-1/2
                    z-50
                    hidden
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#102A56]/80
                    border border-white/20
                    text-[#FFFFFF]
                    hover:bg-[#2563EB]
                    transition-colors
                    backdrop-blur-md
                    lg:flex
                    cursor-pointer
                  "
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" focusable="false" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMediaIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                    }}
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                    "
                  >
                    {selectedEvent.media[
                      selectedMediaIndex
                    ].type === "image" ? (
                      <img
                        src={
                          selectedEvent.media[
                            selectedMediaIndex
                          ].url
                        }
                        alt="Gallery"
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    ) : (
                      <video
                        src={
                          selectedEvent.media[
                            selectedMediaIndex
                          ].url
                        }
                        controls
                        autoPlay
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}