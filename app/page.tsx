/**
 * @file page.tsx
 * @description Página principal del sitio - Escritorio Windows 11
 * @module app/page
 */

"use client";

import { useState } from "react";

// Import of components custom
import { CVProgram } from "@/components/pages/windows/programs";
import { DesktopIcons, Taskbar, StartMenu } from "@/components/pages/windows";

/**
 * @file page.tsx
 * @description Página principal del sitio - Escritorio Windows 11
 */

const DesktopWindows = () => {
  // Estados generales
  const [showStartMenu, setShowStartMenu] = useState<boolean>(false);

  return (
    <>
      <CVProgram />
      <div className="relative h-screen overflow-hidden bg-linear-to-r from-slate-900 to-slate-700">
        {/* Fondo de escritorio*/}
        <section className="absolute inset-0 opacity-30">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: ``,
              backgroundRepeat: "cover",
            }}
          />
        </section>

        {/* Iconos del escritorio */}
        <DesktopIcons />

        {/* Barra de tareas */}
        <Taskbar showStartMenu={showStartMenu} setShowStartMenu={setShowStartMenu} />

        {/* Menú Inicio */}
        {showStartMenu && <StartMenu />}
      </div>
    </>
  );
};

export default DesktopWindows;
