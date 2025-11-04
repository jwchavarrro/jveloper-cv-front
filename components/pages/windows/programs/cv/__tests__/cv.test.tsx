import React from "react";
import { render, screen } from "@testing-library/react";
import { CVProgram } from "../cv";

// Mock del hook useWindowManager
jest.mock("@/hooks", () => ({
  useWindowManager: () => ({
    getWindowState: jest.fn(() => ({ isOpen: true, isMinimized: false })),
    closeProgram: jest.fn(),
    openProgram: jest.fn(),
    windowsState: { cv: { isOpen: true, isMinimized: false } },
    toggleProgram: jest.fn(),
    minimizeProgram: jest.fn(),
    restoreProgram: jest.fn(),
    maximizeProgram: jest.fn(),
    getOpenPrograms: jest.fn(() => ["cv"]),
  }),
}));

// Mock del componente Program
jest.mock("@/components/pages/components/program", () => ({
  Program: ({
    children,
    headerCustom,
    footerCustom,
    open,
  }: {
    children: React.ReactNode;
    headerCustom?: React.ReactNode;
    footerCustom?: React.ReactNode;
    open: boolean;
  }) =>
    open ? (
      <div data-testid="program-mock">
        {headerCustom && <div data-testid="header-section">{headerCustom}</div>}
        <div data-testid="content-section">{children}</div>
        {footerCustom && <div data-testid="footer-section">{footerCustom}</div>}
      </div>
    ) : null,
}));

// Mock de los fragmentos del programa CV
jest.mock("../fragments", () => ({
  HeaderCustom: () => <div>CV - John Chavarro Urrea</div>,
  FooterCustom: () => <div>CV - John Chavarro Urrea</div>,
  SidebarPanelPrimary: () => <div>SidebarPanelPrimary</div>,
  Editor: () => <div>Editor</div>,
  IAPanel: () => <div>IAPanel</div>,
}));

// Mock de react-resizable-panels
jest.mock("@/components/ui/resizable", () => ({
  ResizablePanelGroup: ({
    children,
    direction,
    ...props
  }: React.ComponentProps<"div"> & { direction?: string }) => (
    <div data-testid="resizable-panel-group" {...props}>
      {children}
    </div>
  ),
  ResizablePanel: ({
    children,
    minSize,
    maxSize,
    ...props
  }: React.ComponentProps<"div"> & { minSize?: number; maxSize?: number }) => (
    <div data-testid="resizable-panel" {...props}>
      {children}
    </div>
  ),
  ResizableHandle: (props: React.ComponentProps<"div">) => (
    <div data-testid="resizable-handle" {...props} />
  ),
}));

describe("CVProgram", () => {
  it("renderiza el componente CVProgram", () => {
    render(<CVProgram />);

    expect(screen.getByTestId("program-mock")).toBeInTheDocument();
  });

  it("renderiza los paneles redimensionables", () => {
    render(<CVProgram />);

    expect(screen.getByTestId("resizable-panel-group")).toBeInTheDocument();
    const panels = screen.getAllByTestId("resizable-panel");
    expect(panels.length).toBeGreaterThan(0);
  });

  it("renderiza los componentes SidebarPanelPrimary, Editor e IAPanel", () => {
    render(<CVProgram />);

    expect(screen.getByText("SidebarPanelPrimary")).toBeInTheDocument();
    expect(screen.getByText("Editor")).toBeInTheDocument();
    expect(screen.getByText("IAPanel")).toBeInTheDocument();
  });

  it("renderiza el HeaderCustom", () => {
    render(<CVProgram />);

    const headerSection = screen.getByTestId("header-section");
    expect(headerSection).toBeInTheDocument();

    // Verificar que existe el título en el header
    const titles = screen.getAllByText("CV - John Chavarro Urrea");
    expect(titles.length).toBeGreaterThan(0);
    // Verificar que al menos uno está en el header
    expect(headerSection.textContent).toContain("CV - John Chavarro Urrea");
  });

  it("renderiza el FooterCustom", () => {
    render(<CVProgram />);

    const footerSection = screen.getByTestId("footer-section");
    expect(footerSection).toBeInTheDocument();

    // Verificar que existe en el footer
    const allText = screen.getAllByText("CV - John Chavarro Urrea");
    expect(allText.length).toBeGreaterThan(0);
  });

  it("el programa está abierto por defecto", () => {
    render(<CVProgram />);

    // Verificar que el componente se renderiza (está abierto)
    expect(screen.getByTestId("program-mock")).toBeInTheDocument();
  });
});
