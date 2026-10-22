import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '../../data/site';

const SLIDE = 708;
const GAP = 24;
const STEP = SLIDE + GAP;

export default function QuoteCarousel({ quotes }: { quotes: string[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => v + 1), 4200);
    return () => clearInterval(t);
  }, [paused]);

  const offsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative mx-auto h-[230px] w-full overflow-hidden" aria-live="polite">
        {offsets.map((d) => {
          const n = i + d;
          const text = quotes[((n % quotes.length) + quotes.length) % quotes.length];
          return (
            <motion.div
              key={n}
              className="absolute left-1/2 top-0 flex h-full items-center justify-center px-6 text-center"
              style={{ width: `min(${SLIDE}px, 90vw)`, marginLeft: `calc(min(${SLIDE}px, 90vw) / -2)` }}
              initial={false}
              animate={{ x: d * STEP, opacity: d === 0 ? 1 : 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={d !== 0}
            >
              <h2 className="serif text-[length:var(--fs-h2)] leading-[1.2] text-white">{text}</h2>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-[67px] flex items-center justify-center gap-[34px]">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => setI((v) => v - 1)}
          className="grid h-[57px] w-[46px] place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 1L3 7l6 6" /></svg>
        </button>
        <a href="/about-us/reviews/" className="btn white">View All Reviews</a>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => setI((v) => v + 1)}
          className="grid h-[57px] w-[46px] place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 1l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
