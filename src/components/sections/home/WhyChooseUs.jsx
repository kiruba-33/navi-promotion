import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, BarChart3, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const features = [
  {
    id: '01',
    icon: Target,
    title: 'Result-Based Marketing',
    description: 'We focus on ROI, not vanity metrics. Our strategies are designed to generate high-quality leads and tangible revenue.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    stat: '+142%',
    statLabel: 'Average ROI Increase'
  },
  {
    id: '02',
    icon: Zap,
    title: 'Custom Pricing Packages',
    description: 'Flexible solutions tailored to your specific business goals, whether you are a startup or an established enterprise.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    stat: '100%',
    statLabel: 'Tailored Solutions'
  },
  {
    id: '03',
    icon: BarChart3,
    title: 'Data-Driven Strategy',
    description: 'Every decision is backed by deep analytics and market research to ensure maximum return on investment.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    stat: '24/7',
    statLabel: 'Real-time Analytics'
  },
  {
    id: '04',
    icon: Users,
    title: 'Dedicated Account Support & Transparency',
    description: 'You get a clear line of communication, regular performance dashboards, and a dedicated strategist focused on continuously optimizing your growth trajectory.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
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
    <section
      id="why-choose-us"
      className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
            <ShieldCheck className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>The Navi Advantage</span>
          </div>

          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-center text-[#0F172A]">
            Unfair Advantage in a Competitive Market
          </h2>
        </div>

        {/* Dynamic Expanding Accordion Responsive Layout */}
        <div className="flex flex-col lg:flex-row h-[780px] sm:h-[820px] lg:h-[560px] gap-4 w-full">
          {features.map((feature, index) => {
            const isActive = activeCard === index;
            
            return (
              <React.Fragment key={feature.id || index}>
                <div
                  onClick={() => handleCardSelect(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardSelect(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  className={`relative overflow-hidden rounded-2xl lg:rounded-[20px] cursor-pointer border shadow-sm group will-change-[flex,transform] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                    isActive ? 'flex-[6] lg:flex-[3.5] border-[#2563EB]/40 shadow-lg shadow-[#102A56]/10' : 'flex-[1] lg:flex-[0.5] border-[#0F172A]/10 hover:border-[#2563EB]/30'
                  }`}
                >
                  {/* Scalable Visual Media Asset Cover */}
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-100 brightness-90' : 'scale-100 brightness-75'}`} 
                  />
                  
                  {/* Clean Deep Navy Shading Overlay Gradient */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'bg-gradient-to-t from-[#102A56]/95 via-[#102A56]/55 to-[#102A56]/15' : 'bg-[#102A56]/60 group-hover:bg-[#102A56]/45'}`} />

                  {/* Collapsed Core Layout Indicator Block */}
                  <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                    
                    {/* Desktop View Vertical Header Card Line */}
                    <div className="hidden lg:flex flex-col items-center h-full pt-8 pb-8 justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#102A56]/90 backdrop-blur-md flex items-center justify-center text-[#FFFFFF] border border-white/15 shadow-sm group-hover:bg-[#2563EB] transition-colors duration-300">
                        <span className="font-semibold text-[13px] tracking-tight">{feature.id}</span>
                      </div>
                      <h3
                        className="text-[#FFFFFF] font-medium text-[17px] leading-[1.3] tracking-[0.01em] whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Mobile & Tablet View Horizontal Row Overlay */}
                    <div className="flex lg:hidden flex-row items-center h-full px-6 gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#102A56]/90 backdrop-blur-md flex items-center justify-center text-[#FFFFFF] border border-white/15">
                        <span className="font-semibold text-[12px]">{feature.id}</span>
                      </div>
                      <h3 className="text-[#FFFFFF] font-medium text-[16px] sm:text-[18px] leading-[1.3]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expanded Informational Card Inlay Overlay */}
                  <div className={`absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 scale-100 delay-100' : 'opacity-0 translate-y-6 scale-98 pointer-events-none'}`}>
                    
                    {/* Icon Container */}
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#2563EB] mb-4 sm:mb-5 border border-[#0F172A]/10 shadow-sm"
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" focusable="false" />
                    </div>
                    
                    {/* Feature Title */}
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#FFFFFF] mb-2.5 sm:mb-3 leading-[1.22] tracking-[-0.01em]">
                      {feature.title}
                    </h3>
                    
                    {/* Feature Description */}
                    <p className="text-[14px] sm:text-[15px] text-[#F1F5F9] max-w-lg mb-4 sm:mb-6 hidden sm:block font-normal leading-[1.6]">
                      {feature.description}
                    </p>

                    {/* Stat Metrics & Mini Call-To-Action hyperlink trigger row */}
                    <div className="flex items-center gap-3 sm:gap-5">
                      <div className="bg-[#102A56]/90 backdrop-blur-md border border-white/15 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl flex items-center shadow-sm">
                        <span className="text-[#F97316] font-semibold text-[16px] sm:text-[18px] leading-[1.2] mr-2.5">{feature.stat}</span>
                        <span className="text-[#F1F5F9] tracking-[0.03em] uppercase text-[11px] sm:text-[12px] font-medium leading-[1.4]">{feature.statLabel}</span>
                      </div>
                      
                      {/* Linked directly to /portfolio */}
                      <Link 
                        to="/portfolio"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View portfolio for ${feature.title}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2563EB] text-[#FFFFFF] flex items-center justify-center hover:bg-[#F97316] transition-colors duration-300 shadow-sm group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" focusable="false" />
                      </Link>
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