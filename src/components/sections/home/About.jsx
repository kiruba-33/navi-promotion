import React from "react";
import {
  Building2,
  Target,
  Zap,
  MapPin,
} from "lucide-react";
import ArrowButton from "../../ui/ArrowButton";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 rounded-l-[6rem] lg:rounded-l-[10rem] hidden lg:block" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-20 w-40 h-40 border border-slate-200 rounded-full border-dashed hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[8px] sm:border-[10px] lg:border-[12px] border-white shadow-2xl shadow-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Navi Promotions Workspace"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 right-0 sm:-right-4 lg:-right-8 bg-white border border-slate-200 p-5 sm:p-6 lg:p-7 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-900/10 w-[240px] sm:w-[280px] lg:w-[310px]">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="heading-card text-xl sm:text-2xl heading-primary leading-none font-semibold">
                      5+ Years
                    </h4>
                    <p className="label-text text-slate-500 mt-1">
                      Of Digital Expertise
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Marketing, branding and technology — brought together to help businesses build, grow and evolve.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>
            {/* SECTION BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-3 shadow-sm select-none">
              <Building2 className="w-4 h-4 text-orange-500" />
              <span>About</span>
            </div>

            {/* TITLE */}
            <span className="block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-4">
              OUR STORY
            </span>

            {/* HEADING (Single/Mono-Color Treatment) */}
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-slate-900 mb-6 sm:mb-8 tracking-tight font-bold leading-[1.12]">
              Forging Digital<br className="hidden sm:inline" /> Growth Since 2021
            </h2>

            {/* DESCRIPTION */}
            <p className="body-large text-slate-600 font-normal mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              Founded on February 21, 2021, Navi Promotions is a digital marketing and technology company helping businesses build stronger brands, reach the right audience, and turn digital opportunities into measurable growth.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              {/* CARD 01 */}
              <div className="space-y-3.5 p-5 sm:p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="heading-card text-lg sm:text-xl heading-primary font-semibold">
                  Strategic Thinking
                </h3>
                <p className="body-normal text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We combine marketing, branding and technology to create clear digital strategies built around real business goals.
                </p>
              </div>

              {/* CARD 02 */}
              <div className="space-y-3.5 p-5 sm:p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="heading-card text-lg sm:text-xl heading-primary font-semibold">
                  Built to Execute
                </h3>
                <p className="body-normal text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  From campaigns and content to websites and digital solutions, we turn strategy into practical, high-impact execution.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 sm:mt-4">
              <ArrowButton
                text="Discover Navi Promotions"
                to="/about"
              />
            </div>

            {/* TRUST LINE (Below CTA) */}
            <div className="mt-6 sm:mt-7 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-500 pt-4 border-t border-slate-200/60">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Founded • 21 February 2021 • Theni, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}