import React, { useState, memo } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PortfolioCard = memo(function PortfolioCard({
  item,
  onProjectSelect,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex(
      (prev) => (prev + 1) % item.images.length
    );
  };

  const prevSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex(
      (prev) =>
        (prev - 1 + item.images.length) %
        item.images.length
    );
  };

  const handleCardClick = () => {
    if (item.category === "Development") {
      if (item.liveUrl && item.liveUrl !== "#" && item.liveUrl.trim() !== "") {
        window.open(item.liveUrl, "_blank", "noopener,noreferrer");
        return;
      }
    }
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
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
        
        {/* Slider Image (z-0: Bottom layer) */}
        <img
          src={item.images[currentIndex]}
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
            from-black/70
            via-black/45
            to-black/20
            z-10
          "
        />

        {/* Extra Depth Fade Layer (z-10: Behind the text) */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-black/15
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
          {/* Top Row: Service Tag & Action Arrow */}
          <div className="flex items-center justify-between gap-4">
            <span
              className="
                inline-block
                rounded-full
                bg-white/20
                px-4
                py-2
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-md
              "
            >
              {item.service}
            </span>

            {/* Action Circle Container */}
            <div
              className="
                flex
                h-12
                w-12
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
              <ArrowUpRight size={22} />
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
            {item.images.length > 1 ? (
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
                    h-10
                    w-10
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
                  <ChevronLeft size={18}  aria-hidden="true" focusable="false" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="
                    flex
                    h-10
                    w-10
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
                  <ChevronRight size={18}  aria-hidden="true" focusable="false" />
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
                  text-white
                  font-semibold
                  drop-shadow-sm
                "
              >
                {item.category}
              </p>

              <span
                className="
                  text-sm
                  sm:text-lg
                  font-black
                  text-white
                  drop-shadow-sm
                  whitespace-nowrap
                "
              >
                {item.results}
              </span>
            </div>

            {/* Progress Bar Indicators */}
            <div className="mt-4 flex gap-2">
              {item.images.map((_, index) => (
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
                        : "bg-white/20"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export default PortfolioCard;