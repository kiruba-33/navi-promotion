import React from "react";
import { BookOpen } from "lucide-react";

import { aboutContentData } from "../../../data/about";

export default function AboutContent() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>{aboutContentData.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-6">
              {aboutContentData.title.lineOne}{" "}
              <span className="heading-highlight block sm:inline">
                {aboutContentData.title.highlight}
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 max-w-2xl text-slate-600 body-large">
              <p className="leading-relaxed">
                {aboutContentData.description}
              </p>
              {aboutContentData.secondaryDescription && (
                <p className="leading-relaxed">
                  {aboutContentData.secondaryDescription}
                </p>
              )}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-md">
              <img
                src={aboutContentData.image}
                alt="About Navi Promotions"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {aboutContentData.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 lg:p-8 text-center shadow-xs"
            >
              <h3 className="heading-card text-3xl sm:text-4xl lg:text-5xl text-brand-orange mb-2.5 font-bold">
                {item.value}
              </h3>

              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}