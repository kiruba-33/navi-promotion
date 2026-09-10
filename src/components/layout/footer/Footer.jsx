import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { footerData } from "./footerData";

export default function Footer() {
  const { company, quickLinks, services, resources, contact } = footerData;

  return (
    <footer className="relative bg-white text-slate-700 font-sans border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 lg:pt-24">
        
        {/* =========================================================
            FOOTER MAIN NAVIGATION GRID (5-COLUMN SYSTEM)
           ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-slate-200">
          
          {/* SECTION 1: NON-CLICKABLE OFFICIAL LOGO & COMPANY DESCRIPTION */}
          <div className="sm:col-span-2 lg:col-span-2 pr-0 lg:pr-6">
            <div className="mb-6 select-none">
              <img
                src="/logo-color.png"
                alt="Navi Promotions"
                className="h-12 sm:h-14 w-auto object-contain pointer-events-none"
              />
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {company.description}
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-3">
              {company.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Navi Promotions on ${social.name}`}
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: QUICK LINKS */}
          <div>
            <h3 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group text-slate-600 hover:text-orange-500 transition-colors duration-300 inline-flex items-center">
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: SERVICES */}
          <div>
            <h3 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group text-slate-600 hover:text-orange-500 transition-colors duration-300 inline-flex items-center">
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: RESOURCES */}
          <div>
            <h3 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6">
              Resources
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group text-slate-600 hover:text-orange-500 transition-colors duration-300 inline-flex items-center">
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 5: CONTACT INFORMATION */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm font-normal text-slate-600">
              <li className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"  aria-hidden="true" focusable="false" />
                </div>
                <span className="pt-1">{contact.address}</span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <Mail className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"  aria-hidden="true" focusable="false" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <Phone className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"  aria-hidden="true" focusable="false" />
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <Clock className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"  aria-hidden="true" focusable="false" />
                </div>
                <span className="pt-1">{contact.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR & SYSTEM STATUS
           ========================================================= */}
        <div className="py-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-900 font-bold">Navi Promotions</span>. All rights reserved.
          </div>

          {/* Operational Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Operational</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/regulations" className="hover:text-orange-500 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/regulations" className="hover:text-orange-500 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/regulations" className="hover:text-orange-500 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
