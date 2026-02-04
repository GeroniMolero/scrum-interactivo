// ========== NAVEGACIÓN ========== 
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clase active de todos los links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Agregar clase active al link clickeado
        this.classList.add('active');
        
        // Obtener el id de la sección
        const sectionId = this.getAttribute('data-section');
        
        // Cambiar las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Scroll al inicio de la página de forma inmediata
            window.scrollTo(0, 0);
            // También hacer scroll suave después
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
        }
    });
});

// ========== DETALLES DE ROLES ========== 
document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        
        // Alternar clase visible
        details.classList.toggle('visible');
        
        // Cambiar texto del botón
        if (details.classList.contains('visible')) {
            this.textContent = 'Ocultar Detalles';
            this.style.background = '#FF6B6B';
        } else {
            this.textContent = 'Ver Detalles';
            this.style.background = '#4ECDC4';
        }
    });
});

// ========== TABS DE EVENTOS ========== 
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remover clase active de todos los botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        // Remover clase active de todos los contenidos
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Agregar clase active al contenido correspondiente
        document.querySelector(`[data-tab="${tabName}"].tab-content`).classList.add('active');
    });
});

// ========== TABS DEL CASO DE ESTUDIO ========== 
document.querySelectorAll('.case-tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-case-tab');
        
        // Remover clase active de todos los botones
        document.querySelectorAll('.case-tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        // Remover clase active de todos los contenidos
        document.querySelectorAll('.case-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Agregar clase active al contenido correspondiente
        document.querySelector(`[data-case-tab="${tabName}"].case-tab-content`).classList.add('active');
    });
});

// ========== SCROLL SUAVE ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== ANIMACIONES EN SCROLL ========== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todas las tarjetas y elementos
document.querySelectorAll('.hero-card, .role-card, .artifact-card, .event-card, .timeline-item, .team-member, .sprint-card, .result-card, .backlog-item').forEach(el => {
    observer.observe(el);
});

// ========== ESTILOS DE ANIMACIÓN ========== 
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .hero-card, .role-card, .artifact-card, .event-card, .timeline-item, .team-member, .sprint-card, .result-card, .backlog-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// ========== INTERACTIVIDAD ADICIONAL ========== 

// Agregar hover effect a las tarjetas del flujo
document.querySelectorAll('.flow-step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.cursor = 'pointer';
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Contador de elementos (estadísticas)
document.addEventListener('DOMContentLoaded', function() {
    // Animar números
    const animateCounter = (element, target, duration = 2000) => {
        let current = 0;
        const increment = target / (duration / 50);
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            element.textContent = Math.round(current);
        }, 50);
    };

    // Observar cuando las stats box entren al viewport
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                
                // Las stats ya tienen sus valores, solo animarlas visualmente
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// ========== KEYBOARD NAVIGATION ========== 
document.addEventListener('keydown', function(e) {
    // ALT + 1 = Inicio
    // ALT + 2 = ¿Qué es?
    // ALT + 3 = Roles
    // ALT + 4 = Eventos
    // ALT + 5 = Artefactos
    // ALT + 6 = Flujo
    // ALT + 7 = Caso Real
    
    if (e.altKey) {
        const sectionMap = {
            '1': 'inicio',
            '2': 'que-es',
            '3': 'roles',
            '4': 'eventos',
            '5': 'artefactos',
            '6': 'flujo',
            '7': 'caso-estudio'
        };
        
        if (sectionMap[e.key]) {
            const sectionId = sectionMap[e.key];
            
            // Actualizar navegación
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
            
            // Cambiar sección
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll al inicio de la página de forma inmediata
            window.scrollTo(0, 0);
            // También hacer scroll suave después
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
        }
    }
});

// ========== DARK MODE TOGGLE (Opcional) ========== 
let isDarkMode = false;

const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#f0f0f0';
        
        document.querySelectorAll('.section').forEach(section => {
            section.style.backgroundColor = '#222';
        });
        
        document.querySelectorAll('.content-grid, .event-card, .artifact-card, .role-card, .timeline-content').forEach(el => {
            el.style.backgroundColor = '#2a2a2a';
            el.style.color = '#f0f0f0';
        });
        
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.style.backgroundColor = '#F9F9F9';
        document.body.style.color = '#333';
        
        document.querySelectorAll('.section').forEach(section => {
            section.style.backgroundColor = 'transparent';
        });
        
        document.querySelectorAll('.content-grid, .event-card, .artifact-card, .role-card, .timeline-content').forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.color = '#333';
        });
        
        localStorage.setItem('darkMode', 'disabled');
    }
};

// Restaurar preferencia de dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    toggleDarkMode();
}

// ========== BUSCAR EN LA PÁGINA ========== 
const createSearchBox = () => {
    const searchBox = document.createElement('div');
    searchBox.className = 'search-box';
    searchBox.innerHTML = `
        <input type="text" id="searchInput" placeholder="Buscar en Scrum... (presiona Ctrl+F)">
        <div id="searchResults"></div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .search-box {
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 99;
            display: none;
        }

        .search-box.active {
            display: block;
        }

        #searchInput {
            width: 300px;
            padding: 10px;
            border: 2px solid #4ECDC4;
            border-radius: 5px;
            font-size: 1rem;
        }

        #searchResults {
            margin-top: 10px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            max-height: 300px;
            overflow-y: auto;
        }

        .search-result {
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
        }

        .search-result:hover {
            background: #f0f0f0;
        }

        .search-result.highlighted {
            background: #ffffcc;
        }

        @media (max-width: 768px) {
            #searchInput {
                width: 200px;
            }
            
            .search-box {
                right: 10px;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(searchBox);
};

createSearchBox();

// Funcionalidad de búsqueda
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.querySelector('.search-box').classList.toggle('active');
        document.getElementById('searchInput').focus();
    }
});

// ========== COMPARTIR EN REDES SOCIALES ========== 
const addShareButtons = () => {
    const shareButtons = document.createElement('div');
    shareButtons.className = 'share-buttons';
    shareButtons.innerHTML = `
        <button onclick="compartirEnTwitter()" title="Compartir en Twitter">
            <span>𝕏</span> Twitter
        </button>
        <button onclick="compartirEnFacebook()" title="Compartir en Facebook">
            <span>f</span> Facebook
        </button>
        <button onclick="copiarEnlace()" title="Copiar enlace">
            <span>🔗</span> Copiar
        </button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .share-buttons {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
            flex-direction: column;
            z-index: 99;
        }

        .share-buttons button {
            background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .share-buttons button:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .share-buttons button span {
            margin-right: 5px;
            font-weight: bold;
        }

        @media (max-width: 480px) {
            .share-buttons {
                flex-direction: row;
                gap: 5px;
                right: 10px;
                bottom: 10px;
            }

            .share-buttons button {
                padding: 8px 10px;
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(shareButtons);
};

addShareButtons();

// Funciones de compartir
function compartirEnTwitter() {
    const url = window.location.href;
    const text = "Aprende Scrum de forma interactiva y visual 🚀";
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
}

function compartirEnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function copiarEnlace() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('¡Enlace copiado al portapapeles!');
    });
}

// ========== PRINT FRIENDLY ========== 
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// ========== VERIFICAR QUE TODO ESTÁ CARGADO ========== 
console.log('✅ Página Scrum Interactiva cargada correctamente');
console.log('💡 Consejos: Usa ALT+1 a ALT+7 para navegar, Ctrl+F para buscar, Ctrl+P para imprimir');
