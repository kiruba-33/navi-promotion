import React, { useState, Suspense, lazy } from "react";
import { ArrowRight, MapPin, Briefcase, Clock3 } from "lucide-react";
import { careersJobsData } from "../../../data/careersJobsData";

const ApplyNowModal = lazy(() => import("./ApplyNowModal"));

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <section
        id="open-positions"
        className="py-12 sm:py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-3xl mb-12 lg:mb-16">

            <span
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-brand-orange/20

                bg-brand-orange/5

                px-4
                py-2

                text-[11px]
                font-black

                uppercase
                tracking-[0.25em]

                text-brand-orange
              "
            >
              <Briefcase className="w-4 h-4"  aria-hidden="true" focusable="false" />
              Open Positions
            </span>

            <h2 className="heading-section mt-6 text-4xl sm:text-5xl lg:text-6xl heading-primary">
              Current
              <span className="block heading-highlight">
                Opportunities
              </span>
            </h2>

            <p
              className="
                mt-6

                text-lg

                leading-relaxed

                text-slate-600
              "
            >
              Explore opportunities to work with a team
              focused on creativity, technology, and
              measurable business growth.
            </p>

          </div>

          {/* Jobs Grid */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2

              gap-6
            "
          >
            {careersJobsData.map((job) => (
              <div
                key={job.id}
                className="
                  rounded-[2rem]

                  border
                  border-slate-200

                  bg-white

                  p-6
                  sm:p-8
                "
              >
                {/* Title */}
                <h3
                  className="
                    heading-card

                    text-2xl

                    text-slate-900
                  "
                >
                  {job.title}
                </h3>

                {/* Meta */}
                <div
                  className="
                    mt-6

                    flex
                    flex-wrap

                    gap-3
                  "
                >
                  {/* Type badge — dynamic: orange for Internship, slate for Full-Time */}
                  {job.type === "Internship" ? (
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2

                        rounded-full

                        border
                        border-brand-orange/20

                        bg-brand-orange/5

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        text-brand-orange
                      "
                    >
                      <Clock3 className="w-4 h-4" />
                      INTERNSHIP
                    </div>
                  ) : (
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2

                        rounded-full

                        bg-slate-100

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        text-slate-700
                      "
                    >
                      <Clock3 className="w-4 h-4" />
                      FULL TIME
                    </div>
                  )}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      bg-slate-100

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-slate-700
                    "
                  >
                    <Briefcase className="w-4 h-4"  aria-hidden="true" focusable="false" />
                    {job.experience}
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      bg-slate-100

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-slate-700
                    "
                  >
                    <MapPin className="w-4 h-4"  aria-hidden="true" focusable="false" />
                    {job.location}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-6

                    text-sm
                    sm:text-base

                    leading-relaxed

                    text-slate-600
                  "
                >
                  {job.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => setSelectedJob(job)}
                  className="
                    mt-8

                    inline-flex
                    items-center
                    gap-2

                    font-bold

                    text-brand-orange
                  "
                >
                  Apply Now

                  <ArrowRight className="w-4 h-4"  aria-hidden="true" focusable="false" />
                </button>
              </div>
            ))}
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

