import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Flame, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { useHeroScrollAnimation } from "../hooks/useHeroScrollAnimation";
import { journalEntries, categories } from "../data/growthJournalData";

export default function GrowthJournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation();

  const filteredEntries = journalEntries.filter((entry) => {
    const matchesFilter =
      activeCategory === "All" || entry.type === activeCategory;
    const matchesSearch =
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.tags &&
        entry.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F1F5F9] selection:bg-[#2563EB] selection:text-white overflow-hidden">
      <Helmet>
        <title>Growth Journal | Navi Promotions - Execution Insights</title>
        <meta
          name="description"
          content="Read Navi Promotions' Growth Journal for real-world execution data, performance strategies, and marketing experiments."
        />
      </Helmet>

      {/* =========================================================
          1. HERO SECTION (Normalized Height & Spacing)
         ========================================================= */}
      <section
        ref={containerRef}
        className="
          relative
          h-[56vh]
          min-h-[460px]
          max-h-[600px]
          w-full
          overflow-hidden
          border-b
          border-white/15
          bg-[#0F172A]
          flex
          items-center
          justify-center
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ scale: scaleImage }}
            src="/images/hero/abouthero2.webp"
            alt="Growth Journal Background"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />

          {/* Subtle Neutral Overlay */}
          <div className="absolute inset-0 bg-black/18" />

          {/* Balanced Center Vignette */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/25
              via-black/38
              to-black/30
            "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            style={{
              y: yText,
              opacity: opacityHero,
            }}
          >
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/25
                bg-black/35
                backdrop-blur-md
                px-4
                py-1.5
              "
            >
              <Flame className="h-4 w-4 text-[#F97316]" />
              <span
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-white
                "
              >
                Growth Lab
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                heading-display
                mb-5
                text-[clamp(2rem,3.6vw,3.125rem)]
                leading-[1.12]
                font-semibold
                text-white
                tracking-[-0.025em]
              "
            >
              Real World Execution
            </h1>

            {/* Description */}
            <p
              className="
                body-large
                mx-auto
                max-w-3xl
                text-[15px]
                sm:text-[17px]
                leading-[1.65]
                text-[#F1F5F9]/90
              "
            >
              Documenting our experiments, data points, and strategic pivots. No
              fluff—just practical experience from the frontlines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          2. SEARCH BAR (Floating Clean Layout Consistent With Blog)
         ========================================================= */}
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
          mb-8
          sm:mb-10
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
          <div className="relative flex items-center">
            <Search
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-5
                h-5
                text-[#2563EB]
                pointer-events-none
              "
              aria-hidden="true"
              focusable="false"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search experiments, metrics, or insights..."
              className="
                w-full
                h-12
                sm:h-14
                rounded-[10px]
                bg-[#F1F5F9]
                border
                border-transparent
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#2563EB]/25
                focus-visible:border-[#2563EB]
                focus:bg-white
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

      {/* =========================================================
          3. CATEGORIES & JOURNAL LISTING (Consistent With Blog Grid)
         ========================================================= */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          pb-20
          sm:pb-24
          lg:pb-28
          relative
          z-10
        "
      >
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4
                py-2.5
                sm:px-5
                sm:py-2.5
                rounded-[10px]
                text-[13px]
                font-medium
                transition-all
                duration-200
                cursor-pointer
                ${
                  activeCategory === category
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-white text-[#102A56] border border-slate-200 hover:border-[#2563EB]/40"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Journal Entries Grid (Consistent Card Structure with Blog) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          {filteredEntries.map((entry, index) => {
            const isFirst = index === 0 && activeCategory === "All" && !searchQuery;

            return (
              <article
                key={entry.id}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200/80
                  hover:border-[#2563EB]/40
                  p-3.5
                  sm:p-4
                  shadow-xs
                  hover:shadow-md
                  transition-all
                  duration-300
                  ${isFirst ? "md:col-span-2" : ""}
                `}
              >
                  <Link
                    to={`/growth-journal/${entry.id}`}
                    className="flex flex-col h-full"
                  >
                    {/* Top Image Container */}
                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-xl
                        bg-[#F1F5F9]
                        mb-5
                        shadow-sm
                        ${isFirst ? "aspect-[21/9]" : "aspect-[16/10]"}
                      `}
                    >
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-[1.03]
                        "
                      />

                      {/* Dark Overlay Gradient */}
                      <div className="absolute inset-0 bg-[#102A56]/20 group-hover:bg-[#102A56]/10 transition-colors duration-500" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="
                            px-3
                            py-1.5
                            bg-white/95
                            backdrop-blur-md
                            rounded-lg
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-wider
                            text-[#102A56]
                            shadow-md
                          "
                        >
                          {entry.type}
                        </span>
                      </div>

                      {/* Read Story Hover Button */}
                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                          bg-[#102A56]/25
                        "
                      >
                        <div
                          className="
                            px-5
                            py-2.5
                            rounded-[10px]
                            bg-[#2563EB]
                            text-white
                            flex
                            items-center
                            justify-center
                            font-medium
                            text-[13px]
                            shadow-xl
                          "
                        >
                          Read Log
                        </div>
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="flex-1 flex flex-col justify-between px-2 sm:px-3 pb-2">
                      <div>
                        {/* Metadata Row: Date • Reading Time */}
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            text-[#0F172A]/55
                            mb-3
                            text-[12px]
                            font-medium
                          "
                        >
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                            <span>{entry.date}</span>
                          </div>

                          <span className="w-1 h-1 rounded-full bg-slate-300" />

                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                            <span>{entry.readingTime}</span>
                          </div>
                        </div>

                        {/* Verified Metrics Highlight Badge */}
                        {entry.metrics && entry.metrics.length > 0 && (
                          <div className="mb-3.5 flex flex-wrap gap-2">
                            {entry.metrics.map((m) => (
                              <span
                                key={m.label}
                                className="
                                  inline-flex
                                  items-center
                                  gap-1.5
                                  px-3
                                  py-1
                                  rounded-lg
                                  bg-[#F1F5F9]
                                  border
                                  border-[#2563EB]/20
                                  text-xs
                                  font-medium
                                "
                              >
                                <span className="font-semibold text-[13px] text-[#102A56]">
                                  {m.value}
                                </span>
                                <span className="text-[11px] text-[#0F172A]/65">
                                  {m.label}
                                </span>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2
                          className={`
                            heading-card
                            text-[#0F172A]
                            font-semibold
                            tracking-[-0.02em]
                            transition-colors
                            duration-300
                            group-hover:text-[#2563EB]
                            mb-3
                            leading-[1.25]
                            ${
                              isFirst
                                ? "text-[clamp(1.5rem,2.4vw,2rem)]"
                                : "text-[20px]"
                            }
                          `}
                        >
                          {entry.title}
                        </h2>

                        {/* Summary / Excerpt */}
                        <p
                          className={`
                            text-[#0F172A]/75
                            font-normal
                            leading-[1.6]
                            mb-5
                            ${isFirst ? "text-[16px] sm:text-[17px] max-w-3xl" : "text-[14px] sm:text-[15px]"}
                          `}
                        >
                          {entry.summary}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          pt-4
                          border-t
                          border-slate-200/70
                          mt-auto
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="
                              w-7
                              h-7
                              rounded-lg
                              bg-[#F1F5F9]
                              border
                              border-[#2563EB]/20
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Flame className="w-3.5 h-3.5 text-[#F97316]" />
                          </div>

                          <span
                            className="
                              text-[12px]
                              font-medium
                              text-[#102A56]
                            "
                          >
                            Navi Growth Lab
                          </span>
                        </div>

                        <div
                          className="
                            w-9
                            h-9
                            rounded-lg
                            bg-[#F1F5F9]
                            group-hover:bg-[#2563EB]
                            text-[#102A56]
                            group-hover:text-white
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                          "
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white rounded-2xl border border-slate-200 p-10">
            <h3 className="heading-card text-2xl text-[#0F172A] font-semibold mb-2">
              No Journal Entries Found
            </h3>
            <p className="body-normal text-[#0F172A]/70">
              No experiments matched your search query. Try searching for
              another metric or topic.
            </p>
          </div>
        )}
      </section>

      {/* Global CTA */}
      <CTA />
    </main>
  );
}