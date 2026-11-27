import React from "react";
import { BookOpen } from "lucide-react";

import { aboutContentData } from "../../../data/about";

export default function AboutContent() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-5 shadow-xs select-none">
              <BookOpen className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
              <span>{aboutContentData.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="heading-section text-[#0F172A] mb-6">
              {aboutContentData.title.lineOne}{" "}
              <span className="block sm:inline">
                {aboutContentData.title.highlight}
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 max-w-2xl text-[#0F172A]/80 body-large">
              <p>
                {aboutContentData.description}
              </p>
              {aboutContentData.secondaryDescription && (
                <p>
                  {aboutContentData.secondaryDescription}
                </p>
              )}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="relative overflow-hidden rounded-2xl lg:rounded-[20px] border border-[#0F172A]/10 shadow-md">
              <img
                src={aboutContentData.image}
                alt="About Navi Promotions"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {aboutContentData.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#0F172A]/10 bg-[#F1F5F9] p-6 lg:p-7 text-center shadow-xs"
            >
              <h3 className="text-[clamp(1.75rem,2.5vw,2.25rem)] text-[#0F172A] mb-2 font-semibold leading-[1.15] tabular-nums">
                {item.value}
              </h3>

              <p className="text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.04em] text-[#102A56]/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}