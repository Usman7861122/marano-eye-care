export type Section = { h: string; p?: string[]; ul?: string[] };
export type LegalDoc = { slug: string; title: string; desc: string; intro: string; sections: Section[] };

export const UPDATED = 'November 18, 2026';
const PHONE = '973-358-0416';
const ADDRESS = '16 Pocono Road, Suite 301, Denville, NJ 07834';

export const legal: LegalDoc[] = [
  {
    slug: 'your-privacy',
    title: 'Privacy Policy',
    desc: 'How Marano Eye Care collects, uses and protects information from this website.',
    intro: 'This policy explains what information we collect on this website, how we use it, and the choices you have. Our care of your health information is covered separately in our Notice of Privacy Practices.',
    sections: [
      { h: 'Who we are', p: ['Marano Eye Care (“we”, “us”) is an eye care practice with offices in Denville, Livingston and Newark, New Jersey. This policy applies to this website only.'] },
      { h: 'Information we collect', ul: ['Information you give us, such as your name, phone number, email, preferred office and message when you request an appointment.', 'Technical information, such as your browser, device type, pages visited and approximate location, collected through cookies and similar tools if you allow them.', 'Records of your choices, such as your cookie settings.'] },
      { h: 'Please keep medical details out of web forms', p: ['Our website forms are not a secure place for health information. Please do not include symptoms, diagnoses or test results. Share those by phone or at your visit.'] },
      { h: 'How we use information', ul: ['To answer your requests and schedule or confirm appointments.', 'To run, secure and improve our website.', 'To understand which pages are helpful, if you allow analytics cookies.', 'To follow the law.'] },
      { h: 'How we share information', p: ['We do not sell your personal information. We share it only with service providers who help us run the website and handle requests (for example hosting, form handling and analytics), and when the law requires it. These providers may only use it to do their work for us.'] },
      { h: 'Cookies', p: ['We use cookies as described in our Cookie Policy. You can change your choices at any time with the “Cookie Settings” link in the footer.'] },
      { h: 'How long we keep information', p: ['We keep website request details only as long as needed to handle your request and for normal business records. Health records are kept as required by New Jersey law.'] },
      { h: 'Your choices and rights', ul: ['Ask us what personal information from this website we hold about you.', 'Ask us to correct or delete it, unless we must keep it by law.', 'Opt out of non-essential cookies in Cookie Settings.', 'Ask us to stop contacting you by phone or email.'], p: ['To make a request, call us at ' + PHONE + '.'] },
      { h: 'Children', p: ['This website is for adults. We do not knowingly collect information from children under 13 through the website.'] },
      { h: 'Security', p: ['We use reasonable steps to protect information. No website or internet transfer is completely secure, so we cannot promise absolute security.'] },
      { h: 'Changes to this policy', p: ['We may update this policy. The date at the top shows when it last changed.'] },
      { h: 'Contact us', p: ['Marano Eye Care, ' + ADDRESS + '. Phone: ' + PHONE + '.'] },
    ],
  },
  {
    slug: 'our-terms',
    title: 'Terms & Conditions',
    desc: 'The rules for using the Marano Eye Care website.',
    intro: 'By using this website you agree to these terms. If you do not agree, please do not use the site.',
    sections: [
      { h: 'Information only', p: ['The content on this website is for general information. It is not medical advice and does not create a doctor-patient relationship. See our Medical Disclaimer.'] },
      { h: 'Appointments', p: ['Sending an appointment request does not confirm an appointment. Your visit is confirmed only when our staff contacts you and agrees on a time.'] },
      { h: 'Using the site', ul: ['Use the site only for lawful purposes.', 'Do not try to break, overload or gain unauthorized access to the site.', 'Do not copy the site to build a competing service.', 'Do not submit false, harmful or another person’s information.'] },
      { h: 'Our content', p: ['The text, images, logos and design on this website belong to Marano Eye Care or its licensors and are protected by law. You may view and print pages for your own personal use. Any other use needs our written permission.'] },
      { h: 'Links to other websites', p: ['We may link to other websites. We do not control them and are not responsible for their content or privacy practices.'] },
      { h: 'No guarantees', p: ['We work to keep the website accurate and available, but we provide it “as is”. Results of any treatment vary from person to person, and nothing here promises a particular result.'] },
      { h: 'Limit of liability', p: ['To the fullest extent the law allows, Marano Eye Care is not liable for damages that come from using or not being able to use this website.'] },
      { h: 'Changes', p: ['We may change these terms or the site at any time. Using the site after a change means you accept the new terms.'] },
      { h: 'Governing law', p: ['These terms are governed by the laws of the State of New Jersey. Any dispute will be handled in the courts located in New Jersey.'] },
      { h: 'Contact', p: ['Questions about these terms? Call ' + PHONE + '.'] },
    ],
  },
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    desc: 'How medical information about you may be used and shared, and how you can get access to it.',
    intro: 'This notice describes how medical information about you may be used and shared, and how you can get access to this information. Please review it carefully. It is a plain-language summary of the notice we give to patients. You may ask our staff for a full printed copy at any visit.',
    sections: [
      { h: 'Our promise', p: ['We are required by law to keep your health information private, to give you this notice, and to follow the terms of the notice currently in effect. We will tell you if your information is ever involved in a breach.'] },
      { h: 'How we may use and share your information', ul: ['For treatment: to give you care and share information with other doctors and providers involved in your care.', 'For payment: to bill and collect from you or your insurance company.', 'For health care operations: to run our practice, train staff and improve quality.', 'Appointment reminders and information about treatments or services that may interest you.', 'As required by law, for public health and safety, in legal proceedings, to law enforcement when the law allows, and for health oversight.', 'To family or friends involved in your care, if you agree or if it is in your best interest in an emergency.'] },
      { h: 'Uses that need your written permission', p: ['We need your written permission for most uses of psychotherapy notes, for marketing, and before selling your information. Any other use not described here also needs your permission. You may take back your permission at any time in writing.'] },
      { h: 'Your rights', ul: ['See or get a copy of your health records, usually within 30 days.', 'Ask us to correct information you believe is wrong.', 'Ask for confidential communication, for example at a different phone number or address.', 'Ask us to limit how we use or share your information. If you pay in full out of pocket, you can ask us not to share it with your insurer.', 'Get a list of certain times we have shared your information.', 'Get a paper copy of this notice at any time.', 'Choose someone to act for you, such as a legal guardian.'] },
      { h: 'Complaints', p: ['If you believe your privacy rights were violated, you may complain to us by calling ' + PHONE + ', or to the U.S. Department of Health and Human Services Office for Civil Rights at www.hhs.gov/ocr/privacy/hipaa/complaints. We will not retaliate against you for filing a complaint.'] },
      { h: 'Changes to this notice', p: ['We may change this notice, and the new notice will apply to all information we hold. The current notice is always available at our offices and on this website.'] },
      { h: 'Contact', p: ['Privacy contact: Marano Eye Care, ' + ADDRESS + '. Phone: ' + PHONE + '.'] },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    desc: 'The cookies we use on this website and how to control them.',
    intro: 'Cookies are small text files saved on your device when you visit a website. We use as few as we can, and you decide which optional ones to allow.',
    sections: [
      { h: 'The types we use', ul: ['Necessary: keep the site working and remember your cookie choice. These are always on.', 'Analytics: help us see which pages are used, so we can improve them. Off until you allow them.', 'Media and marketing: allow embedded videos and ad measurement from other services. Off until you allow them.'] },
      { h: 'How we remember your choice', p: ['We save your choice in your browser’s local storage under the name “marano-consent”. It holds your on/off choices and the date, and nothing else.'] },
      { h: 'Change your mind', p: ['Select “Cookie Settings” in the footer of any page to review or change your choices. You can also clear cookies and site data in your browser settings.'] },
      { h: 'Browser controls', p: ['Most browsers let you block or delete cookies. If you block all cookies, some parts of the site may not work properly.'] },
      { h: 'More information', p: ['See our Privacy Policy for how we handle personal information, or call ' + PHONE + ' with questions.'] },
    ],
  },
  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    desc: 'Our commitment to making the Marano Eye Care website usable by everyone.',
    intro: 'Marano Eye Care wants everyone to be able to use our website, including people with vision, hearing, movement or thinking disabilities.',
    sections: [
      { h: 'Our goal', p: ['We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. We work on this all the time and fix problems as we find them.'] },
      { h: 'What we do', ul: ['Use clear headings, readable text sizes and strong color contrast.', 'Make the site usable with a keyboard alone.', 'Add text descriptions to meaningful images.', 'Label form fields and show clear error messages.', 'Respect your device’s “reduce motion” setting.', 'Build pages that work on phones, tablets and computers.'] },
      { h: 'Known limits', p: ['Some older content or third-party tools, such as embedded videos, may not meet every guideline yet. We are working to improve them.'] },
      { h: 'Need help or want to report a problem?', p: ['If you have trouble using any part of this site, or need information in another format, please call us at ' + PHONE + '. Tell us the page and the problem, and we will do our best to help you or fix it quickly.'] },
      { h: 'In our offices', p: ['Please tell us at the time you book if you need help during your visit, such as large-print forms, an interpreter or wheelchair access.'] },
    ],
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    desc: 'The information on this website is not medical advice.',
    intro: 'Please read this before you rely on anything you see on our website.',
    sections: [
      { h: 'Not medical advice', p: ['The articles, blog posts, pages and tools on this website are for education only. They do not replace advice, diagnosis or treatment from a qualified eye doctor who has examined you.'] },
      { h: 'No doctor-patient relationship', p: ['Using this website, reading it or sending us a form does not make you our patient. A doctor-patient relationship starts only after an exam and agreement with one of our doctors.'] },
      { h: 'Results vary', p: ['Every eye and every person is different. Outcomes of procedures such as cataract surgery or LASIK differ from patient to patient. Risks, benefits and alternatives will be explained to you at your visit.'] },
      { h: 'In an emergency', p: ['If you have sudden vision loss, flashes of light, a dark curtain across your vision or severe eye pain, call our emergency line at 973-322-0100. If you cannot reach us, go to the nearest emergency room or call 911.'] },
      { h: 'Third-party information', p: ['We may mention or link to outside sources. We do not control them and cannot promise they are accurate or current.'] },
    ],
  },
  {
    slug: 'nondiscrimination-notice',
    title: 'Nondiscrimination Notice',
    desc: 'Marano Eye Care does not discriminate and offers free language and disability help.',
    intro: 'Marano Eye Care follows federal civil rights laws and does not discriminate, exclude or treat people differently because of race, color, national origin, age, disability or sex.',
    sections: [
      { h: 'Free help we provide', ul: ['Qualified sign language interpreters and written information in other formats, such as large print or accessible electronic formats, for people with disabilities.', 'Language help, including qualified interpreters and information written in other languages, for people whose first language is not English.'] },
      { h: 'How to ask for help', p: ['Tell our staff when you book or call ' + PHONE + ', and we will arrange the help at no cost to you.'] },
      { h: 'If you think we treated you unfairly', p: ['You can file a complaint with us by calling ' + PHONE + ' or writing to Marano Eye Care, ' + ADDRESS + '. We will review it promptly.', 'You may also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at ocrportal.hhs.gov/ocr/portal/lobby.jsf, or by phone at 1-800-368-1019 (TDD: 1-800-537-7697).'] },
    ],
  },
];
