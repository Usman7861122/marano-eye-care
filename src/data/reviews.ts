// Patient reviews copied word for word from maranoeyecare.com/testimonials (five-star, complete texts only).
export type Review = { name: string; text: string; tag: 'Dr. Marano' | 'Dr. Decker' | 'Cataract surgery' | 'Our team' | 'Care' };
export const reviews: Review[] = [
  { name: 'Terry Z.', tag: 'Dr. Decker', text: 'Extremely satisfied with all aspects of the professional treatment Dr. Decker and his staff provide.' },
  { name: 'Richard C.', tag: 'Cataract surgery', text: 'Dr. Jalaj is an excellent doctor and eye surgeon. Extremely pleased with results of my cataract surgery' },
  { name: 'Anthony M.', tag: 'Dr. Decker', text: 'Dr. Decker is great!!! He is the reason I keep coming back . Thank you Dr. Decker.' },
  { name: 'Susan C.', tag: 'Dr. Marano', text: 'I always have a wonderful experience when I go to Dr. Mariano’s office, I highly recommend his office!' },
  { name: 'John W.', tag: 'Care', text: 'Comprehensive care. No waiting. Thorough, thoughtful feedback during entire process.' },
  { name: 'Rosemary L.', tag: 'Dr. Marano', text: 'Office staff very pleasant. Technicians very thorough.Dr. Marano always pleasant and does thorough examination.' },
  { name: 'Evelyn S.', tag: 'Our team', text: 'Always a pleasant experience. Staff is knowledgeable caring and informative.' },
  { name: 'Donna M.', tag: 'Our team', text: 'Everyone was very Pleasant and helpful' },
  { name: 'Josephine M.', tag: 'Care', text: 'Dr explain good and so helpful' },
  { name: 'Carol N.', tag: 'Care', text: 'Very thorough' },
  { name: 'Imelda R.', tag: 'Care', text: 'Extremely thorough.' },
  { name: 'Elizabeth O.', tag: 'Care', text: 'Proficient and professional' },
  { name: 'Salvatore N.', tag: 'Care', text: 'Great job. Always recommend' },
  { name: 'Jan M.', tag: 'Care', text: 'Fully satisfied' },
];
export const rating = { score: '4.83', count: '1,932' };
