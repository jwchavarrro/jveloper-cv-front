/**
 * @file fragments/desktop-icons.tsx
 * @description Fragmento de iconos del escritorio
 * @module fragments/desktop-icons
 */

"use client";

// Import of utilities
import { PAGE_WINDOWS, type ProgramType } from "@/components/pages/windows";

// Import of hooks
import { useWindowManager } from "@/hooks";

export const DesktopIcons = () => {
  const { openProgram } = useWindowManager();

  /**
   * @constant desktopIcons
   * @description Iconos del escritorio
   */
  const desktopIcons = PAGE_WINDOWS.FRAGMENTS.DESKTOP.ICONS;

  /**
   * @function handleIconClick
   * @description Maneja el click en un icono del escritorio
   * @param {ProgramType} icon - Icono clickeado
   */
  const handleIconClick = (icon: ProgramType) => {
    if (icon.type === "app" && icon.programId) {
      openProgram(icon.programId);
    }
  };

  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-4">
      {desktopIcons?.length > 0 &&
        desktopIcons?.map((icon, index) => (
          <div
            key={index}
            onClick={() => handleIconClick(icon)}
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
  );
};
