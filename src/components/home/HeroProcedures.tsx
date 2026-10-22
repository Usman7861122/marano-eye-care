import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Vertical, looping list. The active item is big and centred, the others are small and faded.
const BOX = 540; // height of the list
const ACTIVE_H = 92;
const SMALL_H = 55;
const GAP = 20;

export default function HeroProcedures({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => a + 1), 2200);
    return () => clearInterval(t);
  }, []);

  const offsets = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  const topFor = (d: number) => {
    const activeTop = (BOX - ACTIVE_H) / 2;
    if (d === 0) return activeTop;
    if (d > 0) return activeTop + ACTIVE_H + GAP + (d - 1) * (SMALL_H + GAP);
    return activeTop - GAP - SMALL_H - (Math.abs(d) - 1) * (SMALL_H + GAP);
  };

  return (
    <div className="row-wrap">
      <ul className="relative mx-auto overflow-hidden" style={{ height: BOX }} aria-label="Procedures">
        {offsets.map((d) => {
          const n = active + d;
          const label = items[((n % items.length) + items.length) % items.length];
          const isActive = d === 0;
          return (
            <motion.li
              key={n}
              className="serif absolute inset-x-0 flex items-center justify-center text-center text-white"
              style={{ fontSize: 'var(--fs-tab)', lineHeight: 1.1, height: isActive ? ACTIVE_H : SMALL_H }}
              initial={false}
              animate={{ top: topFor(d), scale: isActive ? 1 : 0.5, opacity: isActive ? 1 : 0.5 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
