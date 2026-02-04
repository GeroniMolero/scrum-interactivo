# 🚀 Metodología Scrum - Guía Interactiva

Una aplicación web educativa, moderna y visualmente atractiva para aprender la metodología Scrum de forma práctica e interactiva.

## ✨ Características Principales

### 🎨 Diseño Moderno
- Interfaz limpia y profesional con gradientes modernos
- **Modo claro/oscuro** con toggle animado y efectos de brillo (sol/luna)
- Animaciones suaves y transiciones fluidas
- Totalmente responsive (móvil, tablet, escritorio)
- Paleta de colores azul/verde con temas claro y oscuro

### 🧩 Arquitectura Modular
- Componentes independientes (estilo Angular/React)
- Carga dinámica de componentes con fetch API
- CSS scoped por componente
- Código limpio y mantenible

### 🎯 Contenido Educativo
- **Inicio**: Bienvenida con principios clave de Scrum
- **¿Qué es Scrum?**: Conceptos fundamentales y pilares
- **Roles**: Product Owner, Scrum Master, Equipo de Desarrollo
- **Eventos**: Sprint Planning, Daily Standup, Review, Retrospectiva
- **Presentación**: Diapositivas embebidas de Canva
- **Caso de Estudio Real**: Proyecto E-commerce completo con 4 sprints

### ⌨️ Funcionalidades Interactivas
- Navegación por secciones con enlaces activos
- Detalles expandibles para cada rol
- Tabs interactivos para eventos y caso de estudio
- Atajos de teclado (Alt+1 a Alt+6)
- Animaciones al hacer scroll (Intersection Observer)
- Persistencia del tema elegido (localStorage)

## 📁 Estructura del Proyecto

```
Scrum interactivo/
├── index.html                    # Punto de entrada HTML
├── styles.css                    # Estilos globales y variables CSS
├── package.json                  # Configuración npm/Vite
├── vite.config.js               # Configuración de Vite
│
├── src/
│   ├── js/
│   │   └── main.js              # Lógica principal (carga componentes, navegación, tema)
│   │
│   └── components/              # Componentes modulares
│       ├── navbar/              # Barra de navegación
│       │   ├── navbar.html
│       │   └── navbar.css
│       ├── theme-toggle/        # Switch modo claro/oscuro
│       │   ├── theme-toggle.html
│       │   └── theme-toggle.css
│       ├── inicio/              # Sección de bienvenida
│       ├── que-es/              # Explicación de Scrum
│       ├── roles/               # Roles de Scrum
│       ├── eventos/             # Eventos de Scrum
│       ├── presentacion/        # Iframe de Canva
│       ├── caso-estudio/        # Caso real con sprints
│       └── footer/              # Pie de página
│
├── README.md                    # Este archivo
├── GITHUB_SETUP.md             # Guía de configuración Git
└── Proy2.3 Scrum.pdf           # Documentación de referencia
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Descarga o clona el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo para explorar!

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server

# Con Vite (desarrollo)
npm install
npm run dev
```

Luego abre `http://localhost:8000` o `http://localhost:5173`

### Opción 3: VS Code Live Server
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Alt + 1` | Ir a Inicio |
| `Alt + 2` | Ir a ¿Qué es Scrum? |
| `Alt + 3` | Ir a Roles |
| `Alt + 4` | Ir a Eventos |
| `Alt + 5` | Ir a Presentación |
| `Alt + 6` | Ir a Caso de Estudio |

## 🎨 Sistema de Temas

### Modo Claro
- **Primario**: #1F4E79 (Azul profundo)
- **Secundario**: #32BFA5 (Verde azulado)
- **Medio**: #2F6FB3 (Azul medio)
- **Acento**: #5DADE2 (Azul cielo)

### Modo Oscuro
- **Primario**: #334155 (Slate gris)
- **Secundario**: #1E3A3A (Verde oscuro)
- **Medio**: #3B4558 (Azul grisáceo)
- **Acento**: #3E4A5C (Gris azulado)

### Theme Toggle
- **Sol**: Fondo amarillo (#F5E026) con brillo radiante
- **Luna**: Fondo blanco azulado con luminiscencia suave
- Animaciones de transición suaves
- Efectos de box-shadow para simular luz emitida

## 🏗️ Arquitectura Técnica

### Carga de Componentes
```javascript
ComponentLoader.init()
  → Carga paralela de todos los HTML (fetch)
  → Inyección en contenedores del DOM
  → Inicialización de interactividad
```

### Gestión del Tema
- Detecta preferencia del sistema (`prefers-color-scheme`)
- Persiste en `localStorage`
- Aplica clase `theme-dark` al body
- CSS variables se actualizan automáticamente

### Navegación
- Single Page Application (SPA)
- Cambio de secciones sin recargar
- Clases `.active` en links y secciones
- Scroll suave al cambiar sección

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (contenedor 1400px)
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎓 Contenido Educativo

### Roles en Scrum
- **Product Owner**: Maximiza el valor del producto
- **Scrum Master**: Facilita el proceso y remueve impedimentos
- **Equipo de Desarrollo**: Construye el incremento del producto

### Eventos de Scrum
- **Sprint Planning**: Planificación del sprint (máx 8h)
- **Daily Standup**: Sincronización diaria (15 min)
- **Sprint Review**: Demo del trabajo completado (máx 4h)
- **Sprint Retrospective**: Reflexión y mejora continua (máx 3h)

### Caso de Estudio: E-commerce
- **Duración**: 4 sprints de 2 semanas
- **Equipo**: 7 personas (PO, SM, 4 Dev, 1 QA, 1 Designer)
- **Features**: Catálogo, Carrito, Pagos, Perfiles, Reseñas
- **Resultados**: Métricas reales y lecciones aprendidas

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables, Grid, Flexbox, Animations
- **JavaScript Vanilla**: Sin frameworks, ES6+
- **Vite**: Build tool y dev server
- **Git**: Control de versiones

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de build
```

## 💡 Mejores Prácticas Implementadas

✅ **CSS Variables** para temas dinámicos  
✅ **Componentes modulares** reutilizables  
✅ **Carga asíncrona** para mejor performance  
✅ **Accesibilidad** (atributos ARIA, SR-only text)  
✅ **Código limpio** sin dependencias pesadas  
✅ **Responsive** mobile-first design  
✅ **Animaciones** suaves con Intersection Observer  

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📝 Notas

- **Sin dependencias en runtime**: Solo JavaScript vanilla
- **Funciona offline**: Una vez cargado, no requiere internet
- **Ligero**: < 500KB total (sin contar PDF)
- **Compatible**: Todos los navegadores modernos

## 📚 Referencias

- [Scrum Guide](https://scrumguides.org/) - Guía oficial
- [Scrum.org](https://www.scrum.org/) - Recursos y certificaciones
- Archivo incluido: `Proy2.3 Scrum.pdf`

## 📄 Licencia

Proyecto educativo libre para uso personal y académico.

---

**Hecho con ❤️ para aprender Scrum de forma interactiva**

🌟 ¿Te gusta el proyecto? ¡Dale una estrella en GitHub!

**Hecho con ❤️ para aprender Scrum de forma interactiva**

🌟 ¿Te gusta el proyecto? ¡Dale una estrella en GitHub!