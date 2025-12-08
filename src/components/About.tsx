import './About.css'

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
                                alt="About"
                                className="about-image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <p className="about-text">
                                I'm a passionate full-stack developer with over 5 years of experience
                                building scalable web applications. My journey in tech started with a
                                curiosity about how things work, which evolved into a career dedicated
                                to solving complex problems through elegant code.
                            </p>

                            <p className="about-text">
                                I specialize in creating responsive, user-centric applications using
                                modern technologies like React, TypeScript, Node.js, and AWS. I believe
                                in writing clean, maintainable code and following best practices to
                                ensure long-term project success.
                            </p>

                            <p className="about-text">
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with the
                                developer community. I'm always eager to learn and grow, and I'm
                                excited about the opportunity to bring my skills to your team.
                            </p>

                            <div className="about-stats">
                                <div className="stat">
                                    <h3 className="stat-number">50+</h3>
                                    <p className="stat-label">Projects Completed</p>
                                </div>
                                <div className="stat">
                                    <h3 className="stat-number">30+</h3>
                                    <p className="stat-label">Happy Clients</p>
                                </div>
                                <div className="stat">
                                    <h3 className="stat-number">5+</h3>
                                    <p className="stat-label">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
