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
          p-4
          rounded-[2rem]
          lg:rounded-[2.5rem]
          shadow-xl
          border
          border-slate-200
        "
      >
        <div className="relative">

          <Search
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              w-5
              h-5
              text-slate-400
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
              h-14
              sm:h-16
              rounded-2xl
              bg-slate-50
              border-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
              pl-14
              pr-5
              text-sm
              sm:text-base
              font-semibold
              text-slate-900
              placeholder:text-slate-400
              focus:ring-2
              focus:ring-orange-500/20
              transition-all
            "
          />

        </div>
      </div>
    </section>
  );
}