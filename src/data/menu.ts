// Main menu, taken from maranoeyecare.com. Cards are rendered by components/layout/Header.tsx
export type Card = { label: string; href: string; text?: string; icon?: Icon; external?: boolean };
export type Group = { title: string; href?: string; cards: Card[] };
export type Feature = { title: string; text: string; cta: string; href: string };
export type Icon = 'eye' | 'spark' | 'scan' | 'drop' | 'pin' | 'user' | 'doc' | 'shield';
export type MenuItem = { label: string; href: string; groups?: Group[]; feature?: Feature; cols?: number };

const S = '/services/';
const P = '/contents/eye-care-services/eye-procedures/';
const T = '/contents/eye-care-services/eye-tests/';
const C = '/contents/eye-conditions/';

export const menu: MenuItem[] = [
  {
    label: 'About',
    href: '/about',
    cols: 2,
    feature: { title: 'Meet our doctors', text: 'Caring eye surgeons who have served New Jersey families for decades.', cta: 'See our doctors', href: '/provider' },
    groups: [
      {
        title: 'About the practice',
        cards: [
          { label: 'Our Doctors', href: '/provider', text: 'Meet the surgeons who care for your eyes.', icon: 'user' },
          { label: 'Notice of Privacy', href: 'https://sa1s3optim.patientpop.com/assets/docs/425417.pdf', text: 'How we protect your health information.', icon: 'shield', external: true },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    cols: 2,
    feature: { title: 'Eye surgery and care', text: 'From cataracts to LASIK, find the treatment that fits you.', cta: 'View all services', href: '/services' },
    groups: [
      {
        title: 'Popular services',
        href: '/services',
        cards: [
          { label: 'Cataract Surgery', href: S + 'cataract-surgery', text: 'Clear the cloudy lens.', icon: 'eye' },
          { label: 'LASIK', href: S + 'lasik', text: 'See without glasses.', icon: 'spark' },
          { label: 'Glaucoma', href: S + 'glaucoma', text: 'Protect your nerve.', icon: 'shield' },
          { label: 'Dry Eyes', href: S + 'dry-eyes', text: 'Relief that lasts.', icon: 'drop' },
          { label: 'Keratoconus', href: S + 'keratoconus', text: 'Strengthen the cornea.', icon: 'eye' },
          { label: 'Corneal Transplant', href: S + 'corneal-transplant', text: 'Restore a clear window.', icon: 'eye' },
          { label: 'Diabetic Retinopathy', href: S + 'diabetic-retinopathy', text: 'Guard your retina.', icon: 'scan' },
          { label: 'Macular Degeneration', href: S + 'macular-degeneration', text: 'Keep central vision.', icon: 'scan' },
        ],
      },
    ],
  },
  {
    label: 'Eye Care Services',
    href: '/contents/eye-care-services',
    cols: 2,
    feature: { title: 'Tests and treatments, explained', text: 'See how we check your eyes and the procedures we offer.', cta: 'All eye care services', href: '/contents/eye-care-services' },
    groups: [
      {
        title: 'Eye procedures',
        href: P.slice(0, -1),
        cards: [
          { label: 'Cataract Surgery', href: P + 'cataract-surgery-1', icon: 'eye' },
          { label: 'LASIK Eye Surgery', href: P + 'lasik-eye-surgery', icon: 'spark' },
          { label: 'Botox and Juvederm', href: P + 'botox-and-juvederm', icon: 'spark' },
          { label: 'Durysta', href: P + 'durysta', icon: 'drop' },
          { label: 'Glaucoma', href: P + 'glaucoma', icon: 'shield' },
          { label: 'Eye Floaters Laser', href: P + 'laser-floaters-treatment', icon: 'spark' },
          { label: 'LipiFlow Treatment', href: P + 'lipiflow-thermal-pulsation', icon: 'drop' },
          { label: 'Laser Trabeculoplasty (SLT)', href: P + 'selective-laser-trabeculoplasty', icon: 'shield' },
          { label: 'Dry Eye Treatments', href: P + 'true-tear', icon: 'drop' },
          { label: 'YAG Laser Capsulotomy', href: P + 'yag-capsulotomy', icon: 'spark' },
        ],
      },
      {
        title: 'Eye tests',
        href: T.slice(0, -1),
        cards: [
          { label: 'A-Scans & B-Scans', href: T + 'a-scans-b-scans', icon: 'scan' },
          { label: 'Electroretinography (ERG)', href: T + 'electroretinography', icon: 'scan' },
          { label: 'Fundus Photography', href: T + 'fundus-photography', icon: 'scan' },
          { label: 'Nerve Fiber Analysis', href: T + 'nerve-fiber-analysis', icon: 'scan' },
          { label: 'Optical Coherence Tomography', href: T + 'optical-coherence-tomography', icon: 'scan' },
          { label: 'Visual Evoked Potential', href: T + 'visual-evoked-potential', icon: 'scan' },
          { label: 'Visual Field Test', href: T + 'visual-field-test', icon: 'scan' },
        ],
      },
    ],
  },
  {
    label: 'Eye Conditions',
    href: '/contents/eye-conditions',
    cols: 2,
    feature: { title: 'Know your eyes', text: 'Plain answers about common eye conditions and when to get help.', cta: 'All eye conditions', href: '/contents/eye-conditions' },
    groups: [
      {
        title: 'Common conditions',
        href: '/contents/eye-conditions',
        cards: [
          { label: 'Eye Allergies', href: C + 'eye-allergies', text: 'Itchy, red, watery eyes.', icon: 'drop' },
          { label: 'Cataracts', href: C + 'cataracts', text: 'Cloudy or blurry vision.', icon: 'eye' },
          { label: 'Diabetic Retinopathy', href: C + 'diabetic-retinopathy', text: 'Diabetes and your eyes.', icon: 'scan' },
          { label: 'Dry Eye Disease', href: C + 'dry-eye', text: 'Burning, gritty eyes.', icon: 'drop' },
          { label: 'Glaucoma', href: C + 'glaucoma-1', text: 'Pressure and nerve damage.', icon: 'shield' },
          { label: 'Hypertensive Retinopathy', href: C + 'hypertensive-retinopathy', text: 'Blood pressure and the retina.', icon: 'scan' },
          { label: 'Macular Degeneration', href: C + 'macular-degeneration', text: 'Loss of central vision.', icon: 'scan' },
          { label: 'Pterygium', href: C + 'pterygium', text: 'Growth on the eye surface.', icon: 'eye' },
        ],
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  {
    label: 'Contact',
    href: '/contactus',
    cols: 3,
    feature: { title: 'Visit us in New Jersey', text: 'Three offices to serve you. Call or book a visit today.', cta: 'Contact us', href: '/contactus' },
    groups: [
      {
        title: 'Our locations',
        href: '/contactus',
        cards: [
          { label: 'Denville, NJ', href: '/location/nj/denville', text: 'Visit our Denville office.', icon: 'pin' },
          { label: 'Livingston, NJ', href: '/location/nj/livingston', text: 'Visit our Livingston office.', icon: 'pin' },
          { label: 'Newark, NJ', href: '/location/nj/newark', text: 'Visit our Newark office.', icon: 'pin' },
        ],
      },
    ],
  },
];
