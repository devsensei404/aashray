// Single source of truth for contact details, shelters and WhatsApp messages.
// Empty values are hidden (or shown as disabled) on the page. Nothing here is invented.

export const siteName = 'Aashray for Animals';

// Footer credit
export const developer = {
  name: 'devsensei404',
  url: 'https://github.com/devsensei404',
};

/* ---------- Phone / WhatsApp (from .env, see .env.example) ---------- */

function normalise(raw) {
  let d = String(raw ?? '').replace(/\D/g, '');
  if (d.length === 10) d = '91' + d; // bare Indian mobile number
  return d.length >= 11 && d.length <= 15 ? d : '';
}

const whatsappNumber = normalise(import.meta.env.PUBLIC_WHATSAPP_NUMBER);
const phoneNumber = normalise(import.meta.env.PUBLIC_PHONE_NUMBER) || whatsappNumber;

export const whatsappConfigured = Boolean(whatsappNumber);
export const phoneConfigured = Boolean(phoneNumber);

/** wa.me link with an editable pre-filled message, or null when no number is set. */
export function waLink(message) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = phoneNumber ? `tel:+${phoneNumber}` : null;

export const displayPhone = phoneNumber
  ? phoneNumber.startsWith('91') && phoneNumber.length === 12
    ? `+91 ${phoneNumber.slice(2, 7)} ${phoneNumber.slice(7)}`
    : `+${phoneNumber}`
  : '';

/* ---------- Other channels (empty = hidden) ---------- */

export const email = String(import.meta.env.PUBLIC_EMAIL || 'aashray2015@gmail.com').trim();
export const socials = {
  instagram: 'https://www.instagram.com/aashrayforanimals/',
  facebook: 'https://www.facebook.com/aashray.for.animals/',
};

/* ---------- Shelters ---------- */

export const shelters = [
  {
    id: 'a-zone',
    name: 'A Zone shelter',
    address: '19/20 Vivekananda Road, A Zone, Durgapur, West Bengal, India',
    mapsUrl: 'https://maps.app.goo.gl/FWgq4hymx2HP9XQWA',
    recommended: true,
  },
  {
    id: 'second',
    name: 'Our second shelter',
    address: '', // pending
    mapsUrl: '', // pending
    recommended: false,
  },
];

export const visitingHours = [
  { days: 'Monday to Saturday', times: ['9:00 am – 2:00 pm', '6:00 pm – 9:00 pm'] },
  { days: 'Sunday', times: ['Closed'] },
];

/* ---------- Pre-filled WhatsApp messages ---------- */

export const messages = {
  general: 'Hello Aashray, I have a question. Could you please help?',
  rescue:
    'Hello Aashray, I need help with an animal. Location/landmark: [please enter]. Animal and situation: [please describe briefly].',
  adoption:
    'Hello Aashray, I am interested in adopting a dog. Could you please share information about the adoption process and the animals available?',
  fostering:
    'Hello Aashray, I am interested in fostering an animal. Could you please share more information?',
  volunteering:
    'Hello Aashray, I would like to volunteer. Could you please let me know how I can get involved?',
  streetSterilisation:
    'Hello Aashray, I would like to ask about sterilisation of street animals in my area. Could you please guide me?',
  petNeutering:
    'Hello Aashray, I would like to ask about neutering for my pet. Could you please share the procedure, availability and charges?',
  donation:
    'Hello Aashray, I would like to contribute to your work. Could you please share the ways I can help?',
};