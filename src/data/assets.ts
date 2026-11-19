// All images and videos come from the old site's CDNs.
// Run scripts/download-assets.sh on your own computer to save local copies into /public.
const D = (file: string, w?: number) =>
  `https://www.datocms-assets.com/157807/${file}?auto=format,compress${w ? `&w=${w}` : ''}`;

export const img = {
  logoNav: '/images/logo.png',
  logoFooter: '/images/logo-white.png',
  favicon: '/images/favicon.png',
  og: '/images/logo.png',
  bentoBg: D('1744133994-3-bento-background-no-doctor.jpg', 1400),
  bentoDoctor: '/images/dr-marano.webp',
  logos: [
    D('1744137214-mask-group.png', 140),
    D('1744137240-mask-group.png', 258),
    D('1744137325-frame-123.png', 330),
    D('1744137355-mask-group.png', 129),
    D('1744131210-group-1.png', 164),
    D('1744137177-mask-group.png', 215),
    D('1744137192-mask-group-1.png', 97),
  ],
  credentials: [
    D('1744219769-1.png', 250),
    D('1744219770-2.png', 250),
    D('1744219770-3.png', 250),
    D('1744219770-4.png', 250),
    D('1744219771-5.png', 250),
  ],
  doctorTabs: [
    '/images/stock/shutterstock_1909314343.jpg',
    '/images/stock/shutterstock_591166769.jpg',
    '/images/stock/shutterstock_2645711759.jpg',
    '/images/stock/shutterstock_780951967.jpg',
    '/images/stock/shutterstock_591166769.jpg',
  ],
  lasik: D('1744221933-lasik.jpg', 2200),
  smile: D('1744221933-smile.jpg', 2200),
  prk: D('1744221932-prk.jpg', 2200),
  cataractTabs: {
    laser: D('1744221933-smile.jpg', 2200),
    lens: D('1744221933-lasik.jpg', 2200),
    time: D('1744221932-prk.jpg', 2200),
  },
  ages: [
    D('1744222938-2-open.jpg', 1428),
    D('1744222938-3-open.jpg', 1428),
    D('1744222938-4-open.jpg', 1428),
  ],
  procedures: [
    '/images/stock/shutterstock_591166769.jpg',
    D('1744223356-2procedures.jpg', 1100),
    D('1744223356-3procedures.jpg', 1100),
    D('1744223356-4procedures.jpg', 1100),
    D('1744223356-5procedures.jpg', 1100),
  ],
  quoteBg: '/images/quote-bg.jpg',
  foundation: '/images/stock/shutterstock_2645711759.jpg',
  financing: D('1744224404-financing.jpg', 1100),
  newPatients: D('1744224414-new-patients.jpg', 1100),
  team: '/images/stock/shutterstock_780951967.jpg',
};

export const vid = {
  hero: { high: '/videos/hero.mp4', medium: '/videos/hero.mp4' },
  findOut: { high: '/videos/findout.mp4', medium: '/videos/findout.mp4' },
  heroPoster: '/videos/hero-poster.jpg',
};
