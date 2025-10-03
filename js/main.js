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

// Back to top button
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
