import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ArrowButton({
  text,
  to = "/",
  variant = "gradient",
  className = "",
}) {
  const variantStyles = {
    gradient:
      "bg-[#2563EB] hover:bg-[#102A56] text-[#FFFFFF] shadow-md shadow-[#2563EB]/20",
    default:
      "bg-[#2563EB] hover:bg-[#102A56] text-[#FFFFFF] shadow-md shadow-[#2563EB]/20",
    hero:
      "border border-white/30 bg-[#102A56]/65 text-[#FFFFFF] backdrop-blur-md hover:bg-[#FFFFFF] hover:text-[#102A56] hover:border-[#FFFFFF]",
    outline:
      "border border-[#102A56]/25 bg-[#FFFFFF] text-[#102A56] hover:border-[#2563EB] hover:text-[#2563EB]",
    orange:
      "bg-[#F97316] hover:bg-[#102A56] text-[#FFFFFF] shadow-md shadow-[#F97316]/20",
  };

  const selectedVariant = variantStyles[variant] || variantStyles.gradient;

  return (
    <Link
      to={to}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-between
        gap-3.5
        overflow-hidden
        rounded-[10px]
        px-6
        py-3.5
        text-[14px]
        sm:text-[15px]
        font-medium
        leading-[1.3]
        transition-all
        duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2
        ${selectedVariant}
        ${className}
      `}>
      {/* SMOOTH HOVER OVERLAY */}
      {(variant === "gradient" || variant === "orange") && (
        <span
          className="
            absolute
            inset-0
            rounded-[10px]
            bg-black/5
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
            pointer-events-none
          "
        />
      )}

      {/* SHINE EFFECT */}
      {(variant === "gradient" || variant === "orange") && (
        <span className="absolute inset-0 overflow-hidden rounded-[10px] pointer-events-none">
          <span
            className="
              absolute
              left-[-130%]
              top-0
              h-full
              w-[120%]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-700
              group-hover:left-[130%]
            "
          />
        </span>
      )}

      {/* TEXT */}
      <span className="relative z-10 whitespace-nowrap tracking-[-0.005em]">
        {text}
      </span>

      {/* ICON */}
      <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" focusable="false" />
    </Link>
  );
}

export default ArrowButton;