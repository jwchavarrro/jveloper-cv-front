import React from "react";
import { render, screen } from "@testing-library/react";
import { DialogFooter } from "../dialog-footer";

// Mock de los componentes UI
jest.mock("@/components/ui/dialog", () => ({
  DialogFooter: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="shadcn-dialog-footer">{children}</div>
  ),
}));

jest.mock("../dialog-actions", () => ({
  DialogActions: ({
    showCancel,
    showConfirm,
    cancelText,
    confirmText,
  }: {
    showCancel?: boolean;
    showConfirm?: boolean;
    cancelText?: string;
    confirmText?: string;
  }) => (
    <div data-testid="dialog-actions">
      {showCancel && <button>{cancelText || "Cancelar"}</button>}
      {showConfirm && <button>{confirmText || "Confirmar"}</button>}
    </div>
  ),
}));

describe("DialogFooter", () => {
  it("renderiza DialogActions por defecto cuando no hay footer personalizado", () => {
    render(<DialogFooter />);

    expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
    expect(screen.getByText("Cancelar")).toBeInTheDocument();
    expect(screen.getByText("Confirmar")).toBeInTheDocument();
  });

  it("renderiza footer personalizado cuando se proporciona", () => {
    render(<DialogFooter footer={<div>Footer Personalizado</div>} />);

    expect(screen.getByText("Footer Personalizado")).toBeInTheDocument();
    expect(screen.queryByTestId("dialog-actions")).not.toBeInTheDocument();
  });

  it("muestra botones de cancelar y confirmar por defecto", () => {
    render(<DialogFooter />);

    const actions = screen.getByTestId("dialog-actions");
    expect(actions).toBeInTheDocument();
    expect(screen.getByText("Cancelar")).toBeInTheDocument();
    expect(screen.getByText("Confirmar")).toBeInTheDocument();
  });

  it("oculta botón cancelar cuando showCancel es false", () => {
    render(<DialogFooter showCancel={false} />);

    const actions = screen.getByTestId("dialog-actions");
    expect(actions).toBeInTheDocument();
    expect(screen.queryByText("Cancelar")).not.toBeInTheDocument();
    expect(screen.getByText("Confirmar")).toBeInTheDocument();
  });

  it("oculta botón confirmar cuando showConfirm es false", () => {
    render(<DialogFooter showConfirm={false} />);

    const actions = screen.getByTestId("dialog-actions");
    expect(actions).toBeInTheDocument();
    expect(screen.getByText("Cancelar")).toBeInTheDocument();
    expect(screen.queryByText("Confirmar")).not.toBeInTheDocument();
  });

  it("retorna null cuando no hay footer y ambos botones están ocultos", () => {
    const { container } = render(<DialogFooter showCancel={false} showConfirm={false} />);

    expect(container.firstChild).toBeNull();
  });

  it("usa textos personalizados para los botones", () => {
    render(<DialogFooter cancelText="Cerrar" confirmText="Aceptar" />);

    expect(screen.getByText("Cerrar")).toBeInTheDocument();
    expect(screen.getByText("Aceptar")).toBeInTheDocument();
  });

  it("pasa todas las props a DialogActions", () => {
    const mockOnCancel = jest.fn();
    const mockOnConfirm = jest.fn();

    render(
      <DialogFooter
        showCancel={true}
        showConfirm={true}
        cancelText="Cancelar"
        confirmText="Confirmar"
        onCancel={mockOnCancel}
        onConfirm={mockOnConfirm}
      />,
    );

    expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
  });
});
