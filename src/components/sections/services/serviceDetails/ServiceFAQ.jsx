import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircleQuestion,
} from "lucide-react";

export default function ServiceFAQ({
  faqs = [],
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
    <section
      className="
        py-12
        sm:py-16
        lg:py-20
        bg-white
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <div className="mb-12 sm:mb-14 lg:mb-16 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-orange-50
              border
              border-orange-100
              text-orange-500
              text-xs
              font-black
              uppercase
              tracking-[0.2em]
            "
          >
            <MessageCircleQuestion className="w-4 h-4" />
            <span>FAQ</span>
          </div>

          <h2
            className="
              heading-display
              text-4xl
              sm:text-5xl
              lg:text-6xl
              heading-primary
              mt-6
            "
          >
            Frequently Asked
            Questions
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Find answers to the most common
            questions about our website design
            and development services.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqs.map(
            (faq, index) => (
              <div
                key={index}
                className="
                  border
                  border-slate-200
                  rounded-[24px]
                  bg-white
                  overflow-hidden
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    p-7
                    text-left
                  "
                >
                  <h3
                    className="
                      text-slate-900
                      font-semibold
                      text-lg
                      leading-relaxed
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      h-10
                      w-10
                      rounded-full
                      bg-orange-50
                      shrink-0
                    "
                  >
                    {activeIndex ===
                    index ? (
                      <ChevronUp
                        className="
                          w-5
                          h-5
                          text-orange-500
                        "
                      />
                    ) : (
                      <ChevronDown
                        className="
                          w-5
                          h-5
                          text-orange-500
                        "
                       aria-hidden="true" focusable="false" />
                    )}
                  </div>
                </button>

                {activeIndex ===
                  index && (
                  <div
                    className="
                      px-7
                      pb-7
                    "
                  >
                    <div
                      className="
                        h-px
                        bg-slate-200
                        mb-6
                      "
                    />

                    <p
                      className="
                        text-slate-600
                        leading-relaxed
                        text-base
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}