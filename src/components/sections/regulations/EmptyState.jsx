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
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-[#FFFFFF]
            border border-[#0F172A]/10
          "
        >
          <Search
            className="
              h-7
              w-7
              text-[#2563EB]
            "
           aria-hidden="true" focusable="false" />
        </div>

        <h2
          className="
            heading-section
            mb-3
            text-[#0F172A]
          "
        >
          No Documents Found
        </h2>

        <p
          className="
            body-large
            mb-8
            text-[#0F172A]/75
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
            rounded-[10px]
            bg-[#2563EB]
            px-6
            py-3.5
            text-[14px]
            font-medium
            text-[#FFFFFF]
            transition-colors
            hover:bg-[#102A56]
            cursor-pointer
          "
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}