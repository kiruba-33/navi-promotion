import React, { useState } from "react";
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
import BookStrategyModal from "../../ui/BookStrategyModal";

export default function PostContent({ post }) {
  const [likes, setLikes] = useState(post.likes || 42);
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

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
    <article className="min-h-screen bg-slate-50 selection:bg-brand-orange selection:text-white">
      {/* =========================================================
          1. HEADER & ARTICLE HERO
         ========================================================= */}
      <header className="pt-28 pb-10 sm:pt-32 sm:pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/blog"
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
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Category Pill */}
          <div className="mb-4">
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
              <BookOpen size={13} />
              {post.category}
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
              mb-6
              max-w-4xl
            "
          >
            {post.title}
          </h1>

          {/* Excerpt / Lead Subtitle */}
          {post.excerpt && (
            <p className="body-large text-slate-600 text-base sm:text-xl leading-relaxed mb-8 max-w-3xl">
              {post.excerpt}
            </p>
          )}

          {/* Metadata Row & Social Sharing */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            {/* Author, Date & Reading Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange/15 text-brand-orange font-bold flex items-center justify-center text-xs">
                  {post.author ? post.author.charAt(0) : "N"}
                </div>
                <span className="text-slate-900 font-bold">{post.author}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <div className="flex items-center gap-1.5 text-slate-500">
                <Calendar size={14} className="text-brand-orange" />
                <span>{post.date}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <div className="flex items-center gap-1.5 text-slate-500">
                <Clock size={14} className="text-slate-400" />
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
                  rounded-full
                  px-3.5
                  py-1.5
                  text-xs
                  font-bold
                  transition-all
                  cursor-pointer
                  border
                  ${
                    isLiked
                      ? "bg-rose-50 border-rose-200 text-rose-600"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }
                `}
                title="Like article"
              >
                <Heart
                  size={14}
                  className={isLiked ? "fill-rose-500 text-rose-500" : ""}
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
                  rounded-full
                  bg-slate-50
                  border
                  border-slate-200
                  hover:bg-brand-orange
                  hover:border-brand-orange
                  text-slate-600
                  hover:text-white
                  px-3.5
                  py-1.5
                  text-xs
                  font-bold
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
        </div>
      </header>

      {/* =========================================================
          2. CINEMATIC FEATURED IMAGE
         ========================================================= */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            sm:rounded-[2.5rem]
            shadow-2xl
            border
            border-slate-200/90
            aspect-[21/9]
            sm:h-[440px]
            lg:h-[500px]
            bg-slate-900
          "
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* =========================================================
          3. READING EXPERIENCE & ARTICLE CONTENT
         ========================================================= */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {contentBlocks.map((block, idx) => {
            if (block.type === "h2") {
              return (
                <div key={idx} className="pt-8 sm:pt-10 first:pt-0">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                    <h2 className="heading-section text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {block.content}
                    </h2>
                  </div>
                </div>
              );
            }

            if (block.type === "h3") {
              return (
                <div key={idx} className="pt-6 sm:pt-8">
                  <h3 className="heading-section text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
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
                    className="text-brand-orange shrink-0 mt-1"
                  />
                  <p
                    className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white text-xs font-bold">
                    {block.number}
                  </span>
                  <p
                    className="text-base text-slate-700 leading-relaxed font-medium"
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
                  className="rounded-2xl bg-amber-50/70 border-l-4 border-brand-orange p-6 sm:p-7 my-6 shadow-xs"
                >
                  <p
                    className="text-lg sm:text-xl font-semibold text-slate-800 leading-relaxed italic"
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
                className="text-base sm:text-lg leading-[1.85] text-slate-700 font-normal"
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
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Topics & Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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

        {/* Author Bio Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 mt-10 shadow-xs flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center text-xl font-bold shrink-0">
            {post.author ? post.author.charAt(0) : "N"}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Written by {post.author}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Digital Marketing & Growth Strategist at Navi Promotions, helping
              brands scale across Tamil Nadu and global markets.
            </p>
          </div>
        </div>

        {/* Action Strategy Callout Box */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 mt-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-brand-orange/20 rounded-full blur-2xl" />
          <div className="relative z-10 space-y-4">
            <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Strategic Advisory
            </span>
            <h3 className="heading-section text-xl sm:text-2xl font-bold text-white">
              Ready to implement these insights in your business?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
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
      </section>

      {/* =========================================================
          4. RELATED ARTICLES PRESENTATION
         ========================================================= */}
      {relatedPosts.length > 0 && (
        <section className="bg-white border-t border-slate-200/80 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-10 text-center sm:text-left">
              <span className="label-text text-brand-orange">
                Further Reading
              </span>
              <h3 className="heading-section text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Related Articles & Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="
                    group
                    flex
                    flex-col
                    rounded-3xl
                    border
                    border-slate-200/90
                    bg-slate-50/60
                    hover:bg-white
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
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 mb-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-900 shadow-sm">
                          {related.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between px-2">
                      <div>
                        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-semibold mb-2">
                          <Calendar size={12} className="text-brand-orange" />
                          <span>{related.date}</span>
                        </div>
                        <h4 className="heading-card text-base font-bold text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                          {related.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs font-bold text-brand-orange mt-auto">
                        <span>Read Story</span>
                        <ArrowUpRight size={14} />
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