/**
 * @file types.ts
 * @description Tipos para la página de Windows
 * @module components/pages/windows/utils/types
 */

// Import of types
import type { DropdownMenuItemType } from "@/components/atomic-desing/molecules";

/**
 * @type IconType
 * @description Tipos de iconos disponibles
 */
export type IconType = "app" | "file";

/**
 * @interface ProgramType
 * @description Estructura de un icono del escritorio
 */
export interface ProgramType {
  name: string;
  icon: string;
  type: IconType;
  programId: string;
  isActive: boolean;
}

/**
 * @interface TaskbarApp
 * @description Estructura de una aplicación en la barra de tareas
 */
export interface TaskbarApp {
  name: string;
  icon: string;
  isActive: boolean;
}

/**
 * @interface PageWindowsConfig
 * @description Configuración de la página de Windows
 */
export interface PageWindowsConfig {
  FRAGMENTS: {
    DESKTOP: {
      ICONS: ProgramType[];
    };
    START_MENU: {
      POWER_MENU_ITEMS: DropdownMenuItemType[];
    };
    TASKBAR: {
      APPS: TaskbarApp[];
    };
  };
}
