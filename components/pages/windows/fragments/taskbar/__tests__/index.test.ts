/**
 * @file taskbar/index.test.ts
 * @description Tests para las exportaciones del módulo taskbar
 */

import { StartMenu, Taskbar } from "../index";

describe("taskbar/index", () => {
  it("exporta StartMenu correctamente", () => {
    expect(StartMenu).toBeDefined();
    expect(typeof StartMenu).toBe("function");
  });

  it("exporta Taskbar correctamente", () => {
    expect(Taskbar).toBeDefined();
    expect(typeof Taskbar).toBe("function");
  });
});

