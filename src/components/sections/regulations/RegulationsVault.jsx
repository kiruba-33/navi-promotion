import React from "react";
import { motion } from "motion/react";
import {
  Bookmark,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Filter,
} from "lucide-react";

export default function RegulationsVault({
  categories,
}) {
  return (
    <section
      className="
        bg-slate-50
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="space-y-24 lg:space-y-32">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div
                  className="
                    mb-12
                    flex
                    flex-col
                    gap-8
                    md:mb-16
                    md:flex-row
                    md:items-end
                    md:justify-between
                  "
                >
                  <div className="max-w-xl">
                    <div
                      className="
                        mb-6
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-3xl
                          border
                          border-slate-200
                          bg-white
                          shadow-sm
                        "
                      >
                        <Icon className="h-6 w-6 text-orange-500" />
                      </div>

                      <div
                        className="
                          h-px
                          flex-1
                          bg-slate-200
                        "
                      />
                    </div>

                    <h2
                      className="
                        heading-section
                        mb-4
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        text-slate-900
                      "
                    >
                      {category.title}
                    </h2>

                    <p
                      className="
                        body-normal
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                      "
                    >
                      {category.description}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-slate-400
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                      "
                    >
                      {category.items.length} Documents
                    </span>

                    <Filter className="h-4 w-4 text-orange-500" />
                  </div>
                </div>

                {/* Cards */}
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                  "
                >
                  {category.items.map(
                    (item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        className="
                          group
                          relative
                          flex
                          flex-col
                          rounded-[2rem]
                          border
                          border-slate-200
                          bg-white
                          p-8
                          shadow-sm
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:border-orange-500/30
                          hover:shadow-xl
                        "
                      >
                        {/* Top */}
                        <div className="mb-8">
                          <div
                            className="
                              mb-8
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <div
                              className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-slate-100
                                transition-all
                                duration-500
                                group-hover:bg-slate-900
                                group-hover:text-white
                              "
                            >
                              <Bookmark className="h-5 w-5 text-orange-500" />
                            </div>

                            <span
                              className="
                                rounded-full
                                bg-slate-900
                                px-4
                                py-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                              "
                            >
                              {item.status}
                            </span>
                          </div>

                          <h3
                            className="
                              heading-card
                              mb-4
                              text-2xl
                              text-slate-900
                              transition-colors
                              duration-300
                              group-hover:text-orange-500
                            "
                          >
                            {item.title}
                          </h3>

                          <div
                            className="
                              mb-6
                              flex
                              flex-wrap
                              items-center
                              gap-4
                              text-slate-500
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <Calendar className="h-4 w-4 text-orange-500"  aria-hidden="true" focusable="false" />

                              <span
                                className="
                                  text-[11px]
                                  font-bold
                                  uppercase
                                  tracking-[0.15em]
                                "
                              >
                                {item.date}
                              </span>
                            </div>

                            <div
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-slate-300
                              "
                            />

                            <div
                              className="
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <FileText className="h-4 w-4 text-orange-500"  aria-hidden="true" focusable="false" />

                              <span
                                className="
                                  text-[11px]
                                  font-bold
                                  uppercase
                                  tracking-[0.15em]
                                "
                              >
                                {item.size}
                              </span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div
                            className="
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="
                                  rounded-lg
                                  border
                                  border-slate-200
                                  bg-slate-50
                                  px-3
                                  py-1.5
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.15em]
                                  text-slate-500
                                "
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div
                          className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-slate-200
                            pt-6
                          "
                        >
                          <button
                            className="
                              flex
                              items-center
                              gap-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-slate-900
                              transition-colors
                              hover:text-orange-500
                            "
                          >
                            Preview Document

                            <ChevronRight className="h-4 w-4 text-orange-500"  aria-hidden="true" focusable="false" />
                          </button>

                          <button
                            aria-label="Download Document"
                            title="Download Document"
                            className="
                              group/dl
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-xl
                              bg-slate-100
                              opacity-100
                              lg:opacity-0
                              transition-colors
                              duration-300
                              ease-in-out
                              lg:group-hover:opacity-100
                              hover:bg-orange-500
                            "
                          >
                            <Download className="h-4 w-4 text-orange-500 transition-colors duration-300 ease-in-out group-hover/dl:text-white" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}