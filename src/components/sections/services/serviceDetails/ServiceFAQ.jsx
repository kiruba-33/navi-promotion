import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function ServiceFAQ({
  faqs = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#2563EB]/20 shadow-2xs mb-5 select-none">
            <MessageCircleQuestion className="w-4 h-4 text-[#F97316]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
              Clear Answers
            </span>
          </div>

          <h2 className="heading-section text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] font-semibold text-[#0F172A] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="body-large text-[#0F172A]/80 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-[1.65]">
            Find answers to the most common questions about our strategy, execution, and delivery process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const question = faq.question || faq.q || "";
            const answer = faq.answer || faq.a || "";

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#2563EB]/40 shadow-md shadow-[#102A56]/5"
                    : "bg-white border-slate-200 hover:border-[#2563EB]/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <h3
                    className={`text-[16px] sm:text-[18px] font-semibold leading-[1.35] transition-colors ${
                      isOpen ? "text-[#2563EB]" : "text-[#0F172A]"
                    }`}
                  >
                    {question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-[#F97316] text-white rotate-180"
                        : "bg-[#F1F5F9] text-[#102A56]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-3 text-[14px] sm:text-[15px] text-[#0F172A]/75 leading-[1.65] border-t border-slate-200/70">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}