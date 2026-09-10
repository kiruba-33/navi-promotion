import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Globe,
  MapPin,
  X,
  Info,
  Zap,
} from "lucide-react";

import {
  locationsData,
} from "../../../data/about";

export default function GlobalFootprint() {
  const [selectedLoc, setSelectedLoc] = useState(null);

  return (
    <section
      id="global-footprint"
      className="
        relative
        overflow-hidden
        border-y
        border-slate-200
        
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-8 shadow-sm select-none">
              <Globe className="w-4 h-4 text-orange-500" />
              <span>Global Presence</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                heading-display
                text-5xl
                sm:text-6xl
                md:text-7xl
                heading-primary
                mb-10
              "
            >
              Bridging
              <br />

              <span className="heading-highlight">
                Market Borders
              </span>
            </motion.h2>

            <p
              className="
                body-large
                max-w-md
                text-slate-600
                mb-12
              "
            >
              From our roots in Tamil Nadu to the global
              stage of Singapore, we've expanded our reach
              to serve ambitious brands across continents.
            </p>

            <div className="space-y-5">
              {locationsData.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  className={`
                    w-full
                    rounded-[1.75rem]
                    border
                    p-6
                    text-left
                    transition-all
                    duration-300

                    ${
                      selectedLoc?.id === loc.id
                        ? "bg-slate-900 border-slate-900 shadow-xl"
                        : "bg-white border-slate-200 hover:border-brand-orange/40"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full

                          ${
                            selectedLoc?.id === loc.id
                              ? "bg-brand-orange text-slate-900"
                              : "bg-slate-100 text-slate-500"
                          }
                        `}
                      >
                        <MapPin className="h-5 w-5"  aria-hidden="true" focusable="false" />
                      </div>

                      <div>
                        <h4
                          className={`
                            font-bold

                            ${
                              selectedLoc?.id === loc.id
                                ? "text-white"
                                : "text-slate-900"
                            }
                          `}
                        >
                          {loc.city}, {loc.country}
                        </h4>

                        <p
                          className={`
                            mt-1
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]

                            ${
                              selectedLoc?.id === loc.id
                                ? "text-brand-orange"
                                : "text-slate-500"
                            }
                          `}
                        >
                          {loc.type}
                        </p>
                      </div>
                    </div>

                    {selectedLoc?.id === loc.id && (
                      <Zap className="h-4 w-4 text-brand-orange animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[3rem]
                border
                border-slate-200
                bg-white
                p-8
                sm:p-12
                shadow-xl
              "
            >
              {/* Dot Grid */}
              <div className="absolute inset-0 opacity-[0.03]">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                >
                  <pattern
                    id="dot-map"
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="1"
                      cy="1"
                      r="0.5"
                      fill="black"
                    />
                  </pattern>

                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#dot-map)"
                  />
                </svg>
              </div>

              <div className="relative h-full w-full">
                {/* Connection */}
                <svg
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    pointer-events-none
                    z-10
                  "
                  viewBox="0 0 100 100"
                >
                  <motion.path
                    d="M72 58 Q75 63 78 68"
                    fill="none"
                    stroke="#F7A800"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                      opacity: 0.3,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                  />
                </svg>

                {/* Nodes */}
                {locationsData.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    style={{
                      left: loc.coordinates.x,
                      top: loc.coordinates.y,
                    }}
                    className="
                      absolute
                      z-20
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <div
                      className={`
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          selectedLoc?.id === loc.id
                            ? "h-4 w-4 bg-brand-orange ring-4 ring-brand-orange/20"
                            : "h-3 w-3 bg-slate-400"
                        }
                      `}
                    />
                  </button>
                ))}

                {/* Center Globe */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-[0.03]
                  "
                >
                  <Globe className="h-64 w-64 text-slate-900" />
                </div>
              </div>

              {/* Details */}
              <AnimatePresence mode="wait">
                {selectedLoc && (
                  <motion.div
                    key={selectedLoc.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    className="
                      absolute
                      bottom-8
                      left-8
                      right-8
                      rounded-[2rem]
                      bg-slate-900
                      p-8
                      text-white
                    "
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <h4
                          className="
                            heading-card
                            text-2xl
                            text-white
                            mb-1
                          "
                        >
                          {selectedLoc.city}
                        </h4>

                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-brand-orange
                          "
                        >
                          {selectedLoc.country}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setSelectedLoc(null)
                        }
                        className="text-white/50 hover:text-white"
                      >
                        <X className="h-5 w-5"  aria-hidden="true" focusable="false" />
                      </button>
                    </div>

                    <p
                      className="
                        body-normal
                        text-slate-300
                        mb-8
                      "
                    >
                      {selectedLoc.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          p-4
                        "
                      >
                        <p className="heading-card text-xl text-white">
                          {selectedLoc.stats.clients}
                        </p>

                        <p
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          Active Clients
                        </p>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          p-4
                        "
                      >
                        <p className="heading-card text-xl text-brand-orange">
                          {selectedLoc.stats.team}
                        </p>

                        <p
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          Growth Experts
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Hint */}
            <div
              className="
                absolute
                -bottom-6
                left-1/2
                flex
                -translate-x-1/2
                items-center
                gap-2
                rounded-full
                bg-slate-900
                px-4
                py-2
                shadow-xl
              "
            >
              <Info className="h-3 w-3 text-brand-orange" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                "
              >
                Select nodes to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}