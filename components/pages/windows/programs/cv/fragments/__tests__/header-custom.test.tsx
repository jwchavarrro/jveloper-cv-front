import React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderCustom } from "../header-custom";

describe("HeaderCustom", () => {
  it("renderiza el componente HeaderCustom", () => {
    render(<HeaderCustom />);

    expect(screen.getByText("CV")).toBeInTheDocument();
  });

  it("renderiza el título completo del CV", () => {
    render(<HeaderCustom />);

    expect(screen.getByText("CV - John Chavarro Urrea")).toBeInTheDocument();
  });

  it("el badge CV tiene las clases correctas", () => {
    render(<HeaderCustom />);

    const cvBadge = screen.getByText("CV").closest("p");
    expect(cvBadge).toHaveClass("bg-primary", "rounded", "p-1");
  });

  it("contiene un contenedor flex con gap", () => {
    const { container } = render(<HeaderCustom />);

    const flexContainer = container.querySelector(".flex.items-center.gap-2");
    expect(flexContainer).toBeInTheDocument();
  });
});
