/**
 * @file constants.ts
 * @description Constantes utilizadas en la página de Windows
 * @module components/pages/windows/utils/constants
 */

// Import of types
import type { PageWindowsConfig } from "./types";

/**
 * @constant PAGE_WINDOWS
 * @description Página de windows
 * @type {PageWindowsConfig}
 */
export const PAGE_WINDOWS: PageWindowsConfig = {
  FRAGMENTS: {
    DESKTOP: {
      ICONS: [
        {
          name: "Mi Equipo",
          icon: "🖥️",
          type: "app" as const,
          programId: "my-computer",
          isActive: false,
        },
        {
          name: "Papelera",
          icon: "🗑️",
          type: "app" as const,
          programId: "trash",
          isActive: false,
        },
        {
          name: "Documentos",
          icon: "📁",
          type: "app" as const,
          programId: "documents",
          isActive: false,
        },
        {
          name: "CV",
          icon: "🔷",
          type: "app" as const,
          programId: "cv",
          isActive: false,
        },
      ],
    },

    START_MENU: {},
    TASKBAR: {
      APPS: [
        {
          name: "Inicio",
          icon: "🪟",
          isActive: false,
        },
      ],
    },
  },
};
