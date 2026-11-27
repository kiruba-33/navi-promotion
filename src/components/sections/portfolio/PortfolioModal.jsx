import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Award,
  Palette,
  Type,
  CheckCircle2,
  Code2,
  Layers,
  Globe,
  Play,
  FileText,
  Calendar,
  Building2,
  Laptop,
  ArrowUpRight,
  ShieldCheck,
  FolderKanban,
} from "lucide-react";

import { getProjectDetails } from "../../../data/portfolio";
import BookStrategyModal from "../../ui/BookStrategyModal";

function getEmbedUrl(url, platform) {
  if (!url) return null;
  const lowerPlatform = (platform || "").toLowerCase();

  // YouTube watch / shorts / youtu.be
  if (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    lowerPlatform === "youtube"
  ) {
    let videoId = "";
    if (url.includes("youtube.com/watch")) {
      const match = url.match(/[?&]v=([^&]+)/);
      if (match) videoId = match[1];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("youtube.com/shorts/")[1]?.split("?")[0];
    }
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  }

  // Instagram Reel / Post
  if (
    url.includes("instagram.com") ||
    lowerPlatform === "instagram"
  ) {
    const cleanUrl = url.split("?")[0];
    const endsWithSlash = cleanUrl.endsWith("/") ? cleanUrl : cleanUrl + "/";
    return `${endsWithSlash}embed`;
  }

  // Vimeo
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
  }

  return url;
}

export default function PortfolioModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const projectId = project?.id;
  const category = project?.category;

  const details = getProjectDetails(projectId, category);

  // Consolidated image gallery
  const displayImages =
    details?.screenshots?.map((s) => s.url) ||
    details?.imageGallery ||
    (project?.images && project.images.length > 0
      ? project.images
      : [project?.image || project?.coverImage || ""]);

  const screenshots = details?.screenshots || [];

  const nextImage = () => {
    if (displayImages.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    if (displayImages.length <= 1) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length
    );
  };

  const [prevProjectId, setPrevProjectId] = useState(projectId);
  if (prevProjectId !== projectId) {
    setPrevProjectId(projectId);
    setCurrentImageIndex(0);
  }

  const numImages = displayImages.length;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isStrategyModalOpen) {
          setIsStrategyModalOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft") {
        if (numImages > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + numImages) % numImages);
        }
      } else if (e.key === "ArrowRight") {
        if (numImages > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % numImages);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, isStrategyModalOpen, numImages]);

  if (!project) return null;

  const isDevelopment = category === "Development";
  const isDigitalMarketing = category === "Digital Marketing";
  const isBrandingKit = category === "Branding Kit";
  const isWebsite = project.subCategory === "Website" || isDevelopment;
  const isVideoOrReel =
    project.subCategory === "Videos" || Boolean(project.videoUrl);

  const liveDestination =
    project.liveUrl || details?.liveUrl || details?.previewDestination;
  const hasLiveUrl =
    Boolean(liveDestination) &&
    liveDestination !== "#" &&
    liveDestination.trim() !== "";

  const handleLivePreviewClick = () => {
    if (hasLiveUrl) {
      window.open(liveDestination, "_blank", "noopener,noreferrer");
    }
  };

  // Metadata mappings
  const clientInfo = details?.clientInfo || {};
  const clientName = clientInfo.companyName || project.client || "Confidential Client";
  const industry = clientInfo.industry || project.projectType || project.subCategory || "Technology";
  const duration = clientInfo.duration || project.duration || "Multi-phase";
  const primaryMetric =
    details?.campaignResults?.primaryMetric ||
    project.results ||
    project.result ||
    "High Impact";

  const overviewText =
    details?.projectOverview || project.description || project.shortDescription;
  const challengeText = details?.challenge;
  const solutionText = details?.solution;
  const techStack = details?.techStack || [];
  const keyFeatures = details?.keyFeatures || [];
  const strategyList = details?.strategy || [];
  const platformsUsed = details?.platformsUsed || [];
  const campaignResults = details?.campaignResults || {};
  const brandStory = details?.brandStory;
  const colorPalette = details?.colorPalette || [];
  const typography = details?.typography;

  // Video embed calculations
  const videoUrl = project.videoUrl || details?.videoUrl;
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl, project.platform) : null;
  const isVerticalVideo =
    videoUrl &&
    (videoUrl.includes("shorts") ||
      videoUrl.includes("reel") ||
      (project.platform &&
        project.platform.toLowerCase().includes("instagram")) ||
      (project.platform &&
        project.platform.toLowerCase().includes("shorts")));

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#102A56]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-5xl
              max-h-[92vh]
              flex-col
              overflow-y-auto
              rounded-2xl
              bg-[#FFFFFF]
              shadow-2xl
              border
              border-[#0F172A]/10
              text-[#0F172A]
            "
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                sm:top-6
                sm:right-6
                z-50
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-[#FFFFFF]/90
                hover:bg-[#102A56]
                text-[#102A56]
                hover:text-[#FFFFFF]
                shadow-md
                backdrop-blur-md
                transition-colors
                cursor-pointer
                border
                border-[#0F172A]/15
              "
              aria-label="Close modal"
            >
              <X size={18} aria-hidden="true" focusable="false" />
            </button>

            {/* 1. HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#102A56] text-[#FFFFFF] shrink-0">
              {/* Background Cover Image with Gradient */}
              <div className="absolute inset-0 z-0">
                {(displayImages[0] || project.coverImage || project.image) && (
                  <img
                    src={displayImages[0] || project.coverImage || project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-20"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A56] via-[#102A56]/85 to-[#102A56]/60" />
              </div>

              <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-12 max-w-4xl">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-[#2563EB]/25
                      border
                      border-[#2563EB]/40
                      px-3
                      py-1
                      text-[12px]
                      font-medium
                      uppercase
                      tracking-[0.04em]
                      text-[#F1F5F9]
                    "
                  >
                    <FolderKanban size={13} className="text-[#F97316]" />
                    {project.service || project.category}
                  </span>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-white/10
                      border
                      border-white/20
                      px-3
                      py-1
                      text-[12px]
                      font-medium
                      text-[#F1F5F9]
                    "
                  >
                    {project.subCategory}
                  </span>

                  {hasLiveUrl && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-white/10
                        border
                        border-white/20
                        px-3
                        py-1
                        text-[12px]
                        font-medium
                        text-[#F97316]
                      "
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                      Live Project
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="heading-section text-[#FFFFFF] mb-4">
                  {project.title}
                </h2>

                {/* Meta Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/15">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#F1F5F9]/65 block mb-0.5">
                      Client
                    </span>
                    <p className="text-[14px] sm:text-[15px] font-medium text-[#FFFFFF] truncate">
                      {clientName}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#F1F5F9]/65 block mb-0.5">
                      Industry
                    </span>
                    <p className="text-[14px] sm:text-[15px] font-medium text-[#FFFFFF] truncate">
                      {industry}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#F1F5F9]/65 block mb-0.5">
                      Timeline
                    </span>
                    <p className="text-[14px] sm:text-[15px] font-medium text-[#FFFFFF]">
                      {duration}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#F1F5F9]/65 block mb-0.5">
                      Key Result
                    </span>
                    <p className="text-[14px] sm:text-[15px] font-semibold text-[#F97316] whitespace-nowrap">
                      {primaryMetric}
                    </p>
                  </div>
                </div>

                {/* Live Preview Button in Hero for Website Projects */}
                {hasLiveUrl && (
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleLivePreviewClick}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[10px]
                        bg-[#F97316]
                        hover:bg-[#2563EB]
                        text-[#FFFFFF]
                        px-5
                        py-2.5
                        text-[14px]
                        font-medium
                        shadow-sm
                        transition-colors
                        cursor-pointer
                      "
                    >
                      <span>Preview Live Website</span>
                      <ExternalLink size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsStrategyModalOpen(true)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[10px]
                        bg-white/10
                        hover:bg-[#FFFFFF]
                        hover:text-[#102A56]
                        border
                        border-white/25
                        text-[#FFFFFF]
                        px-5
                        py-2.5
                        text-[14px]
                        font-medium
                        transition-colors
                        cursor-pointer
                      "
                    >
                      <span>Book Strategy Call</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* =========================================================
                2. OVERVIEW & CHALLENGE (Service Detail Structure)
               ========================================================= */}
            <div className="p-6 sm:p-10 space-y-10">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-orange" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Project Overview
                  </span>
                </div>

                <p className="body-large text-slate-700 leading-relaxed max-w-4xl">
                  {overviewText}
                </p>

                {challengeText && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6 mt-6">
                    <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
                      <Target size={18} className="text-brand-orange" />
                      <span>The Business Challenge</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {challengeText}
                    </p>
                  </div>
                )}
              </section>

              {/* =========================================================
                  3. SUPPORTING CONTENT (Aligned with Service Category)
                 ========================================================= */}
              {/* Category Case A: DEVELOPMENT / WEBSITE */}
              {isDevelopment && (
                <section className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} className="text-brand-orange" />
                    <h3 className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
                      Engineering & Technical Architecture
                    </h3>
                  </div>

                  {solutionText && (
                    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Delivered Solution
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {solutionText}
                      </p>
                    </div>
                  )}

                  {keyFeatures.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Core Capabilities Delivered
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {keyFeatures.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 text-sm text-slate-700"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-emerald-500 shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {techStack.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Technology Stack & Infrastructure
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Development Metrics Strip */}
                  {campaignResults && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Primary KPI
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900">
                          {campaignResults.primaryMetric || primaryMetric}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Speed / Performance
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900">
                          {campaignResults.speed || "< 1.2s"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Growth Impact
                        </span>
                        <p className="text-base sm:text-lg font-bold text-emerald-600">
                          {campaignResults.leadGrowth || "+100%"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Standards
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900 truncate">
                          {campaignResults.accessibility || "High Standard"}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Category Case B: DIGITAL MARKETING */}
              {isDigitalMarketing && (
                <section className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-brand-orange" />
                    <h3 className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
                      Strategic Marketing Execution
                    </h3>
                  </div>

                  {strategyList.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Strategic Growth Pillars
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {strategyList.map((pillar, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-700"
                          >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs mb-2">
                              0{i + 1}
                            </span>
                            <p>{pillar}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {platformsUsed.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Marketing Channels & Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {platformsUsed.map((p, i) => (
                          <span
                            key={i}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {campaignResults && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Primary Outcome
                        </span>
                        <p className="text-base sm:text-lg font-bold text-brand-orange">
                          {campaignResults.primaryMetric}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Campaign Reach
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900">
                          {campaignResults.reach}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          ROAS
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900">
                          {campaignResults.roas}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Lead Velocity
                        </span>
                        <p className="text-base sm:text-lg font-bold text-emerald-600">
                          {campaignResults.leadGrowth}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Category Case C: BRANDING KIT (Visual Identity, Story, Palette) */}
              {isBrandingKit && !isVideoOrReel && (
                <section className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Palette size={18} className="text-brand-orange" />
                    <h3 className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
                      Brand System & Identity Design
                    </h3>
                  </div>

                  {brandStory && (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Brand Narrative
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 italic">
                        "{brandStory}"
                      </p>
                    </div>
                  )}

                  {colorPalette.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Color Palette System
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {colorPalette.map((color, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 pr-3 shadow-xs"
                          >
                            <span
                              className="h-7 w-7 rounded-lg border border-black/10 shadow-inner"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs font-medium text-[#0F172A]/80">
                              {color}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {typography && (
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                      <Type size={18} className="text-slate-500" />
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                          Typography Architecture
                        </span>
                        <p className="text-sm font-bold text-slate-900">
                          {typography}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* =========================================================
                  4. VISUALS SHOWCASE (Browser Mockup, Reel Player, Lightbox)
                 ========================================================= */}
              <section className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isVideoOrReel ? (
                      <Play size={18} className="text-brand-orange" />
                    ) : (
                      <Laptop size={18} className="text-brand-orange" />
                    )}
                    <h3 className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
                      {isVideoOrReel
                        ? "Video & Motion Showcase"
                        : isWebsite
                        ? "Interactive Project Screenshots & Visuals"
                        : "Visual Showcase & Deliverables"}
                    </h3>
                  </div>

                  {displayImages.length > 1 && !isVideoOrReel && (
                    <span className="text-xs font-semibold text-slate-500">
                      {currentImageIndex + 1} of {displayImages.length}
                    </span>
                  )}
                </div>

                {/* Case 4A: REELS & VIDEO PROJECTS */}
                {isVideoOrReel && videoUrl ? (
                  <div className="space-y-4">
                    <div
                      className={`
                        mx-auto overflow-hidden rounded-2xl bg-slate-950 shadow-xl border border-slate-800
                        ${
                          isVerticalVideo
                            ? "max-w-xs sm:max-w-sm aspect-[9/16]"
                            : "max-w-3xl aspect-video"
                        }
                      `}
                    >
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={project.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center p-6 text-center text-white space-y-4">
                          <Play size={32} className="text-[#F97316]" />
                          <p className="text-sm text-[#F1F5F9]/85">
                            Due to platform security restrictions, this reel can be viewed directly on {project.platform || "Instagram"}.
                          </p>
                          <button
                            type="button"
                            onClick={() =>
                              window.open(videoUrl, "_blank", "noopener,noreferrer")
                            }
                            className="inline-flex items-center gap-2 rounded-[10px] bg-[#2563EB] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#F97316] transition-colors cursor-pointer"
                          >
                            <span>Open on {project.platform || "Instagram"}</span>
                            <ExternalLink size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Stills gallery below video */}
                    {displayImages.length > 1 && (
                      <div className="mt-4">
                        <span className="text-xs font-medium uppercase tracking-wider text-[#0F172A]/55 block mb-2">
                          Production Stills
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {displayImages.slice(0, 3).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt="Production Still"
                              className="h-24 sm:h-32 w-full object-cover rounded-xl border border-slate-200"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : isWebsite ? (
                  /* Case 4B: WEBSITE PROJECTS (Browser Mockup Frame) */
                  <div className="space-y-4">
                    {/* Browser Mockup Window */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#102A56] shadow-xl">
                      {/* Browser Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#102A56] px-4 py-3">
                        {/* macOS Window Controls */}
                        <div className="flex items-center gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                          <span className="h-3 w-3 rounded-full bg-[#F97316]/85" />
                          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                        </div>

                        {/* Browser Address Pill */}
                        <div className="flex max-w-sm sm:max-w-md flex-1 items-center justify-center mx-4">
                          <div className="flex w-full items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-xs text-[#F1F5F9] border border-white/15">
                            <Globe size={12} className="text-[#F1F5F9]/70 shrink-0" />
                            <span className="truncate">
                              {liveDestination || "https://preview.navipromotions.com"}
                            </span>
                          </div>
                        </div>

                        {/* Open Action */}
                        {hasLiveUrl ? (
                          <button
                            type="button"
                            onClick={handleLivePreviewClick}
                            className="flex items-center gap-1 text-xs font-medium text-[#F97316] hover:text-white transition-colors cursor-pointer"
                            title="Open live preview in new tab"
                          >
                            <span className="hidden sm:inline">Preview</span>
                            <ExternalLink size={14} />
                          </button>
                        ) : (
                          <div className="w-12" />
                        )}
                      </div>

                      {/* Browser Screenshot Viewport */}
                      <div className="relative aspect-video max-h-[460px] w-full overflow-hidden bg-[#102A56] flex items-center justify-center">
                        {(displayImages[currentImageIndex] || project.coverImage) ? (
                          <img
                            src={displayImages[currentImageIndex] || project.coverImage}
                            alt={project.title}
                            className="h-full w-full object-cover transition-all duration-300"
                          />
                        ) : (
                          <div className="h-full w-full flex flex-col items-center justify-center bg-[#102A56] text-[#F1F5F9]/80 p-8 text-center select-none">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                              <Globe className="w-8 h-8 text-[#F97316]" />
                            </div>
                            <span className="text-lg font-semibold text-white mb-1">
                              {project.title}
                            </span>
                            <span className="text-xs text-[#F1F5F9]/60 uppercase tracking-wider mb-4">
                              Official Web Project
                            </span>
                            {hasLiveUrl && (
                              <button
                                type="button"
                                onClick={handleLivePreviewClick}
                                className="inline-flex items-center gap-2 rounded-[10px] bg-[#2563EB] hover:bg-[#F97316] text-white px-4 py-2 text-[13px] font-medium transition-all shadow-md cursor-pointer"
                              >
                                <span>Launch Live Website</span>
                                <ExternalLink size={14} />
                              </button>
                            )}
                          </div>
                        )}

                        {/* Arrow Nav Buttons */}
                        {displayImages.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={prevImage}
                              className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#102A56]/80
                                hover:bg-[#2563EB]
                                border border-white/20
                                text-[#FFFFFF]
                                backdrop-blur-md
                                transition-colors
                                cursor-pointer
                              "
                              aria-label="Previous screenshot"
                            >
                              <ChevronLeft size={18} />
                            </button>

                            <button
                              type="button"
                              onClick={nextImage}
                              className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#102A56]/80
                                hover:bg-[#2563EB]
                                border border-white/20
                                text-[#FFFFFF]
                                backdrop-blur-md
                                transition-colors
                                cursor-pointer
                              "
                              aria-label="Next screenshot"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </>
                        )}

                        {/* Screenshot Caption Overlay */}
                        {screenshots[currentImageIndex] && (
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                            <p className="text-xs font-bold">
                              {screenshots[currentImageIndex].title}
                            </p>
                            <p className="text-[11px] text-slate-300">
                              {screenshots[currentImageIndex].caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Screenshot Thumbnails Strip & Preview Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      {displayImages.length > 1 && (
                        <div className="flex flex-wrap gap-2">
                          {displayImages.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`
                                overflow-hidden
                                rounded-lg
                                border-2
                                transition-all
                                cursor-pointer
                                ${
                                  currentImageIndex === idx
                                    ? "border-[#2563EB] scale-105 shadow-md"
                                    : "border-slate-200 opacity-60 hover:opacity-100"
                                }
                              `}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="h-12 w-20 object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      {hasLiveUrl && (
                        <button
                          type="button"
                          onClick={handleLivePreviewClick}
                          className="
                            ml-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-[10px]
                            bg-[#102A56]
                            hover:bg-[#2563EB]
                            text-[#FFFFFF]
                            px-4
                            py-2.5
                            text-[13px]
                            font-medium
                            transition-colors
                            shadow-sm
                            cursor-pointer
                          "
                        >
                          <span>Open Live Website</span>
                          <ExternalLink size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Case 4C: STANDARD LIGHTBOX GALLERY (Posters, Logos, Ads) */
                  <div className="space-y-4">
                    <div className="relative aspect-video max-h-[460px] w-full overflow-hidden rounded-2xl bg-[#F1F5F9] border border-[#0F172A]/10">
                      <img
                        src={displayImages[currentImageIndex] || project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />

                      {displayImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={prevImage}
                            className="
                              absolute
                              left-3
                              top-1/2
                              -translate-y-1/2
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#FFFFFF]/90
                              hover:bg-[#2563EB]
                              text-[#102A56]
                              hover:text-[#FFFFFF]
                              backdrop-blur-md
                              shadow-md
                              transition-colors
                              cursor-pointer
                            "
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={nextImage}
                            className="
                              absolute
                              right-3
                              top-1/2
                              -translate-y-1/2
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#FFFFFF]/90
                              hover:bg-[#2563EB]
                              text-[#102A56]
                              hover:text-[#FFFFFF]
                              backdrop-blur-md
                              shadow-md
                              transition-colors
                              cursor-pointer
                            "
                            aria-label="Next image"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Selector */}
                    {displayImages.length > 1 && (
                      <div className="flex flex-wrap gap-2">
                        {displayImages.map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`
                              overflow-hidden
                              rounded-lg
                              border-2
                              transition-all
                              cursor-pointer
                              ${
                                currentImageIndex === idx
                                  ? "border-[#2563EB] shadow-sm"
                                  : "border-[#0F172A]/15 opacity-60 hover:opacity-100"
                              }
                            `}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="h-12 w-20 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* 5. CTA SECTION */}
              <section className="rounded-2xl bg-[#102A56] text-[#FFFFFF] p-6 sm:p-10 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="inline-block rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.04em] text-[#F97316]">
                    Next Steps
                  </span>

                  <h3 className="heading-section text-[#FFFFFF]">
                    {isDevelopment
                      ? "Ready to Build Your Next Web Platform?"
                      : isDigitalMarketing
                      ? "Ready to Accelerate Your Brand Growth?"
                      : "Ready to Elevate Your Visual Identity?"}
                  </h3>

                  <p className="body-large text-[#F1F5F9]/85">
                    Partner with Navi Promotions to turn strategy, creativity, and technology into tangible business results.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsStrategyModalOpen(true)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[10px]
                        bg-[#F97316]
                        hover:bg-[#2563EB]
                        text-[#FFFFFF]
                        px-6
                        py-3
                        text-[14px]
                        sm:text-[15px]
                        font-medium
                        shadow-sm
                        transition-colors
                        cursor-pointer
                      "
                    >
                      <span>Book Strategy Call</span>
                      <ArrowUpRight size={16} />
                    </button>

                    {hasLiveUrl && (
                      <button
                        type="button"
                        onClick={handleLivePreviewClick}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-[10px]
                          bg-white/10
                          hover:bg-[#FFFFFF]
                          hover:text-[#102A56]
                          border
                          border-white/25
                          text-[#FFFFFF]
                          px-5
                          py-3
                          text-[14px]
                          sm:text-[15px]
                          font-medium
                          transition-colors
                          cursor-pointer
                        "
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Book Strategy Form Modal */}
      <BookStrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}