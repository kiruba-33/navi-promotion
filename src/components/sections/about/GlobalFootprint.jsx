import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, MapPin, Building2, Users, Briefcase, Zap, Compass } from "lucide-react";
import { locationsData } from "../../../data/about";

export default function GlobalFootprint() {
  const [selectedLoc, setSelectedLoc] = useState(locationsData[0]);

  return (
    <section
      id="global-footprint"
      className="relative overflow-hidden border-y border-[#0F172A]/10 py-14 sm:py-16 lg:py-20 bg-[#F1F5F9]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none">
              <Globe className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
              <span>Global Presence</span>
            </div>

            <h2 className="heading-section text-[#0F172A] mb-4">
              Bridging Market Borders
            </h2>

            <p className="body-large text-[#0F172A]/80 mb-8 max-w-lg">
              From our founding roots in Theni, Tamil Nadu to our international operations center in Singapore, we deliver digital excellence across borders.
            </p>

            {/* Location Selector Cards */}
            <div className="space-y-3.5">
              {locationsData.map((loc) => {
                const isSelected = selectedLoc?.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isSelected
                        ? "bg-[#102A56] border-[#102A56] shadow-md text-[#FFFFFF]"
                        : "bg-[#FFFFFF] border-[#0F172A]/10 hover:border-[#2563EB]/40 text-[#102A56]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors shrink-0 ${
                            isSelected
                              ? "bg-[#2563EB] text-[#FFFFFF]"
                              : "bg-[#F1F5F9] text-[#2563EB]"
                          }`}
                        >
                          <MapPin className="h-5 w-5" aria-hidden="true" focusable="false" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4
                              className={`font-semibold text-[16px] sm:text-[17px] leading-[1.3] ${
                                isSelected ? "text-[#FFFFFF]" : "text-[#0F172A]"
                              }`}
                            >
                              {loc.city}, {loc.country}
                            </h4>
                            <span
                              className={`text-[11px] font-medium uppercase tracking-[0.04em] px-2 py-0.5 rounded-md ${
                                isSelected
                                  ? "bg-white/10 text-[#F97316]"
                                  : "bg-[#F1F5F9] text-[#0F172A]/75"
                              }`}
                            >
                              {loc.type}
                            </span>
                          </div>
                          <p
                            className={`text-[12px] font-normal mt-0.5 ${
                              isSelected ? "text-[#F1F5F9]/80" : "text-[#0F172A]/65"
                            }`}
                          >
                            {loc.region}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center shrink-0">
                        <span className={`text-[12px] font-medium ${isSelected ? "text-[#F97316]" : "text-[#2563EB]"}`}>
                          {loc.stats.clients} Clients
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <p className="mt-3 pt-3 border-t border-white/15 text-[13px] text-[#F1F5F9]/85 leading-[1.55] font-normal">
                        {loc.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Contrast Clear Visual World Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#FFFFFF] p-5 sm:p-7 shadow-md">
              
              {/* Map Title Bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0F172A]/10">
                <div className="flex items-center gap-2 text-[12px] font-medium text-[#102A56] tracking-[0.04em] uppercase">
                  <Compass className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                  <span>Strategic Corridors · India to Singapore</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-medium text-[#0F172A]/65">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  <span>Active Hubs</span>
                </div>
              </div>

              {/* Vector Geographic Canvas */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#F1F5F9]/75 rounded-xl overflow-hidden border border-[#0F172A]/10 p-2 sm:p-4">
                
                {/* SVG Clear World Map Silhouettes & Grid */}
                <svg
                  viewBox="0 0 800 450"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="world-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.7" opacity="0.6" />
                    </pattern>
                    <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <rect width="800" height="450" fill="url(#world-grid)" />

                  {/* High-Contrast Clear Continents Silhouettes */}
                  {/* Eurasia & Asia landmass */}
                  <path
                    d="M440,110 Q490,95 550,115 Q620,130 670,170 Q710,210 680,260 Q650,280 620,290 Q580,310 560,280 Q540,250 510,260 Q490,290 470,260 Q450,230 430,220 Q400,210 390,180 Q400,140 440,110 Z"
                    fill="#cbd5e1"
                    opacity="0.85"
                  />
                  {/* Indian Subcontinent Silhouette */}
                  <path
                    d="M490,230 Q515,225 530,240 Q535,270 520,310 Q505,340 495,330 Q480,290 475,260 Q480,240 490,230 Z"
                    fill="#94a3b8"
                    opacity="0.95"
                  />
                  {/* Southeast Asia & Malay Peninsula / Singapore region */}
                  <path
                    d="M560,280 Q585,270 600,290 Q595,325 580,350 Q565,360 555,340 Q550,305 560,280 Z"
                    fill="#94a3b8"
                    opacity="0.95"
                  />
                  {/* Indonesia archipelago hint */}
                  <path
                    d="M570,355 Q620,350 660,365 Q620,380 575,370 Z"
                    fill="#cbd5e1"
                    opacity="0.75"
                  />
                  {/* Africa landmass silhouette */}
                  <path
                    d="M370,190 Q420,185 435,230 Q445,280 430,340 Q400,390 375,360 Q345,300 350,240 Z"
                    fill="#e2e8f0"
                    opacity="0.8"
                  />
                  {/* Europe landmass silhouette */}
                  <path
                    d="M360,115 Q410,105 440,125 Q430,170 390,175 Q360,165 360,115 Z"
                    fill="#e2e8f0"
                    opacity="0.8"
                  />

                  {/* Connected Strategic Arc (Theni -> Singapore) */}
                  {/* Theni coordinates on this map: (498, 318), Singapore: (572, 342) */}
                  <motion.path
                    d="M 498,318 Q 535,295 572,342"
                    fill="none"
                    stroke="url(#route-gradient)"
                    strokeWidth="3.5"
                    strokeDasharray="6,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />

                  {/* Ripple pulse around Theni */}
                  <circle cx="498" cy="318" r="14" fill="#f97316" opacity="0.25">
                    <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  {/* Pin Theni */}
                  <circle cx="498" cy="318" r="6" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />

                  {/* Ripple pulse around Singapore */}
                  <circle cx="572" cy="342" r="14" fill="#f97316" opacity="0.25">
                    <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite" delay="1.5s" />
                    <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" delay="1.5s" />
                  </circle>
                  {/* Pin Singapore */}
                  <circle cx="572" cy="342" r="6" fill="#0f172a" stroke="#f97316" strokeWidth="2.5" />
                </svg>

                {/* Overlaid Prominent Badges */}
                {/* Theni Label */}
                <div className="absolute top-[62%] left-[53%] -translate-x-1/2 -translate-y-full pointer-events-none">
                  <div className="px-2.5 py-1 rounded-lg bg-[#102A56] text-[#FFFFFF] text-[11px] font-medium shadow-md border border-[#F97316]/50 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span>Theni, India (HQ)</span>
                  </div>
                </div>

                {/* Singapore Label */}
                <div className="absolute top-[78%] left-[72%] -translate-x-1/2 -translate-y-full pointer-events-none">
                  <div className="px-2.5 py-1 rounded-lg bg-[#102A56] text-[#FFFFFF] text-[11px] font-medium shadow-md border border-[#2563EB]/50 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>Singapore (Global Ops)</span>
                  </div>
                </div>
              </div>

              {/* Map Metric Summary Bar */}
              <div className="mt-4 pt-3 border-t border-[#0F172A]/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-[#F1F5F9] border border-[#0F172A]/10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#0F172A]/65">Primary Engineering</p>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-[#102A56] mt-0.5">Theni, Tamil Nadu · 80+ Clients</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F1F5F9] border border-[#0F172A]/10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#0F172A]/65">APAC Enterprise</p>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-[#102A56] mt-0.5">Singapore Hub · 25+ Clients</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}