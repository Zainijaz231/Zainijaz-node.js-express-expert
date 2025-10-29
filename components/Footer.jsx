import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Zainijaz231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zain-ijaz-2a6886388/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:dreavix.tech@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 Zainijaz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer