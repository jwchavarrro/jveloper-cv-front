import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Taskbar } from "../taskbar";

// Mock de useWindowManager
const mockGetOpenPrograms = jest.fn(() => []);
const mockGetWindowState = jest.fn(() => ({ isOpen: false, isMinimized: false }));
const mockRestoreProgram = jest.fn();
const mockMinimizeProgram = jest.fn();

jest.mock("@/hooks", () => ({
  useWindowManager: () => ({
    getOpenPrograms: mockGetOpenPrograms,
    getWindowState: mockGetWindowState,
    restoreProgram: mockRestoreProgram,
    minimizeProgram: mockMinimizeProgram,
  }),
}));

// Mock de las constantes
jest.mock("@/components/pages/windows", () => ({
  PAGE_WINDOWS: {
    FRAGMENTS: {
      DESKTOP: {
        ICONS: [
          { name: "CV", icon: "🔷", programId: "cv" },
          { name: "Explorador", icon: "📁", programId: "explorer" },
        ],
      },
      TASKBAR: {
        APPS: [
          { name: "Inicio", icon: "🪟", isActive: false },
          { name: "Explorador", icon: "📁", isActive: false },
          { name: "Jveloper", icon: "🔷", isActive: false },
        ],
      },
    },
  },
}));

describe("Taskbar", () => {
  const mockSetShowStartMenu = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetOpenPrograms.mockReturnValue([]);
    mockGetWindowState.mockReturnValue({ isOpen: false, isMinimized: false });
  });

  it("renderiza la barra de tareas", () => {
    const { container } = render(
      <Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const taskbar = container.querySelector("section");
    expect(taskbar).toBeInTheDocument();
    expect(taskbar).toHaveClass("absolute", "right-0", "bottom-0", "left-0");
  });

  it("renderiza el botón de inicio", () => {
    const { container } = render(
      <Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const startButton = container.querySelector("button:first-child");
    expect(startButton).toBeInTheDocument();
    expect(startButton?.querySelector("span")?.textContent).toBe("🪟");
  });

  it("cambia el estado del menú inicio al hacer clic", () => {
    const { container } = render(
      <Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const startButton = container.querySelector("button:first-child") as HTMLButtonElement;
    fireEvent.click(startButton);

    expect(mockSetShowStartMenu).toHaveBeenCalledTimes(1);
    expect(mockSetShowStartMenu).toHaveBeenCalledWith(true);
  });

  it("muestra el estado activo del menú inicio", () => {
    const { container } = render(
      <Taskbar showStartMenu={true} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const startButton = container.querySelector("button:first-child");
    expect(startButton).toHaveClass("bg-accent");
  });

  it("renderiza programas abiertos en la taskbar", () => {
    mockGetOpenPrograms.mockReturnValue(["cv", "explorer"]);
    mockGetWindowState.mockImplementation((programId: string) => ({
      isOpen: true,
      isMinimized: programId === "explorer",
    }));

    render(<Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />);

    // Botón de inicio + 2 programas abiertos
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(2);
  });

  it("llama a minimizeProgram cuando se hace clic en un programa no minimizado", () => {
    mockGetOpenPrograms.mockReturnValue(["cv"]);
    mockGetWindowState.mockReturnValue({ isOpen: true, isMinimized: false });

    const { container } = render(
      <Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const programButton = container.querySelectorAll("button")[1] as HTMLButtonElement;
    fireEvent.click(programButton);

    expect(mockMinimizeProgram).toHaveBeenCalledTimes(1);
    expect(mockMinimizeProgram).toHaveBeenCalledWith("cv");
  });

  it("llama a restoreProgram cuando se hace clic en un programa minimizado", () => {
    mockGetOpenPrograms.mockReturnValue(["cv"]);
    mockGetWindowState.mockReturnValue({ isOpen: true, isMinimized: true });

    const { container } = render(
      <Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const programButton = container.querySelectorAll("button")[1] as HTMLButtonElement;
    fireEvent.click(programButton);

    expect(mockRestoreProgram).toHaveBeenCalledTimes(1);
    expect(mockRestoreProgram).toHaveBeenCalledWith("cv");
  });

  it("muestra la hora actual", () => {
    render(<Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />);

    const timeElement = screen.getByText(/\d{2}:\d{2}/);
    expect(timeElement).toBeInTheDocument();
  });

  it("toggle el menú inicio cuando se hace clic nuevamente", () => {
    const { container } = render(
      <Taskbar showStartMenu={true} setShowStartMenu={mockSetShowStartMenu} />,
    );

    const startButton = container.querySelector("button:first-child") as HTMLButtonElement;
    fireEvent.click(startButton);

    expect(mockSetShowStartMenu).toHaveBeenCalledWith(false);
  });
});
