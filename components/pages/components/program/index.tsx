"use client";

import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Minus, Maximize2, Minimize2, X } from "lucide-react";


export const Program = () => {

  // Estados de la ventana
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);


  /**
   * @description Minimizar la ventana
   */
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  /**
   * @description Maximizar la ventana
   */       
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  /**
   * @description Cerrar la ventana
   */
  const handleClose = () => {
    setIsMinimized(false);
    setIsMaximized(false);
    setOpen(false);
  };

  /**
   * @description Si está minimizado, no renderizar el modal
   */
  if (isMinimized) {
    return null;
  }

  return (
    <Dialog 
      open={open} 
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          // Solo resetear estados cuando se cierra, setOpen ya se maneja por onOpenChange
          setIsMinimized(false);
          setIsMaximized(false);
        }
        setOpen(newOpen);
      }}
    >
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] border border-border bg-card shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            isMaximized && "left-0 top-0 translate-x-0 translate-y-0 w-full h-full max-w-full"
          )}
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {/* Barra de título */}
          <div className="flex h-8 items-center justify-between border-b border-border bg-secondary px-2">
            {/* Área izquierda vacía */}
            <div className="flex-1" />

            {/* Botones de control */}
            <div className="flex items-center gap-1">
              {/* Botón Minimizar */}
              <button
                onClick={handleMinimize}
                className="flex h-6 w-6 items-center justify-center text-foreground transition-colors hover:bg-accent"
                aria-label="Minimizar"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>

              {/* Botón Maximizar/Restaurar */}
              <button
                onClick={handleMaximize}
                className="flex h-6 w-6 items-center justify-center text-foreground transition-colors hover:bg-accent"
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
                className="flex h-6 w-6 items-center justify-center text-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
                aria-label="Cerrar"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Área de contenido */}
          <div className="min-h-96 h-full bg-background">
            {/* Aquí irá el contenido */}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};
