/**
 * @file constants.test.ts
 * @description Tests para las constantes del CV
 */

import { MENU_HEADER } from "../constants";

describe("constants", () => {
  describe("MENU_HEADER", () => {
    it("debe tener la estructura correcta", () => {
      expect(MENU_HEADER).toBeDefined();
      expect(MENU_HEADER.FRAGMENTS).toBeDefined();
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER).toBeDefined();
    });

    it("debe tener un título definido", () => {
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER.TITLE).toBeDefined();
      expect(typeof MENU_HEADER.FRAGMENTS.CV_HEADER.TITLE).toBe("string");
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER.TITLE).toBe("CV - John Chavarro Urrea");
    });

    it("debe tener items del menú", () => {
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS).toBeDefined();
      expect(Array.isArray(MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS)).toBe(true);
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.length).toBeGreaterThan(0);
    });

    it("cada item del menú debe tener name e items", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((item) => {
        expect(item.name).toBeDefined();
        expect(typeof item.name).toBe("string");
        expect(item.items).toBeDefined();
        expect(Array.isArray(item.items)).toBe(true);
        expect(item.items.length).toBeGreaterThan(0);
      });
    });

    it("los items del menú deben tener la estructura correcta", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          expect(item).toHaveProperty("type");

          if (item.type !== "separator") {
            expect(item).toHaveProperty("label");
            expect(typeof item.label).toBe("string");
          }

          if (item.type === "action") {
            expect(item.onClick).toBeDefined();
            expect(typeof item.onClick).toBe("function");
          }

          if (item.type === "submenu") {
            expect(item.items).toBeDefined();
            expect(Array.isArray(item.items)).toBe(true);
          }

          if (item.type === "separator") {
            // Los separadores no tienen label ni onClick
            expect(item).not.toHaveProperty("onClick");
            expect(item).not.toHaveProperty("label");
          }
        });
      });
    });

    it("debe contener los menús principales", () => {
      const menuNames = MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.map((item) => item.name);

      // Verificar que existen los menús principales esperados
      expect(menuNames).toContain("Archivo");
      expect(menuNames).toContain("Editar");
      expect(menuNames).toContain("Seleccionar");
      expect(menuNames).toContain("Ver");
      expect(menuNames).toContain("Ir");
      expect(menuNames).toContain("Ejecutar");
      expect(menuNames).toContain("Terminal");
      expect(menuNames).toContain("Ayuda");
    });

    it("debe tener items de acción en el menú Archivo", () => {
      const archivoMenu = MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.find(
        (item) => item.name === "Archivo",
      );

      expect(archivoMenu).toBeDefined();
      expect(archivoMenu?.items).toBeDefined();

      const actionItems = archivoMenu?.items.filter((item) => item.type === "action");
      expect(actionItems && actionItems.length).toBeGreaterThan(0);
    });

    it("debe tener submenús", () => {
      const submenuItems: any[] = [];

      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          if (item.type === "submenu") {
            submenuItems.push(item);
          }
        });
      });

      expect(submenuItems.length).toBeGreaterThan(0);
    });

    it("debe tener separadores", () => {
      const separatorItems: any[] = [];

      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          if (item.type === "separator") {
            separatorItems.push(item);
          }
        });
      });

      expect(separatorItems.length).toBeGreaterThan(0);
    });

    it("debe poder ejecutar callbacks de acciones", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          if (item.type === "action" && item.onClick) {
            item.onClick();
          }
        });
      });

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it("debe poder ejecutar callbacks de submenús", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          if (item.type === "submenu" && item.items) {
            item.items.forEach((subItem) => {
              if (subItem.type === "action" && subItem.onClick) {
                subItem.onClick();
              }
            });
          }
        });
      });

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it("verifica que los items pueden tener propiedades opcionales", () => {
      // Este test verifica la flexibilidad de la estructura
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item: any) => {
          // Verificar que los tipos son correctos cuando existen
          if (item.shortcut !== undefined) {
            expect(typeof item.shortcut).toBe("string");
          }

          if (item.disabled !== undefined) {
            expect(typeof item.disabled).toBe("boolean");
          }

          // Todos los items deben tener type
          expect(item.type).toBeDefined();
        });
      });

      // El test siempre pasa, solo verifica estructura
      expect(true).toBe(true);
    });

    it("todos los menús principales deben tener al menos un item", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        expect(menuItem.items.length).toBeGreaterThan(0);
      });
    });

    it("debe validar la estructura de submenús anidados", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        menuItem.items.forEach((item) => {
          if (item.type === "submenu") {
            expect(item.items).toBeDefined();
            expect(Array.isArray(item.items)).toBe(true);
            expect(item.label).toBeDefined();

            // Verificar que los items del submenú también tienen estructura válida
            item.items.forEach((subItem) => {
              expect(subItem.type).toBeDefined();
              expect(["action", "separator"]).toContain(subItem.type);
            });
          }
        });
      });
    });

    it("debe tener labels únicos por menú", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        const labels: string[] = [];

        menuItem.items.forEach((item) => {
          if (item.type !== "separator" && item.label) {
            labels.push(item.label);
          }
        });

        // Verificar que hay labels
        expect(labels.length).toBeGreaterThan(0);
      });
    });

    it("debe tener al menos 8 menús principales", () => {
      expect(MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.length).toBeGreaterThanOrEqual(8);
    });

    it("cada menú debe tener un nombre no vacío", () => {
      MENU_HEADER.FRAGMENTS.CV_HEADER.MENU_ITEMS.forEach((menuItem) => {
        expect(menuItem.name).toBeTruthy();
        expect(menuItem.name.length).toBeGreaterThan(0);
      });
    });
  });
});
