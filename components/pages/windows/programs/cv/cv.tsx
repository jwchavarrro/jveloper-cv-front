import React from "react";

// Import of components custom
import { Program } from "@/components/pages/components/program";

// Import of fragments
import { HeaderCustom } from "./fragments/header-custom";

export const CVProgram = () => {
  return (
    <Program
      open={true}
      onOpenChange={() => {}}
      headerCustom={<HeaderCustom />}
      footerCustom={<div>Pie de página</div>}
    >
      Contenido
    </Program>
  );
};
