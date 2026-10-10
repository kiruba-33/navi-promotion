import React, { useState, useMemo, Suspense, lazy } from "react";
import { ArrowRight, MapPin, Briefcase, Clock3, IndianRupee, Sparkles, Filter } from "lucide-react";
import { careersJobsData } from "../../../data/careersJobsData";

const ApplyNowModal = lazy(() => import("./ApplyNowModal"));

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

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
          className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Careers at Navi
              </span>

              <h1 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl heading-primary font-semibold">
                Current Open
                <span className="block heading-highlight">Positions</span>
              </h1>

              <p className="body-large mt-4 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
                Explore open opportunities to work with a team focused on creativity, technology,
                and measurable business growth in Theni, Tamil Nadu.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                All Roles ({careersJobsData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("full-time")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "full-time"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                Full Time ({fullTimeCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("internship")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "internship"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                Internships ({internshipCount})
              </button>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredJobs.map((job) => {
              const isInternship = job.type === "Internship";

              return (
                <div
                  key={job.id}
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    sm:p-8
                    shadow-xs
                    hover:shadow-xl
                    hover:border-brand-orange/40
                    hover:-translate-y-1
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
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                            <Clock3 className="w-3.5 h-3.5 text-amber-600" />
                            INTERNSHIP
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                            <Clock3 className="w-3.5 h-3.5 text-slate-500" />
                            FULL TIME
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                          {job.experience}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                        {job.location}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h2 className="heading-card text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-brand-orange transition-colors duration-200 mb-3">
                      {job.title}
                    </h2>

                    {/* Salary & Payment Details Badge */}
                    <div className="mb-4">
                      {isInternship ? (
                        <div className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-900">
                          <IndianRupee className="w-3.5 h-3.5 text-amber-600" />
                          <span>
                            {job.internshipPayment}: ₹{job.salary} / month
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-900">
                          <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                          <span>
                            Salary: ₹{job.salary} / month
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-5 font-normal">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    {job.highlights && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Apply Action Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-900
                        hover:bg-brand-orange
                        text-white
                        px-5
                        py-2.5
                        sm:py-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
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
