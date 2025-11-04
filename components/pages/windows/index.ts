/**
 * @file pages/windows/index.ts
 * @description Página principal del sistema de ventanas
 * @module pages/windows/index
 */

// Import of utilities
export { PAGE_WINDOWS } from "./utils/constants";

// Import of fragments
export { DesktopIcons } from "./fragments/desktop-icons";
export { Taskbar, StartMenu } from "./fragments/taskbar";


// Import of types
export type { ProgramType, TaskbarApp, PageWindowsConfig, IconType } from "./utils/types";
