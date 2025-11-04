import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "@/components/atomic-desing/molecules/card";

describe("Card (molecule)", () => {
  it("renderiza contenido children", () => {
    render(<Card>contenido</Card>);
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });

  it("muestra title y subtitle cuando se proveen", () => {
    render(
      <Card title="Titulo" subtitle="Subtitulo">
        contenido
      </Card>,
    );
    expect(screen.getByText("Titulo")).toBeInTheDocument();
    expect(screen.getByText("Subtitulo")).toBeInTheDocument();
  });

  it("muestra solo title cuando solo se proporciona title", () => {
    render(<Card title="Titulo">contenido</Card>);
    expect(screen.getByText("Titulo")).toBeInTheDocument();
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });

  it("muestra solo subtitle cuando solo se proporciona subtitle", () => {
    render(<Card subtitle="Subtitulo">contenido</Card>);
    expect(screen.getByText("Subtitulo")).toBeInTheDocument();
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });

  describe("Variantes", () => {
    it("aplica variante elevated", () => {
      render(<Card variant="elevated">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("shadow-md");
    });

    it("aplica variante outlined", () => {
      render(<Card variant="outlined">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("border-2");
    });

    it("aplica variante filled", () => {
      render(<Card variant="filled">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("bg-muted/50");
    });

    it("aplica variante default (sin clases especiales)", () => {
      render(<Card variant="default">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toBeInTheDocument();
    });
  });

  describe("Padding", () => {
    it("aplica padding none", () => {
      render(<Card padding="none">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("p-0");
    });

    it("aplica padding sm", () => {
      render(<Card padding="sm">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("p-3");
    });

    it("aplica padding md por defecto", () => {
      render(<Card>contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("p-6");
    });

    it("aplica padding lg", () => {
      render(<Card padding="lg">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("p-8");
    });
  });

  describe("Interactividad", () => {
    it("maneja onClick correctamente", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(
        <Card onClick={handleClick} title="Titulo">
          contenido
        </Card>,
      );

      const card = screen.getByText("contenido").closest("div") as HTMLElement;
      await user.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("aplica cursor-pointer cuando tiene onClick", () => {
      render(
        <Card onClick={() => {}} title="Titulo">
          contenido
        </Card>,
      );
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("cursor-pointer");
    });

    it("aplica hover classes cuando hover es true", () => {
      render(
        <Card hover title="Titulo">
          contenido
        </Card>,
      );
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("hover:shadow-lg", "hover:scale-[1.02]", "cursor-pointer");
    });
  });

  describe("Estructura", () => {
    it("usa estructura shadcn cuando useShadcnStructure=true", () => {
      render(
        <Card useShadcnStructure title="T" subtitle="S">
          contenido
        </Card>,
      );
      expect(screen.getByText("T")).toBeInTheDocument();
      expect(screen.getByText("S")).toBeInTheDocument();
      expect(screen.getByText("contenido")).toBeInTheDocument();
    });

    it("usa estructura personalizada cuando useShadcnStructure=false", () => {
      render(
        <Card title="Titulo" subtitle="Subtitulo">
          contenido
        </Card>,
      );
      expect(screen.getByText("Titulo")).toBeInTheDocument();
      expect(screen.getByText("Subtitulo")).toBeInTheDocument();
      expect(screen.getByText("contenido")).toBeInTheDocument();
    });
  });

  describe("Customización", () => {
    it("aplica className personalizada", () => {
      render(<Card className="custom-class">contenido</Card>);
      const el = screen.getByText("contenido").closest("div") as HTMLElement;
      expect(el).toHaveClass("custom-class");
    });
  });
});
