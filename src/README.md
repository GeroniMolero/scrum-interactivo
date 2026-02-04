# 📦 Arquitectura de Componentes

Este proyecto utiliza una arquitectura modular basada en componentes estilo Angular para mantener el código organizado y escalable.

## 🏗️ Estructura de Directorios

```
src/
├── js/
│   └── main.js              # Script principal (carga dinámica + interactividad)
│
└── components/              # Componentes modulares (carpeta por componente)
    ├── navbar/              # Navegación
    │   ├── navbar.html      # Estructura
    │   ├── navbar.css       # Estilos
    │   └── navbar.js        # Lógica (export initNavbar())
    │
    ├── inicio/              # Sección de bienvenida
    │   ├── inicio.html
    │   ├── inicio.css
    │   └── inicio.js
    │
    ├── que-es/              # Definición de Scrum
    │   ├── que-es.html
    │   ├── que-es.css
    │   └── que-es.js
    │
    ├── roles/               # Roles de Scrum
    │   ├── roles.html
    │   ├── roles.css
    │   └── roles.js
    │
    ├── eventos/             # Eventos de Scrum (tabs)
    │   ├── eventos.html
    │   ├── eventos.css
    │   └── eventos.js
    │
    ├── presentacion/        # Canva embedded
    │   ├── presentacion.html
    │   ├── presentacion.css
    │   └── presentacion.js
    │
    ├── caso-estudio/        # Ejemplo real (4 tabs)
    │   ├── caso-estudio.html
    │   ├── caso-estudio.css
    │   └── caso-estudio.js
    │
    └── footer/              # Pie de página
        ├── footer.html
        ├── footer.css
        └── footer.js
```

## 🎯 Componentes Disponibles

### Componentes Principales

| Componente | Descripción | Interactividad |
|-----------|-------------|-----------------|
| **navbar** | Navegación principal sticky | Click en links, navegación por Alt+N |
| **inicio** | Hero con 4 tarjetas de principios | Animaciones al scroll |
| **que-es** | Definición de Scrum y 3 pilares | Estático con animaciones |
| **roles** | 3 roles con detalles expandibles | Click botones "Ver Detalles" |
| **eventos** | 4 eventos con tabs interactivos | Click en tabs, arrow keys |
| **presentacion** | Canva iframe responsive | Responsive (altura dinámica) |
| **caso-estudio** | Ejemplo real con 4 tabs | Click tabs (Equipo, Backlog, Sprints, Resultados) |
| **footer** | Pie de página | Estático |

## 🔧 Patrón de Componente

Cada componente sigue el mismo patrón:

### HTML (`componente/componente.html`)
```html
<section id="componente" class="section">
    <div class="container">
        <!-- Contenido específico del componente -->
    </div>
</section>
```

### CSS (`componente/componente.css`)
```css
/* Estilos scoped del componente */
.componente-element {
    /* estilos... */
}

@media (max-width: 768px) {
    /* responsive */
}
```

### JavaScript (`componente/componente.js`)
```javascript
export function initComponente() {
    // Lógica e interactividad del componente
    document.querySelectorAll('.selector').forEach(el => {
        el.addEventListener('event', handler);
    });
}
```

## 🚀 Cómo Funciona la Carga

1. **index.html** carga `src/js/main.js`
2. **main.js**:
   - Define `ComponentLoader` que carga HTML via fetch
   - Carga todos los archivos HTML de componentes en paralelo
   - Inyecta contenido en contenedores: `#nav-container`, `#component-container`, `#footer-container`
   - Inicializa todas las funciones de interactividad
   - Configura navegación global y atajos de teclado

## ✅ Ventajas de esta Arquitectura

- **Modular**: Cada componente es independiente
- **Mantenible**: Cambios localizados en una carpeta
- **Escalable**: Fácil agregar nuevos componentes
- **Organizado**: HTML/CSS/JS juntos en una carpeta
- **Reutilizable**: Las funciones `init*()` pueden llamarse múltiples veces
- **Dinámico**: Los componentes se cargan en runtime

## 🆕 Cómo Agregar un Nuevo Componente

### 1. Crear carpeta y archivos
```bash
mkdir src/components/mi-componente
touch src/components/mi-componente/mi-componente.{html,css,js}
```

### 2. Estructura HTML (`mi-componente.html`)
```html
<section id="mi-componente" class="section">
    <div class="container">
        <h2>Mi Componente</h2>
        <!-- Contenido -->
    </div>
</section>
```

### 3. Estilos (`mi-componente.css`)
```css
/* Estilos del componente */
```

### 4. Lógica (`mi-componente.js`)
```javascript
export function initMiComponente() {
    // Interactividad
}
```

### 5. Registrar en `main.js`
En la sección de `ComponentLoader.init()`, agregar:
```javascript
{ name: 'mi-componente', path: 'src/components/mi-componente/mi-componente.html' }
```

Y en `initializeAllInteractivity()`:
```javascript
try {
    initMiComponente();
    console.log('✓ Mi Componente inicializado');
} catch (e) { console.log('Mi Componente aún no cargado'); }
```

## 📚 Referencia de Componentes Complejos

### Tabs (Eventos, Caso-Estudio)
```javascript
export function initEventos() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remover active de todos
            document.querySelectorAll('.tab-btn').forEach(btn => 
                btn.classList.remove('active')
            );
            
            // Agregar al clickeado
            this.classList.add('active');
            
            // Mostrar contenido
            document.querySelector(`[data-tab="${tabName}"].tab-content`)
                .classList.add('active');
        });
    });
}
```

### Detalles Expandibles (Roles)
```javascript
export function initRoles() {
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.classList.toggle('visible');
            
            this.textContent = details.classList.contains('visible') 
                ? 'Ocultar Detalles' 
                : 'Ver Detalles';
        });
    });
}
```

## 🎨 CSS Global

Los estilos globales están en `/styles.css`:
- Variables CSS (colores, fuentes)
- Reset y elementos base (*, body, html)
- Utilidades (.container, .section)
- Animaciones globales (@keyframes)

Cada componente importa sus propios estilos en `index.html`.

## 🔄 Flujo de Ejecución

```
1. index.html se carga
   ↓
2. Carga src/js/main.js
   ↓
3. DOMContentLoaded dispara ComponentLoader.init()
   ↓
4. Carga todos los HTML de componentes con fetch (Promise.all)
   ↓
5. Inyecta contenido en DOM
   ↓
6. Llama initializeAllInteractivity()
   ↓
7. Configura navegación, tabs, botones, etc.
   ↓
8. Página lista e interactiva
```
   ```

3. **Agregar al HTML final en el template**
   ```javascript
   + this.render('mi-componente')
   ```

4. **Agregar al navbar si es una sección principal**
   ```html
   <li><a href="#mi-componente" class="nav-link" data-section="mi-componente">Mi Componente</a></li>
   ```

## Archivo Principal: index-components.html

Este es el archivo HTML principal que carga todos los componentes dinámicamente. Los componentes se cargan mediante fetch y se inyectan en el DOM.

```html
<!-- Contenedor donde se inyectan los componentes -->
<div id="component-container"></div>

<!-- Scripts que cargan todo -->
<script src="src/js/component-loader.js"></script>
<script src="src/js/main.js"></script>
```

## Sistema de Carga

1. `component-loader.js` hace fetch a cada componente HTML
2. Todos los componentes se cargan en paralelo
3. Se inyectan en el DOM cuando están listos
4. `main.js` inicializa la interactividad (tabs, botones, navegación)

## Ventajas de esta Arquitectura

✅ **Modular** - Cada sección es independiente  
✅ **Mantenible** - Cambios aislados por componente  
✅ **Escalable** - Fácil agregar nuevos componentes  
✅ **Reutilizable** - Los componentes pueden duplicarse si es necesario  
✅ **Sin dependencias** - Solo HTML + JS vanilla, sin frameworks pesados  

## Próximos Pasos (Opcional)

- Dividir `styles.css` en archivos SCSS por componente
- Convertir `src/styles/main.scss` en importador de estilos modulares
- Usar Vite para mejor desarrollo (ya está configurado en `vite.config.js`)
- Crear componentes más pequeños y reutilizables

Para usar Vite:
```bash
npm install
npm run dev    # Modo desarrollo
npm run build  # Producción
```
