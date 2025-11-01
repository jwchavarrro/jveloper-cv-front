import React from "react";

// Importacion de utils
import { cn } from "@/lib/utils";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "small"
    | "lead"
    | "large";
  color?: "primary" | "secondary" | "muted" | "destructive" | "success" | "warning";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  color = "primary",
  weight = "normal",
  align = "left",
  className = "",
  as,
}) => {
  const variantClasses = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-title",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-title",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-title",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight font-title",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight font-title",
    h6: "scroll-m-20 text-base font-semibold tracking-tight font-title",
    body: "leading-7 [&:not(:first-child)]:mt-6 font-text",
    lead: "text-xl text-muted-foreground font-text",
    large: "text-lg font-semibold font-text",
    caption: "text-sm font-medium leading-none font-text",
    small: "text-sm font-medium font-text",
  };

  const colorClasses = {
    primary: "text-foreground",
    secondary: "text-secondary-foreground",
    muted: "text-muted-foreground",
    destructive: "text-destructive",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const Component = (as ||
    (variant.startsWith("h") ? variant : "p")) as keyof React.JSX.IntrinsicElements;

  return (
    <Component
      className={cn(
        variantClasses[variant],
        colorClasses[color],
        weightClasses[weight],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </Component>
  );
};
