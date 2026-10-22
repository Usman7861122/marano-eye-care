import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FindOut({ lines, cta, href }: { lines: string[]; cta: string; href: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % lines.length), 2600);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <div>
      <div className="relative mb-[50px] h-[2.6em] overflow-hidden text-[length:var(--fs-xl)] sm:h-[1.3em]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.h2
            key={i}
            className="serif absolute inset-x-0 leading-[1.2]"
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-60%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Find out <i>{lines[i]}</i>
          </motion.h2>
        </AnimatePresence>
      </div>
      <a href={href} className="btn white">{cta}</a>
    </div>
  );
}
