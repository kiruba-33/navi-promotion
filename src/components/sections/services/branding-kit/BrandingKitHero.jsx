import { Palette } from "lucide-react";

export default function BrandingKitHero() {
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
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1400"
          alt="Branding Kit"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              mb-6
            "
          >
            <Palette className="w-4 h-4 text-[#ffb300]" />

            <span
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.25em]
                font-semibold
                text-white
              "
            >
              BRANDING KIT
            </span>
          </div>

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
           DEFINE YOUR BRAND
          </h1>

          <p
            className="
              body-large
              max-w-3xl
              mx-auto
              text-white/85
            "
          >
            Comprehensive branding and multimedia
            content that makes your brand stand out
            and connect with your audience.
          </p>
        </div>
      </div>
    </section>
  );
}