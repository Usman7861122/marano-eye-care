import { useState } from 'react';
import { motion } from 'framer-motion';

const icons: Record<string, JSX.Element> = {
  stethoscope: <path d="M6 3v6a4 4 0 008 0V3M10 13v3a4 4 0 008 0v-1.5M18 12a2 2 0 100-4 2 2 0 000 4z" />,
  starburst: <path d="M12 2l2.2 5.3L20 6l-1.3 5.8L24 14l-5.3 2.2L20 22l-5.8-1.3L12 26l-2.2-5.3L4 22l1.3-5.8L0 14l5.3-2.2L4 6l5.8 1.3z" transform="translate(0 -1) scale(.92)" />,
  eye: <><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 22l5-3 5 3-1.5-8" /></>,
  computer: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>,
};

type Slide = {
  image?: string;
  video?: { high: string; medium: string };
  iconName?: string;
  titleA: string;
  titleB?: string;
  text?: string;
  cta?: { label: string; href: string };
  watchUrl?: string; // youtube url (video slide)
  watchLabel?: string;
};

/**
 * Hover (or tap) to open one slide while the others shrink.
 * variant "cards": 5 small image cards, icon + 2-line title (section "doctor trust")
 * variant "ages": 4 tall slides with big age numbers (section "See clearly at any age")
 */
export default function HoverAccordion({ slides, variant }: { slides: Slide[]; variant: 'cards' | 'ages' }) {
  const [active, setActive] = useState(0);
  const ages = variant === 'ages';
  const openGrow = ages ? 3 : 1.8;

  return (
    <div
      className={
        ages
          ? 'flex flex-col gap-5 md:h-[475px] md:flex-row'
          : 'flex flex-col gap-3 md:h-[360px] md:flex-row'
      }
    >
      {slides.map((s, i) => {
        const open = i === active;
        return (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-[16px] text-white ${ages ? 'min-h-[360px] md:min-h-0' : 'min-h-[300px] md:min-h-0'}`}
            animate={{ flexGrow: open ? openGrow : 1 }}
            style={{ flexBasis: 0, flexShrink: 1, minWidth: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            tabIndex={0}
          >
            {s.video ? (
              <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
                <source src={s.video.high} type="video/mp4" />
              </video>
            ) : (
              <img src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            )}
            <div
              className="absolute inset-0"
              style={{
                background: ages
                  ? 'linear-gradient(0deg, rgba(26,39,72,0.75) 0%, rgba(26,39,72,0.1) 60%)'
                  : 'linear-gradient(0deg, rgba(26,39,72,0.7) 0%, rgba(26,39,72,0.25) 100%)',
              }}
            />

            <div
              className={`relative flex h-full flex-col px-[40px] py-[40px] ${ages ? 'justify-end' : 'justify-center'}`}
            >
              {!ages && s.iconName && (
                <span className="mb-8 grid h-[65px] w-[65px] shrink-0 place-items-center rounded-full bg-white/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[s.iconName]}
                  </svg>
                </span>
              )}

              {ages && s.watchUrl ? (
                <a href={s.watchUrl} className="popup-video mb-4 grid h-[83px] w-[83px] place-items-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm" aria-label={s.watchLabel}>
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" aria-hidden="true"><path d="M2 1.5v23L21 13z" /></svg>
                </a>
              ) : (
                <h3
                  className={`serif ${ages ? (open ? 'text-[length:var(--fs-tab)] leading-[1.2]' : 'text-[clamp(24px,2vw,28.9px)] leading-[1.2] md:text-center') : 'text-[clamp(16px,1.28vw,18.4px)] leading-[1.2]'}`}
                >
                  {s.titleA}
                  {s.titleB && <span className="block">{s.titleB}</span>}
                </h3>
              )}

              <motion.div
                initial={false}
                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden max-md:!h-auto max-md:!opacity-100"
              >
                {s.watchLabel && <p className="mt-3 text-[17px] font-semibold leading-[1.6]">{s.watchLabel}</p>}
                {s.text && <p className="mt-3 text-[17px] leading-[1.6]">{s.text}</p>}
                {s.cta && (
                  <a href={s.cta.href} className="btn white mt-5 !border-navy">
                    {s.cta.label}
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
