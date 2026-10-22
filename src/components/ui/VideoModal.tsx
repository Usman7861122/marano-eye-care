import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Opens any <a class="popup-video" href="youtube url"> in a modal (same as the old site).
function toEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const id = u.hostname.includes('youtu.be') ? u.pathname.slice(1) : u.searchParams.get('v');
    const t = u.searchParams.get('t');
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0${t ? `&start=${parseInt(t)}` : ''}`;
  } catch {
    return null;
  }
}

export default function VideoModal() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a.popup-video') as HTMLAnchorElement | null;
      if (!a) return;
      const embed = toEmbed(a.href);
      if (!embed) return;
      e.preventDefault();
      setSrc(embed);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSrc(null);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Video"
        >
          <div className="relative aspect-video w-full max-w-[1100px]" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={src}
              title="Video"
              className="h-full w-full rounded-[16px]"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              onClick={() => setSrc(null)}
              className="absolute -top-10 right-0 text-[16px] text-white"
              aria-label="Close video"
            >
              Close ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
