import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Heart,
  Check,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../../../data/blogs";
import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";
import BookStrategyModal from "../../ui/BookStrategyModal";

export default function PostContent({ post }) {
  const [likes, setLikes] = useState(post.likes || 42);
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation({
    yDesktop: 140,
    yMobile: 60,
    fadeEnd: 0.75,
  });

  // Calculate read time if not provided
  const readTime =
    post.readTime ||
    `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read`;

  // Related posts from same category or general blogs (excluding current)
  const relatedPosts = blogs
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Structured Markdown Parser
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

      if (line.startsWith("# ")) {
        // Main title already displayed in header
        flushParagraph();
        continue;
      } else if (line.startsWith("## ")) {
        flushParagraph();
        blocks.push({
          type: "h2",
          content: line.replace("## ", "").trim(),
        });
      } else if (line.startsWith("### ")) {
        flushParagraph();
        blocks.push({
          type: "h3",
          content: line.replace("### ", "").trim(),
        });
      } else if (line.startsWith("* ") || line.startsWith("- ")) {
        flushParagraph();
        blocks.push({
          type: "bullet",
          content: line.replace(/^[*-]\s*/, "").trim(),
        });
      } else if (/^\d+\.\s/.test(line)) {
        flushParagraph();
        blocks.push({
          type: "numbered",
          number: line.match(/^(\d+)\./)[1],
          content: line.replace(/^\d+\.\s*/, "").trim(),
        });
      } else {
        currentParagraph.push(line);
      }
    }
    flushParagraph();
    return blocks;
  };

  const contentBlocks = parseMarkdownContent(post.content);

  const formatInline = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <article className="min-h-screen bg-[#F1F5F9] selection:bg-[#2563EB] selection:text-white">
      {/* =========================================================
          1. HEADER & ARTICLE HERO
         ========================================================= */}
      <header ref={containerRef} className="pt-28 pb-10 sm:pt-32 sm:pb-12 bg-white border-b border-slate-200/80 overflow-hidden">
        <motion.div style={{ y: yText, opacity: opacityHero }} className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/blog"
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
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Category Tag */}
          <div className="mb-4">
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
              <BookOpen size={13} className="text-[#F97316]" />
              {post.category}
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
              mb-5
              max-w-4xl
            "
          >
            {post.title}
          </h1>

          {/* Excerpt / Lead Subtitle */}
          {post.excerpt && (
            <p className="body-large text-[#0F172A]/75 text-[15px] sm:text-[18px] leading-[1.6] mb-8 max-w-3xl">
              {post.excerpt}
            </p>
          )}

          {/* Metadata Row & Social Sharing */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200/70">
            {/* Author, Date & Reading Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-[#0F172A]/70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#102A56] text-white font-medium flex items-center justify-center text-xs">
                  {post.author ? post.author.charAt(0) : "N"}
                </div>
                <span className="text-[#102A56] font-medium">{post.author}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <div className="flex items-center gap-1.5 text-[#0F172A]/65">
                <Calendar size={14} className="text-[#F97316]" />
                <span>{post.date}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <div className="flex items-center gap-1.5 text-[#0F172A]/65">
                <Clock size={14} className="text-[#2563EB]" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Social Actions (Like & Share) */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleLike}
                className={`
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-[10px]
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  transition-all
                  cursor-pointer
                  border
                  ${
                    isLiked
                      ? "bg-[#F97316]/10 border-[#F97316]/30 text-[#F97316]"
                      : "bg-[#F1F5F9] border-slate-200 text-[#102A56] hover:bg-slate-200/70"
                  }
                `}
                title="Like article"
              >
                <Heart
                  size={14}
                  className={isLiked ? "fill-[#F97316] text-[#F97316]" : ""}
                />
                <span>{likes}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-[10px]
                  bg-[#F1F5F9]
                  border
                  border-slate-200
                  hover:bg-[#2563EB]
                  hover:border-[#2563EB]
                  text-[#102A56]
                  hover:text-white
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  transition-colors
                  cursor-pointer
                "
                title="Copy article link"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* =========================================================
          2. CINEMATIC FEATURED IMAGE
         ========================================================= */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            shadow-xl
            border
            border-slate-200/90
            aspect-[21/9]
            sm:h-[440px]
            lg:h-[500px]
            bg-[#0F172A]
          "
        >
          <motion.img
            style={{ scale: scaleImage }}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      </section>

      {/* =========================================================
          3. READING EXPERIENCE & ARTICLE CONTENT
         ========================================================= */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="space-y-6 text-[#0F172A]/85 leading-relaxed">
          {contentBlocks.map((block, idx) => {
            if (block.type === "h2") {
              return (
                <div key={idx} className="pt-8 sm:pt-10 first:pt-0">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#F97316]" />
                    <h2 className="heading-section text-[22px] sm:text-[26px] font-semibold text-[#0F172A] leading-[1.25] tracking-[-0.02em]">
                      {block.content}
                    </h2>
                  </div>
                </div>
              );
            }

            if (block.type === "h3") {
              return (
                <div key={idx} className="pt-6 sm:pt-8">
                  <h3 className="heading-section text-[19px] sm:text-[22px] font-semibold text-[#0F172A] leading-[1.3] tracking-[-0.015em] mb-3">
                    {block.content}
                  </h3>
                </div>
              );
            }

            if (block.type === "bullet") {
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 pl-2 sm:pl-4 py-1"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#2563EB] shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] sm:text-[17px] text-[#0F172A]/85 leading-[1.65] font-normal"
                    dangerouslySetInnerHTML={{
                      __html: formatInline(block.content),
                    }}
                  />
                </div>
              );
            }

            if (block.type === "numbered") {
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs"
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

            // Paragraph
            const isFirst = idx === 0;

            if (isFirst) {
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border-l-4 border-[#F97316] p-6 sm:p-7 my-6 shadow-xs"
                >
                  <p
                    className="text-[17px] sm:text-[19px] font-medium text-[#102A56] leading-[1.6]"
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
        {post.tags && post.tags.length > 0 && (
          <div className="pt-10 sm:pt-12 mt-12 border-t border-slate-200">
            <span className="text-xs font-medium uppercase tracking-wider text-[#0F172A]/55 block mb-3">
              Topics &amp; Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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

        {/* Author Bio Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 mt-10 shadow-xs flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#102A56] text-white flex items-center justify-center text-lg font-semibold shrink-0">
            {post.author ? post.author.charAt(0) : "N"}
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-[#0F172A]">
              Written by {post.author}
            </h4>
            <p className="text-xs sm:text-sm text-[#0F172A]/70 mt-1">
              Digital Marketing &amp; Growth Strategist at Navi Promotions, helping
              brands scale across Tamil Nadu and global markets.
            </p>
          </div>
        </div>

        {/* Action Strategy Callout Box */}
        <div className="rounded-2xl bg-[#102A56] text-white p-6 sm:p-8 mt-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-2xl" />
          <div className="relative z-10 space-y-4">
            <span className="inline-block rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#F97316]">
              Strategic Advisory
            </span>
            <h3 className="heading-section text-[22px] sm:text-[26px] font-semibold leading-[1.25] text-white">
              Ready to implement these insights in your business?
            </h3>
            <p className="text-[#F1F5F9]/85 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl">
              Partner with Navi Promotions to turn marketing trends and
              data-driven strategies into real business growth.
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
      </section>

      {/* =========================================================
          4. RELATED ARTICLES PRESENTATION
         ========================================================= */}
      {relatedPosts.length > 0 && (
        <section className="bg-white border-t border-slate-200/80 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
                Further Reading
              </span>
              <h3 className="heading-section text-[24px] sm:text-[30px] font-semibold text-[#0F172A] mt-2">
                Related Articles &amp; Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="
                    group
                    flex
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200/90
                    bg-[#F1F5F9]/60
                    hover:bg-white
                    hover:border-[#2563EB]/40
                    p-3.5
                    shadow-xs
                    transition-all
                    duration-300
                  "
                >
                  <Link
                    to={`/blog/${related.id}`}
                    className="flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 mb-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-lg bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#102A56] shadow-sm">
                          {related.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between px-2">
                      <div>
                        <div className="flex items-center gap-2 text-[#0F172A]/55 text-[11px] font-medium mb-2">
                          <Calendar size={12} className="text-[#F97316]" />
                          <span>{related.date}</span>
                        </div>
                        <h4 className="heading-card text-[17px] font-semibold leading-[1.3] text-[#0F172A] group-hover:text-[#2563EB] transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-[#0F172A]/70 line-clamp-2 mb-4">
                          {related.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs font-medium text-[#2563EB] mt-auto">
                        <span>Read Story</span>
                        <ArrowUpRight size={14} className="text-[#F97316]" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strategy Form Modal */}
      <BookStrategyModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </article>
  );
}