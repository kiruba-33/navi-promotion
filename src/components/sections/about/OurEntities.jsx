import React from "react";
import { motion } from "motion/react";

import {
  Building2,
  ArrowRight,
} from "lucide-react";

import {
  entitiesData,
} from "../../../data/about";

export default function OurEntities() {
  return (
    <section
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
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-full
          max-w-3xl
          -translate-x-1/2
          rounded-full
          bg-slate-50/20
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none"
          >
            <Building2 className="w-4 h-4 text-orange-500" />
            <span>Our Entities</span>
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
            Our{" "}
            <span className="heading-highlight">
              Network
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
            "
          >
            A diverse ecosystem of specialized companies
            working together to deliver comprehensive
            solutions across industries.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {entitiesData.map((entity) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={entity.image}
                  alt={entity.name}
                  className="
                    h-full
                    w-full
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
                    from-black/60
                    via-black/20
                    to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div
                  className={`
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${entity.color}
                  `}
                >
                  <entity.icon className="h-7 w-7 text-white" />
                </div>

                <h3
                  className="
                    heading-card
                    text-2xl
                    text-slate-900
                    mb-4
                  "
                >
                  {entity.name}
                </h3>

                <p
                  className="
                    body-normal
                    text-slate-600
                    mb-8
                  "
                >
                  {entity.description}
                </p>

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-brand-orange
                    transition-colors
                    hover:text-slate-900
                  "
                >
                  Explore Entity

                  <ArrowRight className="h-4 w-4"  aria-hidden="true" focusable="false" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}