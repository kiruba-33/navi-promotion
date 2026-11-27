import React from "react";
import { motion } from "framer-motion";
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
import { useHeroScrollAnimation } from "../hooks/useHeroScrollAnimation";

export default function CeoProfilePage() {
  const profileImage =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation({
    yDesktop: 100,
    yMobile: 40,
    fadeEnd: 0.8,
  });

  return (
    <>
      <Helmet>
        <title>Naga Vishnu N. — Founder & CEO | Navi Promotions</title>
        <meta
          name="description"
          content="Biography and background of Naga Vishnu N., Founder & CEO of Navi Promotions, SEO expert, and business development strategist."
        />
      </Helmet>

      <main className="bg-[#F1F5F9] min-h-screen pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb & Return Link */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#102A56] hover:text-[#2563EB] transition-colors duration-200 group w-fit"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to About Us</span>
            </Link>

            <nav aria-label="Breadcrumb" className="text-[13px] text-[#0F172A]/65 flex flex-wrap items-center gap-1.5">
              <Link to="/" className="hover:text-[#102A56] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/about" className="hover:text-[#102A56] transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-[#102A56] font-medium">Naga Vishnu N.</span>
            </nav>
          </div>
        </div>

        {/* Profile Hero Section */}
        <section ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 overflow-hidden">
          <motion.div style={{ y: yText, opacity: opacityHero }} className="bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Profile Portrait */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-[#0F172A]/10 shadow-md">
                  <motion.img
                    style={{ scale: scaleImage }}
                    src={profileImage}
                    alt="Naga Vishnu N. - Founder & CEO"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-[#FFFFFF]">
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#F97316] text-[#FFFFFF] text-[11px] font-medium uppercase tracking-[0.04em] mb-1.5 shadow-sm">
                      Founder & CEO
                    </span>
                    <p className="text-[12px] sm:text-[13px] text-[#F1F5F9] flex items-center gap-1.5 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                      <span>Theni, Tamil Nadu • Est. 2021</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Intro & Overview */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium w-fit">
                  <span>Leadership & Strategic Vision</span>
                </div>

                <div className="space-y-2">
                  <h1 className="heading-display text-[#0F172A] break-words">
                    Naga Vishnu N.
                  </h1>
                  <p className="text-[15px] sm:text-[17px] font-medium text-[#2563EB] leading-[1.4] break-words">
                    Founder & CEO | SEO Expert | Digital Marketing & Business Development Strategist
                  </p>
                </div>

                <p className="body-large text-[#0F172A]/80">
                  Passionate about helping businesses build a strong digital presence and achieve sustainable growth through clear strategy, technology-driven solutions, and structured execution.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3.5 rounded-[10px] bg-[#2563EB] hover:bg-[#102A56] text-[#FFFFFF] font-medium text-[14px] sm:text-[15px] shadow-sm transition-colors duration-200 text-center inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    Connect with Naga Vishnu
                  </Link>
                  <Link
                    to="/about"
                    className="px-6 py-3.5 rounded-[10px] bg-[#FFFFFF] border border-[#102A56]/25 hover:border-[#2563EB] hover:text-[#2563EB] text-[#102A56] font-medium text-[14px] sm:text-[15px] transition-colors duration-200 text-center inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    View Our Team
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* Complete Biography Content */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          
          {/* About Me */}
          <section className="space-y-4">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              About Me
            </h2>
            <div className="space-y-4 text-[#0F172A]/85 body-large">
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
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              My Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I focus on improving search visibility, strengthening website performance, and helping businesses connect with relevant audiences through strategic, sustainable SEO practices.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Digital Marketing Strategy
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I develop integrated digital marketing strategies that align a business’s objectives with its audience, positioning, content, and online marketing activities.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Business Development & Growth Strategy
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I help businesses identify growth opportunities, improve their market positioning, and establish systematic approaches to marketing, customer acquisition, and business development.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Branding & Positioning
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I believe a strong brand goes beyond a logo. It requires a clear identity, consistent communication, meaningful differentiation, and a professional digital presence.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Website & Digital Solutions
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I focus on using websites and digital technologies to strengthen credibility, communicate value, support customer journeys, and create opportunities for business growth.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 shadow-xs space-y-2">
                <h3 className="heading-card text-[#0F172A]">
                  Systems, Automation & Product Innovation
                </h3>
                <p className="body-normal text-[#0F172A]/80">
                  I’m interested in building practical digital products, improving workflows, and using technology and AI to simplify business processes and make growth more systematic.
                </p>
              </div>

            </div>
          </section>

          {/* My Approach to Business Growth */}
          <section className="space-y-4">
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              My Approach to Business Growth
            </h2>

            <div className="space-y-4 text-[#0F172A]/85 body-large">
              <p>
                My philosophy is simple: build the strategy, establish the system, and execute with purpose.
              </p>
              <p>
                Every business has different goals, challenges, and opportunities. Rather than relying on one-size-fits-all solutions, I believe in understanding the business first, identifying the right priorities, and developing strategies that align with its long-term objectives.
              </p>
              
              <p className="font-semibold text-[#102A56] pt-1">
                My approach emphasizes:
              </p>

              <ul className="space-y-2.5 list-disc pl-5 sm:pl-6 text-[#0F172A]/85 marker:text-[#F97316]">
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
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              Navi Promotions
            </h2>

            <div className="space-y-4 text-[#0F172A]/85 body-large">
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
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              Beyond Navi Promotions
            </h2>

            <div className="space-y-4 text-[#0F172A]/85 body-large">
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
            <h2 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.2] text-[#0F172A] pb-3 border-b border-[#0F172A]/10">
              My Vision
            </h2>

            <div className="space-y-4 text-[#0F172A]/85 body-large">
              <p>
                My vision is to help businesses become more visible, more systematic, and better equipped for the digital future. I aim to build brands, develop useful digital solutions, and create growth systems that help businesses move forward with clarity and confidence.
              </p>
            </div>

            {/* Closing statement */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 border-l-4 border-l-[#2563EB] mt-6 shadow-xs">
              <p className="text-[16px] sm:text-[18px] font-medium italic text-[#102A56] leading-[1.6]">
                “I believe that when strategy meets technology and consistent execution, businesses can create lasting growth.”
              </p>
            </div>
          </section>

          {/* Return link to About Us */}
          <div className="pt-6 border-t border-[#0F172A]/10 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] border border-[#102A56]/25 bg-[#FFFFFF] hover:border-[#2563EB] hover:text-[#2563EB] text-[#102A56] text-[14px] font-medium transition-colors duration-200 group w-full sm:w-auto text-center"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Return to Our Team on About Page</span>
            </Link>
          </div>

        </div>

        {/* Global CTA */}
        <div className="mt-16 sm:mt-20">
          <CTA />
        </div>

      </main>
    </>
  );
}
