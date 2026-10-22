import { useState } from 'react';
import { site } from '../../data/site';
import { img } from '../../data/assets';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-0 bg-white px-5 py-[10px] shadow-[0_0_15px_-4px_rgba(20,20,20,0.14)] lg:mx-3 lg:mt-6 lg:rounded-[10px]">
        <div className="mx-auto flex max-w-[1346px] items-center justify-between lg:grid lg:grid-cols-[238px_1fr_357px]">
          {/* Logo */}
          <a href="/" className="block w-[126px] shrink-0">
            <img src={img.logoNav} alt="Chu Vision Institute" width={126} height={46} className="h-[46px] w-[126px] object-contain" />
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
            <a href={site.phoneHref} className="text-[16px] text-navy">
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn" style={{ paddingInline: 'clamp(14px, calc(-23.69px + 2.6923vw), 28px)' }}>
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wide text-navy lg:hidden"
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
