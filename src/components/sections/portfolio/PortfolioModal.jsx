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
  Sparkles,
  Palette,
  Type,
} from "lucide-react";

import { slideVariants, getProjectDetails } from "../../../data/portfolio";

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

export default function PortfolioModal({
  project,
  onClose,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projectId = project?.id;
  const category = project?.category;

  const details = getProjectDetails(projectId, category);

  // Dynamic Image Gallery for current project details
  const displayImages =
    details?.imageGallery && details.imageGallery.length > 0
      ? details.imageGallery
      : project?.images && project.images.length > 0
      ? project.images
      : [project?.image || ""];

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex(
      (prev) => (prev + 1) % (displayImages.length || 1)
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + (displayImages.length || 1)) %
        (displayImages.length || 1)
    );
  };

  useEffect(() => {
    setCurrentImageIndex(0);
    setDirection(0);
  }, [projectId]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, displayImages.length, currentImageIndex, onClose]);

  if (!project) return null;

  const isDigitalMarketing = category === "Digital Marketing";
  const isBrandingKit = category === "Branding Kit";

  const hasLiveUrl =
    project.liveUrl &&
    project.liveUrl !== "#" &&
    project.liveUrl.trim() !== "";

  const handleLiveProjectClick = () => {
    if (hasLiveUrl) {
      window.open(
        project.liveUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  {/* =========================================================
      DIGITAL MARKETING - AGENCY CASE STUDY MODAL
     ========================================================= */}
  if (isDigitalMarketing) {
    const clientInfo = details?.clientInfo || {};
    const campaignResults = details?.campaignResults || {};
    const platforms = details?.platformsUsed || [];
    const strategyList = details?.strategy || [];
    const files = details?.projectFiles || [];

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              absolute
              inset-0
              bg-black/70
              backdrop-blur-md
            "
          />

          {/* Modal Container */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-4xl
              max-h-[90vh]
              flex-col
              overflow-y-auto
              rounded-[2.5rem]
              bg-white
              shadow-2xl
            "
          >
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                sm:top-5
                sm:right-5
                lg:top-6
                lg:right-6
                z-40
                flex
                w-10
                h-10
                sm:w-11
                sm:h-11
                lg:w-12
                lg:h-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/90
                backdrop-blur-md
                text-slate-700
                shadow-lg
                hover:bg-white
                hover:text-slate-900
                hover:scale-105
                transition-all
                duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
                focus:ring-2
                focus:ring-slate-400
              "
              aria-label="Close modal"
            >
              <X size={20}  aria-hidden="true" focusable="false" />
            </button>

            {/* 1. Campaign Cover Hero Banner */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden shrink-0">
              <img
                src={displayImages[0] || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Floating Hero Content */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
                    {clientInfo.service || project.service}
                  </span>
                  <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight drop-shadow-md">
                    {project.title}
                  </h2>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Verified Case Study
                  </span>
                </div>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">

              {/* 2. Campaign Information Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Client
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.companyName || project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Industry
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.industry || project.category}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Duration
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.duration || project.duration}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Sub-Category
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {project.subCategory}
                  </span>
                </div>
              </div>

              {/* Platforms Used */}
              {platforms.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    Platforms & Channels Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-xs flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Campaign Results Cards */}
              <div>
                <h3 className="heading-card text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-brand-orange" />
                  Campaign Performance Highlights
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-100 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-brand-orange block mb-1">
                      {campaignResults.primaryMetric || project.results}
                    </span>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Primary Metric
                    </span>
                  </div>
                  {campaignResults.reach && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 block mb-1">
                        {campaignResults.reach}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Total Reach
                      </span>
                    </div>
                  )}
                  {campaignResults.roas && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 block mb-1">
                        {campaignResults.roas}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Avg ROAS
                      </span>
                    </div>
                  )}
                  {campaignResults.leadGrowth && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 block mb-1">
                        {campaignResults.leadGrowth}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Lead Growth
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Challenge & 4. Strategy Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {details?.challenge && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2">
                      <Target size={16} className="text-red-500" />
                      The Challenge
                    </h4>
                    <p className="body-normal text-slate-600 leading-relaxed text-sm">
                      {details.challenge}
                    </p>
                  </div>
                )}

                {strategyList.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2">
                      <Award size={16} className="text-emerald-500"  aria-hidden="true" focusable="false" />
                      The Strategy
                    </h4>
                    <ul className="body-normal text-slate-600 leading-relaxed text-sm space-y-2">
                      {strategyList.map((st, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">•</span>
                          {st}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 7. Project Description / Overview */}
              <div>
                <h3 className="heading-card text-lg font-bold text-slate-900 mb-3">
                  Campaign Overview
                </h3>
                <p className="body-large text-slate-600 leading-relaxed">
                  {details?.projectOverview || project.description}
                </p>
              </div>

              {/* Project Files */}
              {files.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    Deliverables & Project Assets
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {files.map((file, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2"
                      >
                        <span className="text-brand-orange">📄</span>
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Campaign Gallery Carousel */}
              {displayImages.length > 0 && (
                <div>
                  <h3 className="heading-card text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
                    <span>Campaign Visual Assets</span>
                    <span className="text-xs font-normal text-slate-400">
                      {currentImageIndex + 1} of {displayImages.length}
                    </span>
                  </h3>

                  <div className="relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden bg-slate-900">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        key={currentImageIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                        }}
                        src={displayImages[currentImageIndex]}
                        alt={`${project.title} asset ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {displayImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all"
                          aria-label="Previous asset"
                        >
                          <ChevronLeft size={20}  aria-hidden="true" focusable="false" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all"
                          aria-label="Next asset"
                        >
                          <ChevronRight size={20}  aria-hidden="true" focusable="false" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {displayImages.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                      {displayImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(index);
                          }}
                          className={`
                            relative h-16 w-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all
                            ${currentImageIndex === index ? "border-brand-orange scale-105" : "border-slate-200 opacity-60 hover:opacity-100"}
                          `}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 8. CTA / Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Navi Promotions Agency Case Study
                </span>
                <button
                  onClick={onClose}
                  className="
                    flex
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-slate-900
                    px-6
                    py-3.5
                    text-white
                    text-sm
                    font-bold
                    hover:bg-slate-800
                    transition-all
                    shadow-md
                  "
                >
                  <span>Close Case Study</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // =========================================================
  // FEATURE 1: BRANDING KIT - VIDEO VIEWER MODAL (YouTube & Instagram)
  // =========================================================
  if (isBrandingKit && project.subCategory === "Videos") {
    const videoUrl =
      project.videoUrl ||
      project.liveUrl ||
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const embedUrl = getEmbedUrl(videoUrl, project.platform);
    const isInstagram =
      videoUrl.includes("instagram.com") ||
      (project.platform && project.platform.toLowerCase().includes("instagram"));
    const isVertical =
      videoUrl.includes("shorts") || videoUrl.includes("reel") || isInstagram;

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`
              relative z-10 w-full overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl border border-slate-800 flex flex-col items-center justify-center
              ${
                isVertical
                  ? "max-w-md aspect-[9/16] max-h-[85vh]"
                  : "max-w-4xl aspect-video max-h-[85vh]"
              }
            `}
          >
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md hover:bg-slate-800 transition-all border border-slate-700 shadow-lg cursor-pointer
              "
              aria-label="Close video viewer"
            >
              <X size={20}  aria-hidden="true" focusable="false" />
            </button>

            {/* Video Player Frame / Instagram Embed */}
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-white space-y-4 max-w-sm">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-orange shadow-lg">
                  <ExternalLink size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-white">This Instagram Reel cannot be embedded.</h4>
                  <p className="text-xs text-slate-400">Due to Instagram privacy or platform restrictions, this reel must be viewed directly on Instagram.</p>
                </div>
                <button
                  onClick={() => window.open(videoUrl, "_blank", "noopener,noreferrer")}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Open on Instagram</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // =========================================================
  // BRANDING KIT - POSTER SHOWCASE CASE STUDY MODAL
  // =========================================================
  if (isBrandingKit && project.subCategory === "Posters") {
    const posterImages =
      details?.imageGallery && details.imageGallery.length > 0
        ? details.imageGallery
        : project.images && project.images.length > 0
        ? project.images
        : [project.image];
    const clientInfo = details?.clientInfo || {};
    const highlights = details?.designHighlights || [];
    const deliverablesList = details?.deliverables || [];

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container (Premium WHITE Background) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-y-auto rounded-[2.5rem] bg-white shadow-2xl border border-slate-100 text-slate-900
            "
          >
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-700 shadow-md hover:bg-white hover:text-slate-900 hover:scale-105 transition-all border border-slate-200 cursor-pointer
              "
              aria-label="Close poster showcase"
            >
              <X size={20}  aria-hidden="true" focusable="false" />
            </button>

            {/* Header / Client Info Bar */}
            <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pr-12 sm:pr-16 lg:pr-20">
                {/* Company Logo & Title */}
                <div className="flex items-center gap-4">
                  {clientInfo.companyLogo ? (
                    <img
                      src={clientInfo.companyLogo}
                      alt={clientInfo.companyName || project.client}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xl shrink-0">
                      {(clientInfo.companyName || project.client || "P")[0]}
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange block mb-1">
                      {clientInfo.service || project.service}
                    </span>
                    <h2 className="heading-display text-2xl sm:text-3xl text-slate-900 font-extrabold tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold shrink-0">
                  <Sparkles size={14} className="text-amber-500" />
                  Client Case Study
                </span>
              </div>

              {/* Dynamic Metadata Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Company
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {clientInfo.companyName || project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Industry
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {clientInfo.industry || project.category}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Service
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {clientInfo.service || project.service}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Duration
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {clientInfo.duration || project.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Body Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Project Overview */}
              <div>
                <h3 className="heading-card text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  Project Overview
                </h3>
                <p className="body-large text-slate-600 leading-relaxed">
                  {details?.projectOverview || project.description}
                </p>
              </div>

              {/* 1:1 Square Poster Gallery Carousel */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="heading-card text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Poster Gallery Showcase
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {currentImageIndex + 1} of {posterImages.length}
                  </span>
                </div>

                {/* 1:1 Large Square Preview Container */}
                <div className="relative w-full max-w-[480px] aspect-square mx-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg flex items-center justify-center">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentImageIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                      }}
                      src={posterImages[currentImageIndex]}
                      alt={`${project.title} poster ${currentImageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {posterImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all border border-slate-200 cursor-pointer"
                        aria-label="Previous poster"
                      >
                        <ChevronLeft size={22}  aria-hidden="true" focusable="false" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all border border-slate-200 cursor-pointer"
                        aria-label="Next poster"
                      >
                        <ChevronRight size={22}  aria-hidden="true" focusable="false" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails Row */}
                {posterImages.length > 1 && (
                  <div className="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
                    {posterImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(idx);
                        }}
                        className={`
                          relative h-16 w-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer
                          ${currentImageIndex === idx ? "border-brand-orange scale-105 shadow-md" : "border-slate-200 opacity-60 hover:opacity-100"}
                        `}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Design Highlights */}
              {highlights.length > 0 && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 block mb-2">
                    Design Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs">
                        <Sparkles size={16} className="text-brand-orange shrink-0" />
                        <span className="text-xs font-bold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {deliverablesList.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    Project Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {deliverablesList.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2"
                      >
                        <span className="text-brand-orange font-bold">✓</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Close */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Navi Promotions Poster Showcase
                </span>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // =========================================================
  // BRANDING KIT - BRAND SHOWCASE MODAL
  // =========================================================
  if (isBrandingKit) {
    const clientInfo = details?.clientInfo || {};
    const brandStory = details?.brandStory;
    const logoConcept = details?.logoConcept;
    const colorPalette = details?.colorPalette || [];
    const typography = details?.typography;
    const brandAssets = details?.brandAssets || details?.projectFiles || [];

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-4xl
              max-h-[90vh]
              flex-col
              overflow-y-auto
              rounded-[2.5rem]
              bg-white
              shadow-2xl
            "
          >
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                sm:top-5
                sm:right-5
                lg:top-6
                lg:right-6
                z-40
                flex
                w-10
                h-10
                sm:w-11
                sm:h-11
                lg:w-12
                lg:h-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/90
                backdrop-blur-md
                text-slate-700
                shadow-lg
                hover:bg-white
                hover:text-slate-900
                hover:scale-105
                transition-all
                duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
                focus:ring-2
                focus:ring-slate-400
              "
              aria-label="Close modal"
            >
              <X size={20}  aria-hidden="true" focusable="false" />
            </button>

            {/* Hero Banner */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden shrink-0">
              <img
                src={displayImages[0] || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Floating Hero Content */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
                    {clientInfo.service || project.service}
                  </span>
                  <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight drop-shadow-md">
                    {project.title}
                  </h2>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={14} className="text-amber-400" />
                    Brand Identity Showcase
                  </span>
                </div>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">

              {/* Client Information Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Client
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.companyName || project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Industry
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.industry || project.category}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Duration
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {clientInfo.duration || project.duration}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Sub-Category
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {project.subCategory}
                  </span>
                </div>
              </div>

              {/* Brand Story & Logo Concept */}
              <div className="grid md:grid-cols-2 gap-6">
                {brandStory && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-orange" />
                      Brand Story
                    </h4>
                    <p className="body-normal text-slate-600 leading-relaxed text-sm">
                      {brandStory}
                    </p>
                  </div>
                )}

                {logoConcept && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2">
                      <Palette size={16} className="text-emerald-500" />
                      Logo Concept
                    </h4>
                    <p className="body-normal text-slate-600 leading-relaxed text-sm">
                      {logoConcept}
                    </p>
                  </div>
                )}
              </div>

              {/* Color Palette & Typography */}
              <div className="grid sm:grid-cols-2 gap-6">
                {colorPalette.length > 0 && (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400">
                      Color Palette
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      {colorPalette.map((color, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                          <span
                            className="w-5 h-5 rounded-full border border-slate-300 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs font-mono font-bold text-slate-700">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {typography && (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400">
                      Typography
                    </h4>
                    <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                      <Type size={18} className="text-brand-orange" />
                      <span className="text-sm font-bold text-slate-800">{typography}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Overview */}
              <div>
                <h3 className="heading-card text-lg font-bold text-slate-900 mb-3">
                  Project Overview
                </h3>
                <p className="body-large text-slate-600 leading-relaxed">
                  {details?.projectOverview || project.description}
                </p>
              </div>

              {/* Brand Assets & Deliverables */}
              {brandAssets.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    Brand Assets & Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {brandAssets.map((asset, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2"
                      >
                        <span className="text-brand-orange">📦</span>
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Campaign Gallery Carousel */}
              {displayImages.length > 0 && (
                <div>
                  <h3 className="heading-card text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
                    <span>Brand Visual Assets</span>
                    <span className="text-xs font-normal text-slate-400">
                      {currentImageIndex + 1} of {displayImages.length}
                    </span>
                  </h3>

                  <div className="relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden bg-slate-900">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        key={currentImageIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                        }}
                        src={displayImages[currentImageIndex]}
                        alt={`${project.title} asset ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {displayImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all"
                          aria-label="Previous asset"
                        >
                          <ChevronLeft size={20}  aria-hidden="true" focusable="false" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white shadow-md transition-all"
                          aria-label="Next asset"
                        >
                          <ChevronRight size={20}  aria-hidden="true" focusable="false" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {displayImages.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                      {displayImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(index);
                          }}
                          className={`
                            relative h-16 w-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all
                            ${currentImageIndex === index ? "border-brand-orange scale-105" : "border-slate-200 opacity-60 hover:opacity-100"}
                          `}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Navi Promotions Brand Showcase
                </span>
                <button
                  onClick={onClose}
                  className="
                    flex
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-slate-900
                    px-6
                    py-3.5
                    text-white
                    text-sm
                    font-bold
                    hover:bg-slate-800
                    transition-all
                    shadow-md
                  "
                >
                  <span>Close Showcase</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // =========================================================
  // STANDARD FALLBACK MODAL
  // =========================================================
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            absolute
            inset-0
            bg-black/70
            backdrop-blur-md
          "
        />

        {/* Modal */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            z-10
            flex
            w-full
            max-w-6xl
            flex-col
            overflow-hidden
            rounded-[2rem]
            bg-white
            shadow-2xl
            lg:flex-row
            max-h-[90vh]
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-md
            "
          >
            <X size={18}  aria-hidden="true" focusable="false" />
          </button>

          {/* Image Section */}
          <div
            className="
              relative
              h-[300px]
              sm:h-[400px]
              lg:h-auto
              lg:w-1/2
              overflow-hidden
            "
          >
            <AnimatePresence
              initial={false}
              custom={direction}
            >
              <motion.img
                key={currentImageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                src={
                  displayImages[currentImageIndex] || project.image
                }
                alt={project.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            </AnimatePresence>

            {/* Controls */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/80
                    backdrop-blur-md
                  "
                >
                  <ChevronLeft size={20}  aria-hidden="true" focusable="false" />
                </button>

                <button
                  onClick={nextImage}
                  className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/80
                    backdrop-blur-md
                  "
                >
                  <ChevronRight size={20}  aria-hidden="true" focusable="false" />
                </button>
              </>
            )}

            {/* Indicators */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-20
                flex
                -translate-x-1/2
                gap-2
              "
            >
              {displayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(
                      index > currentImageIndex
                        ? 1
                        : -1
                    );

                    setCurrentImageIndex(index);
                  }}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentImageIndex === index
                        ? "w-8 bg-brand-orange"
                        : "w-2 bg-white"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className="
              flex
              flex-1
              flex-col
              overflow-y-auto
              p-6
              sm:p-8
              lg:p-12
            "
          >
            {/* Badge */}
            <span
              className="
                mb-5
                w-fit
                rounded-full
                bg-brand-orange/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-brand-orange
              "
            >
              {project.service}
            </span>

            {/* Title */}
            <h2
              className="
                heading-display
                mb-3
                text-3xl
                sm:text-4xl
                lg:text-5xl
              "
            >
              {project.title}
            </h2>

            <p
              className="
                mb-6
                text-xl
                font-black
                text-brand-orange
              "
            >
              {project.results}
            </p>

            {/* Description */}
            <p
              className="
                body-large
                mb-8
                text-slate-600
              "
            >
              {project.description}
            </p>

            {/* Info Grid */}
            <div
              className="
                mb-8
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="label-text mb-2 text-slate-500">
                  Client
                </h4>

                <p className="font-bold text-slate-900">
                  {project.client}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="label-text mb-2 text-slate-500">
                  Duration
                </h4>

                <p className="font-bold text-slate-900">
                  {project.duration}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 sm:col-span-2">
                <h4 className="label-text mb-2 text-slate-500">
                  Category
                </h4>

                <p className="font-bold text-slate-900">
                  {project.category}
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              disabled={!hasLiveUrl}
              onClick={handleLiveProjectClick}
              className={`
                mt-auto
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-slate-900
                px-6
                py-4
                text-white
                transition-all
                ${
                  hasLiveUrl
                    ? "hover:opacity-90 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }
              `}
            >
              {hasLiveUrl ? "View Live Project" : "Coming Soon"}

              <ExternalLink size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}