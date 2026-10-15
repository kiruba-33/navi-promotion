import React from "react";
import { ArrowRight, Cpu, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceIntro({
  icon,
  label = "Service",
  title,
  description,
}) {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden border-b border-slate-200/60">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 overflow-x-auto whitespace-nowrap"
        >
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link to="/services" className="hover:text-slate-900 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-orange-600 font-semibold">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Info (7 cols) */}
          <div className="lg:col-span-8">
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-6 select-none">
              {icon && (
                <span className="flex items-center justify-center text-orange-500">
                  {icon}
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                {label}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold tracking-tight leading-[1.12] mb-6">
              {title}
            </h1>

            {/* Description Narrative */}
            <p className="body-large text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-8">
              {description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/become-client"
                className="h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-slate-900 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 hover:bg-orange-500 active:scale-95 transition-all duration-300 shadow-md hover:shadow-orange-500/20"
              >
                <span>Become Client</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </Link>

              <Link
                to="/contact"
                className="h-13 sm:h-14 px-7 sm:px-8 rounded-full border-2 border-slate-300 text-slate-800 font-semibold text-sm sm:text-base inline-flex items-center justify-center hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50/50 active:scale-95 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Highlights Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg shadow-slate-900/5">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Delivery Framework
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Service
                </span>
              </div>

              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Custom Growth Strategy</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Built around your specific business objectives and target market.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Design & Tech Precision</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Engineered with high performance, scalability, and modern UX.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Milestones</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Regular reporting, continuous optimization, and measurable ROI.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Theni · Singapore Hub</span>
                <span className="font-semibold text-slate-900">100% Proven Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}