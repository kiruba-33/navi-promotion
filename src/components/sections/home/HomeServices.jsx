import React from 'react';
import { BriefcaseBusiness, Megaphone, Code2, Palette, Users, PenTool, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section id="services" className="py-10 sm:py-14 lg:py-16 relative flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none">
            <BriefcaseBusiness className="w-4 h-4 text-orange-500" />
            <span>Core Capabilities</span>
          </div>
          
          <h2 className="heading-section text-center heading-primary mb-4 sm:mb-5">
            Enterprise<span className="heading-highlight leading-none"> Solutions</span>
          </h2>
          
          <p className="body-large text-center text-slate-600 max-w-4xl mx-auto font-normal tracking-tight drop-shadow-sm whitespace-normal lg:whitespace-nowrap">
            End-to-end digital services designed to elevate your brand and drive measurable revenue growth.
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <React.Fragment key={service.id || index}>
              <div
                id={service.id}
                className="glass-card p-8 sm:p-10 group flex flex-col h-full relative overflow-hidden scroll-mt-32 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Background Accent Shimmer */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -z-10" />
                
                {/* Icon block matching custom shape theme */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:border-orange-500/50 transition-colors duration-500">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 group-hover:text-orange-500 transition-colors duration-500" />
                </div>
                
                {/* Card Title */}
                <h3 className="heading-card text-xl sm:text-2xl heading-primary mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="body-normal text-slate-600 mb-6 sm:mb-8 flex-grow drop-shadow-sm font-normal">
                  {service.description}
                </p>
                
                {/* Action Link */}
                <Link 
                  to={service.link} 
                  className="mt-auto inline-flex items-center text-slate-700 font-semibold group-hover:text-orange-500 transition-colors duration-300 cursor-pointer drop-shadow-sm text-sm sm:text-base gap-2">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"  aria-hidden="true" focusable="false" />
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}