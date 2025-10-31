import { render, screen } from "@testing-library/react";
import { Card } from "@/components/atomic-desing/molecules/card";

describe("Card (molecule)", () => {
  it("renderiza contenido children", () => {
    render(<Card>contenido</Card>);
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });

  it("muestra title y subtitle cuando se proveen", () => {
    render(
      <Card title="Titulo" subtitle="Subtitulo">
        x
      </Card>,
    );
    expect(screen.getByText("Titulo")).toBeInTheDocument();
    expect(screen.getByText("Subtitulo")).toBeInTheDocument();
  });

  it("aplica variante elevated", () => {
    render(<Card variant="elevated">x</Card>);
    const el = screen.getByText("x").closest("div") as HTMLElement;
    expect(el).toHaveClass("shadow-md");
  });

  it("usa estructura shadcn cuando useShadcnStructure=true", () => {
    render(
      <Card useShadcnStructure title="T" subtitle="S">
        c
      </Card>,
    );
    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.getByText("c")).toBeInTheDocument();
  });
});
