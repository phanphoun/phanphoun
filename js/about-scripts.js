// Stats Counter Animation
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to animate numbers
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            if (!stat.classList.contains('animated') && isInViewport(stat)) {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
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

    // Run on load and scroll
    animateNumbers();
    window.addEventListener('scroll', animateNumbers);
});
