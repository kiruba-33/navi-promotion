import React, { useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import {
  budgetOptions,
  contactInfo,
  serviceOptions,
  timelineOptions,
} from "../../../data/letsTalk";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    project: "",
  });

  const iconMap = {
    mail: Mail,
    phone: Phone,
    location: MapPin,
    clock: Clock3,
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="
        bg-[#FFFFFF]
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
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Left Side */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium shadow-xs select-none">
                <MessageCircle className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>Contact Information</span>
              </div>
            </div>

            <h2
              className="
                heading-section
                text-[#0F172A]
                mb-5
              "
            >
              Ready To Start Growing?
            </h2>

            <p
              className="
                body-large
                mb-10
                max-w-md
                text-[#0F172A]/80
              "
            >
              Tell us about your project and
              we'll get back to you within
              24 business hours.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon =
                  iconMap[item.icon];

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#102A56]/10
                        bg-[#F1F5F9]
                        text-[#2563EB]
                        transition-colors
                        duration-200
                        group-hover:bg-[#2563EB]
                        group-hover:border-[#2563EB]
                        group-hover:text-[#FFFFFF]
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                        "
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          mb-0.5
                          text-[11px]
                          font-medium
                          uppercase
                          tracking-[0.04em]
                          text-[#0F172A]/60
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          text-[15px]
                          font-medium
                          text-[#102A56]
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="
                mt-9
                inline-flex
                items-center
                gap-2.5
                rounded-[10px]
                bg-[#FFFFFF]
                border border-[#102A56]/25
                hover:border-[#2563EB]
                hover:text-[#2563EB]
                px-6
                py-3.5
                text-[14px]
                sm:text-[15px]
                font-medium
                text-[#102A56]
                transition-colors
              "
            >
              <MessageCircle className="h-5 w-5 text-[#F97316]" aria-hidden="true" />
              Chat On WhatsApp
            </a>
          </div>

          {/* Right Side */}
          <div
            className="
              rounded-2xl
              border
              border-[#0F172A]/10
              bg-[#FFFFFF]
              p-6
              shadow-sm
              sm:p-8
              lg:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div
                className="
                  grid
                  gap-5
                  md:grid-cols-2
                "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] placeholder:text-[#0F172A]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] placeholder:text-[#0F172A]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              <div
                className="
                  grid
                  gap-5
                  md:grid-cols-2
                "
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] placeholder:text-[#0F172A]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] placeholder:text-[#0F172A]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              <select
                name="service"
                onChange={handleChange}
                className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors cursor-pointer"
              >
                <option value="">
                  Select Service
                </option>

                {serviceOptions.map(
                  (service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  )
                )}
              </select>

              <div
                className="
                  grid
                  gap-5
                  md:grid-cols-2
                "
              >
                <select
                  name="budget"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors cursor-pointer"
                >
                  <option value="">
                    Budget Range
                  </option>

                  {budgetOptions.map(
                    (budget) => (
                      <option
                        key={budget}
                        value={budget}
                      >
                        {budget}
                      </option>
                    )
                  )}
                </select>

                <select
                  name="timeline"
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#0F172A]/15 bg-[#F1F5F9] px-4 py-3.5 text-[14px] text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus:border-[#2563EB] focus:bg-[#FFFFFF] transition-colors cursor-pointer"
                >
                  <option value="">
                    Project Timeline
                  </option>

                  {timelineOptions.map(
                    (timeline) => (
                      <option
                        key={timeline}
                        value={timeline}
                      >
                        {timeline}
                      </option>
                    )
                  )}
                </select>
              </div>

              <textarea
                rows="5"
                name="project"
                placeholder="Tell us about your project..."
                onChange={handleChange}
                className="
                  w-full
                  resize-none
                  rounded-[10px]
                  border
                  border-[#0F172A]/15
                  bg-[#F1F5F9]
                  p-4
                  text-[14px]
                  text-[#0F172A]
                  placeholder:text-[#0F172A]/45
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]
                  focus:border-[#2563EB]
                  focus:bg-[#FFFFFF]
                  transition-colors
                "
              />

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[10px]
                  bg-[#F97316]
                  hover:bg-[#102A56]
                  py-3.5
                  text-[14px]
                  sm:text-[15px]
                  font-medium
                  text-[#FFFFFF]
                  transition-colors
                  duration-200
                  cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2
                "
              >
                Send Inquiry
                <Send className="h-4 w-4 text-[#FFFFFF]" />
              </button>

              <p
                className="
                  text-center
                  text-[12px]
                  text-[#0F172A]/65
                "
              >
                Typical response time:
                within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}