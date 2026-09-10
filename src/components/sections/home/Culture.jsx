import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Coffee, Target } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Extreme Ownership',
    desc: 'We treat every project as if it were our own business, taking absolute responsibility for outcomes.'
  },
  {
    icon: Heart,
    title: 'Radical Empathy',
    desc: 'We listen deeply to our clients and their customers, building strategies rooted in human connection.'
  },
  {
    icon: Target,
    title: 'Data-Driven Art',
    desc: 'Creative is the variable, but data is the North Star. We balance logic with breathtaking aesthetics.'
  },
  {
    icon: Coffee,
    title: 'Growth Mindset',
    desc: 'We never stop learning. We thrive on feedback, experimentation, and constant evolution.'
  }
];

export default function Culture() {
  return (
    <section id="culture" className="relative bg-[#0b0f19] overflow-hidden min-h-screen pb-20 sm:pb-24 lg:pb-32">
      
      {/* FIXED NAVBAR REFRESH SPACING LAYER: 
        This explicit dynamic container prevents the transparent navigation overlay menu components 
        from crashing or showing up improperly during instant page reloads and screen refresh boundaries.
      */}
      <div className="w-full h-24 sm:h-28 lg:h-36 pointer-events-none" />

      {/* Background Ambient Dark Blur Blobs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-40 h-40 border border-slate-800 rounded-full border-dashed hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* CONTENT SIDE */}
          <div>
            {/* TAG */}
            <React.Fragment>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 sm:mb-8 shadow-sm select-none">
                <Zap className="w-4 h-4 text-orange-500" />
                <span>Inside Navi</span>
              </div>
            </React.Fragment>

            {/* HEADING - Fixed Line-Height Spacing Rule & Heading Breakpoints */}
            <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 lg:mb-10 tracking-tighter sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15]">
              A Culture Built on <br />
              <span className="heading-highlight">Impact & Excellence</span>
            </h2>

            {/* PARAGRAPH */}
            <p className="body-large text-slate-400 font-medium mb-10 sm:mb-12 max-w-2xl leading-relaxed">
              At Navi Promotions, we’ve built more than just an agency; we’ve built a sanctuary for high-impact thinkers and creative rebels. Our culture is the engine that drives results for our clients.
            </p>

            {/* VALUES GRID */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {values.map((v, i) => (
                <div key={i} className="group flex flex-col space-y-3 p-5 rounded-3xl border border-slate-800 bg-white/[0.02] backdrop-blur-md shadow-xs transition-all duration-300 hover:border-slate-700">
                  {/* Icon Block with hover state matching theme */}
                  <div className="w-12 h-12 bg-white/5 border border-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                    <v.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="heading-card text-lg sm:text-xl text-white">{v.title}</h4>
                  <p className="body-small text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative mt-12 lg:mt-0">
            {/* MAIN IMAGE CARD */}
            <div className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[8px] sm:border-[10px] lg:border-[12px] border-white/5 shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Navi Culture Space" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* FLOATING CARD - Retained only looping motion */}
            <motion.div 
               animate={{ y: [0, -16, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-0 sm:-left-4 lg:-left-10 bg-[#0e1322] border border-slate-800 p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-black/40 w-[240px] sm:w-[260px] lg:max-w-[280px]"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <React.Fragment key={i}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0e1322] bg-slate-800 overflow-hidden shadow-sm">
                         <img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar asset" className="w-full h-full object-cover" />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <span className="label-text text-white font-bold">+12 Others</span>
              </div>
              
              <p className="body-small text-slate-300 font-medium italic">
                "The most collaborative environment I've ever been part of."
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-800 label-text text-slate-500 font-bold tracking-widest">
                Team Feedback 2026
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}