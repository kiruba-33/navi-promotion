import {
  Target,
  Zap,
  Heart,
} from "lucide-react";

import ArrowButton from "../../ui/ArrowButton";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 rounded-l-[6rem] lg:rounded-l-[10rem] hidden lg:block" />

      <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl" />

      <div className="absolute top-1/2 -left-20 w-40 h-40 border border-slate-200 rounded-full border-dashed hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <div className="relative z-10">

              <div className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[8px] sm:border-[10px] lg:border-[12px] border-white shadow-2xl shadow-slate-900/10">

                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Our Creative Space"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 right-0 sm:-right-4 lg:-right-10 bg-white border border-slate-200 p-4 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-900/10 w-[220px] sm:w-[260px] lg:max-w-[280px]">

                <div className="flex items-center gap-3 sm:gap-4 mb-4">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-2xl flex items-center justify-center">

                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />

                  </div>

                  <div>

                    <h4 className="heading-card text-lg sm:text-xl heading-primary leading-none">
                      12.4x
                    </h4>

                    <p className="label-text text-slate-400 mt-1">
                      Avg. ROAS
                    </p>

                  </div>

                </div>

                <p className="body-small text-slate-600 font-medium">
                  We optimize every touchpoint for maximum conversion.
                </p>

              </div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-6 sm:mb-8 shadow-sm select-none">
              <Heart className="w-4 h-4 text-orange-500" />
              <span>Our Mission</span>
            </div>

            {/* HEADING (Fixed Spacing for Tablet and Desktop views) */}
            <h2 className="heading-display 
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.15] 
            mb-6 sm:mb-8 lg:mb-10 ">

              Forging{" "}

              <span  className="
                bg-gradient-to-r
                from-yellow-400
                via-orange-500
                to-orange-600
                bg-clip-text
                text-transparent
              ">
                Digital Legacies
              </span>{" "}

              Since 2021

            </h2>

            {/* PARAGRAPH */}
            <p className="body-large font-medium mb-10 sm:mb-12 max-w-2xl font-sans">

              Navi Promotions is a specialized performance agency focused on turning digital attention into predictable business growth.

            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">

              {/* CARD 1 */}
              <div className="space-y-4 p-5 sm:p-6 rounded-3xl border border-slate-200 bg-white">

                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">

                  <Target className="w-6 h-6 text-orange-500" />

                </div>

                <h3 className="heading-card text-lg sm:text-xl heading-primary">
                  Radical Clarity
                </h3>

                <p className="body-small text-slate-500">
                  Real-time reporting and zero confusion. Every rupee is tracked properly.
                </p>

              </div>

              {/* CARD 2 */}
              <div className="space-y-4 p-5 sm:p-6 rounded-3xl border border-slate-200 bg-white">

                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">

                  <Zap className="w-6 h-6 text-orange-500" />

                </div>

                <h3 className="heading-card text-lg sm:text-xl heading-primary">
                  Agile Execution
                </h3>

                <p className="body-small text-slate-500">
                  Campaigns are optimized continuously using live performance data.
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-2 sm:mt-4">

              <ArrowButton
                text="Learn More About Us"
                to="/about"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}