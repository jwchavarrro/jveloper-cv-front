import React from "react";
import { render, screen } from "@testing-library/react";
import { StartMenu } from "../start-menu";

// Mock de las constantes
jest.mock("@/components/pages/windows", () => ({
  PAGE_WINDOWS: {
    FRAGMENTS: {
      START_MENU: {
        POWER_MENU_ITEMS: [
          { label: "Apagar", type: "action", onClick: jest.fn() },
          { label: "Reiniciar", type: "action", onClick: jest.fn() },
        ],
      },
    },
  },
}));

describe("StartMenu", () => {
  it("renderiza el menú de inicio cuando está abierto", () => {
    render(<StartMenu open={true} onOpenChange={jest.fn()} />);

    const avatar = screen.getByText("JV");
    expect(avatar).toBeInTheDocument();
  });

  it("no renderiza el menú cuando está cerrado", () => {
    render(<StartMenu open={false} onOpenChange={jest.fn()} />);

    const avatar = screen.queryByText("JV");
    expect(avatar).not.toBeInTheDocument();
  });

  it("renderiza el nombre de usuario", () => {
    render(<StartMenu open={true} onOpenChange={jest.fn()} />);

    const username = screen.getByText("jveloper");
    expect(username).toBeInTheDocument();
  });
});
