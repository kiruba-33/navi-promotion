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
        bg-slate-50
        py-20
        sm:py-24
        lg:py-32
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
            mb-16
            max-w-3xl
            text-center
          "
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
            <Briefcase className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
            <span>Our Services</span>
          </div>

          <h2
            className="
              heading-section
              mb-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              heading-primary
            "
          >
            What Are You
            <span className="block heading-highlight">
              Looking For?
            </span>
          </h2>

          <p
            className="
              body-large
              text-slate-600
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
            gap-6
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
                rounded-[2rem]
                border
                p-8
                text-left
                transition-all
                duration-300

                ${
                  selectedService ===
                  service.id
                    ? `
                      border-brand-orange
                      bg-brand-orange
                      text-slate-900
                      shadow-lg
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-900
                      hover:border-brand-orange
                    `
                }
              `}
            >
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-100
                "
              >
                <span
                  className="
                    text-lg
                    font-bold
                  "
                >
                  {String(
                    service.id
                  ).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="
                  heading-card
                  text-2xl
                "
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