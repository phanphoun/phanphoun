import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/PhounPhan',
            icon: 'fab fa-github',
            color: '#6e5494'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/phoun-phan-6a1b2a1b2/',
            icon: 'fab fa-linkedin-in',
            color: '#0077b5'
        },
        {
            name: 'Email',
            url: 'mailto:phanphoun855@gmail.com',
            icon: 'fas fa-envelope',
            color: '#ea4335'
        }
    ];

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                          className="wave-path"></path>
                </svg>
            </div>
            
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="brand-accent">&lt;</span>
                        <span className="logo-text">PNC</span>
                        <span className="brand-accent">/&gt;</span>
                    </div>
                    
                    <p className="footer-copyright">
                        &copy; {currentYear} Phan Phoun. All rights reserved.
                    </p>
                    
                    <div className="footer-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                                title={link.name}
                                style={{ '': link.color } as React.CSSProperties}
                                data-tooltip={link.name}
                            >   
                                <i className={link.icon}></i>
                                <span className="link-text">{link.name}</span>
                            </a>
                        ))}
                    </div>
                    
                    <div className="footer-cta">
                        <a 
                            href="#contact" 
                            className="cta-button"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Let's Work Together
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}