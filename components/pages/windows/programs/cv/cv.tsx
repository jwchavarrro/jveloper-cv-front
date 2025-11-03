/**
 * @file cv.tsx
 * @description Componente para la ventana CV
 * @module components/pages/windows/programs/cv/cv
 */

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

// Import of components custom
import { Program } from "@/components/pages/components/program";
import { HeaderCustom, FooterCustom, SidebarPanelPrimary, Editor, IAPanel } from "./fragments";

export const CVProgram = () => {
  return (
    <Program
      open={false}
      onOpenChange={() => {}}
      headerCustom={<HeaderCustom />}
      footerCustom={<FooterCustom />}
    >
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel minSize={10} maxSize={20}>
          <SidebarPanelPrimary />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Editor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={10} maxSize={20}>
          <IAPanel />
        </ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
    </Program>
  );
};
