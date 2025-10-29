import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Zainijaz - Backend Developer | Node.js & Express.js Expert',
    template: '%s | Zainijaz - Backend Developer'
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#3b82f6' },
    ],
  },
  description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, and React. 1+ years building scalable web applications with AI-enhanced development. Available for hire.',
  keywords: [
    'backend developer',
    'node.js developer',
    'express.js',
    'javascript developer',
    'react developer',
    'mongodb',
    'postgresql',
    'full stack developer',
    'AI development',
    'web developer Pakistan',
    'remote developer',
    'API development',
    'database design',
    'ChatGPT developer',
    'GitHub Copilot',
    'freelance developer'
  ],
  authors: [{ name: 'Zainijaz', url: 'https://github.com/Zainijaz231' }],
  creator: 'Zainijaz',
  publisher: 'Zainijaz',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zainijaz.dev',
    title: 'Zainijaz - Backend Developer | Node.js & Express.js Expert',
    description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, and React. 1+ years building scalable web applications with AI-enhanced development.',
    siteName: 'Zainijaz Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zainijaz - Backend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zainijaz - Backend Developer | Node.js & Express.js Expert',
    description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, and React. Available for hire.',
    images: ['/og-image.png'],
    creator: '@zainijaz',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://zainijaz.dev',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}