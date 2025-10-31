/**
 * DialogActions
 * 
 * Botones de confirmar y cancelar para diálogos modales. Permite personalizar textos,
 * visibilidad y acciones de ambos botones.
 * 
 * Props principales:
 * - extraClassName: clases extra al contenedor.
 * - showCancel/showConfirm: mostrar botones.
 * - cancelText/confirmText: textos personalizados.
 * - onCancel/onConfirm: acciones de click.
 * 
 * Ejemplo:
 * <DialogActions confirmText="Ok" onConfirm={accion} />
 */

// Import of utilities
import { cn } from '@/lib/utils';

// Import of components custom
import {
  Button,
  type ButtonProps,
} from '@/components/atomic-desing/atoms/button/button';

export interface DialogActionsProps
  extends Omit<ButtonProps, 'text' | 'onClick'> {
  extraClassName?: string;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const DialogActions = ({
  extraClassName,
  showCancel = true,
  showConfirm = true,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
  onCancel,
  onConfirm,
  ...buttonProps
}: DialogActionsProps) => {
  return (
    <div
      className={cn('flex items-center justify-center gap-5', extraClassName)}
    >
      {showCancel && (
        <Button variant='outline' onClick={onCancel} >{cancelText}</Button>
      )}
      {showConfirm && (
        <Button
          variant='secondary'
          onClick={onConfirm}
          {...buttonProps}
        >
          {confirmText}
        </Button>
      )}
    </div>
  );
};
