import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, MapPin, Building2, Users, Briefcase, Zap, Compass } from "lucide-react";
import { locationsData } from "../../../data/about";

export default function GlobalFootprint() {
  const [selectedLoc, setSelectedLoc] = useState(locationsData[0]);

  return (
    <section
      id="global-footprint"
      className="relative overflow-hidden border-y border-slate-200 py-10 sm:py-14 lg:py-16 bg-slate-50/60"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none">
              <Globe className="w-4 h-4 text-orange-500" />
              <span>Global Presence</span>
            </div>

            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-5">
              Bridging <span className="heading-highlight">Market Borders</span>
            </h2>

            <p className="body-large text-slate-600 mb-8 max-w-lg leading-relaxed">
              From our founding roots in Theni, Tamil Nadu to our international operations center in Singapore, we deliver digital excellence across borders.
            </p>

            {/* Location Selector Cards */}
            <div className="space-y-4">
              {locationsData.map((loc) => {
                const isSelected = selectedLoc?.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer shadow-xs ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 shadow-md text-white"
                        : "bg-white border-slate-200 hover:border-orange-500/40 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                            isSelected
                              ? "bg-brand-orange text-white"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          <MapPin className="h-5 w-5" aria-hidden="true" focusable="false" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4
                              className={`font-semibold text-base sm:text-lg ${
                                isSelected ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {loc.city}, {loc.country}
                            </h4>
                            <span
                              className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                isSelected
                                  ? "bg-white/10 text-orange-400"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {loc.type}
                            </span>
                          </div>
                          <p
                            className={`text-xs font-normal mt-0.5 ${
                              isSelected ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {loc.region}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-orange-400">
                          {loc.stats.clients} Clients
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed font-normal">
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
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
              
              {/* Map Title Bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 tracking-wider uppercase">
                  <Compass className="w-4 h-4 text-orange-500" />
                  <span>Strategic Corridors · India to Singapore</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Hubs</span>
                </div>
              </div>

              {/* Vector Geographic Canvas */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-slate-50 to-orange-50/20 rounded-2xl overflow-hidden border border-slate-100 p-2 sm:p-4">
                
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
                  <div className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold shadow-lg border border-orange-500/40 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>Theni, India (HQ)</span>
                  </div>
                </div>

                {/* Singapore Label */}
                <div className="absolute top-[78%] left-[72%] -translate-x-1/2 -translate-y-full pointer-events-none">
                  <div className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold shadow-lg border border-slate-700 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Singapore (Global Ops)</span>
                  </div>
                </div>
              </div>

              {/* Map Metric Summary Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Primary Engineering</p>
                  <p className="text-sm font-bold text-slate-900">Theni, Tamil Nadu · 80+ Clients</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">APAC Enterprise</p>
                  <p className="text-sm font-bold text-slate-900">Singapore Hub · 25+ Clients</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}