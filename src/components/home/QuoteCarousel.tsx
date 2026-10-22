import { useEffect, useState } from 'react';
import { site } from '../../data/site';

const SLIDE = '804px';
const GAP = 20;
const step = (d: number) => `calc(min(${SLIDE}, 90vw) * ${d} + ${GAP * d}px)`;

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
        <div className="quote-pill" aria-hidden="true" />
        {offsets.map((d) => {
          const n = i + d;
          const text = quotes[((n % quotes.length) + quotes.length) % quotes.length];
          return (
            <div
              key={n}
              className="absolute left-1/2 top-0 flex h-full items-center justify-center text-center"
              style={{
                width: `min(${SLIDE}, 90vw)`,
                marginLeft: `calc(min(${SLIDE}, 90vw) / -2)`,
                transform: `translateX(${step(d)})`,
                filter: d === 0 ? 'blur(0px)' : 'blur(4px)',
                transition: 'transform .8s cubic-bezier(.22,1,.36,1), filter 500ms ease-in-out 400ms',
              }}
              aria-hidden={d !== 0}
            >
              <h2 className="serif text-[length:var(--fs-h2)] italic leading-[1.2] text-white">{text}</h2>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-[clamp(20px,calc(15.15px+1.2945vw),40px)] mt-[clamp(30px,calc(19.99px+2.589vw),70px)]">
        <button type="button" aria-label="Previous review" onClick={() => setI((v) => v - 1)} className="nav-btn" />
        <a href="/about-us/reviews/" className="btn white">View All Reviews</a>
        <button type="button" aria-label="Next review" onClick={() => setI((v) => v + 1)} className="nav-btn next" />
      </div>
    </div>
  );
}
