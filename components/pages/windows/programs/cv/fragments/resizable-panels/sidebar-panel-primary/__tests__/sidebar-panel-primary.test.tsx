import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SidebarPanelPrimary } from "../index";

describe("SidebarPanelPrimary", () => {
  it("renderiza el componente SidebarPanelPrimary", () => {
    render(<SidebarPanelPrimary />);

    expect(screen.getByText("SidebarPanelPrimary")).toBeInTheDocument();
  });

  it("renderiza un contenedor div", () => {
    const { container } = render(<SidebarPanelPrimary />);

    const wrapper = container.firstChild;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveProperty("tagName", "DIV");
  });
});
