/**
 * @file atoms.ts
 * @description Átomos y tipos para el gestor de ventanas
 * @module context/pages/windows/atoms
 */

// Import of context
import { context } from "@/context";

/**
 * @interface WindowState
 * @description Estado de una ventana individual
 */
export interface WindowState {
  /** Indica si la ventana está abierta */
  isOpen: boolean;
  /** Indica si la ventana está minimizada */
  isMinimized: boolean;
  /** (Futuro) Indica si la ventana está maximizada */
  isMaximized?: boolean;
  /** (Futuro) Índice Z para orden de ventanas */
  zIndex?: number;
  /** (Futuro) Posición de la ventana */
  position?: { x: number; y: number };
  /** (Futuro) Tamaño de la ventana */
  size?: { width: number; height: number };
  /** (Futuro) Metadata específica del programa */
  metadata?: Record<string, any>;
}

/**
 * @type WindowsState
 * @description Estado global de todas las ventanas
 * @example { cv: { isOpen: true, isMinimized: false }, vscode: { isOpen: false, isMinimized: false } }
 */
export type WindowsState = Record<string, WindowState>;

/**
 * @type ProgramName
 * @description Nombres de programas disponibles
 */
export type ProgramName = string;

/**
 * @constant openProgramContext
 * @description Átomo principal que contiene el estado de todos los programas abiertos
 */
export const openProgramContext = context<WindowsState>({});
