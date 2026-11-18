import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { img } from '../../data/assets';
import { menu, type Card, type Icon, type MenuItem } from '../../data/menu';

const icons: Record<Icon, string> = {
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zm7 12l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z',
  scan: 'M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16',
  drop: 'M12 3s6 6.2 6 10.5A6 6 0 016 13.5C6 9.2 12 3 12 3z',
  pin: 'M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21zm0-8.5a3 3 0 100-6 3 3 0 000 6z',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zm-8 8c0-3.6 3.6-6 8-6s8 2.4 8 6',
  doc: 'M7 3h7l5 5v13H7V3zm7 0v5h5M10 13h6M10 17h6',
  shield: 'M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z',
};

function Glyph({ name }: { name: Icon }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

function CardLink({ c, compact }: { c: Card; compact?: boolean }) {
  return (
    <a
      href={c.href}
      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-3 rounded-[12px] border border-navy/10 bg-white p-3 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-navy hover:text-white hover:shadow-[0_10px_24px_-12px_rgba(26,39,72,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-steel transition group-hover:bg-white/15 group-hover:text-white">
        <Glyph name={c.icon ?? 'eye'} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block font-semibold leading-tight ${compact ? 'text-[14px]' : 'text-[15px]'}`}>{c.label}</span>
        {c.text && <span className="mt-0.5 block text-[12.5px] leading-snug text-slate transition group-hover:text-white/75">{c.text}</span>}
      </span>
      <svg className="shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

function Panel({ item }: { item: MenuItem }) {
  const f = item.feature;
  const groups = item.groups ?? [];
  const multi = groups.length > 1;
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)]" style={f ? { gridTemplateColumns: '280px minmax(0,1fr)' } : undefined}>
      {f && (
        <a href={f.href} className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[14px] bg-navy text-white">
          <img src={f.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
          <span className="relative p-5">
            <span className="block font-serif text-[24px] leading-tight">{f.title}</span>
            <span className="mt-1 block text-[13.5px] leading-snug text-white/85">{f.text}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold underline-offset-4 group-hover:underline">
              {f.cta} <span aria-hidden="true">→</span>
            </span>
          </span>
        </a>
      )}
      <div className={multi ? 'grid gap-6 md:grid-cols-2' : ''}>
        {groups.map((g) => (
          <div key={g.title}>
            <div className="mb-2.5 flex items-baseline justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">{g.title}</p>
              {g.href && (
                <a href={g.href} className="text-[12.5px] font-semibold text-steel hover:underline">
                  View all →
                </a>
              )}
            </div>
            <div className={`grid gap-2.5 ${multi ? 'grid-cols-1' : item.cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {g.cards.map((c) => (
                <CardLink key={c.href} c={c} compact={multi} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const show = (label: string | null) => {
    clearTimeout(timer.current);
    setActive(label);
  };
  const hideSoon = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 160);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const current = menu.find((m) => m.label === active && m.groups);

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={hideSoon}>
      <div className="relative mx-0 bg-white px-5 py-[10px] shadow-[0_0_15px_-4px_rgba(20,20,20,0.14)] xl:mx-3 xl:mt-6 xl:rounded-[10px]">
        <div className="mx-auto flex max-w-[1346px] items-center justify-between xl:grid xl:grid-cols-[200px_1fr_auto]">
          {/* Logo */}
          <a href="/" className="block shrink-0">
            <img src={img.logoNav} alt="Marano Eye Care" width={184} height={46} className="h-[46px] w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden px-4 xl:block" aria-label="Main">
            <ul className="flex items-center justify-center gap-1">
              {menu.map((n) => (
                <li key={n.label} onMouseEnter={() => show(n.groups ? n.label : null)}>
                  <a
                    href={n.href}
                    aria-haspopup={n.groups ? 'true' : undefined}
                    aria-expanded={n.groups ? active === n.label : undefined}
                    onFocus={() => show(n.groups ? n.label : null)}
                    className={`flex items-center gap-1 rounded-[6px] px-[9px] py-[8px] text-[14.5px] leading-none tracking-[0.3px] text-navy transition-colors hover:bg-mist ${active === n.label ? 'bg-mist' : ''}`}
                  >
                    {n.label}
                    {n.groups && (
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform ${active === n.label ? 'rotate-180' : ''}`}>
                        <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone + Book Now */}
          <div className="hidden items-center justify-end gap-4 xl:flex">
            <a href={site.phoneHref} className="text-[15px] text-navy">
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn" style={{ paddingInline: 'clamp(14px, calc(-23.69px + 2.6923vw), 28px)' }}>
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 xl:hidden">
            <button
              type="button"
              className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wide text-navy"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? 'Close' : 'Menu'}
              <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
                <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega menu panel */}
        {current && (
          <div
            className="absolute inset-x-0 top-full hidden pt-3 xl:block"
            onMouseEnter={() => show(current.label)}
            role="region"
            aria-label={current.label}
          >
            <div className="max-h-[calc(100svh-140px)] overflow-y-auto rounded-[14px] bg-white p-5 shadow-[0_24px_48px_-16px_rgba(26,39,72,0.35)] ring-1 ring-navy/5">
              <Panel item={current} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {open && (
          <nav id="mobile-menu" className="max-h-[80svh] overflow-y-auto border-t border-mist pb-4 pt-3 xl:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {menu.map((n) => (
                <li key={n.label} className="border-b border-mist/70 last:border-0">
                  {n.groups ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left text-[18px] text-navy"
                        aria-expanded={mobileSub === n.label}
                        onClick={() => setMobileSub(mobileSub === n.label ? null : n.label)}
                      >
                        {n.label}
                        <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform ${mobileSub === n.label ? 'rotate-180' : ''}`}>
                          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      </button>
                      {mobileSub === n.label && (
                        <div className="space-y-4 pb-3">
                          {n.groups.map((g) => (
                            <div key={g.title}>
                              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">{g.title}</p>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {g.cards.map((c) => (
                                  <CardLink key={c.href} c={c} compact />
                                ))}
                              </div>
                            </div>
                          ))}
                          <a href={n.href} className="inline-block text-[14px] font-semibold text-steel">
                            Go to {n.label} →
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={n.href} className="block py-3 text-[18px] text-navy">
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-4">
              <a href={site.phoneHref} className="text-[16px] text-navy">{site.phone}</a>
              <a href={site.bookingUrl} className="btn">Book Now</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
