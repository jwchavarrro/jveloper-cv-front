/**
 * Encabezado para diálogos.
 *
 * Muestra un título y una descripción opcional.
 * Los estilos dependen del tema y Tailwind.
 *
 * Ejemplo:
 * <DialogHeader title="Título" description="Descripción" />
 *
 * @param {string} [title] - Título
 * @param {string} [description] - Descripción
 * @returns {JSX.Element | null}
 */

import {
  DialogHeader as ShadcnDialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Typography } from "@/components/atomic-desing/atoms";


export interface DialogHeaderProps {
  title?: string;
  description?: string;
}

export const DialogHeader = ({ title, description }: DialogHeaderProps) => {
  // Retornar null si no hay título ni descripción
  if (!title && !description) return null;

  return (
    <ShadcnDialogHeader>
      {title && (
        <DialogTitle>
          <Typography variant="h3" color="primary" weight="semibold">
            {title}
          </Typography>
        </DialogTitle>
      )}
      {description && (
        <DialogDescription id='dialog-description'>
          <Typography variant="caption" color="muted">
            {description}
          </Typography>
        </DialogDescription>
      )}
    </ShadcnDialogHeader>
  );
};
