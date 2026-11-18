import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { img } from '../../data/assets';
import { menu, type MenuNode as Node } from '../../data/menu';

const childrenOf = (n: Node): Node[] => n.children ?? [];

const linkCls =
  'block px-[18px] py-3 text-[14.93px] leading-[14.93px] tracking-[0.5px] text-navy transition-colors hover:bg-[#efefef] focus-visible:bg-[#efefef] focus-visible:outline-none';

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" className={className}>
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function DropItem({ n }: { n: Node }) {
  const ext = n.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  if (!n.children) {
    return (
      <li>
        <a href={n.href} className={linkCls} {...ext}>
          {n.label}
        </a>
      </li>
    );
  }
  return (
    <li className="group/sub relative">
      <a href={n.href} className={`${linkCls} flex items-center justify-between gap-3`} aria-haspopup="true">
        {n.label}
        <Chevron className="-rotate-90" />
      </a>
      <ul className="invisible absolute left-full top-[-10px] z-10 w-max min-w-[300px] max-w-[400px] bg-white p-[10px] opacity-0 shadow-[0_9px_12px_0_rgba(20,20,20,0.15)] transition group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:opacity-100">
        {n.children.map((c) => (
          <DropItem key={c.href} n={c} />
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const show = (l: string | null) => {
    clearTimeout(timer.current);
    setActive(l);
  };
  const hideSoon = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 140);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-0 bg-white px-5 py-[10px] shadow-[0_0_15px_-4px_rgba(20,20,20,0.14)] min-[1360px]:mx-3 min-[1360px]:mt-6 min-[1360px]:rounded-[10px]">
        <div className="mx-auto flex max-w-[1346px] items-center justify-between min-[1360px]:grid min-[1360px]:grid-cols-[184px_1fr_auto]">
          {/* Logo */}
          <a href="/" className="block shrink-0">
            <img src={img.logoNav} alt="Marano Eye Care" width={184} height={46} className="h-[46px] w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden px-3 min-[1360px]:block" aria-label="Main">
            <ul className="flex items-center justify-center gap-0" onMouseLeave={hideSoon}>
              {menu.map((n) => {
                const kids = childrenOf(n);
                const isOpen = active === n.label && kids.length > 0;
                return (
                  <li key={n.label} className="relative" onMouseEnter={() => show(kids.length ? n.label : null)} onFocus={() => show(kids.length ? n.label : null)}>
                    <a
                      href={n.href}
                      aria-haspopup={kids.length ? 'true' : undefined}
                      aria-expanded={kids.length ? isOpen : undefined}
                      className={`flex items-center gap-1 rounded-[6px] px-[8px] py-[6.63px] text-[14.5px] leading-[14.93px] tracking-[0.5px] text-navy transition-colors hover:bg-mist ${isOpen ? 'bg-mist' : ''}`}
                    >
                      {n.label}
                      {kids.length > 0 && <Chevron className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                    </a>
                    {isOpen && (
                      <div className="absolute left-0 top-full z-20 pt-[18px]">
                        <ul className="min-w-[270px] w-max max-w-[360px] bg-white p-[10px] shadow-[0_9px_12px_0_rgba(20,20,20,0.15)]" aria-label={`${n.label} submenu`}>
                          {kids.map((c) => (
                            <DropItem key={c.href + c.label} n={c} />
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Phone + Book Now */}
          <div className="hidden items-center justify-end gap-4 min-[1360px]:flex">
            <a href={site.phoneHref} className="hidden text-[15px] text-navy 2xl:block">
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn" style={{ paddingInline: 'clamp(14px, calc(-23.69px + 2.6923vw), 28px)' }}>
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 min-[1360px]:hidden">
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
          <nav id="mobile-menu" className="max-h-[80svh] overflow-y-auto border-t border-mist pb-4 pt-3 min-[1360px]:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {menu.map((n) => {
                const kids = childrenOf(n);
                return (
                  <li key={n.label} className="border-b border-mist/70 last:border-0">
                    {kids.length ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-3 text-left text-[18px] text-navy"
                          aria-expanded={mobileSub === n.label}
                          onClick={() => setMobileSub(mobileSub === n.label ? null : n.label)}
                        >
                          {n.label}
                          <Chevron className={`transition-transform ${mobileSub === n.label ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSub === n.label && (
                          <ul className="pb-3 pl-3">
                            {kids.map((c) => (
                              <li key={c.href + c.label}>
                                <a href={c.href} className="block py-2 text-[16px] text-navy">
                                  {c.label}
                                </a>
                                {c.children && (
                                  <ul className="pl-4">
                                    {c.children.map((cc) => (
                                      <li key={cc.href}>
                                        <a href={cc.href} className="block py-1.5 text-[15px] text-slate">
                                          {cc.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={n.href} className="block py-3 text-[18px] text-navy">
                        {n.label}
                      </a>
                    )}
                  </li>
                );
              })}
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
