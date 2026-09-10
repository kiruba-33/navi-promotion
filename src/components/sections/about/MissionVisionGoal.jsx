import React from "react";
import { motion } from "motion/react";
import { Target } from "lucide-react";

import { missionVisionGoalData } from "../../../data/about";

export default function MissionVisionGoal() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none"
              >
                <Target className="w-4 h-4 text-orange-500" />
                <span>Mission, Vision, Goal</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="
                  heading-section
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  heading-primary
                  mb-6
                "
              >
                Core
                <br />

                <span className="heading-highlight">
                  Principle
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="
                  body-large
                  text-slate-600
                  max-w-md
                "
              >
                The foundational pillars that guide our
                decisions, shape our culture, and drive our
                commitment to excellence.
              </motion.p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-10 lg:gap-16">
            {missionVisionGoalData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  relative
                  glass
                  border
                  border-slate-200
                  rounded-[2rem]
                  p-8
                  md:p-12
                  overflow-hidden
                  group
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* Background Number */}
                <span
                  className="
                    absolute
                    -top-8
                    -right-4
                    text-[120px]
                    md:text-[150px]
                    font-black
                    text-slate-900/5
                    leading-none
                    select-none
                  "
                >
                  {item.id}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`
                      w-16
                      h-16
                      rounded-2xl
                      glass
                      border
                      border-slate-200
                      flex
                      items-center
                      justify-center
                      mb-8
                      ${item.color}
                    `}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      heading-card
                      text-3xl
                      sm:text-4xl
                      text-slate-900
                      mb-6
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      body-large
                      text-slate-600
                      max-w-2xl
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
