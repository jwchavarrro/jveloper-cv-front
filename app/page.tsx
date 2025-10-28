import { PageTemplate, Typography, SearchBox, Alert } from '../components';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';

export default function Home() {
  const handleSearch = (query: string) => {
    console.log('Búsqueda:', query);
  };

  return (
    <PageTemplate
      header={{
        title: 'Mi CV - Atomic Design',
        showSearch: true,
        onSearch: handleSearch,
        navigation: [
          { label: 'Inicio', href: '/', active: true },
          { label: 'Sobre mí', href: '/about' },
          { label: 'Proyectos', href: '/projects' },
          { label: 'Contacto', href: '/contact' },
        ],
        user: {
          name: 'Juan Developer',
          avatar: undefined,
        },
      }}
      footer={{
        companyName: 'Juan Developer',
        year: 2024,
        links: [
          {
            title: 'Enlaces',
            items: [
              { label: 'GitHub', href: 'https://github.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Portfolio', href: '/portfolio' },
            ],
          },
          {
            title: 'Recursos',
            items: [
              { label: 'Documentación', href: '/docs' },
              { label: 'Blog', href: '/blog' },
              { label: 'Tutoriales', href: '/tutorials' },
            ],
          },
        ],
        socialLinks: [
          { name: 'GitHub', href: 'https://github.com', icon: 'github' },
          { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
        ],
      }}
    >
      <div className="max-w-4xl mx-auto py-8">
        {/* Alert de bienvenida */}
        <Alert type="info" title="¡Bienvenido!" className="mb-6">
          Esta página demuestra el sistema de Atomic Design actualizado con las bases de shadcn/ui, implementado en Next.js con TypeScript y Tailwind CSS v4.
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
            Especializado en React, Next.js, TypeScript y Node.js. 
            Apasionado por crear experiencias digitales excepcionales 
            y soluciones escalables.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Ver Proyectos
            </Button>
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
                Desarrollo de interfaces de usuario modernas y responsivas 
                con las últimas tecnologías del ecosistema React.
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
                APIs robustas y escalables con Node.js, bases de datos 
                NoSQL y arquitecturas de microservicios.
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
                Automatización de despliegues, contenedores y 
                infraestructura en la nube para aplicaciones escalables.
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
              onSearch={handleSearch}
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
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Git'].map((skill) => (
                <Badge key={skill} variant="outline" className="p-2 text-center">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparación de Componentes */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Comparación de Componentes</CardTitle>
            <CardDescription>Atomic Design actualizado vs shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Atomic Design */}
              <div className="space-y-4">
                <Typography variant="h5" className="text-center">
                  Atomic Design (Actualizado)
                </Typography>
                <div className="space-y-3">
                  <Button variant="default">Botón Atomic</Button>
                  <Button variant="outline">Outline Atomic</Button>
                  <Button variant="secondary">Secondary Atomic</Button>
                </div>
                <Typography variant="small" color="muted" className="text-center">
                  Componentes personalizados con estilos de shadcn/ui
                </Typography>
              </div>

              {/* shadcn/ui */}
              <div className="space-y-4">
                <Typography variant="h5" className="text-center">
                  shadcn/ui (Directo)
                </Typography>
                <div className="space-y-3">
                  <Button variant="default">Botón shadcn</Button>
                  <Button variant="outline">Outline shadcn</Button>
                  <Button variant="secondary">Secondary shadcn</Button>
                </div>
                <Typography variant="small" color="muted" className="text-center">
                  Componentes originales de shadcn/ui
                </Typography>
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
              Especializado en el desarrollo de aplicaciones web modernas con React, Next.js y TypeScript. 
              Experiencia en arquitecturas de microservicios, bases de datos NoSQL y despliegues en la nube.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
}
