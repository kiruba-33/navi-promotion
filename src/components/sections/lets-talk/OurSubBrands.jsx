import React from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import { subBrandsData } from "../../../data/about";

export default function OurSubBrands() {
  return (
    <section
      id="our-sub-brands"
      className="relative overflow-hidden border-t border-[#0F172A]/10 py-14 sm:py-16 lg:py-20 bg-[#FFFFFF]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-3xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none">
            <Building2 className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
            <span>Our Sub Brands</span>
          </div>

          <h2 className="heading-section text-[#0F172A] mb-4">
            Our Sub Brands
          </h2>

          <p className="body-large text-[#0F172A]/80 max-w-2xl">
            Specialized divisions delivering focused excellence across regional retail commerce,
            creative brand media, and advanced digital software engineering.
          </p>
        </div>

        {/* 3 Sub-Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {subBrandsData.map((brand) => {
            const Icon = brand.icon;

            return (
              <div
                key={brand.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#F1F5F9]/60 hover:bg-[#FFFFFF] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300"
              >
                {/* Visual Cover */}
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/95 via-[#102A56]/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#2563EB] border border-[#0F172A]/10 shadow-sm">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  {/* Tagline on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.04em] text-[#F97316]">
                      {brand.tagline}
                    </span>
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#FFFFFF] leading-[1.25] mt-0.5">
                      {brand.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <p className="body-normal text-[#0F172A]/80 mb-5">
                    {brand.description}
                  </p>

                  <div className="pt-4 border-t border-[#0F172A]/10 flex items-center justify-between text-[13px] font-medium text-[#2563EB] group-hover:text-[#102A56] transition-colors">
                    <span>Focused Capabilities</span>
                    <ArrowUpRight className="w-4 h-4 text-[#F97316] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
