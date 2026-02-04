# Arquitectura de Componentes

Este proyecto utiliza una arquitectura basada en componentes tipo Angular para mantener el código organizado y modular.

## Estructura de Directorios

```
src/
├── components/          # Componentes HTML individuales
│   ├── inicio.html
│   ├── que-es.html
│   ├── roles.html
│   ├── eventos.html
│   ├── presentacion.html
│   ├── caso-estudio.html
│   ├── navbar.html
│   └── footer.html
├── styles/             # Estilos SCSS
│   └── (a futuro: dividir estilos por componente)
├── js/                 # JavaScript modular
│   ├── component-loader.js  # Cargador dinámico de componentes
│   └── main.js              # Lógica de interactividad
└── README.md          # Este archivo
```

## Componentes Disponibles

### Componentes Principales
- **inicio.html** - Sección de bienvenida con tarjetas de principios
- **que-es.html** - Definición de Scrum y sus pilares
- **roles.html** - Los 3 roles principales de Scrum
- **eventos.html** - Los 4 eventos de Scrum con tabs interactivos
- **presentacion.html** - Presentación embebida de Canva
- **caso-estudio.html** - Ejemplo real con 4 tabs (Equipo, Backlog, Sprints, Resultados)

## Cómo Agregar un Nuevo Componente

1. **Crear el archivo HTML en `src/components/`**
   ```html
   <!-- mi-componente.html -->
   <section id="mi-componente" class="section">
       <div class="container">
           <!-- Contenido -->
       </div>
   </section>
   ```

2. **Registrar en `component-loader.js`**
   ```javascript
   { name: 'mi-componente', path: 'src/components/mi-componente.html' }
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
