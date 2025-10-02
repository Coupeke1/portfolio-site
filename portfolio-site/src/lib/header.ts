const setupHeader = () => {
    const header = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const headerContent = document.getElementById('header-content');

    if (!header || !headerContainer || !headerContent) return;

    const updateHeader = () => {
        const currentScroll = window.scrollY;

        header.classList.add(
            'transition',
            'duration-900',
            'delay-200',
            'ease-in-out'
        );

        if (currentScroll > 10) {
            header.classList.add(
                'scrolled',
                'bg-white/60',
                'backdrop-blur-sm',
                'border-b'
            );
            header.classList.remove('bg-transparent', 'backdrop-blur-none');

            headerContainer.classList.add('max-w-5xl', 'mx-auto', 'px-6');
            headerContent.classList.add('rounded-xl', 'px-6', 'shadow-sm');

        } else {
            header.classList.remove(
                'scrolled',
                'bg-white/80',
                'backdrop-blur-md',
                'border-b'
            );
            header.classList.add('bg-transparent', 'backdrop-blur-none');

            headerContainer.classList.remove('max-w-5xl', 'mx-auto', 'px-6');
            headerContent.classList.remove('rounded-xl', 'px-6', 'shadow-sm');

            header.style.borderColor = 'transparent';
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
