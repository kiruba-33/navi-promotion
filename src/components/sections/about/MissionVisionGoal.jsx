import React from "react";
import { Target } from "lucide-react";

import { missionVisionGoalData, missionVisionGoalMeta } from "../../../data/about";

export default function MissionVisionGoal() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none"
              >
                <Target className="w-4 h-4 text-orange-500" />
                <span>{missionVisionGoalMeta.label}</span>
              </div>

              <h2
                className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4"
              >
                {missionVisionGoalMeta.heading}
              </h2>

              <p
                className="body-large text-slate-600 max-w-md"
              >
                {missionVisionGoalMeta.supportingText}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-8">
            {missionVisionGoalData.map((item) => (
              <div
                key={item.id}
                className="relative bg-white border border-slate-200/90 rounded-[2rem] p-7 md:p-10 overflow-hidden group transition-all duration-300 hover:border-orange-500/40"
              >
                {/* Background Number */}
                <span className="absolute -top-6 -right-3 text-[100px] md:text-[130px] font-bold text-slate-900/5 leading-none select-none pointer-events-none">
                  {item.id}
                </span>

                <div className="relative z-10">
                  {/* Category Pill + Icon */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                      {item.id} — {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="heading-card text-2xl sm:text-3xl text-slate-900 mb-3 font-semibold">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="body-normal text-slate-600 text-sm sm:text-base leading-relaxed">
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
