import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  TrendingUp,
  Search,
  Layers,
  Sparkles,
  Code2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import CTA from "../components/CTA";

export default function CeoProfilePage() {
  const profileImage =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

  return (
    <>
      <Helmet>
        <title>Naga Vishnu N. — Founder & CEO | Navi Promotions</title>
        <meta
          name="description"
          content="Biography and background of Naga Vishnu N., Founder & CEO of Navi Promotions, SEO expert, and business development strategist."
        />
      </Helmet>

      <main className="bg-slate-50 min-h-screen pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb & Return Link */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors duration-200 group w-fit"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to About Us</span>
            </Link>

            <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-1.5">
              <Link to="/" className="hover:text-slate-800 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/about" className="hover:text-slate-800 transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium">Naga Vishnu N.</span>
            </nav>
          </div>
        </div>

        {/* Profile Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Profile Portrait */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={profileImage}
                    alt="Naga Vishnu N. - Founder & CEO"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                      Founder & CEO
                    </span>
                    <p className="text-xs sm:text-sm text-white/95 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>Theni, Tamil Nadu • Est. 2021</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Intro & Overview */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-800 text-xs sm:text-sm font-semibold w-fit">
                  <span>Leadership & Strategic Vision</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight break-words">
                    Naga Vishnu N.
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-brand-orange leading-snug sm:leading-relaxed break-words">
                    Founder & CEO | SEO Expert | Digital Marketing & Business Development Strategist
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Passionate about helping businesses build a strong digital presence and achieve sustainable growth through clear strategy, technology-driven solutions, and structured execution.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 text-center inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 active:scale-[0.98]"
                  >
                    Connect with Naga Vishnu
                  </Link>
                  <Link
                    to="/about"
                    className="px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition-all duration-200 text-center inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    View Our Team
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Complete Biography Content */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* About Me */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              About Me
            </h2>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                I’m Naga Vishnu N., Founder & CEO of Navi Promotions, a digital marketing and technology company established on 21 February 2021 in Theni, Tamil Nadu. I’m an entrepreneur, SEO expert, brand consultant, and business development strategist passionate about helping businesses build a strong digital presence and achieve sustainable growth.
              </p>
              <p>
                My approach combines digital marketing, search engine optimization, brand development, technology, and systematic business planning to create practical growth strategies tailored to each business’s goals. I believe business growth requires more than individual marketing activities—it requires the right strategy, a clear direction, consistent execution, and systems that support long-term success.
              </p>
              <p>
                Through Navi Promotions, I work with businesses to strengthen their brand identity, improve online visibility, connect with their target audience, generate business opportunities, and build a stronger digital foundation.
              </p>
            </div>
          </section>

          {/* My Expertise */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              My Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I focus on improving search visibility, strengthening website performance, and helping businesses connect with relevant audiences through strategic, sustainable SEO practices.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Digital Marketing Strategy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I develop integrated digital marketing strategies that align a business’s objectives with its audience, positioning, content, and online marketing activities.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Business Development & Growth Strategy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I help businesses identify growth opportunities, improve their market positioning, and establish systematic approaches to marketing, customer acquisition, and business development.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Branding & Positioning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I believe a strong brand goes beyond a logo. It requires a clear identity, consistent communication, meaningful differentiation, and a professional digital presence.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Website & Digital Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I focus on using websites and digital technologies to strengthen credibility, communicate value, support customer journeys, and create opportunities for business growth.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Systems, Automation & Product Innovation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I’m interested in building practical digital products, improving workflows, and using technology and AI to simplify business processes and make growth more systematic.
                </p>
              </div>

            </div>
          </section>

          {/* My Approach to Business Growth */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              My Approach to Business Growth
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                My philosophy is simple: build the strategy, establish the system, and execute with purpose.
              </p>
              <p>
                Every business has different goals, challenges, and opportunities. Rather than relying on one-size-fits-all solutions, I believe in understanding the business first, identifying the right priorities, and developing strategies that align with its long-term objectives.
              </p>
              
              <p className="font-semibold text-slate-900 pt-1">
                My approach emphasizes:
              </p>

              <ul className="space-y-2.5 list-disc pl-5 sm:pl-6 text-slate-700 marker:text-brand-orange">
                <li>Strategic planning aligned with business goals.</li>
                <li>Data-informed marketing decisions and continuous improvement.</li>
                <li>Strong brand positioning and consistent digital communication.</li>
                <li>Practical technology solutions that support business operations.</li>
                <li>Sustainable growth through structured processes and execution.</li>
              </ul>
            </div>
          </section>

          {/* Navi Promotions */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              Navi Promotions
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                As the Founder & CEO of Navi Promotions, I lead the vision of helping businesses grow through the integration of digital marketing, branding, technology, and business-focused digital solutions.
              </p>
              <p>
                Navi Promotions offers services including SEO, social media marketing, performance marketing, website and software development, graphic design, video production, and digital brand development.
              </p>
              <p>
                My goal is to build Navi Promotions into a strategic growth partner for businesses—not simply a service provider, but a team that understands business objectives and develops digital solutions around them.
              </p>
            </div>
          </section>

          {/* Beyond Navi Promotions */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              Beyond Navi Promotions
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Alongside Navi Promotions, I’m also building Cumbum Valley, a venture focused on traditional food products and supply opportunities. My entrepreneurial interests extend to digital products, technology-driven platforms, and solutions designed to address practical business needs.
              </p>
              <p>
                These ventures reflect my broader vision of combining business strategy, technology, and innovation to create meaningful value.
              </p>
            </div>
          </section>

          {/* My Vision */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-200">
              My Vision
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                My vision is to help businesses become more visible, more systematic, and better equipped for the digital future. I aim to build brands, develop useful digital solutions, and create growth systems that help businesses move forward with clarity and confidence.
              </p>
            </div>

            {/* Closing statement */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50/50 to-orange-50/30 border-l-4 border-brand-orange mt-6 shadow-sm">
              <p className="text-base sm:text-lg font-medium italic text-slate-900 leading-relaxed">
                “I believe that when strategy meets technology and consistent execution, businesses can create lasting growth.”
              </p>
            </div>
          </section>

          {/* Return link to About Us */}
          <div className="pt-6 border-t border-slate-200 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold transition-colors duration-200 group w-full sm:w-auto text-center"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Return to Our Team on About Page</span>
            </Link>
          </div>

        </div>

        {/* Global CTA */}
        <div className="mt-16 sm:mt-24">
          <CTA />
        </div>

      </main>
    </>
  );
}
