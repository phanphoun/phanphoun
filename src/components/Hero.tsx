import './Hero.css'

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero-section">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6 hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="accent-text">Phan Phoun</span>
                        </h1>
                        <p className="hero-subtitle">Full stack Developer</p>
                        <p className="hero-description">
                            Full-Stack Developer with expertise in building modern web applications from concept to deployment.
                            I specialize in creating responsive, performant, and scalable solutions using React, Node.js, and cloud technologies.
                            Passionate about writing clean, efficient code and turning innovative ideas into seamless digital experiences.
                        </p>
                        <div className="hero-cta">
                            <button
                                className="btn btn-primary btn-lg me-3"
                                onClick={() => scrollToSection('projects')}
                            >
                                View My Work
                            </button>
                            <button
                                className="btn btn-outline-light btn-lg"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 hero-image">
                        <div className="profile-image-wrapper">
                            <img
                                src="../public/profile.jpg"
                                alt="Profile"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="scroll-indicator">
                <div className="mouse"></div>
            </div> */}
        </section>
    )
}
