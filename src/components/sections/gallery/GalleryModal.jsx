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
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
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
                rounded-[2rem]
                bg-white
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
                  border-slate-200
                  bg-white
                  px-6
                  py-5
                  md:px-8
                "
              >
                <div>
                  <h2
                    className="
                      heading-section
                      text-2xl
                      md:text-3xl
                      text-slate-900
                    "
                  >
                    {selectedEvent.title}
                  </h2>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-slate-600
                    "
                  >
                    <Calendar className="h-4 w-4"  aria-hidden="true" focusable="false" />
                    {selectedEvent.date}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    transition-colors
                    hover:bg-slate-100
                  "
                >
                  <X className="h-5 w-5"  aria-hidden="true" focusable="false" />
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
                        rounded-3xl
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
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-white/90
                                backdrop-blur-md
                              "
                            >
                              <Play className="h-5 w-5 ml-1"  aria-hidden="true" focusable="false" />
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
                bg-black
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
                  className="
                    absolute
                    top-6
                    right-6
                    z-50
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    text-white
                  "
                >
                  <X className="h-6 w-6"  aria-hidden="true" focusable="false" />
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
                  className="
                    absolute
                    left-6
                    top-1/2
                    z-50
                    hidden
                    h-14
                    w-14
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    lg:flex
                  "
                >
                  <ChevronLeft className="h-8 w-8"  aria-hidden="true" focusable="false" />
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
                  className="
                    absolute
                    right-6
                    top-1/2
                    z-50
                    hidden
                    h-14
                    w-14
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    lg:flex
                  "
                >
                  <ChevronRight className="h-8 w-8"  aria-hidden="true" focusable="false" />
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