import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, Play, X, Quote, MessageSquareQuote } from "lucide-react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

const testimonials = [
  {
    id: 1,
    content:
      "Navi Promotions completely transformed our local brand into a regional powerhouse. Their data-driven approach increased our footfall by 40% in just 3 months. The ROI has been absolutely phenomenal.",
    headline: "Transforming our local brand into a powerhouse",
    author: "Rajesh Kannan",
    role: "Managing Director",
    company: "Theni Textiles",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The team at Navi doesn't just run ads; they understand business. Their custom pricing package was perfect for our startup, and the customer acquisition cost dropped by 45%.",
    headline: "CAC dropped by 45% with their startup package",
    author: "Priya Sharma",
    role: "Founder",
    company: "FreshBites",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Professional, energetic, and truly result-oriented. They revamped our entire digital presence and our lead generation has never been better. Highly recommended for B2B SaaS.",
    headline: "Revamped our entire digital presence successfully",
    author: "Karthik Raja",
    role: "CEO",
    company: "BuildTech Solutions",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: 5,
  },
  {
    id: 4,
    content:
      "We partnered with Navi for our enterprise SEO and the results were staggering. Organic traffic doubled within 6 months, driving massive revenue growth across all our product lines.",
    headline: "Organic traffic doubled within just 6 months",
    author: "Anjali Desai",
    role: "CMO",
    company: "Global Retail",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1580894732444-8fecef2601da?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    rating: 5,
  },
  {
    id: 5,
    content:
      "In the competitive healthcare sector, trust is everything. Navi helped us build a robust online reputation and targeted local campaigns that brought in a steady stream of new patients.",
    headline: "Built high trust & a steady stream of patients",
    author: "Dr. Arun Kumar",
    role: "Chief Medical Officer",
    company: "City Care Hospital",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    rating: 5,
  },
  {
    id: 6,
    content:
      "Their real estate marketing strategies are top-notch. We sold out our new premium housing project 2 months ahead of schedule thanks to their highly targeted lead generation campaigns.",
    headline: "Sold out housing project 2 months ahead of schedule",
    author: "Meera Reddy",
    role: "Sales Director",
    company: "Prime Properties",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: 5,
  },
  {
    id: 7,
    content:
      "Navi Promotions helped us pivot to digital seamlessly. Our online course enrollments skyrocketed by 300% after they took over our social media and performance marketing.",
    headline: "Enrollments skyrocketed by 300% after pivot",
    author: "Suresh Menon",
    role: "Director",
    company: "Excel Academy",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: 5,
  },
  {
    id: 8,
    content:
      "Their social media strategies are unmatched. We saw a 3x increase in engagement and gained 150 new premium members in just the first quarter of our partnership.",
    headline: "Gained 150 new premium members in 3 months",
    author: "Kavitha Sundaram",
    role: "Operations Head",
    company: "FitLife Club",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    videoThumbnail:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&h=400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    rating: 5,
  },
];

/* Split testimonials into 2 rows and duplicate each row internally */
const row1Items = testimonials.slice(0, 4);
const row2Items = testimonials.slice(4, 8);

const doubleRow1 = [...row1Items, ...row1Items];
const doubleRow2 = [...row2Items, ...row2Items];

/* Individual Autoplaying Testimonial Card */
function TestimonialCard({ item, onSelectCard }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Viewport-aware playback with graceful catch
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = el.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Browser policy fallback: stays paused cleanly with poster
              });
            }
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onClick={() => onSelectCard(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectCard(item);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Watch testimonial from ${item.author}, ${item.company}`}
      className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-[#F1F5F9]/60 hover:bg-[#FFFFFF] rounded-2xl p-3.5 sm:p-4 border border-[#0F172A]/10 hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3.5 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
    >
      {/* Video with Viewport Autoplay */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden group/thumb cursor-pointer bg-[#102A56] border border-[#0F172A]/10">
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.videoThumbnail}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/90 via-[#102A56]/25 to-transparent pointer-events-none" />

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 rounded-lg bg-[#2563EB] group-hover:bg-[#F97316] text-[#FFFFFF] flex items-center justify-center shadow-lg transition-colors duration-300 relative">
            <Play className="w-4 h-4 fill-white ml-0.5" aria-hidden="true" focusable="false" />
          </div>
        </div>

        {/* Bottom Overlay Quote */}
        <p className="absolute bottom-3 left-4 right-4 text-[13px] sm:text-[14px] font-medium leading-[1.4] text-[#FFFFFF] line-clamp-2 pointer-events-none">
          "{item.headline}"
        </p>
      </div>

      {/* Client Info & Rating Footer */}
      <div className="flex items-center justify-between gap-3 px-1 py-0.5">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={item.image}
            alt={item.author}
            className="w-10 h-10 rounded-full object-cover border border-[#0F172A]/15 shrink-0"
          />
          <div className="min-w-0">
            <h4 className="text-[14px] sm:text-[15px] font-semibold leading-[1.35] text-[#0F172A] truncate">
              {item.author}
            </h4>
            <p className="text-[12px] sm:text-[13px] leading-[1.4] text-[#0F172A]/70 truncate font-normal">
              {item.role},{" "}
              <span className="text-[#2563EB] font-medium">{item.company}</span>
            </p>
          </div>
        </div>

        {/* Verified Rating Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FFFFFF] border border-[#0F172A]/10 text-[#102A56] text-[12px] font-medium leading-[1.3] shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" focusable="false" />
          <span>{item.rating}.0</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#FFFFFF]"
    >
      {/* CSS Keyframe Animations for Dual Opposite-Direction Marquees */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        @media (hover: hover) and (pointer: fine) {
          .animate-marquee-left:hover,
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Header Block Section */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium leading-[1.4] mb-4 shadow-xs select-none">
          <MessageSquareQuote className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
          <span>Client Love</span>
        </div>

        <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-center text-[#0F172A] mb-4">
          Trusted by the World's Ambitious Brands
        </h2>

        <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#0F172A]/80 max-w-2xl mx-auto font-normal leading-[1.65]">
          Hear from the founders and marketing leaders who have scaled their businesses and dominated their markets.
        </p>
      </div>

      {/* Dual-Row Infinite Horizontal Marquee Tracks */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Soft Side Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Right to Left */}
        <div className="flex gap-5 min-w-max animate-marquee-left">
          {doubleRow1.map((item, idx) => (
            <TestimonialCard
              key={`row1-${item.id}-${idx}`}
              item={item}
              onSelectCard={setActiveVideo}
            />
          ))}
        </div>

        {/* ROW 2: Left to Right (Reverse) */}
        <div className="flex gap-5 min-w-max animate-marquee-right">
          {doubleRow2.map((item, idx) => (
            <TestimonialCard
              key={`row2-${item.id}-${idx}`}
              item={item}
              onSelectCard={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* Interactive Video Player Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#102A56] rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-[#F1F5F9]/80 hover:text-[#FFFFFF] transition-colors p-2 rounded-lg hover:bg-white/10 z-20 bg-[#102A56]/70 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" aria-hidden="true" focusable="false" />
            </button>

            {/* Video Player */}
            <div className="flex-grow bg-[#0F172A] flex items-center justify-center aspect-video md:aspect-auto md:w-3/5">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Client Detail Info Panel */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-[#102A56] md:w-2/5 max-h-[40vh] md:max-h-none overflow-y-auto">
              <div className="mt-4 md:mt-8">
                <Quote className="w-8 h-8 text-[#F97316]/60 mb-4" aria-hidden="true" focusable="false" />
                <p className="text-[#FFFFFF] text-[15px] md:text-[17px] font-normal leading-[1.65] mb-6 italic">
                  "{activeVideo.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/15 mt-auto">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-sm"
                />
                <div>
                  <h4 className="text-[#FFFFFF] text-[15px] sm:text-[16px] font-semibold leading-[1.3]">
                    {activeVideo.author}
                  </h4>
                  <p className="text-[#F1F5F9]/80 text-[13px] sm:text-[14px] font-normal leading-[1.4] mt-0.5">
                    {activeVideo.role},{" "}
                    <span className="text-[#F97316] font-medium">
                      {activeVideo.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}