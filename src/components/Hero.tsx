export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDirection: 'reverse'}}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-mono">
            <span className="text-blue-400 animate-pulse-glow">&lt;</span>
            <span className="gradient-text">PHAN Phoun</span>
            <span className="text-blue-400 animate-pulse-glow">/&gt;</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary-300 mb-8 font-semibold">
            Full Stack Developer
          </h2>
          <p className="text-lg text-secondary-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant digital experiences with modern technologies. 
            Passionate about building scalable web applications that solve real-world problems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
          >
            View Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4H7" />
            </svg>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass-morphism text-white font-semibold rounded-full hover:bg-white/15 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-secondary-400 text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">30+</div>
            <div className="text-secondary-400 text-sm uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-secondary-400 text-sm uppercase tracking-wider">Years</div>
          </div>
        </div>
      </div>
    </section>
  )
}
