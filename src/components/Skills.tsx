export default function Skills() {
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Vite', 'Figma']
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="glass-morphism rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 capitalize font-mono">
                {category === 'frontend' && '💻 Frontend'}
                {category === 'backend' && '⚙️ Backend'}
                {category === 'tools' && '🛠️ Tools'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-lg font-mono font-semibold text-sm hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
