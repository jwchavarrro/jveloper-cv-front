/**
 * @file program/index.tsx
 * @description Componente de ventana de programa
 * @module components/pages/components/program/index.tsx
 */

"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Minus, Maximize2, Minimize2, X } from "lucide-react";

// Import of utilities
import { cn } from "@/lib/utils";

interface ProgramProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

enum WindowState {
  IDLE = "idle",
  NORMAL = "normal",
  MINIMIZED = "minimized",
  MAXIMIZED = "maximized",
  CLOSED = "closed",
}

export const Program = ({ children, open: externalOpen, onOpenChange }: ProgramProps) => {
  // Estado único que maneja los 3 estados posibles
  const [windowState, setWindowState] = useState<WindowState>(WindowState.IDLE);

  // Sincronizar con prop open (ahora requerida)
  const currentState =
    externalOpen && windowState === WindowState.IDLE
      ? WindowState.NORMAL
      : !externalOpen
        ? WindowState.CLOSED
        : windowState;

  /**
   * @description Minimizar la ventana
   */
  const handleMinimize = () => {
    setWindowState(WindowState.MINIMIZED);
    onOpenChange(false);
  };

  /**
   * @description Maximizar la ventana
   */
  const handleMaximize = () => {
    setWindowState((prev) =>
      prev === WindowState.MAXIMIZED ? WindowState.NORMAL : WindowState.MAXIMIZED,
    );
  };

  /**
   * @description Cerrar la ventana
   */
  const handleClose = () => {
    setWindowState(WindowState.CLOSED);
    onOpenChange(false);
  };

  /**
   * @description Si está idle, minimizado o cerrado, no renderizar el modal
   */
  if (
    currentState === WindowState.IDLE ||
    currentState === WindowState.MINIMIZED ||
    currentState === WindowState.CLOSED
  ) {
    return null;
  }

  const isMaximized = currentState === WindowState.MAXIMIZED;

  return (
    <Dialog
      open={externalOpen}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          setWindowState(WindowState.CLOSED);
          onOpenChange(false);
        }
      }}
    >
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogPrimitive.Content
          className={cn(
            "border-border bg-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] border shadow-2xl",
            isMaximized && "top-0 left-0 h-full w-full max-w-full translate-x-0 translate-y-0",
          )}
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {/* Barra de título */}
          <div className="border-border bg-secondary flex h-8 items-center justify-between border-b px-2">
            {/* Área izquierda vacía */}
            <div className="flex-1" />

            {/* Botones de control */}
            <div className="flex items-center gap-1">
              {/* Botón Minimizar */}
              <button
                onClick={handleMinimize}
                className="text-foreground hover:bg-accent flex h-6 w-6 items-center justify-center transition-colors"
                aria-label="Minimizar"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>

              {/* Botón Maximizar/Restaurar */}
              <button
                onClick={handleMaximize}
                className="text-foreground hover:bg-accent flex h-6 w-6 items-center justify-center transition-colors"
                aria-label={isMaximized ? "Restaurar" : "Maximizar"}
              >
                {isMaximized ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>

              {/* Botón Cerrar */}
              <button
                onClick={handleClose}
                className="text-foreground hover:bg-destructive hover:text-destructive-foreground flex h-6 w-6 items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Área de contenido */}
          <div className="bg-background h-full min-h-96">{children}</div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};
