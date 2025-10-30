# shadcn/ui Components

Este directorio contiene los componentes de [shadcn/ui](https://ui.shadcn.com/), una biblioteca de componentes de UI construida sobre Radix UI y Tailwind CSS.

## Componentes Instalados

### 🎯 Componentes Básicos

- **Button**: Botones con múltiples variantes y tamaños
- **Input**: Campos de entrada con estilos consistentes
- **Card**: Contenedores con header, content y footer
- **Alert**: Notificaciones y mensajes informativos
- **Badge**: Etiquetas y badges para categorización
- **Avatar**: Componentes de avatar con imagen y fallback
- **Separator**: Líneas divisorias horizontales y verticales
- **Sheet**: Paneles deslizantes laterales

## Uso

### Importación Individual

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

### Importación desde el índice principal

```typescript
import { Button, Card, Badge } from "@/components";
```

## Ejemplos de Uso

### Button

```typescript
<Button variant="default" size="lg">
  Botón Principal
</Button>
<Button variant="outline" size="sm">
  Botón Secundario
</Button>
<Button variant="destructive">
  Botón de Peligro
</Button>
```

### Card

```typescript
<Card>
  <CardHeader>
    <CardTitle>Título de la Tarjeta</CardTitle>
    <CardDescription>Descripción opcional</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenido de la tarjeta</p>
  </CardContent>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

### Badge

```typescript
<Badge variant="default">Por defecto</Badge>
<Badge variant="secondary">Secundario</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructivo</Badge>
```

### Avatar

```typescript
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Usuario" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Personalización

Los componentes de shadcn/ui están completamente personalizables ya que se copian directamente a tu proyecto. Puedes:

1. **Modificar estilos**: Editar las clases de Tailwind en cada componente
2. **Agregar props**: Extender las interfaces TypeScript
3. **Cambiar variantes**: Modificar las variantes existentes o crear nuevas
4. **Integrar con Atomic Design**: Usar estos componentes como base para tus átomos, moléculas y organismos

## Instalación de Nuevos Componentes

Para agregar más componentes de shadcn/ui:

```bash
bunx shadcn@latest add [component-name]
```

Ejemplos:

```bash
bunx shadcn@latest add dialog
bunx shadcn@latest add dropdown-menu
bunx shadcn@latest add form
bunx shadcn@latest add table
```

## Integración con Atomic Design

Los componentes de shadcn/ui pueden ser utilizados como base para crear tus propios componentes siguiendo el patrón Atomic Design:

- **Átomos**: Usar Button, Input, Badge como base
- **Moléculas**: Combinar múltiples componentes de shadcn/ui
- **Organismos**: Crear componentes complejos usando shadcn/ui + lógica personalizada

## Temas y Colores

Los componentes utilizan las variables CSS definidas en `app/globals.css`:

- `--background`: Color de fondo
- `--foreground`: Color del texto
- `--primary`: Color primario
- `--secondary`: Color secundario
- `--muted`: Color atenuado
- `--accent`: Color de acento
- `--destructive`: Color para acciones destructivas

Puedes personalizar estos colores modificando las variables CSS en `globals.css`.
