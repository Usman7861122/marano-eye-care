// Main menu: same structure and labels as maranoeyecare.com
export type MenuNode = { label: string; href: string; external?: boolean; children?: MenuNode[] };

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
        href: '/services',
        children: [
          { label: 'New Jersey Cataract Surgery', href: '/services/cataract-surgery' },
          { label: 'Botox and Juvederm Treatments in New Jersey', href: '/services/botox' },
          { label: 'Durysta', href: '/services/durysta' },
          { label: 'Glaucoma', href: '/services/glaucoma' },
          { label: 'New Jersey LASIK Eye Surgery', href: '/services/lasik' },
          { label: 'New Jersey Eye Floaters Laser Treatment', href: '/services/floaters' },
          { label: 'New Jersey LipiFlow Treatment', href: '/services/lipiflow' },
          { label: 'Selective Laser Trabeculoplasty For Glaucoma', href: '/services/selective-laser-trabeculoplasty' },
          { label: 'NJ Treatments For Dry Eye Syndrome', href: '/services/dry-eyes' },
          { label: 'YAG Laser Capsulotomy in New Jersey', href: '/services/yag-laser-capsulotomy' },
        ],
      },
      {
        label: 'Eye Tests',
        href: '/eye-tests',
        children: [
          { label: 'New Jersey A-Scans & B-Scans', href: '/eye-tests/a-scans-b-scans' },
          { label: 'What is Electroretinography (ERG)?', href: '/eye-tests/electroretinography' },
          { label: 'New Jersey Fundus Photography Eye Test', href: '/eye-tests/fundus-photography' },
          { label: 'Nerve Fiber Analysis Test', href: '/eye-tests/nerve-fiber-analysis' },
          { label: 'Optical Coherence Tomography', href: '/eye-tests/optical-coherence-tomography' },
          { label: 'Visual Evoked Potential', href: '/eye-tests/visual-evoked-potential' },
          { label: 'Visual Field Test', href: '/eye-tests/visual-field-test' },
        ],
      },
    ],
  },
  {
    label: 'Eye Conditions',
    href: '/conditions',
    children: [
      { label: 'Allergies', href: '/conditions/eye-allergies' },
      { label: 'What Are Cataracts?', href: '/conditions/cataracts' },
      { label: 'Diabetic Retinopathy', href: '/conditions/diabetic-retinopathy' },
      { label: 'What is Dry Eye Disease?', href: '/conditions/dry-eye-disease' },
      { label: 'Glaucoma', href: '/conditions/glaucoma' },
      { label: 'Hypertensive Retinopathy', href: '/conditions/hypertensive-retinopathy' },
      { label: 'Macular Degeneration', href: '/conditions/macular-degeneration' },
      { label: 'Pterygium', href: '/conditions/pterygium' },
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
];
