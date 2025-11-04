/**
 * @file molecules/index.test.ts
 * @description Tests para las exportaciones del módulo molecules
 */

import {
  Card,
  BaseDialog,
  DialogActions,
  DialogFooter,
  DialogHeader,
  DropdownMenu,
  type CardProps,
  type BaseDialogProps,
  type DialogActionsProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DropdownMenuItemType,
} from "../index";

describe("molecules/index", () => {
  it("exporta todos los componentes correctamente", () => {
    expect(Card).toBeDefined();
    expect(BaseDialog).toBeDefined();
    expect(DialogActions).toBeDefined();
    expect(DialogFooter).toBeDefined();
    expect(DialogHeader).toBeDefined();
    expect(DropdownMenu).toBeDefined();
  });

  it("exporta todos los tipos correctamente", () => {
    // Solo verificamos que los tipos existen (TypeScript se encarga de validarlos)
    const cardProps: CardProps = {} as CardProps;
    const baseDialogProps: BaseDialogProps = {} as BaseDialogProps;
    const dialogActionsProps: DialogActionsProps = {} as DialogActionsProps;
    const dialogFooterProps: DialogFooterProps = {} as DialogFooterProps;
    const dialogHeaderProps: DialogHeaderProps = {} as DialogHeaderProps;
    const dropdownMenuItem: DropdownMenuItemType = {
      label: "Test",
      type: "action",
      onClick: () => {},
    };

    expect(cardProps).toBeDefined();
    expect(baseDialogProps).toBeDefined();
    expect(dialogActionsProps).toBeDefined();
    expect(dialogFooterProps).toBeDefined();
    expect(dialogHeaderProps).toBeDefined();
    expect(dropdownMenuItem).toBeDefined();
  });
});

