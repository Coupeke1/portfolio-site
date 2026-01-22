const setupHeader = () => {
    const header = document.getElementById('main-header');
    if (!header) return;

    header.classList.add(
        'transition-all',
        'duration-700',
        'ease-[cubic-bezier(0.2,0,0.2,1)]'
    );

    const updateHeader = () => {
        const scrolled = window.scrollY > 10;

        if (scrolled) {
            header.style.maxWidth = '64rem';
            header.style.margin = '0 auto';
            header.style.padding = '0 1.5rem';
            header.style.borderRadius = '0.75rem';
            header.style.background = 'rgba(255,255,255,0.85)';
            header.style.backdropFilter = 'blur(12px)';
            header.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
        } else {
            header.style.maxWidth = '100%';
            header.style.margin = '0';
            header.style.padding = '0 1rem';
            header.style.borderRadius = '0';
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, {passive: true});
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeader);
} else {
    setupHeader();
}

export default setupHeader;
