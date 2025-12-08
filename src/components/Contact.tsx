import { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the form data to a backend service
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="contact-info">
                            <h3 className="contact-info-title">Let's Connect</h3>
                            <p className="contact-info-text">
                                I'm always interested in hearing about new projects and opportunities.
                                Feel free to reach out if you'd like to collaborate or just want to say hello!
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:your.email@example.com">phanphoun855@gmail.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📱</div>
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+1234567890">+855  713266899</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Phnom Penh, Cambodia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="#" className="social-link" title="GitHub">
                                    🤡
                                </a>
                                <a href="#" className="social-link" title="LinkedIn">
                                    💼
                                </a>
                                <a href="#" className="social-link" title="Twitter">
                                    🐦
                                </a>
                                <a href="#" className="social-link" title="Portfolio">
                                    🌐
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-100"
                                disabled={submitted}
                            >
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
