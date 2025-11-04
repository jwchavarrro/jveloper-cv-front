import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Taskbar } from "../taskbar";

// Mock de las constantes
jest.mock("@/components/pages/windows", () => ({
  PAGE_WINDOWS: {
    FRAGMENTS: {
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
    expect(startButton).toHaveClass("bg-white/20");
  });

  it("renderiza las aplicaciones ancladas", () => {
    render(<Taskbar showStartMenu={false} setShowStartMenu={mockSetShowStartMenu} />);

    // Debería renderizar las apps excepto la primera (slice(1))
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(1);
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
