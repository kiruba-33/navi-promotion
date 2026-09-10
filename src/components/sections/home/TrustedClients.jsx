import React from 'react';
import { Handshake } from 'lucide-react';
import clientPartners from '../../../data/clientPartners';

export default function TrustedClients() {
  return (
    <section id="trusted-clients" className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28 bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm select-none">
            <Handshake className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
            <span>Trusted By Leading Brands</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary tracking-tight">
            Our Valuable <span className="heading-highlight">Clients</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base lg:text-lg">
            We&apos;re proud to partner with businesses across industries, delivering creative, digital, branding and technology solutions that drive measurable growth.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {clientPartners.map((client) => (
            <a
              key={client.id}
              href={client.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${client.name} website`}
              className="group flex flex-col items-center justify-center bg-transparent px-3 py-5 text-center transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 sm:px-4 sm:py-6 lg:px-5 lg:py-7"
            >
              {/* Proportional enlarged containers */}
              <div className="flex h-[80px] w-[140px] sm:h-[95px] sm:w-[160px] lg:h-[105px] lg:w-[180px] items-center justify-center px-2">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-contain"
                />
              </div>
              <span className="mt-3 text-sm font-semibold tracking-[0.16em] text-slate-500 transition-colors duration-150 ease-out group-hover:text-slate-900 sm:text-[15px]">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
