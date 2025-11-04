/**
 * @file use-window-manager.test.ts
 * @description Tests para el hook useWindowManager
 */

import { renderHook, act } from "@testing-library/react";

// Mock del contexto ANTES de importar el hook
const mockSetWindowsState = jest.fn();
const mockWindowsState = {
  cv: { isOpen: true, isMinimized: false },
  vscode: { isOpen: false, isMinimized: false },
};

jest.mock("@/context", () => ({
  useContext: jest.fn(() => [mockWindowsState, mockSetWindowsState]),
  context: jest.fn((initialValue) => initialValue),
}));

// Importar DESPUÉS del mock
import { useWindowManager } from "../use-window-manager";

describe("useWindowManager", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getWindowState", () => {
    it("devuelve el estado de una ventana existente", () => {
      const { result } = renderHook(() => useWindowManager());

      const cvState = result.current.getWindowState("cv");

      expect(cvState).toEqual({ isOpen: true, isMinimized: false });
    });

    it("devuelve estado por defecto para ventana inexistente", () => {
      const { result } = renderHook(() => useWindowManager());

      const newProgramState = result.current.getWindowState("notepad" as any);

      expect(newProgramState).toEqual({ isOpen: false, isMinimized: false });
    });
  });

  describe("openProgram", () => {
    it("abre un programa cerrado", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.openProgram("vscode");
      });

      expect(mockSetWindowsState).toHaveBeenCalledTimes(1);
      expect(mockSetWindowsState).toHaveBeenCalledWith(expect.any(Function));

      // Verificar la función callback
      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.vscode).toEqual({
        isOpen: true,
        isMinimized: false,
      });
    });

    it("mantiene el estado de otros programas al abrir uno", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.openProgram("vscode");
      });

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.cv).toEqual(mockWindowsState.cv);
    });
  });

  describe("closeProgram", () => {
    it("cierra un programa abierto", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.closeProgram("cv");
      });

      expect(mockSetWindowsState).toHaveBeenCalledTimes(1);

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.cv).toEqual({
        isOpen: false,
        isMinimized: false,
      });
    });
  });

  describe("toggleProgram", () => {
    it("cierra un programa si está abierto", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.toggleProgram("cv");
      });

      expect(mockSetWindowsState).toHaveBeenCalled();
    });

    it("abre un programa si está cerrado", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.toggleProgram("vscode");
      });

      expect(mockSetWindowsState).toHaveBeenCalled();
    });
  });

  describe("minimizeProgram", () => {
    it("minimiza un programa", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.minimizeProgram("cv");
      });

      expect(mockSetWindowsState).toHaveBeenCalledTimes(1);

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.cv.isMinimized).toBe(true);
    });
  });

  describe("restoreProgram", () => {
    it("restaura un programa minimizado", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.restoreProgram("cv");
      });

      expect(mockSetWindowsState).toHaveBeenCalledTimes(1);

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.cv).toEqual({
        isOpen: true,
        isMinimized: false,
      });
    });
  });

  describe("maximizeProgram", () => {
    it("alterna el estado maximizado de un programa", () => {
      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.maximizeProgram("cv");
      });

      expect(mockSetWindowsState).toHaveBeenCalledTimes(1);

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockWindowsState);

      expect(newState.cv.isMaximized).toBe(true);
    });

    it("des-maximiza un programa que ya estaba maximizado", () => {
      const mockStateWithMaximized = {
        ...mockWindowsState,
        cv: { isOpen: true, isMinimized: false, isMaximized: true },
      };

      const { result } = renderHook(() => useWindowManager());

      act(() => {
        result.current.maximizeProgram("cv");
      });

      const callback = mockSetWindowsState.mock.calls[0][0];
      const newState = callback(mockStateWithMaximized);

      expect(newState.cv.isMaximized).toBe(false);
    });
  });

  describe("getOpenPrograms", () => {
    it("devuelve lista de programas abiertos", () => {
      const { result } = renderHook(() => useWindowManager());

      const openPrograms = result.current.getOpenPrograms();

      expect(openPrograms).toEqual(["cv"]);
    });

    it("devuelve lista vacía si no hay programas abiertos", () => {
      const mockEmptyState = {
        cv: { isOpen: false, isMinimized: false },
        vscode: { isOpen: false, isMinimized: false },
      };

      // Actualizar el mock para este test
      jest
        .mocked(require("@/context").useContext)
        .mockReturnValueOnce([mockEmptyState, mockSetWindowsState]);

      const { result } = renderHook(() => useWindowManager());

      const openPrograms = result.current.getOpenPrograms();

      expect(openPrograms).toEqual([]);
    });
  });

  describe("windowsState", () => {
    it("devuelve el estado completo de ventanas", () => {
      const { result } = renderHook(() => useWindowManager());

      expect(result.current.windowsState).toEqual(mockWindowsState);
    });
  });
});
