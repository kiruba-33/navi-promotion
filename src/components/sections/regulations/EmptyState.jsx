import React from "react";
import { Search } from "lucide-react";

export default function EmptyState({
  setSearchQuery,
  setActiveCategory,
}) {
  return (
    <section
      className="
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-2xl
          text-center
          px-5
        "
      >
        <div
          className="
            mx-auto
            mb-8
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-slate-100
          "
        >
          <Search
            className="
              h-8
              w-8
              text-orange-500
            "
           aria-hidden="true" focusable="false" />
        </div>

        <h2
          className="
            heading-section
            mb-4
            text-3xl
            sm:text-4xl
            text-slate-900
          "
        >
          No Documents Found
        </h2>

        <p
          className="
            body-large
            mb-10
            text-slate-500
          "
        >
          Try adjusting your search keywords
          or category filters.
        </p>

        <button
          onClick={() => {
            setSearchQuery("");
            setActiveCategory("all");
          }}
          className="
            rounded-2xl
            bg-slate-900
            px-8
            py-4
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-white
            transition-all
            hover:bg-orange-500
            hover:text-slate-900
          "
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}