/**
 * Portfolio Manager
 * Sistema que lee proyectos desde la carpeta Desktop/MiPortfolio
 * y los muestra dinámicamente en la sección de portfolio
 */

class PortfolioManager {
    constructor() {
        this.portfolioGrid = document.getElementById('portfolioGrid');
        this.portfolioEmpty = document.getElementById('portfolioEmpty');
        this.portfolioPath = '../MiPortfolio'; // Ruta relativa desde Empresaweb
        this.projects = [];
    }

    /**
     * Inicializa el portfolio
     */
    async init() {
        try {
            await this.loadProjects();
            this.renderProjects();
        } catch (error) {
            console.error('Error al cargar el portfolio:', error);
            this.showEmptyState();
        }
    }

    /**
     * Carga los proyectos - Ahora directamente desde código
     */
    async loadProjects() {
        // PROYECTOS - Edita aquí para agregar/modificar proyectos
        this.projects = [
            {
                name: "TRI INFINITY - Club Deportivo",
                description: "Web moderna con panel de gestión de noticias estilo WordPress. Incluye hosting gratuito en Netlify, Google Analytics configurado y SEO optimizado para búsquedas locales de triatlón.",
                url: "https://triinfinity.netlify.app",
                github: "https://github.com/AITNES21/triinfinity",
                image: "images/tri2.png",
                technologies: ["React", "GitHub", "Netlify", "Google Analytics", "SEO"],
                features: ["100% Responsive", "Panel Admin Incluido", "Carga <1s"]
            },
            {
                name: "Unero - Web Corporativa Premium",
                description: "Plataforma web completa con backend en Express y base de datos PostgreSQL. Diseño premium optimizado para conversión, SEO técnico avanzado y analytics integrados desde el primer día.",
                url: "https://unero.es",
                github: "https://github.com/AITNES21/Unero",
                image: "images/unero.png",
                technologies: ["Vue.js", "Express", "PostgreSQL", "Google Analytics", "SEO"],
                features: ["Dominio Propio", "Backend Escalable", "Base de Datos"]
            },
            {
                name: "FastRecord - Web Inmobiliaria Ibiza",
                description: "Landing page de alta conversión con diseño mobile-first. Secciones optimizadas para captar leads de alquiler y mantenimiento de propiedades. SEO local para Ibiza + formularios de contacto integrados.",
                url: "https://aitnes21.github.io/Fastrecord",
                github: "https://github.com/AITNES21/Fastrecord",
                image: "images/fastrecord.png",
                technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-First", "SEO Optimizado", "Responsive Design"],
                features: ["Mobile-First", "SEO Local", "Optimizado Conversión"]
            },
            {
                name: "Distrito 44 - Portal Inmobiliario",
                description: "Web corporativa para inmobiliaria con diseño profesional y moderno. Showcase de propiedades optimizado, formularios de contacto directo y SEO especializado en búsquedas inmobiliarias locales.",
                url: "https://distrito-44.com",
                github: "https://github.com/AITNES21/distrito44",
                image: "images/distrito.png",
                technologies: ["HTML5", "CSS3", "JavaScript", "Responsive", "SEO"],
                features: ["Diseño Profesional", "SEO Inmobiliario", "Formularios Integrados"]
            }
        ];
    }


    /**
     * Renderiza los proyectos en el grid
     */
    renderProjects() {
        if (!this.projects || this.projects.length === 0) {
            this.showEmptyState();
            return;
        }

        // Limpia el grid
        this.portfolioGrid.innerHTML = '';

        // Renderiza cada proyecto
        this.projects.forEach(project => {
            const card = this.createProjectCard(project);
            this.portfolioGrid.appendChild(card);
        });
    }

    /**
     * Crea una tarjeta de proyecto
     */
    createProjectCard(project) {
        const card = document.createElement('article');
        card.className = 'portfolio-card';

        // Determina si usar iframe o imagen
        const useIframe = project.url && project.url.endsWith('.html');

        card.innerHTML = `
            <div class="portfolio-card__image">
                ${useIframe ?
                    `<iframe src="${project.url}" title="${project.name}"></iframe>` :
                    `<img src="${project.image || this.getPlaceholderImage()}" alt="${project.name}">`
                }
            </div>
            <div class="portfolio-card__content">
                <h3 class="portfolio-card__title">${project.name}</h3>
                <p class="portfolio-card__description">
                    ${project.description || 'Proyecto web profesional'}
                </p>
                ${project.technologies ? `
                    <div class="portfolio-card__tech">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                ` : ''}
                ${project.features ? `
                    <div class="portfolio-card__features">
                        ${project.features.map(feature => `
                            <span class="feature-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                ${feature}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}
                <div class="portfolio-card__links">
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link portfolio-card__link--primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Ver Proyecto
                    </a>
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link portfolio-card__link--secondary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        return card;
    }

    /**
     * Muestra el estado vacío
     */
    showEmptyState() {
        if (this.portfolioGrid) {
            this.portfolioGrid.style.display = 'none';
        }
        if (this.portfolioEmpty) {
            this.portfolioEmpty.style.display = 'block';
        }
    }

    /**
     * Genera una imagen placeholder
     */
    getPlaceholderImage() {
        return 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#E5E7EB"/>
                <text x="50%" y="50%" font-family="Arial" font-size="18" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">
                    Vista Previa del Proyecto
                </text>
            </svg>
        `);
    }

    /**
     * Agrega un proyecto manualmente
     */
    addProject(project) {
        this.projects.push(project);
        this.renderProjects();
    }

    /**
     * Elimina un proyecto
     */
    removeProject(projectName) {
        this.projects = this.projects.filter(p => p.name !== projectName);
        this.renderProjects();
    }

    /**
     * Recarga los proyectos
     */
    async reload() {
        await this.init();
    }
}

// Inicializa el portfolio cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new PortfolioManager();
    portfolio.init();

    // Exporta para uso global
    window.portfolioManager = portfolio;
});

/**
 * CÓMO AGREGAR PROYECTOS:
 *
 * Edita la función loadProjects() arriba y agrega objetos con este formato:
 * {
 *     name: "Nombre del Proyecto",
 *     description: "Descripción breve",
 *     url: "https://url-del-proyecto.com",
 *     github: "https://github.com/usuario/proyecto",  // opcional
 *     image: "img/proyecto.jpg",
 *     technologies: ["HTML", "CSS", "JavaScript"],
 *     features: ["Feature 1", "Feature 2", "Feature 3"]  // opcional
 * }
 */
