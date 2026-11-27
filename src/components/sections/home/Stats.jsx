import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

function Counter({ from, to, duration = 2, delay = 0, suffix = "" }) {
  const [display, setDisplay] = useState(from);
  const ref = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let timer;
    let observer;

    const startAnimation = () => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = progress * (2 - progress); // easeOutQuad
        setDisplay(Math.round(from + easeProgress * (to - from)));
        if (progress < 1) {
          timer = window.requestAnimationFrame(step);
        }
      };
      timer = window.requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(startAnimation, delay * 1000);
            if (observer) observer.disconnect();
          }
        },
        { rootMargin: "-50px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    } else {
      setTimeout(startAnimation, delay * 1000);
    }

    return () => {
      if (timer) window.cancelAnimationFrame(timer);
      if (observer) observer.disconnect();
    };
  }, [from, to, duration, delay]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { id: 1, label: 'Years Experience', value: 5, suffix: '+', icon: Calendar, color: 'text-[#F97316]', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 2, label: 'Customers', value: 75, suffix: '+', icon: Users, color: 'text-[#F97316]', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 3, label: 'Projects Delivered', value: 300, suffix: '+', icon: Briefcase, color: 'text-[#F97316]', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 4, label: 'Average ROI for Our Clients', value: 98, suffix: '%', icon: TrendingUp, color: 'text-[#F97316]', bg: 'bg-white/5', border: 'border-white/10' },
];

export default function Stats() {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20 bg-[#102A56] relative overflow-hidden flex items-center"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
          alt="Background Visuals" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102A56]/95 via-[#102A56]/80 to-[#102A56]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/20 bg-[#FFFFFF] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
            <BarChart3 className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Our Impact</span>
          </div>

          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-center text-[#FFFFFF] mb-4">
            Proven Results <span className="text-[#F97316]">Beyond Metrics</span>
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#F1F5F9]/85 max-w-2xl mx-auto font-normal leading-[1.65]">
            We don't just track growth; we engineer it. Our track record is built on consistency and relentless optimization.
          </p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="p-7 sm:p-8 group flex flex-col items-center text-center relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-[#2563EB]/60 transition-all duration-300 shadow-lg shadow-black/15"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 bg-[#2563EB]/25 text-[#F97316] border border-[#2563EB]/40 group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] transition-colors duration-300">
                <stat.icon className="w-6 h-6" aria-hidden="true" focusable="false" />
              </div>

              {/* Counter Text */}
              <div className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold leading-[1.15] text-[#FFFFFF] mb-2 tracking-[-0.02em] tabular-nums">
                <Counter from={0} to={stat.value} duration={2.5} delay={index * 0.1} suffix={stat.suffix} />
              </div>

              {/* Stat Label */}
              <span className="text-[13px] sm:text-[14px] leading-[1.45] text-[#F1F5F9]/85 group-hover:text-[#FFFFFF] transition-colors duration-300 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}