import React, { useState, memo } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
} from "lucide-react";

const PortfolioCard = memo(function PortfolioCard({
  item,
  onProjectSelect,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = item.images && item.images.length > 0
    ? item.images
    : item.image
    ? [item.image]
    : [];

  const currentImage = images[currentIndex] || item.coverImage || item.image;

  const nextSlide = (event) => {
    event.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevSlide = (event) => {
    event.stopPropagation();
    if (images.length <= 1) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + images.length) %
        images.length
    );
  };

  const hasLiveUrl =
    item.liveUrl &&
    item.liveUrl !== "#" &&
    item.liveUrl.trim() !== "";

  const handlePreviewClick = (event) => {
    event.stopPropagation();
    if (hasLiveUrl) {
      window.open(item.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardClick = () => {
    onProjectSelect(item);
  };

  return (
    <article
      onClick={handleCardClick}
      className="
        group
        relative
        h-[420px]
        sm:h-[450px]
        overflow-hidden
        rounded-2xl
        border
        border-[#0F172A]/10
        bg-[#FFFFFF]
        cursor-pointer
        transition-all
        duration-300
        hover:border-[#2563EB]/50
        shadow-xs hover:shadow-md
      "
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Slider Image / Clean Fallback (z-0: Bottom layer) */}
        {currentImage ? (
          <img
            src={currentImage}
            alt={item.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              z-0
              transition-opacity
              duration-300
            "
          />
        ) : (
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#102A56] p-6 text-center select-none">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 backdrop-blur-sm">
              <Globe className="w-7 h-7 text-[#F97316]" />
            </div>
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#F1F5F9]/75">
              Official Web Platform
            </span>
          </div>
        )}

        {/* Deep Navy Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#102A56]/85
            via-[#102A56]/55
            to-[#102A56]/25
            z-10
          "
        />

        {/* Extra Depth Fade Layer */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#102A56]/85
            via-transparent
            to-[#102A56]/20
            z-10
          "
        />

        {/* Content Panel */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            justify-between
            p-6
            sm:p-7
          "
        >
          {/* Top Row: Service Tag & Action Arrow / Preview */}
          <div className="flex items-center justify-between gap-3">
            <span
              className="
                inline-block
                rounded-lg
                bg-[#102A56]/75
                border border-white/20
                px-3
                py-1
                text-[11px]
                font-medium
                uppercase
                tracking-[0.04em]
                text-[#F1F5F9]
                backdrop-blur-md
              "
            >
              {item.service}
            </span>

            <div className="flex items-center gap-2">
              {hasLiveUrl && (
                <button
                  type="button"
                  onClick={handlePreviewClick}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    bg-[#FFFFFF]
                    hover:bg-[#F97316]
                    text-[#102A56]
                    hover:text-[#FFFFFF]
                    px-3
                    py-1.5
                    text-[12px]
                    font-medium
                    shadow-sm
                    transition-colors
                    cursor-pointer
                  "
                  title="Open live preview in new tab"
                >
                  <span>Preview</span>
                  <ExternalLink size={12} />
                </button>
              )}

              {/* Action Icon Container */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#2563EB]
                  group-hover:bg-[#F97316]
                  text-[#FFFFFF]
                  opacity-100
                  lg:opacity-0
                  transition-all
                  duration-300
                  lg:group-hover:opacity-100
                "
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Bottom Section: Title -> Navigation Controls -> Category + Metric -> Progress Bar */}
          <div className="w-full">
            {/* Title Section */}
            <h3
              className="
                mb-3
                text-[20px]
                sm:text-[22px]
                font-semibold
                text-[#FFFFFF]
                leading-[1.25]
                tracking-[-0.005em]
                break-words
                line-clamp-2
              "
            >
              {item.title}
            </h3>

            {/* Carousel Navigation Controls Row (Below Title) */}
            {images.length > 1 ? (
              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  opacity-100
                  lg:opacity-0
                  lg:group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              >
                <button
                  type="button"
                  onClick={prevSlide}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#102A56]/70
                    border border-white/20
                    backdrop-blur-md
                    text-[#FFFFFF]
                    hover:bg-[#2563EB]
                    transition-colors
                    duration-200
                    cursor-pointer
                  "
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} aria-hidden="true" focusable="false" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#102A56]/70
                    border border-white/20
                    backdrop-blur-md
                    text-[#FFFFFF]
                    hover:bg-[#2563EB]
                    transition-colors
                    duration-200
                    cursor-pointer
                  "
                  aria-label="Next image"
                >
                  <ChevronRight size={16} aria-hidden="true" focusable="false" />
                </button>
              </div>
            ) : null}

            {/* Bottom Row: Category & Results */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
                pt-1
              "
            >
              <p
                className="
                  text-[12px]
                  uppercase
                  tracking-[0.04em]
                  text-[#F1F5F9]/85
                  font-medium
                "
              >
                {item.category}
              </p>

              <span
                className="
                  text-[13px]
                  sm:text-[14px]
                  font-semibold
                  text-[#F97316]
                  whitespace-nowrap
                "
              >
                {item.results || item.result}
              </span>
            </div>

            {/* Progress Bar Indicators */}
            {images.length > 1 && (
              <div className="mt-3 flex gap-1.5">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      h-1
                      flex-1
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        currentIndex === index
                          ? "bg-white/100"
                          : "bg-white/25"
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

export default PortfolioCard;