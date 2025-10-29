import { Mail, Github, Linkedin, MapPin, Clock, ExternalLink, MessageSquare, Phone, Calendar } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Best way to reach me for project inquiries and opportunities",
      value: "dreavix.tech@gmail.com",
      href: "mailto:dreavix.tech@gmail.com",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code, contribute to projects, or start a discussion",
      value: "github.com/Zainijaz231",
      href: "https://github.com/Zainijaz231",
      color: "bg-gray-100 text-gray-600",
      hoverColor: "hover:bg-gray-200"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally and see my career journey",
      value: "linkedin.com/in/zain-ijaz-2a6886388",
      href: "https://www.linkedin.com/in/zain-ijaz-2a6886388/",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200"
    }
  ]

  const quickActions = [
    {
      title: "💼 Hire Me",
      description: "Looking for a backend developer?",
      action: "Send Email",
      href: "mailto:dreavix.tech@gmail.com?subject=Job Opportunity - Backend Developer&body=Hi Zainijaz,%0D%0A%0D%0AI'm interested in discussing a job opportunity with you.%0D%0A%0D%0AProject Details:%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0ABest regards,",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "🚀 Project Collaboration",
      description: "Have an exciting project idea?",
      action: "Let's Discuss",
      href: "mailto:dreavix.tech@gmail.com?subject=Project Collaboration&body=Hi Zainijaz,%0D%0A%0D%0AI have a project idea I'd like to discuss with you.%0D%0A%0D%0AProject Overview:%0D%0A- Type: %0D%0A- Timeline: %0D%0A- Budget: %0D%0A- Tech Stack: %0D%0A%0D%0ADetails:%0D%0A%0D%0A%0D%0ABest regards,",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "💡 Technical Question",
      description: "Need help with Node.js or React?",
      action: "Ask Question",
      href: "mailto:dreavix.tech@gmail.com?subject=Technical Question&body=Hi Zainijaz,%0D%0A%0D%0AI have a technical question I'd like your help with.%0D%0A%0D%0AQuestion:%0D%0A%0D%0A%0D%0AContext:%0D%0A- Technology: %0D%0A- Current Issue: %0D%0A- What I've tried: %0D%0A%0D%0AThanks for your time!",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="font-mono text-gray-400">&lt;</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Get In Touch</span>
              <span className="font-mono text-gray-400">/&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to build something amazing together? Let's discuss your next project, 
              collaboration opportunity, or just connect as fellow developers.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <div className={`inline-flex items-center px-4 py-2 ${action.color} text-white rounded-lg font-medium transition-colors`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {action.action}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600">
              Choose your preferred method of communication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  {method.value}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">Pakistan</p>
              <p className="text-sm text-gray-500">Remote Worldwide</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
              <p className="text-gray-600">Within 24 hours</p>
              <p className="text-sm text-gray-500">Usually much faster</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
              <p className="text-gray-600">Open to opportunities</p>
              <p className="text-sm text-gray-500">Full-time & Freelance</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MessageSquare className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Languages</h4>
              <p className="text-gray-600">English, Urdu</p>
              <p className="text-sm text-gray-500">Professional fluency</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about working with me</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎯 What type of projects do you work on?
              </h3>
              <p className="text-gray-600">
                I specialize in backend-heavy projects involving API development, database design, 
                and system architecture. I also work on full-stack projects combining Node.js 
                backends with React frontends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🌍 Do you work remotely?
              </h3>
              <p className="text-gray-600">
                Yes! I'm fully set up for remote work and have experience collaborating with 
                distributed teams across different time zones. I use modern collaboration 
                tools and maintain clear communication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🛠️ What's your tech stack?
              </h3>
              <p className="text-gray-600">
                Primary: Node.js, Express.js, MongoDB, PostgreSQL for backend development. 
                Secondary: React, JavaScript, Tailwind CSS for frontend. I also leverage 
                AI tools like ChatGPT and GitHub Copilot for enhanced productivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🤖 How do you use AI in development?
              </h3>
              <p className="text-gray-600">
                I use AI tools like ChatGPT, GitHub Copilot, and Claude AI to accelerate 
                development, debug code, generate boilerplate, and explore new solutions. 
                This helps me deliver high-quality code faster while maintaining best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ⏰ What are your working hours?
              </h3>
              <p className="text-gray-600">
                I'm based in Pakistan (PKT timezone) but flexible with working hours to 
                accommodate client needs. I typically respond to emails within 24 hours 
                and can adjust my schedule for important meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💰 How do you handle project pricing?
              </h3>
              <p className="text-gray-600">
                I offer both hourly rates and fixed-price projects depending on the scope. 
                I provide detailed estimates after understanding your requirements and 
                prefer transparent communication about budget and timeline expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. I'm here to help you 
            build scalable, efficient, and modern web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dreavix.tech@gmail.com?subject=New Project Inquiry&body=Hi Zainijaz,%0D%0A%0D%0AI'd like to discuss a new project with you.%0D%0A%0D%0AProject Details:%0D%0A- Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A- Key Requirements: %0D%0A%0D%0APlease let me know your availability for a discussion.%0D%0A%0D%0ABest regards,"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Project
            </a>
            <a
              href="mailto:dreavix.tech@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Just Say Hi
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}