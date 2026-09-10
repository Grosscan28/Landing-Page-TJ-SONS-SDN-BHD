/** Centralized media configuration. */

const GITHUB_MEDIA_BASE = 'https://raw.githubusercontent.com/Grosscan28/Landing-Page-TJ-SONS-SDN-BHD/redesign/hero-sabah-map/Photos'

const mediaPath = (folder: string, file: string) => `${GITHUB_MEDIA_BASE}/${folder}/${file}`

export const media = {
  heroVideo: '',
  companyProfileVideo: mediaPath('media', 'TJ-company-video.mp4'),
  heroPoster: mediaPath('media', 'TJ-V-Group.JPG'),
  companyProfileThumb: mediaPath('media', 'TJ-Greater-Group.JPG'),
  aboutMain: mediaPath('media', 'TJ-About-Big.JPG'),
  aboutSecondary: mediaPath('media', 'TJ-About-Small.JPG'),

  workPhotos: [
    mediaPath('Work-photos', 'Work-1.JPG'),
    mediaPath('Work-photos', 'Work-2.jpg'),
    mediaPath('Work-photos', 'Work-3.jpg'),
    mediaPath('Work-photos', 'Work-4.jpg'),
    mediaPath('Work-photos', 'Work-5.jpg'),
  ],

  companyLogo: mediaPath('Company-logo', 'TJ-logo.png'),

  vendorLogos: [
    mediaPath('vendor', 'CIDB.png'),
    mediaPath('vendor', 'Boustead.webp'),
    mediaPath('vendor', 'Sime-darby.jpg'),
    mediaPath('vendor', 'Felcra.png'),
    mediaPath('vendor', 'FGV.png'),
    mediaPath('vendor', 'IOI.jpg'),
    mediaPath('vendor', 'Felda.png'),
    mediaPath('vendor', 'Sawit.png'),
    mediaPath('vendor', 'Sedafiat.png'),
    mediaPath('vendor', 'Wilmar.png'),
  ],
} as const

export const companyProfile = { videoDuration: '4:26' } as const

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
