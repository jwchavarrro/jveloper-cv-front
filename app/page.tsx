/**
 * @file page.tsx
 * @description Página principal del sitio - Escritorio Windows 11
 * @module app/page
 */

"use client";

import { useState } from "react";

// Import of utilities
import { PAGE_WINDOWS } from "@/components/pages/windows";

/**
 * @file page.tsx
 * @description Página principal del sitio - Escritorio Windows 11
 */

const Home = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showDesktopIcons, setShowDesktopIcons] = useState(true);

  const desktopIcons = PAGE_WINDOWS.FRAGMENTS.DESKTOP.ICONS;

  const taskbarApps = PAGE_WINDOWS.FRAGMENTS.TASKBAR.APPS.map((app) =>
    app.name === "Inicio" ? { ...app, isActive: showStartMenu } : app,
  );

  return (
    <div className="relative h-screen overflow-hidden bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Fondo de escritorio con patrón */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Iconos del escritorio */}
      {showDesktopIcons && (
        <div className="absolute top-4 left-4 grid grid-cols-1 gap-4">
          {desktopIcons.map((icon, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center rounded-lg p-2 transition-all duration-200 hover:bg-white/10"
            >
              <div className="mb-1 text-4xl transition-transform duration-200 group-hover:scale-110">
                {icon.icon}
              </div>
              <span className="text-center text-xs font-medium text-white group-hover:text-blue-200">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Barra de tareas */}
      <div className="absolute right-0 bottom-0 left-0 h-12 border-t border-white/10 bg-black/90 backdrop-blur-md">
        <div className="flex h-full items-center justify-between pl-2">
          <div className="flex items-center space-x-2">
            {/* Botón Inicio */}
            <button
              onClick={() => setShowStartMenu(!showStartMenu)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 ${
                showStartMenu ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              <span className="text-xl">🪟</span>
            </button>

            {/* Buscador */}
            <div className="h-8 w-40 rounded-full bg-white" />

            {/* Aplicaciones ancladas */}
            <div className="ml-2 flex items-center space-x-1">
              {taskbarApps.slice(1).map((app, index) => (
                <button
                  key={index}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 ${
                    app.isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-lg">{app.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Área de notificaciones */}
            <div className="ml-auto flex items-center pr-4">
              <div className="text-sm text-white">
                {new Date().toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
            {/* Botón para mostrar/ocultar iconos del escritorio */}
            <button
              className="size-4 transition-all duration-200 hover:border-l"
              onClick={() => setShowDesktopIcons(!showDesktopIcons)}
            />
          </div>
        </div>
      </div>

      {/* Menú Inicio */}
      {showStartMenu && (
        <div className="animate-in slide-in-from-bottom-2 absolute bottom-14 left-2 min-h-2/4 w-1/4 rounded-lg border border-white/20 bg-black/40 shadow-2xl backdrop-blur-md duration-300"></div>
      )}
    </div>
  );
};

export default Home;
