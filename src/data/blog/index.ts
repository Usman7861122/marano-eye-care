import raw from './posts.json';
import { services } from '../svc';

export type Post = { slug: string; title: string; date: string; desc: string; html: string; thumb: string; topic: string };

const topics: [RegExp, string, string][] = [
  [/lasik/i, 'lasik', 'LASIK'],
  [/cataract/i, 'cataract-surgery', 'Cataracts'],
  [/lipiflow|mgd|meibomian|dry eye/i, 'dry-eyes', 'Dry Eye'],
  [/floater|flashes/i, 'floaters', 'Floaters'],
  [/macular|panoptix/i, 'macular-degeneration', 'Retina'],
  [/glaucoma/i, 'glaucoma', 'Glaucoma'],
  [/allerg|red eyes/i, 'red-eyes', 'Eye Allergies'],
  [/pterygium/i, 'pterygium-surgery', 'Pterygium'],
  [/astigmatism/i, 'astigmatism', 'Astigmatism'],
  [/keratoconus|cross-linking/i, 'keratoconus', 'Cornea'],
  [/botox|juvederm|younger/i, 'botox', 'Botox'],
  [/diabet/i, 'diabetic-retinopathy', 'Diabetes'],
  [/glasses|frames|contacts|prescription/i, 'glasses', 'Glasses & Contacts'],
  [/scan|exam|child|20\/20|headache/i, 'comprehensive-eye-exam', 'Eye Exams'],
];
const cataractPhotos = ['/images/stock/shutterstock_2767408177.jpg', '/images/stock/shutterstock_1138084499.jpg', '/images/stock/shutterstock_2810960925.jpg'];

function pick(title: string, i: number) {
  for (const [re, slug, label] of topics) {
    if (re.test(title)) {
      const ph = slug === 'cataract-surgery' ? cataractPhotos : services.find((s) => s.slug === slug)!.photos;
      return { thumb: ph[i % 3], topic: label };
    }
  }
  const ph = services.find((s) => s.slug === 'comprehensive-eye-exam')!.photos;
  return { thumb: ph[i % 3], topic: 'Eye Health' };
}

export const posts: Post[] = (raw as any[]).map((r, i) => ({ ...r, ...pick(r.title, i) }));
export const fmtDate = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
