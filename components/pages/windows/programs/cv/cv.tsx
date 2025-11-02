/**
 * @file cv.tsx
 * @description Componente para la ventana CV
 * @module components/pages/windows/programs/cv/cv
 */

// Import of components custom
import { Program } from "@/components/pages/components/program";

// Import of fragments
import { HeaderCustom, FooterCustom } from "./fragments";

export const CVProgram = () => {
  return (
    <Program
      open={true}
      onOpenChange={() => {}}
      headerCustom={<HeaderCustom />}
      footerCustom={<FooterCustom />}
    >
      Contenido
    </Program>
  );
};
