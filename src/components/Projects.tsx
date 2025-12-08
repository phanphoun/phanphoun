import { useState } from 'react'
import './Projects.css'

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demoLink: string
    githubLink: string
}

export default function Projects() {
    const [, setSelectedProject] = useState<number | null>(null)

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
            image: 'https://www.spacestem.com/images/platform-ecommerce-uk.webp',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
            technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 3,
            title: 'Analytics Dashboard',
            description:
                'A comprehensive analytics dashboard with data visualization, real-time metrics, and custom reporting capabilities.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 4,
            title: 'Social Media App',
            description:
                'A modern social media platform with user profiles, real-time messaging, and feed algorithms.',
            image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 5,
            title: 'AI Content Generator',
            description:
                'An intelligent content generation tool powered by AI, helping users create high-quality content efficiently.',
            image: 'https://www.rankmovers.com/wp-content/uploads/2022/01/ai-content-creation.png',
            technologies: ['React', 'OpenAI API', 'Node.js', 'TypeScript'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 6,
            title: 'Weather Forecast App',
            description:
                'A beautiful weather application with real-time data, location-based forecasts, and interactive maps.',
            image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
            technologies: ['React', 'OpenWeather API', 'Mapbox', 'Bootstrap'],
            demoLink: '#',
            githubLink: '#',
        },
    ]

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onMouseEnter={() => setSelectedProject(project.id)}
                            onMouseLeave={() => setSelectedProject(null)}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <a href={project.demoLink} className="btn btn-sm btn-light me-2">
                                            Live Demo
                                        </a>
                                        <a href={project.githubLink} className="btn btn-sm btn-outline-light">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
