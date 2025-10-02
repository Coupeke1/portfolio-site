const setupHeader = () => {
  const header = document.getElementById('main-header');
  const headerContainer = document.getElementById('header-container');
  const headerContent = document.getElementById('header-content');
  
  if (!header || !headerContainer || !headerContent) return;

  const updateHeader = () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 10) {
      header.classList.add('scrolled');
      headerContainer.classList.add('max-w-5xl', 'mx-auto', 'px-6');
      headerContent.classList.add('rounded-xl', 'px-6', 'shadow-sm');
      header.style.borderColor = 'var(--color-border)';
    } else {
      header.classList.remove('scrolled');
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
