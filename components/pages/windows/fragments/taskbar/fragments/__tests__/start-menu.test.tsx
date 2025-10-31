import React from "react";
import { render, screen } from "@testing-library/react";
import { StartMenu } from "../start-menu";

describe("StartMenu", () => {
  it("renderiza el menú de inicio", () => {
    const { container } = render(<StartMenu />);

    const menu = container.querySelector("section");
    expect(menu).toBeInTheDocument();
  });

  it("tiene las clases CSS correctas", () => {
    const { container } = render(<StartMenu />);

    const menu = container.querySelector("section");
    expect(menu).toHaveClass(
      "animate-in",
      "slide-in-from-bottom-2",
      "absolute",
      "bottom-14",
      "left-2",
      "min-h-2/4",
      "w-1/4",
      "rounded-lg",
      "border",
      "border-white/20",
      "bg-black/40",
      "shadow-2xl",
      "backdrop-blur-md",
      "duration-300",
    );
  });

  it("renderiza como un elemento section", () => {
    const { container } = render(<StartMenu />);

    const menu = container.querySelector("section");
    expect(menu).toBeInTheDocument();
    expect(menu?.tagName).toBe("SECTION");
  });
});

