import React from "react";
import {
  Calendar,
  MessageCircle,
  Share2,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({
  post,
  index = 0,
}) {
  const isHero = index === 0;

  return (
    <article
      className={`
        group
        relative
        flex
        flex-col
        ${
          isHero
            ? "md:col-span-2"
            : ""
        }
      `}
    >
      <Link
        to={`/blog/${post.id}`}
        className="block h-full">
        {/* IMAGE */}
        <div
          className={`
            relative
            overflow-hidden
            rounded-2xl
            bg-[#F1F5F9]
            mb-6
            shadow-lg

            ${
              isHero
                ? "aspect-[21/9]"
                : "aspect-[4/5]"
            }
          `}
        >
          <img
            src={post.image}
            alt={post.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[#102A56]/20
              group-hover:bg-[#102A56]/10
              transition-colors
              duration-500
            "
          />

          {/* CATEGORY */}
          <div className="absolute top-5 left-5">

            <span
              className="
                px-3.5
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
              {post.category}
            </span>

          </div>

          {/* READ BADGE */}
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
            "
          >

            <div
              className="
                px-5
                py-3
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
              Read Story
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="px-2 sm:px-3">

          {/* META */}
          <div
            className="
              flex
              items-center
              gap-3.5
              text-[#0F172A]/55
              mb-3
              text-[12px]
              font-medium
            "
          >

            <div className="flex items-center gap-1.5">

              <Calendar className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" focusable="false" />

              <span>{post.date}</span>

            </div>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <span>{post.readTime}</span>

          </div>

          {/* TITLE */}
          <h2
            className={`
              heading-card
              text-[#0F172A]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              transition-colors
              duration-300
              group-hover:text-[#2563EB]

              ${
                isHero
                  ? "text-[clamp(1.625rem,2.5vw,2.25rem)] mb-4"
                  : "text-[20px] mb-3"
              }
            `}
          >
            {post.title}
          </h2>

          {/* EXCERPT */}
          <p
            className={`
              text-[#0F172A]/75
              font-normal
              leading-[1.6]

              ${
                isHero
                  ? "text-[16px] sm:text-[17px] mb-7 max-w-2xl"
                  : "text-[14px] sm:text-[15px] mb-6"
              }
            `}
          >
            {post.excerpt}
          </p>

          {/* FOOTER */}
          <div
            className="
              flex
              items-center
              justify-between
              pt-5
              border-t
              border-slate-200/80
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-[#F1F5F9]
                  border
                  border-slate-200
                  flex
                  items-center
                  justify-center
                "
              >

                <User className="w-4 h-4 text-[#2563EB]" />

              </div>

              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#102A56]
                "
              >
                {post.author}
              </span>

            </div>

            <div className="flex items-center gap-3.5 text-slate-400">

              <Share2
                className="
                  w-4
                  h-4
                  hover:text-[#2563EB]
                  transition-colors
                "
              />

              <MessageCircle
                className="
                  w-4
                  h-4
                  hover:text-[#F97316]
                  transition-colors
                "
              />

            </div>

          </div>

        </div>

      </Link>
    </article>
  );
}