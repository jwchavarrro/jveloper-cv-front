"use client";

import { useState } from "react";

/**
 * @file page.tsx
 * @description Página principal del sitio - Escritorio Windows 11
 */

const Home = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showDesktopIcons, setShowDesktopIcons] = useState(true);

  const desktopIcons = [
    { name: "Este PC", icon: "🖥️", type: "folder" },
    { name: "Papelera", icon: "🗑️", type: "trash" },
    { name: "Documentos", icon: "📁", type: "folder" },
    { name: "Jveloper", icon: "🔷", type: "app" },
  ];

  const taskbarApps = [
    { name: "Inicio", icon: "🪟", isActive: showStartMenu },
    { name: "Explorador", icon: "📁", isActive: false },
    { name: "Jveloper", icon: "🔷", isActive: false },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Fondo de escritorio con patrón */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
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
              className="flex flex-col items-center cursor-pointer group hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
            >
              <div className="text-4xl mb-1 group-hover:scale-110 transition-transform duration-200">
                {icon.icon}
              </div>
              <span className="text-white text-xs text-center font-medium group-hover:text-blue-200">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Barra de tareas */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/90 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-between h-full pl-2">
          <div className="flex items-center space-x-2">
            {/* Botón Inicio */}
            <button
              onClick={() => setShowStartMenu(!showStartMenu)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-200 ${
                showStartMenu ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              <span className="text-xl">🪟</span>
            </button>

            {/* Buscador */}
            <div className="w-40 h-8 rounded-full bg-white" />

            {/* Aplicaciones ancladas */}
            <div className="flex items-center space-x-1 ml-2">
              {taskbarApps.slice(1).map((app, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-200 ${
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
              <div className="text-white text-sm">
                {new Date().toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
            {/* Botón para mostrar/ocultar iconos del escritorio */}
            <button
              className="size-4 hover:border-l transition-all duration-200"
              onClick={() => setShowDesktopIcons(!showDesktopIcons)}
            />
          </div>
        </div>
      </div>

      {/* Menú Inicio */}
      {showStartMenu && (
        <div className="absolute bottom-14 left-2 w-1/4 min-h-2/4 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl animate-in slide-in-from-bottom-2 duration-300"></div>
      )}
    </div>
  );
};

export default Home;
