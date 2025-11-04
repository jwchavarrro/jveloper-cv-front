import { render, screen } from "@testing-library/react";
import { LayoutPage } from "@/components/atomic-desing/template";

describe("LayoutPage (template)", () => {
  it("renderiza header, main y footer", () => {
    render(<LayoutPage header={<div>H</div>} main={<div>M</div>} footer={<div>F</div>} />);
    expect(screen.getByText("H")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
    expect(screen.getByText("F")).toBeInTheDocument();
  });

  describe("Estructura semántica", () => {
    it("renderiza elemento header semántico", () => {
      render(
        <LayoutPage header={<div>Header</div>} main={<div>Main</div>} footer={<div>Footer</div>} />,
      );
      const header = screen.getByText("Header").closest("header");
      expect(header).toBeInTheDocument();
      expect(header?.tagName).toBe("HEADER");
    });

    it("renderiza elemento main semántico", () => {
      render(
        <LayoutPage header={<div>Header</div>} main={<div>Main</div>} footer={<div>Footer</div>} />,
      );
      const main = screen.getByText("Main").closest("main");
      expect(main).toBeInTheDocument();
      expect(main?.tagName).toBe("MAIN");
    });

    it("renderiza elemento footer semántico", () => {
      render(
        <LayoutPage header={<div>Header</div>} main={<div>Main</div>} footer={<div>Footer</div>} />,
      );
      const footer = screen.getByText("Footer").closest("footer");
      expect(footer).toBeInTheDocument();
      expect(footer?.tagName).toBe("FOOTER");
    });

    it("aplica clases CSS correctas al contenedor", () => {
      const { container } = render(
        <LayoutPage header={<div>H</div>} main={<div>M</div>} footer={<div>F</div>} />,
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("flex", "h-screen", "flex-col");
    });

    it("aplica clases CSS correctas al header", () => {
      render(<LayoutPage header={<div>H</div>} main={<div>M</div>} footer={<div>F</div>} />);
      const header = screen.getByText("H").closest("header");
      expect(header).toHaveClass(
        "flex",
        "items-center",
        "justify-between",
        "border-b",
        "p-2",
        "px-5",
      );
    });

    it("aplica clases CSS correctas al main", () => {
      render(<LayoutPage header={<div>H</div>} main={<div>M</div>} footer={<div>F</div>} />);
      const main = screen.getByText("M").closest("main");
      expect(main).toHaveClass("flex-1");
    });

    it("aplica clases CSS correctas al footer", () => {
      render(<LayoutPage header={<div>H</div>} main={<div>M</div>} footer={<div>F</div>} />);
      const footer = screen.getByText("F").closest("footer");
      expect(footer).toHaveClass("h-10", "border-t");
    });
  });

  describe("Contenido", () => {
    it("renderiza contenido complejo en header", () => {
      render(
        <LayoutPage
          header={
            <div>
              <h1>Título</h1>
              <nav>Navegación</nav>
            </div>
          }
          main={<div>Main</div>}
          footer={<div>Footer</div>}
        />,
      );
      expect(screen.getByText("Título")).toBeInTheDocument();
      expect(screen.getByText("Navegación")).toBeInTheDocument();
    });

    it("renderiza contenido complejo en main", () => {
      render(
        <LayoutPage
          header={<div>Header</div>}
          main={
            <div>
              <section>Sección 1</section>
              <section>Sección 2</section>
            </div>
          }
          footer={<div>Footer</div>}
        />,
      );
      expect(screen.getByText("Sección 1")).toBeInTheDocument();
      expect(screen.getByText("Sección 2")).toBeInTheDocument();
    });

    it("renderiza contenido complejo en footer", () => {
      render(
        <LayoutPage
          header={<div>Header</div>}
          main={<div>Main</div>}
          footer={
            <div>
              <p>Copyright</p>
              <p>Links</p>
            </div>
          }
        />,
      );
      expect(screen.getByText("Copyright")).toBeInTheDocument();
      expect(screen.getByText("Links")).toBeInTheDocument();
    });
  });
});
