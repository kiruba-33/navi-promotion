import React, { useState } from "react";
import { Briefcase } from "lucide-react";

import {
  servicesData,
} from "../../../data/letsTalk";

export default function ServicesSelector() {
  const [selectedService, setSelectedService] =
    useState(null);

  return (
    <section
      className="
        bg-[#F1F5F9]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none">
            <Briefcase className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Our Services</span>
          </div>

          <h2
            className="
              heading-section
              mb-4
              text-[#0F172A]
            "
          >
            What Are You{" "}
            <span className="block">
              Looking For?
            </span>
          </h2>

          <p
            className="
              body-large
              text-[#0F172A]/80
            "
          >
            Select the service that best
            matches your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() =>
                setSelectedService(
                  service.id
                )
              }
              className={`
                rounded-2xl
                border
                p-6
                sm:p-7
                text-left
                transition-all
                duration-200
                cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]

                ${
                  selectedService ===
                  service.id
                    ? "border-[#102A56] bg-[#102A56] text-[#FFFFFF] shadow-md"
                    : "border-[#0F172A]/10 bg-[#FFFFFF] text-[#102A56] hover:border-[#2563EB]/40 shadow-xs"
                }
              `}
            >
              <div
                className={`
                  mb-5
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  transition-colors
                  ${
                    selectedService === service.id
                      ? "bg-[#2563EB] text-[#FFFFFF]"
                      : "bg-[#F1F5F9] text-[#2563EB]"
                  }
                `}
              >
                <span
                  className="
                    text-[15px]
                    font-semibold
                  "
                >
                  {String(
                    service.id
                  ).padStart(2, "0")}
                </span>
              </div>

              <h3
                className={`
                  heading-card
                  ${selectedService === service.id ? "text-[#FFFFFF]" : "text-[#0F172A]"}
                `}
              >
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}