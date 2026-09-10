import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PostContent({
  post,
}) {
  const readTime = Math.max(
    1,
    Math.ceil(
      post.content.split(/\s+/).length / 200
    )
  );

  const contentLines =
    post.content
      .split("\n")
      .filter(
        (line) => line.trim() !== ""
      );

  let firstParagraphRendered =
    false;

  return (
    <section
      className="
        pt-28
        pb-24
        sm:pt-32
        lg:pt-36
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* CATEGORY */}

        <div
          className="
            inline-flex
            items-center
            px-5
            py-2.5
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            text-white
            text-xs
            font-black
            uppercase
            tracking-widest
            shadow-lg
            mb-6
          "
        >
          {post.category}
        </div>

        {/* TITLE */}

        <h1
          className="
            heading-display
            text-4xl
            sm:text-5xl
            lg:text-6xl
            text-slate-900
            mb-10
            max-w-5xl
            leading-tight
            sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15]
          "
        >
          {post.title}
        </h1>

        {/* META CARDS */}

        <div
          className="
            grid
            sm:grid-cols-3
            gap-4
            mb-12
          "
        >
          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-orange-500"  aria-hidden="true" focusable="false" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Author
                </p>
                <p className="font-semibold text-slate-900">
                  {post.author}
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-orange-500"  aria-hidden="true" focusable="false" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Published
                </p>
                <p className="font-semibold text-slate-900">
                  {post.date}
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-500"  aria-hidden="true" focusable="false" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Reading Time
                </p>
                <p className="font-semibold text-slate-900">
                  {readTime} Min Read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TAGS */}

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-orange-50
                  text-orange-700
                  border
                  border-orange-100
                  text-sm
                  font-semibold
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* IMAGE */}

        <motion.div
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
          className="
            overflow-hidden
            rounded-[2.5rem]
            shadow-2xl
            mb-20
          "
        >
          <img
            src={post.image}
            alt={post.title}
            className="
              w-full
              h-[320px]
              sm:h-[500px]
              lg:h-[650px]
              object-cover
            "
          />
        </motion.div>

        {/* ARTICLE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            max-w-3xl
            mx-auto
          "
        >
          {contentLines.map(
            (paragraph, index) => {
              if (
                paragraph.startsWith("# ")
              ) {
                return null;
              }

              if (
                paragraph.startsWith(
                  "## "
                )
              ) {
                return (
                  <h2
                    key={index}
                    className="
                      text-3xl
                      font-bold
                      text-slate-900
                      mt-20
                      mb-8
                    "
                  >
                    {paragraph.replace(
                      "## ",
                      ""
                    )}
                  </h2>
                );
              }

              if (
                !firstParagraphRendered
              ) {
                firstParagraphRendered =
                  true;

                return (
                  <p
                    key={index}
                    className="
                      text-2xl
                      leading-[1.8]
                      text-slate-700
                      font-medium
                      mb-12
                    "
                  >
                    {paragraph}
                  </p>
                );
              }

              return (
                <p
                  key={index}
                  className="
                    text-xl
                    leading-[2]
                    text-slate-600
                    mb-10
                  "
                >
                  {paragraph}
                </p>
              );
            }
          )}

          {/* END */}

          <div
            className="
              mt-20
              pt-10
              border-t
              border-slate-200
            "
          >
            <p
              className="
                text-center
                text-slate-400
                text-sm
                uppercase
                tracking-[0.3em]
                font-semibold
              "
            >
              End Of Article
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}