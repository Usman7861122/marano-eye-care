import { useEffect, useState } from 'react';

// Vertical looping list: 92px slides, 20px gap. Active slide is sharp and big; others are smaller, blurred and faded.
const BOX = 540;
const SLIDE_H = 92;
const GAP = 20;
const PITCH = SLIDE_H + GAP;
const ACTIVE_TOP = 230;

export default function HeroProcedures({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => a + 1), 2500);
    return () => clearInterval(t);
  }, []);

  const offsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div className="mx-auto w-full max-w-[var(--row)] px-5">
      <div className="relative mx-auto overflow-hidden" style={{ height: BOX }}>
        {/* Highlight pill behind the active slide */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 w-[min(810px,100%)] -translate-x-1/2 rounded-full"
          style={{
            top: ACTIVE_TOP - 4,
            height: 100,
            opacity: 0.9,
            backgroundImage: 'radial-gradient(circle at 0% 90%, #7a95cc 0%, #243660 70%)',
          }}
        />
        <ul aria-label="Procedures" className="absolute inset-0">
          {offsets.map((d) => {
            const n = active + d;
            const label = items[((n % items.length) + items.length) % items.length];
            const isActive = d === 0;
            return (
              <li
                key={n}
                className="absolute inset-x-0 flex items-center justify-center text-center text-white"
                style={{
                  top: ACTIVE_TOP + d * PITCH,
                  height: SLIDE_H,
                  transform: `scale(${isActive ? 1 : 0.6})`,
                  filter: isActive ? 'none' : 'blur(4px)',
                  opacity: isActive ? 1 : 0.5,
                  transition: 'top .8s ease-in-out, transform .8s ease-in-out, filter .8s ease-in-out, opacity .8s ease-in-out',
                }}
              >
                <h2 className="serif m-0 italic leading-[1.1]" style={{ fontSize: 'calc(var(--fs-hero) * 0.6)' }}>
                  {label}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
