import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type NavSubItem = { label: string; description?: string; icon: React.ElementType; href: string; thumb?: string };
export type NavPanel = { eyebrow: string; title: string; text: string; cta?: { label: string; href: string } };
export type NavItem = {
  id: number;
  label: string;
  href: string;
  panel?: NavPanel;
  subMenus?: { title: string; items: NavSubItem[] }[];
};

/**
 * Mega menu. The panel opens full width under the header bar (the header bar must be `relative`).
 * Left: a feature card. Right: cards with a small photo (or an icon) and a short line.
 */
export function DropdownNavigation({ navItems }: { navItems: NavItem[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenMenu(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav aria-label="Main" className="hidden px-3 min-[1360px]:block">
      <ul className="flex items-center justify-center">
        {navItems.map((item) => {
          const hasSub = !!item.subMenus;
          const isOpen = openMenu === item.label;
          const total = item.subMenus?.reduce((n, s) => n + s.items.length, 0) ?? 0;
          const compact = total > 12;
          const cols = compact ? 'grid-cols-4' : 'grid-cols-3';
          return (
            <li
              key={item.label}
              onMouseEnter={() => setOpenMenu(hasSub ? item.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(hasSub ? item.label : null)}
            >
              <a
                href={item.href}
                aria-haspopup={hasSub ? 'true' : undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                className="relative flex items-center justify-center gap-1 px-[10px] py-[7px] text-[14.5px] leading-[15px] tracking-[0.5px] text-navy"
                onMouseEnter={() => setIsHover(item.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{item.label}</span>
                {hasSub && (
                  <ChevronDown aria-hidden="true" className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                )}
                {(isHover === item.id || isOpen) && (
                  <motion.span
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 bg-navy/[0.08]"
                    style={{ borderRadius: 99 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </a>

              <AnimatePresence>
                {isOpen && item.subMenus && (
                  <div className="absolute inset-x-0 top-full z-20 pt-3">
                    <motion.div
                      className="border border-navy/10 bg-[#f3f6fc] p-5 shadow-[0_24px_48px_-16px_rgba(20,30,60,0.3)]"
                      style={{ borderRadius: 14 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className={`mx-auto grid max-w-[1346px] grid-cols-[250px_1fr] gap-5 ${total <= 3 ? "items-start" : ""}`}>
                        {item.panel && (
                          <div className="flex flex-col rounded-[12px] bg-gradient-to-br from-navy via-[#22335f] to-steel p-6 text-white">
                            <span className="text-[11.5px] font-semibold uppercase tracking-[2px] text-sky">{item.panel.eyebrow}</span>
                            <p className="serif mt-4 text-[24px] leading-[1.15]">{item.panel.title}</p>
                            <p className="mb-6 mt-3 text-[14px] leading-[1.5] text-white/80">{item.panel.text}</p>
                            {item.panel.cta && (
                              <a
                                href={item.panel.cta.href}
                                className="mt-auto inline-flex w-fit self-start translate-y-0 rounded-[6px] border border-white/50 px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[1px] text-white transition hover:bg-white hover:text-navy"
                              >
                                {item.panel.cta.label}
                              </a>
                            )}
                          </div>
                        )}
                        <div className="space-y-5">
                          {item.subMenus.map((sub) => (
                            <div key={sub.title}>
                              {item.subMenus!.length > 1 && (
                                <h3 className="mb-2.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-slate">{sub.title}</h3>
                              )}
                              <ul className={`grid gap-2.5 ${cols}`}>
                                {sub.items.map((s) => {
                                  const Icon = s.icon;
                                  return (
                                    <li key={s.href + s.label}>
                                      <a
                                        href={s.href}
                                        className="group flex h-full items-center gap-3 rounded-[10px] border border-navy/10 bg-white p-2.5 transition duration-200 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-[0_10px_20px_-12px_rgba(26,39,72,0.4)]"
                                      >
                                        {s.thumb ? (
                                          <img src={s.thumb} alt="" width={44} height={44} className="size-11 shrink-0 rounded-[8px] object-cover" />
                                        ) : (
                                          <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-mist text-steel transition-colors group-hover:bg-navy group-hover:text-white">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        )}
                                        <span className="block leading-[1.3]">
                                          <span className="block text-[13.5px] font-semibold text-navy">{s.label}</span>
                                          {s.description && !compact && <span className="mt-0.5 block text-[12px] text-slate">{s.description}</span>}
                                        </span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
