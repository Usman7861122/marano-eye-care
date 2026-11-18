// Main menu: same structure and labels as maranoeyecare.com
export type MenuNode = { label: string; href: string; external?: boolean; children?: MenuNode[] };

const P = '/contents/eye-care-services/eye-procedures/';
const T = '/contents/eye-care-services/eye-tests/';
const C = '/contents/eye-conditions/';
const L = '/location/nj/';

export const menu: MenuNode[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Practice',
    href: '/about',
    children: [
      { label: 'Doctors', href: '/provider' },
      { label: 'Notice Of Privacy', href: 'https://sa1s3optim.patientpop.com/assets/docs/425417.pdf', external: true },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Cataract Surgery', href: '/services/cataract-surgery' },
      { label: 'LASIK', href: '/services/lasik' },
      { label: 'Glaucoma', href: '/services/glaucoma' },
      { label: 'Dry Eyes', href: '/services/dry-eyes' },
      { label: 'Keratoconus', href: '/services/keratoconus' },
      { label: 'Corneal Transplant', href: '/services/corneal-transplant' },
      { label: 'Diabetic Retinopathy', href: '/services/diabetic-retinopathy' },
      { label: 'Macular Degeneration', href: '/services/macular-degeneration' },
      { label: 'View More Services', href: '/services' },
    ],
  },
  {
    label: 'Eye Care Services',
    href: '#',
    children: [
      {
        label: 'Eye Procedures',
        href: '/contents/eye-care-services/eye-procedures',
        children: [
          { label: 'New Jersey Cataract Surgery', href: P + 'cataract-surgery-1' },
          { label: 'Botox and Juvederm Treatments in New Jersey', href: P + 'botox-and-juvederm' },
          { label: 'Durysta', href: P + 'durysta' },
          { label: 'Glaucoma', href: P + 'glaucoma' },
          { label: 'New Jersey LASIK Eye Surgery', href: P + 'lasik-eye-surgery' },
          { label: 'New Jersey Eye Floaters Laser Treatment', href: P + 'laser-floaters-treatment' },
          { label: 'New Jersey LipiFlow Treatment', href: P + 'lipiflow-thermal-pulsation' },
          { label: 'Selective Laser Trabeculoplasty For Glaucoma', href: P + 'selective-laser-trabeculoplasty' },
          { label: 'NJ Treatments For Dry Eye Syndrome', href: P + 'true-tear' },
          { label: 'YAG Laser Capsulotomy in New Jersey', href: P + 'yag-capsulotomy' },
        ],
      },
      {
        label: 'Eye Tests',
        href: '/contents/eye-care-services/eye-tests',
        children: [
          { label: 'New Jersey A-Scans & B-Scans', href: T + 'a-scans-b-scans' },
          { label: 'What is Electroretinography (ERG)?', href: T + 'electroretinography' },
          { label: 'New Jersey Fundus Photography Eye Test', href: T + 'fundus-photography' },
          { label: 'Nerve Fiber Analysis Test', href: T + 'nerve-fiber-analysis' },
          { label: 'Optical Coherence Tomography', href: T + 'optical-coherence-tomography' },
          { label: 'Visual Evoked Potential', href: T + 'visual-evoked-potential' },
          { label: 'Visual Field Test', href: T + 'visual-field-test' },
        ],
      },
    ],
  },
  {
    label: 'Eye Conditions',
    href: '/contents/eye-conditions',
    children: [
      { label: 'Allergies', href: C + 'eye-allergies' },
      { label: 'What Are Cataracts?', href: C + 'cataracts' },
      { label: 'Diabetic Retinopathy', href: C + 'diabetic-retinopathy' },
      { label: 'What is Dry Eye Disease?', href: C + 'dry-eye' },
      { label: 'Glaucoma', href: C + 'glaucoma-1' },
      { label: 'Hypertensive Retinopathy', href: C + 'hypertensive-retinopathy' },
      { label: 'Macular Degeneration', href: C + 'macular-degeneration' },
      { label: 'Pterygium', href: C + 'pterygium' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Contact',
    href: '/contactus',
    children: [
      { label: 'Denville', href: L + 'denville' },
      { label: 'Livingston', href: L + 'livingston' },
      { label: 'Newark', href: L + 'newark' },
    ],
  },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Call Us', href: '/contactus' },
];
