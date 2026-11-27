import React from 'react';
import { Compass, Target, Lightbulb, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const values = [
  {
    icon: Target,
    title: 'Think Before We Build',
    desc: 'We start by understanding the business, the audience and the goal — because great execution begins with the right strategy.'
  },
  {
    icon: Lightbulb,
    title: 'Create With Purpose',
    desc: 'Every design, campaign and digital solution has a reason behind it. We create work that communicates clearly and makes an impact.'
  },
  {
    icon: Cpu,
    title: 'Technology That Works',
    desc: 'We use technology to simplify processes, improve experiences and build digital solutions that are practical, scalable and reliable.'
  },
  {
    icon: BarChart3,
    title: 'Measure & Improve',
    desc: 'We believe good work can always get better. We learn from data, feedback and results to continuously improve what we deliver.'
  }
];

export default function Culture() {
  return (
    <section
      id="culture"
      className="relative bg-[#F1F5F9] overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CONTENT SIDE */}
          <div>
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
              <Compass className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
              <span>Inside Navi</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-[#0F172A] mb-5 sm:mb-6">
              How We Turn Ideas Into Impact
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#0F172A]/80 font-normal mb-8 sm:mb-9 max-w-2xl leading-[1.65]">
              At Navi Promotions, we bring strategy, creativity and technology together to solve real business challenges. Every project is approached with purpose, precision and a focus on creating meaningful outcomes.
            </p>

            {/* VALUES GRID */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {values.map((v, i) => (
                <div key={i} className="group flex flex-col space-y-2.5 p-5 sm:p-6 rounded-2xl border border-[#0F172A]/10 bg-[#FFFFFF] hover:border-[#F97316]/40 shadow-xs hover:shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:text-[#FFFFFF] transition-all duration-300">
                    <v.icon className="w-5 h-5 transition-colors duration-300" aria-hidden="true" focusable="false" />
                  </div>
                  <h4 className="text-[18px] sm:text-[19px] leading-[1.3] tracking-[-0.005em] text-[#0F172A] font-semibold">{v.title}</h4>
                  <p className="text-[14px] sm:text-[15px] text-[#0F172A]/80 font-normal leading-[1.6]">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* FOOTER LINE */}
            <div className="mt-8 pt-5 border-t border-[#0F172A]/10 text-[12px] sm:text-[13px] font-medium tracking-[0.02em] leading-[1.4] text-[#102A56]/75">
              Navi Promotions · Strategy × Creativity × Technology
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative mt-8 lg:mt-0">
            {/* MAIN IMAGE CARD */}
            <div className="aspect-[4/5] rounded-2xl sm:rounded-[18px] lg:rounded-[20px] overflow-hidden border border-[#0F172A]/10 shadow-lg shadow-[#102A56]/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Navi Culture Workspace" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* FLOATING CARD */}
            <div 
               className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-8 left-0 sm:-left-4 lg:-left-6 bg-[#FFFFFF] border border-[#0F172A]/10 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-[#102A56]/10 w-[240px] sm:w-[270px] lg:w-[290px]"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" focusable="false" />
                </div>
                <h4 className="text-[16px] sm:text-[18px] text-[#0F172A] font-semibold leading-[1.25] tracking-[-0.005em]">
                  Built Around One Goal
                </h4>
              </div>
              
              <p className="text-[13px] sm:text-[14px] text-[#0F172A]/80 font-normal leading-[1.5]">
                Make every digital investment count.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}