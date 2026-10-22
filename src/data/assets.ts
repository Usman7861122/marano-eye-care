// All images and videos come from the old site's CDNs.
// Run scripts/download-assets.sh on your own computer to save local copies into /public.
const D = (file: string, w?: number) =>
  `https://www.datocms-assets.com/157807/${file}?auto=format,compress${w ? `&w=${w}` : ''}`;
const V = (id: string) => ({
  high: `https://videos.tresiocdn.com/${id}/high.mp4`,
  medium: `https://videos.tresiocdn.com/${id}/medium.mp4`,
});

export const img = {
  logoNav: '/images/logo.png',
  logoFooter: '/images/logo-white.png',
  favicon: '/images/favicon.png',
  og: '/images/logo.png',
  bentoBg: D('1744133994-3-bento-background-no-doctor.jpg', 1400),
  bentoDoctor: D('1744133407-3-bento-1.png', 1219),
  logos: [
    D('1744137214-mask-group.png', 140),
    D('1744137240-mask-group.png', 258),
    D('1744137325-frame-123.png', 330),
    D('1744137355-mask-group.png', 129),
    D('1744131210-group-1.png', 164),
    D('1744137177-mask-group.png', 215),
    D('1744137192-mask-group-1.png', 97),
  ],
  patients: [
    D('1779291542-1-ann.jpg', 600),
    D('1779291542-2-nicole.jpg', 600),
    D('1744240661-video-3.jpg', 600),
    D('1744240677-video-4.jpg', 600),
    D('1746457580-kristenvideo.jpg', 600),
  ],
  videoCards: [D('1744219186-9-video-card-1.jpg', 1200), D('1744219499-9-video-card-2.jpg', 1200)],
  credentials: [
    D('1744219769-1.png', 250),
    D('1744219770-2.png', 250),
    D('1744219770-3.png', 250),
    D('1744219770-4.png', 250),
    D('1744219771-5.png', 250),
  ],
  doctorTabs: [
    D('1744217574-1-doctor-tabs.jpg', 900),
    D('1744217574-2-doctor-tabs.jpg', 900),
    D('1744217575-3-doctor-tabs.jpg', 900),
    D('1744217575-4-doctor-tabs.jpg', 900),
    D('1744217574-5-doctor-tabs.jpg', 900),
  ],
  lasik: D('1744221933-lasik.jpg', 2200),
  smile: D('1744221933-smile.jpg', 2200),
  prk: D('1744221932-prk.jpg', 2200),
  ages: [
    D('1744222938-2-open.jpg', 1428),
    D('1744222938-3-open.jpg', 1428),
    D('1744222938-4-open.jpg', 1428),
  ],
  procedures: [
    D('1744223356-1procedures.jpg', 1100),
    D('1744223356-2procedures.jpg', 1100),
    D('1744223356-3procedures.jpg', 1100),
    D('1744223356-4procedures.jpg', 1100),
    D('1744223356-5procedures.jpg', 1100),
  ],
  quoteBg: D('1745611962-17-quote-background.jpg', 2200),
  foundation: D('1744224390-the-chu-foundation.jpg', 1100),
  financing: D('1744224404-financing.jpg', 1100),
  newPatients: D('1744224414-new-patients.jpg', 1100),
  team: D('1744224559-19-meet-our-team.jpg', 1440),
};

export const vid = {
  hero: { high: '/videos/hero.mp4', medium: '/videos/hero.mp4' },
  power: V('1GDErUAjUhFjxMFeN9I02BguhONQE68DP'),
  findOut: { high: '/videos/findout.mp4', medium: '/videos/findout.mp4' },
  cataracts: V('74GuSbBg56tn02yPClJrjIZH2MOi027bk9'),
  ageVideo: V('S3009VLubi4JGhVfzb9oEgPWtnshPftb1'),
  heroPoster: '/videos/hero-poster.jpg',
};
