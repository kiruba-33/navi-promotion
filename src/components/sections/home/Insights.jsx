import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import ArrowButton from "../../ui/ArrowButton";
import { blogs } from "../../../data/blogs";

export default function Insights() {
  return (
    <section
      id="insights"
      className="
        py-16
        sm:py-20
        lg:py-24
        bg-[#F1F5F9]
        relative
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14 lg:mb-16">

          <div
            className="max-w-2xl"
          >

            <React.Fragment>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
                <BookOpen className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
                <span>Company Intel</span>
              </div>

            </React.Fragment>

            <h2
              className="
                text-[clamp(1.75rem,2.8vw,2.375rem)]
                font-semibold
                text-[#0F172A]
                tracking-[-0.015em]
                leading-[1.16]
              "
            >
              Strategic
              <br />
              Insights
            </h2>

          </div>

          <p
            className="
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              leading-[1.65]
              font-normal
              text-[#0F172A]/80
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
                    rounded-2xl
                    lg:rounded-[20px]
                    overflow-hidden
                    border
                    border-[#0F172A]/10
                    shadow-sm
                    hover:shadow-lg
                    transition-shadow duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2
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
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A56] via-[#102A56]/55 to-transparent" />

                  <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">

                    <div className="flex items-center gap-3 mb-4 flex-wrap">

                      <span className="px-3 py-1 bg-[#2563EB] border border-white/20 rounded-lg text-[12px] font-medium leading-[1.3] text-[#FFFFFF] uppercase tracking-[0.04em]">

                        {post.category}

                      </span>

                      <span className="text-[12px] font-normal leading-[1.4] text-[#F1F5F9]/85 uppercase tracking-[0.03em]">

                        {post.readTime}

                      </span>

                    </div>

                    <h3
                      className={`
                        ${
                          isMain
                            ? "text-[22px] sm:text-[26px] md:text-[30px] leading-[1.22]"
                            : "text-[18px] sm:text-[20px] md:text-[22px] leading-[1.28]"
                        }
                        font-semibold
                        tracking-[-0.01em]
                        text-[#FFFFFF]
                        mb-5
                        transition-colors
                        duration-300
                        group-hover:text-[#F97316]
                      `}
                    >
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-3.5 text-[#FFFFFF] font-medium text-[14px] sm:text-[15px] leading-[1.4]">

                      Read Insights

                      <div
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-[#2563EB]
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          group-hover:bg-[#F97316]
                        "
                      >

                        <ArrowRight
                          className="
                            w-4
                            h-4
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

        <div className="mt-12 sm:mt-14 flex justify-center">

          <ArrowButton
            text="Explore All Insights"
            to="/blog"
            className="!text-[14px] sm:!text-[15px] !font-medium !py-3.5 !px-6 !rounded-[10px] !bg-[#2563EB] hover:!bg-[#102A56] !shadow-md !shadow-[#2563EB]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          />

        </div>

      </div>
    </section>
  );
}