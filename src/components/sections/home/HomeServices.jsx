import React from 'react';
import { BriefcaseBusiness, Megaphone, Code2, Palette, Users, PenTool, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const services = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven performance marketing across Meta, Google, and LinkedIn to maximize your ROI and scale customer acquisition.',
    link: '/services/digital-marketing'
  },
  {
    id: 'development',
    icon: Code2,
    title: 'Web & App Development',
    description: 'Premium, high-converting websites and scalable mobile applications tailored to your enterprise brand.',
    link: '/services/development'
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Design',
    description: 'Crafting memorable brand identities, logos, and corporate collateral that stand out in competitive markets.',
    link: '/services/branding-kit/graphic-design'
  },
  {
    id: 'influencer',
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Connecting your brand with the right voices to build trust and drive authentic engagement.',
    link: '/services/branding-kit/influencer-marketing'
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Creation',
    description: 'Engaging video production, copywriting, and social media content that converts audiences into customers.',
    link: '/services/branding-kit/content-creation'
  },
  {
    id: 'seo',
    icon: LineChart,
    title: 'SEO & Analytics',
    description: 'Dominating search rankings and providing actionable insights through advanced technical analytics.',
    link: '/services/digital-marketing/seo'
  }
];

export default function HomeServices() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9] relative flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
            <BriefcaseBusiness className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Core Capabilities</span>
          </div>
          
          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-center text-[#0F172A] mb-4">
            Enterprise Solutions
          </h2>
          
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] text-center text-[#0F172A]/80 max-w-2xl mx-auto font-normal">
            End-to-end digital services designed to elevate your brand and drive measurable revenue growth.
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <React.Fragment key={service.id || index}>
              <div
                id={service.id}
                className="p-7 sm:p-8 group flex flex-col h-full relative overflow-hidden scroll-mt-32 rounded-2xl border border-[#0F172A]/10 bg-[#FFFFFF] shadow-xs hover:shadow-md hover:border-[#F97316]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Top subtle orange accent bar on hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon block */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-300" aria-hidden="true" focusable="false" />
                </div>
                
                {/* Card Title */}
                <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] tracking-[-0.005em] text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#0F172A]/80 mb-6 flex-grow font-normal">
                  {service.description}
                </p>
                
                {/* Action Link */}
                <Link 
                  to={service.link} 
                  className="mt-auto inline-flex items-center text-[#2563EB] font-medium group-hover:text-[#F97316] transition-colors duration-200 cursor-pointer text-[14px] sm:text-[15px] leading-[1.4] gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" focusable="false" />
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}