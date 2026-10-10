import React from "react";
import { MessageCircle } from "lucide-react";

import ArrowButton from "./ui/ArrowButton";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff15 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/80 pointer-events-none" />

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500 blur-[128px] opacity-10 pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange-500 blur-[128px] opacity-10 pointer-events-none" />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          text-center
        "
      >
        {/* HEADING */}

        <h2
          className="
            heading-display
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            heading-primary
            mb-8

            sm:leading-[1.1]
            md:leading-[1.15]
            lg:leading-[1.15]
          "
        >
          Ready to Grow
          <br className="hidden md:block" />

          Your Business With

          <br />

          <span className="heading-highlight">
            Strategic Marketing?
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            body-large
            text-slate-600
            max-w-3xl
            mx-auto
            mb-12
          "
        >
          Partner with Navi Promotions to build a
          scalable, data-driven growth engine for
          your business and unlock long-term
          digital success.
        </p>

        {/* BUTTONS */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >
          <ArrowButton
            text="Book Strategy Consultation"
            to="/contact"
          />

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3

              min-w-[260px]
              sm:min-w-[320px]

              px-8
              py-4

              rounded-[1.75rem]

              bg-white
              border
              border-slate-200

              text-slate-900
              font-bold

              transition-all
              duration-300

              hover:border-orange-500
              hover:text-orange-500
            "
          >
            <MessageCircle
              className="
                w-5
                h-5
                text-[#25D366]
              "
            />

            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}