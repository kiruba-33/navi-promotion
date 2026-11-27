import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

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
} from "lucide-react";

import CTA from "../components/CTA";
import { useHeroScrollAnimation } from "../hooks/useHeroScrollAnimation";
import { journalEntries } from "../data/growthJournalData";
import BookStrategyModal from "../components/ui/BookStrategyModal";

function JournalHeroSection({ entry }) {
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation({
    yDesktop: 140,
    yMobile: 60,
    fadeEnd: 0.75,
  });

  return (
    <>
      {/* =========================================================
          1. HEADER & ARTICLE HERO
         ========================================================= */}
      <section ref={containerRef} className="pt-28 pb-10 sm:pt-32 sm:pb-12 bg-white border-b border-slate-200/80 overflow-hidden">
        <motion.div style={{ y: yText, opacity: opacityHero }} className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/growth-journal"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[10px]
                bg-[#F1F5F9]
                hover:bg-[#102A56]
                text-[#102A56]
                hover:text-white
                px-4
                py-2
                text-[13px]
                font-medium
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
                rounded-lg
                bg-[#F1F5F9]
                border
                border-[#2563EB]/20
                px-3.5
                py-1.5
                text-[12px]
                font-medium
                uppercase
                tracking-wider
                text-[#2563EB]
              "
            >
              <Flame size={13} className="text-[#F97316]" />
              {entry.type}
            </span>

            <div className="flex items-center gap-2 text-[#0F172A]/65 text-xs font-medium">
              <Calendar size={14} className="text-[#F97316]" />
              <span>{entry.date}</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <div className="flex items-center gap-2 text-[#0F172A]/65 text-xs font-medium">
              <Clock size={14} className="text-[#2563EB]" />
              <span>{entry.readingTime}</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <span className="text-[11px] font-medium uppercase tracking-wider text-[#2563EB] bg-[#F1F5F9] px-2.5 py-1 rounded-md border border-[#2563EB]/20">
              Verified Data
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              heading-display
              text-[clamp(1.875rem,3.4vw,3rem)]
              font-semibold
              text-[#0F172A]
              leading-[1.15]
              tracking-[-0.025em]
              mb-8
              max-w-5xl
            "
          >
            {entry.title}
          </h1>

          {/* Verified Metrics Highlight Bar */}
          {entry.metrics && entry.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200/70">
              {entry.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-[#F1F5F9]
                    border
                    border-slate-200/80
                    p-4
                    pr-6
                    shadow-2xs
                  "
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#2563EB]/20 flex items-center justify-center text-[#F97316]">
                    <Activity size={20} />
                  </div>
                  <div>
                    <span className="text-[24px] sm:text-[28px] font-semibold text-[#102A56] block leading-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/65">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* =========================================================
          2. FEATURED HERO IMAGE PRESENTATION
         ========================================================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            shadow-xl
            border
            border-slate-200
            aspect-[21/9]
            sm:h-[440px]
            lg:h-[500px]
            bg-[#0F172A]
          "
        >
          <motion.img
            style={{ scale: scaleImage }}
            src={entry.image}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

          {/* Image Tagline */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white z-10 max-w-xl">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#F97316] bg-black/50 border border-white/20 px-3 py-1 rounded-lg backdrop-blur-md mb-2 inline-block">
              Case Experiment
            </span>
            <p className="text-sm sm:text-base font-medium text-[#F1F5F9] drop-shadow-md">
              {entry.summary}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

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
      <main className="min-h-screen flex items-center justify-center bg-[#F1F5F9] px-4">
        <div className="text-center bg-white p-10 rounded-2xl border border-slate-200 shadow-sm max-w-md">
          <h1 className="heading-display text-2xl sm:text-3xl text-[#0F172A] font-semibold mb-3">
            Entry Not Found
          </h1>
          <p className="body-normal text-[#0F172A]/70 mb-6">
            The growth journal log you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/growth-journal"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#2563EB] px-5 py-3 text-[14px] font-medium text-white hover:bg-[#102A56] transition-colors"
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
    <main className="min-h-screen bg-[#F1F5F9] selection:bg-[#2563EB] selection:text-white font-sans">
      <Helmet>
        <title>{entry.title} | Navi Growth Journal</title>
        <meta name="description" content={entry.summary} />
      </Helmet>

      <JournalHeroSection entry={entry} />

      {/* =========================================================
          3. EDITORIAL 2-COLUMN ARTICLE LAYOUT
         ========================================================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Article Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Executive Summary Blockquote */}
            <div className="rounded-2xl bg-white border-l-4 border-[#F97316] p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-medium uppercase tracking-wider text-[#2563EB] block mb-2">
                Executive Hypothesis &amp; Problem Statement
              </span>
              <p className="text-[16px] sm:text-[18px] font-medium text-[#102A56] leading-[1.6]">
                &ldquo;{entry.summary}&rdquo;
              </p>
            </div>

            {/* Rendered Structured Article Content */}
            <div className="space-y-6 text-[#0F172A]/85 leading-relaxed">
              {contentBlocks.map((block, idx) => {
                if (block.type === "h3" || block.type === "h2") {
                  return (
                    <div key={idx} className="pt-6 sm:pt-8 first:pt-0">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#F97316]" />
                        <h2 className="heading-section text-[22px] sm:text-[26px] font-semibold text-[#0F172A] leading-[1.25] tracking-[-0.02em]">
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
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2563EB] text-white text-xs font-medium">
                        {block.number}
                      </span>
                      <p
                        className="text-[15px] sm:text-[16px] text-[#0F172A]/85 leading-[1.6] font-normal"
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
                        className="text-[#2563EB] shrink-0 mt-1"
                      />
                      <p
                        className="text-[15px] sm:text-[16px] text-[#0F172A]/85 leading-[1.65]"
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
                    className="text-[15px] sm:text-[17px] leading-[1.7] text-[#0F172A]/85 font-normal"
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
                <span className="text-xs font-medium uppercase tracking-wider text-[#0F172A]/55 block mb-3">
                  Experiment Taxonomy
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3.5
                        py-1.5
                        text-xs
                        font-medium
                        text-[#102A56]
                        shadow-2xs
                      "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Conversion Card */}
            <div className="rounded-2xl bg-[#102A56] text-white p-6 sm:p-8 mt-10 relative overflow-hidden">
              <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <span className="inline-block rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#F97316]">
                  Actionable Strategy
                </span>
                <h3 className="heading-section text-[22px] sm:text-[26px] font-semibold leading-[1.25] text-white">
                  Want to apply this strategy to your brand?
                </h3>
                <p className="text-[#F1F5F9]/85 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl">
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
                    rounded-[10px]
                    bg-[#F97316]
                    hover:bg-[#2563EB]
                    text-white
                    px-5
                    py-3
                    text-[14px]
                    font-medium
                    shadow-md
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
          <aside className="lg:col-span-4 space-y-7">
            {/* The Lab Protocol */}
            <div className="rounded-2xl bg-[#102A56] text-white p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <Zap className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#F97316]" />
                  <h3 className="text-[18px] font-semibold text-white">
                    The Lab Protocol
                  </h3>
                </div>

                <p className="text-[13px] text-[#F1F5F9]/80 leading-[1.6]">
                  Every log published here is derived from live client
                  engagements, internal data pipelines, and verified attribution
                  metrics.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-[#F1F5F9]/85">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#F97316] shrink-0">
                      <Activity size={14} />
                    </div>
                    <span className="font-medium">Live Data Auditing</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#F1F5F9]/85">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#F97316] shrink-0">
                      <Target size={14} />
                    </div>
                    <span className="font-medium">ROAS &amp; Conversion Focused</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#F1F5F9]/85">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#F97316] shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-medium">Verified Execution Notes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share & Actions */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#0F172A]/55 mb-4">
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
                    h-11
                    rounded-[10px]
                    bg-[#F1F5F9]
                    hover:bg-[#2563EB]
                    text-[#102A56]
                    hover:text-white
                    text-[14px]
                    font-medium
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
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#0F172A]/55">
                  Related Experiments
                </h4>
                <div className="space-y-3">
                  {otherEntries.map((other) => (
                    <Link
                      key={other.id}
                      to={`/growth-journal/${other.id}`}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-[#F1F5F9] transition-colors"
                    >
                      <img
                        src={other.image}
                        alt={other.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[11px] font-medium text-[#F97316] uppercase block truncate">
                          {other.type}
                        </span>
                        <h5 className="text-[13px] font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors line-clamp-2">
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