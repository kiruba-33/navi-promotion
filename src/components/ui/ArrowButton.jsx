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
      "bg-slate-900 hover:bg-orange-500 text-white shadow-xl shadow-slate-900/10",
    default:
      "bg-slate-900 hover:bg-orange-500 text-white shadow-xl shadow-slate-900/10",
    hero:
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40",
    outline:
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40",
    orange:
      "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-600/30",
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
        gap-4
        overflow-hidden
        rounded-full
        px-7
        md:px-8
        py-4
        text-sm
        md:text-base
        font-semibold
        transition-all
        duration-300
        ${selectedVariant}
        ${className}
      `}>
      {/* SMOOTH HOVER DARKEN OVERLAY FOR ORANGE & GRADIENT VARIANTS */}
      {(variant === "gradient" || variant === "orange") && (
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-black/10
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            pointer-events-none
          "
        />
      )}

      {/* SHINE EFFECT (for gradient/orange variant) */}
      {(variant === "gradient" || variant === "orange") && (
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span
            className="
              absolute
              left-[-130%]
              top-0
              h-full
              w-[120%]
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              transition-all
              duration-700
              group-hover:left-[130%]
            "
          />
        </span>
      )}

      {/* TEXT */}
      <span className="relative z-10 whitespace-nowrap tracking-[-0.01em]">
        {text}
      </span>

      {/* ICON */}
      <ArrowRight className="relative z-10 w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"  aria-hidden="true" focusable="false" />
    </Link>
  );
}

export default ArrowButton;