/**
 * @file dropdown-menu/index.tsx
 * @description DropdownMenu — menú desplegable flexible para acciones, enlaces y submenús anidados.
 *
 * Soporta acciones, enlaces y submenús anidados, aplicando los estilos y colores del tema principal.
 *
 * @component
 * @param {DropdownMenuItemType[]} items  Opciones a mostrar en el dropdown
 * @param {React.ReactNode} children      Elemento que dispara el menú
 *
 * @example
 * <DropdownMenu
 *   items={[
 *     { label: "Editar", type: "action", onClick: () => alert("Editar") },
 *     { label: "Más", type: "submenu", items: [{ label: "General", type: "action", onClick: ()=>{} }] }
 *   ]}
 * >
 *   <Button>Abrir</Button>
 * </DropdownMenu>
 */

import Link from "next/link";
import {
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tipos para los items del menú
type DropdownMenuItemBase = {
  label: string;
  disabled?: boolean;
  inset?: boolean;
};

type DropdownMenuActionItem = DropdownMenuItemBase & {
  type: "action";
  onClick: () => void;
  items?: never;
  href?: never;
};

type DropdownMenuLinkItem = DropdownMenuItemBase & {
  type: "link";
  href: string;
  onClick?: never;
  items?: never;
};

type DropdownMenuSubMenuItem = DropdownMenuItemBase & {
  type: "submenu";
  items: DropdownMenuItemType[];
  onClick?: never;
  href?: never;
};

type DropdownMenuSeparatorItem = {
  type: "separator";
  label?: never;
  disabled?: never;
  inset?: never;
  onClick?: never;
  href?: never;
  items?: never;
};

type DropdownMenuItemType =
  | DropdownMenuActionItem
  | DropdownMenuLinkItem
  | DropdownMenuSubMenuItem
  | DropdownMenuSeparatorItem;

interface DropdownMenuProps {
  items: DropdownMenuItemType[];
  children: React.ReactNode;
  label?: string;
}

const isInternalLink = (href: string) => href.startsWith("/");

export const DropdownMenu = ({ items, children, label }: DropdownMenuProps) => {
  // Renderiza recursivamente los ítems y submenús
  const renderMenuItems = (menuItems: DropdownMenuItemType[]) =>
    menuItems.map((item, index) => {
      if (item.type === "separator") {
        return <DropdownMenuSeparator key={`separator-${index}`} />;
      }
      if (item.type === "submenu") {
        return (
          <DropdownMenuSub key={item.label}>
            <DropdownMenuSubTrigger inset={item.inset} disabled={item.disabled}>
              {item.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="min-w-64">
                {renderMenuItems(item.items)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        );
      }
      if (item.type === "link") {
        if (isInternalLink(item.href)) {
          return (
            <Link href={item.href} passHref legacyBehavior key={item.label}>
              <DropdownMenuItem asChild inset={item.inset} disabled={item.disabled}>
                <a tabIndex={-1}>{item.label}</a>
              </DropdownMenuItem>
            </Link>
          );
        } else {
          return (
            <DropdownMenuItem asChild key={item.label} inset={item.inset} disabled={item.disabled}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                {item.label}
              </a>
            </DropdownMenuItem>
          );
        }
      }
      // Ítem tipo acción
      return (
        <DropdownMenuItem
          key={item.label}
          inset={item.inset}
          onClick={item.disabled ? undefined : item.onClick}
          disabled={item.disabled}
        >
          {item.label}
        </DropdownMenuItem>
      );
    });

  return (
    <ShadDropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        <DropdownMenuGroup>{renderMenuItems(items)}</DropdownMenuGroup>
      </DropdownMenuContent>
    </ShadDropdownMenu>
  );
};

export type { DropdownMenuItemType };
