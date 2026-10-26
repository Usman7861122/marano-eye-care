import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { img } from '../../data/assets';

function SpeakerIcon({ playing }: { playing: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
      {playing ? (
        <path d="M16 9l5 6M21 9l-5 6" />
      ) : (
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      )}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [canSpeak, setCanSpeak] = useState(false);
  const runId = useRef(0);

  useEffect(() => {
    setCanSpeak(typeof window !== 'undefined' && 'speechSynthesis' in window);
    const stop = () => window.speechSynthesis?.cancel();
    window.addEventListener('pagehide', stop);
    return () => { window.removeEventListener('pagehide', stop); stop(); };
  }, []);

  const toggleListen = () => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (speaking) {
      runId.current++;
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const main = document.querySelector('main');
    const text = (main?.innerText || document.body.innerText || '').replace(/\s+/g, ' ').trim();
    if (!text) return;
    // Read in short sentence chunks; long single utterances stop early in some browsers.
    const chunks: string[] = [];
    let cur = '';
    for (const part of text.split(/(?<=[.!?])\s+/)) {
      if ((cur + ' ' + part).length > 220 && cur) { chunks.push(cur); cur = part; }
      else cur = cur ? cur + ' ' + part : part;
    }
    if (cur) chunks.push(cur);
    const id = ++runId.current;
    synth.cancel();
    setSpeaking(true);
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c);
      u.lang = 'en-US';
      u.rate = 0.95;
      if (i === chunks.length - 1) {
        u.onend = () => { if (runId.current === id) setSpeaking(false); };
      }
      u.onerror = () => { if (runId.current === id && i === 0) setSpeaking(false); };
      synth.speak(u);
    });
  };

  const listenLabel = speaking ? 'Stop listening' : 'Listen to this website';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-0 bg-white px-5 py-[10px] shadow-[0_0_15px_-4px_rgba(20,20,20,0.14)] lg:mx-3 lg:mt-6 lg:rounded-[10px]">
        <div className="mx-auto flex max-w-[1346px] items-center justify-between lg:grid lg:grid-cols-[238px_1fr_auto]">
          {/* Logo */}
          <a href="/" className="block shrink-0">
            <img src={img.logoNav} alt="Marano Eye Care" width={184} height={46} className="h-[46px] w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden px-5 lg:block" aria-label="Main">
            <ul className="flex items-center justify-between">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="block rounded-[6px] p-[6.63px] text-[14.93px] leading-[14.93px] tracking-[0.5px] text-navy transition-colors hover:bg-mist"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone + Book Now */}
          <div className="hidden items-center justify-end gap-4 lg:flex">
            {canSpeak && (
              <button
                type="button"
                onClick={toggleListen}
                aria-pressed={speaking}
                aria-label={listenLabel}
                title={listenLabel}
                className="flex items-center gap-[7px] whitespace-nowrap rounded-full border border-navy/25 px-[13px] py-[8px] text-[14px] leading-none text-navy transition-colors hover:bg-mist"
              >
                <SpeakerIcon playing={speaking} />
                {speaking ? 'Stop' : 'Listen'}
              </button>
            )}
            <a href={site.phoneHref} className="text-[16px] text-navy">
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn" style={{ paddingInline: 'clamp(14px, calc(-23.69px + 2.6923vw), 28px)' }}>
              Book Now
            </a>
          </div>

          {/* Mobile listen + menu buttons */}
          <div className="flex items-center gap-4 lg:hidden">
          {canSpeak && (
            <button
              type="button"
              onClick={toggleListen}
              aria-pressed={speaking}
              aria-label={listenLabel}
              className="flex items-center gap-[6px] text-[14px] font-semibold uppercase tracking-wide text-navy"
            >
              <SpeakerIcon playing={speaking} />
              {speaking ? 'Stop' : 'Listen'}
            </button>
          )}
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

        {/* Mobile menu */}
        {open && (
          <nav id="mobile-menu" className="border-t border-mist pb-4 pt-3 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="block py-3 text-[18px] text-navy">
                    {n.label}
                  </a>
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
