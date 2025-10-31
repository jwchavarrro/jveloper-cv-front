/**
 * @file fragments/taskbar.tsx
 * @description Fragmento de barra de tareas
 * @module fragments/taskbar
 */

// Import of utilities
import { PAGE_WINDOWS } from "@/components/pages/windows";

interface TaskbarProps {
  showStartMenu: boolean;
  setShowStartMenu: (show: boolean) => void;
}

export const Taskbar = ({ showStartMenu, setShowStartMenu }: TaskbarProps) => {
  /**
   * @constant taskbarApps
   * @description Aplicaciones en la barra de tareas
   * @type {Array<{name: string, icon: string, isActive: boolean}>}
   */
  const taskbarApps = PAGE_WINDOWS.FRAGMENTS.TASKBAR.APPS;
  return (
    <section className="border-border bg-secondary/90 absolute right-0 bottom-0 left-0 h-12 border-t backdrop-blur-md">
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
          <button className="size-4 transition-all duration-200 hover:border-l" />
        </div>
      </div>
    </section>
  );
};
