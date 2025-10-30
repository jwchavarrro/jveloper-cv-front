import { render, screen } from "@testing-library/react";
import { Typography } from "@/components/atomic-desing/atoms/typography";

describe("Typography Component", () => {
  it("renders with children", () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as h1 by default for heading variants", () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Heading 1");
  });

  it("renders as h2 for h2 variant", () => {
    render(<Typography variant="h2">Heading 2</Typography>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Heading 2");
  });

  it("renders as paragraph for body variant", () => {
    render(<Typography variant="body">Body text</Typography>);
    const paragraph = screen.getByText("Body text");
    expect(paragraph.tagName).toBe("P");
  });

  it("applies font-title class for h1 variant", () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("font-title");
  });

  it("applies font-text class for body variant", () => {
    render(<Typography variant="body">Body text</Typography>);
    const paragraph = screen.getByText("Body text");
    expect(paragraph).toHaveClass("font-text");
  });

  it("applies color classes correctly", () => {
    render(<Typography color="muted">Muted text</Typography>);
    const element = screen.getByText("Muted text");
    expect(element).toHaveClass("text-muted-foreground");
  });

  it("applies weight classes correctly", () => {
    render(<Typography weight="bold">Bold text</Typography>);
    const element = screen.getByText("Bold text");
    expect(element).toHaveClass("font-bold");
  });

  it("applies alignment classes correctly", () => {
    render(<Typography align="center">Centered text</Typography>);
    const element = screen.getByText("Centered text");
    expect(element).toHaveClass("text-center");
  });

  it("renders with custom element using as prop", () => {
    render(
      <Typography as="span" variant="h1">
        Custom element
      </Typography>,
    );
    const element = screen.getByText("Custom element");
    expect(element.tagName).toBe("SPAN");
  });

  it("applies custom className", () => {
    render(<Typography className="custom-class">Custom</Typography>);
    const element = screen.getByText("Custom");
    expect(element).toHaveClass("custom-class");
  });

  it("renders small variant correctly", () => {
    render(<Typography variant="small">Small text</Typography>);
    const element = screen.getByText("Small text");
    expect(element).toHaveClass("text-sm", "font-text");
  });

  it("renders caption variant correctly", () => {
    render(<Typography variant="caption">Caption text</Typography>);
    const element = screen.getByText("Caption text");
    expect(element).toHaveClass("text-sm", "leading-none", "font-text");
  });
});
