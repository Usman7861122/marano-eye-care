export type Body = {
  lede: string;
  introT: [string, string];
  intro: [string, string];
  stepsT: string;
  steps: { t: string; d: string }[];
  benefits: { t: string; d: string }[];
  optT: [string, string];
  optP: string;
  opts: string[];
  qs: string[];
  faqs: { q: string; a: string }[];
};
export type Service = {
  slug: string;
  title: string;
  short: string;
  photos: [string, string, string];
  noCity?: boolean;
  section?: 'tests';
  a: Body;
  b: Body;
};
export const ph = (id: string) => `/images/stock/shutterstock_${id}.jpg`;
