import React from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";

export default function RegulationsFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  filters,
}) {
  return (
    <section
      className="
        relative
        -mt-16
        z-20
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-5
            shadow-xl
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
            "
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="
                  absolute
                  left-5
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-orange-500
                "
               aria-hidden="true" focusable="false" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search documents, policies or tags..."
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-12
                  pr-5
                  text-sm
                  font-medium
                  text-slate-900
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
                  transition-all
                  focus:border-orange-500
                  focus:bg-white
                "
              />
            </div>

            {/* Filters */}
            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() =>
                    setActiveCategory(filter.id)
                  }
                  className={`
                    rounded-2xl
                    px-5
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    transition-all
                    duration-300

                    ${
                      activeCategory === filter.id
                        ? `
                          bg-slate-900
                          text-white
                          shadow-lg
                        `
                        : `
                          border
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-slate-900
                          hover:text-slate-900
                        `
                    }
                  `}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}