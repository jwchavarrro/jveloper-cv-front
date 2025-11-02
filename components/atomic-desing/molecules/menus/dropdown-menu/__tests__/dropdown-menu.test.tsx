import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Importing components custom
import { DropdownMenu } from "@/components/atomic-desing/molecules/menus/dropdown-menu";

// Import of utilities
import type { DropdownMenuItemType } from "@/components/atomic-desing/molecules/menus/dropdown-menu";

// Mock de next/link para testear links internos
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    passHref,
    legacyBehavior,
  }: {
    children: React.ReactNode;
    href: string;
    passHref?: boolean;
    legacyBehavior?: boolean;
  }) => {
    // When using passHref and legacyBehavior, Link passes href to children
    if (passHref && legacyBehavior && React.isValidElement(children)) {
      return React.cloneElement(children, {
        href,
      } as React.HTMLAttributes<HTMLElement>);
    }
    // Otherwise, render as a normal link
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("DropdownMenu", () => {
  const actionFn = jest.fn();
  const items: DropdownMenuItemType[] = [
    {
      label: "Acción",
      icon: "mdi:pencil",
      type: "action",
      onClick: actionFn,
    },
    {
      label: "Link interno",
      icon: "mdi:home",
      type: "link",
      href: "/home",
    },
    {
      label: "Link externo",
      icon: "mdi:external",
      type: "link",
      href: "https://google.com",
    },
    {
      label: "Submenú",
      icon: "mdi:menu",
      type: "submenu",
      items: [
        {
          label: "Subacción",
          icon: "mdi:star",
          type: "action",
          onClick: jest.fn(),
        },
      ],
    },
    {
      label: "Deshabilitado",
      icon: "mdi:lock",
      type: "action",
      onClick: jest.fn(),
      disabled: true,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza el trigger y el menú", () => {
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    expect(screen.getByText("Trigger")).toBeInTheDocument();
    // El menú no debe estar visible hasta que se dispare el trigger
    expect(screen.queryByText("Acción")).not.toBeInTheDocument();
  });

  it("muestra los ítems al abrir el menú", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    expect(await screen.findByText("Acción")).toBeInTheDocument();
    expect(await screen.findByText("Link interno")).toBeInTheDocument();
    expect(await screen.findByText("Link externo")).toBeInTheDocument();
    expect(await screen.findByText("Submenú")).toBeInTheDocument();
    expect(await screen.findByText("Deshabilitado")).toBeInTheDocument();
  });

  it("llama a la función de acción al hacer click", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    await user.click(await screen.findByText("Acción"));
    expect(actionFn).toHaveBeenCalled();
  });

  it("renderiza links internos usando <a> con href correcto", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    const link = (await screen.findByText("Link interno")).closest("a");
    expect(link).toHaveAttribute("href", "/home");
  });

  it("renderiza links externos con target _blank", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    const link = (await screen.findByText("Link externo")).closest("a");
    expect(link).toHaveAttribute("href", "https://google.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renderiza submenús y permite abrirlos", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    await user.hover(await screen.findByText("Submenú"));
    expect(await screen.findByText("Subacción")).toBeInTheDocument();
  });

  it("no llama a la acción si el ítem está deshabilitado", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));

    const disabledItem = await screen.findByText("Deshabilitado");
    expect(disabledItem).toHaveAttribute("aria-disabled", "true");

    // Click the disabled item - the onClick should not be called due to disabled state
    await user.click(disabledItem);

    expect(items[4].onClick).not.toHaveBeenCalled();
  });

  it("cumple con roles básicos de accesibilidad", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu items={items}>
        <button>Trigger</button>
      </DropdownMenu>,
    );
    await user.click(screen.getByText("Trigger"));
    // El menú debe tener role menu
    expect(await screen.findByRole("menu")).toBeInTheDocument();
  });
});
