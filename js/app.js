(function () {
    const doc = document;
    const root = doc.documentElement;

    // Theme handling
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
        try { localStorage.setItem('km:theme', theme); } catch { }
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = (function () { try { return localStorage.getItem('km:theme'); } catch { return null; } })();
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // Font scale handling
    function applyScale(scale) {
        const clamped = Math.min(1.5, Math.max(0.85, Number(scale) || 1));
        root.style.fontSize = (16 * clamped) + 'px';
        try { localStorage.setItem('km:fontScale', String(clamped)); } catch { }
    }
    const savedScale = (function () { try { return parseFloat(localStorage.getItem('km:fontScale') || '1'); } catch { return 1; } })();
    applyScale(isNaN(savedScale) ? 1 : savedScale);

    // Add tool buttons if missing
    function ensureToolButtons() {
        let container = doc.getElementById('toolIcons');
        let mainBtn = doc.getElementById('toolMainBtn');
        // Create if missing
        if (!container) {
            container = doc.createElement('div');
            container.id = 'toolIcons';
            container.className = 'floating-tool-icons';
            container.style.display = 'none';
            doc.body.appendChild(container);
        }
        if (!mainBtn) {
            mainBtn = doc.createElement('button');
            mainBtn.id = 'toolMainBtn';
            mainBtn.className = 'floating-tool-btn';
            mainBtn.title = 'Tools';
            mainBtn.textContent = '⚙️';
            doc.body.appendChild(mainBtn);
        }
        // Toggle
        if (mainBtn && container && !mainBtn.__kmBound) {
            mainBtn.addEventListener('click', function () {
                const isHidden = getComputedStyle(container).display === 'none';
                container.style.display = isHidden ? 'flex' : 'none';
            });
            mainBtn.__kmBound = true;
        }
        const addBtn = (id, title, html) => {
            if (doc.getElementById(id)) return null;
            const b = doc.createElement('button');
            b.className = 'tool-icon';
            b.id = id;
            b.title = title;
            b.innerHTML = html;
            container.prepend(b);
            return b;
        };
        const searchBtn = addBtn('searchBtn', 'ស្វែងរកមេរៀន', '🔎');
        const darkBtn = addBtn('darkToggleBtn', 'ប្ដូរពណ៌ផ្ទៃ (Dark/Light)', '🌓');
        const incBtn = addBtn('fontIncBtn', 'ពង្រីកអក្សរ', 'A+');
        const decBtn = addBtn('fontDecBtn', 'បង្រួមអក្សរ', 'A-');
        const progBtn = addBtn('progressBtn', 'វឌ្ឍនភាពសិក្សា', '📚');

        if (darkBtn) darkBtn.addEventListener('click', () => {
            const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
        if (incBtn) incBtn.addEventListener('click', () => {
            const current = (function () { try { return parseFloat(localStorage.getItem('km:fontScale') || '1'); } catch { return 1; } })();
            applyScale((current || 1) + 0.05);
        });
        if (decBtn) decBtn.addEventListener('click', () => {
            const current = (function () { try { return parseFloat(localStorage.getItem('km:fontScale') || '1'); } catch { return 1; } })();
            applyScale((current || 1) - 0.05);
        });
        if (searchBtn) searchBtn.addEventListener('click', toggleSearchOverlay);
        if (progBtn) progBtn.addEventListener('click', toggleProgressOverlay);
    }

    // Global search overlay
    let searchOverlay;
    async function ensureSearchOverlay() {
        if (searchOverlay) return searchOverlay;
        searchOverlay = doc.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.innerHTML = `
      <div class="search-modal" role="dialog" aria-modal="true" aria-label="Global search">
        <div class="search-modal-header">
          <input id="globalSearchInput" class="search-input" type="search" placeholder="ស្វែងរកមេរៀន...">
          <button class="btn" id="searchCloseBtn" aria-label="បិទ">✖</button>
        </div>
        <div class="search-results" id="globalSearchResults"></div>
      </div>`;
        doc.body.appendChild(searchOverlay);
        const closeBtn = doc.getElementById('searchCloseBtn');
        if (closeBtn) closeBtn.addEventListener('click', toggleSearchOverlay);
        searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) toggleSearchOverlay(); });
        await loadSearchIndex();
        const input = doc.getElementById('globalSearchInput');
        if (input) {
            input.addEventListener('input', renderSearch);
            input.focus();
        }
        renderSearch();
        return searchOverlay;
    }

    function computeDataUrl() {
        try {
            const p = window.location.pathname;
            if (p.includes('/lesson/') || p.includes('/grades/')) return '../data/lessons.json';
        } catch { }
        return 'data/lessons.json';
    }

    let lessonsIndex = [];
    async function loadSearchIndex() {
        if (lessonsIndex.length) return;
        try {
            const res = await fetch(computeDataUrl());
            lessonsIndex = await res.json();
        } catch (e) {
            lessonsIndex = Array.from(doc.querySelectorAll('.lesson-card')).map(a => ({
                title: a.textContent.trim(),
                href: a.getAttribute('href'),
                tags: (a.dataset.tags || '').split(' ')
            }));
        }
    }

    function resolveHref(href) {
        if (!href) return '#';
        try {
            const p = window.location.pathname;
            if (p.includes('/lesson/') || p.includes('/grades/')) return href.startsWith('../') ? href : '../' + href;
        } catch { }
        return href;
    }

    function renderSearch() {
        const input = doc.getElementById('globalSearchInput');
        const out = doc.getElementById('globalSearchResults');
        if (!out) return;
        const q = (input && input.value ? input.value : '').toLowerCase().trim();
        const items = !q ? lessonsIndex.slice(0, 20)
            : lessonsIndex.filter(it => (it.title + ' ' + (it.tags || []).join(' ')).toLowerCase().includes(q)).slice(0, 50);
        out.innerHTML = items.map(it => `
      <a class="lesson-card" href="${resolveHref(it.href)}">
        <h4>${it.title}</h4>
        <p>${(it.tags || []).join(', ')}</p>
      </a>`).join('') || '<p class="section-card" style="padding:0.8rem">គ្មានលទ្ធផល</p>';
    }

    async function toggleSearchOverlay() {
        if (!searchOverlay) {
            await ensureSearchOverlay();
            searchOverlay.style.display = 'flex';
            const input = doc.getElementById('globalSearchInput');
            if (input) { input.value = ''; renderSearch(); input.focus(); }
            return;
        }
        const visible = getComputedStyle(searchOverlay).display !== 'none';
        searchOverlay.style.display = visible ? 'none' : 'flex';
        if (!visible) {
            const input = doc.getElementById('globalSearchInput');
            if (input) { input.value = ''; renderSearch(); input.focus(); }
        }
    }

    // Study progress overlay
    let progressOverlay;
    function getVisitedPaths() {
        const paths = [];
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith('km:visited:')) {
                    const p = k.substring('km:visited:'.length);
                    paths.push(p);
                }
            }
        } catch { }
        return Array.from(new Set(paths));
    }

    function titleForPath(p) {
        const norm = p.replace(/^\/*/, '/');
        const found = lessonsIndex.find(it => {
            const href = '/' + (it.href || '').replace(/^\/*/, '');
            return href === norm;
        });
        return found ? found.title : p;
    }

    function renderProgress() {
        const list = document.getElementById('progressList');
        if (!list) return;
        const items = getVisitedPaths();
        if (!items.length) {
            list.innerHTML = '<p class="section-card" style="padding:0.8rem">មិនទាន់មានវឌ្ឍនភាព</p>';
            return;
        }
        list.innerHTML = items.map(p => {
            const title = titleForPath(p);
            return `<a class="lesson-card" href="${p}"><h4>${title}</h4><p>${p}</p></a>`;
        }).join('');
    }

    async function ensureProgressOverlay() {
        if (progressOverlay) return progressOverlay;
        progressOverlay = doc.createElement('div');
        progressOverlay.className = 'search-overlay';
        progressOverlay.innerHTML = `
      <div class="search-modal" role="dialog" aria-modal="true" aria-label="Study progress">
        <div class="search-modal-header">
          <h3 style="margin:0; flex:1">វឌ្ឍនភាពសិក្សា</h3>
          <button class="btn" id="progressClearBtn">សម្អាត</button>
          <button class="btn" id="progressCloseBtn" aria-label="បិទ">✖</button>
        </div>
        <div class="search-results" id="progressList"></div>
      </div>`;
        doc.body.appendChild(progressOverlay);
        const closeBtn = doc.getElementById('progressCloseBtn');
        if (closeBtn) closeBtn.addEventListener('click', toggleProgressOverlay);
        const clearBtn = doc.getElementById('progressClearBtn');
        if (clearBtn) clearBtn.addEventListener('click', () => {
            try {
                const keys = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const k = localStorage.key(i);
                    if (k && k.startsWith('km:visited:')) keys.push(k);
                }
                keys.forEach(k => localStorage.removeItem(k));
            } catch { }
            renderProgress();
        });
        progressOverlay.addEventListener('click', (e) => { if (e.target === progressOverlay) toggleProgressOverlay(); });
        renderProgress();
        return progressOverlay;
    }

    async function toggleProgressOverlay() {
        if (!progressOverlay) {
            await ensureProgressOverlay();
            progressOverlay.style.display = 'flex';
            renderProgress();
            return;
        }
        const visible = getComputedStyle(progressOverlay).display !== 'none';
        progressOverlay.style.display = visible ? 'none' : 'flex';
        if (!visible) renderProgress();
    }

    // Progress tracking
    function markVisited() {
        try {
            const key = 'km:visited:' + window.location.pathname.replace(/\\/g, '/');
            localStorage.setItem(key, '1');
        } catch { }
    }

    function normalizePath(href) {
        try {
            return new URL(href, window.location.origin + window.location.pathname).pathname;
        } catch { return href; }
    }

    function decorateVisitedCards() {
        doc.querySelectorAll('.lesson-card[href]').forEach(a => {
            try {
                const href = a.getAttribute('href');
                const key = 'km:visited:' + normalizePath(href);
                if (localStorage.getItem(key)) {
                    if (!a.querySelector('.visited-badge')) {
                        const b = doc.createElement('span');
                        b.className = 'visited-badge';
                        b.textContent = '✓ បានសិក្សា';
                        a.appendChild(b);
                    }
                }
            } catch { }
        });
    }

    function ensureBackToTop() {
        if (doc.getElementById('backToTopBtn')) return;
        const btn = doc.createElement('button');
        btn.id = 'backToTopBtn';
        btn.title = 'ឡើងលើ';
        btn.textContent = '↑';
        doc.body.appendChild(btn);
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', () => {
            btn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
    }

    function initAnswerToggles() {
        doc.querySelectorAll('.answer').forEach(ans => { ans.style.display = 'none'; });
        doc.querySelectorAll('.answer-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const ans = btn.nextElementSibling;
                if (ans && ans.classList.contains('answer')) {
                    const show = getComputedStyle(ans).display === 'none';
                    ans.style.display = show ? 'block' : 'none';
                    btn.textContent = show ? 'លាក់ចម្លើយ' : 'បង្ហាញចម្លើយ';
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
    ensureToolButtons();
    ensureBackToTop();
    markVisited();
    decorateVisitedCards();
    initAnswerToggles();
    // Keyboard shortcuts: Ctrl/Cmd+K to open search, Escape to close
    doc.addEventListener('keydown', (e)=>{
      const key = (e.key||'').toLowerCase();
      if ((e.ctrlKey || e.metaKey) && key === 'k') { e.preventDefault(); toggleSearchOverlay(); }
      if (key === 'escape' && searchOverlay && searchOverlay.style.display !== 'none') {
        e.preventDefault(); searchOverlay.style.display = 'none';
      }
    });
  });
})();
