# Sistema de Componentes - Atomic Design + shadcn/ui

Este proyecto implementa el patrón **Atomic Design** actualizado con las bases de **shadcn/ui** para organizar y estructurar los componentes de la aplicación de manera escalable y mantenible.

## Estructura de Carpetas

```
components/
├── atoms/           # Componentes básicos e indivisibles (actualizados con shadcn/ui)
├── molecules/       # Combinaciones de átomos (estilos de shadcn/ui)
├── organisms/       # Componentes complejos con funcionalidad
├── templates/       # Plantillas de página
├── ui/              # Componentes directos de shadcn/ui
└── index.ts         # Exportaciones principales
```

## Niveles de Atomic Design

### 🔬 Atoms (Átomos) - Actualizados con shadcn/ui

Componentes básicos e indivisibles que forman la base del sistema de diseño, ahora con estilos y utilidades de shadcn/ui.

- **Button**: Botón con variantes de shadcn/ui (default, destructive, outline, secondary, ghost, link)
- **Input**: Campo de entrada con estilos de shadcn/ui y validación
- **Typography**: Texto con variantes mejoradas y colores del sistema de diseño
- **Icon**: Iconos SVG reutilizables con soporte para Lucide React

### 🧬 Molecules (Moléculas) - Con estilos de shadcn/ui

Combinaciones de átomos que forman componentes funcionales simples, actualizados con el sistema de diseño de shadcn/ui.

- **SearchBox**: Campo de búsqueda con botón y estilos mejorados
- **Card**: Contenedor con estilos de shadcn/ui y variantes
- **Modal**: Ventana modal con overlay y animaciones
- **Alert**: Notificaciones con tipos mejorados y soporte para modo oscuro

### 🦠 Organisms (Organismos) - Actualizados con shadcn/ui

Componentes complejos que combinan moléculas y átomos para crear secciones funcionales, con estilos modernos de shadcn/ui.

- **Header**: Encabezado sticky con backdrop blur y navegación mejorada
- **Footer**: Pie de página con layout responsivo y estilos modernos
- **Navigation**: Sistema de navegación con submenús y transiciones
- **Sidebar**: Barra lateral para dashboards con estilos de shadcn/ui

### 📄 Templates (Plantillas)

Plantillas de página que definen la estructura general de las páginas.

- **PageTemplate**: Plantilla básica con header y footer
- **DashboardTemplate**: Plantilla para dashboards con sidebar
- **AuthTemplate**: Plantilla para páginas de autenticación

### 🎨 shadcn/ui Components

Componentes directos de shadcn/ui disponibles para uso inmediato.

- **Button, Card, Input, Alert, Badge, Avatar, Separator, Sheet** y más
- Componentes con estilos profesionales y accesibilidad integrada
- Totalmente personalizables y listos para usar

## Uso

### Importación

```typescript
// Importar todos los componentes (Atomic Design + shadcn/ui)
import { Button, Card, Header, PageTemplate } from "@/components";

// Importar desde niveles específicos
import { Button } from "@/components/atoms"; // Atomic Design
import { Card } from "@/components/molecules"; // Atomic Design
import { Button as ShadcnButton } from "@/components/ui/button"; // shadcn/ui directo
```

### Ejemplo de uso

```typescript
import { PageTemplate, Typography, Button, Card } from '@/components';
import { Badge, Avatar, AvatarImage, AvatarFallback } from '@/components/ui';

export default function HomePage() {
  return (
    <PageTemplate
      header={{
        title: 'Mi Aplicación',
        showSearch: true,
        onSearch: (query) => console.log(query),
      }}
      footer={{
        companyName: 'Mi Empresa',
        year: 2024,
      }}
    >
      <Card title="Bienvenido" className="mb-6">
        <Typography variant="body">
          Esta es una página de ejemplo usando Atomic Design + shadcn/ui.
        </Typography>
        <div className="flex gap-2 mt-4">
          <Button variant="default">Comenzar</Button>
          <Badge variant="secondary">Nuevo</Badge>
        </div>
        <Avatar className="mt-4">
          <AvatarImage src="/avatar.jpg" alt="Usuario" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </Card>
    </PageTemplate>
  );
}
```

## Principios de Atomic Design + shadcn/ui

1. **Atomicidad**: Los átomos son indivisibles y no contienen otros componentes
2. **Composición**: Los niveles superiores se construyen combinando niveles inferiores
3. **Reutilización**: Cada componente es reutilizable en diferentes contextos
4. **Consistencia**: Mantiene coherencia visual y funcional con el sistema de diseño de shadcn/ui
5. **Escalabilidad**: Fácil de mantener y extender conforme crece la aplicación
6. **Modernidad**: Utiliza las mejores prácticas de diseño y accesibilidad de shadcn/ui
7. **Flexibilidad**: Combina la estructura de Atomic Design con la potencia de shadcn/ui

## Convenciones

- Cada componente tiene su propio archivo `.tsx`
- Los tipos TypeScript se exportan junto con el componente
- Cada nivel tiene su archivo `index.ts` para exportaciones
- Los componentes siguen la convención PascalCase
- Las props siguen la convención camelCase
- Utiliza la función `cn()` de shadcn/ui para merge de clases
- Colores y estilos siguen el sistema de diseño de shadcn/ui

## Extensión

Para agregar nuevos componentes:

1. **Átomos**: Crear en `atoms/` y exportar en `atoms/index.ts`
2. **Moléculas**: Crear en `molecules/` y exportar en `molecules/index.ts`
3. **Organismos**: Crear en `organisms/` y exportar en `organisms/index.ts`
4. **Templates**: Crear en `templates/` y exportar en `templates/index.ts`
5. **shadcn/ui**: Usar `bunx shadcn@latest add [component-name]`

### Agregar componentes de shadcn/ui

```bash
# Instalar nuevos componentes
bunx shadcn@latest add dialog
bunx shadcn@latest add dropdown-menu
bunx shadcn@latest add form
bunx shadcn@latest add table
```

Recuerda actualizar el archivo principal `components/index.ts` si es necesario.
