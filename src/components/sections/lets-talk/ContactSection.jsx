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
        bg-white
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
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* Left Side */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold shadow-sm select-none">
                <MessageCircle className="w-4 h-4 text-orange-500" />
                <span>Contact Information</span>
              </div>
            </div>

            {/* Typography CSS based dynamic Heading styling */}
            <h2
              className="
                heading-display
                 text-4xl sm:text-5xl lg:text-6xl text-slate-900 
                 sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15] 
                 tracking-tighter mb-6 sm:mb-8
              "
            >
              Ready To Start
              <br />
              <span
               className="
                bg-gradient-to-r
                from-yellow-400
                via-orange-500
                to-orange-600
                bg-clip-text
                text-transparent
              ">
              Growing?
              </span>
            </h2>

            <p
              className="
                body-large
                mb-12
                max-w-md
                text-slate-600
              "
            >
              Tell us about your project and
              we'll get back to you within
              24 business hours.
            </p>

            <div className="space-y-6">
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
                      gap-5
                    "
                  >
                    {/* Icon Border and BG handling on Hover */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        transition-all
                        duration-300
                        group-hover:bg-brand-orange
                        group-hover:border-brand-orange
                      "
                    >
                      {/* Icon text color retains default Slate-900 even on hover now */}
                      <Icon
                        className="
                          h-5
                          w-5
                          text-slate-900
                        "
                      />
                    </div>

                    <div>
                      <p
                        className="
                          mb-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-slate-400
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          font-semibold
                          text-slate-900
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
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-green-600
                px-6
                py-4
                text-sm
                font-bold
                text-white
              "
            >
              <MessageCircle className="h-5 w-5" />
              Chat On WhatsApp
            </a>
          </div>

          {/* Right Side */}
          <div
            className="
              rounded-[2rem]
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              md:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
                />
              </div>

              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
                />
              </div>

              <select
                name="service"
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
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
                  gap-6
                  md:grid-cols-2
                "
              >
                <select
                  name="budget"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus:border-brand-orange"
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
                rows="6"
                name="project"
                placeholder="Tell us about your project..."
                onChange={handleChange}
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-4
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
                  focus:border-brand-orange
                "
              />

              {/* Updated Button: Background switches to brand-orange on hover, text remains white */}
              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-slate-900
                  py-5
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-brand-orange
                "
              >
                Send Inquiry
                <Send className="h-4 w-4 text-white" />
              </button>

              <p
                className="
                  text-center
                  text-xs
                  text-slate-500
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