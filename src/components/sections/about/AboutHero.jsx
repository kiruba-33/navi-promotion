import React from "react";
import { Users } from "lucide-react";

export default function AboutHero({
  badge,
  description,
  image,
}) {
  return (
    <section
      className="
        relative
        h-[60vh]
        min-h-[520px]
        w-full
        overflow-hidden
        border-b
        border-slate-800
        flex
        items-center
        justify-center
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="About Us Hero"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark Cinematic Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/40
            to-black/20
          "
        />

        {/* Extra Depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-black/10
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >
         {/* Badge */}
<div
  className="
    mb-6
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    px-5
    py-3
  "
>
  <Users
    className="
      h-4
      w-4
      text-white
    "
  />

  <span
    className="
      text-[10px]
            sm:text-xs

            font-semibold
            uppercase

            tracking-wider
      text-white
    "
  >
    {badge || "ABOUT US"}
  </span>
</div>

          {/* Heading */}
          <h1
            className="
              heading-display

              mb-6

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[80px]

              uppercase
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
            "
          >
            WE ARE NAVI
          </h1>

          {/* Description */}
          <p
            className="
              body-large

              max-w-3xl
              mx-auto

              text-white/90
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}