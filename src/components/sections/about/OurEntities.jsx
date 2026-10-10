import React from "react";
import { Building2, Sparkles, ArrowUpRight } from "lucide-react";
import { subBrandsData } from "../../../data/about";

export default function OurEntities() {
  return (
    <section
      id="sub-brands"
      className="relative overflow-hidden border-y border-slate-200 py-10 sm:py-14 lg:py-16 bg-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-slate-50/40 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none"
          >
            <Building2 className="w-4 h-4 text-orange-500" />
            <span>Our Sub Brands</span>
          </div>

          <h2
            className="heading-section text-center heading-primary tracking-tight mb-4 whitespace-normal lg:whitespace-nowrap"
          >
            Our <span className="heading-highlight">Sub Brands</span>
          </h2>

          <p
            className="body-large text-slate-600 max-w-4xl mx-auto font-normal tracking-tight whitespace-normal lg:whitespace-nowrap"
          >
            Specialized divisions delivering focused excellence across retail commerce, creative media, and advanced technology.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subBrandsData.map((brand) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.name}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-orange-500/40"
              >
                {/* Brand Visual Cover */}
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 border border-white/40 shadow-md">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>

                  {/* Tagline on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-orange-400">
                      {brand.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
                      {brand.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <p className="body-normal text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {brand.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-orange-500 transition-colors">
                    <span>Explore Initiative</span>
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