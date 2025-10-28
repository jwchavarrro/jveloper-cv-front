# Sistema de Componentes - Atomic Design

Este proyecto implementa el patrón **Atomic Design** para organizar y estructurar los componentes de la aplicación de manera escalable y mantenible.

## Estructura de Carpetas

```
components/
├── atoms/           # Componentes básicos e indivisibles
├── molecules/       # Combinaciones de átomos
├── organisms/       # Componentes complejos con funcionalidad
├── templates/       # Plantillas de página
└── index.ts         # Exportaciones principales
```

## Niveles de Atomic Design

### 🔬 Atoms (Átomos)
Componentes básicos e indivisibles que forman la base del sistema de diseño.

- **Button**: Botón con múltiples variantes y tamaños
- **Input**: Campo de entrada con validación y estados
- **Typography**: Texto con diferentes variantes y estilos
- **Icon**: Iconos SVG reutilizables

### 🧬 Molecules (Moléculas)
Combinaciones de átomos que forman componentes funcionales simples.

- **SearchBox**: Campo de búsqueda con botón
- **Card**: Contenedor con título y contenido
- **Modal**: Ventana modal con overlay
- **Alert**: Notificaciones con diferentes tipos

### 🦠 Organisms (Organismos)
Componentes complejos que combinan moléculas y átomos para crear secciones funcionales.

- **Header**: Encabezado de página con navegación y búsqueda
- **Footer**: Pie de página con enlaces y información
- **Navigation**: Sistema de navegación con submenús
- **Sidebar**: Barra lateral para dashboards

### 📄 Templates (Plantillas)
Plantillas de página que definen la estructura general de las páginas.

- **PageTemplate**: Plantilla básica con header y footer
- **DashboardTemplate**: Plantilla para dashboards con sidebar
- **AuthTemplate**: Plantilla para páginas de autenticación

## Uso

### Importación
```typescript
// Importar todos los componentes
import { Button, Card, Header, PageTemplate } from '@/components';

// O importar desde niveles específicos
import { Button } from '@/components/atoms';
import { Card } from '@/components/molecules';
```

### Ejemplo de uso
```typescript
import { PageTemplate, Typography, Button, Card } from '@/components';

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
          Esta es una página de ejemplo usando Atomic Design.
        </Typography>
        <Button variant="primary" className="mt-4">
          Comenzar
        </Button>
      </Card>
    </PageTemplate>
  );
}
```

## Principios de Atomic Design

1. **Atomicidad**: Los átomos son indivisibles y no contienen otros componentes
2. **Composición**: Los niveles superiores se construyen combinando niveles inferiores
3. **Reutilización**: Cada componente es reutilizable en diferentes contextos
4. **Consistencia**: Mantiene coherencia visual y funcional en toda la aplicación
5. **Escalabilidad**: Fácil de mantener y extender conforme crece la aplicación

## Convenciones

- Cada componente tiene su propio archivo `.tsx`
- Los tipos TypeScript se exportan junto con el componente
- Cada nivel tiene su archivo `index.ts` para exportaciones
- Los componentes siguen la convención PascalCase
- Las props siguen la convención camelCase

## Extensión

Para agregar nuevos componentes:

1. **Átomos**: Crear en `atoms/` y exportar en `atoms/index.ts`
2. **Moléculas**: Crear en `molecules/` y exportar en `molecules/index.ts`
3. **Organismos**: Crear en `organisms/` y exportar en `organisms/index.ts`
4. **Templates**: Crear en `templates/` y exportar en `templates/index.ts`

Recuerda actualizar el archivo principal `components/index.ts` si es necesario.
