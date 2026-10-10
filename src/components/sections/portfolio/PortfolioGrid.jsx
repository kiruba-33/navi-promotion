import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  portfolioItems,
  categories,
} from "../../../data/portfolio";

import PortfolioCard from "./PortfolioCard";

const PortfolioModal = lazy(() => import("./PortfolioModal"));

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] =
    useState("Digital Marketing");

  const [activeSubCategory, setActiveSubCategory] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveSubCategory("All");
  };

  const handleProjectSelect = (project) => {
    setHasOpenedModal(true);
    setSelectedProject(project);
  };

  const filteredProjects = portfolioItems.filter(
    (item) =>
      item.category === activeCategory &&
      (activeSubCategory === "All"
        ? true
        : item.subCategory === activeSubCategory)
  );

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span
            className="
              label-text
              text-brand-orange
            "
          >
            Portfolio
          </span>

          <h2
            className="
              heading-section
              heading-primary
              mt-3
              text-3xl
              sm:text-4xl
              lg:text-5xl
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              body-large
              mx-auto
              mt-4
              max-w-3xl
              text-slate-600
            "
          >
            Discover our work across digital marketing, development, branding, and creative production.
          </p>
        </div>

        {/* Main Categories */}
        <div
          className="
            mb-8
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {Object.keys(categories).map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`
                  rounded-2xl
                  px-6
                  py-3
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  ease-out
                  select-none

                  ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  }
                `}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Sub Categories */}
        <div
          className="
            mb-16
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {categories[activeCategory].map(
            (subCategory) => (
              <button
                key={subCategory}
                onClick={() =>
                  setActiveSubCategory(
                    subCategory
                  )
                }
                className={`
                  rounded-full
                  px-5
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ease-out
                  select-none

                  ${
                    activeSubCategory === subCategory
                      ? "bg-orange-500 text-white border border-orange-500 shadow-md shadow-orange-500/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  }
                `}
              >
                {subCategory}
              </button>
            )
          )}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                  layout: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                }}
                className="w-full"
              >
                <PortfolioCard
                  item={project}
                  onProjectSelect={
                    handleProjectSelect
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence initial={false}>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="py-20 text-center"
            >
              <h3
                className="
                  heading-card
                  text-2xl
                  heading-primary
                "
              >
                No Projects Found
              </h3>

              <p
                className="
                  body-normal
                  mt-4
                  text-slate-500
                "
              >
                Try selecting another category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      {hasOpenedModal && (
        <Suspense fallback={null}>
          <PortfolioModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        </Suspense>
      )}
    </section>
  );
}