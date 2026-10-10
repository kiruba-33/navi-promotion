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
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-800">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 select-none">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Let's Build Together
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14] mb-6">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="body-large text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/become-client"
                className="h-13 sm:h-14 px-8 rounded-full bg-orange-500 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 hover:bg-orange-600 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/30"
              >
                <span>Become Client</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </Link>

              <Link
                to="/contact"
                className="h-13 sm:h-14 px-8 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Strategy-First Execution</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Transparent Delivery SLAs</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Measurable Growth Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}