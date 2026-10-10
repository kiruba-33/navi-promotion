import React from "react";
import { ShieldCheck } from "lucide-react";

export default function RegulationsHero({
  badge,
  title,
  description,
  image,
}) {
  return (
    <section
      className="
        relative
        h-[60vh]
        min-h-[520px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Strong Cinematic Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/60
            to-black/40
          "
        />

        {/* Extra Depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-black/10
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
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
              border-white/15
              bg-white/10
              backdrop-blur-md
              px-5
              py-3
            "
          >
            <ShieldCheck
              className="
                h-4
                w-4
                text-orange-500
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
              "
            >
              {badge}
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
    lg:text-6xl
    xl:text-7xl

    uppercase
    text-white

    drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
  "
>
  OFFICIAL{" "}
  <span className="ml-4">
    REGULATIONS
  </span>
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