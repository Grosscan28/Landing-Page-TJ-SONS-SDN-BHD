/**
 * Centralized media configuration.
 *
 * Replace the video/image paths below to swap assets across the whole site.
 * Drop your real files into /public/media and point these values at them.
 *
 * Videos:  put .mp4 (and optional .webm) files in /public/media
 * Images:  put images in /public/media
 *
 * The hero gracefully falls back to `heroPoster` if the video is missing
 * or cannot play (slow connections, mobile data saver, reduced motion).
 */

export const media = {
  // --- Videos (replace with your real company videos) ---
  // Leave `heroVideo` as an empty string to show only the poster image.
  heroVideo: '', // e.g. '/media/hero.mp4'
  companyProfileVideo: '/media/TJ-company-video.mp4',
  // --- Poster / fallback images ---
  heroPoster: '/media/TJ-V-Group.JPG',
  companyProfileThumb: '/media/TJ-Greater-Group.JPG',

  // --- Section imagery ---
  aboutMain: '/media/TJ-About-Big.JPG',
  aboutSecondary: '/media/TJ-About-Small.JPG',

 workPhotos: [
    '/Work-photos/Work-1.JPG',
    '/Work-photos/Work-2.JPG',
    '/Work-photos/Work-3.JPG',
    '/Work-photos/Work-4.JPG',
    '/Work-photos/Work-5.JPG',
  ],

  vendorLogos: [
  '/vendor/Sime-darby.jpg',
  '/vendor/Boustead.webp',
  '/vendor/Felcra.png',
  '/vendor/Felda.png',
  '/vendor/IOI.jpg',
  '/vendor/Sawit.png',
  '/vendor/Sedafiat.png',
  'vendor/Wilmar.png',
  'vendor/FGV.png',

],

} as const

export const companyProfile = {
  videoDuration: '4:26',
} as const

/** Business contact details — update these with your real information. */
export const contact = {
  companyName: 'TJ & SONS HOLDINGS SDN BHD',
  phoneDisplay:['+60 19 881 2373 Jocelyn', '+60 19 853 9368 Sunil'],
  // International format without "+" or spaces for the WhatsApp deep link.
  whatsappNumber: '60198812373',
  whatsappMessage: 'Hello TJ & SONS HOLDINGS SDN BHD, I would like to request a service.',
  email: 'tjandsonsholdings@gmail.com',
  address: 'Sandakan, Sabah, Malaysia',
  office:  '1st Floor Bangunan Sabah, Jalan Pelabuhan Lama, 90000, Sandakan, Sabah'
} as const

export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
