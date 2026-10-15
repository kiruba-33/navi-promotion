import React from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import { subBrandsData } from "../../../data/about";

export default function OurSubBrands() {
  return (
    <section
      id="our-sub-brands"
      className="relative overflow-hidden border-t border-slate-200 py-20 sm:py-24 lg:py-32 bg-slate-50/60"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 h-[450px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-brand-orange/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-xs select-none">
            <Building2 className="w-4 h-4 text-brand-orange" aria-hidden="true" />
            <span>Our Sub Brands</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-primary font-bold tracking-tight mb-5">
            Our <span className="heading-highlight">Sub Brands</span>
          </h2>

          <p className="body-large text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
            Specialized divisions delivering focused excellence across regional retail commerce,
            creative brand media, and advanced digital software engineering.
          </p>
        </div>

        {/* 3 Sub-Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {subBrandsData.map((brand) => {
            const Icon = brand.icon;

            return (
              <div
                key={brand.name}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xs hover:border-brand-orange/40 transition-all duration-300"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-900 border border-white/50 shadow-md">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>

                  {/* Tagline on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300">
                      {brand.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
                      {brand.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <p className="text-sm leading-relaxed text-slate-600 mb-6 font-normal">
                    {brand.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-800 group-hover:text-brand-orange transition-colors">
                    <span>Focused Capabilities</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
