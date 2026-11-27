import React from 'react';
import { Handshake } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import adobePremierePro from '../../../assets/tools/adobe-premiere-pro.svg';
import adobePhotoshop from '../../../assets/tools/adobe-photoshop.svg';
import adobeIllustrator from '../../../assets/tools/adobe-illustrator.svg';
import figma from '../../../assets/tools/figma.svg';
import filmora from '../../../assets/tools/filmora.svg';
import corelDraw from '../../../assets/tools/coreldraw.svg';
import html5 from '../../../assets/tools/html5.svg';
import css3 from '../../../assets/tools/css3.svg';
import javascript from '../../../assets/tools/javascript.svg';
import typescript from '../../../assets/tools/typescript.svg';
import react from '../../../assets/tools/react.svg';
import vite from '../../../assets/tools/vite.svg';
import nextjs from '../../../assets/tools/nextjs.svg';
import springBoot from '../../../assets/tools/spring-boot.svg';
import nodejs from '../../../assets/tools/nodejs.svg';
import expressjs from '../../../assets/tools/expressjs.svg';
import postgresql from '../../../assets/tools/postgresql.svg';

const creativeTools = [
  { name: 'Adobe Premiere Pro', icon: adobePremierePro },
  { name: 'Adobe Photoshop', icon: adobePhotoshop },
  { name: 'Adobe Illustrator', icon: adobeIllustrator },
  { name: 'Figma', icon: figma },
  { name: 'Filmora', icon: filmora },
  { name: 'CorelDRAW', icon: corelDraw },
];

const developmentTools = [
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css3 },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: react },
  { name: 'Vite', icon: vite },
  { name: 'Next.js', icon: nextjs },
  { name: 'Spring Boot', icon: springBoot },
  { name: 'Node.js', icon: nodejs },
  { name: 'Express.js', icon: expressjs },
  { name: 'PostgreSQL', icon: postgresql },
];

function MarqueeRow({ items, direction, ariaLabel }) {
  const sets = [items, items];
  const animationClass = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-4">
      <div className="marquee-mask overflow-hidden">
        <div
          className={`marquee-track ${animationClass} flex w-max items-center whitespace-nowrap will-change-transform backface-hidden`}
          role="list"
          aria-label={ariaLabel}
        >
          {sets.map((set, setIndex) => (
            <div
              key={`set-${setIndex}`}
              className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8"
              role="presentation"
              aria-hidden={setIndex === 1}
            >
              {set.map((item) => (
                <div
                  key={`${item.name}-${setIndex}`}
                  className="flex shrink-0 items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#F1F5F9]/70 border border-[#0F172A]/10 text-[#0F172A] shadow-xs hover:bg-[#FFFFFF] hover:border-[#2563EB]/40 hover:shadow-sm transition-all duration-300"
                  role="listitem"
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 flex-shrink-0 object-contain transition-transform duration-300"
                  />
                  <span className="whitespace-nowrap text-[14px] sm:text-[15px] font-medium leading-[1.3] text-[#102A56]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ToolsPartners() {
  return (
    <section
      className="relative w-full overflow-x-hidden py-12 sm:py-16 lg:py-20 bg-[#FFFFFF]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12 flex flex-col items-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] px-3.5 py-1.5 text-[12px] sm:text-[13px] font-medium leading-[1.4] text-[#102A56] shadow-xs select-none">
            <Handshake className="w-4 h-4 text-[#F97316]" aria-hidden="true" focusable="false" />
            <span>Our Tech Stack</span>
          </div>

          <h2 className="text-[clamp(1.75rem,2.8vw,2.375rem)] font-semibold leading-[1.16] tracking-[-0.015em] mb-4 text-center text-[#0F172A]">
            Empowering Success with Elite Tools
          </h2>

          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] mx-auto text-center text-[#0F172A]/80 max-w-2xl font-normal">
            We blend creative precision with modern engineering to deliver experiences that are polished, reliable, and future-ready.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <MarqueeRow items={creativeTools} direction="left" ariaLabel="Creative and Marketing tools" />
          <MarqueeRow items={developmentTools} direction="right" ariaLabel="Development tools" />
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .marquee-track {
          animation-duration: 24s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          will-change: transform;
        }

        .marquee-left {
          animation-name: marquee-left;
        }

        .marquee-right {
          animation-name: marquee-right;
        }

        .marquee-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}