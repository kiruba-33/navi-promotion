import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Zap, Target, Activity } from 'lucide-react';
import CTA from '../components/CTA';
import { journalEntries } from '../data/growthJournalData';

export default function GrowthJournalDetailPage() {
  const { id } = useParams();
  const entry = journalEntries.find(e => e.id === id);
  
  const formattedContent = entry?.content
    ?.replace(/### (.*?)(\n|$)/g, '<h3 class="text-2xl font-black heading-primary mt-10 mb-4">$1</h3>')
    ?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    ?.replace(/\n/g, '<br/>');

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="heading-display text-3xl sm:text-4xl heading-primary mb-4 sm:mb-6 leading-[1.1]">Entry Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen selection:bg-brand-orange/30 selection:text-slate-900 font-sans">
      <Helmet>
        <title>{entry.title} | Navi Growth Journal</title>
        <meta name="description" content={entry.summary} />
      </Helmet>

      {/* Main Content & Sidebar Section */}
      <section className="pt-32 pb-12 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Title Details placed clean at the top of content */}
        <div className="mb-10 lg:mb-14 border-b border-slate-100 pb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest">
              {entry.type}
            </span>

            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
              <Calendar className="w-4 h-4" />
              {entry.date}
            </div>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
              <Clock className="w-4 h-4" />
              {entry.readingTime}
            </div>
          </div>

          <h1
            className="
              heading-display
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              heading-primary
              leading-[1.25]
              tracking-tight
              max-w-5xl
              mb-8
              pb-2
            "
          >
            {entry.title}
          </h1>

          <div className="flex flex-wrap gap-8 mt-6">
            {entry.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl md:text-5xl font-black text-brand-orange">
                  {metric.value}
                </p>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Grid Layout for Article Body and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-base sm:prose-xl prose-slate max-w-none">
              <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-bold mb-8 sm:mb-12 italic border-l-4 border-brand-orange pl-4 sm:pl-8">
                {entry.summary}
              </p>
              
              <div 
                className="text-slate-800 leading-relaxed space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: formattedContent || '' }}
              />
            </div>

            <div className="mt-10 sm:mt-16 pt-10 sm:pt-16 border-t border-slate-100">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Expertise Tags</h4>
               <div className="flex flex-wrap gap-2 sm:gap-3">
                  {entry.tags.map((tag) => (
                    <React.Fragment key={tag}>
                      <span className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white border border-slate-200 rounded-xl sm:rounded-2xl text-xs font-bold text-slate-600 hover:border-brand-orange hover:text-brand-orange transition-colors cursor-default shadow-sm">
                        #{tag}
                      </span>
                    </React.Fragment>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sm:space-y-12">
            <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
               <Zap className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 text-brand-orange opacity-5" />
               <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 leading-[1.1]">The Lab Protocol</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                    Every insight in this journal is backed by internal data, client-approved execution notes, and live performance metrics from the Navi Lab.
                  </p>
                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      { icon: Activity, text: "Live Data Feed" },
                      { icon: Target, text: "ROAS Focused" },
                      { icon: Share2, text: "Public Execution" }
                    ].map((item, i) => (
                      <React.Fragment key={i}>
                        <li className="flex items-center gap-3 sm:gap-4 group">
                           <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                              <item.icon className="w-4 h-4 sm:w-5 h-5" />
                           </div>
                           <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{item.text}</span>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-slate-200 shadow-xl">
               <h3 className="heading-card text-lg sm:text-xl heading-primary mb-4 sm:mb-6 leading-[1.1]">Share Experiment</h3>
               <div className="flex gap-3 sm:gap-4">
                  {[Share2, Bookmark].map((Icon, i) => (
                    <React.Fragment key={i}>
                      <button className="flex-1 h-14 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-orange transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 sm:w-6 h-6" />
                      </button>
                    </React.Fragment>
                  ))}
               </div>
            </div>
          </aside>
          
        </div>
      </section>

      <CTA />
    </main>
  );
}