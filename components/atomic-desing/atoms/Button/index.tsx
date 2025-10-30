"use client";

import React from "react";

import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

// Importacion de utils
import { cn } from "@/lib/utils";

// Extendemos las props de shadcn/ui para mantener compatibilidad
export interface ButtonProps extends ShadcnButtonProps {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <ShadcnButton {...props} disabled={disabled || loading} className={cn(className)}>
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
    </ShadcnButton>
  );
};
