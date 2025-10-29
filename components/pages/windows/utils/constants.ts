/**
 * @file constants.ts
 * @description Constantes utilizadas en la página de Dashboard
 * @module components/pages/dashboard/utils/constants
 */

/**
 * @constant PAGE_WINDOWS
 * @description Página de windows
 * @type {Page}
 */

export const PAGE_WINDOWS = {
  FRAGMENTS: {
    DESKTOP: {
      ICONS: [
        {
          name: "Este PC",
          icon: "🖥️",
          type: "folder",
        },
        {
          name: "Papelera",
        },
        {
          name: "Documentos",
          icon: "📁",
          type: "folder",
        },
        {
          name: "Jveloper",
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
        {
          name: "Explorador",
          icon: "📁",
          isActive: false,
        },
        {
          name: "Jveloper",
          icon: "🔷",
          isActive: false,
        },
      ],
    },
  },
};
