export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PhounPhan',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 2.291-1.23 3.297-1.23.957 4.765-1.589 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/phoun-phan-6a1b2a1b2/',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      name: 'Email',
      url: 'mailto:phanphoun855@gmail.com',
      icon: 'M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.517-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDirection: 'reverse'}}></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-400 font-black font-mono font-bold">&lt;</span>
                <span className="gradient-text font-black font-mono font-extrabold text-2xl">PHAN Phoun</span>
                <span className="text-blue-400 font-black font-mono font-bold">/&gt;</span>
              </div>
              <p className="text-secondary-300 text-lg leading-relaxed max-w-md">
                Full Stack Developer crafting elegant digital experiences with modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Connect</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                      title={link.name}
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d={link.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Get In Touch</h3>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Let's Work Together
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4H7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-400 text-sm">
                &copy; {currentYear} Phan Phoun. All rights reserved.
              </p>
              <p className="text-secondary-400 text-sm">
                Made with <span className="text-red-500 animate-pulse">♥</span> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
