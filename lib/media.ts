/** Centralized media configuration. */

export const media = {
  heroVideo: '',
  companyProfileVideo: '/media/TJ-company-video.mp4',
  heroPoster: '/media/TJ-V-Group.JPG',
  companyProfileThumb: '/media/TJ-Greater-Group.JPG',

  aboutMain: '/media/TJ-About-Big.JPG',
  aboutSecondary: '/media/TJ-About-Small.JPG',

  workPhotos: [
    '/Work-photos/Work-2.JPG',
    '/Work-photos/Work-3.JPG',
    '/Work-photos/Work-1.JPG',
    '/Work-photos/Work-4.JPG',
    '/Work-photos/Work-5.JPG',
  ],

  vendorLogos: [
    '/vendor/CIDB.png',
    '/vendor/Boustead.webp',
    '/vendor/Sime-darby.jpg',
    '/vendor/Felcra.png',
    '/vendor/FGV.png',
    '/vendor/IOI.jpg',
    '/vendor/Felda.png',
    '/vendor/Sawit.png',
    '/vendor/Sedafiat.png',
    '/vendor/Wilmar.png',
  ],
} as const

export const companyProfile = {
  videoDuration: '4:26',
} as const

export const contact = {
  companyName: 'TJ & SONS HOLDINGS SDN BHD',
  phoneDisplay: ['+60 19 881 2373 Jocelyn', '+60 19 853 9368 Sunil'],
  whatsappNumber: '60198812373',
  whatsappMessage: 'Hello TJ & SONS HOLDINGS SDN BHD, I would like to request a service.',
  email: 'tjandsonsholdings@gmail.com',
  address: 'Sandakan, Sabah, Malaysia',
  office: '1st Floor Bangunan Sabah, Jalan Pelabuhan Lama, 90000, Sandakan, Sabah',
} as const

export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
