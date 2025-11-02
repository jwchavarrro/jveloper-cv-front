import React from "react";

// Import of components custom
import { Typography } from "@/components/atomic-desing/atoms";
import { DropdownMenu } from "@/components/atomic-desing/molecules/menus/dropdown-menu";

// Import of utilities
import { MENU_HEADER } from "../utils/constants";

export const HeaderCustom = () => {
  /**
   * @constant MENU_HEADER_CV
   * @description Constantes para el header del CV
   * @type {Object}
   */
  const { TITLE, MENU_ITEMS } = MENU_HEADER.FRAGMENTS.CV_HEADER;

  return (
    <div className="flex items-center gap-5">
      {/* Columna #1 */}
      <div className="flex items-center gap-2">
        <Typography className="rounded p-1">🔷</Typography>
        <div className="relative flex items-center gap-4">
          {MENU_ITEMS.map((item) => (
            <DropdownMenu key={item.name} items={item.items}>
              <button type="button" className="hover:cursor-pointer focus:outline-none">
                <Typography variant="paragraph" color="muted">
                  {item.name}
                </Typography>
              </button>
            </DropdownMenu>
          ))}
        </div>
      </div>

      {/* Columna #2 */}
      <div className="w-1/2">
        <Typography variant="paragraph" color="muted" align="center">
          {TITLE}
        </Typography>
      </div>
    </div>
  );
};
