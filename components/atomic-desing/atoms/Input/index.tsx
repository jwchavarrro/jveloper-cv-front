"use client";

import React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";

// Importacion de utils
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Props adicionales específicas de Atomic Design
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  id,
  required,
  ...props
}: InputProps) => {
  // Use React.useId to generate a stable unique ID for input
  const reactId = React.useId();
  const inputId = id || `input-${reactId}`;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 transform">
            {leftIcon}
          </div>
        )}

        <ShadcnInput
          {...props}
          id={inputId}
          required={required}
          className={cn(
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error && "border-destructive focus-visible:ring-destructive",
            className,
          )}
        />

        {rightIcon && (
          <div className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 transform">
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className="text-destructive text-sm">{error}</p>}

      {helperText && !error && <p className="text-muted-foreground text-sm">{helperText}</p>}
    </div>
  );
};
