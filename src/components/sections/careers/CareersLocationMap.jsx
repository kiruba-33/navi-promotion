import React from "react";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

export default function CareersLocationMap() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            Our Headquarters
          </span>

          <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl heading-primary font-semibold">
            Work With Us
            <span className="block heading-highlight">In Theni, Tamil Nadu</span>
          </h2>

          <p className="body-large mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Our primary engineering, marketing, and creative operations hub is located in Theni.
            Come visit our office or reach out to coordinate your interview.
          </p>
        </div>

        {/* Map & Office Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-semibold text-brand-orange mb-6">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                Active Office & Studio
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
                Navi Promotions HQ
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-orange shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="font-semibold text-slate-800 mt-0.5">Theni, Tamil Nadu 625531, India</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-orange shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Working Hours</p>
                    <p className="font-semibold text-slate-800 mt-0.5">Mon – Sat | 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-orange shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="font-semibold text-slate-800 hover:text-brand-orange transition-colors mt-0.5 block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Careers Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-orange shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Careers Email</p>
                    <a
                      href="mailto:careers@navipromotions.com"
                      className="font-semibold text-slate-800 hover:text-brand-orange transition-colors mt-0.5 block"
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
                  rounded-xl
                  bg-slate-900
                  hover:bg-brand-orange
                  text-white
                  px-5
                  py-3.5
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-wider
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
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-full min-h-[360px] rounded-3xl overflow-hidden border border-slate-200 shadow-xs relative">
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
