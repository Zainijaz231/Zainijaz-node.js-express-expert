import { ExternalLink, Github, Server, Database, Globe, Smartphone } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Blog Platform',
    description: 'A full-stack blogging platform where users can create, edit, and publish blog posts. Features user authentication, rich text editor, comment system, and responsive design for optimal reading experience.',
    image: '/e-blog.png',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://github.com/Zainijaz231/e-blog',
    demo: 'https://e-blog-theta.vercel.app/',
    highlights: [
      'Rich text editor with formatting',
      'User authentication & profiles',
      'Comment system with replies',
      'Responsive design for all devices',
      'Search and filter functionality'
    ]
  },
  {
    id: 2,
    title: 'Todo List Application',
    description: 'A modern task management application with drag-and-drop functionality, categories, due dates, and priority levels. Built with React and local storage for data persistence.',
    image: '/todo-list.png',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage', 'React DnD'],
    category: 'Frontend + backend',
    github: 'https://github.com/Zainijaz231/todo-list',
    demo: 'https://todo-list-frontend-drab.vercel.app/',
    highlights: [
      'Drag & drop task organization',
      'Priority levels and due dates',
      'Category-based task filtering',
      'Dark/light theme toggle',
      'Data persistence with local storage',
      'User authentication & profiles'

    ]
  },
  {
    id: 3,
    title: 'Currency Converter',
    description: 'Real-time currency converter application that fetches live exchange rates from multiple APIs. Features historical data charts, favorite currencies, and offline support with cached rates.',
    image: '/converter.png',
    tech: ['React', 'JavaScript', 'REST APIs', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/Zainijaz231/currency-converter',
    demo: 'https://currency-converter-pied-tau.vercel.app/',
    highlights: [
      'Real-time exchange rates',
      'Historical data visualization',
      'Favorite currencies list',
      'Offline mode with cached data',
      'Clean and intuitive interface'
    ]
  },
  {
    id: 4,
    title: 'AuroraPass - Password Manager',
    description: 'A secure password manager application with encryption, password generation, and secure storage. Features master password protection, password strength analysis, and secure sharing capabilities.',
    image: '/aura-pass.png',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'Full Stack',
    github: 'https://github.com/Zainijaz231/aurorapass',
    demo: 'https://aurora-pass.vercel.app/',
    highlights: [
      'AES-256 encryption for passwords',
      'Strong password generator',
      'Master password protection',
      'Password strength analyzer',
      'Secure backup and sync'
    ]
  }
]

const ProjectCard = ({ project }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend':
        return <Server className="h-4 w-4" />
      case 'Full Stack':
        return <Globe className="h-4 w-4" />
      default:
        return <Database className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Backend':
        return 'bg-green-100 text-green-800'
      case 'Full Stack':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-purple-100 text-purple-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
            {getCategoryIcon(project.category)}
            <span className="ml-1">{project.category}</span>
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of backend APIs, full-stack applications, and development tools
              I've built to solve real-world problems and explore new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/Zainijaz231"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}