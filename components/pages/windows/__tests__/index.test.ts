/**
 * @file windows/index.test.ts
 * @description Tests para las exportaciones del módulo windows
 */

import { PAGE_WINDOWS, DesktopIcons, Taskbar, StartMenu } from "../index";

describe("windows/index", () => {
  it("exporta PAGE_WINDOWS correctamente", () => {
    expect(PAGE_WINDOWS).toBeDefined();
  });

  it("exporta DesktopIcons correctamente", () => {
    expect(DesktopIcons).toBeDefined();
    expect(typeof DesktopIcons).toBe("function");
  });

  it("exporta Taskbar correctamente", () => {
    expect(Taskbar).toBeDefined();
    expect(typeof Taskbar).toBe("function");
  });

  it("exporta StartMenu correctamente", () => {
    expect(StartMenu).toBeDefined();
    expect(typeof StartMenu).toBe("function");
  });
});

