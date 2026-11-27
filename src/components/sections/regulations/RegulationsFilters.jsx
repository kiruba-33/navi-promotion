import React from "react";
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
        <div
          className="
            rounded-2xl
            border
            border-[#0F172A]/10
            bg-[#FFFFFF]
            p-5
            shadow-lg
            shadow-[#102A56]/10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-center
            "
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-[#2563EB]
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
                  h-12
                  w-full
                  rounded-[10px]
                  border
                  border-[#0F172A]/15
                  bg-[#F1F5F9]
                  pl-11
                  pr-4
                  text-[14px]
                  font-normal
                  text-[#0F172A]
                  placeholder:text-[#0F172A]/45
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]
                  transition-all
                  focus:border-[#2563EB]
                  focus:bg-[#FFFFFF]
                "
              />
            </div>

            {/* Filters */}
            <div
              className="
                flex
                flex-wrap
                gap-2.5
              "
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() =>
                    setActiveCategory(filter.id)
                  }
                  className={`
                    rounded-[10px]
                    px-4
                    py-2.5
                    text-[13px]
                    font-medium
                    tracking-[0.02em]
                    transition-colors
                    duration-200
                    cursor-pointer
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]

                    ${
                      activeCategory === filter.id
                        ? "bg-[#2563EB] text-[#FFFFFF] shadow-xs"
                        : "border border-[#0F172A]/15 bg-[#FFFFFF] text-[#0F172A]/75 hover:border-[#2563EB] hover:text-[#2563EB]"
                    }
                  `}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}