import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DesktopIcons } from "../desktop-icons";

// Mock functions para poder verificar las llamadas
const mockOpenProgram = jest.fn();

// Mock del hook useWindowManager
jest.mock("@/hooks", () => ({
  useWindowManager: () => ({
    openProgram: mockOpenProgram,
    closeProgram: jest.fn(),
    getWindowState: jest.fn(() => ({ isOpen: false, isMinimized: false })),
    windowsState: {},
    toggleProgram: jest.fn(),
    minimizeProgram: jest.fn(),
    restoreProgram: jest.fn(),
    maximizeProgram: jest.fn(),
    getOpenPrograms: jest.fn(() => []),
  }),
}));

// Mock de las constantes
jest.mock("@/components/pages/windows", () => ({
  PAGE_WINDOWS: {
    FRAGMENTS: {
      DESKTOP: {
        ICONS: [
          { name: "Mi Equipo", icon: "🖥️", type: "folder" },
          { name: "Papelera", icon: "🗑️", type: "trash" },
          { name: "Documentos", icon: "📁", type: "folder" },
          { name: "Jveloper", icon: "🔷", type: "app", programId: "cv" },
        ],
      },
    },
  },
}));

describe("DesktopIcons", () => {
  beforeEach(() => {
    mockOpenProgram.mockClear();
  });

  it("renderiza todos los iconos del escritorio", () => {
    render(<DesktopIcons />);

    expect(screen.getByText("Mi Equipo")).toBeInTheDocument();
    expect(screen.getByText("Papelera")).toBeInTheDocument();
    expect(screen.getByText("Documentos")).toBeInTheDocument();
    expect(screen.getByText("Jveloper")).toBeInTheDocument();
  });

  it("renderiza los iconos con emojis", () => {
    render(<DesktopIcons />);

    const container = screen.getByText("Mi Equipo").closest("div");
    expect(container).toBeInTheDocument();
  });

  it("renderiza el contenedor con las clases correctas", () => {
    const { container } = render(<DesktopIcons />);
    const mainContainer = container.firstChild as HTMLElement;

    expect(mainContainer).toHaveClass(
      "absolute",
      "top-4",
      "left-4",
      "grid",
      "grid-cols-1",
      "gap-4",
    );
  });

  it("no renderiza iconos si el array está vacío", () => {
    jest.resetModules();
    jest.doMock("@/components/pages/windows", () => ({
      PAGE_WINDOWS: {
        FRAGMENTS: {
          DESKTOP: {
            ICONS: [],
          },
        },
      },
    }));

    const { DesktopIcons: DesktopIconsEmpty } = await import("../desktop-icons");
    const { container } = render(<DesktopIconsEmpty />);
    const mainContainer = container.firstChild as HTMLElement;

    expect(mainContainer.children.length).toBe(0);
  });

  it("renderiza iconos con las clases de hover correctas", () => {
    const { container } = render(<DesktopIcons />);
    const iconContainer = container.querySelector(".group");

    expect(iconContainer).toHaveClass(
      "group",
      "flex",
      "cursor-pointer",
      "flex-col",
      "items-center",
      "rounded-lg",
      "p-2",
    );
  });

  it("llama a openProgram cuando se hace clic en un icono de tipo app con programId", () => {
    render(<DesktopIcons />);

    const jveloperIcon = screen.getByText("Jveloper");
    fireEvent.click(jveloperIcon);

    expect(mockOpenProgram).toHaveBeenCalledTimes(1);
    expect(mockOpenProgram).toHaveBeenCalledWith("cv");
  });

  it("no llama a openProgram cuando se hace clic en un icono que no es de tipo app", () => {
    render(<DesktopIcons />);

    const miEquipoIcon = screen.getByText("Mi Equipo");
    fireEvent.click(miEquipoIcon);

    expect(mockOpenProgram).not.toHaveBeenCalled();
  });

  it("no llama a openProgram cuando se hace clic en un icono sin programId", () => {
    render(<DesktopIcons />);

    const papeleraIcon = screen.getByText("Papelera");
    fireEvent.click(papeleraIcon);

    expect(mockOpenProgram).not.toHaveBeenCalled();
  });
});
