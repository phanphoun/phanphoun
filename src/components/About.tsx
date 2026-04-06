export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDirection: 'reverse'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-morphism rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 font-mono">Full Stack Developer</h3>
              
              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience
                building scalable web applications. My journey in tech started with a
                curiosity about how things work, which evolved into a career dedicated
                to solving complex problems through elegant code.
              </p>

              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                I specialize in creating responsive, user-centric applications using
                modern technologies like{' '}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg font-mono font-semibold text-sm">React</span>,{' '}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg font-mono font-semibold text-sm">TypeScript</span>,{' '}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg font-mono font-semibold text-sm">Node.js</span>, and{' '}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg font-mono font-semibold text-sm">AWS</span>. I believe
                in writing clean, maintainable code and following best practices to
                ensure long-term project success.
              </p>

              <p className="text-secondary-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community. I'm always eager to learn and grow, and I'm
                excited about opportunities to bring my skills to your team.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="glass-morphism rounded-2xl p-8 border border-white/10">
                <div className="relative">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-48 h-28 bg-secondary-800 border-2 border-secondary-600 rounded-t-lg overflow-hidden">
                        <div className="p-4 space-y-2">
                          <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded animate-typing" style={{width: '80%'}}></div>
                          <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded animate-typing" style={{width: '60%', animationDelay: '0.2s'}}></div>
                          <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded animate-typing" style={{width: '90%', animationDelay: '0.4s'}}></div>
                          <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded animate-typing" style={{width: '70%', animationDelay: '0.6s'}}></div>
                        </div>
                      </div>
                      <div className="w-52 h-2 bg-secondary-600 rounded-b-lg -mt-1"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-8">
                    <div className="relative">
                      <div className="w-8 h-12 bg-gradient-to-b from-amber-500 to-amber-600 rounded-b-lg border-2 border-white/20"></div>
                      <div className="w-10 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-t-full absolute -top-8 left-1 animate-sway"></div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg border-2 border-white/20"></div>
                      <div className="absolute -top-2 left-2 space-y-1">
                        <div className="w-1 h-2 bg-white/30 rounded-full animate-steam-rise"></div>
                        <div className="w-1 h-2 bg-white/30 rounded-full animate-steam-rise" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-1 h-2 bg-white/30 rounded-full animate-steam-rise" style={{animationDelay: '0.6s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-morphism rounded-xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-secondary-400 text-sm font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H15L21 10V18C21 19.1046 20.1046 20 19 20H17Z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-secondary-400 text-sm font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-secondary-400 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
