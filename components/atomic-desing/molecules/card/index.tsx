import React from "react";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Importacion de atoms
import { Typography } from "@/components/atomic-desing/atoms";

// Importacion de utilities
import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: "default" | "elevated" | "outlined" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  // Props adicionales para usar CardHeader, CardContent, etc.
  useShadcnStructure?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  variant = "default",
  padding = "md",
  className = "",
  onClick,
  hover = false,
  useShadcnStructure = false,
}) => {
  const variantClasses = {
    default: "",
    elevated: "shadow-md",
    outlined: "border-2",
    filled: "bg-muted/50",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover ? "hover:shadow-lg hover:scale-[1.02] cursor-pointer" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  // Si se especifica usar la estructura de shadcn/ui
  if (useShadcnStructure) {
    return (
      <ShadcnCard
        className={cn(variantClasses[variant], hoverClasses, clickableClasses, className)}
        onClick={onClick}
      >
        {(title || subtitle) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={paddingClasses[padding]}>{children}</CardContent>
      </ShadcnCard>
    );
  }

  // Estructura personalizada de Atomic Design
  return (
    <ShadcnCard
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        clickableClasses,
        className,
      )}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className="mb-4 space-y-1">
          {title && (
            <Typography variant="h5" className="mb-1">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body" color="muted">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {children}
    </ShadcnCard>
  );
};
