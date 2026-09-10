import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';

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
  { id: 1, label: 'Years Experience', value: 5, suffix: '+', icon: Calendar, color: 'text-orange-500', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 2, label: 'Clients Served', value: 150, suffix: '+', icon: Users, color: 'text-orange-500', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 3, label: 'Projects Delivered', value: 300, suffix: '+', icon: Briefcase, color: 'text-orange-500', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 4, label: 'Revenue Generated', value: 10, suffix: 'Cr+', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-white/5', border: 'border-white/10' },
];

export default function Stats() {
  return (
    <section className="min-h-screen py-20 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden flex items-center">
      
      {/* Background Image Layer - White fade wash filters completely removed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
          alt="Background Visuals" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        {/* Sleek corporate low-transparent shading overlay instead of a white screen wall */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
      </div>

      {/* Ambient Deep Gradients Accent Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,72,142,0.2),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,140,0,0.12),transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Section */}
        <div className="text-center mb-16 sm:mb-20">
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 shadow-sm select-none">
              <BarChart3 className="w-4 h-4 text-orange-500" />
              <span>Our Impact</span>
            </div>
          </>

          {/* Heading Displays Fixed Line-Height Spacing Only For This Custom Node */}
          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15] tracking-tighter mb-6 drop-shadow-xl">
            Proven Results <br />
            <span className="heading-highlight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Beyond Metrics</span>
          </h2>

          <p className="body-large text-slate-300 max-w-2xl mx-auto font-medium tracking-tight drop-shadow-md leading-relaxed">
            We don't just track growth; we engineer it. Our track record is built on consistency and relentless optimization.
          </p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="p-8 group flex flex-col items-center text-center relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-black/30"
            >
              {/* Card Hover Ambient Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
              
              {/* Icon Container matching our capsule round shape theme */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 text-orange-500 border border-white/10 shadow-md">
                <stat.icon className="w-8 h-8 drop-shadow-sm" />
              </div>

              {/* Counter Text */}
              <div className="heading-display text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                <Counter from={0} to={stat.value} duration={2.5} delay={index * 0.1} suffix={stat.suffix} />
              </div>

              {/* Stat Label */}
              <span className="label-text text-slate-400 group-hover:text-white transition-colors duration-300 drop-shadow-xs font-bold tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}