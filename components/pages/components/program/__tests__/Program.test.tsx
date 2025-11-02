import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Program } from "../index";

// Mock simplificado que solo verifica la lógica del componente
jest.mock("@radix-ui/react-dialog", () => ({
  __esModule: true,
  Root: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="radix-root">{children}</div>
  ),
  Content: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="radix-content">{children}</div>
  ),
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Overlay: () => <div data-testid="radix-overlay" />,
}));

jest.mock("@/components/ui/dialog", () => ({
  Dialog: ({
    children,
    open,
  }: {
    children: React.ReactNode;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
  }) => {
    return open ? <div data-testid="ui-dialog">{children}</div> : null;
  },
  DialogOverlay: () => <div data-testid="ui-overlay" />,
  DialogPortal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Program", () => {
  const mockOnOpenChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("no renderiza cuando open es false", () => {
    const { container } = render(
      <Program open={false} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    // El componente retorna null cuando está cerrado o minimizado
    expect(container.firstChild).toBeNull();
  });

  it("renderiza cuando open es true", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    expect(screen.getByTestId("ui-dialog")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("renderiza el header cuando se proporciona", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange} headerCustom={<div>Mi Header</div>}>
        Contenido
      </Program>,
    );

    expect(screen.getByText("Mi Header")).toBeInTheDocument();
  });

  it("renderiza el footer cuando se proporciona", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange} footerCustom={<div>Mi Footer</div>}>
        Contenido
      </Program>,
    );

    expect(screen.getByText("Mi Footer")).toBeInTheDocument();
  });

  it("renderiza los botones de control por defecto", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    const minimizeButton = screen.getByLabelText("Minimizar");
    const maximizeButton = screen.getByLabelText("Maximizar");
    const closeButton = screen.getByLabelText("Cerrar");

    expect(minimizeButton).toBeInTheDocument();
    expect(maximizeButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it("minimiza la ventana al hacer clic en el botón minimizar", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    const minimizeButton = screen.getByLabelText("Minimizar");
    fireEvent.click(minimizeButton);

    expect(mockOnOpenChange).toHaveBeenCalledWith(false);
  });

  it("cierra la ventana al hacer clic en el botón cerrar", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    const closeButton = screen.getByLabelText("Cerrar");
    fireEvent.click(closeButton);

    expect(mockOnOpenChange).toHaveBeenCalledWith(false);
  });

  it("maximiza la ventana al hacer clic en el botón maximizar", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    const maximizeButton = screen.getByLabelText("Maximizar");
    expect(maximizeButton).toBeInTheDocument();

    fireEvent.click(maximizeButton);

    // Después de maximizar, debería cambiar a "Restaurar"
    const restoreButton = screen.getByLabelText("Restaurar");
    expect(restoreButton).toBeInTheDocument();
    expect(screen.queryByLabelText("Maximizar")).not.toBeInTheDocument();
  });

  it("restaura la ventana después de maximizarla", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    const maximizeButton = screen.getByLabelText("Maximizar");
    fireEvent.click(maximizeButton);

    const restoreButton = screen.getByLabelText("Restaurar");
    fireEvent.click(restoreButton);

    // Debería volver a "Maximizar"
    const maximizeButtonAgain = screen.getByLabelText("Maximizar");
    expect(maximizeButtonAgain).toBeInTheDocument();
    expect(screen.queryByLabelText("Restaurar")).not.toBeInTheDocument();
  });

  it("renderiza el título por defecto cuando no se proporciona headerCustom", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange} title="Mi Programa">
        Contenido
      </Program>,
    );

    expect(screen.getByText("Mi Programa")).toBeInTheDocument();
  });

  it("usa el título por defecto 'Program' cuando no se especifica", () => {
    render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    expect(screen.getByText("Program")).toBeInTheDocument();
  });

  it("no renderiza el footer cuando no se proporciona", () => {
    const { container } = render(
      <Program open={true} onOpenChange={mockOnOpenChange}>
        Contenido
      </Program>,
    );

    // No debería haber footer
    const footerElement = container.querySelector('[data-testid="footer-section"]');
    expect(footerElement).not.toBeInTheDocument();
  });
});
