import React from 'react';
import { Compass, Target, Lightbulb, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';

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
    <section id="culture" className="relative bg-white overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Subtle Ambient Polish Layers */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-40 h-40 border border-slate-200 rounded-full border-dashed hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CONTENT SIDE */}
          <div>
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-sm font-semibold mb-5 shadow-xs select-none">
              <Compass className="w-4 h-4 text-orange-500" />
              <span>Inside Navi</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="heading-section heading-primary tracking-tight mb-5 sm:mb-6 whitespace-normal lg:whitespace-nowrap">
              How We Turn Ideas <span className="heading-highlight leading-none">Into Impact</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="body-large text-slate-600 font-normal mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              At Navi Promotions, we bring strategy, creativity and technology together to solve real business challenges. Every project is approached with purpose, precision and a focus on creating meaningful outcomes.
            </p>

            {/* VALUES GRID */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {values.map((v, i) => (
                <div key={i} className="group flex flex-col space-y-3 p-5 rounded-3xl border border-slate-200/90 bg-[#F5F6F8]/70 hover:bg-white shadow-xs transition-all duration-300 hover:border-slate-300">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300 shadow-xs">
                    <v.icon className="w-5 h-5 transition-colors duration-300" />
                  </div>
                  <h4 className="heading-card text-lg sm:text-xl text-slate-900 font-semibold">{v.title}</h4>
                  <p className="body-normal text-slate-600 font-normal leading-relaxed text-xs sm:text-sm">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* FOOTER LINE */}
            <div className="mt-8 pt-5 border-t border-slate-200 text-xs sm:text-sm font-semibold tracking-wide text-slate-500">
              Navi Promotions · Strategy × Creativity × Technology
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative mt-8 lg:mt-0">
            {/* MAIN IMAGE CARD */}
            <div className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[8px] sm:border-[10px] lg:border-[12px] border-slate-100 shadow-xl shadow-slate-200/50">
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
               className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-0 sm:-left-4 lg:-left-8 bg-white border border-slate-200/90 p-5 sm:p-6 lg:p-7 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-slate-900/10 w-[240px] sm:w-[270px] lg:w-[290px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="heading-card text-base sm:text-lg text-slate-900 font-bold leading-tight">
                  Built Around One Goal
                </h4>
              </div>
              
              <p className="body-normal text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                Make every digital investment count.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}