"use client";

/**
 * @file page.tsx
 * @description Página principal del sitio
 */

import Link from "next/link";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// Importacion de componentes
import {  Typography } from "@/components/atoms";

const Home = () => {
  return (
    <div className="h-screen bg-foreground">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-2 px-5 ">
        <div className="flex items-center gap-4">
          <div className="size-6 bg-background"></div>
          <nav>
            <ul className="flex items-center gap-4">
              <li className="text-white">
                <Link href="/">Archivo</Link>
              </li>
              <li className="text-white">
                <Link href="/about">Editar</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Typography variant="small" color="muted">
            Nombre del archivo
          </Typography>
        </div>
        <div className="flex items-center gap-4 text-white">
          iconos de acciones
        </div>
      </header>
      {/* Main Content */}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={10} maxSize={20} className="">
          one
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <header className="border-b h-12"></header>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={10} maxSize={20}>
          three
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Footer */}
    </div>
  );
};

export default Home;
