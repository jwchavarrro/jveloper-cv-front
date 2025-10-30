/**
 * @file fragments/desktop-icons.tsx
 * @description Fragmento de iconos del escritorio
 * @module fragments/desktop-icons
 */


// Import of utilities
import { PAGE_WINDOWS } from '@/components/pages/windows';

export const DesktopIcons = () => {

    /**
     * @constant desktopIcons
     * @description Iconos del escritorio
     * @type {Array<{name: string, icon: string, type: string}>}
     */
    const desktopIcons = PAGE_WINDOWS.FRAGMENTS.DESKTOP.ICONS;
  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-4">
          {desktopIcons?.length > 0 && desktopIcons?.map((icon, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center rounded-lg p-2 transition-all duration-200 hover:bg-white/10"
            >
              <div className="mb-1 text-4xl transition-transform duration-200 group-hover:scale-110">
                {icon.icon}
              </div>
              <span className="text-center text-xs font-medium text-white group-hover:text-blue-200">
                {icon.name}
              </span>
            </div>
          ))}
    </div>
  )
}