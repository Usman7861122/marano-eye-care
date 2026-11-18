export type CBody = {
  lede: string;
  introT: [string, string];
  intro: [string, string];
  tips: string[];
  faqs: { q: string; a: string }[];
};
export type Condition = {
  slug: string;
  title: string;
  short: string;
  photos: [string, string, string];
  causes: { t: string; d: string }[];
  symptoms: string[];
  redFlags: string[];
  diagnosis: { t: string; d: string }[];
  treatment: string[];
  related: string[]; // service slugs
  a: CBody;
  b: CBody;
};
export const ph = (id: string) => `/images/stock/shutterstock_${id}.jpg`;
