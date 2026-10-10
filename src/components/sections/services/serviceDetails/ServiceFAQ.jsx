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
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs mb-5 select-none">
            <MessageCircleQuestion className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Clear Answers
            </span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4">
            Frequently Asked Questions
          </h2>

          <p className="body-large text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                    ? "bg-white border-orange-500/40 shadow-md shadow-orange-500/5"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <h3
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-orange-600" : "text-slate-900"
                    }`}
                  >
                    {question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
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