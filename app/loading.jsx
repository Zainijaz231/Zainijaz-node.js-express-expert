export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="text-center">
        {/* Terminal Loading Animation */}
        <div className="terminal-window max-w-md mx-auto mb-8">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-gray-400 text-sm ml-4 font-mono">~/zainijaz</span>
          </div>
          <div className="p-6 font-mono text-left">
            <div className="text-green-400 mb-2">$ loading portfolio...</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">Loading Portfolio...</h2>
          <p className="text-gray-400">Preparing awesome content for you</p>
        </div>
      </div>
    </div>
  )
}