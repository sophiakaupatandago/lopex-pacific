// =========================================
// LOADING SCREEN LOGIC
// =========================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Small delay to ensure the animation is seen
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800); 
    }
});

// =========================================
// WEB APP NAVIGATION LOGIC (Existing code below...)
// =========================================

// =========================================
// WEB APP NAVIGATION LOGIC
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    // Mobile Menu Toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenuContainer = document.querySelector('.navbar-menu-container');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarMenuContainer.classList.toggle('mobile-open');
        });
    }

    function switchTab(targetId) {
        sections.forEach(section => section.classList.remove('active-section'));
        navLinks.forEach(link => link.classList.remove('active-link'));

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }

        const activeLink = document.querySelector(`a[href="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active-link');
        }

        if (navbarMenuContainer) {
            navbarMenuContainer.classList.remove('mobile-open');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                switchTab(targetId);
            }
        });
    });
});

const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}