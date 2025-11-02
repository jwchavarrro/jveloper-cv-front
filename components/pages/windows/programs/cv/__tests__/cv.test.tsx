import React from "react";
import { render, screen } from "@testing-library/react";
import { CVProgram } from "../cv";

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

describe("CVProgram", () => {
  it("renderiza el componente CVProgram", () => {
    render(<CVProgram />);

    expect(screen.getByTestId("program-mock")).toBeInTheDocument();
  });

  it("renderiza el contenido del programa", () => {
    render(<CVProgram />);

    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("renderiza el HeaderCustom", () => {
    render(<CVProgram />);

    const headerSection = screen.getByTestId("header-section");
    expect(headerSection).toBeInTheDocument();
    expect(screen.getByText("CV")).toBeInTheDocument();

    // Verificar que existe en el header
    const allText = screen.getAllByText("CV - John Chavarro Urrea");
    expect(allText.length).toBeGreaterThan(0);
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
