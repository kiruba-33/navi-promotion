import React from 'react';
import { Handshake } from 'lucide-react';
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

function MarqueeRow({ title, items, direction }) {
  const sets = [items, items];
  const animationClass = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative w-full overflow-hidden py-2 sm:py-3">
      <div className="mb-3 px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold heading-primary sm:text-xl">{title}</h3>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div
          className={`marquee-track ${animationClass} flex w-max items-center whitespace-nowrap will-change-transform backface-hidden`}
          role="list"
          aria-label={title}
        >
          {sets.map((set, setIndex) => (
            <div
              key={`${title}-${setIndex}`}
              className="flex shrink-0 items-center gap-8"
              role="presentation"
              aria-hidden={setIndex === 1}
            >
              {set.map((item) => (
                <div key={`${item.name}-${setIndex}`} className="flex shrink-0 items-center gap-3 px-[18px] py-[10px] text-slate-700 sm:px-[20px] sm:py-[12px] lg:px-[22px]" role="listitem">
                  <img src={item.icon} alt={`${item.name} icon`} className="h-9 w-9 flex-shrink-0 object-contain sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                  <span className="whitespace-nowrap text-[13px] font-semibold leading-none sm:text-[14px] lg:text-[15px]">{item.name}</span>
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
    <section className="relative w-full overflow-x-hidden py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm select-none">
            <Handshake className="w-4 h-4 text-orange-500"  aria-hidden="true" focusable="false" />
            <span>Our Tech Stack</span>
          </div>

          <h2 className="heading-display mb-6 text-center text-4xl heading-primary tracking-tighter sm:mb-8 sm:text-[2.75rem] sm:leading-[1.1] md:text-5xl md:leading-[1.15] lg:text-6xl lg:leading-[1.15]">
            Empowering Success with <span className="heading-highlight">Elite Tools</span>
          </h2>

          <p className="body-large mx-auto max-w-full font-medium whitespace-pre-line text-center text-slate-600 sm:max-w-[80%] lg:max-w-3xl">
            We blend creative precision with modern engineering to deliver experiences that are polished, reliable, and future-ready.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-7">
          <MarqueeRow title="Creative & Digital Marketing Tools" items={creativeTools} direction="left" />
          <MarqueeRow title="Development Technologies" items={developmentTools} direction="right" />
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

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}