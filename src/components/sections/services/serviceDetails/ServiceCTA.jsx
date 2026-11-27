import React from "react";
import { ArrowRight, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCTA({
  title = "Ready To Grow Your Business?",
  description = "Let's create a strategy and solution tailored to your business goals.",
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#102A56] p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-[#102A56]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#F97316]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md mb-6 select-none">
              <Rocket className="w-4 h-4 text-[#F97316]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white">
                Let&apos;s Build Together
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="heading-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-white tracking-[-0.02em] leading-[1.15] mb-5">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="body-large text-[#F1F5F9]/85 text-[15px] sm:text-[17px] leading-[1.65] max-w-2xl mb-9">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/become-client"
                className="h-12 px-7 rounded-[10px] bg-[#F97316] text-white font-medium text-[14px] sm:text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#2563EB] transition-all duration-200 shadow-md"
              >
                <span>Become Client</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </Link>

              <Link
                to="/contact"
                className="h-12 px-7 rounded-[10px] bg-white/10 border border-white/25 text-white font-medium text-[14px] sm:text-[15px] inline-flex items-center justify-center hover:bg-white/20 transition-all duration-200"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#F1F5F9]/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Strategy-First Execution</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Transparent Delivery SLAs</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Measurable Growth Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}