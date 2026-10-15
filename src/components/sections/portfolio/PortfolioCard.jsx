import React, { useState, memo } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
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
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-2
        cursor-pointer
        transition-all
        duration-300
        hover:border-orange-500/40
      "
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
        {/* Slider Image (z-0: Bottom layer) */}
        <img
          src={images[currentIndex] || item.coverImage || item.image}
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

        {/* Custom Premium Dark Overlay Fade (z-10: Behind the text) */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/50
            to-black/25
            z-10
          "
        />

        {/* Extra Depth Fade Layer (z-10: Behind the text) */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-black/20
            z-10
          "
        />

        {/* Content Panel (z-20: Forcefully on top of overlay layers) */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            justify-between
            p-6
            sm:p-8
          "
        >
          {/* Top Row: Service Tag & Action Arrow / Preview */}
          <div className="flex items-center justify-between gap-3">
            <span
              className="
                inline-block
                rounded-full
                bg-white/20
                px-3.5
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-white
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
                    rounded-full
                    bg-white/90
                    hover:bg-brand-orange
                    text-slate-900
                    hover:text-white
                    px-3.5
                    py-1.5
                    text-[11px]
                    font-bold
                    shadow-md
                    backdrop-blur-md
                    transition-all
                    cursor-pointer
                  "
                  title="Open live preview in new tab"
                >
                  <span>Preview</span>
                  <ExternalLink size={12} />
                </button>
              )}

              {/* Action Circle Container */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-orange
                  text-white
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Bottom Section: Title -> Navigation Controls -> Category + Metric -> Progress Bar */}
          <div className="w-full">
            {/* Title Section */}
            <h3
              className="
                heading-card
                mb-3
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                drop-shadow-sm
                leading-tight
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
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              >
                <button
                  type="button"
                  onClick={prevSlide}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    text-white
                    hover:bg-white/40
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} aria-hidden="true" focusable="false" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    text-white
                    hover:bg-white/40
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                  aria-label="Next image"
                >
                  <ChevronRight size={18} aria-hidden="true" focusable="false" />
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
                  text-xs
                  uppercase
                  tracking-wider
                  text-white/90
                  font-semibold
                  drop-shadow-sm
                "
              >
                {item.category}
              </p>

              <span
                className="
                  text-sm
                  sm:text-base
                  font-bold
                  text-white
                  drop-shadow-sm
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