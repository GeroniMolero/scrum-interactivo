/**
 * Component Loader - Carga componentes HTML dinámicamente
 */
const ComponentLoader = {
    components: {},
    
    async load(name, path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to load ${name}`);
            this.components[name] = await response.text();
            return this.components[name];
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            return '';
        }
    },
    
    async loadMultiple(components) {
        const promises = components.map(({ name, path }) => 
            this.load(name, path)
        );
        await Promise.all(promises);
    },
    
    render(name) {
        return this.components[name] || '';
    },
    
    async init() {
        // Cargar todos los componentes necesarios (desde carpetas de componentes)
        await this.loadMultiple([
            { name: 'navbar', path: 'src/components/navbar/navbar.html' },
            { name: 'inicio', path: 'src/components/inicio/inicio.html' },
            { name: 'que-es', path: 'src/components/que-es/que-es.html' },
            { name: 'roles', path: 'src/components/roles/roles.html' },
            { name: 'eventos', path: 'src/components/eventos/eventos.html' },
            { name: 'presentacion', path: 'src/components/presentacion/presentacion.html' },
            { name: 'caso-estudio', path: 'src/components/caso-estudio/caso-estudio.html' },
            { name: 'footer', path: 'src/components/footer/footer.html' }
        ]);
        
        // Inyectar contenido en el documento
        // Navbar va al principio
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            navContainer.innerHTML = this.render('navbar');
        }
        
        // Componentes principales van en el container
        const container = document.getElementById('component-container');
        if (container) {
            container.innerHTML = 
                this.render('inicio') +
                this.render('que-es') +
                this.render('roles') +
                this.render('eventos') +
                this.render('presentacion') +
                this.render('caso-estudio');
        }
        
        // Footer va al final
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = this.render('footer');
        }
        
        // Inicializar interactividad después de cargar componentes
        initializeAllInteractivity();
    }
};

// Función que se ejecuta desde main.js
function initializeAllInteractivity() {
    initializeRoleDetails();
    initializeEventTabs();
    initializeCaseTabs();
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ComponentLoader.init());
} else {
    ComponentLoader.init();
}

