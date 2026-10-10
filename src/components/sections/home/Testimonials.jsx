import React, { useState, useRef, useEffect } from "react";
import { Star, Play, X, Quote, MessageSquareQuote } from "lucide-react";

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
      className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl p-3 sm:p-4 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer group"
    >
      {/* Video with Viewport Autoplay */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group/thumb cursor-pointer bg-slate-900 border border-slate-200/50">
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.videoThumbnail}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all duration-300 relative">
            <Play className="w-4 h-4 fill-white ml-0.5" aria-hidden="true" focusable="false" />
          </div>
        </div>

        {/* Bottom Overlay Quote */}
        <p className="absolute bottom-3 left-4 right-4 text-xs sm:text-sm font-semibold text-white line-clamp-2 drop-shadow-md pointer-events-none">
          "{item.headline}"
        </p>
      </div>

      {/* Client Info & Rating Footer */}
      <div className="flex items-center justify-between gap-3 px-1 py-1">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={item.image}
            alt={item.author}
            className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
          />
          <div className="min-w-0">
            <h4 className="text-sm font-semibold heading-primary truncate">
              {item.author}
            </h4>
            <p className="text-xs text-slate-500 truncate font-normal">
              {item.role},{" "}
              <span className="text-orange-500 font-semibold">{item.company}</span>
            </p>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-0.5 shrink-0">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-orange-500 text-orange-500"
            />
          ))}
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
      className="py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-slate-50/50"
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
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Ambient Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header Block Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none">
          <MessageSquareQuote className="w-4 h-4 text-orange-500" />
          <span>Client Love</span>
        </div>

        <h2 className="heading-section text-center heading-primary tracking-tight mb-4 whitespace-normal lg:whitespace-nowrap">
          Trusted by the World's <span className="heading-highlight leading-none">Ambitious Brands</span>
        </h2>

        <p className="body-large text-slate-600 max-w-4xl mx-auto font-normal tracking-tight leading-relaxed whitespace-normal lg:whitespace-nowrap">
          Hear from the founders and marketing leaders who have scaled their businesses and dominated their markets.
        </p>
      </div>

      {/* Dual-Row Infinite Horizontal Marquee Tracks */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Soft Side Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-20 bg-slate-950/50 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" aria-hidden="true" focusable="false" />
            </button>

            {/* Video Player */}
            <div className="flex-grow bg-black flex items-center justify-center aspect-video md:aspect-auto md:w-3/5">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Client Detail Info Panel */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-slate-900 md:w-2/5 max-h-[40vh] md:max-h-none overflow-y-auto">
              <div className="mt-4 md:mt-8">
                <Quote className="w-8 h-8 text-orange-500/25 mb-4" aria-hidden="true" focusable="false" />
                <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-6 italic">
                  "{activeVideo.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm"
                />
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">
                    {activeVideo.author}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium mt-0.5">
                    {activeVideo.role},{" "}
                    <span className="text-orange-500 font-bold">
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