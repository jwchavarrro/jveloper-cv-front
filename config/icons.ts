/**
 * @file icons.ts
 * @description Configuración de iconos utilizados en la aplicación
 * @module config/icons
 */

/**
 * @constant ICONS
 * @description Objeto que contiene todos los iconos utilizados en la aplicación
 *
 * @example
 * ```tsx
 * import { ICONS } from '@/config/icons';
 *
 * <Icon icon={ICONS.EYE} />
 * ```
 */

export const ICONS = {
  // Iconos de acciones
  CHECK: 'hugeicons:checkmark-square-02',
  EDIT: 'hugeicons:edit-04',
  DELETE: 'hugeicons:delete-02',
  UPLOAD: 'hugeicons:arrow-up-03',
  DOWNLOAD: 'hugeicons:arrow-down-03',

  // Iconos de estado
  CIRCLE: 'material-symbols:circle',
  ERROR_CIRCLE: 'hugeicons:cancel-circle',
  INFORMATION: 'hugeicons:information-circle',
  LOADING: 'svg-spinners:ring-resize',

  // Iconos de visualización
  EYE: 'hugeicons:eye',
};
