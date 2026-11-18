// Doctor profiles. Facts come from maranoeyecare.com/provider; wording is simplified.
export type Doctor = {
  slug: string;
  name: string;
  short: string;
  role: string;
  image: string;
  position: string;
  intro: string;
  bio: string[];
  highlights: string[];
  interests?: string;
  description: string;
};

export const doctors: Doctor[] = [
  {
    slug: 'matthew-j-marano-jr-md',
    name: 'Matthew Marano, Jr., MD',
    short: 'Dr. Marano',
    role: 'General Ophthalmology & Cataract Specialist',
    image: '/images/dr-marano.webp',
    position: 'object-top',
    intro: 'Founder and director of Marano Eye Care, and a national leader in laser vision correction and advanced cataract surgery.',
    bio: [
      'Dr. Marano is a board-certified ophthalmologist. He started Marano Eye Care and leads our offices in Denville, Livingston and Newark, New Jersey. Other doctors across the state send their patients to him.',
      'He studied at Columbia University and earned his medical degree at George Washington University School of Medicine. New Jersey Monthly has named him a “Top Doctor” for more than ten years.',
      'He was one of the first surgeons in the country to do bladeless laser cataract surgery. His skills include LenSx femtosecond laser cataract surgery, iLASIK with Advanced CustomVue wavefront mapping, advanced lens implants (multifocal, toric and extended depth of focus), and iStent micro-implants for glaucoma. His team does more than 2,000 major eye surgeries each year in a modern surgery center.',
      'Our practice also provides full care for glaucoma, diabetic eye disease, macular degeneration and many other conditions of the front and back of the eye, supported by the latest imaging technology.',
      'Dr. Marano is Chief of Ophthalmology at Saint Barnabas Medical Center and Saint Michael’s Medical Center, where he teaches surgical technique and the care of complex eye disease. He is also Chief Medical Editor of Ophthalmology 360.',
    ],
    highlights: [
      'Board-certified ophthalmologist',
      'New Jersey Monthly “Top Doctor” for over 10 years',
      'Laser cataract surgery and LASIK expert',
      'Chief of Ophthalmology, Saint Barnabas Medical Center',
      'Over 2,000 major eye surgeries a year by his team',
    ],
    interests: 'Integrity, precision and caring guide his work with patients and with the doctors who refer them.',
    description: 'Meet Dr. Matthew Marano, Jr., board-certified ophthalmologist and cataract and LASIK specialist at Marano Eye Care in Denville, Livingston and Newark, NJ.',
  },
  {
    slug: 'edward-b-decker-md',
    name: 'Edward Decker, MD',
    short: 'Dr. Decker',
    role: 'General Ophthalmology & LASIK Specialist',
    image: '/images/doctors/dr-decker.jpg',
    position: 'object-top',
    intro: 'A board-certified comprehensive ophthalmologist who has performed laser vision correction since 1996.',
    bio: [
      'Dr. Decker joined Marano Eye Care in 1996. He sees patients at our three offices in Denville, Livingston and Newark, New Jersey.',
      'He graduated with honors from Cornell University and studied medicine at Upstate Medical University in Syracuse. He did his internship at UMDNJ-Robert Wood Johnson University Hospital and his residency at Summa Medical Center in Akron, Ohio, where he was chosen Chief Resident in his final year.',
      'As a board-certified comprehensive ophthalmologist, he cares for most eye problems in patients of all ages. He has a special interest in refractive surgery, laser vision correction, and using lasers to treat diabetes and glaucoma. He has done laser vision correction since 1996, including bladeless LASIK with the VISX and Intralase lasers.',
      'Dr. Decker has spoken at national meetings, written journal articles, and is often invited to teach other doctors. He has won many awards for serving his community, and he has traveled to Ghana to do surgery for people who could not get care.',
    ],
    highlights: [
      'Board-certified comprehensive ophthalmologist',
      'With Marano Eye Care since 1996',
      'Bladeless LASIK with VISX and Intralase lasers',
      'Laser treatment for diabetic eye disease and glaucoma',
      'Volunteer eye surgeon in Ghana',
    ],
    interests: 'Outside the office, Dr. Decker enjoys scuba diving, photography and tennis, and he loves cheering on his three children at their games.',
    description: 'Meet Dr. Edward Decker, board-certified ophthalmologist and LASIK specialist at Marano Eye Care in Denville, Livingston and Newark, NJ.',
  },
  {
    slug: 'sherief-raouf-md',
    name: 'Sherief Raouf, MD',
    short: 'Dr. Raouf',
    role: 'Ophthalmology & Corneal Specialist & Surgeon',
    image: '/images/doctors/dr-raouf.jpg',
    position: 'object-top',
    intro: 'A fellowship-trained corneal surgeon who cares for the community where he grew up.',
    bio: [
      'Dr. Raouf is a board-certified ophthalmologist. He provides full eye care, cataract surgery, glaucoma care, cornea care and laser vision correction, including LASIK and PRK.',
      'He earned his medical degree with honors from Stony Brook University School of Medicine, after studying at Swarthmore College. He trained as a resident at Manhattan Eye, Ear & Throat Hospital and the Northwell Health Eye Institute, then completed a fellowship in corneal and external eye disease and refractive surgery.',
      'His surgery skills include laser-assisted cataract surgery, advanced corneal surgery, corneal cross-linking (CXL), LASIK and PRK. He is also skilled in treating dry eye disease and other problems on the surface of the eye.',
      'Dr. Raouf has written more than a dozen articles for peer-reviewed eye journals. He is an active member of the American Academy of Ophthalmology (AAO) and the American Society of Cataract and Refractive Surgery (ASCRS).',
    ],
    highlights: [
      'Board-certified ophthalmologist',
      'Fellowship-trained in corneal disease and refractive surgery',
      'Cataract, corneal, LASIK and PRK surgeon',
      'Author of more than a dozen peer-reviewed papers',
      'Member of AAO and ASCRS',
    ],
    interests: 'Dr. Raouf grew up in Bergen County, New Jersey. Away from work, he treasures time with his wife, his son and his new daughter.',
    description: 'Meet Dr. Sherief Raouf, fellowship-trained corneal specialist and surgeon at Marano Eye Care in Denville, Livingston and Newark, NJ.',
  },
];
