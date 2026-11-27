import React from "react";
import {
  Building2,
  Target,
  Zap,
  MapPin,
} from "lucide-react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import ArrowButton from "../../ui/ArrowButton";

export default function About() {
  return (
    <section
      id="about"
      className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#F1F5F9] -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl sm:rounded-[18px] lg:rounded-[20px] overflow-hidden border border-[#0F172A]/10 shadow-lg shadow-[#102A56]/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Navi Promotions Workspace"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-8 right-0 sm:-right-4 lg:-right-6 bg-[#FFFFFF] border border-[#0F172A]/10 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-[#102A56]/10 w-[240px] sm:w-[280px] lg:w-[310px]">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#102A56] rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#F97316]" aria-hidden="true" focusable="false" />
                  </div>
                  <div>
                    <h4 className="text-[18px] sm:text-[20px] text-[#0F172A] leading-[1.25] font-semibold tracking-[-0.01em]">
                      5+ Years
                    </h4>
                    <p className="text-[12px] text-[#0F172A]/65 font-medium uppercase tracking-[0.04em] leading-[1.4] mt-1">
                      Of Digital Expertise
                    </p>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#0F172A]/80 font-normal leading-[1.5]">
                  Marketing, branding and technology — brought together to help businesses build, grow and evolve.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>
            {/* SECTION BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
              <Building2 className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
              <span>About</span>
            </div>

            {/* TITLE */}
            <span className="block text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.05em] leading-[1.4] text-[#F97316] mb-3">
              OUR STORY
            </span>

            {/* HEADING */}
            <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] text-[#0F172A] mb-5 sm:mb-6 tracking-[-0.015em] font-semibold leading-[1.16]">
              Forging Digital<br className="hidden sm:inline" /> Growth Since 2021
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#0F172A]/80 font-normal mb-8 sm:mb-9 max-w-2xl leading-[1.65]">
              Founded on February 21, 2021, Navi Promotions is a digital marketing and technology company helping businesses build stronger brands, reach the right audience, and turn digital opportunities into measurable growth.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-9">
              {/* CARD 01 */}
              <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-[#0F172A]/10 bg-[#F1F5F9]/60 hover:bg-[#FFFFFF] hover:border-[#F97316]/35 transition-all duration-300 shadow-xs">
                <div className="w-11 h-11 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center text-[#F97316]">
                  <Target className="w-5 h-5" aria-hidden="true" focusable="false" />
                </div>
                <h3 className="text-[18px] sm:text-[19px] text-[#0F172A] font-semibold leading-[1.3] tracking-[-0.005em]">
                  Strategic Thinking
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#0F172A]/80 leading-[1.6] font-normal">
                  We combine marketing, branding and technology to create clear digital strategies built around real business goals.
                </p>
              </div>

              {/* CARD 02 */}
              <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-[#0F172A]/10 bg-[#F1F5F9]/60 hover:bg-[#FFFFFF] hover:border-[#F97316]/35 transition-all duration-300 shadow-xs">
                <div className="w-11 h-11 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center text-[#F97316]">
                  <Zap className="w-5 h-5" aria-hidden="true" focusable="false" />
                </div>
                <h3 className="text-[18px] sm:text-[19px] text-[#0F172A] font-semibold leading-[1.3] tracking-[-0.005em]">
                  Built to Execute
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#0F172A]/80 leading-[1.6] font-normal">
                  From campaigns and content to websites and digital solutions, we turn strategy into practical, high-impact execution.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 sm:mt-4">
              <ArrowButton
                text="Discover Navi Promotions"
                to="/about"
                variant="orange"
                className="!text-[14px] sm:!text-[15px] !font-medium !py-3.5 !px-6 !rounded-[10px] !bg-[#F97316] hover:!bg-[#102A56] !shadow-md !shadow-[#F97316]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              />
            </div>

            {/* TRUST LINE (Below CTA) */}
            <div className="mt-6 sm:mt-7 flex items-center gap-2.5 text-[12px] sm:text-[13px] font-medium leading-[1.4] text-[#0F172A]/70 pt-4 border-t border-[#0F172A]/10">
              <MapPin className="w-4 h-4 text-[#F97316] shrink-0" aria-hidden="true" focusable="false" />
              <span>Founded • 21 February 2021 • Theni, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}