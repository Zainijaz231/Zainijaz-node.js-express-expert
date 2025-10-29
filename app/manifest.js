export default function manifest() {
  return {
    name: 'Zainijaz - Backend Developer Portfolio',
    short_name: 'Zainijaz Portfolio',
    description: 'Professional portfolio of Zainijaz, a Backend Developer specializing in Node.js, Express.js, and React',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e293b',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'developer'],
    lang: 'en',
    dir: 'ltr',
  }
}