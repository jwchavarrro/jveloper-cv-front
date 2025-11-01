import React from "react";
import { render, screen } from "@testing-library/react";
import { BaseDialog } from "../base-dialog";

// Mock de los componentes UI
jest.mock("@/components/ui/dialog", () => ({
  Dialog: ({
    children,
    open,
  }: {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }) => (
    <div data-testid="dialog" data-open={open}>
      {open && children}
    </div>
  ),
  DialogContent: ({
    children,
    className,
    "aria-describedby": ariaDescribedBy,
  }: {
    children: React.ReactNode;
    className?: string;
    "aria-describedby"?: string;
  }) => (
    <div data-testid="dialog-content" className={className} aria-describedby={ariaDescribedBy}>
      {children}
    </div>
  ),
  DialogTrigger: ({ children }: { children: React.ReactNode; asChild?: boolean }) => (
    <div data-testid="dialog-trigger">{children}</div>
  ),
}));

jest.mock("../dialog-header", () => ({
  DialogHeader: ({ title, description }: { title?: string; description?: string }) => (
    <div data-testid="dialog-header">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  ),
}));

jest.mock("../dialog-footer", () => ({
  DialogFooter: () => <div data-testid="dialog-footer">Footer</div>,
}));

describe("BaseDialog", () => {
  const mockSetOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza el diálogo cuando open es true", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test Dialog">
        Contenido
      </BaseDialog>,
    );

    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
  });

  it("no renderiza el contenido cuando open es false", () => {
    render(
      <BaseDialog open={false} setOpen={mockSetOpen} title="Test Dialog">
        Contenido
      </BaseDialog>,
    );

    expect(screen.queryByTestId("dialog-content")).not.toBeInTheDocument();
  });

  it("renderiza el título y descripción", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Mi Título" description="Mi Descripción">
        Contenido
      </BaseDialog>,
    );

    expect(screen.getByText("Mi Título")).toBeInTheDocument();
    expect(screen.getByText("Mi Descripción")).toBeInTheDocument();
  });

  it("renderiza los children", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test">
        <div>Contenido del diálogo</div>
      </BaseDialog>,
    );

    expect(screen.getByText("Contenido del diálogo")).toBeInTheDocument();
  });

  it("renderiza el trigger cuando se proporciona", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test" trigger={<button>Abrir</button>}>
        Contenido
      </BaseDialog>,
    );

    // El trigger se renderiza cuando el diálogo está abierto
    expect(screen.getByText("Abrir")).toBeInTheDocument();
  });

  it("aplica className extra al DialogContent", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test" extraClassName="custom-class">
        Contenido
      </BaseDialog>,
    );

    const content = screen.getByTestId("dialog-content");
    expect(content).toHaveClass("custom-class");
  });

  it("renderiza el footer", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test">
        Contenido
      </BaseDialog>,
    );

    expect(screen.getByTestId("dialog-footer")).toBeInTheDocument();
  });

  it("configura aria-describedby cuando hay descripción", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test" description="Descripción">
        Contenido
      </BaseDialog>,
    );

    const content = screen.getByTestId("dialog-content");
    expect(content).toHaveAttribute("aria-describedby", "dialog-description");
  });

  it("no configura aria-describedby cuando no hay descripción", () => {
    render(
      <BaseDialog open={true} setOpen={mockSetOpen} title="Test">
        Contenido
      </BaseDialog>,
    );

    const content = screen.getByTestId("dialog-content");
    expect(content).not.toHaveAttribute("aria-describedby");
  });
});
