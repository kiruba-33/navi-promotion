import React, { useState, useMemo, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Clock3, IndianRupee } from "lucide-react";
import { careersJobsData } from "../../../data/careersJobsData";
import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";

const ApplyNowModal = lazy(() => import("./ApplyNowModal"));

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const { containerRef, yText, opacityHero } = useHeroScrollAnimation({
    yDesktop: 90,
    yMobile: 35,
    fadeEnd: 0.75,
  });

  const filteredJobs = useMemo(() => {
    if (activeFilter === "full-time") {
      return careersJobsData.filter((j) => j.type === "Full Time");
    }
    if (activeFilter === "internship") {
      return careersJobsData.filter((j) => j.type === "Internship");
    }
    return careersJobsData;
  }, [activeFilter]);

  const fullTimeCount = careersJobsData.filter((j) => j.type === "Full Time").length;
  const internshipCount = careersJobsData.filter((j) => j.type === "Internship").length;

  return (
    <>
      <section
        id="open-positions"
        className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-white relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#2563EB]/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div ref={containerRef} className="overflow-hidden mb-10 sm:mb-14">
            <motion.div
              style={{ y: yText, opacity: opacityHero }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-[#F1F5F9] px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
                <Briefcase className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
                Careers at Navi
              </span>

              <h1 className="heading-section mt-4 text-[clamp(1.625rem,3.4vw,3rem)] leading-[1.12] tracking-[-0.025em] text-[#0F172A] font-semibold whitespace-nowrap">
                Opening Positions
              </h1>

              <p className="body-large mt-4 text-[#0F172A]/80 max-w-2xl text-[15px] sm:text-[17px] leading-[1.65] font-normal">
                Explore open opportunities to work with a team focused on creativity, technology,
                and measurable business growth in Theni, Tamil Nadu.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-slate-200/80 text-[#102A56]"
                }`}
              >
                All Roles ({careersJobsData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("full-time")}
                className={`px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all cursor-pointer ${
                  activeFilter === "full-time"
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-slate-200/80 text-[#102A56]"
                }`}
              >
                Full Time ({fullTimeCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("internship")}
                className={`px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all cursor-pointer ${
                  activeFilter === "internship"
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-slate-200/80 text-[#102A56]"
                }`}
              >
                Internships ({internshipCount})
              </button>
            </div>
            </motion.div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {filteredJobs.map((job) => {
              const isInternship = job.type === "Internship";

              return (
                <div
                  key={job.id}
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    sm:p-7
                    shadow-xs
                    hover:border-[#2563EB]/40
                    hover:shadow-md
                    transition-all
                    duration-300
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <div>
                    {/* Top Row: Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {isInternship ? (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F97316]/30 bg-[#F97316]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#F97316]">
                            <Clock3 className="w-3.5 h-3.5" />
                            Internship
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#2563EB]/20 bg-[#F1F5F9] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#102A56]">
                            <Clock3 className="w-3.5 h-3.5 text-[#2563EB]" />
                            Full Time
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#0F172A]/75">
                          <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                          {job.experience}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0F172A]/65">
                        <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                        {job.location}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h2 className="heading-card text-[20px] sm:text-[22px] font-semibold leading-[1.25] text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200 mb-3">
                      {job.title}
                    </h2>

                    {/* Salary & Payment Details Badge */}
                    <div className="mb-4">
                      {isInternship ? (
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#F97316]/10 border border-[#F97316]/25 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#102A56]">
                          <IndianRupee className="w-3.5 h-3.5 text-[#F97316]" />
                          <span>
                            {job.internshipPayment}: ₹{job.salary} / month
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] border border-[#2563EB]/20 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#102A56]">
                          <IndianRupee className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>
                            Salary: ₹{job.salary} / month
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#0F172A]/75 mb-5 font-normal">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    {job.highlights && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block text-[12px] font-medium px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#0F172A]/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Apply Action Button */}
                  <div className="pt-4 border-t border-[#F1F5F9]">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[10px]
                        bg-[#2563EB]
                        hover:bg-[#102A56]
                        text-white
                        px-5
                        py-2.5
                        text-[14px]
                        font-medium
                        transition-all
                        duration-200
                        cursor-pointer
                        shadow-xs
                      "
                    >
                      <span>Apply For Position</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply Now Modal */}
      {selectedJob && (
        <Suspense fallback={null}>
          <ApplyNowModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        </Suspense>
      )}
    </>
  );
}
