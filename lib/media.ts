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
  companyProfileVideo: '', // e.g. '/media/company-profile.mp4'

  // --- Poster / fallback images ---
  heroPoster: '/media/hero-poster.png',
  companyProfileThumb: '/media/company-profile-thumb.png',

  // --- Section imagery ---
  aboutMain: '/media/about-main.png',
  aboutSecondary: '/media/about-secondary.png',
} as const

export const companyProfile = {
  videoDuration: '2:48',
} as const

/** Business contact details — update these with your real information. */
export const contact = {
  companyName: 'Verdant',
  phoneDisplay: '+62 812 3456 7890',
  // International format without "+" or spaces for the WhatsApp deep link.
  whatsappNumber: '6281234567890',
  whatsappMessage: 'Hello Verdant, I would like to request a service.',
  email: 'hello@verdant.eco',
  address: 'Sandakan, Sabah, Malaysia',
} as const

export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
