import React from "react";
import { Search } from "lucide-react";

export default function BlogSearch({
  searchQuery,
  setSearchQuery,
}) {
  return (
    <section
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        lg:px-8
        -mt-8
        relative
        z-20
        mb-16
        sm:mb-20
        lg:mb-24
      "
    >
      <div
        className="
          max-w-2xl
          mx-auto
          bg-white
          p-3.5
          rounded-2xl
          shadow-lg
          border
          border-slate-200
        "
      >
        <div className="relative">

          <Search
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-5
              h-5
              text-[#2563EB]
            "
           aria-hidden="true" focusable="false" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            placeholder="Search articles, trends, insights..."
            className="
              w-full
              h-12
              sm:h-14
              rounded-[10px]
              bg-[#F1F5F9]
              border
              border-transparent
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/25 focus-visible:border-[#2563EB] focus:bg-white
              pl-12
              pr-5
              text-sm
              sm:text-[15px]
              font-medium
              text-[#0F172A]
              placeholder:text-slate-400
              transition-all
            "
          />

        </div>
      </div>
    </section>
  );
}