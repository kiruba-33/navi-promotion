import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

import { aboutContentData } from "../../../data/about";

export default function AboutContent() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-8 shadow-sm select-none">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>{aboutContentData.badge}</span>
            </div>

            {/* Heading */}
            <h2
              className="
                heading-section
                text-4xl
                sm:text-5xl
                lg:text-6xl
                heading-primary
                mb-8
              "
            >
              {aboutContentData.title.lineOne}

              <br />

              <span className="heading-highlight">
                {aboutContentData.title.highlight}
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                text-base
                sm:text-lg
                lg:text-xl
                text-slate-600
                leading-relaxed
                max-w-2xl
              "
            >
              {aboutContentData.description}
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-3
              "
            >
              <img
                src={aboutContentData.image}
                alt="About Navi Promotions"
                className="
                  w-full
                  h-[320px]
                  sm:h-[420px]
                  lg:h-[520px]
                  object-cover
                  rounded-[1.5rem]
                "
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          className="
            mt-16
            sm:mt-20
            lg:mt-24
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            lg:gap-6
          "
        >
          {aboutContentData.stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                p-6
                lg:p-8
                text-center
              "
            >
              <h3
                className="
                  heading-card
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  text-brand-orange
                  mb-3
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate-600
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}