import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Service = { title: string; p: string; links: string[][]; cta: string; href: string };

const SLIDE = 517;
const GAP = 24;

export default function ServiceSlider({ services, images }: { services: Service[]; images: string[] }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(922);

  useEffect(() => {
    const measure = () => viewport.current && setVw(viewport.current.clientWidth);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const slideW = vw < 640 ? Math.min(vw - 40, SLIDE) : SLIDE;
  const step = slideW + GAP;
  const maxX = Math.max(0, services.length * step - GAP - vw);
  const x = -Math.min(index * step, maxX);
  const maxIndex = Math.max(0, Math.ceil(maxX / step));

  return (
    <section id="services" className="bg-navy text-white">
      <div className="flex flex-col py-[88.6px] lg:flex-row">
        {/* Copy */}
        <div className="flex flex-col justify-center px-[clamp(20px,8.7vw,125px)] py-10 lg:w-[518px] lg:shrink-0 lg:py-[114px] lg:pl-[125px] lg:pr-[79px]">
          <h2 className="serif pb-[22.7px] text-[length:var(--fs-h2)] leading-[1.2]">
            <span className="eyebrow !mb-[40px]">The Chu Vision Approach</span>
            Every Solution <i className="block">for Every Need</i>
          </h2>
          <p className="leading-[1.6]">Feel confident in your vision plan with guidance from our team of experts.</p>
          <div className="mt-[40px] flex items-center gap-[21.5px]">
            <button
              type="button"
              aria-label="Previous"
              disabled={index === 0}
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              className="grid h-[60px] w-[49px] place-items-center rounded-full border border-white/20 transition hover:bg-white/10 disabled:opacity-35"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 1L3 7l6 6" /></svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={index >= maxIndex}
              onClick={() => setIndex((v) => Math.min(maxIndex, v + 1))}
              className="grid h-[60px] w-[49px] place-items-center rounded-full border border-white/20 transition hover:bg-white/10 disabled:opacity-35"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 1l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        {/* Slides */}
        <div ref={viewport} className="min-w-0 flex-1 overflow-hidden max-lg:px-5">
          <motion.div
            className="flex"
            animate={{ x }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: -maxX, right: 0 }}
            dragElastic={0.1}
          >
            {services.map((s, i) => {
              const isOpen = open === i;
              return (
                <article
                  key={s.title}
                  className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[20px] px-[clamp(24px,3.3vw,47px)] py-[53px]"
                  style={{ width: slideW, minHeight: 634, marginRight: GAP }}
                  onMouseEnter={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                >
                  <img src={images[i]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(0deg, rgba(4,26,52,0.95) 5%, rgba(4,26,52,0.55) 55%, rgba(4,26,52,0.1) 100%)' }}
                  />
                  <div className="relative flex flex-col text-center">
                    <h3 className="serif mb-[37px] text-[length:var(--fs-h2b)] leading-[1.2]">{s.title}</h3>
                    <motion.div
                      initial={false}
                      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="leading-[1.6]">{s.p}</p>
                      {s.links.length > 0 && (
                        <div className="my-[40px] flex flex-wrap justify-center gap-x-[25.6px] gap-y-[16px]">
                          {s.links.map(([label, href]) => (
                            <a key={href} href={href} className="text-[17.4px] font-semibold leading-none underline-offset-4 hover:underline">
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                      <a href={s.href} className={`btn white ${s.links.length ? '' : 'mt-[44px]'}`}>{s.cta}</a>
                    </motion.div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
