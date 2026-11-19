// Icon name (from lucide-react) and a short plain-English line for each menu link.
export const menuMeta: Record<string, { icon: string; desc: string }> = {
  '/provider': { icon: 'Stethoscope', desc: 'Meet our surgeons' },
  '/notice-of-privacy-practices': { icon: 'ShieldCheck', desc: 'How we protect your data' },

  '/services/cataract-surgery': { icon: 'ScanEye', desc: 'Laser-guided, clearer sight' },
  '/services/lasik': { icon: 'Zap', desc: 'Less need for glasses' },
  '/services/glaucoma': { icon: 'Gauge', desc: 'Protect your optic nerve' },
  '/services/dry-eyes': { icon: 'Droplets', desc: 'Relief for tired, dry eyes' },
  '/services/keratoconus': { icon: 'Focus', desc: 'Care for a thinning cornea' },
  '/services/corneal-transplant': { icon: 'Layers', desc: 'Restore a clear cornea' },
  '/services/diabetic-retinopathy': { icon: 'Activity', desc: 'Guard your sight with diabetes' },
  '/services/macular-degeneration': { icon: 'Aperture', desc: 'Keep your central vision' },
  '/services': { icon: 'Eye', desc: 'See everything we offer' },

  '/services/botox': { icon: 'Syringe', desc: 'Smooth, refreshed look' },
  '/services/durysta': { icon: 'Pill', desc: 'A gentle glaucoma implant' },
  '/services/floaters': { icon: 'Sparkles', desc: 'Laser care for floaters' },
  '/services/lipiflow': { icon: 'Flame', desc: 'Heat therapy for dry eye' },
  '/services/selective-laser-trabeculoplasty': { icon: 'Crosshair', desc: 'Laser to lower eye pressure' },
  '/services/yag-laser-capsulotomy': { icon: 'Radio', desc: 'Clears cloudy vision after surgery' },

  '/eye-tests': { icon: 'ClipboardList', desc: 'All our eye tests' },
  '/eye-tests/a-scans-b-scans': { icon: 'Waves', desc: 'Ultrasound pictures of the eye' },
  '/eye-tests/electroretinography': { icon: 'Activity', desc: 'Checks how the retina responds' },
  '/eye-tests/fundus-photography': { icon: 'Camera', desc: 'Photos of the back of the eye' },
  '/eye-tests/nerve-fiber-analysis': { icon: 'ScanLine', desc: 'Measures optic nerve health' },
  '/eye-tests/optical-coherence-tomography': { icon: 'Microscope', desc: 'Detailed eye scan (OCT)' },
  '/eye-tests/visual-evoked-potential': { icon: 'Radar', desc: 'Tests the path from eye to brain' },
  '/eye-tests/visual-field-test': { icon: 'View', desc: 'Checks your side vision' },

  '/conditions': { icon: 'Eye', desc: 'All eye conditions' },
  '/conditions/eye-allergies': { icon: 'Wind', desc: 'Itchy, watery eyes' },
  '/conditions/cataracts': { icon: 'ScanEye', desc: 'Cloudy or blurry vision' },
  '/conditions/diabetic-retinopathy': { icon: 'Activity', desc: 'Diabetes and the retina' },
  '/conditions/dry-eye-disease': { icon: 'Droplets', desc: 'Burning, gritty eyes' },
  '/conditions/glaucoma': { icon: 'Gauge', desc: 'High pressure in the eye' },
  '/conditions/hypertensive-retinopathy': { icon: 'HeartPulse', desc: 'Blood pressure and the eye' },
  '/conditions/macular-degeneration': { icon: 'Aperture', desc: 'Blurry central vision' },
  '/conditions/pterygium': { icon: 'Sun', desc: 'Growth on the eye surface' },

  '/location/nj/denville': { icon: 'MapPin', desc: 'Hours and directions' },
  '/location/nj/livingston': { icon: 'MapPin', desc: 'Hours and directions' },
  '/location/nj/newark': { icon: 'MapPin', desc: 'Hours and directions' },
};

// Left feature card of each mega menu panel.
export const menuPanels: Record<string, { title: string; text: string; cta?: { label: string; href: string } }> = {
  'About Practice': { title: 'Care you can trust', text: 'Meet our surgeons and learn how we look after you.', cta: { label: 'About us', href: '/about' } },
  Services: { title: 'Clear sight, made simple', text: 'Gentle, modern care for every stage of life.', cta: { label: 'View all', href: '/services' } },
  'Eye Care Services': { title: 'Tests and treatments', text: 'Modern tools to find problems early and treat them well.', cta: { label: 'View all', href: '/services' } },
  'Eye Conditions': { title: 'Know your eyes', text: 'Plain-English guides to common eye conditions.', cta: { label: 'View all', href: '/conditions' } },
  Contact: { title: 'Visit us in New Jersey', text: 'Three offices: Denville, Livingston and Newark.', cta: { label: 'Book a visit', href: '/appointment' } },
};
