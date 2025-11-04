# 🖥️ Jveloper CV - Currículum Interactivo Windows 11

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Un currículum vitae interactivo con una interfaz moderna inspirada en **Windows 11**, construido con las últimas tecnologías web. Este proyecto combina un diseño de sistema operativo funcional con información profesional de manera innovadora y atractiva.

## ✨ Características

- 🪟 **Interfaz Windows 11**: Escritorio interactivo con taskbar, menú inicio e iconos
- 📱 **Diseño Responsivo**: Adaptado para dispositivos móviles, tablets y escritorio
- 🎨 **Atomic Design**: Arquitectura de componentes escalable con shadcn/ui
- 🌙 **Modo Oscuro**: Soporte para tema claro/oscuro con next-themes
- ⚡ **Rendimiento Optimizado**: React 19 con compilador de React
- 🧪 **100% Testeado**: Cobertura completa con Jest y Testing Library
- ♿ **Accesible**: Componentes accesibles con Radix UI
- 🔄 **Gestión de Estado**: Jotai para manejo eficiente del estado

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+ o Bun
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jveloper/jveloper-cv-front.git
cd jveloper-cv-front

# Instalar dependencias (con bun)
bun install

# O con npm
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
bun dev
# o
npm run dev

# El sitio estará disponible en http://localhost:3000
```

### Build para Producción

```bash
# Crear build optimizado
bun run build

# Iniciar servidor de producción
bun start
```

## 🧪 Testing

```bash
# Ejecutar tests
bun test

# Ejecutar tests en modo watch
bun test:watch

# Generar reporte de cobertura
bun test:coverage

# Tests para CI
bun test:ci
```

## 🎨 Stack Tecnológico

### Core
- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca UI con React Compiler
- **TypeScript 5** - Tipado estático

### Estilos y UI
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI accesibles y personalizables
- **Radix UI** - Primitivas UI sin estilos
- **Lucide React** - Iconos SVG
- **next-themes** - Manejo de temas claro/oscuro

### Estado y Datos
- **Jotai** - Gestión de estado atómico y primitivo
- **react-resizable-panels** - Paneles redimensionables

### Herramientas de Desarrollo
- **Jest** - Framework de testing
- **Testing Library** - Utilities para testing de componentes
- **ESLint** - Linter de código
- **Prettier** - Formateador de código

## 📁 Estructura del Proyecto

```
jveloper-cv-front/
├── app/                          # App Router de Next.js
│   ├── page.tsx                 # Página principal (Escritorio Windows)
│   ├── layout.tsx               # Layout raíz con providers
│   └── globals.css              # Estilos globales
├── components/
│   ├── atomic-design/           # Componentes con patrón Atomic Design
│   │   ├── atoms/              # Componentes básicos (Button, Input, Typography)
│   │   ├── molecules/          # Combinaciones (Card, Dialog, DropdownMenu)
│   │   └── template/           # Plantillas de página
│   ├── pages/                   # Componentes específicos de páginas
│   │   ├── components/         # Componentes comunes (Program)
│   │   └── windows/            # Sistema de ventanas Windows 11
│   │       ├── fragments/      # Fragmentos (DesktopIcons, Taskbar, StartMenu)
│   │       ├── programs/       # Programas abribles (CV)
│   │       └── utils/          # Tipos y constantes
│   └── ui/                      # Componentes directos de shadcn/ui
├── config/                      # Configuraciones globales
├── context/                     # Contexts de React y Jotai
├── hooks/                       # Custom hooks
├── lib/                         # Utilidades y helpers
└── public/                      # Archivos estáticos

```

## 🏗️ Arquitectura

### Atomic Design

El proyecto implementa **Atomic Design** para una arquitectura de componentes escalable:

- **Atoms** (Átomos): Componentes básicos e indivisibles (Button, Input, Typography)
- **Molecules** (Moléculas): Combinaciones simples de átomos (Card, Dialog)
- **Template** (Plantillas): Estructuras de página reutilizables

Ver [components/README.md](./components/README.md) para más detalles.

### Sistema Windows 11

El escritorio Windows incluye:

- **DesktopIcons**: Iconos arrastrables del escritorio
- **Taskbar**: Barra de tareas inferior con apps ancladas
- **StartMenu**: Menú inicio con aplicaciones
- **Programs**: Ventanas de programas (actualmente: CV)

## 📝 Scripts Disponibles

```bash
bun dev              # Servidor de desarrollo
bun build            # Build de producción
bun start            # Servidor de producción
bun lint             # Ejecutar ESLint
bun format           # Formatear código con Prettier
bun format:check     # Verificar formato
bun test             # Ejecutar tests
bun test:watch       # Tests en modo watch
bun test:coverage    # Tests con cobertura
bun test:ci          # Tests para CI/CD
```

## 🎯 Características del Sistema Windows

### Escritorio
- Iconos interactivos (Mi Equipo, Papelera, Documentos, CV)
- Fondo personalizable
- Gestión de ventanas con drag & resize

### Taskbar
- Apps ancladas
- Indicadores de apps activas
- Botón de inicio

### Menú Inicio
- Búsqueda de aplicaciones
- Apps recientes
- Acceso rápido

### Programa CV
- Vista de currículum interactiva
- Secciones: Experiencia, Educación, Habilidades, Proyectos
- Descarga de CV en PDF

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y es propiedad de jveloper.

## 👨‍💻 Autor

**Jveloper**

- GitHub: [@jveloper](https://github.com/jveloper)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Radix UI](https://www.radix-ui.com/) - Primitivas accesibles
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Jotai](https://jotai.org/) - Gestión de estado

---

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub
