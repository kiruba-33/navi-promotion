import React from "react";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

export default function CareersLocationMap() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-[#F1F5F9] px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2563EB]">
            <MapPin className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
            Our Headquarters
          </span>

          <h2 className="heading-section mt-4 text-[clamp(1.625rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#0F172A] font-semibold">
            Work With Us
            <span className="block">In Theni, Tamil Nadu</span>
          </h2>

          <p className="body-large mt-4 text-[#0F172A]/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our primary engineering, marketing, and creative operations hub is located in Theni.
            Come visit our office or reach out to coordinate your interview.
          </p>
        </div>

        {/* Map & Office Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F1F5F9] p-6 sm:p-8 lg:p-9 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white border border-[#2563EB]/15 px-3 py-1 text-xs font-medium text-[#102A56] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
                Active Office &amp; Studio
              </div>

              <h3 className="text-[22px] sm:text-[24px] font-semibold leading-[1.25] text-[#0F172A] mb-6">
                Navi Promotions HQ
              </h3>

              <div className="space-y-5 text-sm sm:text-[15px]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2563EB] shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/55">Location</p>
                    <p className="font-medium text-[#102A56] mt-0.5">Theni, Tamil Nadu 625531, India</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2563EB] shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/55">Working Hours</p>
                    <p className="font-medium text-[#102A56] mt-0.5">Mon – Sat | 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#2563EB] shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/55">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="font-medium text-[#102A56] hover:text-[#2563EB] transition-colors mt-0.5 block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Careers Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#F97316] shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#0F172A]/55">Careers Email</p>
                    <a
                      href="mailto:careers@navipromotions.com"
                      className="font-medium text-[#102A56] hover:text-[#2563EB] transition-colors mt-0.5 block"
                    >
                      careers@navipromotions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions link */}
            <div className="pt-8 mt-8 border-t border-slate-200">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Theni+Tamil+Nadu+India"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  w-full
                  rounded-[10px]
                  bg-[#2563EB]
                  hover:bg-[#102A56]
                  text-white
                  px-5
                  py-3
                  text-[14px]
                  sm:text-[15px]
                  font-medium
                  transition-colors
                  duration-200
                  shadow-xs
                "
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions On Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative">
            <iframe
              src="https://maps.google.com/maps?q=Theni,%20Tamil%20Nadu,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Navi Promotions Headquarters Location in Theni, Tamil Nadu"
              aria-label="Google Map showing Navi Promotions location in Theni, Tamil Nadu"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
