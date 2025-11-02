import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterCustom } from "../footer-custom";

describe("FooterCustom", () => {
  it("renderiza el componente FooterCustom", () => {
    render(<FooterCustom />);

    expect(screen.getByText("CV - John Chavarro Urrea")).toBeInTheDocument();
  });

  it("contiene un contenedor flex con gap", () => {
    const { container } = render(<FooterCustom />);

    const flexContainer = container.querySelector(".flex.items-center.gap-2");
    expect(flexContainer).toBeInTheDocument();
  });

  it("usa el componente Typography correctamente", () => {
    render(<FooterCustom />);

    const typography = screen.getByText("CV - John Chavarro Urrea");
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toBe("P");
  });
});
