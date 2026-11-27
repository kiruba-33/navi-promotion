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
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span
            className="
              label-text
              text-[#2563EB]
            "
          >
            Portfolio
          </span>

          <h2
            className="
              heading-section
              text-[#0F172A]
              mt-2.5
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              body-large
              mx-auto
              mt-3.5
              max-w-2xl
              text-[#0F172A]/80
            "
          >
            Discover our work across digital marketing, development, branding, and creative production.
          </p>
        </div>

        {/* Main Categories */}
        <div
          className="
            mb-6
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
                  rounded-[10px]
                  px-5
                  py-2.5
                  text-[14px]
                  font-medium
                  transition-all
                  duration-200
                  select-none
                  cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]

                  ${
                    activeCategory === category
                      ? "bg-[#102A56] text-[#FFFFFF] shadow-sm"
                      : "bg-[#F1F5F9] text-[#0F172A] border border-[#0F172A]/10 hover:bg-[#102A56] hover:text-[#FFFFFF]"
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
            mb-12
            flex
            flex-wrap
            justify-center
            gap-2.5
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
                  rounded-[8px]
                  px-4
                  py-2
                  text-[12px]
                  sm:text-[13px]
                  font-medium
                  tracking-[0.02em]
                  transition-all
                  duration-200
                  select-none
                  cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]

                  ${
                    activeSubCategory === subCategory
                      ? "bg-[#2563EB] text-[#FFFFFF] border border-[#2563EB] shadow-xs"
                      : "border border-[#0F172A]/15 bg-[#FFFFFF] text-[#0F172A]/75 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }
                `}
              >
                {subCategory}
              </button>
            )
          )}
        </div>

        {/* Portfolio Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full"
            >
              <PortfolioCard
                item={project}
                onProjectSelect={
                  handleProjectSelect
                }
              />
            </div>
          ))}
        </div>

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