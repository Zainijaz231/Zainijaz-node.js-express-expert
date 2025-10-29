export const metadata = {
  title: 'Contact - Hire Backend Developer',
  description: 'Get in touch with Zainijaz, an experienced Backend Developer specializing in Node.js and Express.js. Available for freelance projects, full-time opportunities, and technical consultations.',
  keywords: [
    'hire backend developer',
    'node.js developer for hire',
    'freelance backend developer',
    'remote backend developer',
    'javascript developer Pakistan',
    'contact backend developer',
    'hire full stack developer',
    'backend developer consultation',
    'API development services',
    'web development services'
  ],
  openGraph: {
    title: 'Contact Zainijaz - Backend Developer for Hire',
    description: 'Get in touch with an experienced Backend Developer specializing in Node.js and Express.js. Available for projects and consultations.',
    type: 'website',
    images: [
      {
        url: '/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Zainijaz - Backend Developer',
      },
    ],
  },
  alternates: {
    canonical: 'https://zainijaz.dev/contact',
  },
}

export default function ContactLayout({ children }) {
  return children
}