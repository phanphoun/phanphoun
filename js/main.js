// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu initializing...');
    
    // 1. Get elements
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;
    
    // 2. Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // 3. Toggle menu function
    function toggleMenu() {
        console.log('Toggling menu');
        const isOpening = !hamburger.classList.contains('active');
        
        // Toggle active class on hamburger
        hamburger.classList.toggle('active');
        
        // Handle menu and overlay
        if (isOpening) {
            // Opening menu
            nav.style.display = 'flex';
            overlay.style.display = 'block';
            
            // Trigger reflow
            void nav.offsetWidth;
            
            // Start animations
            nav.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('menu-open');
            
            // Animate menu items
            document.querySelectorAll('.nav-links li').forEach((item, index) => {
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        } else {
            // Closing menu
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset menu items
            document.querySelectorAll('.nav-links li').forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            
            // Hide after animation
            setTimeout(() => {
                if (!hamburger.classList.contains('active')) {
                    nav.style.display = 'none';
                    overlay.style.display = 'none';
                }
            }, 300);
        }
    }
    
    // 4. Close menu function
    function closeMenu() {
        if (hamburger.classList.contains('active')) {
            toggleMenu();
        }
    }
    
    // 5. Initialize menu items
    function initMenu() {
        document.querySelectorAll('.nav-links li').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'none';
        });
    }
    
    // 6. Event Listeners
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close when clicking overlay
    overlay.addEventListener('click', closeMenu);
    
    // Close when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // 7. Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    }
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
    
    // 8. Initialize menu
    initMenu();
    
    // Set initial display based on screen size
    function setInitialMenuState() {
        if (window.innerWidth <= 768) {
            // Mobile: Hide menu by default
            nav.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            // Desktop: Always show menu
            nav.style.display = 'flex';
            overlay.style.display = 'none';
        }
    }
    
    // Set initial state
    setInitialMenuState();
    
    // Update on resize
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            handleResize();
            setInitialMenuState(); // Update menu visibility on resize
        }, 250);
    });
    
    console.log('Mobile menu initialized');
});

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===== HEADER SCROLL EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
});

// ===== ENHANCED ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .grade-card, .about-card, .value-item, .team-member, .contact-method').forEach(el => {
        observer.observe(el);
    });
});

// ===== MATH ICONS INTERACTION =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.math-icon').forEach(icon => {
        // Add random delay for floating animation
        const delay = Math.random() * 2;
        icon.style.animationDelay = delay + 's';
        
        icon.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.filter = 'drop-shadow(0 0 20px currentColor)';
            this.style.zIndex = '10';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
            this.style.filter = '';
            this.style.zIndex = '';
        });
    });
});
