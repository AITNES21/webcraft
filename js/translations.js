/**
 * Sistema de Internacionalización (i18n)
 * Soporte para Español e Inglés
 * Orientado a mercado estadounidense
 */

const translations = {
    es: {
        // Navegación
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            portfolio: 'Portfolio',
            about: 'Sobre Nosotros',
            contact: 'Contacto'
        },

        // Hero Section
        hero: {
            title: 'Transformamos Ideas en <span class="highlight">Experiencias Digitales</span> Excepcionales',
            description: 'Creamos páginas web profesionales, elegantes y optimizadas que impulsan tu negocio al siguiente nivel. Diseño web de clase mundial desde Madrid para clientes internacionales.',
            cta: {
                primary: 'Solicitar Presupuesto',
                secondary: 'Ver Portfolio'
            },
            stats: {
                projects: 'Proyectos Completados',
                satisfaction: 'Satisfacción del Cliente',
                support: 'Soporte Dedicado'
            }
        },

        // Beneficios
        benefits: {
            title: '¿Por qué elegirnos?',
            subtitle: 'Nuestra atención al cliente personalizada nos diferencia de las grandes agencias',
            responsive: {
                title: 'Diseño Responsive',
                description: 'Webs perfectamente adaptadas a todos los dispositivos: móvil, tablet y desktop.'
            },
            performance: {
                title: 'Alto Rendimiento',
                description: 'Carga ultrarrápida y optimización técnica para una experiencia de usuario excepcional.'
            },
            seo: {
                title: 'SEO Optimizado',
                description: 'Posicionamiento web profesional para que tus clientes te encuentren fácilmente.'
            },
            support: {
                title: '🌟 Atención al Cliente Excepcional',
                description: 'Trato directo y cercano en todo momento. No eres un número más: respuestas rápidas, revisiones ilimitadas y comunicación constante. Esta es nuestra mayor ventaja frente a las grandes agencias.'
            }
        },

        // Testimonios
        testimonials: {
            title: 'Lo que dicen nuestros clientes',
            testimonial1: {
                text: '"La atención personalizada fue excepcional. Estuvieron disponibles en todo momento para resolver dudas y hacer ajustes. La web del club quedó perfecta y el panel de gestión es muy fácil de usar."',
                name: 'Miguel Ángel Díaz García',
                position: 'Presidente, TRI INFINITY'
            },
            testimonial2: {
                text: '"Lo que más valoro es el trato cercano y profesional. Siempre respondían rápido a mis mensajes y se adaptaron a todas mis peticiones. El resultado final superó mis expectativas."',
                name: 'David Gil Paredes',
                position: 'Gerente, Distrito 44'
            },
            testimonial3: {
                text: '"La diferencia con otras agencias es el trato humano. No eres un número más, realmente se preocupan por tu proyecto. Comunicación constante, revisiones ilimitadas y un servicio 10/10."',
                name: 'Unai Hernando Rodríguez',
                position: 'CEO, Unero'
            }
        },

        // Servicios
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Soluciones web profesionales adaptadas a tus necesidades',
            webDesign: {
                title: 'Diseño y Desarrollo de Páginas Web Profesionales',
                description: 'Creamos sitios web corporativos a medida que combinan elegancia, funcionalidad y rendimiento. Cada proyecto es único y está diseñado específicamente para representar la esencia de tu marca y conectar con tu audiencia objetivo.',
                features: {
                    title: 'Qué incluye:',
                    item1: 'Diseño personalizado y moderno',
                    item2: '100% Responsive (móvil, tablet, desktop)',
                    item3: 'Optimización SEO avanzada',
                    item4: 'Carga ultrarrápida',
                    item5: 'Formularios de contacto integrados',
                    item6: 'Integración con redes sociales',
                    item7: 'Soporte multiidioma',
                    item8: 'Panel de administración (opcional)'
                },
                process: {
                    title: 'Nuestro Proceso:',
                    step1: {
                        title: 'Consultoría Inicial',
                        description: 'Entendemos tu negocio, objetivos y audiencia'
                    },
                    step2: {
                        title: 'Diseño y Prototipo',
                        description: 'Creamos mockups visuales para tu aprobación'
                    },
                    step3: {
                        title: 'Desarrollo',
                        description: 'Programamos tu web con las mejores tecnologías'
                    },
                    step4: {
                        title: 'Lanzamiento',
                        description: 'Publicamos tu web y te damos soporte continuo'
                    }
                },
                cta: 'Solicitar Presupuesto'
            },
            future: {
                title: 'Próximamente más servicios',
                description: 'Estamos trabajando en ampliar nuestra oferta de servicios digitales para ofrecerte soluciones integrales.',
                apps: 'Aplicaciones Móviles',
                ecommerce: 'E-commerce',
                marketing: 'Marketing Digital',
                maintenance: 'Mantenimiento Web'
            }
        },

        // Portfolio
        portfolio: {
            title: 'Nuestro Portfolio',
            subtitle: 'Proyectos que hablan por sí mismos',
            loading: 'Cargando proyectos...',
            empty: 'No hay proyectos en el portfolio todavía.'
        },

        // Sobre Nosotros
        about: {
            title: 'Sobre Nosotros',
            description1: 'Somos un equipo de profesionales apasionados por el diseño web y el desarrollo digital. Con sede en Navalcarnero, Madrid, ofrecemos servicios de creación de páginas web a clientes en toda España y a nivel internacional, especialmente en Estados Unidos.',
            description2: 'Nuestra filosofía se basa en la excelencia, la atención al detalle y el compromiso con cada proyecto. Creemos que cada empresa merece una presencia digital profesional que refleje su identidad y valores únicos.',
            values: {
                title: 'Nuestros Valores',
                excellence: {
                    title: 'Excelencia',
                    description: 'Buscamos la perfección en cada detalle de tu proyecto web.'
                },
                trust: {
                    title: 'Confianza',
                    description: 'Transparencia y comunicación directa en todo momento.'
                },
                global: {
                    title: 'Visión Global',
                    description: 'Experiencia trabajando con clientes internacionales.'
                },
                innovation: {
                    title: 'Innovación',
                    description: 'Utilizamos las últimas tecnologías y tendencias en diseño.'
                }
            },
            mission: {
                title: 'Nuestra Misión',
                description: 'Ayudar a empresas de todos los tamaños a establecer una presencia digital sólida y profesional que impulse su crecimiento y les permita alcanzar sus objetivos de negocio en el mercado global.'
            }
        },

        // Contacto
        contact: {
            title: 'Hablemos de tu Proyecto',
            subtitle: 'Estamos aquí para convertir tu visión en realidad',
            form: {
                name: 'Nombre completo',
                namePlaceholder: 'Tu nombre',
                email: 'Email',
                emailPlaceholder: 'tu@email.com',
                phone: 'Teléfono (opcional)',
                phonePlaceholder: '+34 123 456 789',
                subject: 'Asunto',
                subjectPlaceholder: 'Selecciona un asunto',
                subjectOptions: {
                    newWebsite: 'Nueva página web',
                    redesign: 'Rediseño de web existente',
                    maintenance: 'Mantenimiento web',
                    consultation: 'Consultoría',
                    other: 'Otro'
                },
                message: 'Mensaje',
                messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
                submit: 'Enviar Mensaje',
                success: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
                error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
            },
            info: {
                location: {
                    title: 'Ubicación',
                    address: 'Navalcarnero, Madrid<br>España 28600'
                },
                email: {
                    title: 'Email'
                },
                phone: {
                    title: 'Teléfono'
                },
                hours: {
                    title: 'Horario',
                    schedule: 'Lunes - Viernes: 9:00 - 18:00',
                    timezone: 'Zona horaria: CET (Madrid)'
                }
            }
        },

        // Footer
        footer: {
            description: 'Creamos experiencias digitales profesionales que impulsan tu negocio al siguiente nivel.',
            quickLinks: {
                title: 'Enlaces Rápidos',
                home: 'Inicio',
                services: 'Servicios',
                portfolio: 'Portfolio',
                about: 'Sobre Nosotros',
                contact: 'Contacto'
            },
            services: {
                title: 'Servicios',
                webDesign: 'Diseño Web',
                webDevelopment: 'Desarrollo Web',
                seo: 'SEO',
                responsive: 'Diseño Responsive'
            },
            contact: {
                title: 'Contacto'
            },
            copyright: 'Todos los derechos reservados.',
            privacy: 'Política de Privacidad',
            terms: 'Términos y Condiciones'
        }
    },

    en: {
        // Navigation
        nav: {
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            about: 'About Us',
            contact: 'Contact'
        },

        // Hero Section
        hero: {
            title: 'Transforming Ideas into Exceptional <span class="highlight">Digital Experiences</span>',
            description: 'We create professional, elegant, and optimized websites that take your business to the next level. World-class web design from Madrid for international clients.',
            cta: {
                primary: 'Request Quote',
                secondary: 'View Portfolio'
            },
            stats: {
                projects: 'Completed Projects',
                satisfaction: 'Client Satisfaction',
                support: 'Dedicated Support'
            }
        },

        // Benefits
        benefits: {
            title: 'Why Choose Us?',
            subtitle: 'Our personalized customer service sets us apart from big agencies',
            responsive: {
                title: 'Responsive Design',
                description: 'Websites perfectly adapted to all devices: mobile, tablet, and desktop.'
            },
            performance: {
                title: 'High Performance',
                description: 'Ultra-fast loading and technical optimization for an exceptional user experience.'
            },
            seo: {
                title: 'SEO Optimized',
                description: 'Professional web positioning so your customers can easily find you.'
            },
            support: {
                title: '🌟 Exceptional Customer Service',
                description: 'Direct and close contact at all times. You\'re not just a number: fast responses, unlimited revisions, and constant communication. This is our biggest advantage over large agencies.'
            }
        },

        // Testimonials
        testimonials: {
            title: 'What Our Clients Say',
            testimonial1: {
                text: '"The personalized attention was exceptional. They were available at all times to answer questions and make adjustments. The club website turned out perfect and the management panel is very easy to use."',
                name: 'Miguel Ángel Díaz García',
                position: 'President, TRI INFINITY'
            },
            testimonial2: {
                text: '"What I value most is the close and professional treatment. They always responded quickly to my messages and adapted to all my requests. The final result exceeded my expectations."',
                name: 'David Gil Paredes',
                position: 'Manager, Distrito 44'
            },
            testimonial3: {
                text: '"The difference from other agencies is the human touch. You\'re not just another number, they really care about your project. Constant communication, unlimited revisions, and 10/10 service."',
                name: 'Unai Hernando Rodríguez',
                position: 'CEO, Unero'
            }
        },

        // Services
        services: {
            title: 'Our Services',
            subtitle: 'Professional web solutions tailored to your needs',
            webDesign: {
                title: 'Professional Web Design and Development',
                description: 'We create custom corporate websites that combine elegance, functionality, and performance. Each project is unique and specifically designed to represent your brand\'s essence and connect with your target audience.',
                features: {
                    title: 'What\'s included:',
                    item1: 'Custom and modern design',
                    item2: '100% Responsive (mobile, tablet, desktop)',
                    item3: 'Advanced SEO optimization',
                    item4: 'Ultra-fast loading',
                    item5: 'Integrated contact forms',
                    item6: 'Social media integration',
                    item7: 'Multi-language support',
                    item8: 'Admin panel (optional)'
                },
                process: {
                    title: 'Our Process:',
                    step1: {
                        title: 'Initial Consultation',
                        description: 'We understand your business, goals, and audience'
                    },
                    step2: {
                        title: 'Design and Prototype',
                        description: 'We create visual mockups for your approval'
                    },
                    step3: {
                        title: 'Development',
                        description: 'We code your website with the best technologies'
                    },
                    step4: {
                        title: 'Launch',
                        description: 'We publish your website and provide ongoing support'
                    }
                },
                cta: 'Request Quote'
            },
            future: {
                title: 'More Services Coming Soon',
                description: 'We are working to expand our digital services offering to provide you with comprehensive solutions.',
                apps: 'Mobile Applications',
                ecommerce: 'E-commerce',
                marketing: 'Digital Marketing',
                maintenance: 'Web Maintenance'
            }
        },

        // Portfolio
        portfolio: {
            title: 'Our Portfolio',
            subtitle: 'Projects that speak for themselves',
            loading: 'Loading projects...',
            empty: 'No projects in the portfolio yet.'
        },

        // About Us
        about: {
            title: 'About Us',
            description1: 'We are a team of professionals passionate about web design and digital development. Based in Navalcarnero, Madrid, we offer web creation services to clients throughout Spain and internationally, especially in the United States.',
            description2: 'Our philosophy is based on excellence, attention to detail, and commitment to each project. We believe that every company deserves a professional digital presence that reflects its unique identity and values.',
            values: {
                title: 'Our Values',
                excellence: {
                    title: 'Excellence',
                    description: 'We seek perfection in every detail of your web project.'
                },
                trust: {
                    title: 'Trust',
                    description: 'Transparency and direct communication at all times.'
                },
                global: {
                    title: 'Global Vision',
                    description: 'Experience working with international clients.'
                },
                innovation: {
                    title: 'Innovation',
                    description: 'We use the latest technologies and design trends.'
                }
            },
            mission: {
                title: 'Our Mission',
                description: 'To help businesses of all sizes establish a solid and professional digital presence that drives their growth and allows them to achieve their business goals in the global market.'
            }
        },

        // Contact
        contact: {
            title: 'Let\'s Talk About Your Project',
            subtitle: 'We\'re here to turn your vision into reality',
            form: {
                name: 'Full name',
                namePlaceholder: 'Your name',
                email: 'Email',
                emailPlaceholder: 'your@email.com',
                phone: 'Phone (optional)',
                phonePlaceholder: '+1 123 456 7890',
                subject: 'Subject',
                subjectPlaceholder: 'Select a subject',
                subjectOptions: {
                    newWebsite: 'New website',
                    redesign: 'Existing website redesign',
                    maintenance: 'Web maintenance',
                    consultation: 'Consultation',
                    other: 'Other'
                },
                message: 'Message',
                messagePlaceholder: 'Tell us about your project...',
                submit: 'Send Message',
                success: 'Message sent successfully! We\'ll contact you soon.',
                error: 'There was an error sending the message. Please try again.'
            },
            info: {
                location: {
                    title: 'Location',
                    address: 'Navalcarnero, Madrid<br>Spain 28600'
                },
                email: {
                    title: 'Email'
                },
                phone: {
                    title: 'Phone'
                },
                hours: {
                    title: 'Business Hours',
                    schedule: 'Monday - Friday: 9:00 AM - 6:00 PM',
                    timezone: 'Timezone: CET (Madrid)'
                }
            }
        },

        // Footer
        footer: {
            description: 'We create professional digital experiences that take your business to the next level.',
            quickLinks: {
                title: 'Quick Links',
                home: 'Home',
                services: 'Services',
                portfolio: 'Portfolio',
                about: 'About Us',
                contact: 'Contact'
            },
            services: {
                title: 'Services',
                webDesign: 'Web Design',
                webDevelopment: 'Web Development',
                seo: 'SEO',
                responsive: 'Responsive Design'
            },
            contact: {
                title: 'Contact'
            },
            copyright: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms and Conditions'
        }
    }
};

/**
 * Clase de Internacionalización
 */
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'es';
        this.translations = translations;
    }

    /**
     * Obtiene el idioma almacenado
     */
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    /**
     * Almacena el idioma preferido
     */
    setStoredLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    /**
     * Cambia el idioma
     */
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        this.setStoredLanguage(lang);
        this.updatePageLanguage();
        this.translatePage();
    }

    /**
     * Actualiza el atributo lang del HTML
     */
    updatePageLanguage() {
        document.documentElement.lang = this.currentLang;
    }

    /**
     * Traduce toda la página
     */
    translatePage() {
        // Traduce elementos con data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Traduce placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Actualiza meta tags
        this.updateMetaTags();
    }

    /**
     * Obtiene una traducción por clave
     */
    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];

        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return null;
            }
        }

        return translation;
    }

    /**
     * Actualiza los meta tags según el idioma
     */
    updateMetaTags() {
        const metaTitles = {
            es: 'WebCraft Solutions - Diseño y Desarrollo Web Profesional | Madrid, España',
            en: 'WebCraft Solutions - Professional Web Design & Development | Madrid, Spain'
        };

        const metaDescriptions = {
            es: 'Empresa especializada en diseño y desarrollo de páginas web profesionales. Creamos sitios web elegantes, modernos y optimizados para tu negocio. Servicio internacional.',
            en: 'Company specialized in professional web design and development. We create elegant, modern, and optimized websites for your business. International service.'
        };

        document.title = metaTitles[this.currentLang];

        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.content = metaDescriptions[this.currentLang];
        }
    }

    /**
     * Obtiene el idioma actual
     */
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Inicializa i18n cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18n();
    i18n.translatePage();

    // Configura los botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');

        // Marca el botón activo
        if (lang === i18n.getCurrentLanguage()) {
            btn.classList.add('active');
        }

        // Event listener para cambio de idioma
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            i18n.setLanguage(lang);
        });
    });

    // Exporta para uso global
    window.i18n = i18n;
});
