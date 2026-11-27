import React from "react";
import { MessageCircle } from "lucide-react";

import ArrowButton from "./ui/ArrowButton";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F1F5F9]
        border-t border-[#0F172A]/10
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          relative
          z-10
          max-w-4xl
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
            heading-section
            text-[#0F172A]
            mb-5
          "
        >
          Ready to Grow
          <br className="hidden md:block" />
          {" "}Your Business With Strategic Marketing?
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            body-large
            text-[#0F172A]/80
            max-w-2xl
            mx-auto
            mb-9
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
            gap-4
          "
        >
          <ArrowButton
            text="Book Strategy Consultation"
            to="/contact"
            variant="orange"
            className="w-full sm:w-auto justify-center"
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
              w-full
              sm:w-auto
              min-w-[240px]
              px-6
              py-3.5
              rounded-[10px]
              bg-[#FFFFFF]
              border
              border-[#102A56]/20
              text-[14px]
              sm:text-[15px]
              text-[#102A56]
              font-medium
              leading-[1.3]
              transition-colors
              duration-200
              hover:border-[#F97316]
              hover:text-[#F97316]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2
            "
          >
            <MessageCircle
              className="
                w-5
                h-5
                text-[#F97316]
              "
              aria-hidden="true"
              focusable="false"
            />
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}