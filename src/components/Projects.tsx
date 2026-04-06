export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management with WebSocket integration',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-morphism rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🚀</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-300"
              >
                View Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4H7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
