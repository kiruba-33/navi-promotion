import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Search, ArrowUpRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { journalEntries, categories } from '../data/growthJournalData';

export default function GrowthJournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const filteredEntries = journalEntries.filter(entry => {
    const matchesFilter = activeCategory === "All" || entry.type === activeCategory;
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         entry.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className=" min-h-screen selection:bg-brand-orange selection:text-slate-900 overflow-hidden">
      <Helmet>
        <title>Growth Journal | Navi Promotions - Execution Insights</title>
        <meta name="description" content="Read Navi Promotions' Growth Journal for real-world execution data, performance strategies, and marketing experiments." />
      </Helmet>
{/* HERO SECTION */}
<section
  ref={containerRef}
  className="
        relative
        h-[60vh]
        min-h-[560px]
        w-full
        overflow-hidden
        border-b
        border-slate-800
        flex
        items-center
        justify-center
      "
>
  {/* Background */}
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
    <div className="absolute inset-0 bg-black/60" />

    {/* Cinematic Fade */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/40
        via-transparent
        to-black/20
      "
    />
  </div>

  {/* Content */}
  <div
    className="
      relative
      z-10

      mx-auto
      w-full

      max-w-6xl

      px-5
      sm:px-6
      lg:px-8

      text-center
    "
  >
    <motion.div
      style={{
        y: yText,
        opacity: opacityHero,
      }}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Badge */}
      <div
        className="
          mb-6

          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-white/10

          bg-white/5
          backdrop-blur-md

          px-5
          py-2.5
        "
      >
        <Flame className="h-4 w-4 text-[#ffb300]" />

        <span
          className="
            text-[10px]
            sm:text-xs

            font-bold
            uppercase

            tracking-[0.2em]

            text-[#ffb300]
          "
        >
          Growth Lab
        </span>
      </div>

      {/* Heading */}
    <h2
  className="
    heading-section

    mb-6

    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-[54px]
    xl:text-6xl
    2xl:text-7xl

    text-white
    drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
  "
>
  REAL WORLD EXECUTION
</h2>

      {/* Description */}
      <p
        className="
          mx-auto
          max-w-3xl

          text-sm
          sm:text-base
          lg:text-lg

          text-white/90

          leading-relaxed
          drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
        "
      >
        Documenting our experiments, data points, and strategic pivots.
        No fluff—just practical experience from the frontlines.
      </p>
    </motion.div>
  </div>
</section>

      {/* 2. FILTER & GRID SECTION */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 relative group px-1 sm:px-0">
          <Search className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-brand-orange transition-colors" />
          <input 
            type="text" 
            placeholder="Search experiments, metrics, or insights..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 sm:h-16 bg-white border border-slate-900/5 rounded-2xl pl-12 sm:pl-14 pr-6 text-xs sm:text-sm font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-brand-orange/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange text-slate-900 shadow-xl shadow-slate-200/50"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105'
                  : 'bg-white text-slate-500 border border-slate-900/5 hover:border-slate-900/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Journal Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry) => (
              <motion.article
                key={entry.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[380px] sm:h-[420px] md:h-[450px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-slate-900/10 p-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200"
              >
                <Link to={`/growth-journal/${entry.id}`} className="block h-full">
                  <div className="relative w-full h-full rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden">
                    <img 
                      src={entry.image} 
                      alt={entry.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end z-20">
  <div
    className="
      translate-y-3
      group-hover:translate-y-0
      transition-all
      duration-500
      ease-out

      h-full
      flex
      flex-col
      justify-end
    "
  >
    <div className="flex items-start justify-between mb-5 min-h-[52px]">
      <span
        className="
          px-3
          py-1
          sm:px-4
          sm:py-1.5

          rounded-full

          bg-white/10
          backdrop-blur-md

          text-white

          text-[9px]
          sm:text-[10px]

          font-black
          uppercase

          tracking-widest

          border
          border-white/20
        "
      >
        {entry.type}
      </span>

      <div
        className="
          w-10
          h-10

          sm:w-12
          sm:h-12

          rounded-full

          bg-brand-orange

          text-white

          flex
          items-center
          justify-center

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500

          shrink-0

          shadow-lg
          shadow-brand-orange/30
        "
      >
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
    </div>

    <h3
      className="
        text-xl
        sm:text-2xl

        font-black

        text-white

        mb-4

        tracking-tight

        leading-[1.15]

        min-h-[72px]

        flex
        items-end

        group-hover:text-brand-orange

        transition-colors
        duration-300
      "
    >
      {entry.title}
    </h3>

    <div
      className="
        flex
        items-center
        justify-between

        opacity-0
        group-hover:opacity-100

        transition-all
        duration-500
        delay-100

        text-white
      "
    >
      <p
        className="
          text-white

          text-[9px]
          sm:text-[10px]

          font-black

          uppercase

          tracking-widest

          drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
        "
      >
        {entry.date} • {entry.readingTime}
      </p>

      <div className="flex gap-2 sm:gap-4">
        {entry.metrics.map((m) => (
          <React.Fragment key={m.label}>
            <span
              className="
                text-brand-orange

                font-black

                text-xs
                sm:text-sm

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
              "
            >
              {m.value} {m.label}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredEntries.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-slate-600 text-base sm:text-lg font-bold">No entries found matching your criteria.</p>
          </div>
        )}
        
      </section>

      <CTA />
    </main>
  );
}