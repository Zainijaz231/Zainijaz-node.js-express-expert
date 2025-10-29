import {
  Server,
  Database,
  Code2,
  Zap,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const skills = {
  backend: [
    { name: 'Node.js', icon: Server, level: 90 },
    { name: 'Express.js', icon: Zap, level: 85 },
    { name: 'MongoDB', icon: Database, level: 80 },
    { name: 'PostgreSQL', icon: Database, level: 75 },
    { name: 'REST APIs', icon: Globe, level: 90 },
    { name: 'GraphQL', icon: Layers, level: 70 },
  ],
  frontend: [
    { name: 'React', icon: Code2, level: 70 },
    { name: 'JavaScript', icon: Code2, level: 85 },
    { name: 'Tailwind CSS', icon: Layers, level: 75 },
    { name: 'HTML/CSS', icon: Globe, level: 80 },
  ],
  ai_tools: [
    { name: 'ChatGPT', icon: Zap, level: 90 },
    { name: 'GitHub Copilot', icon: Code2, level: 85 },
    { name: 'Claude AI', icon: Database, level: 80 },
    { name: 'AI-Assisted Coding', icon: Terminal, level: 95 },
  ],
  tools: [
    { name: 'Git', icon: GitBranch, level: 85 },
    { name: 'VS Code', icon: Terminal, level: 90 },
    { name: 'Postman', icon: Server, level: 80 },
    { name: 'Linux', icon: Terminal, level: 75 },
  ]
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Terminal Window */}
            <div className="terminal-window max-w-4xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">~/zainijaz</span>
              </div>
              <div className="p-6 font-mono text-left">
                <div className="text-green-400 mb-2">$ whoami</div>
                <div className="text-white mb-4">Zainijaz - Backend Developer</div>
                <div className="text-green-400 mb-2">$ cat skills.json</div>
                <div className="text-gray-300 text-sm">
                  <span className="text-blue-400">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-yellow-300">"primary"</span>: <span className="text-green-300">["Node.js", "Express.js", "MongoDB", "REST APIs"]</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-300">"secondary"</span>: <span className="text-green-300">["React", "JavaScript", "Frontend"]</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-300">"ai_tools"</span>: <span className="text-green-300">["ChatGPT", "GitHub Copilot", "AI-Coding"]</span>,<br />
                  &nbsp;&nbsp;<span className="text-yellow-300">"projects"</span>: <span className="text-green-300">["E-Blog", "Todo-List", "Currency-Converter", "AuroraPass"]</span><br />
                  <span className="text-blue-400">{"}"}</span>
                </div>
                <div className="text-green-400 mt-4 typing-animation">$ ready_to_code --always</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="font-mono text-gray-400">&lt;</span>
              <span className="gradient-text">Zainijaz</span>
              <span className="font-mono text-gray-400">/&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Backend-focused JavaScript developer with 1+ year of experience building scalable server-side applications
              and crafting clean, efficient APIs. I leverage AI tools like ChatGPT and GitHub Copilot to enhance productivity
              while maintaining code quality. I also have frontend skills in React.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Code2 className="mr-2 h-4 w-4" />
                View My Code
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors"
              >
                <Terminal className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate backend developer with 1+ year of experience building
                  scalable web applications. My primary expertise lies in Node.js and Express.js,
                  where I focus on creating robust server-side architectures and efficient APIs.
                </p>
                <p>
                  While backend development is my main focus, I also have secondary skills in React
                  for frontend development. I believe in leveraging AI tools like ChatGPT, GitHub Copilot,
                  and Claude AI to enhance productivity and write better code faster, while maintaining
                  high quality and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new AI tools, learning about emerging
                  technologies, and building projects that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  1+ year of backend development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Primary: Node.js & Express.js backend development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Secondary: React & frontend development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  AI-Enhanced: ChatGPT, GitHub Copilot, Claude AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Experience with both SQL & NoSQL databases
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Built projects: E-Blog, Todo List, Currency Converter, AuroraPass
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              <span className="text-gray-400">//</span> Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300">
              My technical toolkit for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Backend Skills */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-primary-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Server className="mr-2 h-5 w-5 text-green-400" />
                <span className="font-mono">Backend</span>
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-green-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Code2 className="mr-2 h-5 w-5 text-blue-400" />
                <span className="font-mono">Frontend</span>
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-blue-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                <span className="font-mono">AI Tools</span>
              </h3>
              <div className="space-y-4">
                {skills.ai_tools.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-yellow-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Terminal className="mr-2 h-5 w-5 text-purple-400" />
                <span className="font-mono">Tools</span>
              </h3>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-purple-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}