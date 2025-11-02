import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IAPanel } from "../index";

describe("IAPanel", () => {
  it("renderiza el componente IAPanel", () => {
    render(<IAPanel />);

    expect(screen.getByText("IAPanel")).toBeInTheDocument();
  });

  it("renderiza un contenedor div", () => {
    const { container } = render(<IAPanel />);

    const wrapper = container.firstChild;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveProperty("tagName", "DIV");
  });
});

