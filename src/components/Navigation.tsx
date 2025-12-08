import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#hero">
                    <span className="brand-accent">&lt;</span>PNC<span className="brand-accent">/&gt;</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button
                                className="nav-link btn-link"
                                onClick={() => scrollToSection('about')}
                            >
                                About
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link btn-link"
                                onClick={() => scrollToSection('skills')}
                            >
                                Skills
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link btn-link"
                                onClick={() => scrollToSection('projects')}
                            >
                                Projects
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link btn-link"
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
