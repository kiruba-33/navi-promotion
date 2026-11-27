import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useHeroScrollAnimation } from "../../../../hooks/useHeroScrollAnimation";

export default function ServiceIntro({
  icon,
  label = "Service",
  title,
  description,
}) {
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation({
    yDesktop: 160,
    yMobile: 60,
    fadeEnd: 0.7,
  });

  return (
    <section ref={containerRef} className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#F1F5F9] via-white to-white overflow-hidden border-b border-slate-200/80">
      {/* Ambient background glow */}
      <motion.div style={{ scale: scaleImage }} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#102A56]/5 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div style={{ y: yText, opacity: opacityHero }} className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-[#0F172A]/60 mb-8 overflow-x-auto whitespace-nowrap"
        >
          <Link to="/" className="hover:text-[#102A56] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link to="/services" className="hover:text-[#102A56] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-[#2563EB] font-medium">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Info (8 cols) */}
          <div className="lg:col-span-8">
            {/* Category Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#2563EB]/20 shadow-2xs mb-6 select-none">
              {icon && (
                <span className="flex items-center justify-center text-[#F97316]">
                  {icon}
                </span>
              )}
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
                {label}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-display text-[clamp(2rem,3.6vw,3.125rem)] text-[#0F172A] font-semibold tracking-[-0.025em] leading-[1.12] mb-5">
              {title}
            </h1>

            {/* Description Narrative */}
            <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-3xl leading-[1.65] mb-8">
              {description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/become-client"
                className="h-12 px-6 sm:px-7 rounded-[10px] bg-[#F97316] text-white font-medium text-[14px] sm:text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#102A56] transition-all duration-200 shadow-sm"
              >
                <span>Become Client</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </Link>

              <Link
                to="/contact"
                className="h-12 px-6 sm:px-7 rounded-[10px] border border-[#102A56]/25 bg-white text-[#102A56] font-medium text-[14px] sm:text-[15px] inline-flex items-center justify-center hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#F1F5F9]/60 transition-all duration-200"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Highlights Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg shadow-[#102A56]/5">
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/70">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/55">
                  Delivery Framework
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium uppercase tracking-wider bg-[#F1F5F9] text-[#102A56] border border-[#2563EB]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                  Active Service
                </span>
              </div>

              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#2563EB] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">Custom Growth Strategy</h4>
                    <p className="text-xs text-[#0F172A]/70 mt-0.5">Built around your specific business objectives and target market.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#F97316] flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">Design &amp; Tech Precision</h4>
                    <p className="text-xs text-[#0F172A]/70 mt-0.5">Engineered with high performance, scalability, and modern UX.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#2563EB] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">Transparent Milestones</h4>
                    <p className="text-xs text-[#0F172A]/70 mt-0.5">Regular reporting, continuous optimization, and measurable ROI.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-[#0F172A]/60">
                <span>Theni · Singapore Hub</span>
                <span className="font-medium text-[#102A56]">100% Proven Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}