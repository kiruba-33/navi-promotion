import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: '01',
    icon: Target,
    title: 'Result-Based Marketing',
    description: 'We focus on ROI, not vanity metrics. Our strategies are designed to generate high-quality leads and tangible revenue.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    stat: '+142%',
    statLabel: 'Average ROI Increase'
  },
  {
    id: '02',
    icon: Zap,
    title: 'Custom Pricing Packages',
    description: 'Flexible solutions tailored to your specific business goals, whether you are a startup or an established enterprise.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000',
    stat: '100%',
    statLabel: 'Tailored Solutions'
  },
  {
    id: '03',
    icon: BarChart3,
    title: 'Data-Driven Strategy',
    description: 'Every decision is backed by deep analytics and market research to ensure maximum return on investment.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    stat: '24/7',
    statLabel: 'Real-time Analytics'
  },
  {
    id: '04',
    icon: MapPin,
    title: 'Dedicated Account Support & Transparency',
    description: 'You get a clear line of communication, regular performance dashboards, and a dedicated strategist focused on continuously optimizing your growth trajectory.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000',
    stat: '100%',
    statLabel: 'Dedicated Support'
  }
];

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardSelect = (index) => {
    setActiveCard(index);
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Ambient Polish Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,140,0,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>The Navi Advantage</span>
            </div>
          </>

          {/* Heading Displays Fixed Only For Spacing Requirements */}
          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-primary sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15] tracking-tighter">
            Unfair Advantage in a <br />
            <span className="heading-highlight leading-none">Competitive Market</span>
          </h2>
        </div>

        {/* Dynamic Expanding Accordion Responsive Layout */}
        <div className="flex flex-col lg:flex-row h-[780px] sm:h-[820px] lg:h-[580px] gap-4 w-full">
          {features.map((feature, index) => {
            const isActive = activeCard === index;
            
            return (
              <React.Fragment key={feature.id || index}>
                <div
                  onMouseEnter={() => handleCardSelect(index)}
                  onClick={() => handleCardSelect(index)}
                  className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer border border-slate-200 shadow-md group will-change-[flex,transform] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'flex-[6] lg:flex-[3.5] shadow-xl shadow-slate-900/5' : 'flex-[1] lg:flex-[0.5] hover:bg-white'
                  }`}
                >
                  {/* Scalable Visual Media Asset Cover - Smoothed Timing Physics */}
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-100 brightness-90' : 'scale-105 brightness-75'}`} 
                  />
                  
                  {/* Clean Shading Overlay Gradient - Synchronized with Bezier Acceleration Curve */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent' : 'bg-slate-950/40 group-hover:bg-slate-950/20'}`} />

                  {/* Collapsed Core Layout Indicator Block - Added pointer-events-none toggle when active */}
                  <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                    
                    {/* Desktop View Vertical Header Card Line */}
                    <div className="hidden lg:flex flex-col items-center h-full pt-8 pb-8 justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-sm group-hover:bg-slate-900 transition-colors duration-300">
                        <span className="font-bold text-sm tracking-tight">{feature.id}</span>
                      </div>
                      <h3
                        className="text-white heading-card font-bold text-xl tracking-wider whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Mobile & Tablet View Horizontal Row Overlay */}
                    <div className="flex lg:hidden flex-row items-center h-full px-6 gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                        <span className="font-bold text-xs">{feature.id}</span>
                      </div>
                      <h3 className="text-white heading-card text-base sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expanded Informational Card Inlay Overlay */}
                  <div className={`absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 scale-100 delay-100' : 'opacity-0 translate-y-6 scale-98 pointer-events-none'}`}>
                    
                    {/* Icon Container block matching spring parameters perfectly */}
                    <motion.div 
                      initial={false}
                      animate={{ rotate: isActive ? 0 : -45, scale: isActive ? 1 : 0.85 }}
                      transition={{ duration: 0.55, type: "spring", stiffness: 120, damping: 20 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center text-orange-500 mb-4 sm:mb-5 border border-slate-200 shadow-md"
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
                    </motion.div>
                    
                    {/* Feature Title text lines */}
                    <h3 className="heading-card text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                      {feature.title}
                    </h3>
                    
                    {/* Feature Description Paragraph Block */}
                    <p className="body-normal text-slate-100 max-w-lg mb-4 sm:mb-6 hidden sm:block font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                      {feature.description}
                    </p>

                    {/* Stat Metrics & Mini Call-To-Action hyperlink trigger row */}
                    <div className="flex items-center gap-3 sm:gap-6">
                      <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl flex items-center shadow-md">
                        <span className="text-white font-bold text-base sm:text-lg mr-2 drop-shadow-sm">{feature.stat}</span>
                        <span className="text-slate-300 label-text tracking-wide text-[9px] sm:text-xs font-medium">{feature.statLabel}</span>
                      </div>
                      
                      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group/btn">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}