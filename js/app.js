// Simple JavaScript for Khmer Math Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme handling
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
        try {
            localStorage.setItem('km:theme', theme);
        } catch (e) {}
    }
    
    // Check for saved theme or system preference
    var savedTheme = null;
    try {
        savedTheme = localStorage.getItem('km:theme');
    } catch (e) {}
    
    var prefersDark = false;
    if (window.matchMedia) {
        prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // Font scale handling
    function applyScale(scale) {
        var clamped = Math.min(1.5, Math.max(0.85, Number(scale) || 1));
        document.documentElement.style.fontSize = (16 * clamped) + 'px';
        try {
            localStorage.setItem('km:fontScale', String(clamped));
        } catch (e) {}
    }
    
    var savedScale = 1;
    try {
        savedScale = parseFloat(localStorage.getItem('km:fontScale') || '1');
    } catch (e) {}
    
    applyScale(isNaN(savedScale) ? 1 : savedScale);

    // Create tool buttons
    function createToolButtons() {
        var container = document.getElementById('toolIcons');
        var mainBtn = document.getElementById('toolMainBtn');
        
        if (!container) {
            container = document.createElement('div');
            container.id = 'toolIcons';
            container.className = 'floating-tool-icons';
            container.style.display = 'none';
            document.body.appendChild(container);
        }
        
        if (!mainBtn) {
            mainBtn = document.createElement('button');
            mainBtn.id = 'toolMainBtn';
            mainBtn.className = 'floating-tool-btn';
            mainBtn.title = 'Tools';
            mainBtn.textContent = '⚙️';
            document.body.appendChild(mainBtn);
        }
        
        if (mainBtn && container && !mainBtn.dataset.bound) {
            mainBtn.addEventListener('click', function() {
                var isHidden = getComputedStyle(container).display === 'none';
                container.style.display = isHidden ? 'flex' : 'none';
            });
            mainBtn.dataset.bound = 'true';
        }
        
        function createToolButton(id, title, html) {
            if (document.getElementById(id)) return null;
            var btn = document.createElement('button');
            btn.className = 'tool-icon';
            btn.id = id;
            btn.title = title;
            btn.innerHTML = html;
            container.appendChild(btn);
            return btn;
        }
        
        var darkBtn = createToolButton('darkToggleBtn', 'ប្ដូរពណ៌ផ្ទៃ (Dark/Light)', '🌓');
        var incBtn = createToolButton('fontIncBtn', 'ពង្រីកអក្សរ', 'A+');
        var decBtn = createToolButton('fontDecBtn', 'បង្រួមអក្សរ', 'A-');
        
        if (darkBtn) {
            darkBtn.addEventListener('click', function() {
                var current = document.body.getAttribute('data-theme');
                var next = current === 'dark' ? 'light' : 'dark';
                applyTheme(next);
            });
        }
        
        if (incBtn) {
            incBtn.addEventListener('click', function() {
                var current = 1;
                try {
                    current = parseFloat(localStorage.getItem('km:fontScale') || '1');
                } catch (e) {}
                applyScale(current + 0.05);
            });
        }
        
        if (decBtn) {
            decBtn.addEventListener('click', function() {
                var current = 1;
                try {
                    current = parseFloat(localStorage.getItem('km:fontScale') || '1');
                } catch (e) {}
                applyScale(current - 0.05);
            });
        }
    }

    // Create back to top button
    function createBackToTop() {
        if (document.getElementById('backToTopBtn')) return;
        
        var btn = document.createElement('button');
        btn.id = 'backToTopBtn';
        btn.title = 'ឡើងលើ';
        btn.textContent = '↑';
        document.body.appendChild(btn);
        
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', function() {
            btn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
    }

    // Initialize answer toggles
    function initAnswerToggles() {
        var answers = document.querySelectorAll('.answer');
        for (var i = 0; i < answers.length; i++) {
            answers[i].style.display = 'none';
        }
        
        var toggles = document.querySelectorAll('.answer-toggle');
        for (var i = 0; i < toggles.length; i++) {
            toggles[i].addEventListener('click', function() {
                var ans = this.nextElementSibling;
                if (ans && ans.classList.contains('answer')) {
                    var show = getComputedStyle(ans).display === 'none';
                    ans.style.display = show ? 'block' : 'none';
                    this.textContent = show ? 'លាក់ចម្លើយ' : 'បង្ហាញចម្លើយ';
                }
            });
        }
    }

    // Mark page as visited
    function markVisited() {
        try {
            var key = 'km:visited:' + window.location.pathname.replace(/\\/g, '/');
            localStorage.setItem(key, '1');
        } catch (e) {}
    }

    // Initialize everything
    createToolButtons();
    createBackToTop();
    markVisited();
    initAnswerToggles();
    
    // Simple keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        var key = (e.key || '').toLowerCase();
        if ((e.ctrlKey || e.metaKey) && key === 'k') {
            e.preventDefault();
            // Search functionality removed for simplicity
        }
    });
});
