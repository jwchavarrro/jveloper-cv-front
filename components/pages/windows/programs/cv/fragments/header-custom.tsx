import React from "react";

// Import of components custom
import { Typography } from "@/components/atomic-desing/atoms";

export const HeaderCustom = () => {
  return (
    <div className="flex items-center gap-2">
      <Typography variant="small" weight="bold" color="muted" className="bg-primary rounded p-1">
        CV
      </Typography>
      <Typography variant="small" color="muted">
        CV - John Chavarro Urrea
      </Typography>
    </div>
  );
};
