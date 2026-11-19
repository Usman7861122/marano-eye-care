import React, { useEffect, useState } from 'react';
import { site } from '../../data/site';
import { img } from '../../data/assets';
import { menu, type MenuNode as Node } from '../../data/menu';
import { practiceStatus } from '../../data/hours';
import { menuMeta } from '../../data/menuMeta';
import { Stethoscope, ShieldCheck, ScanEye, Zap, Gauge, Droplets, Focus, Layers, Activity, Aperture, Eye, Syringe, Pill, Sparkles, Flame, Crosshair, Radio, ClipboardList, Waves, Camera, ScanLine, Microscope, Radar, View, Wind, HeartPulse, Sun, MapPin } from 'lucide-react';

const ICONS: Record<string, React.ElementType> = { Stethoscope, ShieldCheck, ScanEye, Zap, Gauge, Droplets, Focus, Layers, Activity, Aperture, Eye, Syringe, Pill, Sparkles, Flame, Crosshair, Radio, ClipboardList, Waves, Camera, ScanLine, Microscope, Radar, View, Wind, HeartPulse, Sun, MapPin };
import { DropdownNavigation, type NavItem, type NavSubItem } from '../ui/dropdown-navigation';

function OpenNow() {
  const [st, setSt] = useState<ReturnType<typeof practiceStatus> | null>(null);
  useEffect(() => {
    const tick = () => setSt(practiceStatus());
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  if (!st) return null;
  const tip = st.isOpen ? `Open now: ${st.open.join(', ')}` : st.next;
  return (
    <span title={tip} className="flex shrink-0 items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-[13px] font-semibold leading-none text-navy">
      <span className="relative flex h-2.5 w-2.5">
        {st.isOpen && <span className="breathe absolute inline-flex h-full w-full rounded-full bg-emerald-500" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${st.isOpen ? 'bg-emerald-500' : 'bg-slate'}`} />
      </span>
      <span className="max-[480px]:hidden">{st.label}</span>
      <span className="sr-only min-[481px]:hidden">{st.label}</span>
    </span>
  );
}

const childrenOf = (n: Node): Node[] => n.children ?? [];

const toSub = (n: Node): NavSubItem => {
  const m = menuMeta[n.href];
  return { label: n.label, href: n.href, description: m?.desc, icon: (m && ICONS[m.icon]) || Eye };
};

const navItems: NavItem[] = menu.map((n, i) => {
  const kids = childrenOf(n);
  if (!kids.length) return { id: i + 1, label: n.label, href: n.href };
  const grouped = kids.some((k) => k.children);
  return {
    id: i + 1,
    label: n.label,
    href: n.href,
    subMenus: grouped
      ? kids.map((k) => ({ title: k.label, items: (k.children ?? []).map(toSub) }))
      : [{ title: n.label === 'Contact' ? 'Our offices' : n.label, items: kids.map(toSub) }],
  };
});

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" className={className}>
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-0 bg-white px-5 py-[10px] shadow-[0_0_15px_-4px_rgba(20,20,20,0.14)] min-[1360px]:mx-3 min-[1360px]:mt-6 min-[1360px]:rounded-[10px]">
        <div className="mx-auto flex max-w-[1346px] items-center justify-between min-[1360px]:grid min-[1360px]:grid-cols-[184px_1fr_auto]">
          {/* Logo */}
          <a href="/" className="block shrink-0">
            <img src={img.logoNav} alt="Marano Eye Care" width={184} height={46} className="h-[46px] w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <DropdownNavigation navItems={navItems} />

          {/* Phone + Book Now */}
          <div className="hidden items-center justify-end gap-4 min-[1360px]:flex">
            <a href={site.phoneHref} className="hidden text-[15px] text-navy">
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn" style={{ paddingInline: 'clamp(14px, calc(-23.69px + 2.6923vw), 28px)' }}>
              Book Now
            </a>
            <OpenNow />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 min-[1360px]:hidden">
            <OpenNow />
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
