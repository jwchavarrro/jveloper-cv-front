/**
 * @file fragments/taskbar.tsx
 * @description Fragmento de barra de tareas
 * @module fragments/taskbar
 */

"use client";

import { Search } from "lucide-react";

// Import of utilities
import { PAGE_WINDOWS } from "@/components/pages/windows";
import { cn } from "@/lib/utils";

// Import of hooks
import { useWindowManager } from "@/hooks";

interface TaskbarProps {
  showStartMenu: boolean;
  setShowStartMenu: (show: boolean) => void;
}

export const Taskbar = ({ showStartMenu, setShowStartMenu }: TaskbarProps) => {
  /**
   * @constant useWindowManager
   * @description Hook para manejar el estado de las ventanas de programas
   */
  const { getOpenPrograms, getWindowState, restoreProgram, minimizeProgram } = useWindowManager();

  /**
   * @constant openPrograms
   * @description Programas abiertos
   */
  const openPrograms = getOpenPrograms();

  /**
   * @constant openProgramsInfo
   * @description Información de los programas abiertos (nombre, icono, etc.)
   */
  const openProgramsInfo = openPrograms.map((programId) => {
    const programInfo = PAGE_WINDOWS.FRAGMENTS.DESKTOP.ICONS.find(
      (icon) => icon.programId === programId,
    );
    const windowState = getWindowState(programId);

    return {
      programId,
      name: programInfo?.name || programId,
      icon: programInfo?.icon || "📄",
      isMinimized: windowState.isMinimized,
    };
  });

  /**
   * @function handleProgramClick
   * @description Maneja el click en un programa de la taskbar
   * @param {string} programId - ID del programa
   */
  const handleProgramClick = (programId: string) => {
    const windowState = getWindowState(programId);
    if (windowState.isMinimized) {
      restoreProgram(programId);
    } else {
      minimizeProgram(programId);
    }
  };
  return (
    <section className="border-border bg-background/80 absolute right-0 bottom-0 left-0 h-12 border-t backdrop-blur-md">
      <div className="flex h-full items-center justify-between pl-2">
        <div className="flex items-center space-x-2">
          {/* Botón Inicio */}
          <button
            onClick={() => setShowStartMenu(!showStartMenu)}
            className={cn(
              "text-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
              showStartMenu ? "bg-accent" : "hover:bg-accent/50",
            )}
          >
            <span className="text-xl">🪟</span>
          </button>

          {/* Buscador */}
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar"
              className="text-foreground placeholder:text-muted-foreground bg-input h-8 w-60 rounded-full border-none pr-4 pl-9 text-sm outline-none"
            />
          </div>

          {/* Aplicaciones abiertas */}
          <div className="ml-2 flex items-center space-x-1">
            {openProgramsInfo.map((program) => (
              <button
                key={program.programId}
                onClick={() => handleProgramClick(program.programId)}
                className={cn(
                  "text-foreground bg-accent/50 hover:bg-accent/80 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
                )}
                title={program.name}
              >
                <span className="text-lg">{program.icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Área de notificaciones */}
          <div className="ml-auto flex items-center pr-4">
            <div className="text-foreground text-sm">
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
