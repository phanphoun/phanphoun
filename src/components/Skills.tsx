import './Skills.css'

interface Skill {
    name: string
    icon: string
    category: string
}

export default function Skills() {
    const skills: Skill[] = [
        // Frontend
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'TypeScript', icon: '📘', category: 'Frontend' },
        { name: 'JavaScript', icon: '✨', category: 'Frontend' },
        { name: 'HTML/CSS', icon: '🎨', category: 'Frontend' },
        { name: 'Bootstrap', icon: '📦', category: 'Frontend' },
        { name: 'Tailwind CSS', icon: '🌊', category: 'Frontend' },

        // Backend
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'Express', icon: '⚡', category: 'Backend' },
        { name: 'Python', icon: '🐍', category: 'Backend' },
        { name: 'MongoDB', icon: '🍃', category: 'Backend' },
        { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
        { name: 'REST APIs', icon: '🔌', category: 'Backend' },

        // Tools & DevOps
        { name: 'Git', icon: '📚', category: 'Tools' },
        { name: 'Docker', icon: '🐳', category: 'Tools' },
        { name: 'AWS', icon: '☁️', category: 'Tools' },
        { name: 'CI/CD', icon: '🔄', category: 'Tools' },
        { name: 'Webpack', icon: '📦', category: 'Tools' },
        { name: 'Vite', icon: '⚡', category: 'Tools' },
    ]

    const categories = ['Frontend', 'Backend', 'Tools']

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="skills-container">
                    {categories.map((category) => (
                        <div key={category} className="skill-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className="skill-card"
                                            style={{ animationDelay: `${index * 0.12}s` }}
                                        >
                                            <div className="skill-icon">{skill.icon}</div>
                                            <p className="skill-name">{skill.name}</p>
                                        </div>
                                    ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
