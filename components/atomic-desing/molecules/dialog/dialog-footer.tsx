/**
 * Pie de diálogo configurable.
 * Muestra footer personalizado o botones por defecto.
 *
 * Ejemplo uso:
 * <DialogFooter showCancel onConfirm={fn} />
 * <DialogFooter footer={<Algo />} />
 */

import { memo } from 'react';
import { DialogFooter as ShadcnDialogFooter } from '@/components/ui/dialog';
import { DialogActions, type DialogActionsProps } from './dialog-actions';

export interface DialogFooterProps extends DialogActionsProps {
  footer?: React.ReactNode;
}

export const DialogFooter = memo<DialogFooterProps>(
  ({
    footer,
    showCancel = true,
    showConfirm = true,
    cancelText = 'Cancelar',
    confirmText = 'Confirmar',
    onCancel,
    onConfirm,
    ...buttonProps
  }) => {
    // Retornar null si no hay contenido para mostrar
    if (!showCancel && !showConfirm && !footer) {
      return null;
    }

    // Preparar props de acción
    const actionProps: DialogActionsProps = {
      showCancel,
      showConfirm,
      cancelText,
      confirmText,
      onCancel,
      onConfirm,
      ...buttonProps,
    };

    return (
      <ShadcnDialogFooter>
        {footer || <DialogActions {...actionProps} />}
      </ShadcnDialogFooter>
    );
  }
);

DialogFooter.displayName = 'DialogFooter';
