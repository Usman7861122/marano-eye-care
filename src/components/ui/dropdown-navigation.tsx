import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type NavSubItem = { label: string; description?: string; icon: React.ElementType; href: string };
export type NavItem = {
  id: number;
  label: string;
  href: string;
  subMenus?: { title: string; items: NavSubItem[] }[];
};

// Animated dropdown navigation (hover pill + shared panel). Styled with the site's own colors.
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
      <ul className="relative flex items-center justify-center">
        {navItems.map((item) => {
          const hasSub = !!item.subMenus;
          const isOpen = openMenu === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(hasSub ? item.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(hasSub ? item.label : null)}
            >
              <a
                href={item.href}
                aria-haspopup={hasSub ? 'true' : undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                className="group relative flex items-center justify-center gap-1 px-[10px] py-[7px] text-[14.5px] leading-[15px] tracking-[0.5px] text-navy transition-colors duration-300 hover:text-navy"
                onMouseEnter={() => setIsHover(item.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{item.label}</span>
                {hasSub && (
                  <ChevronDown
                    aria-hidden="true"
                    className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
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
                  <div className="absolute left-0 top-full z-20 w-auto pt-[18px]">
                    <motion.div
                      className="w-max max-w-[92vw] border border-navy/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(20,30,60,0.25)]"
                      style={{ borderRadius: 16 }}
                      layoutId="nav-menu"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="flex w-fit shrink-0 space-x-9">
                        {item.subMenus.map((sub) => (
                          <motion.div layout className="w-full" key={sub.title}>
                            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[1px] text-slate">{sub.title}</h3>
                            <ul className="space-y-2.5">
                              {sub.items.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <li key={s.href + s.label}>
                                    <a href={s.href} className="group flex items-start space-x-3">
                                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-navy/15 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                                        <Icon className="h-5 w-5 flex-none" aria-hidden="true" />
                                      </div>
                                      <div className="w-max max-w-[260px] leading-5">
                                        <p className="text-[14px] font-medium text-navy">{s.label}</p>
                                        {s.description && (
                                          <p className="text-[12.5px] text-slate transition-colors duration-300 group-hover:text-navy">{s.description}</p>
                                        )}
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
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
