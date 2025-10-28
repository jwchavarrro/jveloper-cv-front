import Link from "next/link";
import { Typography, SearchBox, Alert, Button, Input, Card } from "../components";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";

 const Home = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Typography variant="h6" className="font-bold">
              Mi CV - Atomic Design
            </Typography>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-foreground">Inicio</Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground/80">Sobre mí</Link>
            <Link href="/projects" className="text-foreground/60 hover:text-foreground/80">Proyectos</Link>
            <Link href="/contact" className="text-foreground/60 hover:text-foreground/80">Contacto</Link>
          </nav>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <SearchBox
                placeholder="Buscar..."
                onSearch={() => {}}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Juan Developer
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
        {/* Alert de bienvenida */}
        <Alert type="info" title="¡Bienvenido!" className="mb-6">
          Esta página demuestra el sistema de Atomic Design actualizado con las
          bases de shadcn/ui, implementado en Next.js con TypeScript y Tailwind
          CSS v4.
        </Alert>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <Typography variant="h1" className="mb-4">
            Juan Developer
          </Typography>
          <Typography variant="h3" color="secondary" className="mb-6">
            Desarrollador Full Stack
          </Typography>
          <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
            Especializado en React, Next.js, TypeScript y Node.js. Apasionado
            por crear experiencias digitales excepcionales y soluciones
            escalables.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Ver Proyectos</Button>
            <Button variant="outline" size="lg">
              Descargar CV
            </Button>
          </div>
        </div>

        {/* Cards Grid con shadcn/ui */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Frontend</Badge>
              </CardTitle>
              <CardDescription>React, Next.js, TypeScript</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body" color="secondary">
                Desarrollo de interfaces de usuario modernas y responsivas con
                las últimas tecnologías del ecosistema React.
              </Typography>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Backend</Badge>
              </CardTitle>
              <CardDescription>Node.js, Express, MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body" color="secondary">
                APIs robustas y escalables con Node.js, bases de datos NoSQL y
                arquitecturas de microservicios.
              </Typography>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">DevOps</Badge>
              </CardTitle>
              <CardDescription>Docker, AWS, CI/CD</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body" color="secondary">
                Automatización de despliegues, contenedores y infraestructura en
                la nube para aplicaciones escalables.
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Search Demo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Búsqueda</CardTitle>
          </CardHeader>
          <CardContent>
            <Typography variant="body" color="secondary" className="mb-4">
              Prueba el componente de búsqueda:
            </Typography>
            <SearchBox
              placeholder="Buscar habilidades, tecnologías..."
              onSearch={() => {}}
              className="max-w-md"
            />
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Habilidades Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "AWS",
                "Docker",
                "Git",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="p-2 text-center"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Herencia de Componentes */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Herencia de Componentes</CardTitle>
            <CardDescription>
              Atomic Design ahora hereda de shadcn/ui con funcionalidades
              adicionales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Atomic Design con herencia */}
              <div className="space-y-4">
                <Typography variant="h5" className="text-center">
                  Atomic Design (Hereda de shadcn/ui)
                </Typography>
                <div className="space-y-3">
                  <Button variant="default">Botón Básico</Button>
                  <Button variant="outline" loading>
                    Botón Cargando
                  </Button>
                  <Button variant="secondary" leftIcon={<span>🚀</span>}>
                    Con Icono Izquierdo
                  </Button>
                  <Button variant="ghost" rightIcon={<span>→</span>}>
                    Con Icono Derecho
                  </Button>
                </div>
                <Typography
                  variant="small"
                  color="muted"
                  className="text-center"
                >
                  Hereda de shadcn/ui + funcionalidades adicionales
                </Typography>
              </div>

              {/* Input con herencia */}
              <div className="space-y-4">
                <Typography variant="h5" className="text-center">
                  Input con Herencia
                </Typography>
                <div className="space-y-3">
                  <Input placeholder="Input básico" label="Nombre" />
                  <Input
                    placeholder="Con icono izquierdo"
                    leftIcon={<span>🔍</span>}
                    label="Búsqueda"
                  />
                  <Input
                    placeholder="Con error"
                    error="Este campo es requerido"
                    label="Email"
                  />
                  <Input
                    placeholder="Con texto de ayuda"
                    helperText="Ingresa tu número de teléfono"
                    label="Teléfono"
                  />
                </div>
                <Typography
                  variant="small"
                  color="muted"
                  className="text-center"
                >
                  Input de shadcn/ui + label, error, iconos
                </Typography>
              </div>
            </div>
            <Separator className="my-6" />

            {/* Comparación de Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h6" className="mb-3 text-center">
                  Card Atomic Design (Personalizada)
                </Typography>
                <Card
                  title="Título Personalizado"
                  subtitle="Subtítulo con Typography personalizado"
                  variant="elevated"
                  hover
                >
                  <Typography variant="body" color="muted">
                    Esta es la estructura personalizada de Atomic Design.
                  </Typography>
                </Card>
              </div>

              <div>
                <Typography variant="h6" className="mb-3 text-center">
                  Card shadcn/ui (Estructura Original)
                </Typography>
                <ShadcnCard className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Título shadcn</CardTitle>
                    <CardDescription>Subtítulo con CardDescription</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Typography variant="body" color="muted">
                      Esta usa la estructura original de shadcn/ui.
                    </Typography>
                  </CardContent>
                </ShadcnCard>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Avatar Section */}
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <Typography variant="h4" className="mb-2">
                  Juan Developer
                </Typography>
                <Typography variant="body" color="muted" className="mb-2">
                  Desarrollador Full Stack con 5+ años de experiencia
                </Typography>
                <div className="flex gap-2">
                  <Badge>Disponible</Badge>
                  <Badge variant="outline">Remoto</Badge>
                </div>
              </div>
            </div>
            <Typography variant="body" color="muted" className="mt-4">
              Especializado en el desarrollo de aplicaciones web modernas con
              React, Next.js y TypeScript. Experiencia en arquitecturas de
              microservicios, bases de datos NoSQL y despliegues en la nube.
            </Typography>
          </CardContent>
        </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Typography variant="h6" className="font-bold">
              Juan Developer
            </Typography>
            <Typography variant="small" color="muted">
              Desarrollando soluciones innovadoras para el futuro digital.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2">
              <Typography variant="small" className="font-medium text-foreground">
                Enlaces
              </Typography>
              <ul className="flex flex-col gap-1">
                <li><a href="https://github.com" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="small" className="font-medium text-foreground">
                Recursos
              </Typography>
              <ul className="flex flex-col gap-1">
                <li><a href="/docs" className="hover:text-foreground transition-colors">Documentación</a></li>
                <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="/tutorials" className="hover:text-foreground transition-colors">Tutoriales</a></li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Typography variant="small" color="muted">
              © 2024 Juan Developer. Todos los derechos reservados.
            </Typography>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
