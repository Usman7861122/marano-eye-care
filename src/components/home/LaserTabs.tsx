import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Tab = {
  key: string;
  name: string;
  short: string;
  cta: string;
  href: string;
  rows: string[][];
};

export default function LaserTabs({ tabs, images }: { tabs: Tab[]; images: Record<string, string> }) {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section id="laser" className="round-top relative min-h-[929px] overflow-hidden bg-navy text-white">
      {/* Background photo */}
      <AnimatePresence>
        <motion.img
          key={t.key}
          src={images[t.key]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent" />

      <div className="relative mx-auto flex min-h-[929px] max-w-[1440px] items-center px-[clamp(20px,4.6vw,66px)] py-[67px]">
       <div className="flex w-full flex-col justify-end gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Left: heading, button, tab links */}
        <div className="w-full lg:max-w-[904px]">
          <h2 className="serif text-[length:var(--fs-tab)] leading-[0.9]">
            <span className="eyebrow !mb-[35px] !leading-[0.9]">More Options Means The Right Fit For You</span>
            Advanced Laser
            <span className="block">Vision Correction</span>
          </h2>

          <div className="mt-[30px]">
            <a href={t.href} className="btn white">{t.cta}</a>
          </div>

          <div className="flex flex-row justify-between gap-6 pt-[74.5px] max-lg:pt-10 lg:gap-[60px]" role="tablist">
            {tabs.map((x, i) => (
              <button
                key={x.key}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`relative flex-1 border-t pb-3 pt-[29px] text-left transition-opacity ${
                  i === active ? 'border-white opacity-100' : 'border-white/40 opacity-70 hover:opacity-100'
                }`}
              >
                <span
                  className={`absolute -top-px left-0 h-[3px] bg-white transition-all duration-500 ${i === active ? 'w-full' : 'w-0'}`}
                />
                <span className="mt-3 block pt-[34.8px] text-[clamp(18px,1.77vw,25.5px)] font-semibold leading-none max-lg:pt-0">{x.name}</span>
                <span className="mt-[9px] block text-[16px] leading-[19.5px] max-md:hidden">{x.short}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: facts */}
        <div className="w-full rounded-[16px] bg-white/15 p-[25.6px] lg:w-[373px] lg:shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[17.5px]"
            >
              {t.rows.map((r) => (
                <div key={r[0]} className="rounded-[16px] bg-white p-[25px] text-black">
                  <p className="leading-[1.6]">
                    <span className="mb-1 block text-[20px] font-semibold leading-[32px]">{r[0]}</span>
                    {r.slice(1).map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
       </div>
      </div>
    </section>
  );
}
