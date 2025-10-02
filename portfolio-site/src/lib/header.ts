const setupHeader = () => {
    const header = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const headerContent = document.getElementById('header-content');

    if (!header || !headerContainer || !headerContent) return;

    header.classList.add(
        'transition-all',
        'duration-500',
        'ease-in-out'
    );
    headerContent.classList.add(
        'transition-all',
        'duration-500',
        'ease-in-out'
    );

    const updateHeader = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 10) {
            header.classList.add(
                'scrolled',
                'bg-white/70',
                'backdrop-blur-md',
                'translate-y-0',
                'opacity-100'
            );
            header.classList.remove(
                'bg-transparent',
                'backdrop-blur-none',
                '-translate-y-2',
                'opacity-90'
            );

            headerContainer.classList.add('max-w-5xl', 'mx-auto', 'px-6');
            headerContent.classList.add('rounded-xl', 'px-6', 'shadow-sm');
        } else {
            header.classList.remove(
                'scrolled',
                'bg-white/70',
                'backdrop-blur-md',
                'shadow-md',
                'translate-y-0',
                'opacity-100'
            );
            header.classList.add(
                'bg-transparent',
                'backdrop-blur-none',
                'shadow-none',
                'opacity-100'
            );

            headerContainer.classList.remove('max-w-5xl', 'mx-auto', 'px-6');
            headerContent.classList.remove('rounded-xl', 'px-6', 'shadow-sm');
        }

        header.style.transform = 'translateY(0)';
    };

    updateHeader();

    const scrollOptions: AddEventListenerOptions = { passive: true };
    window.addEventListener('scroll', updateHeader, scrollOptions);

    return () => {
        window.removeEventListener('scroll', updateHeader, scrollOptions);
    };
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeader);
} else {
    setupHeader();
}

export default setupHeader;