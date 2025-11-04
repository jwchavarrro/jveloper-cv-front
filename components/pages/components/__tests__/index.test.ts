/**
 * @file components/index.test.ts
 * @description Tests para las exportaciones del módulo components
 */

import { Program } from "../index";

describe("components/index", () => {
  it("exporta Program correctamente", () => {
    expect(Program).toBeDefined();
    expect(typeof Program).toBe("function");
  });
});
