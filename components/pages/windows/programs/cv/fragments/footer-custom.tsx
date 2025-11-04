/**
 * @file footer-custom.tsx
 * @description Footer personalizado para la ventana CV
 * @module components/pages/windows/programs/cv/fragments/footer-custom
 */

// Import of components custom
import { Typography } from "@/components/atomic-desing/atoms";

export const FooterCustom = () => {
  return (
    <div className="flex items-center gap-2">
      <Typography variant="paragraph" color="muted">
        CV - John Chavarro Urrea
      </Typography>
    </div>
  );
};
