// Grid (Systems) theme applied globally - no theme selector
(function() {
    const styleElement = document.createElement('style');
    styleElement.id = 'grid-theme-style';
    document.head.appendChild(styleElement);

    // GRID (Systems) Theme - Technical, structured, data-focused
    const gridThemeCSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');

.grid-theme {
    --bg: #f8f9fa !important;
    --fg: #1a202c !important;
    --sidebar-bg: #edf2f7 !important;
    --sidebar-active: #2d3748 !important;
    --links: #3182ce !important;
}

.grid-theme body {
    background-image: 
        linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
        linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px);
    background-size: 24px 24px;
}

.grid-theme .content h1,
.grid-theme .content h2,
.grid-theme .content h3 {
    font-family: 'JetBrains Mono', monospace !important;
    letter-spacing: -0.5px !important;
}

.grid-theme .content h2 {
    border-bottom: 3px solid #3182ce !important;
    padding-bottom: 8px !important;
}

.grid-theme :not(pre) > code {
    font-family: 'JetBrains Mono', monospace !important;
    background: #2d37481a;
    border: 1px solid #3182ce20;
    padding: 2px 6px;
}

.grid-theme pre {
    border-left: 4px solid #3182ce !important;
    background: #1a202c !important;
}

.grid-theme .content a {
    position: relative;
}

.grid-theme .content a::before {
    content: '>';
    position: absolute;
    left: -12px;
    opacity: 0;
    color: #3182ce;
    transition: opacity 0.2s;
}

.grid-theme .content a:hover::before {
    opacity: 1;
}



.grid-theme .cv-link {
    font-family: 'JetBrains Mono', monospace !important;
    border: 1px solid #3182ce;
    padding: 4px 10px;
    background: rgba(49, 130, 206, 0.05);
}

.grid-theme .cv-link:hover {
    background: #3182ce !important;
    color: white !important;
}

/* Hide sidebar */
#mdbook-sidebar {
    display: none !important;
}

#mdbook-menu-bar {
    padding-left: 20px !important;
}

body.sidebar-visible {
    margin-left: 0 !important;
}

/* Remove theme toggle button */
#mdbook-theme-toggle {
    display: none !important;
}

.content {
    max-width: 900px;
    margin: 0 auto;
}
`;

    // Apply Grid theme immediately
    styleElement.innerHTML = gridThemeCSS;
    document.body.classList.add('grid-theme');
})();
