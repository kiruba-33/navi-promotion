import React from "react";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import ArrowButton from "../../ui/ArrowButton";
import { blogs } from "../../../data/blogs";

export default function Insights() {
  return (
    <section
      id="insights"
      className="
        py-20
        sm:py-24
        lg:py-32
        relative
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 sm:mb-20 lg:mb-24">

          <div
            className="max-w-3xl"
          >

            <React.Fragment>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>Company Intel</span>
              </div>

            </React.Fragment>

            <h2
              className="
                heading-display
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                heading-primary
                tracking-tighter
                sm:leading-[1.1]
                md:leading-[1.15]
                lg:leading-[1.15]
              "
            >
              Strategic
              <br />
              <span className="heading-highlight">
                Insights
              </span>
            </h2>

          </div>

          <p
            className="
              body-large
              text-slate-600
              max-w-md
              lg:text-right
            "
          >
            Deep dives into marketing data,
            design philosophy, and the future
            of digital commerce.
          </p>

        </div>

        {/* BLOG GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {blogs.slice(0, 3).map((post, idx) => {

            const isMain = idx === 0;

            return (

              <div
                key={post.id}
                className={
                  isMain
                    ? "lg:col-span-8"
                    : "lg:col-span-4"
                }
              >

                <Link
                  to={`/blog/${post.id}`}
                  className="
                    group
                    relative
                    block
                    aspect-[16/10]
                    lg:aspect-auto
                    h-full
                    min-h-[320px]
                    sm:min-h-[420px]
                    rounded-[2rem]
                    lg:rounded-[3rem]
                    overflow-hidden
                    border
                    border-slate-900/5
                  ">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">

                    <div className="flex items-center gap-4 mb-5 flex-wrap">

                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider">

                        {post.category}

                      </span>

                      <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">

                        {post.readTime}

                      </span>

                    </div>

                    <h3
                      className={`
                        ${
                          isMain
                            ? "text-3xl md:text-5xl"
                            : "text-2xl md:text-3xl"
                        }
                        font-semibold
                        text-white
                        leading-tight
                        mb-6
                        transition-colors
                        duration-300
                        group-hover:text-orange-400
                      `}
                    >
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-4 text-white font-semibold text-sm">

                      Read Insights

                      <div
                        className="
                          w-10
                          h-10
                          rounded-full
                          bg-white/10
                          backdrop-blur-md
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          group-hover:bg-orange-500
                        "
                      >

                        <ArrowRight
                          className="
                            w-5
                            h-5
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                         aria-hidden="true" focusable="false" />

                      </div>

                    </div>

                  </div>

                </Link>

              </div>

            );

          })}

        </div>

        {/* CTA BUTTON */}

        <div className="mt-16 sm:mt-20 flex justify-center">

          <ArrowButton
            text="Explore All Insights"
            to="/blog"
          />

        </div>

      </div>
    </section>
  );
}