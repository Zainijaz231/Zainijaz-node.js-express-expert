export const metadata = {
  title: 'Projects - Full Stack Web Applications',
  description: 'Explore my portfolio of backend and full-stack projects including E-Blog Platform, Todo List App, Currency Converter, and AuroraPass Password Manager. Built with Node.js, React, and modern technologies.',
  keywords: [
    'web development projects',
    'node.js projects',
    'react projects',
    'full stack applications',
    'backend projects',
    'javascript projects',
    'portfolio projects',
    'e-blog platform',
    'todo list app',
    'currency converter',
    'password manager',
    'mongodb projects',
    'express.js applications'
  ],
  openGraph: {
    title: 'Projects - Zainijaz Backend Developer Portfolio',
    description: 'Explore my portfolio of backend and full-stack projects built with Node.js, React, and modern technologies.',
    type: 'website',
    images: [
      {
        url: '/projects-og.png',
        width: 1200,
        height: 630,
        alt: 'Zainijaz Projects Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://zainijaz.dev/projects',
  },
}

export default function ProjectsLayout({ children }) {
  return children
}