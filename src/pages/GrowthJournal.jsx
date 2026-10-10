import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Search, ArrowUpRight, Flame, Calendar, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { journalEntries, categories } from "../data/growthJournalData";

export default function GrowthJournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
    <main className="min-h-screen bg-slate-50 selection:bg-brand-orange selection:text-white overflow-hidden">
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
          border-slate-800
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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Cinematic Fade */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-black/20
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
                mb-6
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/15
                bg-white/10
                backdrop-blur-md
                px-4
                py-2
              "
            >
              <Flame className="h-4 w-4 text-brand-orange" />
              <span
                className="
                  text-[11px]
                  sm:text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
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
                mb-6
                text-3xl
                xs:text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                uppercase
                text-white
                tracking-tight
                drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]
              "
            >
              REAL WORLD EXECUTION
            </h1>

            {/* Description */}
            <p
              className="
                body-large
                mx-auto
                max-w-3xl
                text-white/90
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]
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
            p-3
            sm:p-3.5
            rounded-[2rem]
            shadow-xl
            border
            border-slate-200/80
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
                h-13
                sm:h-14
                rounded-2xl
                bg-slate-50
                border-none
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-orange
                pl-13
                pr-5
                text-sm
                font-medium
                text-slate-900
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
        {/* Category Filter Pills (Consistent styling with Blog Categories) */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5
                py-2.5
                sm:px-6
                sm:py-3
                rounded-2xl
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-wider
                transition-all
                duration-300
                cursor-pointer
                ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15 scale-105"
                    : "bg-white text-slate-500 border border-slate-200/70 hover:text-slate-900 hover:border-slate-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Journal Entries Grid (Consistent Card Structure with Blog) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredEntries.map((entry, index) => {
              const isFirst = index === 0 && activeCategory === "All" && !searchQuery;

              return (
                <motion.article
                  key={entry.id}
                  layout
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    bg-white
                    rounded-[2rem]
                    sm:rounded-[2.5rem]
                    border
                    border-slate-200/80
                    p-3.5
                    sm:p-4
                    shadow-sm
                    hover:shadow-2xl
                    hover:shadow-slate-200/60
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
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
                        rounded-[1.6rem]
                        sm:rounded-[2rem]
                        bg-slate-100
                        mb-6
                        shadow-md
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
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Dark Overlay Gradient */}
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="
                            px-3.5
                            py-1.5
                            bg-white/95
                            backdrop-blur-md
                            rounded-full
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wider
                            text-slate-900
                            shadow-md
                            border
                            border-white/30
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
                          scale-90
                          group-hover:opacity-100
                          group-hover:scale-100
                          transition-all
                          duration-400
                          bg-slate-950/25
                        "
                      >
                        <div
                          className="
                            w-20
                            h-20
                            rounded-full
                            bg-brand-orange
                            text-white
                            flex
                            items-center
                            justify-center
                            font-semibold
                            uppercase
                            tracking-wider
                            text-[11px]
                            shadow-2xl
                            shadow-brand-orange/40
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
                            text-slate-400
                            mb-3
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-wider
                          "
                        >
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                            <span>{entry.date}</span>
                          </div>

                          <span className="w-1 h-1 rounded-full bg-slate-300" />

                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
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
                                  rounded-full
                                  bg-brand-orange/10
                                  border
                                  border-brand-orange/25
                                  text-brand-orange
                                  text-xs
                                  font-bold
                                "
                              >
                                <span className="font-bold text-sm text-slate-900">
                                  {m.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-slate-600">
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
                            text-slate-900
                            tracking-tight
                            transition-colors
                            duration-300
                            group-hover:text-brand-orange
                            mb-3
                            leading-snug
                            ${
                              isFirst
                                ? "text-2xl sm:text-3xl md:text-4xl"
                                : "text-xl sm:text-2xl"
                            }
                          `}
                        >
                          {entry.title}
                        </h2>

                        {/* Summary / Excerpt */}
                        <p
                          className={`
                            text-slate-600
                            font-normal
                            leading-relaxed
                            mb-6
                            ${isFirst ? "text-base sm:text-lg max-w-3xl" : "text-sm"}
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
                          pt-5
                          border-t
                          border-slate-100
                          mt-auto
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="
                              w-7
                              h-7
                              rounded-full
                              bg-brand-orange/10
                              border
                              border-brand-orange/20
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Flame className="w-3.5 h-3.5 text-brand-orange" />
                          </div>

                          <span
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-wider
                              text-slate-700
                            "
                          >
                            Navi Growth Lab
                          </span>
                        </div>

                        <div
                          className="
                            w-9
                            h-9
                            rounded-full
                            bg-slate-100
                            group-hover:bg-brand-orange
                            text-slate-500
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
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white rounded-3xl border border-slate-200 p-10">
            <h3 className="heading-card text-2xl heading-primary mb-2">
              No Journal Entries Found
            </h3>
            <p className="body-normal text-slate-500">
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