export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zainijaz",
    "jobTitle": "Backend Developer",
    "description": "Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, and React with 1+ years of experience building scalable web applications.",
    "url": "https://zainijaz.dev",
    "email": "dreavix.tech@gmail.com",
    "image": "https://zainijaz.dev/profile-image.jpg",
    "sameAs": [
      "https://github.com/Zainijaz231",
      "https://www.linkedin.com/in/zain-ijaz-2a6886388/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    },
    "knowsAbout": [
      "Node.js",
      "Express.js",
      "JavaScript",
      "React",
      "MongoDB",
      "PostgreSQL",
      "API Development",
      "Backend Development",
      "Full Stack Development",
      "AI-Enhanced Development",
      "ChatGPT",
      "GitHub Copilot"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Backend Developer",
      "description": "Develops server-side applications and APIs using Node.js, Express.js, and modern JavaScript technologies",
      "skills": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "React",
        "JavaScript",
        "API Development",
        "Database Design"
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Backend Development Services",
        "description": "Professional backend development services including API development, database design, and full-stack web applications"
      }
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zainijaz - Backend Developer Portfolio",
    "url": "https://zainijaz.dev",
    "description": "Professional portfolio of Zainijaz, a Backend Developer specializing in Node.js, Express.js, and modern web technologies",
    "author": {
      "@type": "Person",
      "name": "Zainijaz"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zainijaz.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Zainijaz Developer Portfolio",
    "description": "A collection of backend and full-stack web development projects showcasing expertise in Node.js, Express.js, React, and modern web technologies",
    "author": {
      "@type": "Person",
      "name": "Zainijaz"
    },
    "dateCreated": "2025",
    "genre": "Web Development Portfolio",
    "keywords": "backend development, node.js, express.js, react, javascript, mongodb, postgresql, web development"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
    </>
  )
}