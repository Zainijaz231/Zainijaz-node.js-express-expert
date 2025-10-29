export const metadata = {
  title: 'Code Examples - Backend & Frontend Development',
  description: 'Explore real-world code examples showcasing backend API development with Node.js/Express and React frontend components. Clean, maintainable code with modern best practices.',
  keywords: [
    'code examples',
    'node.js code',
    'express.js examples',
    'react code examples',
    'javascript code samples',
    'backend code examples',
    'API development code',
    'full stack code',
    'clean code examples',
    'best practices code',
    'modern javascript',
    'web development code'
  ],
  openGraph: {
    title: 'Code Examples - Zainijaz Backend Developer',
    description: 'Explore real-world code examples showcasing backend API development and React frontend components.',
    type: 'website',
    images: [
      {
        url: '/code-og.png',
        width: 1200,
        height: 630,
        alt: 'Code Examples - Zainijaz Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://zainijaz.dev/code',
  },
}

export default function CodeLayout({ children }) {
  return children
}