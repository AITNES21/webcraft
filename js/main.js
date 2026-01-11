/**
 * WebCraft Solutions - JavaScript Principal
 * Funcionalidad general de la página web
 */

// ===== NAVEGACIÓN =====
class Navigation {
    constructor() {
        this.header = document.querySelector('.header');
        this.navMenu = document.getElementById('navMenu');
        this.navToggle = document.getElementById('navToggle');
        this.navLinks = document.querySelectorAll('.nav__link');

        this.init();
    }

    init() {
        // Toggle menú móvil
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }

        // Cerrar menú al hacer click en un link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });

        // Scroll efecto header
        window.addEventListener('scroll', () => this.handleScroll());

        // Active link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());

        // Smooth scroll para links internos
        this.setupSmoothScroll();
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');

        // Animación del hamburger
        const hamburger = this.navToggle.querySelector('.hamburger');
        if (this.navMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
        } else {
            hamburger.style.background = '';
        }
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        const hamburger = this.navToggle.querySelector('.hamburger');
        hamburger.style.background = '';
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            this.header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ===== FORMULARIO DE CONTACTO =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messageDiv = document.getElementById('formMessage');

        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Obtiene los datos del formulario
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validación básica
        if (!this.validateForm(data)) {
            return;
        }

        // Muestra mensaje de carga
        this.showMessage('Enviando mensaje...', 'info');

        try {
            // Aquí iría la llamada al backend
            // Por ahora, simulamos el envío
            await this.sendFormData(data);

            // Muestra mensaje de éxito
            const successMessage = window.i18n ?
                window.i18n.getTranslation('contact.form.success') :
                '¡Mensaje enviado con éxito! Te contactaremos pronto.';

            this.showMessage(successMessage, 'success');
            this.form.reset();

            // Opcional: Enviar a Google Sheets, Formspree, etc.
            // this.sendToFormspree(data);

        } catch (error) {
            console.error('Error:', error);

            const errorMessage = window.i18n ?
                window.i18n.getTranslation('contact.form.error') :
                'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';

            this.showMessage(errorMessage, 'error');
        }
    }

    validateForm(data) {
        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showMessage('Por favor, introduce un email válido.', 'error');
            return false;
        }

        // Validación de campos requeridos
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showMessage('Por favor, completa todos los campos requeridos.', 'error');
            return false;
        }

        return true;
    }

    async sendFormData(data) {
        // Simulación de envío (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Aquí iría la lógica real de envío
        // Ejemplo con fetch:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error al enviar el formulario');
        }

        return await response.json();
        */

        // Log para desarrollo
        console.log('Datos del formulario:', data);

        return { success: true };
    }

    // Método opcional para enviar a Formspree u otros servicios
    async sendToFormspree(data) {
        const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // Reemplazar con tu ID

        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error al enviar a Formspree');
        }

        return await response.json();
    }

    showMessage(message, type) {
        this.messageDiv.textContent = message;
        this.messageDiv.className = `form-message ${type}`;
        this.messageDiv.style.display = 'block';

        // Ocultar mensaje después de 5 segundos
        if (type === 'success') {
            setTimeout(() => {
                this.messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// ===== SCROLL TO TOP =====
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollTopBtn');

        if (this.button) {
            this.init();
        }
    }

    init() {
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => this.toggleVisibility());

        // Click para volver arriba
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===== ANIMACIONES AL SCROLL =====
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        // Crea el observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, this.observerOptions);

        // Observa elementos
        const elements = document.querySelectorAll(
            '.benefit-card, .testimonial-card, .portfolio-card, .service-main, .value-item'
        );

        elements.forEach(el => {
            observer.observe(el);
        });
    }
}

// ===== UTILIDADES =====
class Utils {
    static updateCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    static initExternalLinks() {
        // Agrega rel="noopener noreferrer" a links externos
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
            }
        });
    }

    static handleImageErrors() {
        // Manejo de errores de imágenes
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml,' + encodeURIComponent(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="300" fill="#E5E7EB"/>
                        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9CA3AF"
                              text-anchor="middle" dominant-baseline="middle">
                            Imagen no disponible
                        </text>
                    </svg>
                `);
            });
        });
    }

    static initLazyLoading() {
        // Lazy loading para iframes del portfolio
        const iframes = document.querySelectorAll('iframe[data-src]');

        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                    observer.unobserve(iframe);
                }
            });
        };

        const observer = new IntersectionObserver(lazyLoad, {
            rootMargin: '100px'
        });

        iframes.forEach(iframe => observer.observe(iframe));
    }
}

// ===== PERFORMANCE =====
class Performance {
    static optimizeImages() {
        // Agrega loading="lazy" a todas las imágenes
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }

    static prefetchPages() {
        // Prefetch para páginas importantes
        const prefetchLinks = [
            '/servicios',
            '/portfolio',
            '/contacto'
        ];

        prefetchLinks.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
        });
    }
}

// ===== ANALYTICS (opcional) =====
class Analytics {
    static trackEvent(category, action, label) {
        // Google Analytics o similar
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }

        console.log('Event tracked:', { category, action, label });
    }

    static trackFormSubmission() {
        this.trackEvent('Contact', 'Submit', 'Contact Form');
    }

    static trackPortfolioClick(projectName) {
        this.trackEvent('Portfolio', 'Click', projectName);
    }

    static trackLanguageChange(language) {
        this.trackEvent('Language', 'Change', language);
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 WebCraft Solutions - Inicializando...');

    // Inicializa componentes
    const navigation = new Navigation();
    const contactForm = new ContactForm();
    const scrollToTop = new ScrollToTop();
    const scrollAnimations = new ScrollAnimations();

    // Utilidades
    Utils.updateCurrentYear();
    Utils.initExternalLinks();
    Utils.handleImageErrors();
    Utils.initLazyLoading();

    // Performance
    Performance.optimizeImages();

    console.log('✅ WebCraft Solutions - Listo!');
});

// ===== EVENTOS GLOBALES =====
window.addEventListener('load', () => {
    // Oculta el loader si existe
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// Manejo de errores globales
window.addEventListener('error', (e) => {
    console.error('Error global:', e.error);
    // Aquí podrías enviar el error a un servicio de logging
});

// ===== EXPORTAR PARA USO GLOBAL =====
window.WebCraft = {
    Navigation,
    ContactForm,
    ScrollToTop,
    ScrollAnimations,
    Utils,
    Performance,
    Analytics
};
