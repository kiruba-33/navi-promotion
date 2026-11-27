import React from 'react';
import { Handshake } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import clientPartners from '../../../data/clientPartners';

export default function TrustedClients() {
  const sets = [clientPartners, clientPartners];

  return (
    <section
      id="trusted-clients"
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 bg-[#F1F5F9]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#102A56]/10 bg-[#FFFFFF] px-3.5 py-1.5 text-[12px] sm:text-[13px] font-medium leading-[1.4] text-[#102A56] shadow-xs select-none">
            <Handshake className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Trusted By Leading Brands</span>
          </div>

          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] text-center text-[#0F172A] mb-4">
            Our Valuable Clients
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] mx-auto text-center text-[#0F172A]/80 max-w-2xl font-normal">
            We're proud to partner with businesses across industries, delivering creative, digital, branding and technology solutions that drive measurable growth.
          </p>
        </div>
      </div>

      {/* Subtle, Smooth Continuous Logo Animation Track */}
      <div className="relative w-full overflow-hidden py-1 sm:py-2">
        {/* Soft Side Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10 pointer-events-none" />

        <div className="client-marquee-mask overflow-hidden py-3 sm:py-4">
          <div
            className="client-marquee-track flex w-max items-center whitespace-nowrap will-change-transform"
            role="list"
            aria-label="Trusted client logos"
          >
            {sets.map((set, setIndex) => (
              <div
                key={`client-set-${setIndex}`}
                className="flex shrink-0 items-center gap-6 sm:gap-10 lg:gap-12 pr-6 sm:pr-10 lg:pr-12"
                role="presentation"
                aria-hidden={setIndex === 1}
              >
                {set.map((client) => (
                  <a
                    key={`${client.id}-${setIndex}`}
                    href={client.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${client.name} website`}
                    className="group flex shrink-0 flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-[#FFFFFF] border border-[#0F172A]/10 hover:border-[#2563EB]/40 shadow-xs hover:shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    role="listitem"
                  >
                    <div className="flex shrink-0 h-[55px] w-[120px] sm:h-[65px] sm:w-[140px] lg:h-[75px] lg:w-[160px] items-center justify-center px-2">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="mt-2 shrink-0 whitespace-nowrap text-[12px] sm:text-[13px] font-medium leading-[1.4] tracking-[0.01em] text-[#0F172A]/75 group-hover:text-[#102A56] transition-colors duration-200 select-none">
                      {client.name}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes client-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .client-marquee-track {
          animation: client-scroll 32s linear infinite;
        }

        @media (hover: hover) and (pointer: fine) {
          .client-marquee-track:hover {
            animation-play-state: paused;
          }
        }

        .client-marquee-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
