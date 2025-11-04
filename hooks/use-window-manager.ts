/**
 * @file use-window-manager.ts
 * @description Hook para manejar el estado de las ventanas de programas
 * @module context/pages/windows/use-window-manager
 */

// Import of context
import { useContext } from "@/context";

// Import of atoms
import {
  openProgramContext,
  type WindowState,
  type WindowsState,
  type ProgramName,
} from "../context/pages/windows/open-program";

/**
 * @function useWindowManager
 * @description Hook principal para gestionar ventanas de programas
 * @returns {Object} Funciones y estado para manejar ventanas
 */
export const useWindowManager = () => {
  const [windowsState, setWindowsState] = useContext(openProgramContext);

  /**
   * @function getWindowState
   * @description Obtiene el estado de una ventana específica
   * @param {ProgramName} programName - Nombre del programa
   * @returns {WindowState} Estado de la ventana
   */
  const getWindowState = (programName: ProgramName): WindowState => {
    return (
      windowsState[programName] || {
        isOpen: false,
        isMinimized: false,
      }
    );
  };

  /**
   * @function openProgram
   * @description Abre un programa
   * @param {ProgramName} programName - Nombre del programa a abrir
   */
  const openProgram = (programName: ProgramName) => {
    setWindowsState((prev: WindowsState) => ({
      ...prev,
      [programName]: {
        ...prev[programName],
        isOpen: true,
        isMinimized: false,
      },
    }));
  };

  /**
   * @function closeProgram
   * @description Cierra un programa
   * @param {ProgramName} programName - Nombre del programa a cerrar
   */
  const closeProgram = (programName: ProgramName) => {
    setWindowsState((prev: WindowsState) => ({
      ...prev,
      [programName]: {
        ...prev[programName],
        isOpen: false,
        isMinimized: false,
      },
    }));
  };

  /**
   * @function toggleProgram
   * @description Alterna el estado de un programa (abre si está cerrado, cierra si está abierto)
   * @param {ProgramName} programName - Nombre del programa
   */
  const toggleProgram = (programName: ProgramName) => {
    const currentState = getWindowState(programName);
    if (currentState.isOpen) {
      closeProgram(programName);
    } else {
      openProgram(programName);
    }
  };

  /**
   * @function minimizeProgram
   * @description Minimiza un programa
   * @param {ProgramName} programName - Nombre del programa a minimizar
   */
  const minimizeProgram = (programName: ProgramName) => {
    setWindowsState((prev: WindowsState) => ({
      ...prev,
      [programName]: {
        ...prev[programName],
        isOpen: true,
        isMinimized: true,
      },
    }));
  };

  /**
   * @function restoreProgram
   * @description Restaura un programa minimizado
   * @param {ProgramName} programName - Nombre del programa a restaurar
   */
  const restoreProgram = (programName: ProgramName) => {
    setWindowsState((prev: WindowsState) => ({
      ...prev,
      [programName]: {
        ...prev[programName],
        isOpen: true,
        isMinimized: false,
      },
    }));
  };

  /**
   * @function maximizeProgram
   * @description Maximiza o restaura un programa (para uso futuro)
   * @param {ProgramName} programName - Nombre del programa
   */
  const maximizeProgram = (programName: ProgramName) => {
    setWindowsState((prev: WindowsState) => ({
      ...prev,
      [programName]: {
        ...prev[programName],
        isMaximized: !prev[programName]?.isMaximized,
      },
    }));
  };

  /**
   * @function getOpenPrograms
   * @description Obtiene la lista de programas abiertos
   * @returns {string[]} Array con los nombres de programas abiertos
   */
  const getOpenPrograms = (): string[] => {
    return Object.keys(windowsState).filter((programName) => windowsState[programName]?.isOpen);
  };

  return {
    windowsState,
    getWindowState,
    openProgram,
    closeProgram,
    toggleProgram,
    minimizeProgram,
    restoreProgram,
    maximizeProgram,
    getOpenPrograms,
  };
};
