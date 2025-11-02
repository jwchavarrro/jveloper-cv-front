import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Editor } from "../index";

describe("Editor", () => {
  it("renderiza el componente Editor", () => {
    render(<Editor />);

    expect(screen.getByText("Editor")).toBeInTheDocument();
  });

  it("renderiza un contenedor div", () => {
    const { container } = render(<Editor />);

    const wrapper = container.firstChild;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveProperty("tagName", "DIV");
  });
});

