// ===== MAIN SCRIPT (Combined & Optimized) =====

// DOM Elements
const dom = {
    hamburger: document.querySelector('.hamburger'),
    navLinks: document.querySelector('.nav-links'),
    header: document.querySelector('header'),
    backToTop: document.querySelector('.back-to-top'),
    statNumbers: document.querySelectorAll('.stat-number')
};

// Mobile Navigation
function initMobileNav() {
    if (!dom.hamburger || !dom.navLinks) return;
    
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    // Toggle mobile menu
    dom.hamburger.addEventListener('click', () => {
        dom.hamburger.classList.toggle('active');
        dom.navLinks.classList.toggle('active');
    });
    
    // Close menu on nav link click
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            dom.hamburger.classList.remove('active');
            dom.navLinks.classList.remove('active');
        });
    });
}

// Sticky Header & Scroll Effects
function initScrollEffects() {
    if (!dom.header) return;
    
    let lastScroll = 0;
    
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        // Toggle scrolled class
        dom.header.classList.toggle('scrolled', currentScroll > 100);
        
        // Hide/show header on scroll
        dom.header.style.transform = (currentScroll > lastScroll && currentScroll > 200) ? 
            'translateY(-100%)' : 'translateY(0)';
        
        // Back to top button
        if (dom.backToTop) {
            dom.backToTop.classList.toggle('active', currentScroll > 300);
        }
        
        lastScroll = currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Stats Counter Animation
function initStatsCounter() {
    if (!dom.statNumbers.length) return;
    
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    const animateNumbers = () => {
        dom.statNumbers.forEach(stat => {
            if (!stat.classList.contains('animated') && isInViewport(stat)) {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateNumber = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.ceil(current);
                        requestAnimationFrame(updateNumber);
                    } else {
                        stat.textContent = target.toLocaleString();
                        stat.classList.add('animate');
                    }
                };
                
                stat.classList.add('animated');
                updateNumber();
            }
        });
    };
    
    // Run on load and scroll (debounced)
    let timeout;
    const handleScroll = () => {
        clearTimeout(timeout);
        timeout = setTimeout(animateNumbers, 100);
    };
    
    animateNumbers();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initScrollEffects();
    initStatsCounter();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('សាររបស់អ្នកត្រូវបានផ្ញើរួចរាល់ហើយ! យើងនឹងឆាក់ទំនាក់ទំនងអ្នកវិញឆាប់ៗនេះ។');
        
        // Reset form
        this.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your newsletter service
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('អរគុណសម្រាប់ការជាវព័ត៌មានរបស់យើង!');
        
        // Reset form
        this.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.grade-card, .feature-card, .about-content, .contact-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.grade-card, .feature-card, .about-content, .contact-content');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger animation on load
    setTimeout(animateOnScroll, 300);
});

window.addEventListener('scroll', animateOnScroll);

// Active navigation link highlighting
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(item => {
        item.querySelector('a').classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === `#${current}`) {
            item.querySelector('a').classList.add('active');
        }
    });
});

// Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Add loading="lazy" to all images
document.querySelectorAll('img').forEach(img => {
    if (!img.loading) {
        img.loading = 'lazy';
    }
});

// Add no-js class to HTML if JavaScript is disabled
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');
