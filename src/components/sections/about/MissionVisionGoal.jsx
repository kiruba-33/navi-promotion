import React from "react";
import { Target } from "lucide-react";

import { missionVisionGoalData, missionVisionGoalMeta } from "../../../data/about";

export default function MissionVisionGoal() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none"
              >
                <Target className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>{missionVisionGoalMeta.label}</span>
              </div>

              <h2
                className="heading-section text-[#0F172A] mb-4"
              >
                {missionVisionGoalMeta.heading}
              </h2>

              <p
                className="body-large text-[#0F172A]/80 max-w-md"
              >
                {missionVisionGoalMeta.supportingText}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-5 lg:gap-6">
            {missionVisionGoalData.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 sm:p-8 overflow-hidden group transition-all duration-300 hover:border-[#2563EB]/40 shadow-xs hover:shadow-sm"
              >
                <div className="relative z-10">
                  {/* Category Pill + Icon */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F1F5F9] border border-[#102A56]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] transition-colors duration-200">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#2563EB]">
                      {item.id} — {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="heading-card text-[#0F172A] mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="body-normal text-[#0F172A]/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
