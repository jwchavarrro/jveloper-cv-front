/**
 * @file fragments/start-menu.tsx
 * @description Fragmento actualizado del menú de inicio
 * @module fragments/start-menu
 */

"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PowerIcon } from "lucide-react";

// Import of components
import { DropdownMenu } from "@/components/atomic-desing/molecules";

// Import of utilities
import { cn } from "@/lib/utils";
import { PAGE_WINDOWS } from "@/components/pages/windows";

interface StartMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogPrimitive.Content
          className={cn(
            "border-border bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom-4 data-[state=open]:slide-in-from-bottom-4 fixed bottom-12 left-4 z-50 mb-4 h-2/4 w-1/4 overflow-auto rounded-lg border shadow-2xl",
          )}
        >
          <div className="relative h-full w-full">
            {/* Barra inferior de usuario */}
            <div className="bg-muted absolute bottom-0 left-0 h-20 w-full border-t px-10">
              <div className="flex h-full w-full items-center justify-between gap-3">
                {/* Usuario */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" alt="User" />
                    <AvatarFallback className="bg-foreground text-background">JV</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">jveloper</span>
                  </div>
                </div>
                {/* Botón de apagar */}
                <DropdownMenu items={PAGE_WINDOWS.FRAGMENTS.START_MENU.POWER_MENU_ITEMS}>
                  <button
                    className="hover:bg-accent flex items-center justify-center rounded-full p-2 transition"
                    aria-label="Abrir opciones de energía"
                  >
                    <PowerIcon className="text-foreground h-5 w-5" />
                  </button>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};
