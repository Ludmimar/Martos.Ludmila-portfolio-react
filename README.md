# Portfolio de Ludmila Martos

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS, optimizado para rendimiento, accesibilidad y SEO.

---

## 🔗 Información del proyecto

**Repositorio:** [GitHub](https://github.com/Ludmimar/Martos.Ludmila-portfolio-react)  
**Demo:** [Ver demo](https://martos-ludmila-portfolio-react.vercel.app/)

---

## ⚡ Tecnologías usadas

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![shadcn-ui](https://img.shields.io/badge/shadcn-ui-ff69b4?style=for-the-badge)

---

## ✨ Características implementadas

### 🚀 Performance
- **Lazy Loading**: Componentes pesados cargados bajo demanda con React.lazy + Suspense
- **Optimización de imágenes**: `loading="lazy"` y `decoding="async"` en todas las imágenes
- **Animaciones optimizadas**: Respeta `prefers-reduced-motion` y pausa cuando la página está oculta
- **Tree-shaking**: Configuración optimizada para reducir el bundle size

### ♿ Accesibilidad
- **Landmarks semánticos**: `<main>`, `<header>`, `<nav>`, `<footer>`
- **Skip to content**: Enlace para saltar al contenido principal
- **Focus management**: Modal con manejo correcto del foco y tecla ESC
- **ARIA labels**: Etiquetas descriptivas para elementos interactivos
- **Contraste**: Paleta de colores optimizada para legibilidad

### 🔍 SEO
- **Metadatos completos**: Open Graph, Twitter Cards, theme-color
- **PWA ready**: Manifest.json para instalación como app
- **Sitemap y robots.txt**: Para indexación correcta
- **Estructura semántica**: HTML5 semántico para mejor SEO

### 🏗️ Arquitectura
- **Componentes en inglés**: Nomenclatura unificada y consistente
- **Datos separados**: Arrays de proyectos/skills en archivos independientes
- **TypeScript estricto**: Configuración más estricta para mejor calidad de código
- **Modular**: Estructura clara y mantenible

---

## 🛠 Cómo ejecutar este proyecto

```sh
# 1. Clona el repositorio
git clone https://github.com/Ludmimar/Martos.Ludmila-portfolio-react.git

# 2. Navega al proyecto
cd Martos.Ludmila-portfolio-react

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5. Abre http://localhost:5173 en tu navegador
```

### Scripts disponibles

```sh
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
```

---

## 🧪 Tests

- Framework: **Vitest** + **@testing-library/react** + **jsdom**
- Setup: configurado en `vite.config.ts` (sección `test`) y `vitest.setup.ts`.

Comandos:

```sh
npm run test         # Ejecuta los tests una vez
npm run test:watch   # Corre los tests en modo watch
npm run coverage     # Muestra cobertura
```

Tests incluidos:
- `ProjectModal`: render, cierre con tecla ESC, y no render cuando `project=null`.

---

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/            # Componentes de shadcn/ui
│   ├── Contact.tsx    # Formulario de contacto
│   ├── History.tsx    # Timeline personal
│   ├── Projects.tsx   # Galería de proyectos
│   ├── Skills.tsx     # Habilidades técnicas y blandas
│   ├── Passions.tsx   # Pasiones personales
│   ├── Future.tsx     # Objetivos profesionales
│   └── ...
├── data/              # Datos separados del UI
│   ├── projects.ts    # Array de proyectos
│   └── skills.ts      # Skills y pasiones
├── hooks/             # Custom hooks
├── assets/            # Imágenes y recursos
└── pages/             # Páginas principales
```

---

## ⚙️ CI/CD

Workflow de GitHub Actions: `.github/workflows/ci.yml`
- En cada push/PR a `main` ejecuta: `npm ci`, `npm run lint`, `npm run build`, `npm run test`.
- Node 20 con caché de npm habilitado.

Para activar el workflow, sube el repositorio a GitHub y asegúrate de que la rama sea `main`.

---

## 🎯 Próximas mejoras

- [ ] Tests unitarios con Vitest + React Testing Library
- [ ] Storybook para documentación de componentes
- [ ] CI/CD con GitHub Actions
- [ ] Analytics con consentimiento (Plausible/GA4)
- [ ] Internacionalización (i18n)
- [ ] Optimización de imágenes con WebP/AVIF
- [ ] Service Worker para cache offline

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).