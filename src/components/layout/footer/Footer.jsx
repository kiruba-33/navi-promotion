import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { footerData } from "./footerData";

/* Social Icon SVGs */
function SocialIcon({ type }) {
  switch (type) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const { company, quickLinks, services, resources, contact } = footerData;

  return (
    <footer className="relative bg-[#102A56] text-[#F1F5F9] font-sans border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        
        {/* =========================================================
            FOOTER MAIN NAVIGATION GRID (EQUAL & CONSISTENT SPACING)
           ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/15">
          
          {/* SECTION 1: LOGO, DESCRIPTION & SOCIAL MEDIA PROFILES */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 pr-0 lg:pr-6 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="mb-6 select-none">
                <img
                  src="/logo-white.png"
                  alt="Navi Promotions"
                  className="h-14 sm:h-16 lg:h-18 w-auto object-contain pointer-events-none"
                />
              </div>

              {/* Company Description */}
              <p className="text-[#F1F5F9]/80 text-[14px] leading-[1.6] mb-6 font-normal max-w-sm">
                {company.description}
              </p>
            </div>

            {/* Social Media Profile Links directly below logo/description */}
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#F1F5F9]/60 mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {company.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`Navi Promotions on ${social.name}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#F97316] hover:text-[#FFFFFF] hover:bg-[#F97316] hover:border-[#F97316] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] transition-all duration-200 cursor-pointer"
                  >
                    <SocialIcon type={social.key} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2: QUICK LINKS (Equal Width) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] text-[13px] font-semibold uppercase tracking-[0.04em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[14px] font-normal">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group text-[#F1F5F9]/80 hover:text-[#FFFFFF] transition-colors duration-200 inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: SERVICES (Equal Width) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] text-[13px] font-semibold uppercase tracking-[0.04em] mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-[14px] font-normal">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group text-[#F1F5F9]/80 hover:text-[#FFFFFF] transition-colors duration-200 inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: RESOURCES (Equal Width) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] text-[13px] font-semibold uppercase tracking-[0.04em] mb-5">
              Resources
            </h3>
            <ul className="space-y-3 text-[14px] font-normal">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group text-[#F1F5F9]/80 hover:text-[#FFFFFF] transition-colors duration-200 inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 5: CONTACT (Equal Width) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] text-[13px] font-semibold uppercase tracking-[0.04em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5 text-[14px] font-normal text-[#F1F5F9]/80">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/25 border border-[#2563EB]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-200">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-200" aria-hidden="true" />
                </div>
                <span className="pt-0.5 text-[13px] leading-[1.5]">{contact.address}</span>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/25 border border-[#2563EB]/40 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-200" aria-hidden="true" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#FFFFFF] transition-colors duration-200 text-[13px] truncate"
                >
                  {contact.email}
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/25 border border-[#2563EB]/40 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-200">
                  <Phone className="w-3.5 h-3.5 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-200" aria-hidden="true" />
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#FFFFFF] transition-colors duration-200 text-[13px]"
                >
                  {contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/25 border border-[#2563EB]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-200">
                  <Clock className="w-3.5 h-3.5 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-200" aria-hidden="true" />
                </div>
                <span className="pt-0.5 text-[13px] leading-[1.5]">{contact.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR
           ========================================================= */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-[13px] font-normal text-[#F1F5F9]/70">
          <div>
            © {new Date().getFullYear()} <span className="text-[#FFFFFF] font-medium">Navi Promotions</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/regulations" className="hover:text-[#FFFFFF] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/regulations" className="hover:text-[#FFFFFF] transition-colors duration-200">
              Terms and Conditions
            </Link>
            <Link to="/regulations" className="hover:text-[#FFFFFF] transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
