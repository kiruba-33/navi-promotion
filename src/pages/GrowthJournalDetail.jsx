import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Zap,
  Target,
  Activity,
  Flame,
  CheckCircle2,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import CTA from "../components/CTA";
import { journalEntries } from "../data/growthJournalData";
import BookStrategyModal from "../components/ui/BookStrategyModal";

export default function GrowthJournalDetailPage() {
  const { id } = useParams();
  const entry = journalEntries.find((e) => e.id === id);
  const [copied, setCopied] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Other entries for Related Experiments
  const otherEntries = journalEntries
    .filter((e) => e.id !== id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!entry) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-sm max-w-md">
          <h1 className="heading-display text-2xl sm:text-3xl text-slate-900 mb-3">
            Entry Not Found
          </h1>
          <p className="body-normal text-slate-500 mb-6">
            The growth journal log you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/growth-journal"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-orange transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Journal</span>
          </Link>
        </div>
      </main>
    );
  }

  // Parse markdown into clean structured blocks
  const parseMarkdownContent = (rawContent) => {
    if (!rawContent) return [];
    const lines = rawContent.split("\n");
    const blocks = [];
    let currentParagraph = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          blocks.push({ type: "p", content: text });
        }
        currentParagraph = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        flushParagraph();
        continue;
      }

      if (line.startsWith("### ")) {
        flushParagraph();
        blocks.push({ type: "h3", content: line.replace("### ", "").trim() });
      } else if (line.startsWith("## ")) {
        flushParagraph();
        blocks.push({ type: "h2", content: line.replace("## ", "").trim() });
      } else if (line.startsWith("# ")) {
        flushParagraph();
        blocks.push({ type: "h1", content: line.replace("# ", "").trim() });
      } else if (/^\d+\.\s/.test(line)) {
        flushParagraph();
        blocks.push({
          type: "numbered",
          number: line.match(/^(\d+)\./)[1],
          content: line.replace(/^\d+\.\s*/, "").trim(),
        });
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        flushParagraph();
        blocks.push({
          type: "bullet",
          content: line.replace(/^[-*]\s*/, "").trim(),
        });
      } else {
        currentParagraph.push(line);
      }
    }
    flushParagraph();
    return blocks;
  };

  const contentBlocks = parseMarkdownContent(entry.content);

  const formatInline = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-brand-orange selection:text-white font-sans">
      <Helmet>
        <title>{entry.title} | Navi Growth Journal</title>
        <meta name="description" content={entry.summary} />
      </Helmet>

      {/* =========================================================
          1. HEADER & ARTICLE HERO
         ========================================================= */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/growth-journal"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-slate-100
                hover:bg-slate-200/80
                text-slate-600
                hover:text-slate-900
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                transition-all
              "
            >
              <ArrowLeft size={14} />
              <span>Back to Growth Journal</span>
            </Link>
          </div>

          {/* Badges & Meta Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-brand-orange/15
                border
                border-brand-orange/30
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-brand-orange
              "
            >
              <Flame size={13} />
              {entry.type}
            </span>

            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
              <Calendar size={14} className="text-brand-orange" />
              <span>{entry.date}</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
              <Clock size={14} className="text-slate-400" />
              <span>{entry.readingTime}</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
              Verified Data
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              heading-display
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-slate-900
              leading-tight
              tracking-tight
              mb-8
              max-w-5xl
            "
          >
            {entry.title}
          </h1>

          {/* Verified Metrics Highlight Bar */}
          {entry.metrics && entry.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              {entry.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-200/80
                    p-4
                    pr-6
                    shadow-xs
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                    <Activity size={22} />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 block leading-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          2. FEATURED HERO IMAGE PRESENTATION
         ========================================================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            sm:rounded-[2.5rem]
            shadow-2xl
            border
            border-slate-200
            aspect-[21/9]
            sm:h-[440px]
            lg:h-[500px]
            bg-slate-900
          "
        >
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Image Tagline */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white z-10 max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-orange bg-black/60 px-3 py-1 rounded-full backdrop-blur-md mb-2 inline-block">
              Case Experiment
            </span>
            <p className="text-sm sm:text-base font-semibold text-white/90 drop-shadow-md">
              {entry.summary}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. EDITORIAL 2-COLUMN ARTICLE LAYOUT
         ========================================================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main Article Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Executive Summary Blockquote */}
            <div className="rounded-2xl bg-amber-50/70 border-l-4 border-brand-orange p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange block mb-2">
                Executive Hypothesis & Problem Statement
              </span>
              <p className="text-base sm:text-xl font-semibold text-slate-800 leading-relaxed italic">
                "{entry.summary}"
              </p>
            </div>

            {/* Rendered Structured Article Content */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {contentBlocks.map((block, idx) => {
                if (block.type === "h3" || block.type === "h2") {
                  return (
                    <div key={idx} className="pt-6 sm:pt-8 first:pt-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                        <h2 className="heading-section text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                          {block.content}
                        </h2>
                      </div>
                    </div>
                  );
                }

                if (block.type === "numbered") {
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white text-xs font-bold">
                        {block.number}
                      </span>
                      <p
                        className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium"
                        dangerouslySetInnerHTML={{
                          __html: formatInline(block.content),
                        }}
                      />
                    </div>
                  );
                }

                if (block.type === "bullet") {
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 pl-2 sm:pl-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-brand-orange shrink-0 mt-1"
                      />
                      <p
                        className="text-sm sm:text-base text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: formatInline(block.content),
                        }}
                      />
                    </div>
                  );
                }

                return (
                  <p
                    key={idx}
                    className="text-base sm:text-lg leading-[1.8] text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: formatInline(block.content),
                    }}
                  />
                );
              })}
            </div>

            {/* Tags Strip */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="pt-8 sm:pt-10 border-t border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Experiment Taxonomy
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-slate-700
                        shadow-xs
                      "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Conversion Card */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 mt-10 relative overflow-hidden">
              <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-brand-orange/20 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Actionable Strategy
                </span>
                <h3 className="heading-section text-xl sm:text-2xl font-bold text-white">
                  Want to apply this strategy to your brand?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Our growth strategists help businesses evaluate performance
                  gaps and engineer high-converting digital campaigns.
                </p>
                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-brand-orange
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    shadow-lg
                    shadow-brand-orange/30
                    transition-all
                    cursor-pointer
                  "
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* The Lab Protocol */}
            <div className="rounded-[2rem] bg-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <Zap className="absolute -bottom-6 -right-6 w-32 h-32 text-brand-orange/10" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-brand-orange" />
                  <h3 className="text-lg font-semibold text-white">
                    The Lab Protocol
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Every log published here is derived from live client
                  engagements, internal data pipelines, and verified attribution
                  metrics.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Activity size={14} />
                    </div>
                    <span className="font-semibold">Live Data Auditing</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Target size={14} />
                    </div>
                    <span className="font-semibold">ROAS & Conversion Focused</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-semibold">Verified Execution Notes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share & Actions */}
            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Share Experiment
              </h4>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="
                    flex-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    rounded-xl
                    bg-slate-100
                    hover:bg-brand-orange
                    text-slate-700
                    hover:text-white
                    text-xs
                    font-bold
                    transition-colors
                    cursor-pointer
                  "
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-500" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Other Experiments / Related Entries */}
            {otherEntries.length > 0 && (
              <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Related Experiments
                </h4>
                <div className="space-y-4">
                  {otherEntries.map((other) => (
                    <Link
                      key={other.id}
                      to={`/growth-journal/${other.id}`}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <img
                        src={other.image}
                        alt={other.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-brand-orange uppercase block truncate">
                          {other.type}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                          {other.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Global CTA */}
      <CTA />

      {/* Strategy Modal */}
      <BookStrategyModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </main>
  );
}