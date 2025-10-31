import React from "react";

import { Program } from "@/components/pages/components/program";

export const CVProgram = () => {
  return (
    <Program
      open={true}
      onOpenChange={() => {}}
      header={<div>Título de la ventana</div>}
      footer={<div>Pie de página</div>}
    >
      Contenido
    </Program>
  );
};
