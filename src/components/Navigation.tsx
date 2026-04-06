import { useState, useEffect } from 'react'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '💡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-secondary-900/98 to-secondary-800/98 backdrop-blur-lg shadow-lg border-b border-white/10 py-3' 
        : 'bg-gradient-to-r from-secondary-900/95 to-secondary-800/95 backdrop-blur-lg border-b border-white/10 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            className="font-mono text-xl sm:text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
          >
            <span className="text-blue-400 font-black animate-pulse-glow">&lt;</span>
            <span className="gradient-text font-extrabold">PHAN Phoun</span>
            <span className="text-blue-400 font-black animate-pulse-glow">/&gt;</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id
                    ? 'nav-link-active text-white'
                    : 'text-secondary-400 hover:text-white hover:bg-blue-500/10'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="flex items-center gap-2 relative z-10">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <button
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 glass-morphism rounded-lg transition-all duration-300 ${
              isOpen ? 'bg-white/15' : 'hover:bg-white/15 hover:scale-105'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 my-1 ${
              isOpen ? 'opacity-0 translate-x-2' : ''
            }`}></span>
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>

          <div className={`lg:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-secondary-900/98 to-secondary-800/98 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}>
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-medium text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'nav-link-active text-white'
                      : 'text-secondary-400 hover:text-white hover:bg-blue-500/10 hover:translate-x-2'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="text-xl w-8 text-center">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
