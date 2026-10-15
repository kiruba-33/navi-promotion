import React from "react";
import { MessageCircle } from "lucide-react";

export default function LetsTalkHero({
  badge,
  title,
  description,
  image,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden

        h-[60vh]
        sm:h-[55vh]
        lg:h-[58vh]
        xl:h-[60vh]

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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Cinematic Fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-black/20
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

          max-w-6xl

          px-5
          sm:px-6
          lg:px-8

          text-center
        "
      >
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-6 shadow-sm select-none backdrop-blur-md">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h1
            className="
              heading-display

              mb-6

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[54px]
              xl:text-6xl
              2xl:text-7xl

              font-bold
              uppercase
              tracking-tight

              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]

              leading-[1.15]
              md:leading-[1.15]
              lg:leading-[1.15]
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              max-w-2xl

              text-sm
              sm:text-base
              lg:text-lg

              text-white/90
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]

              leading-relaxed
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}