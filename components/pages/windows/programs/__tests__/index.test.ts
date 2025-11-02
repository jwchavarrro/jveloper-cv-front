/**
 * @file programs/index.test.ts
 * @description Tests para las exportaciones del módulo programs
 */

// Mock de react-resizable-panels antes de importar CVProgram
jest.mock("@/components/ui/resizable", () => ({
  ResizablePanelGroup: jest.fn(),
  ResizablePanel: jest.fn(),
  ResizableHandle: jest.fn(),
}));

jest.mock("@/components/pages/components/program", () => ({
  Program: jest.fn(),
}));

import { CVProgram } from "../index";

describe("programs/index", () => {
  it("exporta CVProgram correctamente", () => {
    expect(CVProgram).toBeDefined();
    expect(typeof CVProgram).toBe("function");
  });
});

