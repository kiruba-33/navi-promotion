import React from 'react';
import { Handshake } from 'lucide-react';
import clientPartners from '../../../data/clientPartners';

export default function TrustedClients() {
  const sets = [clientPartners, clientPartners];

  return (
    <section id="trusted-clients" className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16 bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm select-none">
            <Handshake className="w-4 h-4 text-orange-500" aria-hidden="true" focusable="false" />
            <span>Trusted By Leading Brands</span>
          </div>

          <h2 className="heading-section text-center heading-primary tracking-tight mb-4 whitespace-normal lg:whitespace-nowrap">
            Our Valuable <span className="heading-highlight">Clients</span>
          </h2>

          <p className="body-large mx-auto text-center text-slate-600 max-w-4xl font-normal tracking-tight whitespace-normal lg:whitespace-nowrap">
            We're proud to partner with businesses across industries, delivering creative, digital, branding and technology solutions that drive measurable growth.
          </p>
        </div>
      </div>

      {/* Subtle, Smooth Continuous Logo Animation Track */}
      <div className="relative w-full overflow-hidden py-1 sm:py-2">
        {/* Soft Side Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f5f5f4] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5f5f4] to-transparent z-10 pointer-events-none" />

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
                    className="group flex shrink-0 flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-orange-500/40 hover:bg-white shadow-xs hover:shadow-sm transition-all duration-300"
                    role="listitem"
                  >
                    <div className="flex shrink-0 h-[55px] w-[120px] sm:h-[65px] sm:w-[140px] lg:h-[75px] lg:w-[160px] items-center justify-center px-2">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="block h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <span className="mt-2 shrink-0 whitespace-nowrap text-xs font-semibold tracking-wider text-slate-500 group-hover:text-slate-900 transition-colors duration-200 select-none">
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

        .client-marquee-track:hover {
          animation-play-state: paused;
        }

        .client-marquee-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
