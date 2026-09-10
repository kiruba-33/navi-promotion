import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Share2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({
  post,
  index = 0,
}) {
  const isHero = index === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
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
            rounded-[2rem]
            lg:rounded-[3rem]
            bg-slate-200
            mb-8
            shadow-xl

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
              duration-1000
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-slate-900/20
              group-hover:bg-slate-900/10
              transition-colors
              duration-500
            "
          />

          {/* CATEGORY */}
          <div className="absolute top-6 left-6">

            <span
              className="
                px-4
                py-2
                bg-white/90
                backdrop-blur-md
                rounded-full
                text-[9px]
                font-black
                uppercase
                tracking-widest
                text-slate-900
                shadow-xl
              "
            >
              {post.category}
            </span>

          </div>

          {/* READ CIRCLE */}
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
              duration-500
            "
          >

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
                font-black
                uppercase
                tracking-widest
                text-[10px]
                shadow-2xl
              "
            >
              Read Story
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="px-2 sm:px-4">

          {/* META */}
          <div
            className="
              flex
              items-center
              gap-4
              text-slate-400
              mb-4
              text-[10px]
              font-black
              uppercase
              tracking-widest
            "
          >

            <div className="flex items-center gap-1.5">

              <Calendar className="w-3.5 h-3.5 text-orange-500"  aria-hidden="true" focusable="false" />

              <span>{post.date}</span>

            </div>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <span>{post.readTime}</span>

          </div>

          {/* TITLE */}
          <h2
            className={`
              heading-card
              text-slate-900
              tracking-tight
              transition-colors
              duration-300
              group-hover:text-orange-500

              ${
                isHero
                  ? "text-3xl md:text-5xl mb-6"
                  : "text-2xl mb-4"
              }
            `}
          >
            {post.title}
          </h2>

          {/* EXCERPT */}
          <p
            className={`
              text-slate-500
              font-medium
              leading-relaxed

              ${
                isHero
                  ? "text-lg sm:text-xl mb-10 max-w-2xl"
                  : "text-sm mb-8"
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
              pt-6
              border-t
              border-slate-900/5
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-slate-100
                  border
                  border-slate-200
                  flex
                  items-center
                  justify-center
                "
              >

                <Sparkles className="w-4 h-4 text-orange-500" />

              </div>

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-widest
                  text-slate-900
                "
              >
                {post.author}
              </span>

            </div>

            <div className="flex items-center gap-4 text-slate-300">

              <Share2
                className="
                  w-4
                  h-4
                  hover:text-orange-500
                  transition-colors
                "
              />

              <MessageCircle
                className="
                  w-4
                  h-4
                  hover:text-orange-500
                  transition-colors
                "
              />

            </div>

          </div>

        </div>

      </Link>
    </motion.article>
  );
}